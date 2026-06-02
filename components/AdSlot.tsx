"use client";

import { useEffect, useRef } from "react";

const SLOT_IDS: Record<string, string> = {
  "top-banner":    "8421536213",
  "pre-download":  "6790935942",
  "todays-events": "1150474290",
  "hero-infeed":   "2290946981",
};

const INFEED_SLOTS = new Set(["hero-infeed"]);
const IN_ARTICLE_SLOTS = new Set(["pre-download"]);
const ADSENSE_CLIENT = "ca-pub-8254204287118850";

interface AdSlotProps {
  slot: string;
  style?: React.CSSProperties;
}

export default function AdSlot({ slot, style }: AdSlotProps) {
  const slotId = SLOT_IDS[slot] ?? "";
  const ref = useRef<HTMLModElement>(null);
  const pushed = useRef(false);
  const isInfeed = INFEED_SLOTS.has(slot);
  const isInArticle = IN_ARTICLE_SLOTS.has(slot);

  useEffect(() => {
    if (!slotId || pushed.current) return;
    try {
      pushed.current = true;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch {}
  }, [slotId]);

  if (!slotId) return null;

  return (
    <div className="no-print" style={{ width: "100%", overflow: "hidden", ...style }}>
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: "block", ...(isInArticle ? { textAlign: "center" } : {}) }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slotId}
        {...(isInfeed
          ? { "data-ad-format": "fluid", "data-ad-layout-key": "-gw-3+1f-3d+2z" }
          : isInArticle
            ? { "data-ad-layout": "in-article", "data-ad-format": "fluid" }
            : { "data-ad-format": "auto", "data-full-width-responsive": "true" }
        )}
      />
    </div>
  );
}
