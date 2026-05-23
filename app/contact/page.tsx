"use client";

import { useState } from "react";
import Link from "next/link";

const CONTACT_EMAIL = "e.b8k.maker@gmail.com";

type Category = "bug" | "feature" | "holiday-error" | "other";

const CATEGORY_LABELS: Record<Category, string> = {
  bug: "Bug report",
  "holiday-error": "Wrong holiday date",
  feature: "Feature request",
  other: "Other",
};

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState<Category>("other");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) return;

    const subject = `[printcal] ${CATEGORY_LABELS[category]}${name ? ` — from ${name}` : ""}`;
    const body = `Category: ${CATEGORY_LABELS[category]}\n${name ? `From: ${name}\n` : ""}\n${message}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <div style={{ maxWidth: 560, margin: "0 auto", padding: "64px 24px 96px" }}>
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            color: "var(--muted)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Contact
        </p>
        <h1
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: "clamp(28px, 5vw, 44px)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            marginBottom: 16,
          }}
        >
          Get in touch
        </h1>
        <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.65 }}>
          Wrong holiday, missing feature, broken PDF — anything is useful. We
          read every message. The form opens your email client with everything
          pre-filled.
        </p>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: 40 }} />

      {sent ? (
        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: "32px 28px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: 22,
              fontWeight: 400,
              marginBottom: 8,
            }}
          >
            Your email client should have opened.
          </p>
          <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65, marginBottom: 24 }}>
            If it didn&apos;t, email us directly at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={{ color: "var(--fg)", textDecoration: "underline", textUnderlineOffset: 3 }}
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
          <button
            onClick={() => setSent(false)}
            style={{
              fontSize: 13,
              color: "var(--muted)",
              background: "none",
              border: "none",
              cursor: "pointer",
              textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Category */}
          <div>
            <label
              style={{
                display: "block",
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                color: "var(--muted)",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              What is this about?
            </label>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {(Object.keys(CATEGORY_LABELS) as Category[]).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 20,
                    fontSize: 12,
                    border: "1px solid var(--border)",
                    background: category === cat ? "var(--fg)" : "transparent",
                    color: category === cat ? "var(--bg)" : "var(--muted)",
                    cursor: "pointer",
                    transition: "background 0.15s, color 0.15s",
                  }}
                >
                  {CATEGORY_LABELS[cat]}
                </button>
              ))}
            </div>
          </div>

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              style={{
                display: "block",
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                color: "var(--muted)",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Your name <span style={{ opacity: 0.5 }}>(optional)</span>
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Smith"
              autoComplete="name"
              style={{
                width: "100%",
                height: 40,
                padding: "0 14px",
                border: "1px solid var(--border)",
                borderRadius: 8,
                background: "var(--bg)",
                color: "var(--fg)",
                fontSize: 14,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              style={{
                display: "block",
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                color: "var(--muted)",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              placeholder={
                category === "holiday-error"
                  ? "Example: Respect for Aged Day is shown on September 15 for Japan 2026, but it should be September 21."
                  : category === "bug"
                  ? "Example: PDF download for South Korea November 2026 returns a blank page."
                  : "Tell us what you need."
              }
              style={{
                width: "100%",
                padding: "12px 14px",
                border: "1px solid var(--border)",
                borderRadius: 8,
                background: "var(--bg)",
                color: "var(--fg)",
                fontSize: 14,
                resize: "vertical",
                outline: "none",
                lineHeight: 1.6,
                boxSizing: "border-box",
                fontFamily: "inherit",
              }}
            />
          </div>

          {/* Submit */}
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <button
              type="submit"
              disabled={!message.trim()}
              style={{
                padding: "11px 24px",
                background: message.trim() ? "var(--fg)" : "var(--border)",
                color: message.trim() ? "var(--bg)" : "var(--muted)",
                border: "none",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 500,
                cursor: message.trim() ? "pointer" : "default",
                transition: "background 0.15s, color 0.15s",
              }}
            >
              Open email client →
            </button>
            <p style={{ fontSize: 12, color: "var(--muted)" }}>
              Sends to{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{ color: "var(--muted)", textDecoration: "underline", textUnderlineOffset: 3 }}
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </form>
      )}

      {/* Quick links */}
      <div
        style={{
          marginTop: 64,
          paddingTop: 32,
          borderTop: "1px solid var(--border)",
        }}
      >
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            color: "var(--muted)",
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Other ways to help
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            ["/about", "Read about the project", "What we cover, how the PDF works, what is coming next."],
            ["/events", "Browse world events", "If an event is missing or has an error, the contact form above is the best way to report it."],
            ["/holidays", "Browse cultural holidays", "Deep guides to holidays like Chuseok, Golden Week, and Thanksgiving."],
          ].map(([href, title, desc]) => (
            <Link
              key={href as string}
              href={href as string}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                padding: "12px 16px",
                border: "1px solid var(--border)",
                borderRadius: 8,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 500 }}>{title as string}</span>
              <span style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.5 }}>{desc as string}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
