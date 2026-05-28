import Link from "next/link";
import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import DynamicCalendarList from "@/components/DynamicCalendarList";
import { buildFaqSchema } from "@/lib/seo-helpers";
import DayCounter from "@/components/DayCounter";
import type { DayMilestone } from "@/components/DayCounter";

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

const WEDDING_FAQS = [
  {
    q: "How do I use a wedding countdown calendar printable?",
    a: "Download one calendar PDF for each month between now and your wedding date. Print them all and store them in a binder, or put the current month on the fridge. Write in vendor calls, fittings, payment deadlines, and family commitments as they come up. A physical calendar is harder to ignore than a phone reminder.",
  },
  {
    q: "What should I track on a wedding planning calendar PDF?",
    a: "Key milestones include: venue and vendor deposit deadlines, dress and suit fitting appointments, RSVP cutoff dates, rehearsal dinner and ceremony rehearsal, final headcount to the caterer, and honeymoon booking deadlines. The planning checklist above shows the typical month-by-month breakdown.",
  },
  {
    q: "How far in advance should I start my wedding countdown calendar?",
    a: "Most couples start planning 12 to 18 months in advance for weekend weddings at popular venues. If your wedding is in peak season (June, September, October), start even earlier. The download section above shows the next 12 months so you can begin immediately.",
  },
  {
    q: "Do the wedding countdown calendars include public holidays?",
    a: "Yes. Every calendar includes the official public holidays for your chosen country (USA, UK, Australia, Canada, Japan, or South Korea). This helps you avoid scheduling meetings or deliveries on bank holidays when vendors may be unavailable.",
  },
];

const WEDDING_MILESTONES: DayMilestone[] = [
  { min: 0, max: 0, message: "Today is your wedding day." },
  { min: 1, max: 6, message: "This is it. You're ready.", tip: "Sleep. Everything is handled." },
  { min: 7, max: 29, message: "Almost there — delegate, pack, breathe.", tip: "Hand off day-of coordination to someone you trust." },
  { min: 30, max: 89, message: "Final fittings, payments, and last confirmations.", tip: "Write your vows this week." },
  { min: 90, max: 179, message: "Send formal invitations and finalise your vendors.", tip: "Confirm headcount with caterer 6 weeks out." },
  { min: 180, max: 364, message: "Big decisions time — photographer, caterer, dress.", tip: "Send save-the-dates now." },
  { min: 365, max: 99999, message: "Start early — book your venue and set a date.", tip: "Popular venues book up 18 months out." },
];

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
  const faqSchema = buildFaqSchema(WEDDING_FAQS.map((f) => ({ q: f.q, a: f.a })));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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

        <DayCounter
          targetLabel="Wedding Day"
          storageKey="wedding-date"
          milestones={WEDDING_MILESTONES}
        />

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

        <DynamicCalendarList
          storageKey="wedding-date"
          maxMonths={24}
          badgeLabel="Wedding month"
          pdfHeaderText="Wedding Countdown"
          pdfTargetLabel="Wedding Day"
          noDateHint="Enter your wedding date above to customize this list."
        />

        <AdSlot slot="pre-download" style={{ marginBottom: 32 }} />

        {/* FAQ */}
        <section style={{ marginTop: 32, paddingTop: 40, borderTop: "1px solid var(--border)" }}>
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
            {WEDDING_FAQS.map((faq, i) => (
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
