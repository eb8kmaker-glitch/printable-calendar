import Link from "next/link";
import type { Metadata } from "next";
import { SUPPORTED_COUNTRIES, MONTH_NAMES } from "@/lib/types";
import AdSlot from "@/components/AdSlot";

const BASE_URL = "https://printablecalendars.app";

export const metadata: Metadata = {
  title: "Free Printable Teacher Planner Calendars — PDF Download",
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
      "Monthly teacher planners with public holidays — free A4 PDF download. Plan your whole school year.",
    url: `${BASE_URL}/teacher-planner`,
    type: "website",
    siteName: "PrintableCalendars",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Printable Teacher Planner Calendars | PrintableCalendars",
    description: "Teacher planner calendars with holidays — free monthly PDF download.",
  },
  robots: { index: true, follow: true },
};

const CLASSROOM_USES = [
  {
    title: "Lesson planning overview",
    desc: "Print a month at a time and block curriculum units in coloured pen. A monthly view is the right resolution for most lesson planning — detailed enough to schedule, broad enough to see the arc.",
  },
  {
    title: "Parent-teacher communication",
    desc: "Pin a printed calendar on the classroom board with parent-teacher nights, report card dates, and field trips circled. Parents who miss digital notices often catch printed ones.",
  },
  {
    title: "Student behaviour tracking",
    desc: "Some teachers print a small monthly calendar per student to track daily participation, homework completion, or positive behaviour — a visual record families appreciate.",
  },
  {
    title: "Holiday awareness",
    desc: "All calendars include official public holidays — so you never accidentally schedule a test on a holiday. Helpful especially in countries with variable lunar holidays (Korea's Chuseok, Japan's shifting observances).",
  },
  {
    title: "Substitute lesson handoff",
    desc: "Leave a printed month on your desk with lessons marked. A substitute can see at a glance where the class should be — no login required, no app to figure out.",
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

  // Show the remaining months of the current academic year (next 8 months)
  const plannerMonths = Array.from({ length: 8 }, (_, i) => {
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
            Monthly calendars for classroom planning — with public holidays for
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
            View this month →
          </Link>
        </div>

        {/* Month grid */}
        <section style={{ marginBottom: 64 }}>
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
            Download monthly planner PDFs
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {plannerMonths.map(({ month: m, year: y, name }) => (
              <div
                key={`${y}-${m}`}
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  padding: "18px 20px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontSize: 17,
                    fontWeight: 400,
                    marginBottom: 14,
                  }}
                >
                  {name} {y}
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {SUPPORTED_COUNTRIES.map((c) => {
                    const pdfUrl = `/api/pdf?country=${c.code.toLowerCase()}&year=${y}&month=${m}&size=A4&orientation=landscape&theme=light`;
                    return (
                      <div key={c.code} style={{ display: "flex", gap: 5 }}>
                        <Link
                          href={`/calendar/${c.code.toLowerCase()}/${y}/${m}`}
                          style={{
                            fontSize: 12,
                            padding: "5px 12px",
                            border: "1px solid var(--border)",
                            borderRadius: 6,
                            textDecoration: "none",
                            color: "var(--fg)",
                          }}
                        >
                          {c.code}
                        </Link>
                        <a
                          href={pdfUrl}
                          download={`teacher-planner-${c.code.toLowerCase()}-${y}-${String(m).padStart(2, "0")}.pdf`}
                          style={{
                            fontSize: 11,
                            padding: "5px 10px",
                            border: "1px solid var(--border)",
                            borderRadius: 6,
                            textDecoration: "none",
                            color: "var(--muted)",
                          }}
                        >
                          PDF
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

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
            ["Official holidays", "All public holidays included — no missed planning around closures."],
            ["B&W optimised", "Prints cleanly on any school photocopier or inkjet printer."],
            ["Instant & free", "No account, no forms — just click and download."],
          ].map(([title, desc]) => (
            <div key={title}>
              <p style={{ fontWeight: 500, fontSize: 14, marginBottom: 6 }}>{title}</p>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
