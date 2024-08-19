"use client";
import { useState } from "react";
import MouseFollow
 from "@components/molecules/MouseFollow/Component";
import styles from "../page.module.css";

export default function MouseFollowPage() {
  
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>interactions</h1>
      <p className={styles.description}>
        soon to be a collection of interactive experiences
      </p>
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
