"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import clsx from "clsx";
import { useBeam } from "./useBeam";
import { hasValue } from "@misc/helpers";
import { useIntersection, useWindowSize } from "react-use";
import styles from "./styles.module.css";

interface Props {
  className?: string;
  customUFOImage?: string;
  activeElement: React.RefObject<HTMLElement> | null;
}

export default function UFOMouseFollow(props: Props): JSX.Element {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const elRef = useRef<HTMLDivElement>(null);
  const el = gsap.utils.selector(elRef);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const windowsize = useWindowSize();
  const intersection = useIntersection(elRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  useBeam(props.activeElement, canvasRef);

  const tl = useRef<GSAPTimeline | null>(
    gsap.timeline({ paused: false, yoyo: true, repeat: -1 })
  );
  const lampsTimeline = useRef<GSAPTimeline | null>(
    gsap.timeline({ paused: false, repeat: -1 })
  );
  const randomXPos = gsap.utils.random(-50, 50, 10, true);

  const getRotation = (xpos: number): number => {
    if (
      xpos > window.innerWidth / 2 - 300 &&
      xpos < window.innerWidth / 2 + 100
    ) {
      return -20;
    }
    if (xpos < window.innerWidth / 2) {
      return 5;
    }
    if (xpos > window.innerWidth / 2) {
      return -30;
    }
    return 0;
  };

  useEffect(() => {
    if (
      !hasValue(props.activeElement) ||
      !hasValue(props.activeElement.current) ||
      !hasValue(wrapperRef.current)
    ) {
      gsap.to(elRef.current, {
        delay: 0.01,
        x: Math.max(0, window.innerWidth / 2 - 600),
        y: -120,
        rotate: 0,
        duration: 3,
        ease: "back.inOut(5)",
      });
    } else {
      const rect = props.activeElement.current.getBoundingClientRect();

      gsap.to(elRef.current, {
        x: Number(rect.left) + Number(rect.width) / 2 - randomXPos(),
        y: Math.min(
          props.activeElement.current.offsetTop + rect.top - rect.y - 150,
          wrapperRef.current.offsetHeight
        ),
        rotate: getRotation(rect.x),
        overwrite: true,
        ease: "back.inOut(1)",
        duration: 0.34,
      });
      gsap.to(canvasRef.current, {
        rotate: -getRotation(rect.x),
        duration: 0.4,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.activeElement]);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: false, yoyo: true, repeat: -1 });
    lampsTimeline.current = gsap.timeline({
      paused: false,
      repeat: -1,
      repeatDelay: 0.5,
      yoyo: false,
      ease: "power1.inOut",
    });
    lampsTimeline.current.fromTo(
      el(".js-lamp"),
      { opacity: 0 },
      { opacity: 1, stagger: 0.5, duration: 0.1 }
    );
    lampsTimeline.current.to(
      el(".js-lamp"),
      { opacity: 0, stagger: 0.5, duration: 0.1 },
      "-=0.5"
    );
    lampsTimeline.current.timeScale(4);
    tl.current?.fromTo(
      el(".js-ufo"),
      { y: -5 },
      { y: 5, duration: 0.5, ease: "power1.in", yoyoEase: "power1.inOut" }
    );

    return () => {
      lampsTimeline?.current?.revert();
      tl.current?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (intersection != null && intersection.intersectionRatio < 1) {
      lampsTimeline?.current?.pause();
      tl.current?.pause();
    } else {
      lampsTimeline?.current?.play();
      tl.current?.play();
    }
  }, [intersection]);

  useEffect(() => {
    if (!hasValue(props.activeElement)) {
      gsap.to(elRef.current, {
        x: Math.max(0, window.innerWidth / 2 - 600),
        y: -120,
        rotate: 0,
        duration: 3,
        ease: "back.inOut(5)",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowsize]);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div ref={elRef} className={styles.ufoWrapper}>
        <div className={clsx(styles.ufo, "js-ufo")}>
          <img
            className={props.className}
            src={props.customUFOImage ? props.customUFOImage : '/decorations/mentos/unique/ufo.png'}
            alt="decoration"
            width="212px"
            height="130px"
          />
          <div className={styles.ufoLamps}>
            <div className={clsx(styles.ufoLamp, "js-lamp")} />
            <div className={clsx(styles.ufoLamp, "js-lamp")} />
            <div className={clsx(styles.ufoLamp, "js-lamp")} />
          </div>
          <div className={styles.beam}>
            <canvas className={styles.canvas} ref={canvasRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
