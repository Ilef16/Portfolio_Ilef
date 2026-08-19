'use client'

import { useLang } from '@/context/LangContext'
import SectionTitle from '@/components/SectionTitle'
import { associations } from '@/lib/data'

export default function VieAssociativePage() {
  const { t } = useLang()

  return (
    <div className="page">
      <SectionTitle
        title={t('Vie', 'Associative')}
        highlight={t('Associative', 'Life')}
        subtitle={t(
          'Engagements associatifs, bénévolat et activités extra-académiques',
          'Associative commitments, volunteering and extra-curricular activities'
        )}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
        {associations.map((item, i) => (
          <div
            key={i}
            className="glass-card"
            style={{ padding: 28 }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--bdg)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--bd)')}
          >
            {/* Icon + period row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: 'rgba(124,58,237,0.1)',
                border: '1px solid var(--bd)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.4rem',
              }}>
                {item.emoji ?? '🏅'}
              </div>
              <p style={{
                fontSize: '0.72rem', fontWeight: 800,
                textTransform: 'uppercase', letterSpacing: '1.5px',
                color: 'var(--v2)',
              }}>
                {item.period}
              </p>
            </div>

            {/* Name */}
            <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 4, color: 'var(--tb)' }}>
              {t(item.nameFr, item.nameEn)}
            </h3>

            {/* Role badge */}
            <span style={{
              display: 'inline-block',
              padding: '2px 12px', borderRadius: 20,
              border: '1px solid rgba(124,58,237,0.25)',
              background: 'rgba(124,58,237,0.07)',
              fontSize: '0.72rem', fontWeight: 700,
              color: 'var(--v2)', marginBottom: 14,
              textTransform: 'uppercase', letterSpacing: '0.8px',
            }}>
              {t(item.roleFr, item.roleEn)}
            </span>

            {/* Description */}
            {(item.descFr || item.descEn) && (
              <p style={{ fontSize: '0.88rem', color: 'var(--tm)', lineHeight: 1.7 }}>
                {t(item.descFr ?? '', item.descEn ?? '')}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
