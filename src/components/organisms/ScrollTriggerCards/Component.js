'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerCards() {
  const elRef = useRef();
  const tl = useRef();

  useGSAP(() => {
    const el = gsap.utils.selector(elRef);
    let scaleBase = el(".js-card").length;
    const cardSizes = el(".js-card")[0].getBoundingClientRect();

    tl.current = gsap.timeline({
      scrollTrigger: {
        id: "cards",
        trigger: ".js-card-wrapper",
        scrub: 0.3,
        pin: true,
        start: "top-=10%",
        end: "bottom+=900%",
        // markers: true,
        invalidateOnRefresh: true
      }
    });
    tl.current.fromTo(
      ".js-card",
      {
        y: () => window.innerHeight - cardSizes.height / 3,
        scale: (i) => `1.${scaleBase - i}`,
        zIndex: "auto"
      },
      {
        y: -cardSizes.height,
        stagger: {
          each: -0.2
        },
        scale: 1,
        zIndex: (i) => 100 / i,
        ease: "power4.inOut"
      }
    );

  }, [{ scope: elRef}]);

  return (
    <div className="App" ref={elRef}>
      <div className="wrapper js-wrapper">
        <div className="card-wrapper js-card-wrapper">
          <div className="card js-card"></div>
          <div className="card js-card"></div>
          <div className="card js-card"></div>
          <div className="card js-card"></div>
          <div className="card js-card"></div>
          <div className="card js-card"></div>
        </div>
      </div>
      <footer className="footer">
        <ul>
          <li>footer item 1</li>
          <li>footer item 2</li>
          <li>footer item 3</li>
          <li>footer item 4</li>
          <li>footer item 5</li>
        </ul>
      </footer>
    </div>
  );
}
