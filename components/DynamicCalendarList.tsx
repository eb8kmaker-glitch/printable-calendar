"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { SUPPORTED_COUNTRIES, MONTH_NAMES } from "@/lib/types";

// useLayoutEffect runs before sibling useEffects — used to pre-populate
// localStorage from URL params so DayCounter picks it up on first mount.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface Stored { date: string; start: string; }

export interface DynamicCalendarListProps {
  storageKey: string;
  maxMonths: number;
  /**
   * CALENDAR_YEARS, passed down from the server rather than imported here.
   * The month list is built from the visitor's clock and their target date, so
   * it can run past the years /calendar/[country]/[year]/[month] serves — those
   * links 404. Importing the constant would recompute it against the visitor's
   * clock too, which is the disagreement we're trying to avoid.
   */
  years: number[];
  /** Shown on the target month card badge, e.g. "Exam month" */
  badgeLabel: string;
  /** PDF headerText param, e.g. "Exam Countdown" */
  pdfHeaderText?: string;
  /** PDF targetLabel param, e.g. "Exam Day" */
  pdfTargetLabel?: string;
  /** Months to show when no date is set (default 6) */
  defaultMonths?: number;
  /** Shown below the section header when no date is set */
  noDateHint?: string;
  /** URL query param name to auto-apply date, e.g. "target" */
  urlParamName?: string;
}

function buildPdfUrl(
  country: string, year: number, month: number,
  targetDate?: string, headerText?: string, targetLabel?: string,
): string {
  const params = new URLSearchParams({
    country, year: String(year), month: String(month),
    size: "A4", orientation: "landscape", theme: "light",
  });
  if (targetDate && headerText && targetLabel) {
    params.set("headerText", headerText);
    params.set("targetDate", targetDate);
    params.set("targetLabel", targetLabel);
  }
  return `/api/pdf?${params.toString()}`;
}

/** Start month: next month if today >= 16th, otherwise this month */
function getStartMonth(now: Date): { year: number; month: number } {
  const y = now.getFullYear();
  const m = now.getMonth() + 1;
  if (now.getDate() >= 16) {
    return m === 12 ? { year: y + 1, month: 1 } : { year: y, month: m + 1 };
  }
  return { year: y, month: m };
}

interface MonthEntry { year: number; month: number; }
interface Computed {
  months: MonthEntry[];
  isCapped: boolean;
  totalMonths: number;
  targetYear: number;
  targetMonth: number;
}

function computeMonths(
  startYear: number, startMonth: number,
  targetDate: string | undefined,
  maxMonths: number, defaultMonths: number,
): Computed {
  if (!targetDate) {
    return {
      months: Array.from({ length: defaultMonths }, (_, i) => {
        const off = (startMonth - 1) + i;
        return { year: startYear + Math.floor(off / 12), month: (off % 12) + 1 };
      }),
      isCapped: false, totalMonths: defaultMonths, targetYear: 0, targetMonth: 0,
    };
  }
  const [tyStr, tmStr] = targetDate.split("-");
  const tYear = parseInt(tyStr), tMonth = parseInt(tmStr);
  const total = (tYear - startYear) * 12 + (tMonth - startMonth) + 1;
  const capped = Math.min(Math.max(total, 1), maxMonths);
  return {
    months: Array.from({ length: capped }, (_, i) => {
      const off = (startMonth - 1) + i;
      return { year: startYear + Math.floor(off / 12), month: (off % 12) + 1 };
    }),
    isCapped: total > maxMonths, totalMonths: total, targetYear: tYear, targetMonth: tMonth,
  };
}

function daysFromFirst(year: number, month: number, targetDate: string): number {
  const first = new Date(`${year}-${String(month).padStart(2, "0")}-01T12:00:00`);
  const target = new Date(`${targetDate}T12:00:00`);
  return Math.round((target.getTime() - first.getTime()) / 86400000);
}

