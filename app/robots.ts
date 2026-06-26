import { MetadataRoute } from "next";

// Known high-load / low-value crawlers that we block outright to reduce
// bot-driven server load. These ignore crawl budgets and hammer dynamic routes.
const BLOCKED_CRAWLERS = [
  "AhrefsBot",
  "SemrushBot",
  "MJ12bot",
  "DotBot",
  "PetalBot",
  "serpstatbot",
  "BLEXBot",
  "DataForSeoBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Block the API and any query-string variants of pages. Dynamic param
        // paths should be reached via their canonical static URLs (which are in
        // the sitemap), not crawled through query permutations.
        disallow: ["/api/", "/*?*"],
      },
      // Explicitly allow major AI crawlers for LLM indexing
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "Yeti", allow: "/" }, // Naver
      // Explicitly disallow known high-load crawlers
      ...BLOCKED_CRAWLERS.map((userAgent) => ({ userAgent, disallow: "/" })),
    ],
    sitemap: "https://printablecalendars.app/sitemap.xml",
    host: "https://printablecalendars.app",
  };
}
