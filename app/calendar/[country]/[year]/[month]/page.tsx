import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getHolidays, buildCalendarDays, getCountryConfig } from "@/lib/holidays";
import { getCalendarContent } from "@/lib/calendar-content";
import { MONTH_NAMES, SUPPORTED_COUNTRIES, CALENDAR_YEARS } from "@/lib/types";
import { getEventsByMonth, formatEventDate, CATEGORY_LABELS } from "@/lib/events";
import CalendarGrid from "@/components/CalendarGrid";
import MonthNav from "@/components/MonthNav";
import DownloadButton from "@/components/DownloadButton";
import LangSwitcher from "@/components/LangSwitcher";
import AdSlot from "@/components/AdSlot";
import MonthSummary from "@/components/MonthSummary";
import Link from "next/link";
import { buildHowToSchema, generateCalendarPageSchema, COUNTRY_NAMES } from "@/lib/seo-helpers";
import { getLocale } from "@/i18n/server";
import { getTranslations, t } from "@/i18n";
import type { Locale } from "@/i18n";

interface PageProps {
  params: Promise<{ country: string; year: string; month: string }>;
}

// Years we statically generate: see CALENDAR_YEARS in lib/types. With
// dynamicParams = false, any year outside that list returns 404 instead of
// being rendered and written to the ISR cache.
export const dynamicParams = false;

