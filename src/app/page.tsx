import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>interactions</h1>
      <p className={styles.description}>
        soon to be a collection of interactive experiences
      </p>
      <ul className={styles.grid}>
        <li className={styles.card}>
          <a href="/multiline-underline">multi line hover</a>
        </li>
        <li className={styles.card}>
          <a href="/animated-text">animated text</a>
        </li>
      </ul>
    </main>
  );
}
