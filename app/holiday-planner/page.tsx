import Link from "next/link";
import type { Metadata } from "next";
import { SUPPORTED_COUNTRIES, MONTH_NAMES } from "@/lib/types";
import { getHolidays } from "@/lib/holidays";
import AdSlot from "@/components/AdSlot";
import DynamicCalendarList from "@/components/DynamicCalendarList";
import { buildFaqSchema } from "@/lib/seo-helpers";
import DayCounter from "@/components/DayCounter";
import type { DayMilestone } from "@/components/DayCounter";

export const dynamic = "force-static";
const BASE_URL = "https://printablecalendars.app";

export const metadata: Metadata = {
  title: "Holiday Planner —Map Your Time Off with Printable Calendars",
  description:
    "Plan your vacation and time off around public holidays in the USA, Japan, and South Korea. See upcoming holidays month by month and download free printable PDF calendars.",
  keywords: [
    "holiday planner printable",
    "time off planner calendar",
    "vacation planner PDF",
    "public holiday planner 2026",
    "printable holiday calendar",
    "plan time off around holidays",
  ],
  alternates: { canonical: `${BASE_URL}/holiday-planner` },
  openGraph: {
    title: "Holiday Planner | PrintableCalendars",
    description:
      "See all public holidays in the USA, Japan, and South Korea —and download printable monthly calendars to plan your time off.",
    url: `${BASE_URL}/holiday-planner`,
    type: "website",
    siteName: "PrintableCalendars",
  },
  twitter: {
    card: "summary_large_image",
    title: "Holiday Planner | PrintableCalendars",
    description: "Plan time off around public holidays —free printable calendar PDFs for USA, Japan, and South Korea.",
  },
  robots: { index: true, follow: true },
};

const COUNTRY_FLAG: Record<string, string> = { US: "?눣?눡", GB: "?눐?눉", AU: "?눇?눣", CA: "?눊?눇", KR: "?눖?눟", JP: "?눓?눝" };

const HOLIDAY_MILESTONES: DayMilestone[] = [
  { min: 0, max: 0, message: "Today you leave. Safe travels." },
  { min: 1, max: 6, message: "Last check —confirm all bookings.", tip: "Charge all devices tonight." },
  { min: 7, max: 13, message: "Pack light, prepare documents.", tip: "Digital copies of passport and bookings in email." },
  { min: 14, max: 29, message: "Finalise —travel insurance, itinerary, currency.", tip: "Notify your bank before you travel." },
  { min: 30, max: 89, message: "Mid-planning —check visa requirements now.", tip: "Some visas take 4— weeks to process." },
  { min: 90, max: 99999, message: "Early planning —flights and accommodation first.", tip: "Booking 3+ months out saves 20—0%." },
];

const HOLIDAY_PLANNER_FAQS = [
  {
    q: "What is a holiday planner 2026 printable?",
    a: "A holiday planner is a monthly calendar PDF you download and print to map out your time off around public holidays. It shows every public holiday for your country so you can identify bridge days, long weekends, and holiday clusters before booking flights or accommodation.",
  },
  {
    q: "How do I plan a vacation around public holidays?",
    a: "Start by printing the months that contain public holidays for your country. Mark the holidays, then look for adjacent Mondays or Fridays you could take as annual leave to create 4- or 5-day breaks using just one or two vacation days. This is especially effective around Tuesday or Thursday holidays.",
  },
  {
    q: "Which countries' holidays are shown in the holiday planner?",
    a: "The planner shows official public holidays for USA, United Kingdom, Australia, Canada, Japan, and South Korea. You can compare across countries if you work remotely or are planning international travel.",
  },
  {
    q: "Can I download a vacation planner template as a PDF?",
    a: "Yes. Click any country link next to a holiday-rich month to view the full calendar, then use the Download PDF button on that page. All PDFs are free, A4 landscape, and require no account.",
  },
];

const PLANNING_TIPS = [
  ["Bridge days", "When a holiday falls on Tuesday or Thursday, taking the adjacent Monday or Friday creates a 4-day weekend with just one vacation day."],
  ["Cluster around long weekends", "Plan trips to start the day after a holiday —airlines and hotels are cheaper than on the holiday itself."],
  ["Book early for peak periods", "Golden Week (JP), Chuseok (KR), Thanksgiving (US), and Christmas block up 3— months in advance."],
  ["Check neighbouring country calendars", "If you work remotely, US holidays can be great times to travel to Japan or Korea —prices drop as local tourism falls."],
];

