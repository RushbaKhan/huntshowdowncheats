import { useEffect, useRef, useState } from 'react';
import { AnimatedSection } from './AnimatedSection';

interface Stat {
  prefix: string;
  value: number;
  suffix: string;
  decimals: number;
  label: string;
  sublabel?: string;
}

const STATS: Stat[] = [
  { prefix: '', value: 99, suffix: '.9%', decimals: 0, label: 'Undetection Rate', sublabel: 'Continuously tested' },
  { prefix: '', value: 24, suffix: '/7', decimals: 0, label: 'Support Available', sublabel: 'Discord response' },
  { prefix: '<', value: 1, suffix: ' min', decimals: 0, label: 'Setup Time', sublabel: 'With video guide' },
  { prefix: '', value: 4.9, suffix: '/5', decimals: 1, label: 'Customer Rating', sublabel: 'Verified buyers' },
];

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function CountUp({ value, suffix, prefix, decimals }: Stat) {
  const [display, setDisplay] = useState('0');
  const startRef = useRef<number | null>(null);
  const rafRef = useRef(0);
  const duration = 1600;

  useEffect(() => {
    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      const current = eased * value;
      setDisplay(decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toString());
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [value, decimals]);

  return <>{prefix}{display}{suffix}</>;
}

export function StatsRow() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatedSection>
      <section ref={ref} style={{
        background: 'var(--bg-base)',
        padding: 'clamp(32px, 5vw, 48px) max(16px, env(safe-area-inset-right), 4vw) clamp(32px, 5vw, 48px) max(16px, env(safe-area-inset-left), 4vw)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
            marginBottom: '24px',
            opacity: 0.3,
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'clamp(20px, 3vw, 40px)',
            alignItems: 'center',
          }} className="stats-row-grid">
            {STATS.map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}>
                  {visible ? <CountUp {...stat} /> : `0${stat.suffix}`}
                </div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: stat.sublabel ? '4px' : 0,
                }}>
                  {stat.label}
                </div>
                {stat.sublabel && (
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                  }}>
                    {stat.sublabel}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
