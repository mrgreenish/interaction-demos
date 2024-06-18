"use client";
import { useState } from "react";
import AnimatedText from "@components/atoms/AnimatedText/Component";
import styles from "../page.module.css";

export default function Home() {

  
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>interactions</h1>
      <p className={styles.description}>
        soon to be a collection of interactive experiences
      </p>
      <div
        className={styles.card}
      >
        <AnimatedText ariaLabel="Hello world So next line">
          <h1>Hello world So next line</h1>
        </AnimatedText>
      </div>
    </main>
  );
}
