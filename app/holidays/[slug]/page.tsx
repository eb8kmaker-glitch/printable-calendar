import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  CULTURAL_HOLIDAYS,
  getHolidayContentBySlug,
} from "@/lib/holidays-content";
import { SUPPORTED_COUNTRIES } from "@/lib/types";
import { buildFaqSchema } from "@/lib/seo-helpers";

const BASE_URL = "https://printablecalendars.io";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CULTURAL_HOLIDAYS.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const holiday = getHolidayContentBySlug(slug);
  if (!holiday) return {};

  const url = `${BASE_URL}/holidays/${slug}`;
  const title = `${holiday.name}${holiday.localName ? ` (${holiday.localName})` : ""} — History, Traditions & Printable Calendar`;
  const description = `${holiday.tagline} Explore the origin, history, traditional foods, and activities of ${holiday.name} — plus download a free printable calendar.`;

  return {
    title,
    description,
    alternates: { canonical: url, languages: { en: url, "x-default": url } },
    openGraph: {
      title: `${holiday.name} | PrintableCalendars`,
      description: holiday.tagline,
      url,
      type: "article",
      siteName: "PrintableCalendars",
    },
    twitter: {
      card: "summary_large_image",
      title: `${holiday.name} | PrintableCalendars`,
      description: holiday.tagline,
    },
    robots: { index: true, follow: true },
  };
}

const COUNTRY_FLAG: Record<string, string> = { US: "🇺🇸", KR: "🇰🇷", JP: "🇯🇵" };

