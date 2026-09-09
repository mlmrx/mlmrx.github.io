'use client';

import { useEffect, useRef } from 'react';

const STRIDE = 64;
const STANCE = 0.62;
const WALK_CYCLE = 900;
const LEGS = [
  { x: 122, y: 99, offset: 0.5, front: false },
  { x: 236, y: 99, offset: 0.75, front: true },
  { x: 118, y: 99, offset: 0, front: false },
  { x: 231, y: 99, offset: 0.25, front: true },
];

// Match travel to the distance covered by each planted foot.
export function wolfPose(elapsed: number, width: number, size: number) {
  const speed = ((size / 360) * STRIDE) / ((STANCE * WALK_CYCLE) / 1000);
  const crossing = ((width + size) / speed) * 1000;
  const pass = crossing + 700;
  const time = elapsed % pass;
  const facing = Math.floor(elapsed / pass) % 2 === 0 ? 1 : -1;
  const distance = (Math.min(time, crossing) / 1000) * speed;
  return {
    x: facing === 1 ? -size + distance : width - distance,
    facing,
    phase: elapsed / WALK_CYCLE,
    walking: time < crossing,
  };
}

// Two connected limb segments; the planted foot stays on the ground as the body advances.
export function wolfLegPath(
  hipX: number,
  hipY: number,
  phase: number,
  front: boolean,
  resting = false,
) {
  const step = ((phase % 1) + 1) % 1;
  const swing = Math.max(0, (step - STANCE) / (1 - STANCE));
  const ease = swing * swing * (3 - 2 * swing);
  const reach = resting
    ? front
      ? 7
      : -5
    : step < STANCE
      ? STRIDE / 2 - (STRIDE * step) / STANCE
      : -STRIDE / 2 + STRIDE * ease;
  const footX = hipX + reach;
  const footY = 183 - (resting ? 0 : 20 * Math.sin(Math.PI * swing));
  const upper = front ? 50 : 52;
  const lower = front ? 49 : 52;
  const dx = footX - hipX;
  const dy = footY - hipY;
  const distance = Math.min(upper + lower - 0.01, Math.hypot(dx, dy));
  const bend = Math.acos(
    Math.max(
      -1,
      Math.min(
        1,
        (upper * upper + distance * distance - lower * lower) /
          (2 * upper * distance),
      ),
    ),
  );
  const angle = Math.atan2(dy, dx) + (front ? bend : -bend);
  const jointX = hipX + Math.cos(angle) * upper;
  const jointY = hipY + Math.sin(angle) * upper;
  const n = (value: number) => value.toFixed(2);
  return `M ${n(hipX - 10)} ${n(hipY - 9)}
    Q ${n(hipX)} ${n(hipY - 12)} ${n(hipX + 10)} ${n(hipY - 6)}
    L ${n(jointX + 6)} ${n(jointY - 2)}
    L ${n(footX + 3)} ${n(footY - 5)}
    Q ${n(footX + 11)} ${n(footY - 4)} ${n(footX + 12)} ${n(footY + 1)}
    Q ${n(footX + 4)} ${n(footY + 4)} ${n(footX - 5)} ${n(footY + 2)}
    L ${n(footX - 6)} ${n(footY - 3)}
    L ${n(jointX - 5)} ${n(jointY + 3)}
    Q ${n(hipX - 9)} ${n(hipY + 20)} ${n(hipX - 10)} ${n(hipY - 9)} Z`;
}

export default function WolfScene() {
  const stage = useRef<HTMLDivElement>(null);
  const actor = useRef<HTMLSpanElement>(null);
  const drawing = useRef<SVGSVGElement>(null);
  const body = useRef<SVGGElement>(null);
  const tail = useRef<SVGPathElement>(null);
  const head = useRef<SVGPathElement>(null);
  const legs = useRef<Array<SVGPathElement | null>>([]);

  useEffect(() => {
    if (!stage.current || !actor.current || !drawing.current) return;
    const canvas = stage.current;
    const wolf = actor.current;
    const silhouette = drawing.current;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = canvas.clientWidth;
    let size = wolf.clientWidth;
    let elapsed = 1400;
    let previous = 0;
    let request = 0;
    let visible = false;

    const render = () => {
      const pose = media.matches
        ? { x: width * 0.66 - size / 2, facing: 1, phase: 0, walking: false }
        : wolfPose(elapsed, width, size);
      const bob = pose.walking ? Math.sin(pose.phase * Math.PI * 4) * 1.2 : 0;
      wolf.style.left = '0';
      wolf.style.transform = `translate3d(${pose.x}px,0,0)`;
      silhouette.style.transform = `scaleX(${pose.facing})`;
      body.current?.setAttribute('transform', `translate(0,${bob})`);
      tail.current?.setAttribute(
        'transform',
        `rotate(${pose.walking ? Math.sin(pose.phase * Math.PI * 2) * 3 : 0} 113 89)`,
      );
      head.current?.setAttribute(
        'transform',
        `rotate(${pose.walking ? Math.sin(pose.phase * Math.PI * 2 + 0.4) * 0.8 : 0} 252 70)`,
      );
      LEGS.forEach((leg, index) => {
        legs.current[index]?.setAttribute(
          'd',
          wolfLegPath(
            leg.x,
            leg.y + bob,
            pose.phase + leg.offset,
            leg.front,
            !pose.walking,
          ),
        );
      });
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
  }, []);

  return (
    <div className="wolf-scene">
      <div
        className="wolf-stage"
        ref={stage}
        role="img"
        aria-label="A black wolf silhouette walks across the page and back."
      >
        <span ref={actor} className="wolf-actor">
          <svg
            ref={drawing}
            className="wolf-drawing"
            viewBox="0 0 360 208"
            width="360"
            height="208"
            fill="#000"
            aria-hidden="true"
          >
            {LEGS.map((leg, index) => (
              <path
                key={index}
                ref={(element) => {
                  legs.current[index] = element;
                }}
                d={wolfLegPath(leg.x, leg.y, leg.offset, leg.front, true)}
                stroke="#000"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            ))}
            <g ref={body}>
              <path
                ref={tail}
                d="M117 82 C100 87 95 99 81 108 C64 119 42 122 23 129 L34 132 L27 138 L42 137 L37 143 C66 148 88 137 104 118 C115 107 123 93 117 82Z"
              />
              <path d="M101 94 C101 80 111 72 124 66 L132 60 L130 67 L140 62 L137 68 C160 60 183 61 206 63 C226 64 241 57 253 54 L263 70 C266 89 254 103 244 109 L239 105 L237 114 L232 108 C218 111 207 109 196 104 C176 103 160 98 147 105 C137 115 118 112 106 104Z" />
              <path
                ref={head}
                d="M236 80 C243 67 248 54 257 45 L265 18 Q270 17 280 38 L287 34 L292 12 Q296 13 302 35 C308 39 310 47 313 50 L327 57 L345 62 Q348 65 343 68 L329 73 L317 75 C308 85 300 89 289 91 L279 96 L265 105 L266 96 L254 106 L257 94 L242 100Z"
              />
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
}
