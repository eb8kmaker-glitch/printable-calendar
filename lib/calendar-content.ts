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
    4: {
      introParagraph:
        "April has no federal public holidays in the United States, making it a full working month as spring takes hold. This printable April calendar gives you an open grid for second-quarter planning and spring events.",
      seasonalNote:
        "April is mid-spring across most of the United States, with warming weather, blooming trees, and longer days. Federal income tax filing season also concludes around the middle of the month.",
      planningTips: [
        "The federal income tax filing deadline usually falls in mid-April — a key date for many households.",
        "With no public holidays, April is well suited to focused work and second-quarter planning.",
      ],
    },
    5: {
      introParagraph:
        "May closes with Memorial Day, the federal holiday observed on the last Monday of the month, honoring those who died in military service. This printable May calendar marks the long weekend that unofficially opens summer.",
      seasonalNote:
        "May is late spring in the United States, with warm, pleasant weather across most regions. Memorial Day weekend is widely seen as the unofficial start of summer.",
      planningTips: [
        "Memorial Day falls on the last Monday of May, creating a three-day weekend and a major travel period.",
        "Many schools approach their end-of-year break in late May, though exact dates vary by district.",
      ],
    },
    6: {
      introParagraph:
        "June brings Juneteenth National Independence Day on the 19th, a federal holiday commemorating the end of slavery in the United States. This printable June calendar marks the holiday at the start of summer.",
      seasonalNote:
        "June is early summer in the United States, with long, warm days and the summer solstice around the 20th. Most schools break for the summer at some point during the month.",
      planningTips: [
        "Juneteenth (June 19) is a federal holiday; when it falls on a weekend, it is typically observed on the nearest weekday.",
        "School summer-break start dates vary widely by state and district — confirm your local calendar.",
      ],
    },
  },

  // ─── United Kingdom ────────────────────────────────────────────────────────
  gb: {
    7: {
      introParagraph:
        "July has no UK-wide bank holiday, making it a full working month in the heart of the British summer. This printable July calendar for the United Kingdom gives you a clear grid for summer plans and school-holiday scheduling.",
      seasonalNote:
        "July is mid-summer in the UK, with the longest, warmest days of the year. Schools in England and Wales typically break up for the summer holidays toward the end of the month.",
      planningTips: [
        "With no bank holiday this month, July planning centres on personal leave and the start of the school summer break.",
        "Term-end dates differ across England, Wales, Scotland and Northern Ireland — check your local schedule.",
      ],
    },
    8: {
      introParagraph:
        "August brings the Summer Bank Holiday, observed on the last Monday of the month in England, Wales and Northern Ireland (Scotland marks its summer bank holiday on the first Monday of August). This printable August calendar for the United Kingdom marks the long weekend within the main holiday season.",
      seasonalNote:
        "August is the height of the British summer school holidays, a peak period for domestic travel and family trips before the new term begins in September.",
      planningTips: [
        "The late-August bank holiday is one of the busiest travel weekends of the year — book journeys and stays ahead.",
        "Bank holiday dates differ between Scotland and the rest of the UK; confirm which applies to you.",
      ],
    },
    9: {
      introParagraph:
        "September has no UK-wide bank holiday and marks the return to school and work after the summer. This printable September calendar for the United Kingdom gives you an open grid for the start of the autumn term.",
      seasonalNote:
        "September is early autumn in the UK, with cooler weather and shortening days. The new school year begins and routines return after the summer break.",
      planningTips: [
        "With no bank holiday, September is a natural reset point for autumn-term and fourth-quarter planning.",
        "School start dates vary by nation and local authority — confirm your term dates.",
      ],
    },
    10: {
      introParagraph:
        "October has no UK-wide bank holiday, though many schools take a half-term break toward the end of the month. This printable October calendar for the United Kingdom covers the full month as autumn deepens.",
      seasonalNote:
        "October is mid-autumn in the UK, with falling temperatures and shorter days. Clocks go back one hour at the end of the month as British Summer Time ends.",
      planningTips: [
        "British Summer Time usually ends on the last Sunday of October — clocks move back one hour.",
        "Autumn half-term dates vary by region; check your local school calendar.",
      ],
    },
    11: {
      introParagraph:
        "November has no UK-wide bank holiday. Remembrance Sunday and Armistice Day (11 November) are widely observed but are not public holidays. This printable November calendar for the United Kingdom gives a clear view of late autumn.",
      seasonalNote:
        "November is late autumn in the UK, with dark evenings and cold, often wet weather. Bonfire Night on 5 November and Remembrance events are notable, though neither is a day off.",
      planningTips: [
        "With no bank holiday, November is a full working month leading into the December break.",
        "Remembrance Sunday falls on the second Sunday of November — local events and a silence are widely observed.",
      ],
    },
    12: {
      introParagraph:
        "December brings two UK bank holidays: Christmas Day on the 25th and Boxing Day on the 26th. This printable December calendar for the United Kingdom marks the festive break at the close of the year.",
      seasonalNote:
        "December is the start of winter in the UK, with the shortest days and the festive season. Many workplaces wind down between Christmas and New Year.",
      planningTips: [
        "When Christmas Day or Boxing Day falls on a weekend, a substitute bank holiday is usually given on the following weekday.",
        "Public transport runs a reduced or no service on Christmas Day — plan travel carefully.",
      ],
    },
    1: {
      introParagraph:
        "January opens with New Year's Day on the 1st, a UK bank holiday (Scotland also observes 2 January). This printable January calendar for the United Kingdom helps you start the year organised.",
      seasonalNote:
        "January is deep winter in the UK, with cold, dark days. It is a quieter month after the festive season, often used for fresh starts.",
      planningTips: [
        "Scotland has an additional bank holiday on 2 January; the rest of the UK does not.",
        "If New Year's Day falls on a weekend, a substitute bank holiday is given on the following weekday.",
      ],
    },
    2: {
      introParagraph:
        "February has no UK-wide bank holiday, though many schools take a half-term break mid-month. This printable February calendar for the United Kingdom covers the shortest month, including the extra day in leap years.",
      seasonalNote:
        "February is still winter in the UK, though daylight slowly returns. Many schools have a half-term break in the middle of the month.",
      planningTips: [
        "February half-term dates vary by region — check your local school calendar.",
        "February has 28 days, or 29 in a leap year; confirm the year for month-end deadlines.",
      ],
    },
    3: {
      introParagraph:
        "March has no UK-wide bank holiday. St David's Day (1 March, Wales) and St Patrick's Day (17 March, a bank holiday in Northern Ireland) fall this month. This printable March calendar for the United Kingdom marks the move from winter into spring.",
      seasonalNote:
        "March brings the start of spring in the UK, with lengthening days. British Summer Time begins at the end of the month, when clocks go forward one hour.",
      planningTips: [
        "British Summer Time usually begins on the last Sunday of March — clocks move forward one hour.",
        "St Patrick's Day (17 March) is a bank holiday in Northern Ireland only.",
      ],
    },
  },

  // ─── Australia (Southern Hemisphere) ───────────────────────────────────────
  au: {
    7: {
      introParagraph:
        "July has no nationwide public holiday in Australia, and many public holidays vary by state and territory. This printable July calendar for Australia gives you a clear grid in the middle of the Australian winter.",
      seasonalNote:
        "July is mid-winter in Australia, the coldest month across much of the country. It includes school holidays in most states and is peak season for the south-eastern snow resorts.",
      planningTips: [
        "Public holidays in Australia differ by state and territory — check your local schedule.",
        "Winter school-holiday dates vary by state; confirm yours before planning travel.",
      ],
    },
    8: {
      introParagraph:
        "August has no nationwide public holiday in Australia, though some states and territories observe local holidays. This printable August calendar for Australia covers the final month of winter.",
      seasonalNote:
        "August is late winter in Australia, with cool weather easing toward spring by month's end and days beginning to lengthen.",
      planningTips: [
        "Several August holidays (such as local show days) apply only to specific states or regions.",
        "With no national holiday, August planning usually centres on personal and local schedules.",
      ],
    },
    9: {
      introParagraph:
        "September has no single nationwide public holiday in Australia, and observances such as the King's Birthday and grand-final events vary by state. This printable September calendar for Australia marks the start of spring.",
      seasonalNote:
        "September is the start of spring in Australia, with warming weather and longer days. Spring school holidays fall in late September or early October in most states.",
      planningTips: [
        "Many September public holidays apply only to particular states — check your local calendar.",
        "Daylight saving begins in early October in participating states; September is a good time to prepare.",
      ],
    },
    10: {
      introParagraph:
        "October's public holidays in Australia vary widely by state — including Labour Day in some states and the King's Birthday in Queensland and Western Australia. This printable October calendar for Australia covers mid-spring.",
      seasonalNote:
        "October is mid-spring in Australia, with mild, warming weather. Daylight saving time begins in early October in the states that observe it, moving clocks forward one hour.",
      planningTips: [
        "Daylight saving usually begins on the first Sunday of October in NSW, Victoria, the ACT, SA and Tasmania — Queensland, WA and the NT do not observe it.",
        "October public holidays differ by state; confirm which apply to you.",
      ],
    },
    11: {
      introParagraph:
        "November has no nationwide public holiday in Australia; the Melbourne Cup is a public holiday only in Victoria. This printable November calendar for Australia covers late spring.",
      seasonalNote:
        "November is late spring in Australia, warming toward summer. The school year heads into its final weeks, with exams and end-of-year events.",
      planningTips: [
        "The Melbourne Cup public holiday (first Tuesday of November) applies in Victoria only, though the race is widely followed nationally.",
        "With no national holiday, November is largely a full working month.",
      ],
    },
    12: {
      introParagraph:
        "December brings Christmas Day (25 December) and Boxing Day (26 December), public holidays across Australia, set in the middle of the Australian summer. This printable December calendar for Australia marks the festive season and the start of the long summer break.",
      seasonalNote:
        "December is early summer in Australia — warm to hot across most of the country. It coincides with the end of the school year and the start of the long summer holidays, making it the peak travel season.",
      planningTips: [
        "Christmas and the New Year fall during the summer holidays, so book travel and accommodation well in advance.",
        "When Christmas Day or Boxing Day falls on a weekend, an additional public holiday is usually observed on the following weekday.",
      ],
    },
    1: {
      introParagraph:
        "January brings New Year's Day (1 January) and Australia Day (26 January), both nationwide public holidays, during the height of the Australian summer. This printable January calendar for Australia covers the main summer-holiday month.",
      seasonalNote:
        "January is peak summer in Australia, the warmest month across most of the country. Schools are on their long summer break for the whole month, and it is the busiest holiday and travel period of the year.",
      planningTips: [
        "Australia Day on 26 January is a national public holiday; when it falls on a weekend, the holiday is observed on the following Monday.",
        "January is the main summer-holiday month — expect high demand for travel and accommodation.",
      ],
    },
    2: {
      introParagraph:
        "February has no nationwide public holiday in Australia, and the school year begins early in the month in most states. This printable February calendar for Australia covers the final month of summer.",
      seasonalNote:
        "February is late summer in Australia, often hot across much of the country. The new school year starts and routines return after the long summer break.",
      planningTips: [
        "With no national holiday, February is largely a full working month.",
        "School return dates vary by state in early February — confirm your local start date.",
      ],
    },
    3: {
      introParagraph:
        "March's public holidays in Australia vary by state — Labour Day falls in March in Victoria, Tasmania and Western Australia, while other states observe it at different times. This printable March calendar for Australia marks the start of autumn.",
      seasonalNote:
        "March is the start of autumn in Australia, with easing heat and pleasant weather. Daylight saving time ends in early April in the states that observe it.",
      planningTips: [
        "Labour Day timing differs by state — March in some, other months elsewhere; check your local calendar.",
        "Autumn brings milder conditions, a popular time for domestic travel.",
      ],
    },
  },

  // ─── Canada ────────────────────────────────────────────────────────────────
  ca: {
    7: {
      introParagraph:
        "July opens with Canada Day on the 1st, the national statutory holiday marking Confederation. This printable July calendar for Canada marks the holiday at the start of the Canadian summer.",
      seasonalNote:
        "July is mid-summer in Canada, one of the warmest months across the country. Schools are on summer break, and Canada Day launches a busy season of festivals and travel.",
      planningTips: [
        "When Canada Day falls on a weekend, many workplaces observe the statutory holiday on the following Monday.",
        "Canada Day weekend is a peak travel period — plan ahead.",
      ],
    },
    8: {
      introParagraph:
        "August brings the Civic Holiday on the first Monday of the month, observed in most provinces under various names (it is not a federal statutory holiday). This printable August calendar for Canada covers late summer.",
      seasonalNote:
        "August is late summer in Canada, warm across most of the country, with many families taking their final trips before the school year begins.",
      planningTips: [
        "The August Civic Holiday is observed in most — but not all — provinces, under different names; confirm whether it applies where you are.",
        "Back-to-school dates vary by province; check your local calendar.",
      ],
    },
    9: {
      introParagraph:
        "September brings Labour Day on the first Monday and the National Day for Truth and Reconciliation on the 30th, a federal statutory holiday observed federally and in several provinces. This printable September calendar for Canada marks the return to school as autumn begins.",
      seasonalNote:
        "September is early autumn in Canada, with cooling weather and the start of the school year. Labour Day weekend is widely treated as the end of summer.",
      planningTips: [
        "The National Day for Truth and Reconciliation (30 September) is a statutory holiday for federally regulated workplaces and in some provinces, but not all — confirm your status.",
        "Labour Day always falls on the first Monday of September.",
      ],
    },
    10: {
      introParagraph:
        "October brings Canadian Thanksgiving on the second Monday of the month, a statutory holiday in most provinces. This printable October calendar for Canada covers mid-autumn.",
      seasonalNote:
        "October is mid-autumn in Canada, with cool weather, fall foliage, and the first frosts in many regions. Thanksgiving weekend is a popular time for family gatherings.",
      planningTips: [
        "Thanksgiving in Canada falls on the second Monday of October — earlier than the US holiday.",
        "Thanksgiving is a statutory holiday in most provinces, though observance varies in the Atlantic provinces.",
      ],
    },
    11: {
      introParagraph:
        "November brings Remembrance Day on the 11th, observed across Canada and a statutory holiday in most provinces and territories. This printable November calendar for Canada covers late autumn.",
      seasonalNote:
        "November is late autumn moving into winter in Canada, with cold weather and shorter days. The first significant snowfall arrives in many regions.",
      planningTips: [
        "Remembrance Day (11 November) is a statutory holiday in most provinces, but not in Ontario, Quebec, Nova Scotia or Manitoba — confirm your province.",
        "Ceremonies and a moment of silence at 11 a.m. are widely observed nationwide.",
      ],
    },
    12: {
      introParagraph:
        "December brings Christmas Day (25 December) and Boxing Day (26 December), with Christmas a statutory holiday nationwide. This printable December calendar for Canada marks the festive break at the close of the year.",
      seasonalNote:
        "December is the start of winter in Canada, with cold temperatures and snow across most of the country. It is the peak of the holiday season, with widespread travel and time off.",
      planningTips: [
        "Boxing Day (26 December) is a statutory holiday in some provinces, notably Ontario, but not all — confirm your province.",
        "When Christmas falls on a weekend, a substitute statutory holiday is usually given.",
      ],
    },
    1: {
      introParagraph:
        "January opens with New Year's Day on the 1st, a statutory holiday across Canada. This printable January calendar for Canada helps you start the year organised.",
      seasonalNote:
        "January is deep winter in Canada, often the coldest month, with snow and short days nationwide. It is a quieter month after the holidays, with winter activities in full swing.",
      planningTips: [
        "When New Year's Day falls on a weekend, a substitute statutory holiday is usually given on the following weekday.",
        "January is a natural point to map out the year ahead.",
      ],
    },
    2: {
      introParagraph:
        "February brings Family Day, observed on the third Monday of the month in many provinces (including Ontario, Alberta and British Columbia), though not nationwide. This printable February calendar for Canada covers the shortest month, including the extra day in leap years.",
      seasonalNote:
        "February is mid-winter in Canada, cold across the country, though daylight slowly lengthens. Winter festivals and outdoor activities are popular.",
      planningTips: [
        "Family Day (third Monday of February) is a statutory holiday in several provinces but not all — confirm whether it applies where you are.",
        "February has 28 days, or 29 in a leap year.",
      ],
    },
    3: {
      introParagraph:
        "March has no nationwide statutory holiday in Canada, making it a full working month as winter eases toward spring. This printable March calendar for Canada gives an open grid for first-quarter planning.",
      seasonalNote:
        "March marks the transition from winter to spring in Canada, with thawing in southern regions. Daylight Saving Time begins in early March in most of the country, moving clocks forward one hour.",
      planningTips: [
        "Daylight Saving Time usually begins on the second Sunday of March in most of Canada (Saskatchewan does not observe it).",
        "School spring break falls in March in many provinces, on varying dates.",
      ],
    },
  },

  // ─── South Korea ───────────────────────────────────────────────────────────
  kr: {
    7: {
      introParagraph:
        "July has no public holiday in South Korea, falling in the middle of the hot, humid Korean summer. This printable July calendar for South Korea gives you a clear grid for the peak of summer.",
      seasonalNote:
        "July is mid-summer in Korea, hot and humid, and includes part of the monsoon (jangma) rainy season. The summer-vacation season is beginning.",
      planningTips: [
        "With no public holiday, July planning centres on summer vacation, which peaks from late July into early August.",
        "The monsoon season can bring heavy rain in July — keep travel plans flexible.",
      ],
    },
    8: {
      introParagraph:
        "August brings Liberation Day (Gwangbokjeol) on the 15th, the national holiday marking Korea's liberation in 1945. This printable August calendar for South Korea marks the holiday during the height of summer.",
      seasonalNote:
        "August is the hottest part of the Korean summer and the peak of the national summer-vacation period, with heat and humidity at their highest early in the month.",
      planningTips: [
        "Liberation Day (15 August) is a public holiday; when it falls on a weekend, a substitute holiday may apply.",
        "Early-to-mid August is the busiest domestic travel period of the summer.",
      ],
    },
    9: {
      introParagraph:
        "September is often the month of Chuseok, Korea's major harvest festival, which follows the lunar calendar and usually spans three days. This printable September calendar for South Korea marks the holiday period as autumn begins; exact dates shift each year with the lunar calendar.",
      seasonalNote:
        "September brings the start of autumn in Korea, with cooling, more comfortable weather after the summer heat. Chuseok, when it falls in September, prompts the year's largest domestic travel.",
      planningTips: [
        "Chuseok follows the lunar calendar and falls in September or early October depending on the year, often with substitute holidays added — check the exact dates.",
        "Travel and transport are extremely busy around Chuseok; book well ahead.",
      ],
    },
    10: {
      introParagraph:
        "October brings two national holidays: National Foundation Day (Gaecheonjeol) on the 3rd and Hangeul Day on the 9th, celebrating the Korean alphabet. In some years, Chuseok also falls in early October. This printable October calendar for South Korea covers mid-autumn.",
      seasonalNote:
        "October is peak autumn in Korea, with crisp, clear weather and autumn foliage — one of the most pleasant months of the year and a popular time for outings.",
      planningTips: [
        "When National Foundation Day or Hangeul Day falls on a weekend, a substitute holiday may apply.",
        "In years when Chuseok lands in early October, expect heavy holiday travel.",
      ],
    },
    11: {
      introParagraph:
        "November has no public holiday in South Korea. The national university entrance exam (Suneung) is typically held in mid-November and shapes the month nationally. This printable November calendar for South Korea covers late autumn.",
      seasonalNote:
        "November is late autumn moving toward winter in Korea, with falling temperatures and shorter days. Autumn foliage fades and the first cold spells arrive.",
      planningTips: [
        "The Suneung exam day, in mid-November, affects business hours and transport nationwide, though it is not a public holiday.",
        "With no public holiday, November is a full working month.",
      ],
    },
    12: {
      introParagraph:
        "December brings Christmas Day on the 25th, a public holiday in South Korea, within the run-up to the new year. This printable December calendar for South Korea marks the holiday at the close of the year.",
      seasonalNote:
        "December is the start of winter in Korea, cold and dry, with the first snows in many regions. The lead-up to the solar new year is a busy social and year-end season.",
      planningTips: [
        "Christmas Day (25 December) is a public holiday in Korea; the solar New Year's Day follows on 1 January.",
        "Year-end gatherings (songnyeonhoe) make December a busy social month.",
      ],
    },
    1: {
      introParagraph:
        "January opens with New Year's Day on the 1st, a public holiday. In some years Seollal, the Lunar New Year, also falls in late January; its dates shift each year with the lunar calendar. This printable January calendar for South Korea helps you start the year organised.",
      seasonalNote:
        "January is the depth of winter in Korea — the coldest, driest part of the year. When Seollal falls in late January, it brings major family travel.",
      planningTips: [
        "Seollal (Lunar New Year) usually falls in late January or February and includes a three-day holiday — check the exact dates each year.",
        "Travel around Seollal is extremely busy; book ahead when it lands in January.",
      ],
    },
    2: {
      introParagraph:
        "February is often the month of Seollal, the Lunar New Year, one of Korea's two biggest holidays, spanning three days. This printable February calendar for South Korea marks the holiday period; exact dates change each year with the lunar calendar.",
      seasonalNote:
        "February is late winter in Korea, still cold but with the first signs of the season easing by month's end. Seollal, when it falls in February, is a major family occasion.",
      planningTips: [
        "Seollal follows the lunar calendar and often falls in February, with a three-day holiday and frequent substitute days — confirm the exact dates.",
        "Expect peak domestic travel around Seollal; plan transport early.",
      ],
    },
    3: {
      introParagraph:
        "March brings Independence Movement Day (Samiljeol) on the 1st, commemorating the 1919 movement against colonial rule. This printable March calendar for South Korea marks the holiday as spring begins.",
      seasonalNote:
        "March is the start of spring in Korea, with milder weather returning, though early March can still be cold. The new school and business year begins in March.",
      planningTips: [
        "Independence Movement Day (1 March) is a public holiday; when it falls on a weekend, a substitute holiday may apply.",
        "The academic and corporate year starts in March, making it a key planning month.",
      ],
    },
  },

  // ─── Japan ─────────────────────────────────────────────────────────────────
  jp: {
    7: {
      introParagraph:
        "July brings Marine Day (Umi no Hi), observed on the third Monday of the month, creating a long weekend. This printable July calendar for Japan marks the holiday at the start of the Japanese summer.",
      seasonalNote:
        "July sees the end of the rainy season (tsuyu) in much of Japan and the onset of hot, humid summer weather. Summer festivals (matsuri) begin across the country.",
      planningTips: [
        "Marine Day falls on the third Monday of July, creating a three-day weekend.",
        "The rainy season typically ends in mid-July, after which heat and humidity rise sharply.",
      ],
    },
    8: {
      introParagraph:
        "August brings Mountain Day (Yama no Hi) on the 11th, Japan's newest national holiday. The month also includes the Obon period, a major traditional time of family return, though Obon itself is not a public holiday. This printable August calendar for Japan covers the height of summer.",
      seasonalNote:
        "August is the hottest month in Japan, humid across most of the country. The mid-August Obon period sees one of the year's largest travel peaks as families return to hometowns.",
      planningTips: [
        "Mountain Day (11 August) often connects with the Obon period to form an extended summer break for many workplaces.",
        "Travel during the Obon period (around mid-August) is extremely busy — book well ahead.",
      ],
    },
    9: {
      introParagraph:
        "September brings two national holidays: Respect for the Aged Day on the third Monday and Autumnal Equinox Day around the 22nd or 23rd. This printable September calendar for Japan marks the start of autumn.",
      seasonalNote:
        "September is early autumn in Japan, with easing heat though typhoon season is at its peak. The two holidays align into a run of long weekends known as 'Silver Week' in some years.",
      planningTips: [
        "Respect for the Aged Day (third Monday) and the Autumnal Equinox can create back-to-back long weekends in some years.",
        "September is peak typhoon season — keep travel plans flexible.",
      ],
    },
    10: {
      introParagraph:
        "October brings Sports Day (Supotsu no Hi), observed on the second Monday of the month. This printable October calendar for Japan covers mid-autumn.",
      seasonalNote:
        "October is one of the most pleasant months in Japan, with mild, clear weather and the start of autumn foliage in northern and mountainous areas.",
      planningTips: [
        "Sports Day falls on the second Monday of October, creating a three-day weekend.",
        "October's mild weather makes it a popular travel month — expect demand around the long weekend.",
      ],
    },
    11: {
      introParagraph:
        "November brings two national holidays: Culture Day on the 3rd and Labour Thanksgiving Day on the 23rd. This printable November calendar for Japan covers late autumn.",
      seasonalNote:
        "November is peak autumn-foliage season across much of Japan, with cool, comfortable weather. It is one of the most popular months for sightseeing.",
      planningTips: [
        "Culture Day (3 November) and Labour Thanksgiving Day (23 November) each create opportunities for long weekends.",
        "Autumn-foliage season makes November a busy travel month, especially at famous viewing spots.",
      ],
    },
    12: {
      introParagraph:
        "December has no national holiday in Japan — the Emperor's Birthday, formerly on 23 December, now falls in February. The year-end is nonetheless a major time of holidays and travel as most workplaces close around the new year. This printable December calendar for Japan marks the close of the year.",
      seasonalNote:
        "December is early winter in Japan, cold in the north and mild in the south. The year-end (nenmatsu) brings widespread office closures and one of the year's biggest travel peaks toward New Year.",
      planningTips: [
        "Although December has no public holiday, most workplaces close for a year-end and New Year break from late December.",
        "Travel around the year-end and New Year period is very busy — book ahead.",
      ],
    },
    1: {
      introParagraph:
        "January opens with New Year's Day on the 1st — the most important holiday in Japan — followed by Coming of Age Day on the second Monday. This printable January calendar for Japan marks the new-year holiday season.",
      seasonalNote:
        "January is mid-winter in Japan, cold and often dry on the Pacific side, with heavy snow on the Sea of Japan side. The first days of January (shogatsu) are a central family and shrine-visiting period.",
      planningTips: [
        "The New Year holiday (shogatsu) extends through the first days of January, with many businesses closed.",
        "Coming of Age Day falls on the second Monday of January, creating a three-day weekend.",
      ],
    },
    2: {
      introParagraph:
        "February brings National Foundation Day on the 11th and the Emperor's Birthday on the 23rd, two national holidays. This printable February calendar for Japan covers the coldest part of winter.",
      seasonalNote:
        "February is the coldest month in Japan, with snow festivals in northern regions and plum blossoms beginning in the south late in the month.",
      planningTips: [
        "National Foundation Day (11 February) and the Emperor's Birthday (23 February) each fall mid-to-late month.",
        "When a national holiday falls on a Sunday, the following Monday becomes a substitute holiday.",
      ],
    },
    3: {
      introParagraph:
        "March brings Vernal Equinox Day, observed around the 20th or 21st. This printable March calendar for Japan marks the start of spring and the end of the school and business year.",
      seasonalNote:
        "March is early spring in Japan, with warming weather and the first cherry blossoms appearing in the south toward the end of the month. It is the close of the academic and fiscal year.",
      planningTips: [
        "Vernal Equinox Day falls around 20–21 March; the exact date is set each year.",
        "The fiscal and school year ends in March, making it a busy period for transitions and moving.",
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
