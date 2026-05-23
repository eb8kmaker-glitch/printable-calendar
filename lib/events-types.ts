export type EventCategory =
  | "environment"
  | "culture"
  | "humanitarian"
  | "science"
  | "health"
  | "education"
  | "family"
  | "food"
  | "technology"
  | "music";

export interface WorldEvent {
  slug: string;
  name: string;
  month: number;
  day: number;
  category: EventCategory;
  emoji: string;
  tagline: string;
  about: string;
  history: string;
  countries: string[];
  culturalContext?: Partial<Record<"US" | "KR" | "JP", string>>;
  activities: string[];
  relatedSlugs: string[];
}