export default function DynamicCalendarList({
  storageKey, maxMonths, years, badgeLabel,
  pdfHeaderText, pdfTargetLabel,
  defaultMonths = 6, noDateHint, urlParamName,
}: DynamicCalendarListProps) {
  const now = new Date();
  const { year: startYear, month: startMonth } = getStartMonth(now);

  const [targetDate, setTargetDate] = useState<string | undefined>(undefined);
  const [mounted, setMounted] = useState(false);
  const urlApplied = useRef(false);

  // Runs synchronously before any sibling useEffect (including DayCounter).
  // Writes URL param date to localStorage so DayCounter reads the correct value.
  useIsoLayoutEffect(() => {
    if (!urlParamName) return;
    try {
      const urlTarget = new URLSearchParams(window.location.search).get(urlParamName);
      if (urlTarget && /^\d{4}-\d{2}-\d{2}$/.test(urlTarget)) {
        urlApplied.current = true;
        localStorage.setItem(storageKey, JSON.stringify({
          date: urlTarget,
          start: new Date().toISOString().slice(0, 10),
        } as Stored));
        setTargetDate(urlTarget);
      }
    } catch { /* ignore */ }
  }, [storageKey, urlParamName]);

  useEffect(() => {
    setMounted(true);
    if (!urlApplied.current) {
      try {
        const raw = localStorage.getItem(storageKey);
        if (raw) {
          const parsed: Stored = JSON.parse(raw);
          if (parsed.date) setTargetDate(parsed.date);
        }
      } catch { /* ignore */ }
    }

    // Live-sync when DayCounter on the same page updates the date
    const handler = (e: Event) => {
      const { key, date } = (e as CustomEvent<{ key: string; date: string }>).detail;
      if (key === storageKey) setTargetDate(date || undefined);
    };
    window.addEventListener("planner-date-change", handler);
    return () => window.removeEventListener("planner-date-change", handler);
  }, [storageKey]);

  if (!mounted) return <div style={{ height: 400, marginBottom: 64 }} />;

  const { months, isCapped, totalMonths, targetYear, targetMonth } =
    computeMonths(startYear, startMonth, targetDate, maxMonths, defaultMonths);
  const hasDate = !!targetDate;

  return (
    <section style={{ marginBottom: 64 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 8 }}>
        <h2 style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Download by month
        </h2>
        {hasDate && pdfTargetLabel && (
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "var(--holiday)", letterSpacing: "0.05em" }}>
            {pdfTargetLabel} date applied ★
          </p>
        )}
      </div>

      {/* No-date hint */}
      {!hasDate && noDateHint && (
        <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 20 }}>
          {noDateHint}
        </p>
      )}

      {/* Cap banner */}
      {isCapped && targetDate && (
        <div style={{
          border: "1px solid var(--border)", borderRadius: 8,
          padding: "12px 16px", marginBottom: 20,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 16, flexWrap: "wrap",
        }}>
          <p style={{ fontSize: 13, color: "var(--muted)" }}>
            {totalMonths} months away — showing the first {maxMonths} months.
          </p>
          <a
            href={buildPdfUrl("us", targetYear, targetMonth, targetDate, pdfHeaderText, pdfTargetLabel)}
            download
            style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "var(--holiday)", textDecoration: "none", whiteSpace: "nowrap" }}
          >
            {MONTH_NAMES[targetMonth - 1]} {targetYear} PDF →
          </a>
        </div>
      )}

      {/* Month grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14 }}>
        {months.map(({ year: y, month: m }) => {
          const hasCalendarPage = years.includes(y);
          const isTargetMonth = hasDate && y === targetYear && m === targetMonth;
          const monthsToTarget = hasDate ? (targetYear - y) * 12 + (targetMonth - m) : null;
          const dN = hasDate && !isTargetMonth ? daysFromFirst(y, m, targetDate!) : null;
          const showDN = dN !== null && dN >= 0;

          const subtitle =
            isTargetMonth ? "" :
            monthsToTarget !== null && monthsToTarget > 0
              ? monthsToTarget === 1 ? "1 month to go" : `${monthsToTarget} months to go`
              : "";

          return (
            <div
              key={`${y}-${m}`}
              style={{
                border: `1px solid ${isTargetMonth ? "var(--holiday)" : "var(--border)"}`,
                borderRadius: 10,
                padding: "16px 18px",
              }}
            >
              {/* Card header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <div>
                  <p style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 17, fontWeight: 400, lineHeight: 1.2 }}>
                    {MONTH_NAMES[m - 1]} {y}
                  </p>
                  {subtitle && (
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "var(--muted)", letterSpacing: "0.04em", marginTop: 3 }}>
                      {subtitle}
                    </p>
                  )}
                </div>
                <div style={{ flexShrink: 0, marginLeft: 8, paddingTop: 2 }}>
                  {isTargetMonth ? (
                    <span style={{
                      fontFamily: "'DM Mono', monospace", fontSize: 9,
                      color: "var(--holiday)", border: "1px solid var(--holiday)",
                      borderRadius: 3, padding: "2px 6px",
                      letterSpacing: "0.06em", textTransform: "uppercase",
                    }}>
                      {badgeLabel}
                    </span>
                  ) : showDN ? (
                    <span style={{
                      fontFamily: "'DM Mono', monospace", fontSize: 10,
                      color: dN! <= 30 ? "#e53e3e" : "var(--muted)",
                      letterSpacing: "0.04em",
                    }}>
                      D-{dN}
                    </span>
                  ) : null}
                </div>
              </div>

              {/* Country buttons */}
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {SUPPORTED_COUNTRIES.map((c) => {
                  const pdfUrl = buildPdfUrl(c.code.toLowerCase(), y, m, targetDate, pdfHeaderText, pdfTargetLabel);
                  return (
                    <div key={c.code} style={{ display: "flex", gap: 4 }}>
                      {/* A far-off target date can reach months we don't serve
                          a calendar page for; keep the card and its PDF (the
                          route handler renders any year) and drop the link. */}
                      {hasCalendarPage ? (
                        <Link
                          href={`/calendar/${c.code.toLowerCase()}/${y}/${m}`}
                          style={{
                            fontSize: 11, padding: "4px 10px",
                            border: "1px solid var(--border)", borderRadius: 5,
                            textDecoration: "none", color: "var(--fg)",
                          }}
                        >
                          {c.code}
                        </Link>
                      ) : (
                        <span
                          style={{
                            fontSize: 11, padding: "4px 10px",
                            border: "1px solid var(--border)", borderRadius: 5,
                            color: "var(--muted)", opacity: 0.5,
                          }}
                        >
                          {c.code}
                        </span>
                      )}
                      <a
                        href={pdfUrl}
                        download={`calendar-${c.code.toLowerCase()}-${y}-${String(m).padStart(2, "0")}.pdf`}
                        style={{
                          fontSize: 11, padding: "4px 10px",
                          border: "1px solid var(--border)", borderRadius: 5,
                          textDecoration: "none",
                          color: hasDate ? "var(--holiday)" : "var(--muted)",
                          fontWeight: hasDate ? 500 : 400,
                        }}
                      >
                        {hasDate ? "PDF ★" : "PDF"}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
