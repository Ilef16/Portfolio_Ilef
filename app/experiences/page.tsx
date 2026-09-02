'use client'

import { useLang } from '@/context/LangContext'
import SectionTitle from '@/components/SectionTitle'
import { experiences } from '@/lib/data'

// Icon paths per experience type (matched by index)
const expIcons = [
  // briefcase
  <path key="0" d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>,
  // graduation cap
  <><path key="1a" d="M22 10v6M2 10l10-5 10 5-10 5z"/><path key="1b" d="M6 12v5c3 3 9 3 12 0v-5"/></>,
  // code
  <><polyline key="2a" points="16 18 22 12 16 6"/><polyline key="2b" points="8 6 2 12 8 18"/></>,
  // layers
  <><polygon key="3a" points="12 2 2 7 12 12 22 7 12 2"/><polyline key="3b" points="2 17 12 22 22 17"/><polyline key="3c" points="2 12 12 17 22 12"/></>,
  // cpu
  <><rect key="4a" x="9" y="9" width="6" height="6"/><path key="4b" d="M20 14H22M20 10H22M2 14H4M2 10H4M14 2V4M10 2V4M14 20V22M10 20V22M4 4h16v16H4z"/></>,
  // zap
  <polyline key="5" points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>,
  // database
  <><ellipse key="6a" cx="12" cy="5" rx="9" ry="3"/><path key="6b" d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path key="6c" d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></>,
  // terminal
  <><polyline key="7a" points="4 17 10 11 4 5"/><line key="7b" x1="12" y1="19" x2="20" y2="19"/></>,
]

export default function ExperiencesPage() {
  const { t, lang } = useLang()

  return (
    <div className="page">
      <SectionTitle
        title={t('Expériences', 'Professional')}
        highlight={t('Professionnelles', 'Experience')}
        subtitle={t('Stages, projets freelance et expériences en entreprise', 'Internships, freelance projects and company experience')}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
        {experiences.map((item, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(4,20,20,0.85)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(36,177,177,0.18)',
              borderRadius: 16,
              padding: 28,
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
              transition: 'border-color 0.25s, transform 0.3s, box-shadow 0.3s',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(36,177,177,0.5)'
              el.style.transform = 'translateY(-4px)'
              el.style.boxShadow = '0 16px 48px rgba(0,121,121,0.22)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(36,177,177,0.18)'
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = 'none'
            }}
          >
            {/* Top row: icon + company badge */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
              {/* Icon box */}
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                border: '1px solid rgba(255,226,175,0.35)',
                background: 'rgba(255,226,175,0.07)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffe2af" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  {expIcons[i % expIcons.length]}
                </svg>
              </div>

              {/* Company badge */}
              <span style={{
                padding: '4px 14px', borderRadius: 30,
                border: '1px solid rgba(36,177,177,0.28)',
                background: 'rgba(36,177,177,0.06)',
                fontSize: '0.7rem', fontWeight: 700,
                color: 'var(--v2)', letterSpacing: '0.5px',
                whiteSpace: 'nowrap', maxWidth: 160,
                overflow: 'hidden', textOverflow: 'ellipsis',
              }}>
                {item.company}
              </span>
            </div>

            {/* Title */}
            <h3 style={{
              fontSize: '1.05rem', fontWeight: 800,
              color: 'var(--tb)', marginBottom: 14,
              letterSpacing: '-0.2px', lineHeight: 1.3,
            }}>
              {t(item.titleFr, item.titleEn)}
            </h3>

            {/* Bullets */}
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20, flex: 1 }}>
              {(lang === 'fr' ? item.bulletsFr : item.bulletsEn).map((b, j) => (
                <li key={j} style={{ display: 'flex', gap: 10, fontSize: '0.86rem', color: 'var(--tm)', lineHeight: 1.7 }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--v2)', marginTop: 9, flexShrink: 0, display: 'block' }} />
                  {b}
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
              {item.tags.map(tag => (
                <span key={tag} style={{
                  padding: '3px 11px', borderRadius: 20,
                  border: '1px solid rgba(36,177,177,0.22)',
                  background: 'rgba(36,177,177,0.06)',
                  fontSize: '0.72rem', fontWeight: 600,
                  color: 'var(--v3)',
                  transition: 'all 0.2s',
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom: period */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 14, borderTop: '1px solid rgba(36,177,177,0.1)' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--c)', boxShadow: '0 0 6px var(--c)', flexShrink: 0, display: 'block' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--tm)', letterSpacing: '0.5px' }}>
                {item.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
