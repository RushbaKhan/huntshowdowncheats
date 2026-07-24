import { useState, useEffect } from 'react';
import { SCREENSHOTS, VIDEO_URL } from '../config/site';

interface ScreenshotSliderProps {
  interval?: number;
  style?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
  priority?: 'high' | 'low';
}

const VIDEO_FRAME_TIMES = [2.5, 7.5];

function VideoFrameSlide({
  active,
  prev,
  index,
  imgStyle,
}: {
  active: boolean;
  prev: boolean;
  index: number;
  imgStyle?: React.CSSProperties;
}) {
  const [loaded, setLoaded] = useState(active || prev);

  useEffect(() => {
    if (active || prev) setLoaded(true);
  }, [active, prev]);

  if (!loaded) return null;

  return (
    <video
      src={VIDEO_URL}
      muted
      playsInline
      preload="none"
      aria-label={`Hunt Showdown cheats ESP aimbot screenshot ${index + 1}`}
      style={{
        position: index === 0 ? 'relative' : 'absolute',
        inset: 0,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'opacity 0.9s ease',
        opacity: active ? 1 : 0,
        zIndex: active ? 2 : prev ? 1 : 0,
        display: 'block',
        pointerEvents: 'none',
        ...imgStyle,
      }}
    />
  );
}

export function ScreenshotSlider({
  interval = 3500,
  style,
  imgStyle,
  priority = 'low',
}: ScreenshotSliderProps) {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [useVideoFrames, setUseVideoFrames] = useState(false);
  const slideCount = useVideoFrames ? VIDEO_FRAME_TIMES.length : SCREENSHOTS.length;
  const isHighPriority = priority === 'high';

  useEffect(() => {
    const id = setInterval(() => {
      setActive(cur => {
        setPrev(cur);
        return (cur + 1) % slideCount;
      });
    }, interval);
    return () => clearInterval(id);
  }, [interval, slideCount]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', ...style }}>
      {useVideoFrames
        ? VIDEO_FRAME_TIMES.map((time, i) => {
            const isActive = i === active;
            const isPrev = i === prev;
            if (!isActive && !isPrev) return null;
            return (
              <VideoFrameSlide
                key={`frame-${time}`}
                index={i}
                active={isActive}
                prev={isPrev}
                imgStyle={imgStyle}
              />
            );
          })
        : SCREENSHOTS.map((src, i) => {
            const isActive = i === active;
            const isPrev = i === prev;
            if (!isActive && !isPrev) return null;

            return (
              <img
                key={src}
                src={src}
                alt={`Hunt Showdown cheats ESP aimbot screenshot ${i + 1}`}
                title={`Hunt Showdown cheats ESP aimbot screenshot ${i + 1}`}
                width={1920}
                height={1080}
                loading={isHighPriority && i === 0 ? 'eager' : 'lazy'}
                fetchPriority={isHighPriority && i === 0 ? 'high' : undefined}
                decoding="async"
                onError={() => setUseVideoFrames(true)}
                style={{
                  position: i === 0 ? 'relative' : 'absolute',
                  inset: 0,
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'opacity 0.9s ease',
                  opacity: isActive ? 1 : 0,
                  zIndex: isActive ? 2 : isPrev ? 1 : 0,
                  display: 'block',
                  ...imgStyle,
                }}
              />
            );
          })}

      <div style={{
        position: 'absolute',
        bottom: '12px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '6px',
        zIndex: 10,
      }}>
        {Array.from({ length: slideCount }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => { setPrev(active); setActive(i); }}
            aria-label={`Show screenshot ${i + 1}`}
            style={{
              width: i === active ? 20 : 6,
              height: 6,
              borderRadius: 3,
              border: 'none',
              background: i === active ? 'rgba(168,85,247,0.9)' : 'rgba(255,255,255,0.35)',
              cursor: 'pointer',
              padding: 0,
              transition: 'width 0.3s, background 0.3s',
            }}
          />
        ))}
      </div>
    </div>
  );
}
