import Head from "next/head";
import Header from "@components/organisms/3dHeader/Header/Component";
import styles from './page.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>iO digital</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
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
