'use client';

import { useEffect, useRef, useState } from 'react';

export const CursorFollower = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    // Robust detection for touch devices (Mobile/Tablets)
    const isTouchDevice = 
      ('ontouchstart' in window) || 
      (navigator.maxTouchPoints > 0) ||
      // @ts-ignore - msMaxTouchPoints is for IE10/11 but good for older surfaces just in case
      (navigator.msMaxTouchPoints > 0) ||
      (window.matchMedia && window.matchMedia("(any-pointer: coarse)").matches);

    if (isTouchDevice) {
      setIsActive(false);
      return; // bail out immediately, no event listeners or canvas rendering
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let mouseMoved = false;

    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const params = {
      pointsNumber: 40,
      widthFactor: 0.3,
      spring: 0.4,
      friction: 0.5,
    };

    const trail: { x: number; y: number; dx: number; dy: number }[] = Array.from(
      { length: params.pointsNumber },
      () => ({ x: pointer.x, y: pointer.y, dx: 0, dy: 0 })
    );

    // --- helpers ---
    const isDark = () => document.documentElement.classList.contains('dark');

    const setupCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const updatePointer = (x: number, y: number) => {
      pointer.x = x;
      pointer.y = y;
    };

    let rafId: number | null = null;

    const update = () => {
      if (!mouseMoved) {
        // Prevent drawing anything before mouse actually moves
        rafId = requestAnimationFrame(update);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // physics
      trail.forEach((p, i) => {
        const prev = i === 0 ? pointer : trail[i - 1];
        const spring = i === 0 ? 0.4 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
      });

      // draw
      const dark = isDark();
      if (dark) {
        // glowing dark-blue
        ctx.shadowColor = '#1e90ff';
        ctx.shadowBlur = 12;
        ctx.strokeStyle = '#4db8ff';
      } else {
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.strokeStyle = '#111111';
      }

      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);

      for (let i = 1; i < trail.length - 1; i++) {
        const xc = 0.5 * (trail[i].x + trail[i + 1].x);
        const yc = 0.5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(xc, yc);
      }
      ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
      ctx.stroke();

      rafId = requestAnimationFrame(update);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!mouseMoved) {
        mouseMoved = true;
        // Snap trail to the first mouse coordinate to avoid jumping from center
        updatePointer(e.clientX, e.clientY);
        trail.forEach(p => {
          p.x = e.clientX;
          p.y = e.clientY;
        });
        setIsVisible(true);
        rafId = requestAnimationFrame(update);
        return;
      }
      updatePointer(e.clientX, e.clientY);
    };

    const onClick = (e: MouseEvent) => updatePointer(e.clientX, e.clientY);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);
    window.addEventListener('resize', setupCanvas);

    setupCanvas();

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
      window.removeEventListener('resize', setupCanvas);
    };
  }, []);

  if (!isActive) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 z-[100] transition-opacity duration-300 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ display: 'block' }}
    />
  );
};