export default function HolidayPlannerPage() {
  const now = new Date();
  const year = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const faqSchema = buildFaqSchema(HOLIDAY_PLANNER_FAQS.map((f) => ({ q: f.q, a: f.a })));

  // Gather upcoming holidays for each country
  const upcomingByCountry = SUPPORTED_COUNTRIES.map((c) => {
    const holidays = getHolidays(c.code, year)
      .filter((h) => {
        const hDate = new Date(h.date);
        return hDate >= now;
      })
      .slice(0, 8);
    return { country: c, holidays };
  });

  // Holiday-dense months (months with 2+ holidays across all countries)
  const monthHolidayCounts: Record<number, number> = {};
  SUPPORTED_COUNTRIES.forEach((c) => {
    getHolidays(c.code, year).forEach((h) => {
      const m = new Date(h.date).getMonth() + 1;
      if (m >= currentMonth) {
        monthHolidayCounts[m] = (monthHolidayCounts[m] ?? 0) + 1;
      }
    });
  });
  const hotMonths = Object.entries(monthHolidayCounts)
    .sort((a, b) => Number(b[1]) - Number(a[1]))
    .slice(0, 4)
    .map(([m]) => Number(m));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
            Time Off Planning
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
            Holiday planner ??            <br />
            <span style={{ opacity: 0.4 }}>make every day count.</span>
          </h1>
          <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.65 }}>
            See all upcoming public holidays for the USA, Japan, and South
            Korea. Identify bridge days, long weekends, and holiday clusters ??            then download free printable calendars to plan your time off.
          </p>
        </div>

        <DayCounter
          targetLabel="Departure Date"
          storageKey="trip-date"
          milestones={HOLIDAY_MILESTONES}
        />

        <DynamicCalendarList
          storageKey="trip-date"
          maxMonths={12}
          badgeLabel="Trip month"
          pdfHeaderText="Trip Countdown"
          pdfTargetLabel="Departure"
          noDateHint="Set your departure date above to see your trip calendars."
        />

        {/* Holiday-dense months */}
        {hotMonths.length > 0 && (
          <section style={{ marginBottom: 56 }}>
            <h2
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                color: "var(--muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Holiday-rich months in {year}
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: 12,
              }}
            >
              {hotMonths.map((m) => (
                <div
                  key={m}
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: 10,
                    padding: "16px 18px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'EB Garamond', Georgia, serif",
                      fontSize: 18,
                      fontWeight: 400,
                      marginBottom: 4,
                    }}
                  >
                    {MONTH_NAMES[m - 1]}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 10,
                      color: "var(--holiday)",
                      letterSpacing: "0.05em",
                      marginBottom: 12,
                    }}
                  >
                    {monthHolidayCounts[m]} holidays across countries
                  </p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {SUPPORTED_COUNTRIES.map((c) => (
                      <Link
                        key={c.code}
                        href={`/calendar/${c.code.toLowerCase()}/${year}/${m}`}
                        style={{
                          fontSize: 11,
                          padding: "4px 10px",
                          border: "1px solid var(--border)",
                          borderRadius: 5,
                          textDecoration: "none",
                          color: "var(--muted)",
                        }}
                      >
                        {c.code}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Upcoming holidays by country */}
        <section style={{ marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "var(--muted)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Upcoming public holidays
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {upcomingByCountry.map(({ country: c, holidays }) => (
              <div
                key={c.code}
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: 24,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 20,
                  }}
                >
                  <span style={{ fontSize: 18 }}>{COUNTRY_FLAG[c.code]}</span>
                  <h3
                    style={{
                      fontFamily: "'EB Garamond', Georgia, serif",
                      fontSize: 18,
                      fontWeight: 400,
                    }}
                  >
                    {c.name}
                  </h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {holidays.length === 0 ? (
                    <p style={{ fontSize: 13, color: "var(--muted)" }}>
                      No remaining holidays this year.
                    </p>
                  ) : (
                    holidays.map((h, i) => {
                      const hDate = new Date(h.date);
                      const m = hDate.getMonth() + 1;
                      return (
                        <Link
                          key={i}
                          href={`/calendar/${c.code.toLowerCase()}/${year}/${m}`}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: 12,
                            textDecoration: "none",
                            color: "inherit",
                          }}
                        >
                          <span style={{ fontSize: 13, color: "var(--fg)", flex: 1, lineHeight: 1.4 }}>
                            {h.name}
                          </span>
                          <span
                            style={{
                              fontFamily: "'DM Mono', monospace",
                              fontSize: 11,
                              color: "var(--holiday)",
                              whiteSpace: "nowrap",
                              flexShrink: 0,
                            }}
                          >
                            {h.date.slice(5)}
                          </span>
                        </Link>
                      );
                    })
                  )}
                </div>
                <Link
                  href={`/calendar/${c.code.toLowerCase()}/${year}/${currentMonth}`}
                  style={{
                    display: "inline-block",
                    marginTop: 16,
                    fontSize: 12,
                    color: "var(--muted)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--border)",
                    paddingBottom: 1,
                  }}
                >
                  View full {year} calendar ??                </Link>
              </div>
            ))}
          </div>
        </section>

        <AdSlot slot="pre-download" style={{ marginBottom: 48 }} />

        {/* Tips */}
        <section
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 40,
          }}
        >
          <h2
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: 28,
              fontWeight: 400,
              letterSpacing: "-0.01em",
              marginBottom: 28,
            }}
          >
            How to maximise your time off
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {PLANNING_TIPS.map(([title, desc]) => (
              <div key={title} style={{ borderTop: "1px solid var(--border)", paddingTop: 16 }}>
                <p style={{ fontSize: 14, fontWeight: 500, marginBottom: 6 }}>{title}</p>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginTop: 64, paddingTop: 40, borderTop: "1px solid var(--border)" }}>
          <h2
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: 28,
              fontWeight: 400,
              letterSpacing: "-0.01em",
              marginBottom: 32,
            }}
          >
            Frequently asked questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {HOLIDAY_PLANNER_FAQS.map((faq, i) => (
              <div
                key={i}
                style={{ borderTop: "1px solid var(--border)", paddingTop: 20, paddingBottom: 20 }}
              >
                <p style={{ fontSize: 15, fontWeight: 500, marginBottom: 8 }}>{faq.q}</p>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

