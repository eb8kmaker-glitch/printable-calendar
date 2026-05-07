import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        maxWidth: 500,
        margin: "120px auto",
        padding: "0 24px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11,
          color: "var(--muted)",
          letterSpacing: "0.1em",
          marginBottom: 12,
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: "'EB Garamond', Georgia, serif",
          fontSize: 32,
          fontWeight: 400,
          marginBottom: 12,
        }}
      >
        Page not found
      </h1>
      <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 28 }}>
        This calendar page doesn&apos;t exist. Try a different month or country.
      </p>
      <Link
        href="/"
        style={{
          fontSize: 13,
          padding: "10px 20px",
          background: "var(--fg)",
          color: "var(--bg)",
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: 500,
        }}
      >
        Back to home
      </Link>
    </div>
  );
}
