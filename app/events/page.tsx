import Link from "next/link";
import type { Metadata } from "next";
import {
  WORLD_EVENTS,
  CATEGORY_LABELS,
  formatEventDate,
  type EventCategory,
} from "@/lib/events";

export const dynamic = "force-static";
const BASE_URL = "https://printablecalendars.app";

export const metadata: Metadata = {
  title: "World Events & International Days",
  description:
    "Browse international observances and world events ??from Earth Day to World Mental Health Day. Explore history, cultural context, activities, and free printable calendars.",
  alternates: {
    canonical: `${BASE_URL}/events`,
    languages: {
      en: `${BASE_URL}/events`,
      "x-default": `${BASE_URL}/events`,
    },
  },
  openGraph: {
    title: "World Events & International Days | PrintableCalendars",
    description:
      "Explore international observances with history, cultural context, and free printable calendars for USA, Japan, and South Korea.",
    url: `${BASE_URL}/events`,
    type: "website",
    siteName: "PrintableCalendars",
  },
  twitter: {
    card: "summary_large_image",
    title: "World Events & International Days | PrintableCalendars",
    description:
      "Explore international observances with history, cultural context, and free printable calendars.",
  },
  robots: { index: true, follow: true },
};

const CATEGORIES = Object.keys(CATEGORY_LABELS) as EventCategory[];

interface PageProps {
  searchParams: Promise<{ category?: string; q?: string }>;
}

export default async function EventsPage({ searchParams }: PageProps) {
  const { category, q } = await searchParams;

  const activeCategory = CATEGORIES.includes(category as EventCategory)
    ? (category as EventCategory)
    : null;
  const query = q?.trim().toLowerCase() ?? "";

  const sorted = [...WORLD_EVENTS].sort(
    (a, b) => a.month * 100 + a.day - (b.month * 100 + b.day),
  );

  const events = sorted.filter((e) => {
    const matchesCategory = !activeCategory || e.category === activeCategory;
    const matchesQuery =
      !query ||
      e.name.toLowerCase().includes(query) ||
      e.tagline.toLowerCase().includes(query) ||
      CATEGORY_LABELS[e.category].toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "International Days & Observances",
    description:
      "A curated list of world events, international days, and observances with history and printable calendars.",
    url: `${BASE_URL}/events`,
    numberOfItems: WORLD_EVENTS.length,
    itemListElement: sorted.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${BASE_URL}/events/${e.slug}`,
      name: e.name,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
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
            World Events
          </p>
          <h1
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            International Days &amp; Observances
          </h1>
          <p
            style={{
              fontSize: 15,
              color: "var(--muted)",
              lineHeight: 1.6,
              maxWidth: 560,
            }}
          >
            Discover the stories behind the world&apos;s most celebrated
            international days ??their history, global reach, cultural context,
            and how you can participate.
          </p>
        </div>

        {/* Search + Filter bar */}
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            alignItems: "center",
            marginBottom: 32,
          }}
        >
          {/* Search form ??GET, works without JS */}
          <form
            method="GET"
            action="/events"
            style={{ display: "flex", gap: 0, flex: "1 1 220px", minWidth: 0 }}
          >
            {activeCategory && (
              <input type="hidden" name="category" value={activeCategory} />
            )}
            <input
              name="q"
              defaultValue={q ?? ""}
              placeholder="Search events…"
              autoComplete="off"
              style={{
                height: 36,
                padding: "0 14px",
                border: "1px solid var(--border)",
                borderRight: "none",
                borderRadius: "8px 0 0 8px",
                background: "var(--bg)",
                color: "var(--fg)",
                fontSize: 13,
                flex: 1,
                minWidth: 0,
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                height: 36,
                padding: "0 14px",
                border: "1px solid var(--border)",
                borderRadius: "0 8px 8px 0",
                background: "var(--bg)",
                color: "var(--muted)",
                cursor: "pointer",
                fontSize: 13,
              }}
            >
              Search
            </button>
          </form>

          {/* Category pills */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Link
              href={query ? `/events?q=${encodeURIComponent(query)}` : "/events"}
              style={pillStyle(!activeCategory)}
            >
              All
            </Link>
            {CATEGORIES.map((cat) => {
              const href = query
                ? `/events?category=${cat}&q=${encodeURIComponent(query)}`
                : `/events?category=${cat}`;
              return (
                <Link
                  key={cat}
                  href={href}
                  style={pillStyle(activeCategory === cat)}
                >
                  {CATEGORY_LABELS[cat]}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Results count */}
        {(query || activeCategory) && (
          <p
            style={{
              fontSize: 12,
              color: "var(--muted)",
              marginBottom: 24,
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.04em",
            }}
          >
            {events.length} result{events.length !== 1 ? "s" : ""}
            {query ? ` for "${q}"` : ""}
            {activeCategory ? ` in ${CATEGORY_LABELS[activeCategory]}` : ""}
            {" ??"}
            <Link
              href="/events"
              style={{ color: "var(--muted)", textDecoration: "underline" }}
            >
              clear
            </Link>
          </p>
        )}

        {/* Event grid */}
        {events.length === 0 ? (
          <p style={{ fontSize: 14, color: "var(--muted)", paddingTop: 24 }}>
            No events found. Try a different search or{" "}
            <Link href="/events" style={{ color: "var(--fg)" }}>
              browse all
            </Link>
            .
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {events.map((event) => (
              <Link
                key={event.slug}
                href={`/events/${event.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    padding: 24,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    transition: "border-color 0.2s",
                  }}
                >
                  {/* Date + category row */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 11,
                        color: "var(--holiday)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {formatEventDate(event)}
                    </span>
                    <span
                      style={{
                        fontSize: 10,
                        color: "var(--muted)",
                        border: "1px solid var(--border)",
                        borderRadius: 4,
                        padding: "2px 7px",
                      }}
                    >
                      {CATEGORY_LABELS[event.category]}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    style={{
                      fontFamily: "'EB Garamond', Georgia, serif",
                      fontSize: 20,
                      fontWeight: 400,
                      lineHeight: 1.2,
                    }}
                  >
                    {event.name}
                  </h2>

                  {/* Tagline */}
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--muted)",
                      lineHeight: 1.55,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      flex: 1,
                    }}
                  >
                    {event.tagline}
                  </p>

                  {/* Cultural context indicator */}
                  {event.culturalContext && Object.keys(event.culturalContext).length > 0 && (
                    <p
                      style={{
                        fontSize: 10,
                        color: "var(--muted)",
                        fontFamily: "'DM Mono', monospace",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {Object.keys(event.culturalContext).join(" 쨌 ")} context
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

function pillStyle(active: boolean): React.CSSProperties {
  return {
    padding: "5px 14px",
    borderRadius: 20,
    fontSize: 12,
    textDecoration: "none",
    border: "1px solid var(--border)",
    background: active ? "var(--fg)" : "transparent",
    color: active ? "var(--bg)" : "var(--muted)",
    transition: "background 0.15s, color 0.15s",
    whiteSpace: "nowrap",
  };
}

