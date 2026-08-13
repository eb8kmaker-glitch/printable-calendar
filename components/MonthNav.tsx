"use client";

import { useRouter } from "next/navigation";
import { MONTH_NAMES, CALENDAR_YEARS } from "@/lib/types";

interface MonthNavProps {
  country: string;
  year: number;
  month: number;
}

export default function MonthNav({ country, year, month }: MonthNavProps) {
  const router = useRouter();

  // Only step into a year we actually generate (see CALENDAR_YEARS). Same guard
  // the server-rendered prev/next links in [year] and [year]/[month] use — the
  // arrows would otherwise roll over into a year that 404s.
  const prevYear = month === 1 ? year - 1 : year;
  const nextYear = month === 12 ? year + 1 : year;
  const canGoPrev = CALENDAR_YEARS.includes(prevYear);
  const canGoNext = CALENDAR_YEARS.includes(nextYear);

  const prev = () => {
    if (!canGoPrev) return;
    if (month === 1) router.push(`/calendar/${country}/${prevYear}/12`);
    else router.push(`/calendar/${country}/${year}/${month - 1}`);
  };

  const next = () => {
    if (!canGoNext) return;
    if (month === 12) router.push(`/calendar/${country}/${nextYear}/1`);
    else router.push(`/calendar/${country}/${year}/${month + 1}`);
  };

  const btnStyle: React.CSSProperties = {
    width: 36,
    height: 36,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid var(--border)",
    borderRadius: 8,
    background: "transparent",
    color: "var(--fg)",
    cursor: "pointer",
    fontSize: 16,
    transition: "background 0.15s",
  };

  const disabledBtnStyle: React.CSSProperties = {
    ...btnStyle,
    cursor: "default",
    opacity: 0.3,
  };

  return (
    <div
      className="no-print"
      style={{ display: "flex", alignItems: "center", gap: 8 }}
    >
      <button
        onClick={prev}
        disabled={!canGoPrev}
        style={canGoPrev ? btnStyle : disabledBtnStyle}
        aria-label="Previous month"
      >
        ←
      </button>

      {/* Quick month picker */}
      <select
        value={month}
        onChange={(e) =>
          router.push(`/calendar/${country}/${year}/${e.target.value}`)
        }
        style={{
          fontSize: 13,
          border: "1px solid var(--border)",
          borderRadius: 8,
          padding: "6px 10px",
          background: "var(--bg)",
          color: "var(--fg)",
          cursor: "pointer",
        }}
      >
        {MONTH_NAMES.map((name, i) => (
          <option key={i} value={i + 1}>
            {name}
          </option>
        ))}
      </select>

      <select
        value={year}
        onChange={(e) =>
          router.push(`/calendar/${country}/${e.target.value}/${month}`)
        }
        style={{
          fontSize: 13,
          border: "1px solid var(--border)",
          borderRadius: 8,
          padding: "6px 10px",
          background: "var(--bg)",
          color: "var(--fg)",
          cursor: "pointer",
        }}
      >
        {CALENDAR_YEARS.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>

      <button
        onClick={next}
        disabled={!canGoNext}
        style={canGoNext ? btnStyle : disabledBtnStyle}
        aria-label="Next month"
      >
        →
      </button>
    </div>
  );
}
