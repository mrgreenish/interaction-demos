import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { hasValue } from "@misc/helpers";

type Dots = Array<{ x: number; y: number; r: number; color: string }>;
const NUMBER_OF_BEAM_POINTS = 250;

export function useBeam(
  activeElement: React.RefObject<HTMLElement> | null,
  canvasRef: React.RefObject<HTMLCanvasElement>
): void {
  const tl = useRef<GSAPTimeline | null>(gsap.timeline());
  const ctx = useRef<CanvasRenderingContext2D | null>(null);
  const canvasSizes = useRef({ width: 200, height: 100, ratio: 1 });
  const dots = useRef<Dots>([]);
  const triangleOpacity = useRef({ opacity: 0 });

  const randomXPos = gsap.utils.random(0, 200, 1, true);
  const randomYPos = gsap.utils.random(100, 110, 1, true);
  const randomRadius = gsap.utils.random(0.1, 5, 0.01, true);

  const allColors = React.useMemo(() => {
    return ["#fffe66", "#f0ef00", "#f6f5b9", "#fffb00", "#d3d212"];
  }, []);

  const randomColor = gsap.utils.random(0, allColors.length - 1, 1, true);
  const setupCanvas = React.useCallback(() => {
    if (!hasValue(canvasRef.current)) return;
    const ratio = Math.min(2, window.devicePixelRatio);
    canvasSizes.current.ratio = ratio;
    canvasRef.current.width = canvasSizes.current.width * ratio;
    canvasRef.current.height = canvasSizes.current.height * ratio;

    canvasRef.current.style.width = `${200}px`;
    canvasRef.current.style.height = `${100}px`;

    ctx.current = canvasRef.current.getContext("2d");
    ctx.current?.scale(ratio, ratio);
  }, [canvasRef]);

  const draw = React.useCallback(
    (
      ctx: CanvasRenderingContext2D | null,
      canvas: HTMLCanvasElement | null,
      dots: Dots
    ) => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // default composition
      ctx.globalCompositeOperation = "source-over";
      // dots
      ctx.shadowColor = "#f6f5b9";
      ctx.shadowBlur = 2;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      for (let i: number = 0, leng: any = dots.length; i < leng; i++) {
        ctx.fillStyle = dots[i].color;
        ctx.beginPath();
        ctx.arc(dots[i].x, dots[i].y, dots[i].r, 0, 2 * Math.PI);
        ctx.fill();
      }

      // triangle
      ctx.shadowColor = "#ffff";
      ctx.shadowBlur = 30;
      ctx.fillStyle = `rgba(255, 255, 255, ${triangleOpacity.current.opacity})`;
      ctx.beginPath();
      ctx.moveTo(100, 0);
      ctx.lineTo(0, 100);
      ctx.lineTo(160, 100);
      ctx.fill();

      // mask rect
      // mask composition
      ctx.globalCompositeOperation = "destination-in";
      const grd = ctx.createLinearGradient(
        0,
        70,
        0,
        canvasSizes.current.height
      );
      grd.addColorStop(0, "black");
      grd.addColorStop(1, "transparent");

      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.rect(0, 0, 200, 100);
      ctx.fill();
    },
    [ctx.current, canvasRef.current, dots.current]
  );

  const setupDots = React.useCallback(() => {
    dots.current = [{ x: 0, y: 0, r: 0, color: "#f0ef00" }];
    for (let i: number = 0; i < NUMBER_OF_BEAM_POINTS; i++) {
      const dotpos = {
        x: randomXPos(),
        y: randomYPos(),
        r: randomRadius(),
        color: allColors[randomColor()],
      };
      dots.current.push(dotpos);
    }
  }, [allColors, randomColor, randomRadius, randomXPos, randomYPos]);

  useEffect(() => {
    if (canvasRef.current == null) return;
    if (hasValue(tl.current)) tl.current.revert();
    tl.current = gsap.timeline({
      paused: true,
      repeat: -1,
      onUpdate: () => {
        draw(ctx.current, canvasRef.current, dots.current);
      },
    });
    setupDots();
    setupCanvas();
    if (dots.current == null) return;
    tl.current.to(
      dots.current,
      {
        y: -5,
        x: canvasSizes.current.width / 2 - 1,
        r: 0.5,
        duration: 0.7,
        stagger: 0.004,
        ease: "power2.in",
      },
      "in"
    );

    return () => {
      if (tl.current != null) tl.current.kill();
    };
  }, [canvasRef, draw, setupCanvas, setupDots]);

  useEffect(() => {
    if (hasValue(activeElement)) {
      tl.current?.timeScale(1).play(0);
      gsap.fromTo(
        triangleOpacity.current,
        { opacity: 0 },
        { opacity: 0.08, duration: 0.23, overwrite: true }
      );
    } else {
      if (tl.current == null) return;
      tl.current.seek(0).pause();
      draw(ctx.current, canvasRef.current, dots.current);
      gsap.to(triangleOpacity.current, {
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        onUpdate: () => {
          draw(ctx.current, canvasRef.current, dots.current);
        },
      });
    }
  }, [activeElement, canvasRef, draw]);
}
