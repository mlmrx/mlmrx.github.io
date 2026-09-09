'use client';

import { useEffect, useRef } from 'react';

export function eaglePose(elapsed: number, width: number, size: number) {
  const speed = Math.max(65, Math.min(105, width / 19));
  const crossing = ((width + size) / speed) * 1000;
  const pass = crossing + 700;
  const progress = Math.min((elapsed % pass) / crossing, 1);
  const facing = Math.floor(elapsed / pass) % 2 === 0 ? 1 : -1;
  const distance = progress * (width + size);
  return {
    x: facing === 1 ? -size + distance : width - distance,
    y: 14 + 16 * Math.sin(progress * Math.PI),
    facing,
    bank:
      (facing *
        Math.atan2(16 * Math.PI * Math.cos(progress * Math.PI), width + size) *
        180) /
      Math.PI,
  };
}

export default function EagleScene() {
  const stage = useRef<HTMLDivElement>(null);
  const actor = useRef<HTMLSpanElement>(null);
  const drawing = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!stage.current || !actor.current || !drawing.current) return;
    const canvas = stage.current;
    const eagle = actor.current;
    const silhouette = drawing.current;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = canvas.clientWidth;
    let size = eagle.clientWidth;
    let elapsed = 2200;
    let previous = 0;
    let request = 0;
    let visible = false;

    const render = () => {
      const pose = media.matches
        ? { x: width * 0.66 - size / 2, y: 20, facing: 1, bank: 0 }
        : eaglePose(elapsed, width, size);
      eagle.style.left = '0';
      eagle.style.transform = `translate3d(${pose.x}px,${pose.y}px,0) rotate(${pose.bank}deg)`;
      // The source artwork faces left; mirror it on rightward passes.
      silhouette.style.transform = `scaleX(${-pose.facing})`;
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
      size = eagle.clientWidth;
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
  }, []);

  return (
    <div className="eagle-scene">
      <div
        className="eagle-stage"
        ref={stage}
        role="img"
        aria-label="A black eagle silhouette soars across the page."
      >
        <span ref={actor} className="eagle-actor">
          <img
            ref={drawing}
            className="eagle-drawing"
            src="/eagle.svg"
            width="214"
            height="178"
            alt=""
            fetchPriority="high"
          />
        </span>
      </div>
    </div>
  );
}
