'use client';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BUY_URL, LOGO_URL } from '../config/site';

const MOBILE_MQ = '(max-width: 920px)';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Blogs', to: '/blog' },
];

export function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(MOBILE_MQ).matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ);
    const onChange = () => {
      setIsMobile(mq.matches);
      if (!mq.matches) setMenuOpen(false);
    };
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navPad = {
    paddingLeft: 'max(16px, env(safe-area-inset-left))',
    paddingRight: 'max(16px, env(safe-area-inset-right))',
    paddingTop: 'max(10px, env(safe-area-inset-top))',
    paddingBottom: '10px',
  } as const;

  const linkStyle = (isActive: boolean) => ({
    fontFamily: 'var(--font-body)',
    fontSize: '0.875rem',
    fontWeight: isActive ? 600 : 500,
    color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    letterSpacing: '0.01em',
    position: 'relative' as const,
  });

  return (
    <>
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          background: 'rgba(6,4,9,0.96)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          padding: 'max(60px, env(safe-area-inset-top)) max(20px, env(safe-area-inset-right)) 40px max(20px, env(safe-area-inset-left))',
          gap: '12px',
          overflowY: 'auto',
        }}>
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                textDecoration: 'none',
                padding: '16px 18px',
                borderRadius: 'var(--radius-md)',
                background: location.pathname === to || (to !== '/' && location.pathname.startsWith(to))
                  ? 'rgba(168,85,247,0.12)'
                  : 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border-ghost)',
              }}
            >
              {label}
            </Link>
          ))}
          <a
            href={BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.125rem',
              fontWeight: 600,
              color: '#fff',
              textDecoration: 'none',
              padding: '16px 18px',
              borderRadius: 'var(--radius-md)',
              background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
              border: 'none',
              textAlign: 'center',
            }}
          >
            Get Cheats
          </a>
        </div>
      )}

      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(6,4,9,0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border-ghost)',
        ...navPad,
      }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <img
              src={LOGO_URL}
              alt="Hunt Showdown Cheats logo"
              width={32}
              height={32}
              loading="eager"
              decoding="async"
              style={{ width: 32, height: 32, objectFit: 'contain', flexShrink: 0 }}
            />
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              color: 'rgba(240,236,255,0.35)',
              textTransform: 'uppercase',
            }}>HUNT: SHOWDOWN</span>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: '1.1rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 60%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginLeft: '2px',
            }}>CHEATS</span>
          </Link>

          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
              {NAV_LINKS.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  style={linkStyle(location.pathname === to || (to !== '/' && location.pathname.startsWith(to)))}
                  onMouseEnter={e => { if (location.pathname !== to) (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)'; }}
                  onMouseLeave={e => { if (location.pathname !== to) (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {!isMobile && (
              <a
                href={BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '8px 18px',
                  background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: '#fff',
                  textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
              >
                Get Cheats
              </a>
            )}

            {isMobile && (
              <button
                onClick={() => setMenuOpen(v => !v)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--border-ghost)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '8px',
                  cursor: 'pointer',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 300,
                  position: 'relative',
                }}
              >
                {menuOpen ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
