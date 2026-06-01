'use client'

const COUNTRY_PAIRS: Record<string, { native: string; nativeLabel: string; enLabel: string }> = {
  kr: { native: 'ko', nativeLabel: '한국어', enLabel: 'English' },
  jp: { native: 'ja', nativeLabel: '日本語', enLabel: 'English' },
}

interface LangSwitcherProps {
  country: string;
  currentLocale: string;
}

export default function LangSwitcher({ country, currentLocale }: LangSwitcherProps) {
  const pair = COUNTRY_PAIRS[country]
  if (!pair) return null

  const isNative = currentLocale === pair.native

  function toggle() {
    const newLang = isNative ? 'en' : pair.native
    document.cookie = `preferred_lang=${newLang};path=/;max-age=31536000`
    window.location.reload()
  }

  return (
    <button
      onClick={toggle}
      style={{
        fontSize: 12,
        padding: "5px 12px",
        borderRadius: 8,
        border: "1px solid var(--border)",
        background: "transparent",
        color: "var(--muted)",
        cursor: "pointer",
        transition: "color 0.15s",
      }}
    >
      {isNative ? pair.enLabel : pair.nativeLabel}
    </button>
  )
}
