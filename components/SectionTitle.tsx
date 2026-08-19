interface Props { title: string; highlight?: string; subtitle?: string; className?: string }
export default function SectionTitle({ title, highlight, subtitle, className = '' }: Props) {
  return (
    <div style={{ marginBottom: 48 }} className={className}>
      <h2 className="s-title">
        {title}{highlight && <> <span className="aw">{highlight}</span></>}
      </h2>
      {subtitle && <p style={{ marginTop: 10, color: 'var(--tm)', fontSize: '0.9rem' }}>{subtitle}</p>}
    </div>
  )
}
