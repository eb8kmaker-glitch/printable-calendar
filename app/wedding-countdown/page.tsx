import Link from "next/link";
import type { Metadata } from "next";
import { SUPPORTED_COUNTRIES, MONTH_NAMES } from "@/lib/types";
import AdSlot from "@/components/AdSlot";

const BASE_URL = "https://printablecalendars.app";

export const metadata: Metadata = {
  title: "Wedding Countdown Printable Calendar — Plan Month by Month",
  description:
    "Download free printable monthly calendars to count down to your wedding day. Plan vendor meetings, dress fittings, and deadlines month by month. A4 PDF, instant download.",
  keywords: [
    "wedding countdown calendar printable",
    "wedding planning calendar PDF",
    "printable wedding planner calendar",
    "month by month wedding countdown",
    "free wedding calendar download",
    "wedding date countdown printable",
  ],
  alternates: { canonical: `${BASE_URL}/wedding-countdown` },
  openGraph: {
    title: "Wedding Countdown Printable Calendar | PrintableCalendars",
    description:
      "Plan your wedding month by month with free printable calendars. Track vendor bookings, fittings, and deadlines. Free PDF download.",
    url: `${BASE_URL}/wedding-countdown`,
    type: "website",
    siteName: "PrintableCalendars",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Countdown Printable Calendar | PrintableCalendars",
    description: "Free printable monthly calendars for wedding planning and countdown tracking.",
  },
  robots: { index: true, follow: true },
};

// Month-by-month wedding planning milestones
const PLANNING_MILESTONES: { monthsBefore: number; tasks: string[] }[] = [
  {
    monthsBefore: 12,
    tasks: [
      "Set your date and book your venue",
      "Agree on a rough guest list and budget",
      "Research and book key vendors (photographer, caterer)",
      "Start dress/suit shopping",
    ],
  },
  {
    monthsBefore: 9,
    tasks: [
      "Send save-the-dates",
      "Book officiant, florist, and band/DJ",
      "Begin honeymoon research",
      "Arrange accommodation for out-of-town guests",
    ],
  },
  {
    monthsBefore: 6,
    tasks: [
      "Send formal invitations",
      "Finalise catering menu and cake",
      "Book hair and makeup artists",
      "Register for gifts",
    ],
  },
  {
    monthsBefore: 3,
    tasks: [
      "Final dress/suit fittings",
      "Confirm all vendors and share final timeline",
      "Write personal vows",
      "Apply for marriage license",
    ],
  },
  {
    monthsBefore: 1,
    tasks: [
      "Final walkthrough with venue coordinator",
      "Deliver payments to vendors",
      "Pack for honeymoon",
      "Delegate day-of responsibilities to a coordinator or trusted friend",
    ],
  },
];

