"use client";

import { useEffect, useRef } from "react";

// Desktop: 728×90 (printablecalendars_footer)
const DESKTOP_UNIT = "DAN-CoVdtClU3lNByMCT";
// Mobile: 320×50 (printablecalendars_footer_m)
const MOBILE_UNIT  = "DAN-3RN3Rk3bpFXPgnnP";

declare global {
  interface Window {
    kakaoAdfit?: { push: (opts: object) => void };
  }
}

function loadAdFitScript() {
  if (document.querySelector('script[src*="kas/static/ba.min.js"]')) return;
  const s = document.createElement("script");
  s.src = "//t1.kakaocdn.net/kas/static/ba.min.js";
  s.async = true;
  document.head.appendChild(s);
}

interface AdFitUnitProps {
  unit: string;
  width: number;
  height: number;
}

function AdFitUnit({ unit, width, height }: AdFitUnitProps) {
  const ref = useRef<HTMLModElement>(null);

  useEffect(() => {
    loadAdFitScript();
  }, []);

  return (
    <ins
      ref={ref}
      className="kakao_ad_area"
      style={{ display: "none" }}
      data-ad-unit={unit}
      data-ad-width={String(width)}
      data-ad-height={String(height)}
    />
  );
}

export default function AdFit() {
  return (
    <div className="no-print" style={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: 8 }}>
      {/* Desktop 728×90 */}
      <div className="adfit-desktop" style={{ display: "block" }}>
        <AdFitUnit unit={DESKTOP_UNIT} width={728} height={90} />
      </div>
      {/* Mobile 320×50 */}
      <div className="adfit-mobile" style={{ display: "none" }}>
        <AdFitUnit unit={MOBILE_UNIT} width={320} height={50} />
      </div>
      <style>{`
        @media (max-width: 767px) {
          .adfit-desktop { display: none !important; }
          .adfit-mobile  { display: block !important; }
        }
      `}</style>
    </div>
  );
}
