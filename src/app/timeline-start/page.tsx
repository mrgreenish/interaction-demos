import TimelineBasicsStart from '@components/organisms/TimelineBasicsStart/Component'
import Navigation from '@/components/atoms/Navigation/Component'
import styles from '../page.module.css'
import pageStyles from './page.module.css'

export default function TimelineStart () {
  return (
    <main className={styles.main}>
      <Navigation description='Timeline basics' />
      <br />
      <br />
      <TimelineBasicsStart />
    </main>
  )
}
