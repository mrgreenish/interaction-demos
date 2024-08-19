"use client";
import Navigation from "@components/atoms/Navigation/Component";
import MouseFollow
 from "@components/molecules/MouseFollow/Component";
import styles from "../page.module.css";

export default function MouseFollowPage() {
  
  return (
    <main className={styles.main}>
      <Navigation description="Smooth mouse follow with rotation" />
      <div className={styles.largeBlock}>
        <MouseFollow>
          <h1>Hello world<br/>
          So next line
        </h1>
        </MouseFollow>
      </div>
    </main>
  );
}
