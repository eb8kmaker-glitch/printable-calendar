import type { WorldEvent } from "./events-types";

export interface EventI18nContent {
  tagline?: string;
  about?: string;
  history?: string;
  activities?: string[];
  culturalContext?: Partial<Record<"US" | "KR" | "JP", string>>;
}

let _ko: Record<string, EventI18nContent> | null = null;
let _ja: Record<string, EventI18nContent> | null = null;

async function getKo(): Promise<Record<string, EventI18nContent>> {
  if (!_ko) {
    try {
      const m = await import("./events-i18n-ko");
      _ko = m.EVENTS_KO;
    } catch {
      _ko = {};
    }
  }
  return _ko;
}

async function getJa(): Promise<Record<string, EventI18nContent>> {
  if (!_ja) {
    try {
      const m = await import("./events-i18n-ja");
      _ja = m.EVENTS_JA;
    } catch {
      _ja = {};
    }
  }
  return _ja;
}

export async function getLocalizedEvent(
  event: WorldEvent,
  locale: string,
): Promise<WorldEvent> {
  if (locale === "en") return event;

  let translations: Record<string, EventI18nContent> | null = null;
  if (locale === "ko") translations = await getKo();
  else if (locale === "ja") translations = await getJa();

  if (!translations) return event;
  const t = translations[event.slug];
  if (!t) return event;

  return {
    ...event,
    ...(t.tagline !== undefined && { tagline: t.tagline }),
    ...(t.about !== undefined && { about: t.about }),
    ...(t.history !== undefined && { history: t.history }),
    ...(t.activities !== undefined && { activities: t.activities }),
    ...(t.culturalContext !== undefined && {
      culturalContext: { ...event.culturalContext, ...t.culturalContext },
    }),
  };
}
