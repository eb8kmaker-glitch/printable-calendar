'use client'

import Link from "next/link";
import { SUPPORTED_COUNTRIES, MONTH_NAMES } from "@/lib/types";
import { useState, useEffect } from "react";
import { getTranslations, t } from "@/i18n";
import type { Locale } from "@/i18n";

function getCookieLocale(): Locale {
  if (typeof document === 'undefined') return 'en';
  const match = document.cookie.match(/(?:^|;\s*)preferred_lang=([^;]+)/);
  const val = match?.[1];
  if (val === 'ko' || val === 'ja' || val === 'en') return val;
  return 'en';
}

export default function Footer() {
  const year = new Date().getFullYear();
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    setLocale(getCookieLocale());
  }, []);

  const i18n = getTranslations(locale);
  const countryNames = i18n.countries as Record<string, string>;
  const monthNames = i18n.months as Record<string, string>;

  return (
    <footer
      className="no-print"
      style={{
        borderTop: "1px solid var(--border)",
        padding: "40px 24px 32px",
        marginTop: 80,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32, marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <p style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 18, marginBottom: 10 }}>PrintableCalendars</p>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, marginBottom: 14 }}>
              {i18n.footer.tagline}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {([
                ["/about", i18n.footer.about],
                ["/contact", i18n.footer.contact],
                ["/events", i18n.footer.worldEvents],
                ["/holidays", i18n.footer.culturalHolidays],
                ["/date-calculator", i18n.footer.dateCalculator],
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
                {countryNames[c.code.toLowerCase()] ?? c.name}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {[1, 2, 3, 4, 5, 6].map((m) => (
                  <Link
                    key={m}
                    href={`/calendar/${c.code.toLowerCase()}/${year}/${m}`}
                    style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none" }}
                  >
                    {monthNames[String(m)] ?? MONTH_NAMES[m - 1]} {year}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Planners */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>
              {i18n.footer.planners}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {([
                ["/study-planner", i18n.footer.studyPlanner],
                ["/teacher-planner", i18n.footer.teacherPlanner],
                ["/school-calendar-2026", t(i18n.footer.schoolCalendar, { year })],
                ["/holiday-planner", i18n.footer.holidayPlanner],
                ["/ramadan-2026", t(i18n.footer.ramadan, { year: 2026 })],
                ["/wedding-countdown", i18n.footer.weddingCountdown],
              ] as [string, string][]).map(([href, label]) => (
                <Link key={href} href={href} style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none" }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "var(--muted)", flexWrap: "wrap", gap: 12 }}>
          <span>{t(i18n.footer.copyright, { year })}</span>
          <div style={{ display: "flex", gap: 16 }}>
            <Link href="/about" style={{ color: "var(--muted)", textDecoration: "none" }}>{i18n.footer.about}</Link>
            <Link href="/contact" style={{ color: "var(--muted)", textDecoration: "none" }}>{i18n.footer.contact}</Link>
            <Link href="/sitemap.xml" style={{ color: "var(--muted)", textDecoration: "none" }}>{i18n.footer.sitemap}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
