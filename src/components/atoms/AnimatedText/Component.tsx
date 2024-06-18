"use client";
import React, { useRef } from "react";
import gsap, { random } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitText from "@lib/gsap/SplitText";


interface Props {
  children: React.ReactNode;
  ariaLabel: string;
}
gsap.registerPlugin(SplitText, ScrollTrigger);

export default function AnimatedText(props: Props): JSX.Element {
  const el = useRef<HTMLDivElement>(null);
  const { children } = props;
  const posableElements = 'p, h1, h2, h3, h4, h5, h6';
  useGSAP(
    () => {
      const textSplitObj = new SplitText(posableElements, {
        type: "lines,words,chars",
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el.current,
          scrub: false,
          once: true,
        },
      });
      gsap.set(posableElements, { attr: { 'aria-label': props.ariaLabel } })

      textSplitObj.lines.forEach((line) => {
        line.setAttribute("aria-hidden", "true")
      });
      tl.fromTo(
        textSplitObj.chars,
        { scaleY: 1.23, y: -10, autoAlpha: 0 },
        {
          y: 0,
          delay: 0.1,
          autoAlpha: 1,
          duration: 0.8,
          scaleY: 1,
          stagger: {
            amount: 0.45,
          },
          ease: "power4.inOut",
        }
      );
    },
    { scope: el }
  );

  return <div ref={el}>
    {children}
  </div>;
}
