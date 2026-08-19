'use client'

import { useLang } from '@/context/LangContext'
import SectionTitle from '@/components/SectionTitle'
import TechTag from '@/components/TechTag'
import { experiences } from '@/lib/data'

export default function ExperiencesPage() {
  const { t, lang } = useLang()

  return (
    <div className="page">
      <SectionTitle
        title={t('Expériences', 'Professional')}
        highlight={t('Professionnelles', 'Experience')}
        subtitle={t('Stages, projets freelance et expériences en entreprise', 'Internships, freelance projects and company experience')}
      />

      <div className="tl-wrap">
        {experiences.map((item, i) => (
          <div key={i} className="tl-item" style={{ position: 'relative', marginBottom: 36 }}>
            <div className="tl-dot" />

            <p style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--c)', marginBottom: 10 }}>
              {item.period}
            </p>

            <div className="glass-card glass-card-c" style={{ padding: 24 }}>
              <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 6, color: 'var(--tb)' }}>
                {t(item.titleFr, item.titleEn)}
              </h3>
              <p style={{ fontSize: '0.86rem', fontWeight: 600, marginBottom: 14, color: 'var(--v2)' }}>
                {item.company}
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
                {(lang === 'fr' ? item.bulletsFr : item.bulletsEn).map((b, j) => (
                  <li key={j} style={{ display: 'flex', gap: 10, fontSize: '0.88rem', color: 'var(--tm)', lineHeight: 1.7 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--c)', marginTop: 8, flexShrink: 0, display: 'block' }} />
                    {b}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {item.tags.map(tag => <TechTag key={tag} label={tag} />)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
