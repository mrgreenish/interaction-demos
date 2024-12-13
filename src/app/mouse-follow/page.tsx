"use client";
import Navigation from "@components/atoms/Navigation/Component";
import { ReadmePanel } from "@components/organisms/ReadmePanel/Component";
import MouseFollow
 from "@components/molecules/MouseFollow/Component";
import styles from "../page.module.css";

export default function MouseFollowPage() {
  
  return (
    <main className={styles.main}>
      <Navigation description="Smooth mouse follow with rotation" />
      <ReadmePanel
        title="Mouse Follow Component"
        description={`
          <p>A component that creates an element that follows the mouse cursor with smooth animation.</p>
          <pre><code>
const lerp = (current: number, target: number, multiplier: number): number => {
    return (1 - multiplier) * current + multiplier * target
  }

  const mouseEnterHandler = (e: MouseEvent): void => {
    if (!isWide) return
    isActive.current = true
    gsap.to(popupRef.current, { scale: 1, ease: 'back.out(1.4)', overwrite: true })
  }

  const mouseleaveHandler = (): void => {
    if (!isWide) return
    gsap.to(popupRef.current, { scale: 0, ease: 'power3.in', onComplete: () => { isActive.current = false } })
  }

  const mouseMoveHandler = (e: MouseEvent): void => {
    if (!isWide) return
    const rect = elRef.current?.getBoundingClientRect()
    if (!hasValue(rect)) return
    clientPos.current.x = e.clientX - rect.left
    clientPos.current.y = e.clientY - rect.top
    screenX.current = e.screenX - rect.top
  }

  const tickHandler = (): void => {
    if (!isActive.current) return
    if (!isWide) return
    if (requestTick.current) {
      requestTick.current = false
      ticker()
    }
  }

  const ticker = (): void => {
    const now = Date.now()
    const dt = now - timestamp.current
    const dx = screenX.current - lastMouseX.current
    timestamp.current = now
    lastMouseX.current = screenX.current
    const speedX = -gsap.utils.clamp(-ROTATION_CAP, ROTATION_CAP, Math.round((dx / dt) * 50))

    const rotPos = lerp(prevClientPos.current.rotation, speedX, SPEED_R)
    let xPos = lerp(prevClientPos.current.x, clientPos.current.x, SPEED_X)
    let yPos = lerp(prevClientPos.current.y, clientPos.current.y, SPEED_X)
    xPos = Math.round(xPos * 100) / 100
    yPos = Math.round(yPos * 100) / 100

    if (xPos === prevClientPos.current.x) {
      requestTick.current = true
      return
    }

    xSet.current(xPos)
    ySet.current(yPos)
    rotationSet.current(rotPos)

    prevClientPos.current = { x: xPos, y: yPos, rotation: rotPos }
    requestTick.current = true
  }

  useIsomorphicLayoutEffect(() => {
    if (!isWide) return
    gsap.set(popupRef.current, { scale: 0 })
    xSet.current = gsap.quickSetter(popupRef.current, 'x', 'px')
    ySet.current = gsap.quickSetter(popupRef.current, 'y', 'px')
    rotationSet.current = gsap.quickSetter(
      popupRef.current,
      'rotate',
      'deg'
    )
    gsap.ticker.add(tickHandler)
    return () => {
      gsap.ticker.remove(tickHandler)
    }
  }, [])
          </code></pre>
        `}
      />
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
