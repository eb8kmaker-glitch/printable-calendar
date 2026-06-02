"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SUPPORTED_COUNTRIES, MONTH_NAMES } from "@/lib/types";

interface Stored { date: string; start: string; }

function buildPdfUrl(country: string, year: number, month: number, examDate?: string): string {
  const params = new URLSearchParams({
    country,
    year: String(year),
    month: String(month),
    size: "A4",
    orientation: "landscape",
    theme: "light",
  });
  if (examDate) {
    params.set("headerText", "Exam Countdown");
    params.set("targetDate", examDate);
    params.set("targetLabel", "Exam Day");
  }
  return `/api/pdf?${params.toString()}`;
}

export default function StudyDownloadSection() {
  const now = new Date();
  const year = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const [examDate, setExamDate] = useState<string | undefined>(undefined);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem("exam-date");
      if (raw) {
        const parsed: Stored = JSON.parse(raw);
        setExamDate(parsed.date);
      }
    } catch { /* ignore */ }
  }, []);

  const upcomingMonths = Array.from({ length: 6 }, (_, i) => {
    const totalMonth = currentMonth + i;
    const m = ((totalMonth - 1) % 12) + 1;
    const y = year + Math.floor((totalMonth - 1) / 12);
    return { month: m, year: y, name: MONTH_NAMES[m - 1] };
  });

  if (!mounted) return <div style={{ height: 320 }} />;

  const hasDate = !!examDate;

  return (
    <section style={{ marginBottom: 64 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 8 }}>
        <h2 style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Download by month
        </h2>
        {hasDate && (
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "var(--holiday)", letterSpacing: "0.05em" }}>
            Exam date applied to PDF ★
          </p>
        )}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
        {upcomingMonths.map(({ month: m, year: y, name }) => (
          <div key={`${y}-${m}`} style={{ border: "1px solid var(--border)", borderRadius: 10, padding: "18px 20px" }}>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "var(--muted)", letterSpacing: "0.05em", marginBottom: 8 }}>
              {name} {y}
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {SUPPORTED_COUNTRIES.map((c) => {
                const pdfUrl = buildPdfUrl(c.code.toLowerCase(), y, m, examDate);
                return (
                  <div key={c.code} style={{ display: "flex", gap: 6, alignItems: "center" }}>
                    <Link
                      href={`/calendar/${c.code.toLowerCase()}/${y}/${m}`}
                      style={{
                        fontSize: 12,
                        padding: "5px 12px",
                        border: "1px solid var(--border)",
                        borderRadius: 6,
                        textDecoration: "none",
                        color: "var(--fg)",
                      }}
                    >
                      {c.code}
                    </Link>
                    <a
                      href={pdfUrl}
                      download={`study-calendar-${c.code.toLowerCase()}-${y}-${String(m).padStart(2, "0")}.pdf`}
                      style={{
                        fontSize: 11,
                        padding: "5px 10px",
                        border: "1px solid var(--border)",
                        borderRadius: 6,
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
        ))}
      </div>
    </section>
  );
}
