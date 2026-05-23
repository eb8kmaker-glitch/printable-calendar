import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getHolidays, buildCalendarDays, getCountryConfig } from "@/lib/holidays";
import { MONTH_NAMES, DAY_NAMES, SUPPORTED_COUNTRIES } from "@/lib/types";
import DownloadButton from "@/components/DownloadButton";
import AdSlot from "@/components/AdSlot";

interface PageProps {
  params: Promise<{ country: string; year: string }>;
}

export async function generateStaticParams() {
  const params = [];
  const year = new Date().getFullYear();
  for (const country of SUPPORTED_COUNTRIES) {
    params.push({ country: country.code.toLowerCase(), year: String(year) });
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country, year } = await params;
  const config = getCountryConfig(country);
  if (!config) return {};
  const title = `${year} Printable Calendar — ${config.name}`;
  const description = `Free printable ${year} annual calendar for ${config.name} with all public holidays. Download PDF instantly.`;
  return {
    title,
    description,
    keywords: [
      `printable calendar ${year}`,
      `${config.name} calendar ${year}`,
      `annual calendar ${year}`,
      `yearly calendar PDF ${year}`,
    ],
    openGraph: { title, description, type: "website" },
    alternates: { canonical: `/calendar/${country}/${year}` },
  };
}

export default async function YearlyCalendarPage({ params }: PageProps) {
  const { country, year: yearStr } = await params;
  const year = Number(yearStr);
  const config = getCountryConfig(country);

  if (!config || isNaN(year)) notFound();

  const holidays = getHolidays(config.code, year);

  return (
    <>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>
        <AdSlot slot="top-banner" style={{ marginBottom: 24 }} />

        {/* Toolbar */}
        <div
          className="no-print"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 28,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", gap: 6 }}>
            {SUPPORTED_COUNTRIES.map((c) => (
              <Link
                key={c.code}
                href={`/calendar/${c.code.toLowerCase()}/${year}`}
                style={{
                  fontSize: 12,
                  padding: "5px 12px",
                  border: "1px solid var(--border)",
                  borderRadius: 20,
                  textDecoration: "none",
                  color: c.code.toLowerCase() === country ? "var(--bg)" : "var(--muted)",
                  background: c.code.toLowerCase() === country ? "var(--fg)" : "transparent",
                  fontWeight: 500,
                }}
              >
                {c.name}
              </Link>
            ))}
          </div>

          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Link
              href={`/calendar/${country}/${year - 1}`}
              style={{
                width: 36, height: 36, display: "flex", alignItems: "center",
                justifyContent: "center", border: "1px solid var(--border)",
                borderRadius: 8, textDecoration: "none", color: "var(--fg)", fontSize: 16,
              }}
            >
              ←
            </Link>
            <span style={{ fontSize: 14, fontWeight: 500, minWidth: 48, textAlign: "center" }}>
              {year}
            </span>
            <Link
              href={`/calendar/${country}/${year + 1}`}
              style={{
                width: 36, height: 36, display: "flex", alignItems: "center",
                justifyContent: "center", border: "1px solid var(--border)",
                borderRadius: 8, textDecoration: "none", color: "var(--fg)", fontSize: 16,
              }}
            >
              →
            </Link>
            <Link
              href={`/calendar/${country}/${year}/${new Date().getMonth() + 1}`}
              style={{
                fontSize: 12, padding: "5px 12px", border: "1px solid var(--border)",
                borderRadius: 8, textDecoration: "none", color: "var(--muted)",
              }}
            >
              Monthly view
            </Link>
          </div>
        </div>

        {/* Year header */}
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 28 }}>
          <h1 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 400, letterSpacing: "-0.03em", margin: 0 }}>
            {year} <span style={{ opacity: 0.4 }}>{config.name}</span>
          </h1>
        </div>

        {/* 12-month grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {MONTH_NAMES.map((monthName, i) => {
            const month = i + 1;
            const days = buildCalendarDays(year, month, holidays);

            return (
              <Link
                key={month}
                href={`/calendar/${country}/${year}/${month}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    padding: 12,
                    transition: "border-color 0.15s",
                    cursor: "pointer",
                  }}
                >
                  <p style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 15, fontWeight: 400, marginBottom: 8, color: "var(--fg)" }}>
                    {monthName}
                  </p>

                  {/* Mini grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 0, borderTop: "1px solid var(--border)", borderLeft: "1px solid var(--border)" }}>
                    {DAY_NAMES.map((d, di) => (
                      <div
                        key={d}
                        style={{
                          fontSize: 8, fontWeight: 600, textAlign: "center",
                          padding: "3px 0", borderRight: "1px solid var(--border)",
                          borderBottom: "1px solid var(--fg)",
                          color: di === 0 ? "var(--holiday)" : di === 6 ? "var(--weekend)" : "var(--muted)",
                        }}
                      >
                        {d.slice(0, 1)}
                      </div>
                    ))}
                    {days.map((day, idx) => {
                      const dow = day.date.getDay();
                      const isHoliday = !!day.holiday && day.isCurrentMonth;
                      let color = "var(--fg)";
                      if (dow === 0 || isHoliday) color = "var(--holiday)";
                      else if (dow === 6) color = "var(--weekend)";

                      return (
                        <div
                          key={idx}
                          style={{
                            fontSize: 9, textAlign: "center", padding: "2px 0",
                            borderRight: "1px solid var(--border)",
                            borderBottom: "1px solid var(--border)",
                            color,
                            opacity: !day.isCurrentMonth ? 0.2 : 1,
                            fontFamily: "'DM Mono', monospace",
                          }}
                        >
                          {day.date.getDate()}
                        </div>
                      );
                    })}
                  </div>

                  {/* Holiday count badge */}
                  {holidays.filter(h => h.date.startsWith(`${year}-${String(month).padStart(2, "0")}`)).length > 0 && (
                    <p style={{ fontSize: 10, color: "var(--holiday)", marginTop: 6, margin: "6px 0 0" }}>
                      {holidays.filter(h => h.date.startsWith(`${year}-${String(month).padStart(2, "0")}`)).length} holiday
                      {holidays.filter(h => h.date.startsWith(`${year}-${String(month).padStart(2, "0")}`)).length > 1 ? "s" : ""}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Download */}
        <AdSlot slot="pre-download" style={{ margin: "32px 0" }} />
        <div
          className="no-print"
          style={{ textAlign: "center", padding: "32px 0", borderTop: "1px solid var(--border)" }}
        >
          <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 16 }}>
            Landscape PDF · all 12 months on one page · includes public holidays
          </p>
          <DownloadButton country={country} year={year} />
        </div>
      </div>
    </>
  );
}