export default function WeddingCountdownPage() {
  const now = new Date();
  const year = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  // Show the next 12 months for planning
  const countdownMonths = Array.from({ length: 12 }, (_, i) => {
    const totalMonth = currentMonth + i;
    const m = ((totalMonth - 1) % 12) + 1;
    const y = year + Math.floor((totalMonth - 1) / 12);
    return { month: m, year: y, name: MONTH_NAMES[m - 1] };
  });

  return (
    <>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
        <AdSlot slot="top-banner" style={{ marginBottom: 32 }} />

        {/* Hero */}
        <div style={{ marginBottom: 64, maxWidth: 620 }}>
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
            Wedding Planning
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
            Wedding countdown
            <br />
            <span style={{ opacity: 0.4 }}>month by month.</span>
          </h1>
          <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.65, marginBottom: 28 }}>
            Download a free printable monthly calendar for each month leading
            up to your wedding day. Write in vendor meetings, dress fittings,
            deadline reminders, and family events. Includes public holidays so
            you never accidentally schedule a meeting on a day everything
            is closed.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href={`/calendar/us/${year}/${currentMonth}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                background: "var(--fg)",
                color: "var(--bg)",
                borderRadius: 8,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Start this month →
            </Link>
            <a
              href={`/api/pdf?country=us&year=${year}&month=${currentMonth}&size=A4&orientation=landscape&theme=light`}
              download={`wedding-countdown-us-${year}-${String(currentMonth).padStart(2, "0")}.pdf`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                border: "1px solid var(--border)",
                color: "var(--fg)",
                borderRadius: 8,
                textDecoration: "none",
                fontSize: 14,
              }}
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* How to use */}
        <section
          style={{
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: "28px 28px 24px",
            marginBottom: 56,
          }}
        >
          <h2
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "var(--muted)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            How to use a printed countdown calendar
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20,
            }}
          >
            {[
              ["Print one month at a time", "Download the calendar for each upcoming month. Write in vendor calls, tastings, and fittings as they are booked."],
              ["Write deadlines in red", "Mark payment deadlines, RSVP cutoffs, and contract signing dates in a contrasting colour so they are impossible to miss."],
              ["Post it somewhere visible", "Pin the current month on the fridge or bathroom mirror — not buried in a planner. Daily visibility is the point."],
              ["Share with your partner", "Print two copies — one for each of you. Independently reviewing the same month catches missed items before they become problems."],
            ].map(([title, desc]) => (
              <div key={title}>
                <p style={{ fontSize: 14, fontWeight: 500, marginBottom: 6 }}>{title}</p>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Planning milestones */}
        <section style={{ marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: 28,
              fontWeight: 400,
              letterSpacing: "-0.01em",
              marginBottom: 28,
            }}
          >
            What to plan each month
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {PLANNING_MILESTONES.map((milestone, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: 24,
                  paddingBottom: 28,
                  marginBottom: 28,
                  borderBottom: i < PLANNING_MILESTONES.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      color: "var(--holiday)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {milestone.monthsBefore === 1
                      ? "1 month before"
                      : `${milestone.monthsBefore} months before`}
                  </p>
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {milestone.tasks.map((task, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        gap: 10,
                        alignItems: "flex-start",
                        fontSize: 14,
                        lineHeight: 1.55,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 10,
                          color: "var(--muted)",
                          paddingTop: 3,
                          flexShrink: 0,
                        }}
                      >
                        ○
                      </span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Calendar downloads */}
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
            Download your countdown months
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 12,
            }}
          >
            {countdownMonths.map(({ month: m, year: y, name }, i) => (
              <div
                key={`${y}-${m}`}
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  padding: "14px 16px",
                }}
              >
                <div style={{ marginBottom: 10 }}>
                  <p style={{ fontSize: 14, fontWeight: 500 }}>{name} {y}</p>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 10,
                      color: "var(--muted)",
                      marginTop: 2,
                    }}
                  >
                    {i === 0 ? "This month" : `${i + 1} months from now`}
                  </p>
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {SUPPORTED_COUNTRIES.map((c) => (
                    <div key={c.code} style={{ display: "flex", gap: 4 }}>
                      <Link
                        href={`/calendar/${c.code.toLowerCase()}/${y}/${m}`}
                        style={{
                          fontSize: 11,
                          padding: "4px 10px",
                          border: "1px solid var(--border)",
                          borderRadius: 5,
                          textDecoration: "none",
                          color: "var(--fg)",
                        }}
                      >
                        {c.code}
                      </Link>
                      <a
                        href={`/api/pdf?country=${c.code.toLowerCase()}&year=${y}&month=${m}&size=A4&orientation=landscape&theme=light`}
                        download={`wedding-countdown-${c.code.toLowerCase()}-${y}-${String(m).padStart(2, "0")}.pdf`}
                        style={{
                          fontSize: 11,
                          padding: "4px 10px",
                          border: "1px solid var(--border)",
                          borderRadius: 5,
                          textDecoration: "none",
                          color: "var(--muted)",
                        }}
                      >
                        PDF
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <AdSlot slot="pre-download" style={{ marginBottom: 32 }} />
      </div>
    </>
  );
}
