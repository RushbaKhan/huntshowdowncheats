import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';

import { BUY_URL } from '../config/site';

export const BLOG_POSTS = [
  {
    slug: 'huntshowdown-esp-guide',
    title: 'Hunt Showdown ESP Guide: See Every Enemy Through Walls',
    category: 'ESP',
    date: 'June 20, 2026',
    readTime: '6 min read',
    image: '/huntshowdown-cheats-esp-screenshot-1.png',
    excerpt: 'A deep-dive into how ESP (Extra Sensory Perception) works in Hunt Showdown, what features matter most, and how to configure wallhack visibility settings for maximum raid success.',
    body: `
## What Does Hunt Showdown ESP Actually Show?
A well-built ESP overlay renders data directly onto your screen in real time, tied to the game's internal entity list. In Hunt Showdown, that means:
- **2D Box ESP**: A bounding rectangle around every enemy, visible through any surface.
- **Skeleton Lines**: Full bone-structure rendering — head, shoulders, spine, hips, knees.
- **Distance Tags**: Exact metre count to every visible entity.
- **Loot Highlights**: Weapons, high-tier armour, and valuables all glow through walls.
- **Player Alerts**: An on-screen notification fires the moment any enemy enters your configured detection radius.
## Configuring ESP Range Sliders
Hunt Showdown cheats with quality builds let you separate player ESP range from loot ESP range. For solos in early raid, you want loot range maxed (200m+) and player range moderate (150m) to avoid HUD clutter.
## Why External ESP Is Safer
An external cheat reads game memory from a separate process rather than injecting code into the Hunt Showdown executable. Because nothing is injected, signature-based detection and module scanning find nothing to flag.
## Tips for First-Time Users
1. Start with box ESP only — learn to read positions before adding skeleton and distance.
2. Set a subtle colour palette rather than bright red, which strains eyes on long sessions.
3. Use range sliders to cap at 120m initially.
4. Enable loot ESP last, once you are comfortable with player tracking.
`,
  },
  {
    slug: 'huntshowdown-aimbot-setup',
    title: 'Hunt Showdown Aimbot Setup: Bone Selector, FOV & Smoothing',
    category: 'Aimbot',
    date: 'June 18, 2026',
    readTime: '8 min read',
    image: '/huntshowdown-cheats-esp-screenshot-2.png',
    excerpt: 'Configure a Hunt Showdown aimbot that looks human — choosing the right bone target, smoothing curves, FOV radius, and visibility checks to stay under the radar while dominating.',
    body: `
## Bone Selection: Head vs Chest vs Neck
**Head**: Maximum damage per shot, kills faster. Risk: head hitboxes are small and move more erratically.
**Chest/Upper Chest**: Larger hitbox, more forgiving. Consistent damage but requires more shots.
**Neck**: Sweet spot. Close to the head damage multiplier but with a slightly larger and more stable hitbox.
## FOV Radius
The FOV circle defines how far from your crosshair the aimbot will reach to acquire a target. A tiny FOV (10-15 degrees) only assists when enemies are nearly on your crosshair already.
**Recommended**: Start at 25-35 degrees for general use.
## Smoothing: The Most Important Setting
Smoothing controls how fast the aimbot moves from your current crosshair position to the target. A smoothing value of 1 is instant snap. Values of 8-15 produce a curved, human-looking glide.
**Start at 10-12** and only reduce it if you are missing mobile targets at close range.
## Visibility Check
Always enable the visibility check. This ensures the aimbot only locks targets that have line-of-sight to you.
`,
  },
  {
    slug: 'huntshowdown-triggerbot-guide',
    title: 'Hunt Showdown Triggerbot: Automatic Firing Made Simple',
    category: 'Aimbot',
    date: 'June 15, 2026',
    readTime: '5 min read',
    image: '/huntshowdown-cheats-esp-screenshot-1.png',
    excerpt: 'How triggerbot works in Hunt Showdown, configuration tips to make it look natural, and why it pairs perfectly with ESP for dominant gameplay.',
    body: `
## What Is a Triggerbot?
A triggerbot automatically fires your weapon the moment your crosshair moves over an enemy hitbox. In Hunt Showdown, this is especially effective with precision weapons like sniper rifles and hand cannons.
## Configuration Tips
**Delay setting**: Add 10-30ms delay before firing. This mimics natural human reaction time and avoids obvious insta-fire patterns.
**Target filter**: Set to fire only on enemy players, not AI enemies, to reduce unnecessary spray.
**Activation key**: Bind to a hold key rather than always-on. This gives you full control over when triggerbot engages.
## Pairing with ESP
Triggerbot combined with ESP is one of the strongest combos in Hunt Showdown. You see enemies through walls, you position your crosshair, and triggerbot fires the instant it touches. Clean, fast, and hard to detect.
`,
  },
  {
    slug: 'huntshowdown-radar-guide',
    title: 'Hunt Showdown Radar: Real-Time Enemy Tracking Explained',
    category: 'Guide',
    date: 'July 11, 2026',
    readTime: '6 min read',
    image: '/huntshowdown-cheats-esp-screenshot-2.png',
    excerpt: 'Everything you need to know about radar and movement speed in Hunt Showdown cheats — real-time enemy tracking, map overview, and safe configuration.',
    body: `
## What Is Hunt Showdown Radar?
Radar gives you a complete overview of the map, showing positions of hunters, bosses, and objectives in real time. Combined with movement speed adjustments, you can traverse the bayou faster than any rival team.
## Movement Speed Boost
The movement speed feature multiplies your base movement speed. Start at 1.2x to 1.5x for subtle advantage. Going too high too quickly creates obvious visual patterns.
## Safe Usage Guidelines
1. Use radar to track teams before engaging — never push blind into a compound.
2. Keep speed boost moderate in PvP to avoid reports.
3. Pair radar with ESP for full situational awareness through walls and on the mini-map overlay.
## Why Players Use It
Radar is primarily used to locate enemy hunters, track boss bounties, and plan extraction routes. Combined with ESP, you see threats before they see you and control every hunt.
`,
  },
  {
    slug: 'huntshowdown-wallhack-guide',
    title: 'Hunt Showdown Wallhack: See Through Every Structure',
    category: 'ESP',
    date: 'June 12, 2026',
    readTime: '5 min read',
    image: '/huntshowdown-cheats-esp-screenshot-2.png',
    excerpt: 'Hunt Showdown wallhack lets you spot enemies through any obstacle. Here is how to configure it effectively and use it without drawing attention.',
    body: `
## How Wallhack Works in Hunt Showdown
Wallhack renders enemy models visible through solid geometry by bypassing the game's standard occlusion culling. You see enemy positions, movement, and actions even when they are completely hidden behind walls, doors, or terrain.
## Configuration for Best Results
Use opacity controls to make wallhack renders semi-transparent at 40-60% opacity. This lets you see enemies without being distracted from what is in front of you. Set a render range of 100-150m to keep the overlay useful without cluttering your screen.
## Combining Wallhack with Aimbot
When wallhack is paired with aimbot and visibility check enabled, the aimbot will only engage when an enemy is in line of sight. The wallhack gives you pre-aim information so you know exactly where to position your crosshair before the enemy appears.
`,
  },
  {
    slug: 'best-huntshowdown-cheats-2026',
    title: 'Best Hunt Showdown Cheats 2026: Top Features Ranked',
    category: 'Comparison',
    date: 'June 10, 2026',
    readTime: '9 min read',
    image: '/huntshowdown-cheats-esp-screenshot-1.png',
    excerpt: 'A comprehensive 2026 ranking of every major Hunt Showdown cheat feature — aimbot, ESP, triggerbot, radar, wallhack — scored on performance, safety, and value.',
    body: `
## The Features That Matter Most
In Hunt Showdown, the features that separate good cheats from great ones come down to reliability and safety. Here is our 2026 ranking:
## Feature Rankings
**1. ESP (Extra Sensory Perception)**: The most valuable feature. See enemies, loot, and objectives through any surface. Combined with distance tags you always know where threats are.
**2. Aimbot with Smoothing**: Precision aiming assistance with human-like movement. Bone selector, FOV control, and smoothing make it undetectable to other players.
**3. Triggerbot**: Automatic firing on crosshair contact. Perfect for precision weapons and burst engagements.
**4. Radar Enhancement**: Map awareness tool that shows enemy positions on a mini-map overlay.
**5. Recoil Control**: Stabilizes weapon recoil for all weapons, keeping shots on target during sustained fire.
**6. No Spread**: Perfect shot accuracy every time.
**7. Radar / Movement Speed**: Map traversal and real-time enemy tracking.
**8. Stream-Proof Mode**: Hides the overlay from capture software for safe streaming.
## Final Verdict
The best Hunt Showdown cheats in 2026 combine ESP, aimbot, and triggerbot with stream-proof mode and active maintenance. A tool that gets updated within hours of a patch is worth far more than a feature-heavy product that goes dark after each game update.
`,
  },
  {
    slug: 'huntshowdown-anticheat-analysis',
    title: 'Hunt Showdown Anti-Cheat Deep Dive: How It Works',
    category: 'Anti-Cheat',
    date: 'June 8, 2026',
    readTime: '9 min read',
    image: '/huntshowdown-cheats-esp-screenshot-1.png',
    excerpt: 'A technical breakdown of Hunt Showdown anti-cheat architecture — kernel drivers, memory scanning, behavioural detection, and where external cheats fall outside its detection range.',
    body: `
## Crytek's Anti-Cheat Layer
Crytek uses an anti-cheat system integrated into the Hunt Showdown client. It operates as a kernel-level driver, performing:
- **Memory scanning**: Looks for known cheat signatures in active processes
- **Module enumeration**: Detects injected DLLs or unsigned code in the game process
- **Behavioural analysis**: Flags statistical anomalies
## Behavioural Analysis
This is where Crytek's most sophisticated detection lives. Server-side, Hunt Showdown tracks player statistics across every session including headshot percentage, time-to-kill averages, and reaction time distributions.
**Counter**: Humanise your aimbot settings. A 30 degree FOV, smoothing of 12, and neck bone targeting produces accuracy stats that look like a highly skilled player.
## What External Cheats Avoid
External cheats operate in a space that anti-cheat does not own — they read memory from outside the game process, bypassing signature scanning, module injection detection, DLL enumeration, and file integrity checks entirely.
`,
  },
  {
    slug: 'undetected-huntshowdown-cheats',
    title: 'Undetected Hunt Showdown Cheats: What Undetected Actually Means',
    category: 'Safety',
    date: 'June 5, 2026',
    readTime: '7 min read',
    image: '/huntshowdown-cheats-esp-screenshot-2.png',
    excerpt: 'The word undetected gets used constantly in the Hunt Showdown cheat market. Here is what it actually means, how to evaluate it, and what to look for before you buy.',
    body: `
## What Undetected Really Means
The word undetected usually means the tool is currently operating without known detection issues, not that it is guaranteed forever. That distinction matters.
Any software in this space depends on ongoing maintenance. Game updates, anti-cheat changes, and user behaviour all affect outcomes. A provider that treats undetected status as a living process is more trustworthy than one that markets it like a permanent promise.
## What to Look For
1. **Update speed after patches**: How fast does the provider push updates after Crytek patches Hunt Showdown? Hours matter, not days.
2. **Track record**: Has the provider survived multiple ban waves without mass detections?
3. **External vs injected**: External cheats that read memory without injection have a fundamentally safer profile than injected tools.
4. **Behaviour settings**: Even undetected software gets you banned if your stats are obviously inhuman. Smoothing, FOV limits, and human-like settings are essential.
## The Bottom Line
Undetected is a process, not a promise. Choose providers who communicate status clearly and push updates fast after every Crytek patch.
`,
  },
  {
    slug: 'huntshowdown-cheats-smart-buying',
    title: 'How to Buy Hunt Showdown Cheats Without Wasting Money',
    category: 'Guide',
    date: 'June 3, 2026',
    readTime: '8 min read',
    image: '/huntshowdown-cheats-esp-screenshot-1.png',
    excerpt: 'Most players searching for huntshowdown cheats are not looking for gimmicks. They want software that works, stays stable, and does not waste money or time. Here is how to buy smart.',
    body: `
## What Matters Most with Hunt Showdown Cheats
Hunt Showdown is not a simple offline shooter where any tool will do. It is a live service game with regular updates, active moderation, and a player base that notices suspicious behaviour quickly.
The first priority is reliability. If software loads inconsistently, crashes often, or breaks after small game changes, it becomes more trouble than it is worth. Good tools are built for repeat use, not one flashy session. Stability matters just as much as raw feature count.
The second priority is safety. No provider can honestly claim zero risk forever, because anti-cheat systems change and game security evolves. What experienced users actually want is software with a strong track record, careful update handling, and clear status communication.
The third priority is support. If setup instructions are vague or help takes hours when something fails, the product loses value fast. Instant delivery helps, but responsive support is what keeps a service usable over time.
## The Features Players Usually Care About
Not every buyer wants the same setup. Some users are looking for visual tools that improve awareness, while others want aiming assistance. ESP and radar-style features are often popular because they offer information control without forcing aggressive play.
Aimbot features can be attractive, but they also require much more care in configuration. Settings that are too sharp, too fast, or too consistent tend to create problems.
## The Real Trade-Offs
There is always a trade-off between aggression and caution. Stronger settings may create a bigger gameplay advantage, but they can also increase visibility to other players and draw more attention. Lower-key configurations often reduce obvious patterns, even if they feel less dramatic in the moment.
## How to Judge a Provider Before You Buy
A serious marketplace should be clear about product status, delivery, and support coverage. If everything sounds vague, overhyped, or too perfect, that is usually a bad sign. Buyers should look for straightforward product details, realistic claims, and a visible support structure.
Good sellers understand that users care about more than the download itself. They want secure checkout, clear instructions, and help if something changes after purchase.
## Choosing Without Wasting Money
If the goal is to buy smarter, focus on three things: product stability, update discipline, and support response. Those are the basics that separate premium service from throwaway software. In this category, consistency beats hype every time.
`,
  },
  {
    slug: 'huntshowdown-recoil-control',
    title: 'Hunt Showdown Recoil Control: No Spread & Weapon Stability Guide',
    category: 'Guide',
    date: 'June 1, 2026',
    readTime: '5 min read',
    image: '/huntshowdown-cheats-esp-screenshot-2.png',
    excerpt: 'Recoil control and no spread features in Hunt Showdown cheats explained — how they work, which weapons benefit most, and configuration for safe long-term use.',
    body: `
## What Is Recoil Control?
Recoil control stabilizes weapon recoil while firing, keeping your shots on target during sustained engagements. In Hunt Showdown, weapons like auto rifles and machine guns have significant vertical recoil that recoil control eliminates completely.
## No Spread Feature
No spread removes bullet spread from all weapons, making every shot land exactly where your crosshair is aimed. This is especially powerful with shotguns and SMGs at close range.
## Safe Configuration
For recoil control, use a moderate compensation value (60-80%) rather than 100%. Full compensation creates an unnaturally flat recoil pattern that experienced players and anti-cheat systems may flag.
No spread should be used selectively — enable it for engagements where precision matters and disable it during casual play.
## Which Weapons Benefit Most
1. Auto rifles — Recoil control makes them laser-accurate
2. Machine guns — Sustained fire stays perfectly on target
3. Shotguns — No spread turns every pellet into a precision hit
4. SMGs — Massive accuracy improvement in close range
`,
  },
  {
    slug: 'huntshowdown-stream-proof-mode',
    title: 'Hunt Showdown Stream-Proof Mode: Safe Gameplay While Streaming',
    category: 'Safety',
    date: 'May 28, 2026',
    readTime: '4 min read',
    image: '/huntshowdown-cheats-esp-screenshot-1.png',
    excerpt: 'How stream-proof mode works in Hunt Showdown cheat software, why it matters, and how to verify it is working correctly before you go live.',
    body: `
## What Is Stream-Proof Mode?
Stream-proof mode hides the cheat overlay from screen capture software including OBS, Streamlabs, Discord video, and recording tools. Your viewers see clean gameplay while you see the full ESP and overlay in your actual game window.
## How It Works
Stream-proof mode uses a technique called exclusive display rendering, where the overlay is drawn directly to your monitor's display buffer but is excluded from the Windows Desktop Duplication API that screen capture software uses.
## How to Verify It Is Working
1. Enable stream-proof mode in the cheat menu.
2. Open OBS and add a Game Capture source for Hunt Showdown.
3. Start a preview in OBS.
4. The cheat overlay should be invisible in the OBS preview while visible on your monitor.
## Important Notes
Stream-proof mode only hides the overlay from capture software. It does not affect other anti-cheat detection methods. Always combine stream-proof mode with conservative settings for the safest streaming experience.
`,
  },
];

