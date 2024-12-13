import styles from './page.module.css'

export default function Home () {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.title}>Interactions overview</h1>
        <p className={styles.description}>
          Library of joyful interactions and animations
        </p>
      </div>
      <ul className={styles.grid}>
        <li className={styles.card}>
          <a href='/timeline-start'>Timeline getting started</a>
        </li>
        <li className={styles.card}>
          <a href='/timelline-dev-control'>Timeline dev control</a>
        </li>
        <li className={styles.card}>
          <a href='/multiline-underline'>Multi line hover</a>
        </li>
        <li className={styles.card}>
          <a href='/animated-text'>Animated text</a>
        </li>
        <li className={styles.card}>
          <a href='/mouse-follow'>Mouse follow</a>
        </li>
        <li className={styles.card}>
          <a href='/custom-cursor'>
            Custom cursor with multiple animation types
            <i>(width Zustand implementation)</i>
          </a>
        </li>
        <li className={styles.card}>
          <a href='/3d-header'>3D heder using react three fiber & GSAP</a>
        </li>
        <li className={styles.card}>
          <a href='/timeline'>Timeline</a>
        </li>
        <li className={styles.card}>
          <a href='/scroll-triggers-basics'>Scroll triggers basics cards</a>
        </li>
      </ul>
    </main>
  )
}
