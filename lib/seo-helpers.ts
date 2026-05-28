const BASE_URL = "https://printablecalendars.app";

/** Singleton Organization schema — embed in layout for Knowledge Graph. */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PrintableCalendars",
  url: BASE_URL,
  logo: `${BASE_URL}/og-image.png`,
  description:
    "Free printable monthly and annual calendars with official public holidays for USA, Japan, and South Korea. A4 PDF, no login required.",
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
