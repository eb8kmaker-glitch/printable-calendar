import Link from "next/link";
import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import DynamicCalendarList from "@/components/DynamicCalendarList";
import { CALENDAR_YEARS } from "@/lib/types";
import { buildFaqSchema } from "@/lib/seo-helpers";
import DayCounter from "@/components/DayCounter";
import type { DayMilestone } from "@/components/DayCounter";
import { getLocale } from "@/i18n/server";
import { getTranslations } from "@/i18n";

export const dynamic = "force-dynamic";
const BASE_URL = "https://printablecalendars.app";

export const metadata: Metadata = {
  title: "Wedding Countdown Printable Calendar —Plan Month by Month",
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

export default async function WeddingCountdownPage() {
  const locale = await getLocale();
  const i18n = getTranslations(locale);
  const p = (i18n as unknown as Record<string, Record<string, string>>).weddingCountdown ?? {};
  const now = new Date();
  const year = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const faqSchema = buildFaqSchema(WEDDING_FAQS.map((f) => ({ q: f.q, a: f.a })));

  const WEDDING_MILESTONES: DayMilestone[] = [
    { min: 0, max: 0, message: p.ms0msg ?? "Today is your wedding day." },
    { min: 1, max: 6, message: p.ms1msg ?? "This is it. You're ready.", tip: p.ms1tip ?? "Sleep. Everything is handled." },
    { min: 7, max: 29, message: p.ms2msg ?? "Almost there — delegate, pack, breathe.", tip: p.ms2tip ?? "Hand off day-of coordination to someone you trust." },
    { min: 30, max: 89, message: p.ms3msg ?? "Final fittings, payments, and last confirmations.", tip: p.ms3tip ?? "Write your vows this week." },
    { min: 90, max: 179, message: p.ms4msg ?? "Send formal invitations and finalise your vendors.", tip: p.ms4tip ?? "Confirm headcount with caterer 6 weeks out." },
    { min: 180, max: 364, message: p.ms5msg ?? "Big decisions time — photographer, caterer, dress.", tip: p.ms5tip ?? "Send save-the-dates now." },
    { min: 365, max: 99999, message: p.ms6msg ?? "Start early — book your venue and set a date.", tip: p.ms6tip ?? "Popular venues book up 18 months out." },
  ];

  const HOW_TO_USE_I18N = [
    [p.step1Title ?? "Print one month at a time", p.step1Body ?? "Start with the current month. Fill in venue visits, tastings, and fittings as you go."],
    [p.step2Title ?? "Write deadlines in red", p.step2Body ?? "Payments, RSVPs, and booking cut-offs are easy to miss — highlight them on the printed sheet."],
    [p.step3Title ?? "Post it somewhere visible", p.step3Body ?? "Stick the current month to your fridge or office wall. Out of sight is out of mind."],
    [p.step4Title ?? "Share with your partner", p.step4Body ?? "Print two copies — one for each partner — so both are tracking the same milestones."],
  ];

  // Month-by-month wedding planning milestones (with i18n)
  const PLANNING_MILESTONES_I18N = [
    { label: p.mile1Label ?? "12 months before", body: p.mile1Body ?? "Set the date, choose a venue, and book your photographer." },
    { label: p.mile2Label ?? "6 months before", body: p.mile2Body ?? "Send save-the-dates, book caterer and officiant, start dress/suit shopping." },
    { label: p.mile3Label ?? "4 months before", body: p.mile3Body ?? "Send formal invitations, book honeymoon, arrange accommodation for guests." },
    { label: p.mile4Label ?? "3 months before", body: p.mile4Body ?? "Finalise menu, confirm vendors, schedule hair and makeup trials." },
    { label: p.mile5Label ?? "1 month before", body: p.mile5Body ?? "Confirm all vendors, do final dress fitting, prepare seating plan." },
  ];

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
            {p.eyebrow ?? "Wedding Planning"}
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
            {p.title ?? "Wedding countdown"}
            <br />
            <span style={{ opacity: 0.4 }}>{p.subtitle ?? "month by month."}</span>
          </h1>
          <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.65, marginBottom: 28 }}>
            {p.description ?? "Count down to your wedding day month by month — with free printable calendars to track every milestone, deadline, and detail."}
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
              {p.viewThisMonth ?? "Start this month →"}</Link>
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
              {p.downloadPdf ?? "Download PDF"}
            </a>
          </div>
        </div>

        <DayCounter
          targetLabel={p.countdownLabel ?? "Wedding Day"}
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
            {p.howToUseSection ?? p.howToUse ?? "How to use a printed countdown calendar"}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20,
            }}
          >
            {HOW_TO_USE_I18N.map(([title, desc]) => (
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
            {p.planningTitle ?? "What to plan each month"}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {PLANNING_MILESTONES_I18N.map((milestone, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: 24,
                  paddingBottom: 28,
                  marginBottom: 28,
                  borderBottom: i < PLANNING_MILESTONES_I18N.length - 1 ? "1px solid var(--border)" : "none",
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
                    {milestone.label}
                  </p>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.55 }}>{milestone.body}</p>
              </div>
            ))}
          </div>
        </section>

        <DynamicCalendarList
          storageKey="wedding-date"
          maxMonths={24}
          years={CALENDAR_YEARS}
          badgeLabel="Wedding month"
          pdfHeaderText="Wedding Countdown"
          pdfTargetLabel="Wedding Day"
          noDateHint={p.downloadHint ?? "Enter your wedding date above to customize this list."}
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
            {p.faqTitle ?? "Frequently asked questions"}
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
