import { ReactNode } from 'react'
interface CardProps { children: ReactNode; className?: string; padding?: string; cyan?: boolean }
export default function Card({ children, className = '', padding = 'p-6', cyan = false }: CardProps) {
  return <div className={`glass-card ${cyan ? 'glass-card-c' : ''} ${padding} ${className}`}>{children}</div>
}
