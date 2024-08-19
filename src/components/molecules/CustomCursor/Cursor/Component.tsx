'use client';

import { useCallback, useEffect, useRef } from "react";
import { useCursorMotionStore } from "@stores/cursor";
import gsap from "gsap";
import CursorPointer from "../CursorPointer/Component";
import s from "./Cursor.module.css";

const SPEED = 0.6;

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorMotion = useCursorMotionStore(
    (state) => state.currentCursorMotion
  );
  const scrollPos = useRef<number>(0);
  const xTo = useRef<any>();
  const yTo = useRef<any>();
  const xDotTo = useRef<any>();
  const yDotTo = useRef<any>();
  const snap = useRef<boolean>();

  const snapTo = useCallback((targetEl: HTMLElement | null) => {
    if (!targetEl) return;
    const rect = targetEl.getBoundingClientRect();
    gsap.to(cursorRef.current, {
      ease: "power3.out",
      x: rect.x + rect.width / 2,
      y: rect.y + rect.height / 2,
    });
    gsap.to(cursorDotRef.current, {
      ease: "power3.out",
      x: rect.x + rect.width / 2,
      y: rect.y + rect.height / 2,
    });
  }, []);

  const mouseMoveHandler = useCallback((e: MouseEvent) => {
    console.log("snap", snap.current);
    if (snap.current) {
      snapTo(e.target as HTMLElement);
      return;
    }
    xTo.current(e.pageX);
    yTo.current(e.pageY - scrollPos.current);
    xDotTo.current(e.pageX);
    yDotTo.current(e.pageY - scrollPos.current);
  }, []);

  useEffect(() => {
    if (cursorMotion === "snap") {
      snap.current = true;
    } else {
      snap.current = false;
    }
  }, [cursorMotion]);

  useEffect(() => {
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
    gsap.set(cursorDotRef.current, { xPercent: -50, yPercent: -50 });
    xTo.current = gsap.quickTo(cursorRef.current, "x", {
      duration: SPEED,
      ease: "power3",
    });
    yTo.current = gsap.quickTo(cursorRef.current, "y", {
      duration: SPEED,
      ease: "power3",
    });
    xDotTo.current = gsap.quickTo(cursorDotRef.current, "x", {
      duration: SPEED / 2,
      ease: "power3",
    });
    yDotTo.current = gsap.quickTo(cursorDotRef.current, "y", {
      duration: SPEED / 2,
      ease: "power3",
    });

    scrollPos.current =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHandler = () => {
      scrollPos.current =
        document.documentElement.scrollTop || document.body.scrollTop;
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("scroll", scrollHandler);
    return () => {
      xTo.current.tween.revert();
      yTo.current.tween.revert();
      xDotTo.current.tween.revert();
      yDotTo.current.tween.revert();
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <>
      <div className={s.centerDot} ref={cursorDotRef}></div>
      <div ref={cursorRef} className={s.cursorRef}>
        <CursorPointer />
      </div>
    </>
  );
};

export default Cursor;
