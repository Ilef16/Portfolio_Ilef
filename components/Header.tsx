'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLang } from '@/context/LangContext'
import { useTheme } from '@/context/ThemeContext'

const navItems = [
  { href: '/',                  fr: 'Accueil',       en: 'Home' },
  { href: '/parcours',          fr: 'Formation',     en: 'Education' },
  { href: '/experiences',       fr: 'Expériences',   en: 'Experience' },
  { href: '/competences',       fr: 'Compétences',   en: 'Skills' },
  { href: '/projets',           fr: 'Projets',       en: 'Projects' },
  { href: '/vie-associative',   fr: 'Associatif',    en: 'Community' },
]

export default function Header() {
  const pathname = usePathname()
  const { lang, toggleLang, t } = useLang()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="nav-header">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg,#7c3aed,#06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ color: '#fff', fontSize: '0.7rem', fontWeight: 900 }}>IB</span>
          </div>
          <span style={{ fontFamily: 'Space Grotesk,Inter,sans-serif', fontWeight: 700, fontSize: '0.95rem', background: 'linear-gradient(135deg,#a855f7,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Ilef Ben Ayed
          </span>
        </Link>

        {/* Nav */}
        <nav style={{ display: 'flex', gap: 2 }}>
          {navItems.map(item => {
            const active = pathname === item.href
            return (
              <Link key={item.href} href={item.href}
                style={{
                  position: 'relative',
                  fontSize: '0.72rem', fontWeight: 600,
                  textTransform: 'uppercase', letterSpacing: '0.8px',
                  padding: '8px 12px', borderRadius: 8,
                  color: active ? '#a855f7' : 'var(--tm)',
                  background: active ? 'rgba(124,58,237,0.1)' : 'transparent',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}>
                {t(item.fr, item.en)}
              </Link>
            )
          })}
        </nav>

        {/* Controls */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button onClick={toggleTheme}
            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 30, border: '1px solid rgba(6,182,212,0.28)', background: 'rgba(6,182,212,0.04)', color: 'var(--c)', fontSize: '0.68rem', fontWeight: 700, cursor: 'pointer', letterSpacing: '0.5px', transition: 'all 0.2s' }}>
            {theme === 'dark' ? '☀️' : '🌙'} {theme === 'dark' ? t('Clair','Light') : t('Sombre','Dark')}
          </button>
          <button onClick={toggleLang}
            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 30, border: '1px solid rgba(124,58,237,0.28)', background: 'rgba(124,58,237,0.04)', color: 'var(--v2)', fontSize: '0.68rem', fontWeight: 700, cursor: 'pointer', letterSpacing: '0.5px', transition: 'all 0.2s' }}>
            🌐 {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      </div>
    </header>
  )
}
