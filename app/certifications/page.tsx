'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLang } from '@/context/LangContext'
import SectionTitle from '@/components/SectionTitle'
import { certifications } from '@/lib/data'

export default function CertificationsPage() {
  const { t, lang } = useLang()
  const [selected, setSelected] = useState<null | typeof certifications[0]>(null)

  return (
    <div className="page">
      <SectionTitle
        title={t('Certifications', 'Certifications')}
        subtitle={t('Cliquez sur une image pour voir les détails', 'Click an image to view details')}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
        {certifications.map((c, i) => (
          <div
            key={i}
            className="glass-card"
            style={{ padding: 0, overflow: 'hidden', cursor: c.image ? 'pointer' : 'default' }}
            onClick={() => c.image && setSelected(c)}
            onMouseEnter={e => { if (c.image) (e.currentTarget as HTMLElement).style.borderColor = 'var(--bdg)' }}
            onMouseLeave={e => { if (c.image) (e.currentTarget as HTMLElement).style.borderColor = 'var(--bd)' }}
          >
            {c.image ? (
              <div style={{ position: 'relative', width: '100%', height: 160, background: '#fff', overflow: 'hidden' }}>
                <Image src={c.image} alt={t(c.titleFr, c.titleEn)} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,121,121,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.25s' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
              </div>
            ) : (
              <div style={{ width: '100%', height: 160, background: 'rgba(0,121,121,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--v2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
            )}
            <div style={{ padding: '14px 16px' }}>
              <div style={{ fontWeight: 700, fontSize: '0.88rem', lineHeight: 1.4, marginBottom: 4, color: 'var(--tb)' }}>{t(c.titleFr, c.titleEn)}</div>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--v2)' }}>{c.issuer}</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--tm)', marginTop: 2 }}>{c.year}</div>
              {(c.skillsFr || c.skillsEn) && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 10 }}>
                  {(lang === 'fr' ? c.skillsFr : c.skillsEn)?.slice(0, 3).map(s => (
                    <span key={s} style={{ padding: '2px 8px', borderRadius: 20, border: '1px solid rgba(36,177,177,0.2)', background: 'rgba(36,177,177,0.06)', fontSize: '0.65rem', fontWeight: 600, color: 'var(--v3)' }}>{s}</span>
                  ))}
                  {((lang === 'fr' ? c.skillsFr : c.skillsEn)?.length ?? 0) > 3 && (
                    <span style={{ padding: '2px 8px', borderRadius: 20, border: '1px solid rgba(36,177,177,0.2)', background: 'rgba(36,177,177,0.06)', fontSize: '0.65rem', fontWeight: 600, color: 'var(--tm)' }}>
                      +{((lang === 'fr' ? c.skillsFr : c.skillsEn)?.length ?? 0) - 3}
                    </span>
                  )}
                </div>
              )}
              {c.image && (
                <div style={{ marginTop: 8, fontSize: '0.68rem', color: 'var(--v2)', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  {t('Voir le certificat', 'View certificate')}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal lightbox */}
      {selected && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.88)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, backdropFilter: 'blur(6px)' }}
          onClick={() => setSelected(null)}
        >
          <div
            style={{ background: 'var(--bg2)', border: '1px solid var(--bdg)', borderRadius: 16, maxWidth: 820, width: '100%', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.7)' }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ padding: '18px 24px', borderBottom: '1px solid var(--bd)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--tb)' }}>{t(selected.titleFr, selected.titleEn)}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--v2)', marginTop: 2 }}>{selected.issuer} · {selected.year}</div>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--tm)', padding: 6, borderRadius: 8 }} aria-label="Fermer">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            <div style={{ position: 'relative', width: '100%', height: 'clamp(300px, 55vw, 520px)', background: '#fff' }}>
              <Image src={selected.image!} alt={t(selected.titleFr, selected.titleEn)} fill style={{ objectFit: 'contain' }} priority />
            </div>
            {(selected.skillsFr || selected.skillsEn) && (
              <div style={{ padding: '16px 24px', borderTop: '1px solid var(--bd)' }}>
                <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--tm)', marginBottom: 10 }}>
                  {t('Compétences acquises', 'Skills gained')}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {(lang === 'fr' ? selected.skillsFr : selected.skillsEn)?.map(s => (
                    <span key={s} style={{ padding: '4px 12px', borderRadius: 20, border: '1px solid rgba(36,177,177,0.28)', background: 'rgba(36,177,177,0.08)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--v2)' }}>{s}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
