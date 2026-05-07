import Link from "next/link";
import type { Metadata } from "next";
import {
  WORLD_EVENTS,
  CATEGORY_LABELS,
  formatEventDate,
  type EventCategory,
} from "@/lib/events";

export const metadata: Metadata = {
  title: "World Events & International Days",
  description:
    "Browse international observances and world events — from Earth Day to World Mental Health Day. Explore history, activities, and printable calendars.",
  openGraph: {
    title: "World Events & International Days | PrintableCalendars",
    description:
      "Explore international observances and world events with history, activities, and printable calendars.",
  },
};

const CATEGORIES = Object.keys(CATEGORY_LABELS) as EventCategory[];

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function EventsPage({ searchParams }: PageProps) {
  const { category } = await searchParams;
  const activeCategory = CATEGORIES.includes(category as EventCategory)
    ? (category as EventCategory)
    : null;

  const events = activeCategory
    ? WORLD_EVENTS.filter((e) => e.category === activeCategory).sort(
        (a, b) => a.month * 100 + a.day - (b.month * 100 + b.day),
      )
    : [...WORLD_EVENTS].sort(
        (a, b) => a.month * 100 + a.day - (b.month * 100 + b.day),
      );

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
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
        <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.6, maxWidth: 560 }}>
          Discover the stories behind the world's most celebrated international days — their
          history, global reach, and how you can participate.
        </p>
      </div>

      {/* Category filter */}
      <div
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          marginBottom: 40,
        }}
      >
        <Link
          href="/events"
          style={{
            padding: "6px 16px",
            borderRadius: 20,
            fontSize: 13,
            textDecoration: "none",
            border: "1px solid var(--border)",
            background: !activeCategory ? "var(--fg)" : "transparent",
            color: !activeCategory ? "var(--bg)" : "var(--muted)",
            transition: "background 0.15s, color 0.15s",
          }}
        >
          All
        </Link>
        {CATEGORIES.map((cat) => (
          <Link
            key={cat}
            href={`/events?category=${cat}`}
            style={{
              padding: "6px 16px",
              borderRadius: 20,
              fontSize: 13,
              textDecoration: "none",
              border: "1px solid var(--border)",
              background: activeCategory === cat ? "var(--fg)" : "transparent",
              color: activeCategory === cat ? "var(--bg)" : "var(--muted)",
              transition: "background 0.15s, color 0.15s",
            }}
          >
            {CATEGORY_LABELS[cat]}
          </Link>
        ))}
      </div>

      {/* Event grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
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
                transition: "border-color 0.2s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 12,
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
                    textTransform: "capitalize",
                  }}
                >
                  {CATEGORY_LABELS[event.category]}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: 20,
                  fontWeight: 400,
                  marginBottom: 8,
                }}
              >
                {event.name}
              </h2>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--muted)",
                  lineHeight: 1.5,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {event.tagline}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
