import { MetadataRoute } from "next";
import { SUPPORTED_COUNTRIES } from "@/lib/types";
import { getHolidays } from "@/lib/holidays";
import { WORLD_EVENTS } from "@/lib/events";
import { CULTURAL_HOLIDAYS } from "@/lib/holidays-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://printablecalendars.io";
  const year = new Date().getFullYear();
  const entries: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
  ];

  // Calendar pages — current year + next year
  for (const country of SUPPORTED_COUNTRIES) {
    for (const y of [year, year + 1]) {
      for (let month = 1; month <= 12; month++) {
        entries.push({
          url: `${baseUrl}/calendar/${country.code.toLowerCase()}/${y}/${month}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.8,
        });
      }
    }

    // Holiday pages
    const holidays = getHolidays(country.code, year);
    for (const h of holidays) {
      const slug = `${country.code.toLowerCase()}-${h.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")}-${year}`;
      entries.push({
        url: `${baseUrl}/holiday/${slug}`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.5,
      });
    }
  }

  // Events index
  entries.push({
    url: `${baseUrl}/events`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  });

  // Individual event pages
  for (const event of WORLD_EVENTS) {
    entries.push({
      url: `${baseUrl}/events/${event.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    });
  }

  // Cultural holidays index + detail pages
  entries.push({
    url: `${baseUrl}/holidays`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  });
  for (const h of CULTURAL_HOLIDAYS) {
    entries.push({
      url: `${baseUrl}/holidays/${h.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.65,
    });
  }

  // Trust pages
  for (const slug of ["about", "contact"]) {
    entries.push({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    });
  }

  // Landing pages
  for (const slug of [
    "study-planner",
    "ramadan-2026",
    "school-calendar-2026",
    "holiday-planner",
    "teacher-planner",
    "wedding-countdown",
  ]) {
    entries.push({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
