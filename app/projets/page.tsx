'use client'

import { useLang } from '@/context/LangContext'
import SectionTitle from '@/components/SectionTitle'
import TechTag from '@/components/TechTag'
import { projects } from '@/lib/data'

const projectIconPaths = [
  <><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></>,
  <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></>,
  <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
  <><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>,
  <><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>,
  <><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>,
]

// Alternate cyan/violet for visual variety
const cardCyan = [false, true, false, true, false, true]

export default function ProjetsPage() {
  const { t } = useLang()

  return (
    <div className="page">
      <SectionTitle
        title={t('Projets', 'Academic')}
        highlight={t('Académiques', 'Projects')}
        subtitle={t('Réalisations concrètes issues de ma formation', 'Concrete achievements from my studies')}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>
        {projects.map((p, i) => (
          <div key={i} className={`glass-card ${cardCyan[i] ? 'glass-card-c' : ''}`} style={{ padding: 24, display: 'flex', flexDirection: 'column' }}>
            {/* Icon */}
            <div style={{ width: 44, height: 44, borderRadius: 10, background: cardCyan[i] ? 'rgba(6,182,212,0.1)' : 'rgba(124,58,237,0.1)', border: `1px solid ${cardCyan[i] ? 'var(--bd2)' : 'var(--bd)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={cardCyan[i] ? '#06b6d4' : '#a855f7'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {projectIconPaths[i]}
              </svg>
            </div>
            <h3 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 10, color: 'var(--tb)', lineHeight: 1.4 }}>
              {t(p.titleFr, p.titleEn)}
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--tm)', lineHeight: 1.8, marginBottom: 16, flex: 1 }}>
              {t(p.descFr, p.descEn)}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {p.tags.map(tag => <TechTag key={tag} label={tag} />)}
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 56 }}>
        <p style={{ fontSize: '0.88rem', color: 'var(--tm)', marginBottom: 20 }}>
          {t("Retrouvez d'autres projets sur mon GitHub", 'Find more projects on my GitHub')}
        </p>
        <a href="https://github.com/Ilef16" target="_blank" rel="noreferrer" className="btn-p">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
          {t('Voir mon GitHub', 'View my GitHub')}
        </a>
      </div>
    </div>
  )
}
