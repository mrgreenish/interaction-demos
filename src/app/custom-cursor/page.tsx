import Head from "next/head";
import clsx from "clsx";
import Cursor from "@components/molecules/CustomCursor/Cursor/Component";
import { CurrentCursorDisplay } from "@components/molecules/CustomCursor/CurrentCursorDisplay/Component";
import CursorSetter from "@components/molecules/CustomCursor/CursorSetter/Component";
import styles from "./page.module.css";
import Navigation from "@/components/atoms/Navigation/Component";
import { ReadmePanel } from "@components/organisms/ReadmePanel/Component";
import globalStyles from "../page.module.css";

export default function Home() {
  return (
    <>
      <main className={clsx(globalStyles.main, globalStyles.inverted)}>
        <Navigation description="Custom cursor with different styles" />
        <ReadmePanel
          title="Simple rotation"
          description={`
            <pre><code>
<h2>How it Works</h2>
The default browser cursor is hidden using CSS pointer-events: none
The custom cursor follows the mouse movement using GSAP animations
When hovering over elements wrapped in CursorSetter:
The cursor shape changes based on the specified type
Optional snap-to-element behavior can be enabled
The cursor maintains smooth movement using:
Separate tracking for the center dot (faster) and outer cursor (slower)
GSAP's optimized animation system
Canvas-based rendering for the outer cursor shape
This creates a fluid, interactive cursor experience that can adapt its appearance and behavior based on what the user is hovering over.

<h2>Movement System</h2>
The cursor movement is handled using GSAP for smooth animations:
Uses gsap.quickTo() for performance optimization
Separate tracking for the center dot and outer cursor
Handles both normal movement and snap-to-element behavior


<h2>State Management</h2>
Uses Zustand for state management with two main stores:
useCursorStore: Manages the current cursor type
useCursorMotionStore: Manages cursor motion behavior (default/snap)

  </pre></code>`}
        />
        <Cursor />
        <div className={styles.content}>
          {/* <h1>{currentCursor}</h1> */}
          <CurrentCursorDisplay />
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
