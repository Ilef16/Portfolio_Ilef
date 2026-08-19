'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/context/LangContext'

export default function HomePage() {
  const { t } = useLang()

  return (
    <div style={{ background: 'var(--bg)', position: 'relative' }}>

      {/* ANIMATED BG */}
      <div className="bg-scene">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* HERO */}
      <section className="hero-section">
        {/* 3D shapes */}
        <div className="shape cube"    style={{ top: '10%', right: '5%'  }} />
        <div className="shape ring3d"  style={{ bottom: '15%', right: '10%' }} />
        <div className="shape tri3d"   style={{ top: '22%', left: '3%'  }} />
        <div className="shape dot-matrix" style={{ top: '5%', right: '1%', width: 200, height: 200 }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', gap: 80, flexWrap: 'wrap', position: 'relative', zIndex: 10 }}>

          {/* PHOTO */}
          <div className="photo-wrap">
            <div className="photo-halo" />
            <div className="orbit-r2"><div className="orbit-d2" /></div>
            <div className="orbit-r1"><div className="orbit-d1" /></div>
            <div className="photo-img">
              <Image src="/1736346872650.jpg" alt="Ilef Ben Ayed" fill className="object-cover object-top" priority />
            </div>
            <div className="photo-badge">Software Engineer</div>
          </div>

          {/* TEXT */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <div className="status-badge"><div className="status-dot" />{t('Disponible pour opportunités','Open to opportunities')}</div>

            <h1 className="grad-name" style={{ fontSize: 'clamp(3rem,7vw,5.5rem)', marginBottom: 20 }}>
              Ilef Ben Ayed
            </h1>

            <p style={{ fontSize: '1.15rem', marginBottom: 20, lineHeight: 1.6 }}>
              <span style={{ color: 'var(--tm)' }}>{t('Ingénieure en ','Engineer in ')}</span>
              <strong style={{ color: 'var(--v2)' }}>{t('Génie Logiciel','Software Engineering')}</strong>
              <span style={{ color: 'var(--tm)' }}> & </span>
              <strong style={{ color: 'var(--c)' }}>{t('Informatique Décisionnelle','Business Intelligence')}</strong>
            </p>

            <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--tm)', maxWidth: 520, marginBottom: 28 }}>
              {t(
                "Motivée et ambitieuse, je conçois des solutions logicielles robustes et des systèmes d'analyse décisionnelle. À la recherche d'une opportunité professionnelle pour mettre mes compétences au service d'une équipe innovante.",
                "Motivated and ambitious, I design robust software solutions and business intelligence systems. Looking for a professional opportunity to put my skills at the service of an innovative team.",
              )}
            </p>

            {/* Info chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
              {[
                { label: 'Sfax, Tunisie', color: 'var(--tm)', border: 'var(--bd)' },
                { label: '+216 21 958 304', color: 'var(--tm)', border: 'var(--bd)' },
              ].map(c => (
                <span key={c.label} style={{ padding: '6px 14px', borderRadius: 30, border: `1px solid ${c.border}`, color: c.color, background: 'rgba(124,58,237,0.04)', fontSize: '0.78rem', fontWeight: 600 }}>
                  {c.label}
                </span>
              ))}
              <a href="mailto:ilefbenayed08@gmail.com" style={{ padding: '6px 14px', borderRadius: 30, border: '1px solid var(--bd2)', color: 'var(--c)', background: 'rgba(6,182,212,0.04)', fontSize: '0.78rem', fontWeight: 600 }}>
                ilefbenayed08@gmail.com
              </a>
              <a href="https://linkedin.com/in/ilef-ben-ayed" target="_blank" rel="noreferrer" style={{ padding: '6px 14px', borderRadius: 30, border: '1px solid var(--bd)', color: 'var(--v2)', background: 'rgba(168,85,247,0.04)', fontSize: '0.78rem', fontWeight: 600 }}>
                LinkedIn
              </a>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-p">{t('Me contacter','Contact me')}</Link>
              <Link href="/projets" className="btn-s">{t('Voir mes projets','View projects')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ position: 'relative', zIndex: 1, padding: '6rem 2rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <h2 className="s-title">{t('À Propos de ','About ')}<span className="aw">{t('Moi','Me')}</span></h2>
            <p style={{ marginTop: 12, color: 'var(--tm)', fontSize: '0.9rem' }}>
              {t('Un aperçu rapide de mon profil et de mes compétences clés','A quick overview of my profile and key skills')}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>

            {/* Formation */}
            <div className="glass-card" style={{ padding: 28 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: 'linear-gradient(135deg,rgba(124,58,237,0.28),rgba(124,58,237,0.08))', border: '1px solid rgba(124,58,237,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: '#a855f7' }}>{t('Formation','Education')}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  t('Ingénieur Génie Informatique\nIIT Sfax — 2025','Computer Engineering\nIIT Sfax — 2025'),
                  t('Licence Business Intelligence\nISAAS — 2022','BSc Business Intelligence\nISAAS — 2022'),
                  t('Baccalauréat Sciences Exp.\nLMM Sfax — 2019','High School (Sciences)\nLMM Sfax — 2019'),
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#a855f7', marginTop: 7, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.88rem', color: 'var(--tm)', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise */}
            <div className="glass-card glass-card-c" style={{ padding: 28 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: 'linear-gradient(135deg,rgba(6,182,212,0.28),rgba(6,182,212,0.08))', border: '1px solid rgba(6,182,212,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </div>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: '#06b6d4' }}>Expertise</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  t('Full-Stack\nNext.js · Spring Boot · React · Node.js','Full-Stack\nNext.js · Spring Boot · React · Node.js'),
                  t('Intelligence Artificielle\nTensorFlow · PyTorch · NLP','Artificial Intelligence\nTensorFlow · PyTorch · NLP'),
                  t('DevOps & Qualité\nDocker · Git · Jest · Selenium','DevOps & Quality\nDocker · Git · Jest · Selenium'),
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#06b6d4', marginTop: 7, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.88rem', color: 'var(--tm)', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="glass-card" style={{ padding: 28 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: 'linear-gradient(135deg,rgba(236,72,153,0.28),rgba(236,72,153,0.08))', border: '1px solid rgba(236,72,153,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: '#ec4899' }}>{t('Langues','Languages')}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { f: 'AR', fr: 'Arabe',    en: 'Arabic',  lf: 'Natif',   le: 'Native', p: 90 },
                  { f: '🇫🇷', fr: 'Français', en: 'French',  lf: 'Courant', le: 'Fluent', p: 90  },
                  { f: '🇬🇧', fr: 'Anglais',  en: 'English', lf: 'Courant', le: 'Fluent', p: 85  },
                ].map(l => (
                  <div key={l.f}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: 6 }}>
                      <span style={{ color: 'var(--tx)' }}>{l.f} {t(l.fr, l.en)}</span>
                      <span style={{ color: '#ec4899', fontWeight: 600 }}>{t(l.lf, l.le)}</span>
                    </div>
                    <div className="lbar"><div className="lbar-f" style={{ width: `${l.p}%`, background: 'linear-gradient(90deg,#ec4899,#a855f7)' }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        
        </div>
      </section>
    </div>
  )
}
