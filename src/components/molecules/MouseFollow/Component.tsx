import React, { MouseEvent, useRef } from 'react'
import { hasValue } from '@misc/helpers'
import gsap from 'gsap'
import { useIsomorphicLayoutEffect, useMedia } from 'react-use'
import styles from './styles.module.css'

const SPEED_X = 0.09
const SPEED_R = 0.01
const ROTATION_CAP = 38

export function MouseFollowComponent (props: { children: React.ReactNode }): JSX.Element {
  const elRef = useRef<HTMLDivElement>(null)
  const popupRef = useRef<HTMLDivElement>(null)

  const screenX = useRef(0)
  const xSet = useRef<any>(null)
  const ySet = useRef<any>(null)
  const rotationSet = useRef<any>(null)
  const requestTick = useRef(true)
  const isActive = useRef(false)

  const timestamp = useRef<number>(0)
  const lastMouseX = useRef(0)
  const prevClientPos = useRef({ x: 0, y: 0, rotation: 0 })
  const clientPos = useRef({ x: 0, y: 0, rotation: 0 })

  const isWide = useMedia('(min-width: 1024px)', true)

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

  return (
    <div
      className={styles.wrapper}
      onMouseMove={mouseMoveHandler}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseleaveHandler}
      ref={elRef}
    >
      <div className={styles.pointer} ref={popupRef}>
        {props.children}
      </div>
    </div>
  )
}

const MouseFollow = React.memo(MouseFollowComponent)
export default MouseFollow
