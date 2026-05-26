import Link from "next/link";
import type { Metadata } from "next";
import { SUPPORTED_COUNTRIES, MONTH_NAMES } from "@/lib/types";
import AdSlot from "@/components/AdSlot";

const BASE_URL = "https://printablecalendars.io";

export const metadata: Metadata = {
  title: "Printable School Calendar 2026 — Academic Year PDF Download",
  description:
    "Download a free printable school calendar for the 2026–2027 academic year. Monthly PDFs with public holidays for USA, Japan, and South Korea. Perfect for students, parents, and teachers.",
  keywords: [
    "printable school calendar 2026",
    "academic calendar 2026 2027",
    "school year calendar PDF",
    "back to school calendar 2026",
    "school calendar download",
    "academic planner 2026",
  ],
  alternates: { canonical: `${BASE_URL}/school-calendar-2026` },
  openGraph: {
    title: "Printable School Calendar 2026 | PrintableCalendars",
    description:
      "Free printable monthly school calendars for the 2026–2027 academic year. Includes public holidays.",
    url: `${BASE_URL}/school-calendar-2026`,
    type: "website",
    siteName: "PrintableCalendars",
  },
  twitter: {
    card: "summary_large_image",
    title: "Printable School Calendar 2026 | PrintableCalendars",
    description: "Free academic year calendars for 2026–2027. Monthly PDF download, includes holidays.",
  },
  robots: { index: true, follow: true },
};

// Academic calendars by country (school year start months)
const ACADEMIC_YEARS: Record<string, { label: string; months: { year: number; month: number }[] }> = {
  US: {
    label: "Aug 2026 – Jun 2027",
    months: [
      { year: 2026, month: 8 },
      { year: 2026, month: 9 },
      { year: 2026, month: 10 },
      { year: 2026, month: 11 },
      { year: 2026, month: 12 },
      { year: 2027, month: 1 },
      { year: 2027, month: 2 },
      { year: 2027, month: 3 },
      { year: 2027, month: 4 },
      { year: 2027, month: 5 },
      { year: 2027, month: 6 },
    ],
  },
  JP: {
    label: "Apr 2026 – Mar 2027",
    months: [
      { year: 2026, month: 4 },
      { year: 2026, month: 5 },
      { year: 2026, month: 6 },
      { year: 2026, month: 7 },
      { year: 2026, month: 9 },
      { year: 2026, month: 10 },
      { year: 2026, month: 11 },
      { year: 2026, month: 12 },
      { year: 2027, month: 1 },
      { year: 2027, month: 2 },
      { year: 2027, month: 3 },
    ],
  },
  KR: {
    label: "Mar 2026 – Feb 2027",
    months: [
      { year: 2026, month: 3 },
      { year: 2026, month: 4 },
      { year: 2026, month: 5 },
      { year: 2026, month: 6 },
      { year: 2026, month: 7 },
      { year: 2026, month: 9 },
      { year: 2026, month: 10 },
      { year: 2026, month: 11 },
      { year: 2026, month: 12 },
      { year: 2027, month: 1 },
      { year: 2027, month: 2 },
    ],
  },
};

const COUNTRY_FLAG: Record<string, string> = { US: "🇺🇸", KR: "🇰🇷", JP: "🇯🇵" };

export default function SchoolCalendar2026Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Printable School Calendar 2026 — Academic Year",
    description: "Free monthly school calendars for the 2026–2027 academic year.",
    url: `${BASE_URL}/school-calendar-2026`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
        <AdSlot slot="top-banner" style={{ marginBottom: 32 }} />

        {/* Hero */}
        <div style={{ marginBottom: 56, maxWidth: 620 }}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "var(--muted)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Academic Year · 2026–2027
          </p>
          <h1
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "clamp(30px, 5vw, 52px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Printable school calendar
            <br />
            <span style={{ opacity: 0.4 }}>2026 — 2027</span>
          </h1>
          <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.65 }}>
            Free monthly calendars covering the full academic year — from back-to-school
            through graduation. Each PDF includes official public holidays for
            your country, a clean grid layout, and print-optimised margins for
            writing in class schedules and exam dates.
          </p>
        </div>

        {/* Per-country academic year sections */}
        {SUPPORTED_COUNTRIES.map((c) => {
          const academic = ACADEMIC_YEARS[c.code];
          if (!academic) return null;
          return (
            <section key={c.code} style={{ marginBottom: 56 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 20,
                  paddingBottom: 14,
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span style={{ fontSize: 20 }}>{COUNTRY_FLAG[c.code]}</span>
                <div>
                  <h2
                    style={{
                      fontFamily: "'EB Garamond', Georgia, serif",
                      fontSize: 22,
                      fontWeight: 400,
                    }}
                  >
                    {c.name}
                  </h2>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 10,
                      color: "var(--muted)",
                      letterSpacing: "0.05em",
                      marginTop: 2,
                    }}
                  >
                    Academic year: {academic.label}
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                  gap: 10,
                }}
              >
                {academic.months.map(({ year, month }) => {
                  const monthName = MONTH_NAMES[month - 1];
                  const pdfUrl = `/api/pdf?country=${c.code.toLowerCase()}&year=${year}&month=${month}&size=A4&orientation=landscape&theme=light`;
                  return (
                    <div
                      key={`${year}-${month}`}
                      style={{
                        border: "1px solid var(--border)",
                        borderRadius: 8,
                        padding: "12px 14px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 11,
                          color: "var(--fg)",
                        }}
                      >
                        {monthName} {year}
                      </p>
                      <div style={{ display: "flex", gap: 6 }}>
                        <Link
                          href={`/calendar/${c.code.toLowerCase()}/${year}/${month}`}
                          style={{
                            flex: 1,
                            textAlign: "center",
                            fontSize: 11,
                            padding: "5px 0",
                            background: "var(--fg)",
                            color: "var(--bg)",
                            borderRadius: 5,
                            textDecoration: "none",
                            fontWeight: 500,
                          }}
                        >
                          View
                        </Link>
                        <a
                          href={pdfUrl}
                          download={`school-${c.code.toLowerCase()}-${year}-${String(month).padStart(2, "0")}.pdf`}
                          style={{
                            flex: 1,
                            textAlign: "center",
                            fontSize: 11,
                            padding: "5px 0",
                            border: "1px solid var(--border)",
                            color: "var(--muted)",
                            borderRadius: 5,
                            textDecoration: "none",
                          }}
                        >
                          PDF
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        <AdSlot slot="pre-download" style={{ marginBottom: 48 }} />

        {/* Info */}
        <section
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 40,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 28,
          }}
        >
          {[
            ["School year differences", "US schools typically start in August or September. Japanese schools begin in April. Korean schools start in March. Each section above reflects the correct academic calendar."],
            ["Holiday coverage", "All calendars include official public holidays — critical for planning school closures, exam scheduling, and extracurricular events."],
            ["Print-ready PDF", "Download as A4 landscape. The minimalist design works perfectly in black and white — ideal for school bulletin boards and planners."],
            ["No login required", "All calendars are completely free. No account, no email, no subscription. Just download and print."],
          ].map(([title, desc]) => (
            <div key={title}>
              <p style={{ fontWeight: 500, fontSize: 14, marginBottom: 6 }}>{title}</p>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
