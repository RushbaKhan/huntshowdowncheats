import { AnimatedSection } from './AnimatedSection';
import { BUY_URL, VIDEO_URL } from '../config/site';
import { useInViewOnce } from '../hooks/useInViewOnce';

function PixelAvatar({ seed, size = 52 }: { seed: number; size?: number }) {
  const palettes = [
    ['#e91e8c', '#ff6bbd', '#1a0010'],
    ['#00e5ff', '#0097a7', '#001a1f'],
    ['#76ff03', '#33691e', '#0d1a00'],
    ['#ff6d00', '#ffab40', '#1a0d00'],
    ['#7c4dff', '#b388ff', '#0d0020'],
    ['#f44336', '#ff8a80', '#1a0000'],
    ['#ffd600', '#fff176', '#1a1500'],
    ['#00bcd4', '#80deea', '#001a1f'],
    ['#ff4081', '#ff80ab', '#1a0010'],
    ['#64dd17', '#ccff90', '#0a1a00'],
  ];
  const [bg, fg, dark] = palettes[seed % palettes.length];
  const grid: boolean[][] = Array.from({ length: 8 }, (_, r) =>
    Array.from({ length: 8 }, (_, c) => {
      const mc = c < 4 ? c : 7 - c;
      return (((seed * 17 + r * 11 + mc * 5 + seed * r) ^ (r * mc + seed * 3 + 7)) % 19) > 8;
    })
  );
  const px = size / 10;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ borderRadius: '50%', flexShrink: 0 }}>
      <rect width={size} height={size} fill={dark} />
      {grid.map((row, r) =>
        row.map((on, c) =>
          on ? (
            <rect
              key={`${r}-${c}`}
              x={c * px + px}
              y={r * px + px}
              width={px}
              height={px}
              fill={r < 3 ? fg : bg}
            />
          ) : null
        )
      )}
    </svg>
  );
}

const reviews = [
  { name: 'Sway', quote: 'Support solved my Hunt Showdown loader issue quick and easy. Fast response times every time — never had a hard time getting things fixed.', date: 'July 15, 2026' },
  { name: 'Joey Scalia', quote: 'Answered fast. Most reliable for answers and info on Hunt Showdown cheat setup. Great experience overall.', date: 'July 14, 2026' },
  { name: 'Ash', quote: 'Had trouble with first launch so I opened a ticket. Support walked me through it and had it sorted in under five minutes. ESP and aimbot run great.', date: 'July 13, 2026' },
  { name: 'Adian Hipsz', quote: 'Fast to respond with solid solutions. They answered every question in detail and did not rush me off the line.', date: 'July 12, 2026' },
  { name: 'Tony WoW', quote: 'Patch dropped and something broke on my side — team pointed me to the right build and it was working again same day. Thanks.', date: 'July 11, 2026' },
  { name: 'taj taj', quote: 'Support and the dev updates are the real deal. Hunt Showdown cheat has been stable for me for weeks.', date: 'July 10, 2026' },
  { name: 'Alex Moreno', quote: 'Best support I have used for a game tool. They fixed my HWID question fast and explained what to do next time.', date: 'July 9, 2026' },
  { name: 'Fuzzy JD', quote: 'Very willing to help. Someone stayed with me for well over an hour until the overlay and setup were sorted. Really appreciated.', date: 'July 8, 2026' },
  { name: 'CQB_Gamer', quote: 'Very good support — they took their time and stayed until my Hunt Showdown issue was fully solved. Would use again.', date: 'July 7, 2026' },
];