export async function generateStaticParams() {
  const params = [];
  for (const country of SUPPORTED_COUNTRIES) {
    for (const year of CALENDAR_YEARS) {
      for (let month = 1; month <= 12; month++) {
        params.push({
          country: country.code.toLowerCase(),
          year: String(year),
          month: String(month),
        });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country, year, month } = await params;
  const config = getCountryConfig(country);
  // Out-of-range years 404 in the page below; don't emit canonical/hreflang
  // URLs for one of them.
  if (!config || !CALENDAR_YEARS.includes(Number(year))) return {};

  const locale = await getLocale();
  const i18n = getTranslations(locale);
  const monthName = (i18n.months as Record<string, string>)[String(parseInt(month))] ?? MONTH_NAMES[Number(month) - 1];
  const countryName = (i18n.countries as Record<string, string>)[country] ?? config.name;

  const titles: Record<Locale, string> = {
    en: `${monthName} ${year} Printable Calendar — ${countryName} Public Holidays`,
    ko: `${year}년 ${monthName} 달력 — ${countryName} 공휴일`,
    ja: `${year}年${monthName}カレンダー — ${countryName}の祝日`,
  };
  const descriptions: Record<Locale, string> = {
    en: `Free printable ${monthName} ${year} calendar for ${countryName} with official public holidays. Download as A4 PDF instantly, no login required.`,
    ko: `${countryName} ${year}년 ${monthName} 공식 공휴일이 포함된 무료 인쇄용 달력. A4 PDF 즉시 다운로드, 로그인 불필요.`,
    ja: `${countryName}の${year}年${monthName}の公式祝日入り無料印刷用カレンダー。A4 PDFをすぐにダウンロード、ログイン不要。`,
  };

  return {
    title: titles[locale],
    description: descriptions[locale],
    keywords: [
      `${countryName} calendar ${monthName} ${year}`,
      `printable calendar ${monthName} ${year}`,
      `${monthName} ${year} calendar PDF`,
      `${countryName} public holidays ${year}`,
      `free printable monthly calendar`,
    ],
    openGraph: { title: titles[locale], description: descriptions[locale], type: "website", siteName: "PrintableCalendars" },
    twitter: { card: "summary_large_image", title: titles[locale], description: descriptions[locale] },
    alternates: {
      canonical: `https://printablecalendars.app/calendar/${country}/${year}/${month}`,
      languages: {
        'en': `https://printablecalendars.app/calendar/us/${year}/${month}`,
        'ko': `https://printablecalendars.app/calendar/kr/${year}/${month}`,
        'ja': `https://printablecalendars.app/calendar/jp/${year}/${month}`,
        'x-default': `https://printablecalendars.app/calendar/us/${year}/${month}`,
      },
    },
  };
}

export default async function CalendarPage({ params }: PageProps) {
  const { country, year: yearStr, month: monthStr } = await params;
  const year = Number(yearStr);
  const month = Number(monthStr);

  const config = getCountryConfig(country);
  // The CALENDAR_YEARS check subsumes isNaN(year): a non-numeric segment parses
  // to NaN, which is never in the list. It also does the work dynamicParams =
  // false is meant to do — that only gates prerendered routes, and this one
  // renders dynamically, so an out-of-range year would otherwise render fine.
  if (!config || !CALENDAR_YEARS.includes(year) || isNaN(month) || month < 1 || month > 12) {
    notFound();
  }

  const locale = await getLocale();
  const i18n = getTranslations(locale);
  const monthName = (i18n.months as Record<string, string>)[String(month)] ?? MONTH_NAMES[month - 1];
  const countryName = (i18n.countries as Record<string, string>)[country] ?? config.name;

  const holidays = getHolidays(config.code, year);
  const days = buildCalendarDays(year, month, holidays);
  const monthHolidays = days.filter((d) => d.holiday && d.isCurrentMonth);
  const monthEvents = getEventsByMonth(month).slice(0, 8);

  // Unique per-country, per-month content (null => render heading only).
  const content = await getCalendarContent(country, month, locale);

  // Locale-aware page heading, following the generateMetadata title pattern.
  const headings: Record<Locale, string> = {
    en: `${countryName} Calendar — ${monthName} ${year}`,
    ko: `${countryName} ${year}년 ${monthName} 달력`,
    ja: `${countryName} ${year}年${monthName}カレンダー`,
  };
  const pageHeading = headings[locale];

  // Crawlable previous / next month targets (with year rollover).
  const prevMonth = month === 1 ? 12 : month - 1;
  const prevYear = month === 1 ? year - 1 : year;
  const nextMonth = month === 12 ? 1 : month + 1;
  const nextYear = month === 12 ? year + 1 : year;
  // Only link to adjacent months whose year we actually generate (see
  // CALENDAR_YEARS) so crawlers can't walk an unbounded prev/next chain.
  const showPrevMonthLink = CALENDAR_YEARS.includes(prevYear);
  const showNextMonthLink = CALENDAR_YEARS.includes(nextYear);
  const months = i18n.months as Record<string, string>;
  const prevMonthName = months[String(prevMonth)] ?? MONTH_NAMES[prevMonth - 1];
  const nextMonthName = months[String(nextMonth)] ?? MONTH_NAMES[nextMonth - 1];

  const enMonthName = MONTH_NAMES[month - 1];
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Free ${enMonthName} ${year} Printable Calendar — ${config.name} PDF`,
    description: `Free printable ${enMonthName} ${year} calendar for ${config.name} with public holidays. A4 landscape PDF.`,
    url: `https://printablecalendars.app/calendar/${country}/${year}/${month}`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://printablecalendars.app" },
        { "@type": "ListItem", position: 2, name: config.name, item: `https://printablecalendars.app/calendar/${country}/${year}` },
        { "@type": "ListItem", position: 3, name: `${enMonthName} ${year}`, item: `https://printablecalendars.app/calendar/${country}/${year}/${month}` },
      ],
    },
  };

  const howToSchema = buildHowToSchema({
    name: `How to download a free printable calendar for ${config.name} — ${enMonthName} ${year}`,
    description: `Download a free A4 PDF calendar with ${config.name} public holidays in 3 steps. No login required.`,
    steps: [
      { name: "Choose your country", text: `Select ${config.name} from the country switcher at the top of the page.` },
      { name: "Navigate to the month", text: `Use the month navigation arrows to go to ${enMonthName} ${year}.` },
      { name: "Download as PDF", text: `Click the "Download PDF" button. The calendar downloads instantly as an A4 landscape PDF with all ${config.name} public holidays included. No account required.` },
    ],
  });

  const weekdayAbbrs = (i18n.weekdays as string[]).map((d) => d.slice(0, 2));

  const breadcrumb = generateCalendarPageSchema({
    country,
    countryName: COUNTRY_NAMES[country] ?? countryName,
    year,
    month,
    monthName: MONTH_NAMES[month - 1],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>
        <AdSlot slot="top-banner" style={{ marginBottom: 24 }} />

        {/* Toolbar */}
        <div
          className="no-print"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28, flexWrap: "wrap", gap: 12 }}
        >
          {/* Country switcher */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {SUPPORTED_COUNTRIES.map((c) => {
              const label = (i18n.countries as Record<string, string>)[c.code.toLowerCase()] ?? c.name;
              return (
                <Link
                  key={c.code}
                  href={`/calendar/${c.code.toLowerCase()}/${year}/${month}`}
                  style={{
                    fontSize: 12, padding: "5px 12px", border: "1px solid var(--border)",
                    borderRadius: 20, textDecoration: "none",
                    color: c.code.toLowerCase() === country ? "var(--bg)" : "var(--muted)",
                    background: c.code.toLowerCase() === country ? "var(--fg)" : "transparent",
                    transition: "all 0.15s", fontWeight: 500,
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Link
              href={`/calendar/${country}/${year}`}
              style={{ fontSize: 12, padding: "5px 12px", border: "1px solid var(--border)", borderRadius: 8, textDecoration: "none", color: "var(--muted)" }}
            >
              {i18n.calendar.yearView}
            </Link>
            <MonthNav country={country} year={year} month={month} years={CALENDAR_YEARS} />
          </div>
        </div>

        {/* Page heading + unique intro (above the grid) */}
        <header style={{ marginBottom: 24 }}>
          <h1
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: 30,
              fontWeight: 400,
              lineHeight: 1.2,
              color: "var(--fg)",
              margin: 0,
            }}
          >
            {pageHeading}
          </h1>
          {content && (
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7, maxWidth: 720, marginTop: 12 }}>
              {content.introParagraph}
            </p>
          )}
        </header>

        {/* Calendar */}
        <div className="fade-up">
          <CalendarGrid
            days={days}
            year={year}
            month={month}
            countryName={countryName}
            weekdays={weekdayAbbrs}
            monthName={monthName}
          />
        </div>

        {/* Holiday list */}
        {monthHolidays.length > 0 && (
          <section className="no-print" style={{ marginTop: 40, padding: 24, border: "1px solid var(--border)", borderRadius: 10 }}>
            <h2 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 20, fontWeight: 400, marginBottom: 16, color: "var(--fg)" }}>
              {t(i18n.calendar.publicHolidays, { country: countryName, month: monthName, year })}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {monthHolidays.map((d, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 14 }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", color: "var(--holiday)", minWidth: 80 }}>
                    {monthName.slice(0, 3)} {String(d.date.getDate()).padStart(2, "0")}
                  </span>
                  <span style={{ color: "var(--fg)" }}>{d.holiday!.name}</span>
                  <span style={{ color: "var(--muted)", fontSize: 12 }}>
                    {(i18n.weekdays as string[])[d.date.getDay()]}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        <AdSlot slot="todays-events" style={{ marginTop: 24 }} />

        {/* World events */}
        {monthEvents.length > 0 && (
          <section className="no-print" style={{ marginTop: 32, padding: 24, border: "1px solid var(--border)", borderRadius: 10 }}>
            <h2 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 20, fontWeight: 400, marginBottom: 16, color: "var(--fg)" }}>
              {t(i18n.calendar.worldEvents, { month: monthName })}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 10 }}>
              {monthEvents.map((event) => (
                <Link
                  key={event.slug}
                  href={`/events/${event.slug}`}
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, padding: "10px 14px", border: "1px solid var(--border)", borderRadius: 8, textDecoration: "none", color: "inherit" }}
                >
                  <span style={{ fontSize: 13, lineHeight: 1.4 }}>{event.name}</span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "var(--holiday)", whiteSpace: "nowrap", flexShrink: 0, paddingTop: 2 }}>
                    {formatEventDate(event)}
                  </span>
                </Link>
              ))}
            </div>
            <Link href="/events" style={{ display: "inline-block", marginTop: 14, fontSize: 12, color: "var(--muted)", textDecoration: "none", borderBottom: "1px solid var(--border)", paddingBottom: 1 }}>
              {i18n.calendar.browseAllEvents}
            </Link>
          </section>
        )}

        <AdSlot slot="pre-download" style={{ margin: "32px 0" }} />

        {/* Download section */}
        <div className="no-print" style={{ textAlign: "center", padding: "32px 0", borderTop: "1px solid var(--border)" }}>
          <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 16 }}>{i18n.calendar.landscapePdf}</p>
          <DownloadButton country={country} year={year} month={month} locale={locale} />
        </div>

        <MonthSummary
          country={country}
          year={year}
          month={month}
          holidays={monthHolidays.map((d) => ({ date: d.date.toISOString().split("T")[0], name: d.holiday!.name }))}
          locale={locale}
          i18n={{
            monthSummary: (i18n.calendar as unknown as Record<string, Record<string, string>>).monthSummary as { intro_one: string; intro_other: string; noHolidays: string; downloadNote: string },
            holidayDescriptions: (i18n.calendar as unknown as Record<string, Record<string, string>>).holidayDescriptions ?? {},
          }}
          monthName={monthName}
          countryName={countryName}
        />

        {/* Seasonal context + planning tips (graceful fallback when absent) */}
        {content && (content.seasonalNote || content.planningTips.length > 0) && (
          <section className="no-print" style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid var(--border)" }}>
            <h2 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 20, fontWeight: 400, marginBottom: 12, color: "var(--fg)" }}>
              {t(i18n.calendar.seasonalTitle, { month: monthName, year })}
            </h2>
            {content.seasonalNote && (
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, maxWidth: 720 }}>
                {content.seasonalNote}
              </p>
            )}
            {content.planningTips.length > 0 && (
              <ul style={{ marginTop: 16, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                {content.planningTips.map((tip, i) => (
                  <li key={i} style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65 }}>
                    {tip}
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}

        {/* Crawlable month / hub navigation */}
        <nav
          aria-label="Calendar navigation"
          style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--border)", display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between" }}
        >
          {showPrevMonthLink ? (
            <Link href={`/calendar/${country}/${prevYear}/${prevMonth}`} style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none" }}>
              ← {prevMonthName} {prevYear}
            </Link>
          ) : (
            <span />
          )}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href={`/calendar/${country}/${year}`} style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none" }}>
              {year} {countryName}
            </Link>
            <Link href={`/calendar/${country}`} style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none" }}>
              {countryName}
            </Link>
          </div>
          {showNextMonthLink ? (
            <Link href={`/calendar/${country}/${nextYear}/${nextMonth}`} style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none" }}>
              {nextMonthName} {nextYear} →
            </Link>
          ) : (
            <span />
          )}
        </nav>

        {/* SEO text — fallback only. When unique per-month content exists
            (intro / seasonal note / planning tips above), this generic templated
            block is omitted to avoid a duplicate-content signal across pages. */}
        {!content && (
          <section className="no-print" style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--border)" }}>
            <h2 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 22, fontWeight: 400, marginBottom: 12 }}>
              {i18n.calendar.aboutTitle}
            </h2>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, maxWidth: 700 }}>
              {t(i18n.calendar.aboutText, { month: monthName, year, country: countryName })}
            </p>
          </section>
        )}
      </div>
    </>
  );
}
