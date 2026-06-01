import type { CulturalHoliday } from "./holidays-content";

export interface HolidayI18nContent {
  tagline?: string;
  origin?: string;
  history?: string;
  culture?: string;
  travelTips?: string;
  food?: { name: string; description: string }[];
  activities?: string[];
}

type HolidayTranslations = Record<string, { ko?: HolidayI18nContent; ja?: HolidayI18nContent }>;

let _ko: Record<string, HolidayI18nContent> | null = null;
let _ja: Record<string, HolidayI18nContent> | null = null;

async function getKo(): Promise<Record<string, HolidayI18nContent>> {
  if (!_ko) {
    try {
      const m = await import("./holidays-i18n-ko");
      _ko = m.HOLIDAY_KO;
    } catch {
      _ko = {};
    }
  }
  return _ko;
}

async function getJa(): Promise<Record<string, HolidayI18nContent>> {
  if (!_ja) {
    try {
      const m = await import("./holidays-i18n-ja");
      _ja = m.HOLIDAY_JA;
    } catch {
      _ja = {};
    }
  }
  return _ja;
}

export async function getLocalizedHolidayContent(
  holiday: CulturalHoliday,
  locale: string,
): Promise<CulturalHoliday> {
  if (locale === "en") return holiday;

  let translations: Record<string, HolidayI18nContent> | null = null;
  if (locale === "ko") translations = await getKo();
  else if (locale === "ja") translations = await getJa();

  if (!translations) return holiday;
  const t = translations[holiday.slug];
  if (!t) return holiday;

  return {
    ...holiday,
    ...(t.tagline !== undefined && { tagline: t.tagline }),
    ...(t.origin !== undefined && { origin: t.origin }),
    ...(t.history !== undefined && { history: t.history }),
    ...(t.culture !== undefined && { culture: t.culture }),
    ...(t.travelTips !== undefined && { travelTips: t.travelTips }),
    ...(t.food !== undefined && { food: t.food }),
    ...(t.activities !== undefined && { activities: t.activities }),
  };
}
