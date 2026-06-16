// Unique per-country, per-month descriptive content for calendar month pages.
//
// Purpose: give each {country}×{month} calendar page genuinely distinct prose
// (intro + seasonal context + planning tips) so the pages are not "thin".
//
// This module intentionally does NOT duplicate the existing holiday list or the
// `holidayDescriptions` map in i18n/locales/*.json — it only adds month-level
// context. Holiday dates/names continue to come from getHolidays() (date-holidays);
// nothing here invents or hardcodes holiday dates.
//
// i18n: en is the base. Locale overrides (ko for kr pages, ja for jp pages) are
// lazy-imported, mirroring lib/holidays-i18n.ts. Missing content returns null so
// the page can gracefully render with the heading alone.

export interface CalendarMonthContent {
  /** 2–3 sentence intro to this country's calendar for this month. */
  introParagraph: string;
  /** Seasonal / timing context for the month in this country. */
  seasonalNote: string;
  /** 1–2 scheduling/planning tips for the month. */
  planningTips: string[];
}

// country code (lowercase) -> month (1-12) -> content
export type CountryMonthContentMap = Record<string, Record<number, CalendarMonthContent>>;

// ─── English base ────────────────────────────────────────────────────────────
// Reference window: 2026-07 .. 2027-03. Content is written to be year-agnostic
// (the specific year is shown by the page heading), accurate, and conservative.

export const CALENDAR_CONTENT_EN: CountryMonthContentMap = {
  // ─── United States ────────────────────────────────────────────────────────
  us: {
    7: {
      introParagraph:
        "July is one of the busiest months on the American calendar, anchored by Independence Day on July 4th. This printable July calendar for the United States marks the federal holiday alongside the full month, giving you a clear grid for summer plans, travel, and time off.",
      seasonalNote:
        "July sits in the heart of summer across the United States. Schools are on their summer break, daytime temperatures peak in most regions, and the long Fourth of July weekend is one of the year's biggest travel periods.",
      planningTips: [
        "When July 4th falls on a weekend, many workplaces observe the federal holiday on the nearest weekday — confirm your employer's schedule before booking time off.",
        "Reserve travel and accommodation early; the week around Independence Day is among the most crowded and expensive of the year.",
      ],
    },
    8: {
      introParagraph:
        "August has no federal public holidays in the United States, making it a steady working month and a popular window for late-summer vacations. This printable August calendar gives you an uncluttered grid for the final stretch before the new school year.",
      seasonalNote:
        "August is late summer in the U.S. Heat stays high across much of the country, and many families schedule their last trips before schools reopen in late August or early September.",
      planningTips: [
        "With no public holidays this month, August planning usually centers on personal time off rather than national breaks.",
        "Back-to-school start dates vary widely by state and district — check your local calendar when mapping out the month.",
      ],
    },
    9: {
      introParagraph:
        "September in the United States opens with Labor Day, the federal holiday observed on the first Monday of the month. This printable September calendar marks the long weekend and the rest of the month as summer gives way to autumn.",
      seasonalNote:
        "September is the transition from summer to fall. The school year is underway across the country, and Labor Day weekend is widely treated as the unofficial end of summer.",
      planningTips: [
        "Labor Day always falls on the first Monday of September, creating a three-day weekend — plan travel and closures around it.",
        "Many organizations return to full schedules after Labor Day, making it a natural reset point for fourth-quarter planning.",
      ],
    },
    10: {
      introParagraph:
        "October brings Columbus Day, a federal holiday observed on the second Monday of the month, though its observance varies widely between states and cities. This printable October calendar covers the full month as autumn settles in.",
      seasonalNote:
        "October is mid-autumn across most of the United States, with cooler weather, fall foliage in the northern states, and Halloween at the month's end — a popular celebration, though not a public holiday.",
      planningTips: [
        "Columbus Day is a federal holiday, but many states and employers do not observe it — confirm whether your workplace or school is actually closed.",
        "Halloween on October 31st is not a day off, but it often shapes evening schedules and local events.",
      ],
    },
    11: {
      introParagraph:
        "November is defined by two federal observances: Veterans Day on November 11th and Thanksgiving on the fourth Thursday of the month. This printable November calendar marks both, helping you plan around one of the year's major holiday weekends.",
      seasonalNote:
        "November is late autumn, with shorter days and colder weather across much of the country. Thanksgiving weekend opens the winter holiday season and is one of the busiest travel periods of the year.",
      planningTips: [
        "Thanksgiving falls on the fourth Thursday of November; many workplaces also close the following Friday for a four-day weekend.",
        "Book Thanksgiving travel well in advance — flights and highways are exceptionally busy in the days surrounding the holiday.",
      ],
    },
    12: {
      introParagraph:
        "December centers on Christmas Day, the federal holiday on December 25th, set within a month of year-end celebrations. This printable December calendar gives you a clear view of the holiday season and the close of the year.",
      seasonalNote:
        "December brings the start of winter to the United States, with cold weather and snow across many regions. It is the peak of the holiday season, with widespread travel and time off around Christmas and New Year's.",
      planningTips: [
        "When December 25th falls on a weekend, the federal holiday is typically observed on the nearest weekday.",
        "Many workplaces reduce hours or close entirely during the final week of the year — confirm schedules before planning.",
      ],
    },
    1: {
      introParagraph:
        "January opens the year with two federal holidays: New Year's Day on January 1st and Martin Luther King Jr. Day on the third Monday of the month. This printable January calendar helps you start the year organized.",
      seasonalNote:
        "January is deep winter across most of the United States, often bringing the coldest temperatures of the year. It is a quieter month after the December holidays, frequently used for fresh starts and planning.",
      planningTips: [
        "Martin Luther King Jr. Day falls on the third Monday of January, creating a three-day weekend.",
        "January is a natural point to lay out the year ahead — annual goals, budgets, and key dates.",
      ],
    },
    2: {
      introParagraph:
        "February features Presidents' Day, the federal holiday observed on the third Monday of the month (officially Washington's Birthday). This printable February calendar covers the shortest month of the year, including the extra day in leap years.",
      seasonalNote:
        "February is still winter across much of the country, though daylight slowly lengthens. Presidents' Day weekend is a popular time for short winter getaways.",
      planningTips: [
        "Presidents' Day falls on the third Monday of February — a three-day weekend for many workplaces and schools.",
        "February has 28 days, or 29 in a leap year; confirm the year when counting deadlines that land near month-end.",
      ],
    },
    3: {
      introParagraph:
        "March has no federal public holidays in the United States, making it a full working month as winter turns to spring. This printable March calendar gives you an open grid for first-quarter deadlines and spring planning.",
      seasonalNote:
        "March marks the start of spring, with the spring equinox around March 20th. Daylight Saving Time also begins in early March, when clocks move forward one hour.",
      planningTips: [
        "Daylight Saving Time usually begins on the second Sunday of March — set clocks forward and adjust early-morning schedules.",
        "With no public holidays, March is well suited to focused work and quarter-end planning.",
      ],
    },
  },
};

