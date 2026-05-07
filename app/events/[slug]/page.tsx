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
  return {
    title: event.name,
    description: event.tagline,
    openGraph: {
      title: `${event.name} | PrintableCalendars`,
      description: event.tagline,
    },
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const related = getRelatedEvents(event);
  const currentYear = new Date().getFullYear();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.tagline,
    startDate: `${currentYear}-${String(event.month).padStart(2, "0")}-${String(event.day).padStart(2, "0")}`,
    url: `https://printablecalendars.io/events/${event.slug}`,
    organizer: {
      "@type": "Organization",
      name: "PrintableCalendars",
      url: "https://printablecalendars.io",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "56px 24px 96px" }}>
        {/* Breadcrumb */}
        <nav style={{ marginBottom: 40, fontSize: 13, color: "var(--muted)" }}>
          <Link href="/" style={{ color: "var(--muted)", textDecoration: "none" }}>
            Home
          </Link>
          <span style={{ margin: "0 8px", opacity: 0.4 }}>/</span>
          <Link href="/events" style={{ color: "var(--muted)", textDecoration: "none" }}>
            World Events
          </Link>
          <span style={{ margin: "0 8px", opacity: 0.4 }}>/</span>
          <span style={{ color: "var(--fg)" }}>{event.name}</span>
        </nav>

        {/* Hero */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 16 }}>
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
              fontSize: 18,
              color: "var(--muted)",
              lineHeight: 1.6,
              fontStyle: "italic",
              fontFamily: "'EB Garamond', Georgia, serif",
            }}
          >
            {event.tagline}
          </p>
        </div>

        {/* Divider */}
        <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: 48 }} />

        {/* About */}
        <section style={{ marginBottom: 48 }}>
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
            About
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--fg)" }}>{event.about}</p>
        </section>

        {/* History */}
        <section style={{ marginBottom: 48 }}>
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
            History
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--fg)" }}>{event.history}</p>
        </section>

        {/* Countries */}
        <section style={{ marginBottom: 48 }}>
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
            Where It&apos;s Observed
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {event.countries.map((c) => (
              <span
                key={c}
                style={{
                  fontSize: 13,
                  padding: "4px 12px",
                  border: "1px solid var(--border)",
                  borderRadius: 20,
                  color: "var(--fg)",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* Activities */}
        <section style={{ marginBottom: 56 }}>
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
            How to Participate
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {event.activities.map((act, i) => (
              <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11,
                    color: "var(--muted)",
                    minWidth: 20,
                    paddingTop: 2,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontSize: 15, lineHeight: 1.6 }}>{act}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Calendar CTA */}
        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: 28,
            marginBottom: 56,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "var(--muted)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Mark the date
          </p>
          <p
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: 22,
              fontWeight: 400,
              lineHeight: 1.3,
            }}
          >
            Download a printable calendar for {event.month >= new Date().getMonth() + 1 ? currentYear : currentYear + 1} and never miss {event.name}.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 4 }}>
            <Link
              href={`/calendar/us/${currentYear}/${event.month}`}
              style={{
                padding: "10px 20px",
                background: "var(--fg)",
                color: "var(--bg)",
                borderRadius: 8,
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              US Calendar — {formatEventDate(event)}
            </Link>
            <Link
              href={`/calendar/us/${currentYear}`}
              style={{
                padding: "10px 20px",
                border: "1px solid var(--border)",
                color: "var(--fg)",
                borderRadius: 8,
                textDecoration: "none",
                fontSize: 13,
              }}
            >
              Full Year View
            </Link>
          </div>
        </div>

        {/* Related Events */}
        {related.length > 0 && (
          <section>
            <h2
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                color: "var(--muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Related Events
            </h2>
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
                    transition: "border-color 0.2s",
                  }}
                >
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 500, marginBottom: 2 }}>{r.name}</p>
                    <p style={{ fontSize: 12, color: "var(--muted)" }}>{formatEventDate(r)}</p>
                  </div>
                  <span style={{ fontSize: 18, color: "var(--muted)", opacity: 0.5 }}>→</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
