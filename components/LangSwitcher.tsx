import { setLang } from '@/app/actions/setLang'
import type { Locale } from '@/i18n'

const LANG_LABELS: Record<Locale, string> = {
  en: 'EN',
  ko: '한국어',
  ja: '日本語',
}

export default function LangSwitcher({
  currentLocale,
  currentPath,
}: {
  currentLocale: Locale
  currentPath: string
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      {(['en', 'ko', 'ja'] as Locale[]).map((lang) => (
        <form action={setLang} key={lang}>
          <input type="hidden" name="lang" value={lang} />
          <input type="hidden" name="referer" value={currentPath} />
          <button
            type="submit"
            style={{
              padding: '3px 8px',
              borderRadius: 6,
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              fontSize: 12,
              fontWeight: currentLocale === lang ? 600 : 400,
              color: currentLocale === lang ? 'var(--fg)' : 'var(--muted)',
              opacity: currentLocale === lang ? 1 : 0.5,
              transition: 'opacity 0.15s',
            }}
          >
            {LANG_LABELS[lang]}
          </button>
        </form>
      ))}
    </div>
  )
}
