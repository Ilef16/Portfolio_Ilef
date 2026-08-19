'use client'

import { useState } from 'react'
import { useLang } from '@/context/LangContext'
import SectionTitle from '@/components/SectionTitle'

const contactInfo = [
  {
    labelFr: 'Localisation', labelEn: 'Location',
    value: 'Sfax, Tunisie', href: undefined as string | undefined,
    icon: <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>,
    color: '#a855f7', bg: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.2)',
  },
  {
    labelFr: 'Téléphone', labelEn: 'Phone',
    value: '+216 21 958 304', href: 'tel:+21621958304',
    icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.19 12 19.79 19.79 0 0 1 1.08 3.18 2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>,
    color: '#06b6d4', bg: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.2)',
  },
  {
    labelFr: 'Email', labelEn: 'Email',
    value: 'ilefbenayed08@gmail.com', href: 'mailto:ilefbenayed08@gmail.com',
    icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
    color: '#a855f7', bg: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.2)',
  },
  {
    labelFr: 'LinkedIn', labelEn: 'LinkedIn',
    value: 'linkedin.com/in/ilef-ben-ayed', href: 'https://linkedin.com/in/ilef-ben-ayed',
    icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
    color: '#06b6d4', bg: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.2)',
  },
  {
    labelFr: 'GitHub', labelEn: 'GitHub',
    value: 'github.com/Ilef16', href: 'https://github.com/Ilef16',
    icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>,
    color: '#a855f7', bg: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.2)',
  },
]

export default function ContactPage() {
  const { t } = useLang()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="page">
      <SectionTitle
        title={t('Me', 'Contact')}
        highlight={t('Contacter', 'Me')}
        subtitle={t('Disponible pour toute opportunité professionnelle ou collaboration', 'Available for any professional opportunity or collaboration')}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 32, alignItems: 'start' }}>

        {/* Info cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {contactInfo.map((item, i) => (
            <div key={i} className="glass-card" style={{ padding: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: item.bg, border: `1px solid ${item.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {item.icon}
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: item.color, marginBottom: 2 }}>
                  {t(item.labelFr, item.labelEn)}
                </div>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer" style={{ fontSize: '0.88rem', color: 'var(--tx)', transition: 'color 0.2s' }}
                     onMouseEnter={e => (e.currentTarget.style.color = item.color)}
                     onMouseLeave={e => (e.currentTarget.style.color = 'var(--tx)')}>
                    {item.value}
                  </a>
                ) : (
                  <span style={{ fontSize: '0.88rem', color: 'var(--tx)' }}>{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="glass-card" style={{ padding: 32 }}>
          {sent && (
            <div style={{ marginBottom: 20, padding: '12px 16px', borderRadius: 8, fontSize: '0.88rem', fontWeight: 600, textAlign: 'center', background: 'rgba(6,182,212,0.08)', color: 'var(--c)', border: '1px solid rgba(6,182,212,0.28)' }}>
              {t('Message envoyé avec succès !', 'Message sent successfully!')}
            </div>
          )}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {[
              { key: 'name',    labelFr: 'Nom complet',   labelEn: 'Full Name',     type: 'text',  req: true  },
              { key: 'email',   labelFr: 'Adresse Email', labelEn: 'Email Address', type: 'email', req: true  },
              { key: 'subject', labelFr: 'Sujet',         labelEn: 'Subject',       type: 'text',  req: false },
            ].map(f => (
              <div key={f.key}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--v2)', marginBottom: 8 }}>
                  {t(f.labelFr, f.labelEn)}
                </label>
                <input type={f.type} required={f.req}
                  value={form[f.key as keyof typeof form]}
                  onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                  className="inp" />
              </div>
            ))}

            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--v2)', marginBottom: 8 }}>
                Message
              </label>
              <textarea required rows={5}
                value={form.message}
                onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                className="inp"
                style={{ resize: 'vertical' }} />
            </div>

            <button type="submit" className="btn-p" style={{ width: '100%', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              {t('Envoyer le message', 'Send message')}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
