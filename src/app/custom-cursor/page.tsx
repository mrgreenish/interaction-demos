import Head from "next/head";
import Cursor from "@components/molecules/CustomCursor/Cursor/Component";
import { CurrentCursorDisplay } from "@components/molecules/CustomCursor/CurrentCursorDisplay/Component";
import CursorSetter from '@components/molecules/CustomCursor/CursorSetter/Component'
import styles from './page.module.css';
import globalStyles from '../page.module.css'
import Navigation from "@/components/atoms/Navigation/Component";

export default function Home() {

  return (
    <>
      <main className={globalStyles.main}>
      <Navigation description="Custom cursor with different styles" />
        <Cursor />
        <div className={styles.content}>
          {/* <h1>{currentCursor}</h1> */}
          <CurrentCursorDisplay/>
          <div className={styles.grid}>
          <CursorSetter cursor="shrink">
            <div className={styles.box}></div>
          </CursorSetter>
          <CursorSetter cursor="pill">
            <div className={styles.box}></div>
          </CursorSetter>
          <CursorSetter cursor="line">
            <div className={styles.box}></div>
          </CursorSetter>
          <CursorSetter cursor="dot" motion="snap">
            <div className={styles.box}></div>
          </CursorSetter>
          </div>
        </div>
      </main>
    </>
  );
}
