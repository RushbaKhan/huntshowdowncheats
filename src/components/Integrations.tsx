const items = [
  { label: 'Windows 10', icon: '⊞' },
  { label: 'Windows 11', icon: '⊞' },
  { label: 'Steam', icon: '◈' },
  { label: 'Easy Anti-Cheat', icon: '◉' },
  { label: 'External Cheat', icon: '◎' },
  { label: 'Cloud-DMA', icon: '◈' },
  { label: '24/7 Support', icon: '◎' },
  { label: 'Instant Access', icon: '◉' },
  { label: 'Video Guide', icon: '▶' },
  { label: 'Discord Community', icon: '◈' },
  { label: 'Auto Updates', icon: '↺' },
  { label: 'Stream-Proof', icon: '◎' },
];

function TickerRow({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div style={{
      display: 'flex',
      gap: '24px',
      animation: reverse ? 'ticker-reverse 32s linear infinite' : 'ticker 32s linear infinite',
      width: 'max-content',
    }}>
      {doubled.map((item, i) => (
        <div key={i} className="glass-card" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 20px',
          borderRadius: 'var(--radius-md)',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}>
          <span style={{ color: 'var(--accent)', fontSize: '1rem' }}>{item.icon}</span>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            fontWeight: 600,
            color: 'var(--text-secondary)',
          }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export function Integrations() {
  return (
    <section style={{
      background: 'var(--bg-deep)',
      padding: 'clamp(48px, 7vw, 80px) 0',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', paddingLeft: 'max(16px, 4vw)', paddingRight: 'max(16px, 4vw)', marginBottom: 'clamp(32px, 5vw, 48px)', textAlign: 'center' }}>
        <span className="section-label" style={{ marginBottom: '16px', justifyContent: 'center', display: 'flex' }}>System Compatibility</span>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          fontWeight: 800,
          color: 'var(--text-primary)',
          lineHeight: 1.1,
        }}>
          Hunt Showdown DMA & System Compatibility
        </h2>
      </div>

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: '120px',
          background: 'linear-gradient(90deg, var(--bg-deep), transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          width: '120px',
          background: 'linear-gradient(270deg, var(--bg-deep), transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />
        <TickerRow />
        <TickerRow reverse />
      </div>
    </section>
  );
}