export default async function HolidayContentPage({ params }: PageProps) {
  const { slug } = await params;
  const holiday = getHolidayContentBySlug(slug);
  if (!holiday) notFound();

  const currentYear = new Date().getFullYear();

  const faqs = [
    {
      q: `When is ${holiday.name}?`,
      a: `${holiday.name} falls on ${holiday.dateLabel}. ${holiday.isLunar ? "Because it follows the lunar calendar, the Gregorian date shifts each year — check the calendar links below for exact dates." : "The date is fixed and does not change year to year."}`,
    },
    {
      q: `Is ${holiday.name} a public holiday?`,
      a: `${holiday.name} is a public holiday in ${holiday.countryName}. Most businesses, government offices, and schools are closed on this day. It is one of the most significant national holidays in the country.`,
    },
    {
      q: `What do people eat during ${holiday.name}?`,
      a: `Traditional foods eaten during ${holiday.name} include ${holiday.food.slice(0, 3).map((f) => f.name).join(", ")}. ${holiday.food[0].description}`,
    },
    {
      q: `What are some activities associated with ${holiday.name}?`,
      a: holiday.activities.slice(0, 3).join(" "),
    },
    {
      q: `Is ${holiday.name} a good time to visit ${holiday.countryName}?`,
      a: holiday.travelTips,
    },
  ];

  const faqSchema = buildFaqSchema(faqs);

  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${holiday.name} — History, Traditions & Culture`,
    description: holiday.tagline,
    url: `${BASE_URL}/holidays/${slug}`,
    author: { "@type": "Organization", name: "PrintableCalendars", url: BASE_URL },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Cultural Holidays", item: `${BASE_URL}/holidays` },
      { "@type": "ListItem", position: 3, name: holiday.name, item: `${BASE_URL}/holidays/${slug}` },
    ],
  };

  const relevantCountries = SUPPORTED_COUNTRIES.filter((c) => c.code === holiday.country);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "56px 24px 96px" }}>
        {/* Breadcrumb */}
        <nav
          aria-label="breadcrumb"
          style={{ marginBottom: 40, fontSize: 13, color: "var(--muted)" }}
        >
          <Link href="/" style={{ color: "var(--muted)", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 8px", opacity: 0.4 }}>/</span>
          <Link href="/holidays" style={{ color: "var(--muted)", textDecoration: "none" }}>Holidays</Link>
          <span style={{ margin: "0 8px", opacity: 0.4 }}>/</span>
          <span style={{ color: "var(--fg)" }}>{holiday.name}</span>
        </nav>

        {/* Hero */}
        <div style={{ marginBottom: 56 }}>
          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 12,
                color: "var(--holiday)",
                letterSpacing: "0.05em",
              }}
            >
              {holiday.dateLabel}
            </span>
            <span
              style={{
                fontSize: 14,
              }}
            >
              {COUNTRY_FLAG[holiday.country]}
            </span>
            <span
              style={{
                fontSize: 11,
                color: "var(--muted)",
                border: "1px solid var(--border)",
                borderRadius: 4,
                padding: "2px 8px",
              }}
            >
              {holiday.countryName}
            </span>
            {holiday.isLunar && (
              <span
                style={{
                  fontSize: 11,
                  color: "var(--muted)",
                  border: "1px solid var(--border)",
                  borderRadius: 4,
                  padding: "2px 8px",
                }}
              >
                Lunar calendar
              </span>
            )}
          </div>

          {holiday.localName && (
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 13,
                color: "var(--muted)",
                letterSpacing: "0.04em",
                marginBottom: 8,
              }}
            >
              {holiday.localName}
            </p>
          )}

          <h1
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "clamp(32px, 6vw, 56px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            {holiday.name}
          </h1>
          <p
            style={{
              fontSize: "clamp(15px, 2.5vw, 18px)",
              color: "var(--muted)",
              lineHeight: 1.6,
              fontStyle: "italic",
              fontFamily: "'EB Garamond', Georgia, serif",
            }}
          >
            {holiday.tagline}
          </p>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: 48 }} />

        {/* Origin */}
        <section style={{ marginBottom: 48 }}>
          <Label>Origin</Label>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--fg)" }}>
            {holiday.origin}
          </p>
        </section>

        {/* History */}
        <section style={{ marginBottom: 48 }}>
          <Label>History</Label>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--fg)" }}>
            {holiday.history}
          </p>
        </section>

        {/* Modern Culture */}
        <section style={{ marginBottom: 48 }}>
          <Label>Modern Celebration</Label>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--fg)" }}>
            {holiday.culture}
          </p>
        </section>

        {/* Traditional Foods */}
        <section style={{ marginBottom: 48 }}>
          <Label>Traditional Foods</Label>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {holiday.food.map((item, i) => (
              <div
                key={i}
                style={{
                  borderLeft: "2px solid var(--border)",
                  paddingLeft: 16,
                }}
              >
                <p style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>
                  {item.name}
                </p>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Activities */}
        <section style={{ marginBottom: 48 }}>
          <Label>How to Participate</Label>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {holiday.activities.map((act, i) => (
              <li
                key={i}
                style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11,
                    color: "var(--muted)",
                    minWidth: 22,
                    paddingTop: 3,
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontSize: 15, lineHeight: 1.7 }}>{act}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Travel Tips */}
        <section style={{ marginBottom: 56 }}>
          <Label>Travel Tips</Label>
          <div
            style={{
              background: "var(--header-bg, rgba(0,0,0,0.03))",
              border: "1px solid var(--border)",
              borderRadius: 10,
              padding: "20px 20px",
            }}
          >
            <p style={{ fontSize: 14, lineHeight: 1.85, color: "var(--fg)" }}>
              {holiday.travelTips}
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: 56 }}>
          <Label>Frequently asked questions</Label>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {faqs.map((faq, i) => (
              <details
                key={i}
                style={{ borderTop: "1px solid var(--border)", padding: "16px 0" }}
              >
                <summary
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    cursor: "pointer",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  {faq.q}
                  <span style={{ fontSize: 18, opacity: 0.4, flexShrink: 0 }}>+</span>
                </summary>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: "var(--muted)",
                    marginTop: 12,
                    paddingRight: 32,
                  }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
            <div style={{ borderTop: "1px solid var(--border)" }} />
          </div>
        </section>

        {/* Calendar CTA */}
        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: "28px 28px 24px",
            marginBottom: 48,
          }}
        >
          <Label>Printable Calendars</Label>
          <p
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "clamp(17px, 3vw, 21px)",
              fontWeight: 400,
              lineHeight: 1.4,
              marginBottom: 20,
            }}
          >
            Download a free printable calendar for {holiday.name} — includes
            all public holidays.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {relevantCountries.map((c) => (
              <div
                key={c.code}
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  padding: "14px 16px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10,
                    color: "var(--muted)",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  {COUNTRY_FLAG[c.code]} {c.name}
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {holiday.calendarMonths.map((m) => {
                    const monthName = new Date(2000, m - 1).toLocaleString("en-US", { month: "long" });
                    const monthUrl = `/calendar/${c.code.toLowerCase()}/${currentYear}/${m}`;
                    const pdfUrl = `/api/pdf?country=${c.code.toLowerCase()}&year=${currentYear}&month=${m}&size=A4&orientation=landscape&theme=light`;
                    return (
                      <div key={m} style={{ display: "flex", gap: 6, alignItems: "center" }}>
                        <Link
                          href={monthUrl}
                          style={{
                            padding: "7px 14px",
                            background: "var(--fg)",
                            color: "var(--bg)",
                            borderRadius: 6,
                            textDecoration: "none",
                            fontSize: 12,
                            fontWeight: 500,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {monthName} {currentYear}
                        </Link>
                        <a
                          href={pdfUrl}
                          download={`calendar-${c.code.toLowerCase()}-${currentYear}-${String(m).padStart(2, "0")}.pdf`}
                          style={{
                            padding: "7px 14px",
                            border: "1px solid var(--border)",
                            color: "var(--fg)",
                            borderRadius: 6,
                            textDecoration: "none",
                            fontSize: 12,
                            whiteSpace: "nowrap",
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
        </div>

        {/* Related */}
        {holiday.relatedSlugs.length > 0 && (
          <section>
            <Label>Related Holidays</Label>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {holiday.relatedSlugs.map((s) => {
                const related = getHolidayContentBySlug(s);
                if (!related) return null;
                return (
                  <Link
                    key={s}
                    href={`/holidays/${s}`}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "16px 20px",
                      border: "1px solid var(--border)",
                      borderRadius: 10,
                      textDecoration: "none",
                      color: "inherit",
                      gap: 12,
                    }}
                  >
                    <div style={{ minWidth: 0 }}>
                      <p style={{ fontSize: 15, fontWeight: 500, marginBottom: 2 }}>
                        {related.name}
                        {related.localName ? ` · ${related.localName}` : ""}
                      </p>
                      <p style={{ fontSize: 12, color: "var(--muted)" }}>
                        {related.dateLabel} · {related.countryName}
                      </p>
                    </div>
                    <span style={{ fontSize: 16, color: "var(--muted)", opacity: 0.5, flexShrink: 0 }}>
                      →
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </h2>
  );
}
