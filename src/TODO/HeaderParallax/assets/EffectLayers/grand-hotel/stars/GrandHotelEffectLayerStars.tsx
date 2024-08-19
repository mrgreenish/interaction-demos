import { FC, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@react-hookz/web';
import gsap from 'gsap';
import clsx from 'clsx';

import style from './styles.module.css';

const GrandHotelEffectLayerStars: FC = () => {
  const el = useRef<HTMLDivElement>(null);
  const playing = useRef<boolean>(false);

  useIsomorphicLayoutEffect(() => {
    // prettier-ignore
    const ctx = gsap.context(() => {
      gsap.fromTo('.js-stars', { opacity: 0 }, { opacity: 1, duration: 2 });

      const starsTl = gsap.timeline({ repeat: -1, yoyo: true, repeatRefresh: true });

      // starsTl.to('.js-star', {
      //   duration: 'random(0.1, 0.5)',
      //   opacity: 'random(0.3, 1)',
      //   stagger: 0.1,
      //   repeatRefresh: true,
      // });
      gsap.utils
        .toArray<HTMLElement>('.js-star')
        .forEach((star: HTMLElement) => {
            starsTl.to(star, { duration: 'random(0.1, 0.5)', opacity: 'random(0.3, 1)', delay: 'random(0, 0.1)', repeatRefresh: true}, 'stars');
        });

      const scrollHandler = () => {
        if (window.scrollY > window.innerHeight / 2) {
          if (!playing.current) return;
          starsTl.pause();
          playing.current = false;
        } else {
          if (playing.current) return;
          starsTl.play();
          playing.current = true;
        }
      };
      document.addEventListener('scroll', scrollHandler);
      return () => {
        document.removeEventListener('scroll', scrollHandler);
      };
    }, [el]);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={el}>
      <div className={clsx(style.stars, 'js-stars')}>
        <div className={clsx(style.star, 'js-star')} />
        <div className={clsx(style.star, 'js-star')} />
        <div className={clsx(style.star, 'js-star')} />
        <div className={clsx(style.star, 'js-star')} />
        <div className={clsx(style.star, 'js-star')} />
        <div className={clsx(style.star, 'js-star')} />
        <div className={clsx(style.star, 'js-star')} />
        <div className={clsx(style.star, 'js-star')} />
      </div>
    </div>
  );
};

export default GrandHotelEffectLayerStars;
