import { useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { ScreenshotSlider } from '../components/ScreenshotSlider';
import { BUY_URL, VIDEO_URL } from '../config/site';

const espFeatures = [
  { label: '2D Box', desc: 'Clean boxes around enemy players so you can instantly identify threats through walls and cover.' },
  { label: 'Skeleton', desc: 'Displays full enemy bone structure for better tracking, pre-aim, and positioning.' },
  { label: 'Player Distance', desc: 'Shows exact range to each opponent so you know when to push, hold, or retreat.' },
  { label: 'Info Color', desc: 'Customize ESP colors to match your preference and maintain clear visibility in any environment.' },
  { label: 'Player & AI ESP Range', desc: 'Control how far players and AI appear, keeping your screen clean while maintaining awareness.' },
  { label: 'Player Alert', desc: 'Get notified when enemies enter your vicinity so you never get caught off guard.' },
];

const aimbotFeatures = [
  { label: 'Aimbot with Bone Selector', desc: 'head/chest/neck targeting' },
  { label: 'Triggerbot', desc: 'automatic firing on crosshair contact' },
  { label: 'Visibility Check', desc: 'only targets visible enemies' },
  { label: 'Aim Smooth', desc: 'natural-looking movement' },
  { label: 'FOV Circle with Draw FOV', desc: 'visualize aim radius' },
  { label: 'Custom Aim Key Binding', desc: 'any key you choose' },
  { label: 'Recoil Control', desc: 'stay on target during fire' },
  { label: 'No Spread', desc: 'perfect shot accuracy' },
];

const generalFeatures = [
  { label: 'Loot ESP', desc: 'highlights weapons, gear, objectives' },
  { label: 'Stream-Proof Mode', desc: 'hides overlay from capture software' },
  { label: 'Radar Enhancement', desc: 'enemy positions on mini-map overlay' },
  { label: 'Auto-updated loader', desc: 'instant updates after patches' },
  { label: '24/7 Discord support', desc: 'always online' },
];

const faqs: { q: string; a: string }[] = [
  {
    q: 'Can I use my Hunt Showdown cheat license on more than one PC?',
    a: 'Each license is tied to one hardware ID (HWID). If you need to transfer to a new PC, contact our support team and we will handle the transfer for you.',
  },
  {
    q: 'Is the Hunt Showdown aimbot difficult to set up?',
    a: 'Not at all. Setup is quick and straightforward. We provide a full instructions page and video guide. The entire process takes less than a minute.',
  },
  {
    q: 'Will the Hunt Showdown ESP affect FPS or performance?',
    a: 'No. Our cheat is external and runs as a separate process, meaning it has minimal impact on game performance. Most users report no noticeable FPS difference.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major payment methods including credit/debit cards, crypto, and other options available at checkout.',
  },
  {
    q: 'The cheat stopped working after a Hunt Showdown game update. What do I do?',
    a: 'After any Hunt Showdown patch, download the newest loader from your order page. Updates usually land within hours of the game build changing.',
  },
  {
    q: 'How do I purchase Hunt Showdown cheats?',
    a: 'Click the purchase button, complete checkout, and receive your loader link and setup instructions immediately.',
  },
  {
    q: 'Is the Hunt Showdown aimbot undetected?',
    a: 'Yes. Our Hunt Showdown cheat is external and has remained undetected. We update after every patch to maintain safety.',
  },
  {
    q: 'Does the ESP work through walls in Hunt Showdown?',
    a: 'Yes. The ESP shows enemy players, loot, and items through all walls and structures. You can adjust the range and what information is displayed.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      borderBottom: '1px solid var(--border-ghost)',
    }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 0',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '16px',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9375rem',
          fontWeight: 600,
          color: 'var(--text-primary)',
          lineHeight: 1.4,
        }}>{q}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          style={{ flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
      {open && (
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          paddingBottom: '20px',
        }}>{a}</p>
      )}
    </div>
  );
}

