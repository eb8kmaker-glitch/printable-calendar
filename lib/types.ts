export interface Holiday {
  date: string;
  name: string;
  type?: string;
}

export interface CountryConfig {
  code: string;
  name: string;
  locale: string;
  weekStart: 0 | 1; // 0 = Sunday, 1 = Monday
  dateFormat: string;
}

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  holiday?: Holiday;
}

export const SUPPORTED_COUNTRIES: CountryConfig[] = [
  {
    code: "US",
    name: "United States",
    locale: "en-US",
    weekStart: 0,
    dateFormat: "MM/DD/YYYY",
  },
  {
    code: "KR",
    name: "South Korea",
    locale: "ko-KR",
    weekStart: 0,
    dateFormat: "YYYY.MM.DD",
  },
  {
    code: "JP",
    name: "Japan",
    locale: "ja-JP",
    weekStart: 0,
    dateFormat: "YYYY/MM/DD",
  },
];

export const COUNTRY_NAMES: Record<string, string> = {
  US: "United States",
  KR: "South Korea",
  JP: "Japan",
};

export const MONTH_NAMES = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December",
];

export const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
