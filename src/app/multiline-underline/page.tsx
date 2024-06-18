"use client";
import { useState } from "react";
import Image from "next/image";
import AnimatedLines from "@components/atoms/AnimatedLines/Component";
import styles from "../page.module.css";

export default function Home() {
  const [animateText, setAnimateText] = useState<
    "play" | "reverse" | undefined
  >();

    const mouseHandler = (event: "play" | "reverse"): void => {
      setAnimateText(event);
    };
  
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>interactions</h1>
      <p className={styles.description}>
        soon to be a collection of interactive experiences
      </p>
      <div
        className={styles.card}
        onMouseEnter={() => mouseHandler("play")}
        onMouseLeave={() => mouseHandler("reverse")}
      >
        <AnimatedLines mouseHandler={animateText}>
          <h1>Hello world<br/>
          So next line
        </h1>
        </AnimatedLines>
      </div>
    </main>
  );
}
