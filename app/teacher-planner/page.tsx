import Link from "next/link";
import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import DynamicCalendarList from "@/components/DynamicCalendarList";
import { buildFaqSchema } from "@/lib/seo-helpers";
import DayCounter from "@/components/DayCounter";
import type { DayMilestone } from "@/components/DayCounter";

export const dynamic = "force-static";
const BASE_URL = "https://printablecalendars.app";

export const metadata: Metadata = {
  title: "Free Printable Teacher Planner Calendars —PDF Download",
  description:
    "Free printable monthly teacher planner calendars with public holidays. Plan lessons, mark parent-teacher nights, and track school events. A4 PDF, clean design, instant download.",
  keywords: [
    "printable teacher planner",
    "teacher calendar PDF",
    "classroom calendar printable",
    "free teacher planner 2026",
    "monthly planner for teachers",
    "lesson plan calendar printable",
  ],
  alternates: { canonical: `${BASE_URL}/teacher-planner` },
  openGraph: {
    title: "Free Printable Teacher Planner Calendars | PrintableCalendars",
    description:
      "Monthly teacher planners with public holidays —free A4 PDF download. Plan your whole school year.",
    url: `${BASE_URL}/teacher-planner`,
    type: "website",
    siteName: "PrintableCalendars",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Printable Teacher Planner Calendars | PrintableCalendars",
    description: "Teacher planner calendars with holidays —free monthly PDF download.",
  },
  robots: { index: true, follow: true },
};

const TEACHER_MILESTONES: DayMilestone[] = [
  { min: 0, max: 0, message: "Term complete. Well done." },
  { min: 1, max: 13, message: "End of term —grades, reports, parent comms.", tip: "Batch similar tasks to save time." },
  { min: 14, max: 29, message: "Final push —start wrapping up units.", tip: "Leave buffer time for unexpected delays." },
  { min: 30, max: 59, message: "Mid-term —check in with struggling students now.", tip: "Small interventions now prevent big problems later." },
  { min: 60, max: 99999, message: "Strong start —establish routines early.", tip: "First 2 weeks set the tone for the whole term." },
];

const TEACHER_FAQS = [
  {
    q: "What makes a printable teacher planner 2026 useful in the classroom?",
    a: "A printed monthly calendar sits on your desk without requiring a screen, a password, or an internet connection. You can annotate it in pen, circle dates, and hand a copy to a substitute with no setup. For classroom planning, that physical permanence is often more reliable than a digital tool.",
  },
  {
    q: "Can I use this as a free classroom calendar template?",
    a: "Yes. All calendars are free to download, print, and use in a classroom setting. Each PDF includes the official public holidays for your country, a clean monthly grid, and landscape A4 layout with space to write lesson titles and notes beside each day.",
  },
  {
    q: "Which countries' public holidays are included in the teacher planner?",
    a: "Calendars are available for USA, United Kingdom, Australia, Canada, Japan, and South Korea. Each country's official public holidays are marked on the grid, so you can plan around school closures without cross-referencing a separate source.",
  },
  {
    q: "How far ahead can I download teacher planner calendars?",
    a: "You can download any month for the current year or the next year. The section above shows the next 8 months by default —just scroll to the country and month you need and click PDF.",
  },
];

const CLASSROOM_USES = [
  {
    title: "Lesson planning overview",
    desc: "Print a month at a time and block curriculum units in coloured pen. A monthly view is the right resolution for most lesson planning —detailed enough to schedule, broad enough to see the arc.",
  },
  {
    title: "Parent-teacher communication",
    desc: "Pin a printed calendar on the classroom board with parent-teacher nights, report card dates, and field trips circled. Parents who miss digital notices often catch printed ones.",
  },
  {
    title: "Student behaviour tracking",
    desc: "Some teachers print a small monthly calendar per student to track daily participation, homework completion, or positive behaviour —a visual record families appreciate.",
  },
  {
    title: "Holiday awareness",
    desc: "All calendars include official public holidays —so you never accidentally schedule a test on a holiday. Helpful especially in countries with variable lunar holidays (Korea's Chuseok, Japan's shifting observances).",
  },
  {
    title: "Substitute lesson handoff",
    desc: "Leave a printed month on your desk with lessons marked. A substitute can see at a glance where the class should be —no login required, no app to figure out.",
  },
  {
    title: "Staff room planner",
    desc: "Print and laminate a monthly calendar for the staff room. Use a dry-erase marker to mark staff meetings, professional development days, and shared responsibilities.",
  },
];

export default function TeacherPlannerPage() {
  const now = new Date();
  const year = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const faqSchema = buildFaqSchema(TEACHER_FAQS.map((f) => ({ q: f.q, a: f.a })));


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
            For Teachers
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
            Printable teacher planner
            <br />
            <span style={{ opacity: 0.4 }}>calendars, free forever.</span>
          </h1>
          <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.65, marginBottom: 28 }}>
            Monthly calendars for classroom planning ??with public holidays for
            USA, Japan, and South Korea. Print one for your desk, one for the
            board, and one to share with parents. Clean A4 landscape PDF, no
            login, no subscription.
          </p>
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
            View this month ??          </Link>
        </div>

        <DayCounter
          targetLabel="End of Term"
          storageKey="term-end"
          milestones={TEACHER_MILESTONES}
        />

        <DynamicCalendarList
          storageKey="term-end"
          maxMonths={12}
          badgeLabel="Last term month"
          pdfHeaderText="Term Countdown"
          pdfTargetLabel="Term End"
          noDateHint="Set your term end date above to see your planner calendars."
        />

        <AdSlot slot="pre-download" style={{ marginBottom: 48 }} />

        {/* Use cases */}
        <section style={{ marginBottom: 64 }}>
          <h2
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: 28,
              fontWeight: 400,
              letterSpacing: "-0.01em",
              marginBottom: 32,
            }}
          >
            How teachers use printed calendars
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {CLASSROOM_USES.map(({ title, desc }) => (
              <div
                key={title}
                style={{ borderTop: "1px solid var(--border)", paddingTop: 16 }}
              >
                <p style={{ fontSize: 14, fontWeight: 500, marginBottom: 6 }}>{title}</p>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
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
            ["Landscape A4 layout", "Plenty of horizontal space for writing lesson titles and notes beside each date."],
            ["Official holidays", "All public holidays included —no missed planning around closures."],
            ["B&W optimised", "Prints cleanly on any school photocopier or inkjet printer."],
            ["Instant & free", "No account, no forms —just click and download."],
          ].map(([title, desc]) => (
            <div key={title}>
              <p style={{ fontWeight: 500, fontSize: 14, marginBottom: 6 }}>{title}</p>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
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
            {TEACHER_FAQS.map((faq, i) => (
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

