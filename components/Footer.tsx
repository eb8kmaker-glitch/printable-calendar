import Link from "next/link";
import { SUPPORTED_COUNTRIES, MONTH_NAMES } from "@/lib/types";
import { t } from "@/i18n";
import type { Locale } from "@/i18n";
import AdFit from "@/components/AdFit";

interface FooterTranslations {
  tagline: string;
  about: string;
  contact: string;
  worldEvents: string;
  culturalHolidays: string;
  dateCalculator: string;
  copyright: string;
  sitemap: string;
  planners: string;
  studyPlanner: string;
  teacherPlanner: string;
  schoolCalendar: string;
  holidayPlanner: string;
  ramadan: string;
  weddingCountdown: string;
  resignationPlanner: string;
}

interface FooterProps {
  locale?: Locale;
  footerI18n?: FooterTranslations;
  countryNames?: Record<string, string>;
  monthNames?: Record<string, string>;
}

export default function Footer({ locale = 'en', footerI18n, countryNames, monthNames }: FooterProps) {
  const year = new Date().getFullYear();

  const footer = footerI18n ?? {
    tagline: "Free printable monthly calendars with public holidays. Download as A4 PDF.",
    about: "About", contact: "Contact", worldEvents: "World Events",
    culturalHolidays: "Cultural Holidays", dateCalculator: "Date Calculator",
    copyright: "© {year} PrintableCalendars. Free to use.",
    sitemap: "Sitemap", planners: "Planners", studyPlanner: "Study Planner",
    teacherPlanner: "Teacher Planner", schoolCalendar: "School Calendar {year}",
    holidayPlanner: "Holiday Planner", ramadan: "Ramadan {year}",
    weddingCountdown: "Wedding Countdown", resignationPlanner: "Resignation Planner",
  };

  return (
    <footer
      className="no-print"
      style={{ borderTop: "1px solid var(--border)", padding: "40px 24px 32px", marginTop: 80 }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32, marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <p style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 18, marginBottom: 10 }}>PrintableCalendars</p>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, marginBottom: 14 }}>
              {footer.tagline}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {([
                ["/about", footer.about],
                ["/contact", footer.contact],
                ["/events", footer.worldEvents],
                ["/holidays", footer.culturalHolidays],
                ["/date-calculator", footer.dateCalculator],
              ] as [string, string][]).map(([href, label]) => (
                <Link key={href} href={href} style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none" }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Calendar columns per country */}
          {SUPPORTED_COUNTRIES.map((c) => (
            <div key={c.code}>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>
                {countryNames?.[c.code.toLowerCase()] ?? c.name}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {[1, 2, 3, 4, 5, 6].map((m) => (
                  <Link
                    key={m}
                    href={`/calendar/${c.code.toLowerCase()}/${year}/${m}`}
                    style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none" }}
                  >
                    {monthNames?.[String(m)] ?? MONTH_NAMES[m - 1]} {year}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Planners */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>
              {footer.planners}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {([
                ["/study-planner", footer.studyPlanner],
                ["/teacher-planner", footer.teacherPlanner],
                ["/school-calendar-2026", t(footer.schoolCalendar, { year })],
                ["/holiday-planner", footer.holidayPlanner],
                ["/ramadan-2026", t(footer.ramadan, { year: 2026 })],
                ["/wedding-countdown", footer.weddingCountdown],
                ["/resignation-planner", footer.resignationPlanner],
              ] as [string, string][]).map(([href, label]) => (
                <Link key={href} href={href} style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none" }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <AdFit />

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "var(--muted)", flexWrap: "wrap", gap: 12 }}>
          <span>{t(footer.copyright, { year })}</span>
          <div style={{ display: "flex", gap: 16 }}>
            <Link href="/about" style={{ color: "var(--muted)", textDecoration: "none" }}>{footer.about}</Link>
            <Link href="/contact" style={{ color: "var(--muted)", textDecoration: "none" }}>{footer.contact}</Link>
            <Link href="/sitemap.xml" style={{ color: "var(--muted)", textDecoration: "none" }}>{footer.sitemap}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
