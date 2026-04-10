'use client';

import { useEffect, useRef } from 'react';

export const CursorFollower = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let mouseMoved = false;

    const pointer = {
      x: 0.5 * window.innerWidth,
      y: 0.5 * window.innerHeight,
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

    const onMouseMove = (e: MouseEvent) => {
      mouseMoved = true;
      updatePointer(e.clientX, e.clientY);
    };
    const onClick = (e: MouseEvent) => updatePointer(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      mouseMoved = true;
      updatePointer(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('resize', setupCanvas);

    setupCanvas();

    let rafId: number;

    const update = (t: number) => {
      // intro auto-motion before first real mouse event
      if (!mouseMoved) {
        pointer.x = (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) * window.innerWidth;
        pointer.y = (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) * window.innerHeight;
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

    rafId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', setupCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[100]"
      style={{ display: 'block' }}
    />
  );
};