// ─── Lazy-loaded locale overrides (mirrors lib/holidays-i18n.ts) ─────────────

let _ko: CountryMonthContentMap | null = null;
let _ja: CountryMonthContentMap | null = null;

async function getKo(): Promise<CountryMonthContentMap> {
  if (!_ko) {
    try {
      const m = await import("./calendar-content-ko");
      _ko = m.CALENDAR_CONTENT_KO;
    } catch {
      _ko = {};
    }
  }
  return _ko;
}

async function getJa(): Promise<CountryMonthContentMap> {
  if (!_ja) {
    try {
      const m = await import("./calendar-content-ja");
      _ja = m.CALENDAR_CONTENT_JA;
    } catch {
      _ja = {};
    }
  }
  return _ja;
}

/**
 * Returns unique content for a country×month in the requested locale.
 * Falls back to the English base when the locale has no override, and returns
 * null when no content exists at all (the page then renders the heading only).
 */
export async function getCalendarContent(
  country: string,
  month: number,
  locale: string,
): Promise<CalendarMonthContent | null> {
  const code = country.toLowerCase();

  if (locale === "ko") {
    const ko = await getKo();
    const hit = ko[code]?.[month];
    if (hit) return hit;
  } else if (locale === "ja") {
    const ja = await getJa();
    const hit = ja[code]?.[month];
    if (hit) return hit;
  }

  return CALENDAR_CONTENT_EN[code]?.[month] ?? null;
}
