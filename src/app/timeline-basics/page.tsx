import TimelineBasics from '@components/organisms/TimelineBasics/Component'
import Navigation from '@/components/atoms/Navigation/Component'
import styles from '../page.module.css'
import pageStyles from './page.module.css'

export default function Home () {
  return (
    <main className={styles.main}>
      <Navigation description='Text animation when in view., scroll bellow the content to see when on scroll' />
      <br />
      <br />
      <TimelineBasics />
    </main>
  )
}
