"use client";

import { useState, useEffect } from "react";

export interface DayMilestone {
  min: number;   // daysLeft inclusive lower bound
  max: number;   // daysLeft inclusive upper bound (use 99999 for open-ended)
  message: string;
  tip?: string;
}

interface Props {
  targetLabel: string;
  storageKey: string;
  milestones: DayMilestone[];
  defaultDate?: string; // YYYY-MM-DD
  /**
   * CALENDAR_YEARS, passed down from the server rather than imported here —
   * importing it into a client component recomputes it against the visitor's
   * clock. Bounds the date picker to the years we publish calendars for, so
   * the limit is visible while choosing instead of only showing up later as
   * month cards without a calendar link.
   */
  years: number[];
}

interface Stored {
  date: string;
  start: string; // ISO date when the user first set this target
}

export default function DayCounter({ targetLabel, storageKey, milestones, defaultDate, years }: Props) {
  const [stored, setStored] = useState<Stored | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        setStored(JSON.parse(raw));
      } else if (defaultDate) {
        const s: Stored = { date: defaultDate, start: new Date().toISOString().slice(0, 10) };
        setStored(s);
        localStorage.setItem(storageKey, JSON.stringify(s));
      }
    } catch {
      // ignore parse errors
    }
  }, [storageKey, defaultDate]);

  const updateDate = (val: string) => {
    if (!val) {
      setStored(null);
      localStorage.removeItem(storageKey);
      window.dispatchEvent(new CustomEvent("planner-date-change", { detail: { key: storageKey, date: "" } }));
      return;
    }
    const today = new Date().toISOString().slice(0, 10);
    // Preserve original start date so the progress bar doesn't reset on edits
    const s: Stored = { date: val, start: stored?.start ?? today };
    setStored(s);
    localStorage.setItem(storageKey, JSON.stringify(s));
    window.dispatchEvent(new CustomEvent("planner-date-change", { detail: { key: storageKey, date: val } }));
  };

  // Avoid hydration mismatch — render a placeholder until mounted
  if (!mounted) {
    return <div style={{ height: 120, marginBottom: 48 }} />;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Bounds for the date picker. The lower bound is the start of the first
  // published year rather than today: a target that has since passed is a
  // state this component renders on purpose ("+N", "passed N days ago"), so
  // dates earlier this year stay selectable.
  const minDate = `${Math.min(...years)}-01-01`;
  const maxDate = `${Math.max(...years)}-12-31`;

  const targetDate = stored ? new Date(stored.date + "T00:00:00") : null;
  const startDate = stored ? new Date(stored.start + "T00:00:00") : null;

  const daysLeft = targetDate !== null
    ? Math.round((targetDate.getTime() - today.getTime()) / 86400000)
    : null;

  const totalDays = targetDate && startDate
    ? Math.round((targetDate.getTime() - startDate.getTime()) / 86400000)
    : null;

  const daysPassed = totalDays !== null && daysLeft !== null
    ? Math.max(0, totalDays - Math.max(0, daysLeft))
    : 0;

  const progress = totalDays && totalDays > 0
    ? Math.min(100, Math.max(0, (daysPassed / totalDays) * 100))
    : 0;

  const milestone = daysLeft !== null
    ? milestones.find((m) => daysLeft >= m.min && daysLeft <= m.max)
    : null;

  const isPast = daysLeft !== null && daysLeft < 0;
  const isToday = daysLeft === 0;

  const dDayLabel =
    daysLeft === null ? "—"
    : isToday ? "D-Day"
    : isPast ? `+${Math.abs(daysLeft)}`
    : `D-${daysLeft}`;

  return (
    <div
      style={{
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: "24px 28px",
        marginBottom: 48,
      }}
    >
      {/* Top row: label + D-day + date input */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 16,
          marginBottom: stored ? 20 : 0,
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "var(--muted)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            {targetLabel}
          </p>
          {stored ? (
            <p
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: "clamp(40px, 7vw, 68px)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                lineHeight: 1,
                color: isPast ? "var(--muted)" : "var(--fg)",
              }}
            >
              {dDayLabel}
            </p>
          ) : (
            <p style={{ fontSize: 13, color: "var(--muted)", paddingTop: 4 }}>
              Enter your date to start the countdown.
            </p>
          )}
        </div>

        <label style={{ display: "flex", flexDirection: "column", gap: 5, flexShrink: 0 }}>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              color: "var(--muted)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Set date
          </span>
          <input
            type="date"
            value={stored?.date ?? ""}
            min={minDate}
            max={maxDate}
            onChange={(e) => updateDate(e.target.value)}
            style={{
              padding: "9px 12px",
              border: "1px solid var(--border)",
              borderRadius: 8,
              background: "var(--bg)",
              color: "var(--fg)",
              fontSize: 14,
              fontFamily: "'DM Sans', system-ui, sans-serif",
            }}
          />
        </label>
      </div>

      {/* Details — only shown when a date is set */}
      {stored && daysLeft !== null && (
        <>
          {/* Context sentence */}
          {!isPast && !isToday && totalDays !== null && totalDays > 0 && (
            <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 16 }}>
              Today is Day {daysPassed + 1} of your {totalDays}-day journey.
            </p>
          )}
          {isPast && (
            <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 16 }}>
              This date passed {Math.abs(daysLeft)} day{Math.abs(daysLeft) !== 1 ? "s" : ""} ago.
            </p>
          )}

          {/* Progress bar */}
          {!isPast && totalDays !== null && totalDays > 0 && (
            <div style={{ marginBottom: 20 }}>
              <div
                style={{
                  height: 3,
                  background: "var(--border)",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${progress}%`,
                    background: "var(--fg)",
                    borderRadius: 2,
                    transition: "width 0.5s ease",
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  color: "var(--muted)",
                  marginTop: 6,
                  letterSpacing: "0.04em",
                }}
              >
                {Math.round(progress)}% complete
              </p>
            </div>
          )}

          {/* Milestone message */}
          {milestone && (
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: 16 }}>
              <p style={{ fontSize: 14, lineHeight: 1.55, marginBottom: milestone.tip ? 8 : 0 }}>
                {milestone.message}
              </p>
              {milestone.tip && (
                <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.55 }}>
                  Tip: {milestone.tip}
                </p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
