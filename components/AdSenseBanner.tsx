"use client";

import { useEffect } from "react";

export default function AdSenseBanner() {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch {}
  }, []);

  return (
    <div className="no-print" style={{ overflow: "hidden", textAlign: "center", margin: "0 0 48px" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8254204287118850"
        data-ad-slot="7392449013"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
