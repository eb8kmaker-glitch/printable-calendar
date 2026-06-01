import type { Metadata } from "next";
import DateCalculator from "./DateCalculator";
import { getLocale } from "@/i18n/server";
import { getTranslations } from "@/i18n";
import type { DateCalcI18n } from "./DateCalculator";

const BASE_URL = "https://printablecalendars.app";

export const metadata: Metadata = {
  title: "Date Calculator — Days Between Dates, Add Days, Countdown | PrintableCalendars",
  description:
    "Free date calculator tools. Calculate days between two dates, add or subtract days from a date, and count down to any upcoming date.",
  alternates: { canonical: `${BASE_URL}/date-calculator` },
  openGraph: {
    title: "Date Calculator — Days Between Dates, Add Days, Countdown | PrintableCalendars",
    description:
      "Free date calculator tools. Calculate days between two dates, add or subtract days from a date, and count down to any upcoming date.",
    url: `${BASE_URL}/date-calculator`,
    type: "website",
    siteName: "PrintableCalendars",
  },
  twitter: {
    card: "summary_large_image",
    title: "Date Calculator — Days Between Dates, Add Days, Countdown | PrintableCalendars",
    description:
      "Free date calculator tools. Calculate days between two dates, add or subtract days from a date, and count down to any upcoming date.",
  },
};

export default async function DateCalculatorPage() {
  const locale = await getLocale();
  const i18n = getTranslations(locale);
  return <DateCalculator i18n={i18n.dateCalculator as unknown as DateCalcI18n} />;
}
