'use client';

import { useEffect, useRef, useState } from 'react';

// Distance and gait share a clock, so the walk keeps its pace on every screen.
export function wolfPose(elapsed: number, width: number, size: number) {
  const speed = size * 0.36;
  const rest = width * 0.66 - size / 2;
  const start = -size;
  const entrance = ((rest - start) / speed) * 1000;
  const pause = 10500;
  const departure = ((width - rest) / speed) * 1000;
  const duration = entrance + pause + departure + 1800;
  const time = elapsed % duration;
  if (time < entrance) {
    return {
      x: start + (time / 1000) * speed,
      frame: Math.floor(time / 100) % 8,
    };
  }
  if (time < entrance + pause) return { x: rest, frame: 2 };
  const leaving = time - entrance - pause;
  return {
    x: rest + (Math.min(leaving, departure) / 1000) * speed,
    frame: Math.floor(leaving / 100) % 8,
  };
}

export default function WolfScene() {
  const stage = useRef<HTMLDivElement>(null);
  const actor = useRef<HTMLSpanElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const asset = new Image();
    asset.onload = () => setReady(true);
    asset.onerror = () => setFailed(true);
    asset.src = '/wolf-walk.png';
    return () => {
      asset.onload = null;
      asset.onerror = null;
    };
  }, []);

  useEffect(() => {
    if (!ready || !stage.current || !actor.current) return;
    const canvas = stage.current;
    const wolf = actor.current;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = canvas.clientWidth;
    let size = wolf.clientWidth;
    // Begin with the wolf just entering, rather than an empty waiting period.
    let elapsed = 1800;
    let previous = 0;
    let request = 0;
    let visible = false;

    const render = () => {
      const pose = media.matches
        ? { x: width * 0.66 - size / 2, frame: 2 }
        : wolfPose(elapsed, width, size);
      // The second row's feet sit 56 source pixels higher in the supplied sheet.
      const baseline = pose.frame >= 4 ? (size * 56) / 443.5 : 0;
      wolf.style.transform = `translate3d(${pose.x}px,${baseline}px,0)`;
      wolf.style.backgroundPosition = `${((pose.frame % 4) * 100) / 3}% ${Math.floor(pose.frame / 4) * 100}%`;
    };
    const tick = (now: number) => {
      if (previous) elapsed += Math.min(now - previous, 80);
      previous = now;
      render();
      request = requestAnimationFrame(tick);
    };
    const sync = () => {
      cancelAnimationFrame(request);
      previous = 0;
      render();
      if (visible && !document.hidden && !media.matches)
        request = requestAnimationFrame(tick);
    };
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    const resize = new ResizeObserver(() => {
      width = canvas.clientWidth;
      size = wolf.clientWidth;
      render();
    });
    intersection.observe(canvas);
    resize.observe(canvas);
    media.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    render();
    return () => {
      cancelAnimationFrame(request);
      intersection.disconnect();
      resize.disconnect();
      media.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
    };
  }, [ready]);

  return (
    <div className="wolf-scene">
      <div
        className="wolf-stage"
        ref={stage}
        role="img"
        aria-label="A graphite wolf, walking quietly."
      >
        <span
          ref={actor}
          className="wolf-actor"
          aria-hidden="true"
          style={{ visibility: ready ? 'visible' : 'hidden' }}
        />
        {failed && (
          <img
            className="wolf-still"
            src="/wolf.png"
            width="158"
            height="158"
            alt=""
          />
        )}
        <noscript>
          <img
            className="wolf-still"
            src="/wolf.png"
            width="158"
            height="158"
            alt=""
          />
        </noscript>
      </div>
    </div>
  );
}
