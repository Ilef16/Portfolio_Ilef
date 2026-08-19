'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Lang } from '@/lib/data'

interface LangContextValue {
  lang: Lang
  toggleLang: () => void
  t: (fr: string, en: string) => string
}

const LangContext = createContext<LangContextValue>({
  lang: 'fr',
  toggleLang: () => {},
  t: (fr) => fr,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved === 'fr' || saved === 'en') setLang(saved)
  }, [])

  const toggleLang = () => {
    const next: Lang = lang === 'fr' ? 'en' : 'fr'
    setLang(next)
    localStorage.setItem('lang', next)
  }

  const t = (fr: string, en: string) => (lang === 'fr' ? fr : en)

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
