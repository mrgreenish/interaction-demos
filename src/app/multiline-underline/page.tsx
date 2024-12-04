'use client'
import { useState } from 'react'
import AnimatedLines from '@components/atoms/AnimatedLines/Component'
import Navigation from '@/components/atoms/Navigation/Component'
import { ReadmePanel } from '@/components/organisms/ReadmePanel/Component'
import styles from '../page.module.css'
import pageStyles from './page.module.css'


export default function Home() {
  const [animateText, setAnimateText] = useState<
    'play' | 'reverse' | undefined
  >()

  const mouseHandler = (event: 'play' | 'reverse'): void => {
    setAnimateText(event)
  }

  return (
    <main className={styles.main}>
      <Navigation description='Hover with multiline underline with stagger' />
      <div
        className={styles.card}
        onMouseEnter={() => mouseHandler('play')}
        onMouseLeave={() => mouseHandler('reverse')}
      >
        <AnimatedLines mouseHandler={animateText}>
          <a className={pageStyles.title} href="/">
            Hello world
            <br />
            So next line
          </a>
        </AnimatedLines>
      </div>
      <ReadmePanel 
        title="Hover with multiline underline with stagger" 
        description={`
          <pre><code>
          // Split text into lines using GSAP SplitText
          const splittext = () => {
            st.current = new SplitText(elementRef.current.children, { 
              type: 'lines', 
              linesClass: 'reference-lines js-lines' 
            });
          }

          // Create animation timeline
          const timeline = () => {
            const tl = gsap.timeline({ paused: true });
            tl.fromTo('.reference-lines', 
              { '--line-scale': 0 }, 
              { '--line-scale': 1, stagger: { amount: 0.3 } }
            );
          }

          // Handle mouse events
          const mouseHandler = (event: 'play' | 'reverse') => {
            if (event === 'play') {
              tl.timeScale(1).play();
            } else {
              tl.timeScale(2).reverse();
            }
          }

          // Usage in component
          <div
            onMouseEnter={() => mouseHandler('play')}
            onMouseLeave={() => mouseHandler('reverse')}
          >
            <AnimatedLines mouseHandler={animateText}>
              <a>Hello world<br/>So next line</a>
            </AnimatedLines>
          </div>
          </code></pre>`} 
      />
    </main>
  )
}
