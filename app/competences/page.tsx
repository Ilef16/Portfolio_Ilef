'use client'

import { useLang } from '@/context/LangContext'
import SectionTitle from '@/components/SectionTitle'
import { skillCategories, techLogoMap } from '@/lib/data'

const skillIcons: Record<number, React.ReactNode> = {
  0: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>,
  1: <><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>,
  2: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></>,
  3: <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></>,
  4: <><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></>,
  5: <><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></>,
}

export default function CompetencesPage() {
  const { t } = useLang()

  return (
    <div className="page">
      <SectionTitle
        title={t('Compétences', 'Technical')}
        highlight={t('Techniques', 'Skills')}
        subtitle={t('Technologies, langages, frameworks et outils maîtrisés', 'Technologies, languages, frameworks and tools')}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
        {skillCategories.map((cat, i) => (
          <div key={i} className="glass-card" style={{ padding: 24 }}>
            <h3 style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid var(--bd)', display: 'flex', alignItems: 'center', gap: 8, color: 'var(--v2)' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {skillIcons[i]}
              </svg>
              {t(cat.titleFr, cat.titleEn)}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {cat.items.map(item => (
                <span key={item} className="sbadge" style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                  {techLogoMap[item] && (
                    <img
                      src={techLogoMap[item]}
                      alt={item}
                      width={15}
                      height={15}
                      loading="lazy"
                      style={{ flexShrink: 0 }}
                      onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                    />
                  )}
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
