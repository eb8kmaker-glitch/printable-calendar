interface MonthSummaryProps {
  country: string;
  year: number;
  month: number;
  holidays: { date: string; name: string; localName?: string }[];
  locale: string;
  i18n: {
    monthSummary: {
      intro_one: string;
      intro_other: string;
      noHolidays: string;
      downloadNote: string;
    };
    holidayDescriptions: Record<string, string>;
  };
  monthName: string;
  countryName: string;
}

function normalizeKey(name: string): string {
  return name
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9-￿]+/g, "_")
    .replace(/^_|_$/g, "");
}

export default function MonthSummary({
  year,
  month,
  holidays,
  locale,
  i18n,
  monthName,
  countryName,
}: MonthSummaryProps) {
  const count = holidays.length;

  let introText: string;
  if (count === 0) {
    introText = i18n.monthSummary.noHolidays
      .replace("{{month}}", monthName)
      .replace("{{year}}", String(year))
      .replace("{{country}}", countryName);
  } else {
    const template = count === 1 ? i18n.monthSummary.intro_one : i18n.monthSummary.intro_other;
    introText = template
      .replace("{{month}}", monthName)
      .replace("{{year}}", String(year))
      .replace("{{country}}", countryName)
      .replace("{{count}}", String(count));
  }

  return (
    <section
      className="no-print"
      style={{
        marginTop: 32,
        paddingTop: 24,
        borderTop: "1px solid var(--border)",
      }}
    >
      <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, marginBottom: 8 }}>
        {introText}{" "}
        <span style={{ color: "var(--muted)" }}>{i18n.monthSummary.downloadNote}</span>
      </p>

      {holidays.map((h) => {
        const displayName =
          (locale === "ko" || locale === "ja") && h.localName ? h.localName : h.name;
        const key = normalizeKey(h.name);
        const desc = i18n.holidayDescriptions[key] ?? i18n.holidayDescriptions[h.name] ?? "";

        // Only render a holiday block when it has a description — holidays without
        // one (e.g. substitute days) stay in the dated holiday list above rather
        // than producing an empty heading.
        if (!desc) return null;

        return (
          <div key={h.date}>
            <h3 style={{ fontSize: 14, fontWeight: 500, color: "var(--fg)", marginTop: 16, marginBottom: 4 }}>
              {displayName}
            </h3>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65 }}>{desc}</p>
          </div>
        );
      })}
    </section>
  );
}
