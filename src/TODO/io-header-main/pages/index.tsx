import Head from "next/head";
import Header from "./../components/Header";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>iO digital</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Header />
        <div className={styles.content}>
          <h1>iO</h1>
          <br />
          <h2>Onze expertise & skills</h2>
        </div>
      </main>
    </>
  );
}