const CATEGORIES = ['All', 'ESP', 'Aimbot', 'Guide', 'Anti-Cheat', 'Safety', 'Comparison'];

function BlogCard({ post }: { post: typeof BLOG_POSTS[0] }) {
  return (
    <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <article className="glass-card feature-card" style={{
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        height: '100%',
      }}>
        <div style={{ overflow: 'hidden', aspectRatio: '16/9' }}>
          <img
            src={post.image}
            alt={post.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.4s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </div>
        <div style={{ padding: 'clamp(16px, 2.5vw, 24px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6875rem',
              fontWeight: 700,
              color: 'var(--accent)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '3px 8px',
              background: 'rgba(168,85,247,0.12)',
              borderRadius: 'var(--radius-sm)',
            }}>{post.category}</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{post.date}</span>
            <span style={{ color: 'var(--border-dim)', fontSize: '0.5rem' }}>●</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{post.readTime}</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            lineHeight: 1.25,
            marginBottom: '10px',
          }}>{post.title}</h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '16px',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>{post.excerpt}</p>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            fontWeight: 600,
            color: 'var(--accent)',
          }}>Read Article →</span>
        </div>
      </article>
    </Link>
  );
}

export function BlogListPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  return (
    <main>
      {/* Hero header */}
      <section style={{
        position: 'relative',
        background: 'var(--bg-void)',
        padding: 'clamp(100px, 15vw, 140px) max(16px, 4vw) clamp(40px, 6vw, 60px)',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: 'clamp(200px, 30vw, 400px)',
          height: 'clamp(200px, 30vw, 400px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
          animation: 'orb-drift 20s ease-in-out infinite',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <span className="section-label" style={{ marginBottom: '16px', display: 'flex' }}>Knowledge Base</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 6vw, 4rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            lineHeight: 1.0,
            marginBottom: '16px',
          }}>
            Hunt Showdown{' '}
            <span className="gradient-text">Cheats Blog</span>
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            maxWidth: '560px',
            lineHeight: 1.65,
          }}>
            Guides, technical breakdowns, and insider knowledge for Hunt Showdown ESP, aimbot, triggerbot, radar, and staying undetected.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <div style={{
        background: 'var(--bg-deep)',
        borderBottom: '1px solid var(--border-ghost)',
        padding: '16px max(16px, 4vw)',
        position: 'sticky',
        top: 44,
        zIndex: 50,
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '2px' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '6px 14px',
                borderRadius: '100px',
                border: `1px solid ${activeCategory === cat ? 'rgba(168,85,247,0.4)' : 'var(--border-ghost)'}`,
                background: activeCategory === cat ? 'rgba(168,85,247,0.15)' : 'transparent',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: activeCategory === cat ? 700 : 500,
                color: activeCategory === cat ? 'var(--accent-bright)' : 'var(--text-muted)',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <section style={{
        background: 'var(--bg-base)',
        padding: 'clamp(40px, 6vw, 64px) max(16px, 4vw)',
        minHeight: '60vh',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {filtered.length === 0 ? (
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', textAlign: 'center' }}>No posts in this category yet.</p>
          ) : (
            <AnimatedSection>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 'clamp(16px, 2.5vw, 24px)',
              }}>
                {filtered.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </main>
  );
}

function renderBody(body: string) {
  const lines = body.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) { i++; continue; }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
          fontWeight: 800,
          color: 'var(--text-primary)',
          marginBottom: '16px',
          marginTop: '32px',
          lineHeight: 1.2,
        }}>{line.replace('## ', '')}</h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '12px',
          marginTop: '24px',
        }}>{line.replace('### ', '')}</h3>
      );
    } else if (line.startsWith('- **')) {
      const match = line.match(/^- \*\*(.+?)\*\*:(.*)/);
      if (match) {
        elements.push(
          <li key={i} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            marginBottom: '8px',
            paddingLeft: '16px',
          }}>
            <strong style={{ color: 'var(--text-primary)' }}>{match[1]}</strong>:{match[2]}
          </li>
        );
      }
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={i} style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.65,
          marginBottom: '8px',
          paddingLeft: '16px',
        }}>{line.replace(/^- /, '')}</li>
      );
    } else if (/^\d+\./.test(line)) {
      elements.push(
        <li key={i} style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.65,
          marginBottom: '8px',
          paddingLeft: '16px',
        }}>{line.replace(/^\d+\.\s/, '')}</li>
      );
    } else {
      const parts = line.split(/(\*\*.+?\*\*)/g);
      elements.push(
        <p key={i} style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9375rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.75,
          marginBottom: '16px',
        }}>
          {parts.map((part, pi) =>
            part.startsWith('**') ? (
              <strong key={pi} style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{part.replace(/\*\*/g, '')}</strong>
            ) : part
          )}
        </p>
      );
    }

    i++;
  }

  return elements;
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div style={{ padding: '100px max(16px, 4vw)', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', marginBottom: '24px' }}>Post not found.</p>
        <Link to="/blog" className="btn-ghost">← Back to Blog</Link>
      </div>
    );
  }

  const related = BLOG_POSTS.filter(p => p.slug !== slug && p.category === post.category).slice(0, 2);

  return (
    <main>
      {/* Hero image */}
      <div style={{
        width: '100%',
        height: 'clamp(200px, 35vw, 420px)',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <img
          src={post.image}
          alt={post.title}
          width={1920}
          height={1080}
          loading="eager"
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 40%, var(--bg-void) 100%)',
        }} />
      </div>

      <section style={{
        background: 'var(--bg-void)',
        padding: '0 max(16px, 4vw) clamp(60px, 8vw, 100px)',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          {/* Category badge */}
          <span style={{
            display: 'inline-block',
            padding: '4px 10px',
            background: 'rgba(168,85,247,0.12)',
            border: '1px solid rgba(168,85,247,0.2)',
            borderRadius: 'var(--radius-sm)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.6875rem',
            fontWeight: 700,
            color: 'var(--accent)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '20px',
            marginTop: '-12px',
            position: 'relative',
          }}>{post.category}</span>

          {/* Back */}
          <div style={{ marginBottom: '12px' }}>
            <Link
              to="/blog"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              ← Back to Blog
            </Link>
          </div>

          {/* Meta */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{post.date}</span>
            <span style={{ color: 'var(--border-dim)', fontSize: '0.5rem' }}>●</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            marginBottom: '20px',
          }}>{post.title}</h1>

          {/* Excerpt */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            borderLeft: '3px solid var(--accent)',
            paddingLeft: '16px',
            marginBottom: '40px',
          }}>{post.excerpt}</p>

          {/* Body */}
          <div>
            {renderBody(post.body)}
          </div>

          {/* CTA */}
          <div style={{
            marginTop: '48px',
            padding: '32px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-dim)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '8px',
            }}>Get Hunt Showdown Cheats</h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              marginBottom: '20px',
            }}>Hunt Showdown aimbot, ESP, triggerbot, radar, wallhack. Undetected & updated every patch.</p>
            <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Get Hunt Showdown Cheats
            </a>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div style={{ marginTop: '48px' }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '20px',
              }}>Related Articles</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
                {related.map(p => <BlogCard key={p.slug} post={p} />)}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
