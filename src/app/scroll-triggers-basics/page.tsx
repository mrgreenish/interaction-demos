import ScrollTriggerCards from '@components/organisms/ScrollTriggerCards/Component'
import Navigation from '@/components/atoms/Navigation/Component'
import styles from '../page.module.css'
import pageStyles from './page.module.css'

export default function Home () {
  return (
    <main className={pageStyles.main}>
      <div className={pageStyles.top}>
        <Navigation description='Scroll Triggers Basics' />
      </div>
      <ScrollTriggerCards />
    </main>
  )
}
