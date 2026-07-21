import { AnimatedSection } from './AnimatedSection';

const steps = [
  {
    num: '01',
    title: 'Purchase & Download',
    desc: 'Complete your purchase and get instant access. Right after payment, your order page shows the loader download and setup instructions — plus a video guide.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Adjust Windows Settings',
    desc: 'The cheat is external and requires turning off Core Isolation and exploit protection. Step-by-step guide provided — takes under 2 minutes.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M19.07 19.07l-1.41-1.41M5.34 5.34L3.93 3.93M21 12h-3M6 12H3M12 21v-3M12 6V3" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Load & Dominate',
    desc: 'Open the loader, launch Hunt Showdown, and press OK inside the game. ESP, aimbot, and triggerbot are active. Dominate every hunt.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <AnimatedSection>
      <section style={{
        position: 'relative',
        background: 'var(--bg-base)',
        padding: 'clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-right), 4vw) clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-left), 4vw)',
        overflow: 'hidden',
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '60%',
          background: 'radial-gradient(ellipse, rgba(168,85,247,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
            <span className="section-label" style={{ marginBottom: '16px', justifyContent: 'center', display: 'flex' }}>How It Works</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.1,
            }}>
              Get Undetected Hunt Showdown Cheats Running in Minutes
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(24px, 4vw, 40px)',
            position: 'relative',
          }}>
            {steps.map((step, i) => (
              <div key={i} style={{
                position: 'relative',
                padding: 'clamp(24px, 3vw, 32px)',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-ghost)',
                borderRadius: 'var(--radius-lg)',
              }}>
                {/* Step number decorative bg */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '4rem',
                  fontWeight: 900,
                  color: 'rgba(168,85,247,0.06)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}>{step.num}</div>

                {/* Icon circle */}
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  background: 'rgba(168,85,247,0.12)',
                  border: '1px solid rgba(168,85,247,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  marginBottom: '20px',
                }}>
                  {step.icon}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '12px',
                  letterSpacing: '0.01em',
                }}>{step.title}</h3>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                }}>{step.desc}</p>

                {/* Step indicator */}
                <div style={{
                  marginTop: '20px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}>
                  <span style={{ width: 12, height: 2, background: 'var(--accent)', borderRadius: 2 }} />
                  Step {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
