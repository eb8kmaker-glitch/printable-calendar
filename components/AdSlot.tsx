"use client";

interface AdSlotProps {
  slot: string;
  style?: React.CSSProperties;
}

export default function AdSlot({ slot, style }: AdSlotProps) {
  // Replace with real AdSense code when publisher ID is configured
  return (
    <div
      className="no-print"
      style={{
        width: "100%",
        minHeight: 90,
        border: "1px dashed var(--border)",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--muted)",
        fontSize: 11,
        letterSpacing: "0.05em",
        ...style,
      }}
    >
      {/* AdSense ad slot: {slot} */}
      <span style={{ opacity: 0.4 }}>advertisement</span>
    </div>
  );
}
