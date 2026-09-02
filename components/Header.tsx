'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLang } from '@/context/LangContext'
import { useTheme } from '@/context/ThemeContext'

const navItems = [
  { href: '/',                fr: 'Accueil',        en: 'Home' },
  { href: '/parcours',        fr: 'Formation',      en: 'Education' },
  { href: '/experiences',     fr: 'Expériences',    en: 'Experience' },
  { href: '/competences',     fr: 'Compétences',    en: 'Skills' },
  { href: '/projets',         fr: 'Projets',        en: 'Projects' },
  { href: '/certifications',  fr: 'Certifications', en: 'Certifications' },
  { href: '/vie-associative', fr: 'Associatif',     en: 'Community' },
]

// Reusable iOS-style toggle switch
function Toggle({
  checked,
  onChange,
  label,
  onIcon,
  offIcon,
}: {
  checked: boolean
  onChange: () => void
  label: string
  onIcon?: string
  offIcon?: string
}) {
  return (
    <button
      onClick={onChange}
      aria-label={label}
      title={label}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: 'none', border: 'none', cursor: 'pointer', padding: 0,
      }}
    >
      {/* Track */}
      <span style={{
        position: 'relative',
        width: 40, height: 22,
        borderRadius: 11,
        background: checked ? 'var(--v2)' : 'rgba(100,120,120,0.35)',
        transition: 'background 0.25s',
        flexShrink: 0,
        display: 'block',
      }}>
        {/* Thumb */}
        <span style={{
          position: 'absolute',
          top: 2, left: checked ? 20 : 2,
          width: 18, height: 18,
          borderRadius: '50%',
          background: '#fff',
          boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
          transition: 'left 0.22s cubic-bezier(0.4,0,0.2,1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.6rem',
        }}>
          {checked ? onIcon : offIcon}
        </span>
      </span>
      <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--tm)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
        {label}
      </span>
    </button>
  )
}

export default function Header() {
  const pathname = usePathname()
  const { lang, toggleLang, t } = useLang()
  const { theme, toggleTheme } = useTheme()

  const isDark = theme === 'dark'

  return (
    <header className="nav-header">
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 58, gap: 12 }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <span style={{ fontFamily: 'Space Grotesk,Inter,sans-serif', fontWeight: 700, fontSize: '0.9rem', background: 'linear-gradient(135deg,#24b1b1,#ffe2af)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Ilef Ben Ayed
          </span>
        </Link>

        {/* Nav */}
        <nav style={{ display: 'flex', gap: 1, flexWrap: 'nowrap', overflow: 'hidden' }}>
          {navItems.map(item => {
            const active = pathname === item.href
            return (
              <Link key={item.href} href={item.href} style={{
                fontSize: '0.66rem', fontWeight: 600,
                textTransform: 'uppercase', letterSpacing: '0.6px',
                padding: '6px 9px', borderRadius: 7,
                color: active ? 'var(--v2)' : 'var(--tm)',
                background: active ? 'rgba(36,177,177,0.12)' : 'transparent',
                textDecoration: 'none',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}>
                {t(item.fr, item.en)}
              </Link>
            )
          })}
        </nav>

        {/* Controls — iOS toggles */}
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexShrink: 0 }}>
          <Toggle
            checked={isDark}
            onChange={toggleTheme}
            label={isDark ? t('Sombre', 'Dark') : t('Clair', 'Light')}
            onIcon="🌙"
            offIcon="☀️"
          />
          <Toggle
            checked={lang === 'en'}
            onChange={toggleLang}
            label={lang === 'fr' ? 'EN' : 'FR'}
            onIcon="🇬🇧"
            offIcon="🇫🇷"
          />
        </div>
      </div>
    </header>
  )
}
