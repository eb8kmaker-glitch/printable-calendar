import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  WORLD_EVENTS,
  getEventBySlug,
  getRelatedEvents,
  formatEventDate,
  CATEGORY_LABELS,
} from "@/lib/events";
import { SUPPORTED_COUNTRIES } from "@/lib/types";

const BASE_URL = "https://printablecalendars.io";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return WORLD_EVENTS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};

  const url = `${BASE_URL}/events/${slug}`;
  const title = `${event.name} — History, Activities & Printable Calendar`;
  const description = `${event.tagline} Learn the history of ${event.name} (${formatEventDate(event)}), how it's celebrated worldwide, and download a free printable calendar.`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { en: url, "x-default": url },
    },
    openGraph: {
      title: `${event.name} | PrintableCalendars`,
      description: event.tagline,
      url,
      type: "article",
      siteName: "PrintableCalendars",
    },
    twitter: {
      card: "summary_large_image",
      title: `${event.name} | PrintableCalendars`,
      description: event.tagline,
    },
    robots: { index: true, follow: true },
  };
}

const COUNTRY_FLAG: Record<string, string> = { US: "US", KR: "KR", JP: "JP" };
const COUNTRY_LABEL: Record<string, string> = {
  US: "United States",
  KR: "South Korea",
  JP: "Japan",
};

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const related = getRelatedEvents(event);
  const currentYear = new Date().getFullYear();
  const eventYear =
    event.month >= new Date().getMonth() + 1 ? currentYear : currentYear + 1;

  const eventUrl = `${BASE_URL}/events/${slug}`;

  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.about,
    startDate: `${eventYear}-${String(event.month).padStart(2, "0")}-${String(event.day).padStart(2, "0")}`,
    endDate: `${eventYear}-${String(event.month).padStart(2, "0")}-${String(event.day).padStart(2, "0")}`,
    url: eventUrl,
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: eventUrl,
    },
    organizer: {
      "@type": "Organization",
      name: "PrintableCalendars",
      url: BASE_URL,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "World Events",
        item: `${BASE_URL}/events`,
      },
      { "@type": "ListItem", position: 3, name: event.name, item: eventUrl },
    ],
  };

  const hasCultural =
    event.culturalContext && Object.keys(event.culturalContext).length > 0;

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

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "56px 24px 96px" }}>
        {/* Breadcrumb */}
        <nav
          aria-label="breadcrumb"
          style={{ marginBottom: 40, fontSize: 13, color: "var(--muted)" }}
        >
          <Link href="/" style={{ color: "var(--muted)", textDecoration: "none" }}>
            Home
          </Link>
          <span style={{ margin: "0 8px", opacity: 0.4 }}>/</span>
          <Link
            href="/events"
            style={{ color: "var(--muted)", textDecoration: "none" }}
          >
            World Events
          </Link>
          <span style={{ margin: "0 8px", opacity: 0.4 }}>/</span>
          <span style={{ color: "var(--fg)" }}>{event.name}</span>
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
              {formatEventDate(event)}
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
              {CATEGORY_LABELS[event.category]}
            </span>
          </div>
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
            {event.name}
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
            {event.tagline}
          </p>
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid var(--border)",
            marginBottom: 48,
          }}
        />

        {/* About */}
        <section style={{ marginBottom: 48 }}>
          <SectionLabel>About</SectionLabel>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--fg)" }}>
            {event.about}
          </p>
        </section>

        {/* History */}
        <section style={{ marginBottom: 48 }}>
          <SectionLabel>History</SectionLabel>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--fg)" }}>
            {event.history}
          </p>
        </section>

        {/* Where observed */}
        <section style={{ marginBottom: 48 }}>
          <SectionLabel>Where It&apos;s Observed</SectionLabel>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {event.countries.map((c) => (
              <span
                key={c}
                style={{
                  fontSize: 13,
                  padding: "4px 14px",
                  border: "1px solid var(--border)",
                  borderRadius: 20,
                  color: "var(--fg)",
                  lineHeight: 1.6,
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* Cultural context — US / KR / JP */}
        {hasCultural && (
          <section style={{ marginBottom: 48 }}>
            <SectionLabel>Cultural Context</SectionLabel>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: 16,
              }}
            >
              {(["US", "KR", "JP"] as const).map((code) => {
                const text = event.culturalContext?.[code];
                if (!text) return null;
                return (
                  <div
                    key={code}
                    style={{
                      border: "1px solid var(--border)",
                      borderRadius: 10,
                      padding: "16px 18px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 10,
                        color: "var(--muted)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: 8,
                      }}
                    >
                      {COUNTRY_FLAG[code]} {COUNTRY_LABEL[code]}
                    </p>
                    <p
                      style={{ fontSize: 13, lineHeight: 1.7, color: "var(--fg)" }}
                    >
                      {text}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* How to participate */}
        <section style={{ marginBottom: 56 }}>
          <SectionLabel>How to Participate</SectionLabel>
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
            {event.activities.map((act, i) => (
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
                    paddingTop: 2,
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

        {/* Calendar CTA */}
        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: "28px 28px 24px",
            marginBottom: 56,
          }}
        >
          <SectionLabel>Mark the date</SectionLabel>
          <p
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "clamp(18px, 3vw, 22px)",
              fontWeight: 400,
              lineHeight: 1.4,
              marginBottom: 20,
            }}
          >
            Download a free printable calendar for {eventYear} and never miss{" "}
            {event.name}.
          </p>

          {/* Per-country calendar + PDF links */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 12,
            }}
          >
            {SUPPORTED_COUNTRIES.map((c) => {
              const code = c.code.toLowerCase();
              const monthUrl = `/calendar/${code}/${eventYear}/${event.month}`;
              const pdfUrl = `/api/pdf?country=${code}&year=${eventYear}&month=${event.month}&size=A4&orientation=landscape&theme=light`;
              return (
                <div
                  key={c.code}
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    padding: "14px 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 10,
                      color: "var(--muted)",
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                    }}
                  >
                    {COUNTRY_FLAG[c.code]} {c.name}
                  </p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
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
                      View Calendar
                    </Link>
                    <a
                      href={pdfUrl}
                      download={`calendar-${code}-${eventYear}-${String(event.month).padStart(2, "0")}.pdf`}
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
                </div>
              );
            })}
          </div>
        </div>

        {/* Related Events */}
        {related.length > 0 && (
          <section>
            <SectionLabel>Related Events</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/events/${r.slug}`}
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
                    <p
                      style={{
                        fontSize: 15,
                        fontWeight: 500,
                        marginBottom: 2,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {r.name}
                    </p>
                    <p style={{ fontSize: 12, color: "var(--muted)" }}>
                      {formatEventDate(r)} · {CATEGORY_LABELS[r.category]}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: 16,
                      color: "var(--muted)",
                      opacity: 0.5,
                      flexShrink: 0,
                    }}
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
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
