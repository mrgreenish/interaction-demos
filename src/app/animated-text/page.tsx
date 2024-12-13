import AnimatedText from '@components/atoms/AnimatedText/Component'
import Navigation from '@/components/atoms/Navigation/Component'
import { ReadmePanel } from '@/components/organisms/ReadmePanel/Component'
import styles from '../page.module.css'
import pageStyles from './page.module.css'

export default function AnimatedTextPage () {
  return (
    <main className={styles.main}>
      <Navigation description='Text animation when in view., scroll bellow the content to see when on scroll' />
      <ReadmePanel
        title="Animated Text Implementations"
        description={`
          <p>This page demonstrates three different implementations of text animations using GSAP:</p>

          <h3>1. Basic In-View Animation</h3>
          <pre><code>
          // Implementation with GSAP SplitText
          useGSAP(() => {
            const textSplitObj = new SplitText(posableElements, {
              type: 'lines,words,chars'
            });
            
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: el.current,
                once: true
              }
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
                stagger: { amount: 0.45 },
                ease: 'power4.inOut'
              }
            );
          });
          </code></pre>

          <h3>2. Scroll-Triggered Animation</h3>
          <p>Same implementation as above but with scroll trigger enabled, animating as you scroll past the text.</p>
          <pre><code>
          useGSAP(() => {
            // ... same setup ...
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: el.current,
                scrub: 0.3 // Enables scroll-based animation
              }
            });
            // ... same animation ...
          });
          </code></pre>
        `}
      />
      <br />
      <br />
      <AnimatedText ariaLabel='Hello world So next line'>
        <h1 className={pageStyles.title}>Hello world So next line</h1>
      </AnimatedText>
      <br />
      <div className={styles.largeBlock}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <p>Nisi ut aliquip ex ea commodo consequat.</p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore.
        </p>
      </div>
      <br />
      <br />
      <AnimatedText ariaLabel='Hello world So next line'>
        <h1 className={pageStyles.title}>Hello world So next line</h1>
      </AnimatedText>
      <div className={styles.largeBlock}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <p>Nisi ut aliquip ex ea commodo consequat.</p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore.
        </p>
      </div>
      <br />
      <br />
      <AnimatedText scrub ariaLabel='Hello world So next line'>
        <h1 className={pageStyles.title}>Hello world So next line</h1>
      </AnimatedText>
      <div className={styles.largeBlock}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <p>Nisi ut aliquip ex ea commodo consequat.</p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore.
        </p>
      </div>
    </main>
  )
}
