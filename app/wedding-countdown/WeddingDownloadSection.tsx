"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SUPPORTED_COUNTRIES, MONTH_NAMES } from "@/lib/types";

interface Stored { date: string; start: string; }

function buildPdfUrl(country: string, year: number, month: number, weddingDate?: string): string {
  const params = new URLSearchParams({
    country,
    year: String(year),
    month: String(month),
    size: "A4",
    orientation: "landscape",
    theme: "light",
  });
  if (weddingDate) {
    params.set("headerText", "Wedding Countdown");
    params.set("targetDate", weddingDate);
    params.set("targetLabel", "Wedding Day");
  }
  return `/api/pdf?${params.toString()}`;
}

export default function WeddingDownloadSection() {
  const now = new Date();
  const year = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const [weddingDate, setWeddingDate] = useState<string | undefined>(undefined);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem("wedding-date");
      if (raw) {
        const parsed: Stored = JSON.parse(raw);
        setWeddingDate(parsed.date);
      }
    } catch { /* ignore */ }
  }, []);

  const countdownMonths = Array.from({ length: 12 }, (_, i) => {
    const totalMonth = currentMonth + i;
    const m = ((totalMonth - 1) % 12) + 1;
    const y = year + Math.floor((totalMonth - 1) / 12);
    return { month: m, year: y, name: MONTH_NAMES[m - 1] };
  });

  if (!mounted) return <div style={{ height: 480 }} />;

  const hasDate = !!weddingDate;

  return (
    <section style={{ marginBottom: 56 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 8 }}>
        <h2 style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Download your countdown months
        </h2>
        {hasDate && (
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "var(--holiday)", letterSpacing: "0.05em" }}>
            Wedding date applied to PDF ★
          </p>
        )}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
        {countdownMonths.map(({ month: m, year: y, name }, i) => (
          <div key={`${y}-${m}`} style={{ border: "1px solid var(--border)", borderRadius: 8, padding: "14px 16px" }}>
            <div style={{ marginBottom: 10 }}>
              <p style={{ fontSize: 14, fontWeight: 500 }}>{name} {y}</p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "var(--muted)", marginTop: 2 }}>
                {i === 0 ? "This month" : `${i + 1} months from now`}
              </p>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {SUPPORTED_COUNTRIES.map((c) => {
                const pdfUrl = buildPdfUrl(c.code.toLowerCase(), y, m, weddingDate);
                return (
                  <div key={c.code} style={{ display: "flex", gap: 4 }}>
                    <Link
                      href={`/calendar/${c.code.toLowerCase()}/${y}/${m}`}
                      style={{ fontSize: 11, padding: "4px 10px", border: "1px solid var(--border)", borderRadius: 5, textDecoration: "none", color: "var(--fg)" }}
                    >
                      {c.code}
                    </Link>
                    <a
                      href={pdfUrl}
                      download={`wedding-countdown-${c.code.toLowerCase()}-${y}-${String(m).padStart(2, "0")}.pdf`}
                      style={{
                        fontSize: 11,
                        padding: "4px 10px",
                        border: "1px solid var(--border)",
                        borderRadius: 5,
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
