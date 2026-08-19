import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import { LangProvider }  from '@/context/LangContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ilef Ben Ayed — Portfolio',
  description: 'Ingénieure en Génie Logiciel & Informatique Décisionnelle',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
        <ThemeProvider>
          <LangProvider>
            {/* Global ambient background orbs for inner pages */}
            <div className="bg-scene">
              <div className="orb orb-1" />
              <div className="orb orb-2" />
              <div className="orb orb-3" />
            </div>
            <Header />
            <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>{children}</main>
            <Footer />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
