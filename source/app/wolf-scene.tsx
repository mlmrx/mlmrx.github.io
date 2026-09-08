'use client';
import { useEffect, useRef, useState } from 'react';

// A full pass takes 14 seconds, including a quiet pause at the centre.
export function wolfPose(elapsed: number, width: number) {
  const cycle = (elapsed % 14000) / 14000;
  const centre = (width - 190) / 2;
  let x: number;
  let walking = true;
  if (cycle < .32) x = -190 + (centre + 190) * cycle / .32;
  else if (cycle < .55) { x = centre; walking = false; }
  else if (cycle < .9) x = centre + (width - centre) * (cycle - .55) / .35;
  else { x = width; walking = false; }
  const frame = walking ? Math.floor(elapsed / 105) % 8 : 0;
  return {x, frame, walking};
}
export default function WolfScene() {
  const stage = useRef<HTMLDivElement>(null);
  const actor = useRef<HTMLSpanElement>(null);
  const elapsed = useRef(0);
  const [reduced, setReduced] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener('change', sync);
    const image = new Image();
    image.onload = () => setReady(true);
    image.src = '/wolf-walk.png';
    return () => media.removeEventListener('change', sync);
  }, []);
  useEffect(() => {
    if (!ready || !stage.current || !actor.current) return;
    let id = 0;
    let previous = 0;
    let visible = true;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(stage.current);
    const tick = (now: number) => {
      const delta = previous ? Math.min(now - previous, 70) : 0;
      previous = now;
      const width = stage.current?.clientWidth ?? 700;
      if (!reduced && visible && !document.hidden) elapsed.current += delta;
      const pose = reduced ? {x:(width-190)/2,frame:0} : wolfPose(elapsed.current, width);
      if (actor.current) {
        actor.current.style.transform = `translate3d(${pose.x}px,${pose.frame >= 4 ? 24 : 0}px,0)`;
        actor.current.style.backgroundPosition = `${(pose.frame % 4) * 100 / 3}% ${Math.floor(pose.frame / 4) * 100}%`;
      }
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(id); observer.disconnect(); };
  }, [ready, reduced]);
  return <div className="wolf-scene">
    <div className="wolf-stage" ref={stage} role="img" aria-label="A graphite wolf walks across the page, pauses, then continues on its way.">
      {!ready && <img className="wolf-still" src="/wolf.png" width="190" height="190" alt=""/>}
      <span ref={actor} className="wolf-actor" aria-hidden="true" style={{visibility:ready?'visible':'hidden'}}/>
    </div>
  </div>;
}

