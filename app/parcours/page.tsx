'use client'

import { useLang } from '@/context/LangContext'
import SectionTitle from '@/components/SectionTitle'
import TechTag from '@/components/TechTag'
import { education, training } from '@/lib/data'

export default function ParcoursPage() {
  const { t } = useLang()

  return (
    <div className="page">
      <SectionTitle
        title={t('Parcours', 'Academic')}
        highlight={t('Académique', 'Background')}
        subtitle={t("Mon chemin de formation, de 2019 à aujourd'hui", 'My education path, from 2019 to today')}
      />

      {/* Timeline */}
      <div className="tl-wrap">
        {education.map((item, i) => (
          <div key={i} className="tl-item" style={{ position: 'relative', marginBottom: 36 }}>
            <div className="tl-dot" />

            <p style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--v2)', marginBottom: 10 }}>
              {item.period}
            </p>

            <div className="glass-card" style={{ padding: 24 }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--bdg)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--bd)')}>
              <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 6, color: 'var(--tb)' }}>
                {t(item.titleFr, item.titleEn)}
              </h3>
              <p style={{ fontSize: '0.86rem', fontWeight: 600, marginBottom: 10, color: 'var(--c)' }}>
                {t(item.schoolFr, item.schoolEn)}
              </p>
              <p style={{ fontSize: '0.88rem', marginBottom: 14, color: 'var(--tm)', lineHeight: 1.7 }}>
                {t(item.descFr, item.descEn)}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {item.tags.map(tag => <TechTag key={tag} label={tag} />)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Extra training */}
      <SectionTitle
        className="mt-16"
        title={t('Formations', 'Additional')}
        highlight={t('Complémentaires', 'Training')}
        subtitle={t('Certifications et formations para-académiques', 'Certifications and extra-curricular training')}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
        {training.map((item, i) => (
          <div key={i} className="glass-card" style={{ padding: 22 }}>
            <h3 style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 8, color: 'var(--v2)' }}>
              {t(item.titleFr, item.titleEn)}
            </h3>
            <p style={{ fontSize: '0.86rem', color: 'var(--tm)', lineHeight: 1.6 }}>
              {t(item.institutionFr, item.institutionEn)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
