import TimelineBasics from '@components/organisms/TimelineBasics/Component'
import Navigation from '@/components/atoms/Navigation/Component'
import styles from '../page.module.css'
import pageStyles from './page.module.css'

export default function Home () {
  return (
    <main className={styles.main}>
      <Navigation description='A simple timeline util that lets you play, pause, reverse, restart, and scrub the timeline.' />
      <br />
      <br />
      <TimelineBasics />
    </main>
  )
}
