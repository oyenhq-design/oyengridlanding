'use client';

import { useEffect, useRef } from 'react';

type NodeObj = {
  x: number; y: number; vx: number; vy: number;
  r: number; opacity: number; gold: boolean;
};

type ParticleObj = {
  x: number; y: number; vx: number; vy: number;
  r: number; maxOp: number; life: number; maxLife: number;
};

type ArcObj = {
  sx: number; sy: number; ex: number; ey: number;
  cx: number; cy: number;
  t: number; speed: number; op: number; gold: boolean;
};

const rnd = (min: number, max: number) => min + Math.random() * (max - min);

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let nodes: NodeObj[] = [];
    let particles: ParticleObj[] = [];
    let arcs: ArcObj[] = [];

    const initScene = () => {
      const W = canvas.width;
      const H = canvas.height;

      // 30 slow-drifting network nodes
      nodes = Array.from({ length: 30 }, () => ({
        x: rnd(0, W), y: rnd(0, H),
        vx: rnd(-0.10, 0.10), vy: rnd(-0.10, 0.10),
        r: rnd(1.0, 2.2),
        opacity: rnd(0.04, 0.08),
        gold: Math.random() < 0.18,
      }));

      // 65 micro-particles floating upward
      particles = Array.from({ length: 65 }, () => ({
        x: rnd(0, W), y: rnd(0, H),
        vx: rnd(-0.12, 0.12), vy: rnd(-0.38, -0.14),
        r: rnd(0.3, 1.1),
        maxOp: rnd(0.022, 0.052),
        life: Math.floor(rnd(0, 450)),
        maxLife: Math.floor(rnd(260, 520)),
      }));

      // 6 sweeping bezier light trails
      arcs = Array.from({ length: 6 }, () => ({
        sx: rnd(0, W), sy: rnd(0, H),
        ex: rnd(0, W), ey: rnd(0, H),
        cx: rnd(0, W), cy: rnd(0, H),
        t: Math.random(),
        speed: rnd(0.0005, 0.0011),
        op: rnd(0.016, 0.034),
        gold: Math.random() < 0.35,
      }));
    };

    const setup = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initScene();
    };

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // ── 1. Connection lines between nearby nodes ──
      const maxDist = W * 0.20;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.030;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(246,243,236,${alpha.toFixed(4)})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      // ── 2. Nodes with soft glow halos ──
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;

        const col = n.gold ? '244,197,66' : '246,243,236';
        const haloR = n.r * 14;
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, haloR);
        grd.addColorStop(0, `rgba(${col},${n.opacity.toFixed(3)})`);
        grd.addColorStop(1, `rgba(${col},0)`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, haloR, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        // Core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col},${Math.min(n.opacity * 1.8, 0.14).toFixed(3)})`;
        ctx.fill();
      });

      // ── 3. Floating micro-particles ──
      particles.forEach(p => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        if (p.life >= p.maxLife || p.y < -5) {
          p.x = rnd(0, W);
          p.y = H + 5;
          p.life = 0;
        }
        const half = p.maxLife * 0.4;
        const op = p.life < half
          ? (p.life / half) * p.maxOp
          : ((p.maxLife - p.life) / (p.maxLife - half)) * p.maxOp;
        if (op <= 0) return;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(246,243,236,${op.toFixed(4)})`;
        ctx.fill();
      });

      // ── 4. Sweeping bezier light trails ──
      arcs.forEach(arc => {
        arc.t = (arc.t + arc.speed) % 1;
        const trailLen = 0.13;
        const t1 = arc.t;
        const t0 = Math.max(0, t1 - trailLen);
        const steps = 55;

        ctx.beginPath();
        for (let k = 0; k <= steps; k++) {
          const t = t0 + (t1 - t0) * (k / steps);
          const mt = 1 - t;
          const px = mt * mt * arc.sx + 2 * mt * t * arc.cx + t * t * arc.ex;
          const py = mt * mt * arc.sy + 2 * mt * t * arc.cy + t * t * arc.ey;
          if (k === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        const col = arc.gold ? '244,197,66' : '246,243,236';
        ctx.strokeStyle = `rgba(${col},${arc.op.toFixed(3)})`;
        ctx.lineWidth = 0.65;
        ctx.stroke();

        // Respawn arc on completion
        if (arc.t < arc.speed * 3) {
          arc.sx = rnd(0, W); arc.sy = rnd(0, H);
          arc.ex = rnd(0, W); arc.ey = rnd(0, H);
          arc.cx = rnd(0, W); arc.cy = rnd(0, H);
        }
      });

      animId = requestAnimationFrame(draw);
    };

    setup();
    draw();

    const handleResize = () => setup();
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    />
  );
}
