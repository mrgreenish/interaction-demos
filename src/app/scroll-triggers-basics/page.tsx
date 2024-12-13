import ScrollTriggerCards from '@components/organisms/ScrollTriggerCards/Component'
import Navigation from '@/components/atoms/Navigation/Component'
import { ReadmePanel } from '@/components/organisms/ReadmePanel/Component'
import styles from '../page.module.css'
import pageStyles from './page.module.css'

export default function Home () {
  return (
    <main className={pageStyles.main}>
      <div className={pageStyles.top}>

          <Navigation description='Scroll Triggers Basics' />


          <ReadmePanel
            title="Scroll Trigger Cards Animation"
            description={`
          <p>This example demonstrates a stacked cards animation using GSAP ScrollTrigger.</p>

          <h3>Key Features:</h3>
          <ul>
            <li>Cards stack and animate based on scroll position</li>
            <li>Smooth parallax-like effect</li>
            <li>Pin-based scrolling animation</li>
          </ul>

          <h3>Implementation:</h3>
          <pre><code>
          useGSAP(() => {
            const el = gsap.utils.selector(elRef);
            let scaleBase = el(".js-card").length;
            
            tl.current = gsap.timeline({
              scrollTrigger: {
                trigger: ".js-card-wrapper",
                scrub: 0.3,
                pin: true,
                start: "top-=10%",
                end: "bottom+=900%",
                invalidateOnRefresh: true
              }
            });

            tl.current.fromTo(
              ".js-card",
              {
                y: () => window.innerHeight - cardSizes.height / 3,
                scale: (i) => \`1.\${scaleBase - i}\`,
                zIndex: "auto"
              },
              {
                y: -cardSizes.height,
                stagger: { each: -0.2 },
                scale: 1,
                zIndex: (i) => 100 / i,
                ease: "power4.inOut"
              }
            );
          });
          </code></pre>
        `}
          />

      </div>
      <ScrollTriggerCards />
    </main>
  )
}
