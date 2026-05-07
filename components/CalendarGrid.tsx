import { CalendarDay, DAY_NAMES, MONTH_NAMES } from "@/lib/types";

interface CalendarGridProps {
  days: CalendarDay[];
  year: number;
  month: number;
  countryName: string;
}

export default function CalendarGrid({
  days,
  year,
  month,
  countryName,
}: CalendarGridProps) {
  return (
    <div>
      {/* Calendar header — visible in print */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <h1
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            color: "var(--fg)",
            margin: 0,
          }}
        >
          {MONTH_NAMES[month - 1]}{" "}
          <span style={{ opacity: 0.4 }}>{year}</span>
        </h1>
        <span
          style={{
            fontSize: 13,
            color: "var(--muted)",
            fontWeight: 500,
          }}
        >
          {countryName}
        </span>
      </div>

      {/* Day headers */}
      <div className="calendar-grid" style={{ marginBottom: 0 }}>
        {DAY_NAMES.map((name, i) => (
          <div
            key={name}
            className="day-header"
            style={{ borderBottom: "2px solid var(--fg)" }}
          >
            <span
              style={{ color: i === 0 ? "var(--holiday)" : i === 6 ? "var(--weekend)" : "var(--muted)" }}
            >
              {name}
            </span>
          </div>
        ))}

        {/* Calendar cells */}
        {days.map((day, idx) => {
          const dow = day.date.getDay();
          const isSun = dow === 0;
          const isSat = dow === 6;
          const classes = [
            "calendar-cell",
            !day.isCurrentMonth ? "other-month" : "",
            isSun ? "sunday" : "",
            isSat ? "saturday" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <div key={idx} className={classes}>
              <div
                className="day-number"
                style={{
                  color: isSun
                    ? "var(--holiday)"
                    : isSat
                    ? "var(--weekend)"
                    : "var(--fg)",
                }}
              >
                {day.date.getDate()}
              </div>
              {day.holiday && day.isCurrentMonth && (
                <div className="holiday-name">{day.holiday.name}</div>
              )}
            </div>
          );
        })}
      </div>

      {/* Holiday legend */}
      {days.some((d) => d.holiday && d.isCurrentMonth) && (
        <div
          style={{
            marginTop: 16,
            padding: "12px 16px",
            border: "1px solid var(--border)",
            borderRadius: 6,
            display: "flex",
            flexWrap: "wrap",
            gap: "6px 20px",
          }}
        >
          {days
            .filter((d) => d.holiday && d.isCurrentMonth)
            .map((d, i) => (
              <span key={i} style={{ fontSize: 12, color: "var(--muted)" }}>
                <span style={{ color: "var(--holiday)", marginRight: 6 }}>
                  {String(d.date.getDate()).padStart(2, "0")}
                </span>
                {d.holiday!.name}
              </span>
            ))}
        </div>
      )}
    </div>
  );
}
