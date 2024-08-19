import AnimatedText from '@components/atoms/AnimatedText/Component'
import Navigation from '@/components/atoms/Navigation/Component'
import styles from '../page.module.css'
import pageStyles from './page.module.css'

export default function Home () {
  return (
    <main className={styles.main}>
      <Navigation description='Text animation when in view., scroll bellow the content to see when on scroll' />
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
