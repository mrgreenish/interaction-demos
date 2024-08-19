import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import lerp from '../../../utils/lerp';

import { StyledPageScrollProgressBar } from './styles';

interface Props {}

export default function PageScrollProgressBar() {
  const scrollProgress = useRef(0);
  const scrollHeight = useRef(0);
  const requestTick = useRef(true);
  const progressBarRef = useRef<any>();
  const LERP_STRENGT: number = 0.15;

  const scrollHandler = () => {
    requestTick.current = true;
  };

  const resizeHandler = () => {
    resize();
  };

  const tickHandler = () => {
    if (requestTick.current) tick();
  };

  useEffect(() => {
    gsap.set(progressBarRef.current, { scaleX: 0 });
    resize();
    tick();
    setupEventHandlers();
    return () => {
      removeEventHandlers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function setupEventHandlers() {
    gsap.ticker.add(tickHandler);
    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', resizeHandler);
  }

  function removeEventHandlers() {
    gsap.ticker.remove(tickHandler);
    window.removeEventListener('scroll', scrollHandler);
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', resizeHandler);
  }

  function tick() {
    const pos = lerp(
      scrollProgress.current,
      getScrollPosToPrecent(),
      LERP_STRENGT,
    );
    gsap.set(progressBarRef.current, { scaleX: pos });
    if (scrollProgress.current === pos) {
      requestTick.current = false;
    }
    scrollProgress.current = pos;
  }

  function resize() {
    scrollHeight.current =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
  }

  function getScrollPosToPrecent() {
    const yOffset = window.scrollY || window.pageYOffset;
    return yOffset / scrollHeight.current;
  }

  return (
    <StyledPageScrollProgressBar>
      <div className="PageScrollProgressBar__bar" ref={progressBarRef} />
    </StyledPageScrollProgressBar>
  );
}
