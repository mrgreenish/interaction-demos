import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitText from '@plugins/gsap/SplitText';
import { useAppContext } from '@misc/states';
import * as styled from './Styles';

interface Props {
  children: any;
  className?: string;
  scrub?: boolean;
  staticAnimation?: boolean;
  callBack?: any;
  delay?: number;
}
gsap.registerPlugin(SplitText);

const AnimatedText: React.FC<Props> = props => {
  const el = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const splitContent = useRef<any>();
  const splitLines = useRef<any>();
  const transitionInTimeline = useRef<any>();

  const { fontsLoaded, device } = useAppContext();

  // const size = useWindowSize();

  const staticCompleteHandler = () => {
    if (props.callBack) {
      props.callBack();
    }
  };

  const initSplitText = () => {
    if (splitContent.current) splitContent.current.revert();
    splitContent.current = new SplitText(contentRef.current, {
      type: 'lines',
      linesClass: 'line',
    });
    splitLines.current = splitContent.current.lines;
  };

  const transitionIn = () => {
    if (!contentRef.current) return;
    transitionInTimeline.current = gsap.timeline({ delay: props.delay || 0.1 });

    if (props.staticAnimation) {
      transitionInTimeline.current.from(splitLines.current, {
        duration: 0.4,
        stagger: 0.13,
        y: 6,
        opacity: 0,
        ease: 'power4.out',
        onComplete: staticCompleteHandler,
      });
    } else {
      transitionInTimeline.current.from(splitLines.current, {
        duration: 5,
        stagger: 1,
        y: 10,
        opacity: 0,
        ease: 'power4.out',
        scrollTrigger: {
          id: 'triggerTitle',
          trigger: el.current,

          scrub: props.scrub || 2,
        },
      });
    }
  };

  useEffect(() => {
    if (fontsLoaded) {
      initSplitText();
      transitionIn();
    }
    const tm = transitionInTimeline.current;
    return () => {
      if (tm) tm.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fontsLoaded, device]);

  return (
    <styled.AnimatedTitle ref={el}>
      <span ref={contentRef} className={props.className || ''}>
        {props.children}
      </span>
    </styled.AnimatedTitle>
  );
};

export default AnimatedText;
