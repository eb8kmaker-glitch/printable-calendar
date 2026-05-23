export type { EventCategory, WorldEvent } from "./events-types";
import type { EventCategory, WorldEvent } from "./events-types";
import { EVENTS_PART1 } from "./events-data-1";
import { EVENTS_PART2 } from "./events-data-2";

export const WORLD_EVENTS: WorldEvent[] = [...EVENTS_PART1, ...EVENTS_PART2].sort(
  (a, b) => a.month * 100 + a.day - (b.month * 100 + b.day),
);

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getEventBySlug(slug: string): WorldEvent | undefined {
  return WORLD_EVENTS.find((e) => e.slug === slug);
}

export function getEventsByMonth(month: number): WorldEvent[] {
  return WORLD_EVENTS.filter((e) => e.month === month).sort((a, b) => a.day - b.day);
}

export function getEventsByCategory(category: EventCategory): WorldEvent[] {
  return WORLD_EVENTS.filter((e) => e.category === category).sort(
    (a, b) => a.month * 100 + a.day - (b.month * 100 + b.day),
  );
}

/** Events happening today (month/day match, year-agnostic). */
export function getTodaysEvents(date: Date = new Date()): WorldEvent[] {
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return WORLD_EVENTS.filter((e) => e.month === m && e.day === d);
}

/** Next N upcoming events from a given date, wrapping into next year. */
export function getUpcomingEvents(date: Date = new Date(), count = 4): WorldEvent[] {
  const today = date.getMonth() * 100 + date.getDate();
  const sorted = [...WORLD_EVENTS].sort((a, b) => a.month * 100 + a.day - (b.month * 100 + b.day));
  const upcoming = sorted.filter((e) => e.month * 100 + e.day > today);
  const wrapped = sorted.filter((e) => e.month * 100 + e.day <= today);
  return [...upcoming, ...wrapped].slice(0, count);
}

export function getRelatedEvents(event: WorldEvent): WorldEvent[] {
  return event.relatedSlugs
    .map((s) => getEventBySlug(s))
    .filter(Boolean) as WorldEvent[];
}

const FEATURED_SLUGS = [
  "earth-day",
  "world-environment-day",
  "international-womens-day",
  "world-mental-health-day",
  "world-kindness-day",
  "valentines-day",
  "world-happiness-day",
  "world-teachers-day",
  "world-book-day",
  "international-day-of-peace",
  "human-rights-day",
  "world-food-day",
  "new-years-day",
  "international-day-of-education",
];

export function getFeaturedEvents(): WorldEvent[] {
  return FEATURED_SLUGS
    .map((s) => getEventBySlug(s))
    .filter(Boolean) as WorldEvent[];
}

/** Events happening within the next N days (inclusive today). */
export function getEventsInNextDays(days = 14, date: Date = new Date()): WorldEvent[] {
  const results: WorldEvent[] = [];
  for (let i = 0; i < days; i++) {
    const d = new Date(date);
    d.setDate(d.getDate() + i);
    const m = d.getMonth() + 1;
    const day = d.getDate();
    WORLD_EVENTS.filter((e) => e.month === m && e.day === day).forEach((e) => {
      if (!results.find((r) => r.slug === e.slug)) results.push(e);
    });
  }
  return results;
}

export function formatEventDate(event: WorldEvent): string {
  const d = new Date(2000, event.month - 1, event.day);
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric" });
}

export const CATEGORY_LABELS: Record<EventCategory, string> = {
  environment: "Environment",
  culture: "Culture",
  humanitarian: "Humanitarian",
  science: "Science",
  health: "Health",
  education: "Education",
  family: "Family",
  food: "Food & Drink",
  technology: "Technology",
  music: "Music",
};
