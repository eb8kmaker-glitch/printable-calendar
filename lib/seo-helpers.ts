import { CURRENT_YEAR } from "@/lib/types";

const BASE_URL = "https://printablecalendars.app";

export const COUNTRY_NAMES: Record<string, string> = {
  us: "United States",
  gb: "United Kingdom",
  au: "Australia",
  ca: "Canada",
  kr: "South Korea",
  jp: "Japan",
};

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PrintableCalendars",
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/calendar/{country}/${CURRENT_YEAR}/{month}`,
      },
      "query-input": "required name=country",
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateCalendarPageSchema(params: {
  country: string;
  countryName: string;
  year: number;
  month: number;
  monthName: string;
}) {
  return generateBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: params.countryName, url: `${BASE_URL}/calendar/${params.country}/${params.year}` },
    { name: `${params.monthName} ${params.year}`, url: `${BASE_URL}/calendar/${params.country}/${params.year}/${params.month}` },
  ]);
}

/** Singleton Organization schema — embed in layout for Knowledge Graph. */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PrintableCalendars",
  url: BASE_URL,
  logo: `${BASE_URL}/og-image.png`,
  description:
    "Free printable monthly and annual calendars with official public holidays for the USA, UK, Australia, Canada, Japan, and South Korea. A4 PDF, no login required.",
  sameAs: [],
};

/** Build a FAQPage JSON-LD object from a list of question/answer pairs. */
export function buildFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

/** Build a HowTo JSON-LD for calendar download pages. */
export function buildHowToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    totalTime: "PT1M",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

/** Build a WebPage JSON-LD object. */
export function buildWebPageSchema({
  name,
  description,
  url,
  breadcrumbs,
}: {
  name: string;
  description: string;
  url: string;
  breadcrumbs?: { name: string; item: string }[];
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
  };
  if (breadcrumbs && breadcrumbs.length > 0) {
    schema.breadcrumb = {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://printablecalendars.app" },
        ...breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 2,
          name: b.name,
          item: b.item,
        })),
      ],
    };
  }
  return schema;
}
