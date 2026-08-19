'use client'

const links = [
  { href: 'https://linkedin.com/in/ilef-ben-ayed', label: 'LinkedIn' },
  { href: 'https://github.com/Ilef16', label: 'GitHub' },
  { href: 'mailto:ilefbenayed08@gmail.com', label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer" style={{ padding: '28px 24px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg,#7c3aed,#06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#fff', fontSize: '0.58rem', fontWeight: 900 }}>IB</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 20 }}>
          {links.map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
               style={{ fontSize: '0.78rem', color: 'var(--tm)', fontWeight: 600, transition: 'color 0.2s' }}
               onMouseEnter={e => (e.currentTarget.style.color = '#a855f7')}
               onMouseLeave={e => (e.currentTarget.style.color = 'var(--tm)')}>
              {l.label}
            </a>
          ))}
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--tm)' }}>
          © {year} Ilef Ben Ayed — <a href="mailto:ilefbenayed08@gmail.com" style={{ color: 'var(--v2)' }}>ilefbenayed08@gmail.com</a>
        </p>
      </div>
    </footer>
  )
}
