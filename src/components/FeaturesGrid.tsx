import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { ScreenshotSlider } from './ScreenshotSlider';
import { VIDEO_URL } from '../config/site';

const espFeatures = [
  { name: '2D Box ESP', desc: 'Clean boxes around enemy players so you can instantly identify threats through walls and cover.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>) },
  { name: 'Skeleton', desc: 'Displays full enemy bone structure for better tracking, pre-aim, and positioning.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="5" r="2"/><line x1="12" y1="7" x2="12" y2="14"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="12" y1="14" x2="8" y2="20"/><line x1="12" y1="14" x2="16" y2="20"/></svg>) },
  { name: 'Player Distance', desc: 'Shows exact range to each opponent so you know when to push, hold, or retreat.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="2" y1="12" x2="22" y2="12"/><polyline points="8 6 2 12 8 18"/><polyline points="16 6 22 12 16 18"/></svg>) },
  { name: 'Info Color', desc: 'Customize ESP colors to match your preference and maintain clear visibility in any environment.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>) },
  { name: 'Player & AI ESP Range', desc: 'Control how far players and AI appear, keeping your screen clean while maintaining awareness.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>) },
  { name: 'Player Alert', desc: 'Get notified when enemies enter your vicinity so you never get caught off guard.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>) },
];

const lootFeatures = [
  { label: 'Show Loot', desc: 'Highlights nearby weapons, supplies, and valuables through walls so you always know what\'s worth grabbing.' },
  { label: 'Show Clues & Bosses', desc: 'Mark clue locations and boss targets for faster bounty extraction.' },
  { label: 'Show Supply Points', desc: 'Identify supply points and interactive objects instantly without risky checking.' },
  { label: 'Loot ESP Range', desc: 'Limits how far loot appears, letting you focus on what matters most in your immediate area.' },
];

const aimbotFeatures = [
  { name: 'Custom Aim Key', desc: 'Bind aimbot activation to any key you choose for seamless control during fights.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>) },
  { name: 'Visibility Check', desc: 'Targets only enemies you can actually see, keeping your gameplay natural and avoiding suspicious locks through walls.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>) },
  { name: 'Custom Bone Selector', desc: 'Pick your target bone (head, chest, neck) so you can adjust accuracy based on the situation.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="5" r="2"/><line x1="12" y1="7" x2="12" y2="14"/></svg>) },
  { name: 'Aim Smooth', desc: 'Adjust aimbot smoothness for more natural aiming movement that doesn\'t trigger suspicion.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"/></svg>) },
  { name: 'FOV Circle Size', desc: 'Control the aimbot\'s field-of-view radius so it only engages targets within your desired range.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/></svg>) },
  { name: 'Simple Recoil Control', desc: 'Stabilizes weapon recoil while firing, keeping your shots on target during sustained engagements.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>) },
];

interface FeatureCardProps {
  name: string;
  desc: string;
  icon: React.ReactNode;
  accentColor?: string;
}

function FeatureCard({ name, desc, icon, accentColor = 'var(--accent)' }: FeatureCardProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="glass-card feature-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 'var(--radius-lg)',
        padding: 'clamp(20px, 2.5vw, 28px)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        borderColor: hovered ? 'var(--border-bright)' : 'var(--border-ghost)',
      }}
    >
      <div style={{
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-md)',
        background: `rgba(168,85,247,0.12)`,
        border: `1px solid rgba(168,85,247,0.2)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: accentColor,
        marginBottom: '14px',
        transition: 'background 0.2s',
      }}>
        {icon}
      </div>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.05rem',
        fontWeight: 700,
        color: 'var(--text-primary)',
        marginBottom: '8px',
        letterSpacing: '0.01em',
      }}>{name}</h3>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.8125rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.6,
      }}>{desc}</p>
    </div>
  );
}

function BulletItem({ label, desc }: { label: string; desc: string }) {
  return (
    <li style={{
      display: 'flex',
      gap: '8px',
      paddingBottom: '10px',
      borderBottom: '1px solid var(--border-ghost)',
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      color: 'var(--text-secondary)',
      lineHeight: 1.5,
      listStyle: 'none',
    }}>
      <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}>•</span>
      <span>
        <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{label}</strong>
        {' – '}
        {desc}
      </span>
    </li>
  );
}

export function FeaturesGrid() {
  return (
    <>
      {/* ── ESP Section ─────────────────────────────────────────────────── */}
      <section id="esp" style={{
        background: 'var(--bg-base)',
        padding: 'clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-right), 4vw) clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-left), 4vw)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ marginBottom: 'clamp(32px, 5vw, 56px)' }}>
              <span className="section-label" style={{ marginBottom: '16px', display: 'flex' }}>Visual ESP</span>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.1,
                marginBottom: '20px',
                maxWidth: '700px',
              }}>
                Hunt Showdown ESP Features{' '}
                <span className="gradient-text">Total Awareness</span>
                {' '}in Every Fight
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '680px',
              }}>
                Hunt Showdown ESP gives you full control over what you see and how you see it. See enemies, loot, and objectives through walls and structures in real time.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="features-split-grid" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(40px, 6vw, 80px)',
              marginBottom: 'clamp(40px, 6vw, 64px)',
            }}>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '20px',
                }}>Player ESP Features</h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                }}>
                  Full visual control over every enemy in Hunt Showdown. See threats through walls, track their bones, measure distance, and stay notified — all customizable to keep your screen clean.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {espFeatures.map(f => (
                    <li key={f.name} style={{ display: 'flex', gap: '10px', fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '1px' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      </span>
                      <span>
                        <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{f.name}</strong>
                        {' – '}
                        {f.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
              }}>
                {espFeatures.map(f => <FeatureCard key={f.name} {...f} />)}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="features-split-grid" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginBottom: 'clamp(40px, 6vw, 64px)',
              alignItems: 'stretch',
            }}>
              <div style={{
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-ghost)',
                overflow: 'hidden',
                minHeight: '220px',
              }}>
                <ScreenshotSlider interval={3500} style={{ width: '100%', height: '100%', minHeight: '220px' }} />
              </div>
              <div style={{
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-ghost)',
                overflow: 'hidden',
              }}>
                <video autoPlay loop muted playsInline preload="metadata" aria-label="Hunt Showdown cheats aimbot ESP video" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '220px' }}>
                  <source src={VIDEO_URL} type="video/mp4" />
                </video>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '20px',
              }}>
                Hunt Showdown Wallhack, Triggerbot, Radar & DMA
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}>
                Beyond aimbot, our undetected Hunt Showdown cheats package includes Hunt Showdown Triggerbot for instant firing, Hunt Showdown Radar for map-wide enemy tracking, Hunt Showdown Wallhack for full structural visibility, and Hunt Showdown DMA support via Cloud-DMA for hardware-level safety.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '8px', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
                <BulletItem label="Hunt Showdown Triggerbot" desc="fires the instant your crosshair touches an enemy hitbox — configurable delay for natural reaction time." />
                <BulletItem label="Hunt Showdown Radar" desc="mini-map overlay showing hunter positions, bosses, and extraction points in real time." />
                <BulletItem label="Hunt Showdown Wallhack" desc="renders enemies through every wall, door, and terrain feature with adjustable opacity." />
                <BulletItem label="Hunt Showdown DMA" desc="Cloud-DMA option for hardware-level memory reading — the safest profile for long-term use." />
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '20px',
              }}>Loot & World ESP Features – <span className="gradient-text">Never Miss High-Value Gear</span></h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}>Hunt Showdown is about extracting with the bounty. Why waste time searching empty buildings?</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '8px' }}>
                {lootFeatures.map(f => <BulletItem key={f.label} label={f.label} desc={f.desc} />)}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Aimbot Section ───────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--bg-deep)',
        padding: 'clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-right), 4vw) clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-left), 4vw)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ marginBottom: 'clamp(32px, 5vw, 56px)' }}>
              <span className="section-label" style={{ marginBottom: '16px', display: 'flex' }}>Aimbot</span>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.1,
                marginBottom: '20px',
                maxWidth: '700px',
              }}>
                Hunt Showdown Aimbot Features{' '}
                <span className="gradient-text">Aim to Win</span>
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '680px',
              }}>
                The Hunt Showdown Aimbot is built to feel smooth and natural. Set your own aim key, choose which bone to target, and adjust smoothness so it plays legit. Triggerbot and silent aim included.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
            }}>
              {aimbotFeatures.map(f => (
                <FeatureCard key={f.name} name={f.name} desc={f.desc} icon={f.icon} accentColor="var(--accent-bright)" />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
