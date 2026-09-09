'use client';

import { useEffect, useRef, useState } from 'react';
import { drawForm, formOutline } from './kinetic-form';

const directions = [
  {
    word: 'Open',
    href: '#library',
    label: 'The public collection',
    detail: 'Platforms, tools and experiments you can explore.',
  },
  {
    word: 'Secure',
    href: '#selected',
    label: 'Trust, in practice',
    detail: 'Identity, consent and evidence. AgentHalo and Truthseek.',
  },
  {
    word: 'AI',
    href: '#research',
    label: 'Research & standards',
    detail: 'The foundations of a more trustworthy agentic internet.',
  },
];
const outlines = Array.from({ length: 21 }, (_, index) =>
  formOutline(-1 + index / 10),
);

export default function KineticHero() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const art = useRef<HTMLDivElement>(null);
  const interaction = useRef({ x: 0, y: 0, mode: 0.35, pulse: 0 });
  const redraw = useRef<(() => void) | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!canvas.current || !art.current) return;
    const surface = canvas.current;
    const container = art.current;
    const context = surface.getContext('2d', { alpha: true });
    if (!context) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0;
    let height = 0;
    let time = 0;
    let x = 0;
    let y = 0;
    let mode = 0.35;
    let pulse = 0;
    let previous = 0;
    let visible = false;
    let frame = 0;
    let drawnAt = 0;

    const paint = (delta = 0) => {
      if (!width || !height) return;
      const ease = media.matches ? 1 : 1 - Math.exp(-delta * 5);
      x += (interaction.current.x - x) * ease;
      y += (interaction.current.y - y) * ease;
      mode += (interaction.current.mode - mode) * ease;
      pulse += (interaction.current.pulse - pulse) * ease;
      interaction.current.pulse *= Math.exp(-delta * 3);
      drawForm(
        context,
        width,
        height,
        media.matches ? 0 : time,
        mode,
        media.matches ? 0 : x,
        media.matches ? 0 : y,
        media.matches ? 0 : pulse,
      );
    };
    const tick = (now: number) => {
      if (now - drawnAt >= 1000 / 30) {
        const delta = previous
          ? Math.min((now - previous) / 1000, 0.08)
          : 1 / 30;
        time += delta;
        previous = now;
        drawnAt = now;
        paint(delta);
      }
      frame = requestAnimationFrame(tick);
    };
    const sync = () => {
      cancelAnimationFrame(frame);
      previous = 0;
      drawnAt = 0;
      paint(1);
      if (visible && !document.hidden && !media.matches)
        frame = requestAnimationFrame(tick);
    };
    const resize = new ResizeObserver(() => {
      width = container.clientWidth;
      height = container.clientHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.75);
      surface.width = Math.round(width * ratio);
      surface.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      paint(1);
      setReady(true);
    });
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    resize.observe(container);
    observer.observe(container);
    media.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    redraw.current = () => {
      if (media.matches) paint(1);
    };
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
      media.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
      redraw.current = null;
    };
  }, []);

  const choose = (index: number | null) => {
    setActive(index);
    interaction.current.mode = index ?? 0.35;
    redraw.current?.();
  };
  const note =
    active === null
      ? {
          label: 'Ideas you can explore.',
          detail: 'Choose a word to discover the work behind it.',
        }
      : directions[active];

  return (
    <section className="hero" aria-labelledby="intro">
      <div className="hero-layout">
        <div className="form-wrap">
          <div
            className="kinetic-form"
            ref={art}
            onPointerMove={(event) => {
              const bounds = event.currentTarget.getBoundingClientRect();
              interaction.current.x = Math.max(
                -1,
                Math.min(
                  1,
                  ((event.clientX - bounds.left) / bounds.width) * 2 - 1,
                ),
              );
              interaction.current.y = Math.max(
                -1,
                Math.min(
                  1,
                  ((event.clientY - bounds.top) / bounds.height) * 2 - 1,
                ),
              );
            }}
            onPointerDown={() => {
              interaction.current.pulse = 1;
            }}
            onPointerLeave={() => {
              interaction.current.x = 0;
              interaction.current.y = 0;
            }}
            onPointerCancel={() => {
              interaction.current.x = 0;
              interaction.current.y = 0;
            }}
          >
            <svg
              className="form-fallback"
              viewBox="-205 -185 410 370"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.65"
              aria-hidden="true"
              style={{ opacity: ready ? 0 : 0.7 }}
            >
              {outlines.map((path, index) => (
                <path key={index} d={path} />
              ))}
            </svg>
            <canvas ref={canvas} className="form-canvas" aria-hidden="true" />
          </div>
          <p className="form-hint" aria-hidden="true">
            <span />
            Move or touch to reshape.
          </p>
        </div>
        <div className="hero-copy">
          <h1 id="intro">
            <span className="hero-prefix">Love of</span>{' '}
            <span className="hero-words">
              {directions.map((direction, index) => (
                <a
                  key={direction.word}
                  href={direction.href}
                  className={active === index ? 'is-active' : ''}
                  aria-label={`${direction.word} — ${direction.label}`}
                  onPointerEnter={() => choose(index)}
                  onPointerLeave={() => choose(null)}
                  onFocus={() => choose(index)}
                  onBlur={() => choose(null)}
                >
                  {direction.word}{' '}
                  <svg
                    className="word-arrow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    aria-hidden="true"
                  >
                    <path d="M5 19 19 5M5 5h14v14" />
                  </svg>
                </a>
              ))}
            </span>
          </h1>
          <div className="hero-note">
            <p className="hero-note-label">{note.label}</p>
            <p>{note.detail}</p>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <span>Palo Alto, California</span>
        <a href="#work">
          Explore the work <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
