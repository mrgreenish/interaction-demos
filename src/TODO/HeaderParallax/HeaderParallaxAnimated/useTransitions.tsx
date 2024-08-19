import Bowser from 'bowser';
import { useIsomorphicLayoutEffect } from '@react-hookz/web';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import SplitText from '@efteling-frontend/libs/gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);
const MOVE_STRENGTH = 300;

export function useTransitions(
  elRef: React.RefObject<HTMLElement>,
  imagesLoaded: string[] | null,
  callBack: () => void
): void {
  useIsomorphicLayoutEffect(() => {
    ScrollTrigger.config({
      ignoreMobileResize: true,
    });

    const device = Bowser.getParser(window.navigator.userAgent).getPlatform().type;
    const mm = gsap.matchMedia();
    // prettier-ignore
    mm.add(
      {
        isDesktop: `(min-width: 480px)`,
        isMobile: `(max-width: 479px)`,
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        let isDesktop = false;
        // let reduceMotion = false;

        if (context.conditions) {
          isDesktop = context.conditions.isDesktop;
          // reduceMotion = context.conditions.reduceMotion; // #TODO
        }

        // pin element to top while in view
        ScrollTrigger.create({
          id: 'fixed-header',
          trigger: '.js-wrapper',
          start: '0',
          end: 'bottom',
          pin: true,
          pinSpacing: false,
          onLeave: () => {
            gsap.set('.js-wrapper', { display: 'none' });
          },
          onEnterBack: () => {
            gsap.set('.js-wrapper', { display: 'block' });
          },
        });

        const payoffSplitText = new SplitText('.js-payoff-text', {
          type: 'words,chars',
        });
        if (!imagesLoaded) return;

        // payoff animation
        const payoffIn = gsap.timeline({ paused: true });
        payoffIn.set('.js-payoff', { opacity: 1 }, 'set');

        payoffIn.fromTo(
          payoffSplitText.chars,
          { scale: 0, opacity: 1, y: 40, rotationY: 45 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            rotationY: 0,
            stagger: { amount: 0.5 },
            duration: 1,
            ease: 'back.out(1.7)',
          },
          'chars'
        );
        payoffIn.fromTo(
          '.js-button',
          { opacity: 0, y: 100, duration: 0.7 },
          { opacity: 1, y: 0, ease: 'power4.inOut)' },
          'button'
        );

        // SCROLL
        const initScrollTl = () => {
          callBack();
          introTl.kill();
          const tl = gsap.timeline({
            paused: false,
            scrollTrigger: {
              immediateRender: false,
              id: 'parallax',
              trigger: elRef.current,
              scrub: device === 'mobile' ? true : 0.35,
              pin: false,
              start: 'top',
              end: 'bottom',
              markers: false,
              invalidateOnRefresh: true,
            },
          });
          tl.fromTo(
            '.js-payoff-text',
            { opacity: 1, y: 0 },
            { opacity: 0, duration: 0.3, y: 0, ease: 'power4.out' },
            'scene-down-intro'
          );
          gsap.utils.toArray<HTMLElement>('.js-scene-layer').forEach((layer: HTMLElement) => {
            const depth = isDesktop
              ? Number(layer.dataset.depth)
              : layer.dataset.mobileDepth
              ? Number(layer.dataset.mobileDepth)
              : Number(layer.dataset.depth) || 0;
            const movement = -(MOVE_STRENGTH * depth);
            tl.to(layer, { y: movement, ease: 'none' }, 'scene-down-intro');
          });
        };
        //
        // INTRO
        const introTl = gsap.timeline({ onComplete: initScrollTl, paused: false });

        introTl.to(
          ['.js-scene'],
          { y: '-100vh', duration: 4, ease: 'power4.inOut' },
          'scene-down-intro'
        );

        gsap.utils.toArray<HTMLElement>('.js-scene-layer').forEach((layer) => {
          const depth = Number(layer.dataset.depth) || 0;
          if (layer.dataset.fixed === 'true') {
            introTl.fromTo(
              layer,
              { y: 0 },
              { y: '100vh', ease: 'power4.inOut', duration: 4 },
              'scene-down-intro'
            );
            return;
          }
          const movement = -(MOVE_STRENGTH * depth);
          introTl.fromTo(
            layer,
            { y: -movement },
            { y: 0, ease: 'power4.inOut', duration: 4 },
            'scene-down-intro'
          );
          introTl.call(
            () => {
              payoffIn.play();
            },
            [],
            '-=1.5'
          );
        });
      },
      elRef
    );

    return () => {
      mm.revert();
      if (ScrollTrigger.getById('parallax')) ScrollTrigger.getById('parallax')?.kill();
    };
  }, [imagesLoaded]);
}
