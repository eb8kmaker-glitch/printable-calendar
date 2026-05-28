"use client";

import { useEffect, useRef } from "react";

interface SlotConfig {
  id: string;
  format: "auto" | "fluid";
  layoutKey?: string;
  fullWidthResponsive?: boolean;
}

const SLOTS: Record<string, SlotConfig> = {
  "top-banner":        { id: "",           format: "auto",  fullWidthResponsive: true },
  "pre-download":      { id: "",           format: "auto",  fullWidthResponsive: true },
  "todays-events":     { id: "1150474290", format: "auto",  fullWidthResponsive: true },
  "between-countries": { id: "2290946981", format: "fluid", layoutKey: "-gw-3+1f-3d+2z" },
  "above-footer":      { id: "1150474290", format: "auto",  fullWidthResponsive: true },
};

const ADSENSE_CLIENT = "ca-pub-8254204287118850";

interface AdSlotProps {
  slot: string;
  style?: React.CSSProperties;
}

export default function AdSlot({ slot, style }: AdSlotProps) {
  const config = SLOTS[slot];
  const slotId = config?.id ?? "";
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
        data-ad-format={config.format}
        data-ad-layout-key={config.layoutKey}
        data-full-width-responsive={config.fullWidthResponsive ? "true" : undefined}
      />
    </div>
  );
}
