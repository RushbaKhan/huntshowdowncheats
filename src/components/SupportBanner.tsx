import { Link } from 'react-router-dom';
import { AnimatedSection } from './AnimatedSection';
import { BUY_URL } from '../config/site';

function SparkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M12 2l1.2 4.2L17 7l-3.8 1.8L12 13l-1.2-4.2L7 7l3.8-1.8L12 2z" fill="var(--accent-bright)" opacity="0.95" />
      <path d="M18 14l.7 2.4L21 17l-2.3 1.1L18 20.5l-.7-2.4L15 17l2.3-1.1L18 14z" fill="var(--accent)" opacity="0.75" />
    </svg>
  );
}

export function SupportBanner() {
  return (
    <AnimatedSection>
      <section
        id="support"
        aria-labelledby="support-heading"
        style={{
          background: 'var(--bg-deep)',
          padding: 'clamp(40px, 5vw, 64px) max(16px, env(safe-area-inset-right), 4vw) clamp(72px, 9vw, 120px) max(16px, env(safe-area-inset-left), 4vw)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="support-banner-card">
            <div className="support-banner-glow support-banner-glow--tl" aria-hidden="true" />
            <div className="support-banner-glow support-banner-glow--br" aria-hidden="true" />

            <div style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'clamp(24px, 4vw, 40px)',
              padding: 'clamp(28px, 4vw, 40px) clamp(24px, 4vw, 48px)',
            }}>
              <div style={{ flex: '1 1 320px', minWidth: 0 }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 14,
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)',
                }}>
                  <SparkIcon />
                  Ready to dominate in Hunt Showdown?
                </div>

                <h2
                  id="support-heading"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    marginBottom: 12,
                    lineHeight: 1.15,
                    maxWidth: 640,
                  }}
                >
                  Hunt Showdown Aimbot, ESP & Triggerbot — Start Winning Today
                </h2>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  maxWidth: 560,
                  marginBottom: 16,
                }}>
                  Get instant access to Hunt Showdown cheats. Undetected aimbot, ESP, triggerbot, radar, wallhack — all in one package. Updated every patch.
                </p>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.65,
                }}>
                  View full feature list on our <Link to="/buy" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Hunt Showdown Cheats pricing page</Link> or read our <Link to="/blog" style={{ color: 'var(--accent)', textDecoration: 'none' }}>ESP, aimbot and DMA guides</Link>.
                </p>
              </div>

              <div style={{ flexShrink: 0 }}>
                <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Get Hunt Showdown Cheats Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