export function StorePage() {
  return (
    <>
      {/* Page header */}
      <section style={{
        background: 'var(--bg-void)',
        padding: 'clamp(100px, 15vw, 140px) max(16px, 4vw) clamp(40px, 6vw, 60px)',
        textAlign: 'center',
      }}>
        <span className="section-label" style={{ marginBottom: '16px', justifyContent: 'center', display: 'flex' }}>Hunt Showdown Cheats</span>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 6vw, 4rem)',
          fontWeight: 900,
          color: 'var(--text-primary)',
          lineHeight: 1.0,
          marginBottom: '16px',
        }}>
          Hunt Showdown Aimbot, ESP &{' '}
          <span className="gradient-text">Triggerbot</span>
        </h1>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          color: 'var(--text-secondary)',
          marginBottom: '24px',
          maxWidth: '600px',
          margin: '0 auto 24px',
        }}>
          The ultimate Hunt Showdown cheat. Undetected aimbot, full ESP, triggerbot, flyhack, radar, stream-proof mode. Updated after every patch.
        </p>

        {/* Status badges */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['Undetected', 'Stream-Proof Mode', 'Windows 10 & 11'].map(badge => (
            <span key={badge} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 12px',
              background: 'rgba(168,85,247,0.1)',
              border: '1px solid rgba(168,85,247,0.2)',
              borderRadius: '100px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--accent-bright)',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
              {badge}
            </span>
          ))}
        </div>
      </section>

      {/* Video showcase 1 */}
      <section style={{
        background: 'var(--bg-base)',
        padding: 'clamp(40px, 6vw, 80px) max(16px, 4vw)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '16px',
            textAlign: 'center',
          }}>See Hunt Showdown Aimbot & ESP in Action</h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
            textAlign: 'center',
            marginBottom: '32px',
            maxWidth: '600px',
            margin: '0 auto 32px',
          }}>Watch our Hunt Showdown cheat featuring aimbot, ESP, triggerbot, and wallhack in real gameplay.</p>
          <div style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid var(--border-ghost)',
            aspectRatio: '16/9',
            position: 'relative',
          }}>
            <ScreenshotSlider
              interval={3500}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </section>

      {/* Product section */}
      <AnimatedSection>
        <section style={{
          padding: 'clamp(40px, 6vw, 80px) max(16px, 4vw)',
          background: 'var(--bg-deep)',
        }}>
          <div style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'start',
          }}>
            {/* Left — feature checklist */}
            <div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '8px',
              }}>Hunt Showdown Cheats — Everything Included</h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                marginBottom: '24px',
              }}>One subscription covers every Hunt Showdown cheat feature — aimbot, ESP, triggerbot, flyhack, radar. No upsells, no tiers.</p>

              {/* Player ESP Features */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <span style={{ width: 16, height: 2, background: 'var(--accent)', borderRadius: 2 }} />
                  Player ESP Features
                </div>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {espFeatures.map(item => (
                    <li key={item.label} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>
                        <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{item.label}</strong>
                        <span style={{ color: 'var(--text-secondary)', display: 'block', fontSize: '0.8125rem', lineHeight: 1.5, marginTop: '2px' }}>{item.desc}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Aimbot Features */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <span style={{ width: 16, height: 2, background: 'var(--accent)', borderRadius: 2 }} />
                  Aimbot Features
                </div>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {aimbotFeatures.map(item => (
                    <li key={item.label} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>
                        <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{item.label}</strong>
                        {item.desc ? <span style={{ color: 'var(--text-muted)' }}> — {item.desc}</span> : null}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* General */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <span style={{ width: 16, height: 2, background: 'var(--accent)', borderRadius: 2 }} />
                  General
                </div>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {generalFeatures.map(item => (
                    <li key={item.label} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>
                        <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{item.label}</strong>
                        {item.desc ? <span style={{ color: 'var(--text-muted)' }}> — {item.desc}</span> : null}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* System requirements */}
              <div style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-ghost)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
              }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px' }}>Hunt Showdown Cheat Requirements</div>
                {[
                  ['Game', 'Hunt: Showdown (Steam)'],
                  ['OS', 'Windows 10 (all builds) · Windows 11 up to 25H2'],
                  ['Requirements', 'Windows 10 & 11 · Easy Anti-Cheat · External'],
                  ['Type', 'External — minimal performance impact'],
                ].map(([label, val]) => (
                  <div key={label} style={{ display: 'flex', gap: '12px', paddingBottom: '10px', borderBottom: '1px solid var(--border-ghost)', marginBottom: '10px', fontFamily: 'var(--font-body)', fontSize: '0.8125rem' }}>
                    <span style={{ color: 'var(--text-muted)', minWidth: '80px', flexShrink: 0 }}>{label}</span>
                    <span style={{ color: 'var(--text-secondary)' }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Pricing card */}
            <div style={{
              position: 'relative',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-dim)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(28px, 4vw, 40px)',
              overflow: 'hidden',
            }}>
              {/* Top gradient shine */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
              }} />

              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>Hunt Showdown Cheats Subscription</div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '8px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 4.5rem)', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1 }}>$40</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-muted)' }}>/month</span>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>Aimbot, ESP, Wallhack included. Cancel anytime. Instant access.</p>

              {/* Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>4.9/5 · Hunt Showdown players</span>
              </div>

              {/* CTA */}
              <a
                href={BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%', textAlign: 'center', marginBottom: '12px' }}
              >
                Get Hunt Showdown Cheats
              </a>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '24px' }}>No hidden fees · Instant loader delivery · Cancel anytime</p>

              {/* Safety notice */}
              <div style={{
                background: 'rgba(168,85,247,0.06)',
                border: '1px solid var(--border-ghost)',
                borderRadius: 'var(--radius-md)',
                padding: '14px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
              }}>
                Keep your Hunt Showdown cheat updated after every patch. Use HWID Spoofer to protect against hardware bans. Play smart to avoid manual reports.
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Video showcase 2 */}
      <section style={{
        background: 'var(--bg-base)',
        padding: 'clamp(40px, 6vw, 80px) max(16px, 4vw)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '16px',
            textAlign: 'center',
          }}>Hunt Showdown ESP & Wallhack Demo</h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
            textAlign: 'center',
            marginBottom: '32px',
            maxWidth: '600px',
            margin: '0 auto 32px',
          }}>Full ESP visibility through walls. See players, loot, and objectives before they see you.</p>
          <div style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid var(--border-ghost)',
          }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            >
              <source src={VIDEO_URL} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <AnimatedSection>
        <section style={{
          background: 'var(--bg-deep)',
          padding: 'clamp(60px, 8vw, 100px) max(16px, 4vw)',
        }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '16px',
            }}>Hunt Showdown Cheats FAQ</h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              marginBottom: '40px',
            }}>Common questions about our Hunt Showdown aimbot, ESP, triggerbot, and wallhack.</p>
            <div>
              {faqs.map(faq => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
