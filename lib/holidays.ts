import Holidays from "date-holidays";
import { Holiday, CalendarDay, SUPPORTED_COUNTRIES } from "./types";

export function getHolidays(countryCode: string, year: number): Holiday[] {
  try {
    const hd = new Holidays(countryCode);
    const holidays = hd.getHolidays(year);
    return holidays
      .filter((h) => h.type === "public")
      .map((h) => ({
        date: h.date.split(" ")[0],
        name: h.name,
        type: h.type,
      }));
  } catch {
    return [];
  }
}

export function buildCalendarDays(
  year: number,
  month: number, // 1-indexed
  holidays: Holiday[]
): CalendarDay[] {
  const holidayMap = new Map(holidays.map((h) => [h.date, h]));
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);
  const startDow = firstDay.getDay(); // 0=Sun
  const days: CalendarDay[] = [];

  // Days from previous month
  for (let i = startDow - 1; i >= 0; i--) {
    const d = new Date(year, month - 1, -i);
    const key = formatDateKey(d);
    days.push({
      date: d,
      isCurrentMonth: false,
      isToday: d.getTime() === today.getTime(),
      holiday: holidayMap.get(key),
    });
  }

  // Days of current month
  for (let d = 1; d <= lastDay.getDate(); d++) {
    const date = new Date(year, month - 1, d);
    const key = formatDateKey(date);
    days.push({
      date,
      isCurrentMonth: true,
      isToday: date.getTime() === today.getTime(),
      holiday: holidayMap.get(key),
    });
  }

  // Fill to complete last week
  const remaining = 42 - days.length;
  for (let i = 1; i <= remaining; i++) {
    const d = new Date(year, month, i);
    const key = formatDateKey(d);
    days.push({
      date: d,
      isCurrentMonth: false,
      isToday: d.getTime() === today.getTime(),
      holiday: holidayMap.get(key),
    });
  }

  return days;
}

function formatDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function getCountryConfig(code: string) {
  return SUPPORTED_COUNTRIES.find(
    (c) => c.code.toLowerCase() === code.toLowerCase()
  );
}
