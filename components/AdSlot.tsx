"use client";

import { useEffect, useRef } from "react";

// Ad slot IDs from AdSense console — add per-unit IDs here once created
const SLOT_IDS: Record<string, string> = {
  "top-banner":    "", // TODO: replace with AdSense ad unit slot ID
  "pre-download":  "", // TODO: replace with AdSense ad unit slot ID
  "todays-events": "1150474290",
};

const ADSENSE_CLIENT = "ca-pub-8254204287118850";

interface AdSlotProps {
  slot: string;
  style?: React.CSSProperties;
}

export default function AdSlot({ slot, style }: AdSlotProps) {
  const slotId = SLOT_IDS[slot] ?? "";
  const ref = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

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
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
