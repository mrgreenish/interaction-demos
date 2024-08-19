'use client'
import { useState } from 'react'
import AnimatedLines from '@components/atoms/AnimatedLines/Component'
import Navigation from '@/components/atoms/Navigation/Component'
import styles from '../page.module.css'
import pageStyles from './page.module.css'

export default function Home () {
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
    </main>
  )
}