function StarRating() {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[0, 1, 2, 3, 4].map(i => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  idx,
  visible = true,
  popDelay = 0,
  layout = 'ticker',
}: {
  review: (typeof reviews)[number];
  idx: number;
  visible?: boolean;
  popDelay?: number;
  layout?: 'ticker' | 'grid';
}) {
  const cardClass =
    layout === 'grid'
      ? visible
        ? 'review-card-pop'
        : 'review-card-hidden'
      : 'review-card-static';

  return (
    <div
      className={cardClass}
      style={{
        borderRadius: 'var(--radius-lg)',
        padding: 'clamp(18px, 2.5vw, 24px)',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-dim)',
        width: layout === 'grid' ? '100%' : '320px',
        flexShrink: 0,
        animationDelay: layout === 'grid' && visible ? `${popDelay}s` : undefined,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
        <PixelAvatar seed={idx + 1} size={44} />
        <div>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '4px' }}>{review.name}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <StarRating />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--accent)', fontWeight: 700 }}>5.0</span>
          </div>
        </div>
      </div>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.8125rem',
        color: 'rgba(220,220,240,0.85)',
        lineHeight: 1.65,
        marginBottom: '12px',
        fontStyle: 'italic',
      }}>"{review.quote}"</p>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>{review.date}</div>
    </div>
  );
}

function PopReviewCard({
  review,
  idx,
  popDelay = 0,
}: {
  review: (typeof reviews)[number];
  idx: number;
  popDelay?: number;
}) {
  const { ref, visible } = useInViewOnce(0.12);
  return (
    <div ref={ref} style={{ minWidth: 0 }}>
      <ReviewCard review={review} idx={idx} visible={visible} popDelay={popDelay} layout="grid" />
    </div>
  );
}

function ReviewTickerRow({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...reviews, ...reviews];
  return (
    <div
      className="review-ticker-row"
      style={{
        display: 'flex',
        gap: '16px',
        animation: reverse ? 'ticker-reverse 40s linear infinite' : 'ticker 40s linear infinite',
        width: 'max-content',
      }}
    >
      {doubled.map((review, i) => (
        <ReviewCard key={`${review.name}-${i}`} review={review} idx={i % reviews.length} layout="ticker" />
      ))}
    </div>
  );
}

function ReviewsIntro() {
  return (
    <div style={{ marginBottom: 'clamp(32px, 5vw, 48px)' }}>
      <span className="section-label" style={{ marginBottom: '16px', display: 'flex' }}>Happy Clients</span>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
        fontWeight: 800,
        color: 'var(--text-primary)',
        lineHeight: 1.1,
        marginBottom: '16px',
      }}>What Our Customers Say</h2>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
        color: 'var(--text-secondary)',
        lineHeight: 1.7,
        maxWidth: '500px',
        marginBottom: '32px',
      }}>Trusted by thousands of Hunt Showdown players worldwide. Real reviews from real hunters, unfiltered.</p>
      <div style={{ display: 'flex', gap: 'clamp(24px, 4vw, 48px)', flexWrap: 'wrap', marginBottom: '32px' }}>
        {[
          { value: '1000+', label: 'Happy clients' },
          { value: '50K+', label: 'Orders completed' },
          { value: '4.9', label: 'Average rating' },
        ].map(stat => (
          <div key={stat.label}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, color: 'var(--accent)' }}>{stat.value}</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{stat.label}</div>
          </div>
        ))}
      </div>
      <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Shop Now</a>
    </div>
  );
}

function LoopVideo({ label }: { label: string }) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-label={label}
      style={{
        width: '100%',
        height: 'auto',
        display: 'block',
      }}
    >
      <source src={VIDEO_URL} type="video/mp4" />
    </video>
  );
}

export function Testimonials() {
  const padX = {
    paddingLeft: 'max(16px, env(safe-area-inset-left), 4vw)',
    paddingRight: 'max(16px, env(safe-area-inset-right), 4vw)',
  } as const;

  return (
    <section style={{ background: 'var(--bg-base)', padding: 'clamp(60px, 8vw, 100px) 0', ...padX }}>
      <AnimatedSection>
        <ReviewsIntro />
      </AnimatedSection>

      <div style={{
        marginTop: '48px',
        marginBottom: '48px',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '1px solid var(--border-ghost)',
      }}>
        <LoopVideo label="Hunt Showdown cheats ESP aimbot gameplay demo" />
      </div>

      <div className="review-ticker-mask" style={{ position: 'relative', overflow: 'hidden', marginBottom: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <ReviewTickerRow />
          <ReviewTickerRow reverse />
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '16px',
        }}
      >
        {reviews.slice(0, 6).map((review, idx) => (
          <PopReviewCard key={review.name} review={review} idx={idx} popDelay={idx * 0.08} />
        ))}
      </div>
    </section>
  );
}
