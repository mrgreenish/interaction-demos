'use client';

import React, { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { useCursorStore } from "@stores/cursor";

import s from "./CursorPointer.module.css";

const CursorPointerComponent: React.FC = () => {
  const elRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctx = useRef<CanvasRenderingContext2D | null>(null);
  const sizes = useRef({ width: 0, height: 0, scale: 1 });
  const valuesObj = useRef({
    x: 0.5,
    y: 0.5,
    width: 200,
    height: 200,
    radius: 100,
    strokeWidth: 1,
    fill: "transparent",
    stroke: "black",
  });

  const currentCursor = useCursorStore(
    (state) => state?.currentCursor ?? "default",
  );

  useEffect(() => {
    ctx.current = canvasRef.current?.getContext("2d") ?? null;
  }, []);

  const resize = useCallback(() => {
    if (!canvasRef.current) return;
    if (!ctx.current) return;

    sizes.current.scale = window.devicePixelRatio >= 1.5 ? 2 : 1;
    sizes.current.width = elRef.current?.offsetWidth || 0;
    sizes.current.height = elRef.current?.offsetHeight || 0;

    canvasRef.current.width = sizes.current.width * sizes.current.scale;
    canvasRef.current.height = sizes.current.height * sizes.current.scale;

    canvasRef.current.style.width =
      canvasRef.current.width / sizes.current.scale + "px";
    canvasRef.current.style.height =
      canvasRef.current.height / sizes.current.scale + "px";

    ctx.current.scale(sizes.current.scale, sizes.current.scale);
  }, []);

  const roundRect = useCallback(
    (
      context: CanvasRenderingContext2D,
      xPercent: number,
      yPercent: number,
      width: number,
      height: number,
      radius: number,
      strokeWidth: number,
      fill: string,
      stroke: string,
      centePos: boolean,
    ) => {
      const centerPositionOffsetX = centePos ? width / 2 : 0;
      const centerPositionOffsetY = centePos ? height / 2 : 0;
      const x = posX(xPercent) - centerPositionOffsetX;
      const y = posY(yPercent) - centerPositionOffsetY;

      if (width < 2 * radius) radius = width / 2;
      if (height < 2 * radius) radius = height / 2;
      context.beginPath();
      context.fillStyle = fill;
      context.strokeStyle = stroke;
      context.moveTo(x + radius, y);
      context.arcTo(x + width, y, x + width, y + height, radius);
      context.arcTo(x + width, y + height, x, y + height, radius);
      context.arcTo(x, y + height, x, y, radius);
      context.arcTo(x, y, x + width, y, radius);
      context.lineWidth = strokeWidth;
      context.stroke();
      context.closePath();
      context.fill();
      // context.stroke()
    },
    [],
  );

  const draw = useCallback(() => {
    if (!canvasRef.current) return;
    if (!ctx.current) return;
    ctx.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height,
    );

    roundRect(
      ctx.current,
      0.5,
      0.5,
      valuesObj.current.width,
      valuesObj.current.height,
      valuesObj.current.radius,
      valuesObj.current.strokeWidth,
      valuesObj.current.fill,
      valuesObj.current.stroke,
      true,
    );
  }, [roundRect]);

  const drawCircle = useCallback(
    (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      radius: number,
    ) => {
      context.beginPath();
      context.arc(
        x * sizes.current.width,
        y * sizes.current.height,
        radius,
        0,
        2 * Math.PI,
      );
      context.fillStyle = "transparent";
      context.strokeStyle = "black";
      context.fill();
      context.lineWidth = 1;
      context.stroke();
    },
    [],
  );

  const posX = (x: number) => {
    return x * sizes.current.width;
  };
  const posY = (y: number) => {
    return y * sizes.current.height;
  };

  useEffect(() => {
    resize();
    draw();
  }, [resize, draw]);

  useEffect(() => {
    const animationProps = {
      onUpdate: draw,
    };

    if (currentCursor === "default") {
      gsap.to(valuesObj.current, {
        duration: 0.26,
        width: 200,
        height: 200,
        radius: 100,
        strokeWidth: 1,
        fill: "transparent",
        ease: "power3.in",
        ...animationProps,
      });
    } else if (currentCursor === "pill") {
      gsap.to(valuesObj.current, {
        duration: 0.36,
        width: 300,
        height: 100,
        radius: 50,
        strokeWidth: 4,
        fill: "transparent",
        ease: "power3.in",
        ...animationProps,
      });
    } else if (currentCursor === "shrink") {
      gsap.to(valuesObj.current, {
        duration: 0.36,
        width: 60,
        height: 60,
        radius: 100,
        strokeWidth: 1,
        fill: "transparent",
        ease: "elastic.out(1, 0.75)",
        ...animationProps,
      });
    } else if (currentCursor === "dot") {
      gsap.to(valuesObj.current, {
        duration: 0.46,
        width: 10,
        height: 10,
        radius: 100,
        strokeWidth: 1,
        fill: "black",
        ease: "power4.inOut",
        ...animationProps,
      });
    } else if (currentCursor === "line") {
      gsap.to(valuesObj.current, {
        duration: 0.36,
        width: 200,
        height: 1,
        radius: 0,
        strokeWidth: 1,
        fill: "black",
        ...animationProps,
      });
    }
  }, [currentCursor, draw]);
  return (
    <>
      <div className={s.cursor} ref={elRef}>
        <canvas className={s.canvas} ref={canvasRef} />
      </div>
    </>
  );
};

// export default CursorPointer;
const CursorPointer = React.memo(CursorPointerComponent);
export default CursorPointer;
