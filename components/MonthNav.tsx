"use client";

import { useRouter } from "next/navigation";
import { MONTH_NAMES } from "@/lib/types";

interface MonthNavProps {
  country: string;
  year: number;
  month: number;
}

export default function MonthNav({ country, year, month }: MonthNavProps) {
  const router = useRouter();

  const prev = () => {
    if (month === 1) router.push(`/calendar/${country}/${year - 1}/12`);
    else router.push(`/calendar/${country}/${year}/${month - 1}`);
  };

  const next = () => {
    if (month === 12) router.push(`/calendar/${country}/${year + 1}/1`);
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

  return (
    <div
      className="no-print"
      style={{ display: "flex", alignItems: "center", gap: 8 }}
    >
      <button onClick={prev} style={btnStyle} aria-label="Previous month">
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
        {[2024, 2025, 2026, 2027].map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>

      <button onClick={next} style={btnStyle} aria-label="Next month">
        →
      </button>
    </div>
  );
}
