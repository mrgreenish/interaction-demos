import Navigation from "@/components/atoms/Navigation/Component";
import Header from "@components/organisms/3dHeader/Header/Component";
import styles from './page.module.css'
import globalStyles from '../page.module.css'



export default function Home() {
  return (

    <main className={globalStyles.main}>
        <Navigation description="3d header using react three fiber and GSAP" />
        <Header />
        <div className={styles.content}>
          <h1>iO</h1>
          <br />
          <h2>Onze expertise & skills</h2>
        </div>
      </main>
  );
}
