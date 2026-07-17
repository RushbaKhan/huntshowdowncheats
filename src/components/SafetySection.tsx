import { AnimatedSection } from './AnimatedSection';
import { ScreenshotSlider } from './ScreenshotSlider';
import { VIDEO_URL } from '../config/site';

export function SafetySection() {
  return (
    <AnimatedSection>
      <section style={{
        position: 'relative',
        background: 'var(--bg-deep)',
        padding: 'clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-right), 4vw) clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-left), 4vw)',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: 'clamp(300px, 40vw, 600px)',
          height: 'clamp(300px, 40vw, 600px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)',
          animation: 'orb-drift-2 22s ease-in-out infinite',
          pointerEvents: 'none',
        }} />

        <div className="safety-split-grid" style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}>
          <div>
            <span className="section-label" style={{ marginBottom: '16px', display: 'flex' }}>Always Undetected</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}>
              Built for Hunt Showdown.<br />
              <span className="gradient-text">Engineered to Stay Safe.</span>
            </h2>
            {[
              "Hunt Showdown cheats built specifically for Crytek's extraction shooter — steady updates, thorough documentation, and a loader that tracks the live game client. When Crytek ships a patch, the team works fast so you stay on the build that matches official servers.",
              'After every game update, download the latest loader from your order page — same place your files appeared right after checkout. That keeps your Hunt Showdown cheat aligned with the newest client version at all times.',
              'Need help with setup? Dedicated guides, video walkthroughs, and a support ticket system are always available. Get direct answers from people who actually maintain the Hunt Showdown ESP and aimbot product.',
            ].map((p, i) => (
              <p key={i} style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.875rem, 1.5vw, 0.9375rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '16px',
              }}>{p}</p>
            ))}
          </div>

          <div className="safety-videos-col" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              inset: '-20px',
              background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(168,85,247,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <div style={{
              width: '100%',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-ghost)',
              overflow: 'hidden',
              aspectRatio: '16/9',
              position: 'relative',
            }}>
              <ScreenshotSlider
                interval={3500}
                style={{ width: '100%', height: '100%' }}
              />
            </div>

            <div style={{
              width: '100%',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-ghost)',
              overflow: 'hidden',
              position: 'relative',
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
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
