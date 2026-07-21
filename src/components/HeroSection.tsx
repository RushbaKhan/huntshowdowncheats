import { ScreenshotSlider } from './ScreenshotSlider';
import { BUY_URL, VIDEO_URL } from '../config/site';

export function HeroSection() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '100dvh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'var(--bg-void)',
    }}>
      <ScreenshotSlider
        interval={4000}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
        imgStyle={{
          position: 'absolute',
          height: '100%',
        }}
      />

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(105deg, rgba(6,4,9,0.95) 0%, rgba(6,4,9,0.75) 50%, rgba(6,4,9,0.5) 100%)',
        zIndex: 3,
      }} />

      <div className="grid-overlay" style={{
        position: 'absolute',
        inset: 0,
        zIndex: 4,
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-5%',
        width: 'clamp(300px, 50vw, 700px)',
        height: 'clamp(300px, 50vw, 700px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(124,58,237,0.08) 50%, transparent 70%)',
        animation: 'orb-drift 18s ease-in-out infinite',
        zIndex: 4,
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 5,
        width: '100%',
        maxWidth: 1280,
        margin: '0 auto',
        paddingLeft: 'max(16px, env(safe-area-inset-left), 4vw)',
        paddingRight: 'max(16px, env(safe-area-inset-right), 4vw)',
        paddingTop: 'clamp(100px, 15vw, 140px)',
        paddingBottom: 'clamp(60px, 10vw, 100px)',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          background: 'rgba(168,85,247,0.1)',
          border: '1px solid rgba(168,85,247,0.25)',
          borderRadius: '100px',
          marginBottom: 'clamp(20px, 3vw, 28px)',
        }}>
          <span style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: 'var(--accent)',
            animation: 'pulse-dot 2s ease-in-out infinite',
            flexShrink: 0,
          }} />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--accent-bright)',
            letterSpacing: '0.04em',
          }}>Undetected · Updated for latest Hunt Showdown patch</span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.8rem, 8vw, 6rem)',
          fontWeight: 900,
          lineHeight: 1.0,
          letterSpacing: '-0.01em',
          color: 'var(--text-primary)',
          marginBottom: 'clamp(10px, 2vw, 16px)',
          maxWidth: '700px',
        }}>
          Hunt Showdown Cheats.{' '}
          <span className="gradient-text">Dominate Every Hunt</span>
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
          color: 'var(--text-secondary)',
          lineHeight: 1.65,
          maxWidth: '520px',
          marginBottom: 'clamp(28px, 4vw, 40px)',
        }}>
          Undetected Hunt Showdown Cheats with Hunt Showdown Aimbot, Hunt Showdown ESP, Hunt Showdown Wallhack, Hunt Showdown Triggerbot, Hunt Showdown Radar and Hunt Showdown DMA support. See every hunter through walls, land silent aim shots, control recoil, and stay stream-proof. Updated after every Crytek patch.
        </p>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          background: 'rgba(168,85,247,0.08)',
          border: '1px solid rgba(168,85,247,0.2)',
          borderRadius: '100px',
          marginBottom: 'clamp(20px, 3vw, 28px)',
        }}>
          <div style={{ display: 'flex', gap: '2px' }}>
            {[0, 1, 2, 3, 4].map(i => (
              <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#fbbf24" stroke="none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            4.9/5 stars · Active
          </span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: 'clamp(24px, 3vw, 32px)' }}>
          <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Get Hunt Showdown Cheats
          </a>
          <a href="#esp" className="btn-ghost">
            See Features ↓
          </a>
        </div>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.02em',
          marginBottom: 'clamp(24px, 3vw, 32px)',
        }}>
          Windows 10 & 11 · Easy Anti-Cheat · Stream-Proof Mode · Cloud-DMA Option
        </p>

        <div style={{
          maxWidth: '520px',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          border: '1px solid var(--border-ghost)',
        }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Hunt Showdown cheats ESP aimbot demo video"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          >
            <source src={VIDEO_URL} type="video/mp4" />
          </video>
        </div>

        <div style={{
          position: 'absolute',
          bottom: 'clamp(20px, 4vw, 40px)',
          left: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          animation: 'bounce-y 2s ease-in-out infinite',
          opacity: 0.4,
        }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>scroll</span>
          <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
        </div>
      </div>
    </section>
  );
}
