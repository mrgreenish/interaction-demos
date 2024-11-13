'use client'
import { useRef, useEffect } from 'react'
import clsx from 'clsx'
import gsap from 'gsap'

import SplitText from '@lib/gsap/SplitText.js'
import { useWindowSize } from '@misc/useWindowSize'

import { hasValue } from '@misc/helpers'
import styles from "./animatedLines.module.css";

interface Props {
  children: React.ReactNode
  mouseHandler?: 'play' | 'reverse'
  className?: string
  classLines?: string
}
gsap.registerPlugin(SplitText);

export default function AnimatedLines (props: Props): JSX.Element {
  const { children, mouseHandler, className, classLines } = props
  const elementRef = useRef<HTMLDivElement>(null)
  const header = useRef<any>(null)
  const tl = useRef<any>()
  const st = useRef<any>()

  const splittext = (): void => {
    if (hasValue(elementRef.current) && hasValue(elementRef.current.children)) {
      st.current = new SplitText(elementRef.current.children, { type: 'lines', linesClass: clsx(styles.lines, (hasValue(classLines) ? classLines : 'reference-lines') + ' js-lines') })
      return
    }

    st.current = new SplitText(elementRef.current, { type: 'lines', linesClass: (hasValue(classLines) ? classLines : 'reference-lines') + ' js-lines' })
  }

  const timeline = (): void => {
    if (hasValue(tl.current)) tl.current.kill()
    tl.current = gsap.timeline({ paused: true })
    tl.current.fromTo(header.current((hasValue(classLines) ? '.' + classLines : '.reference-lines')), { '--line-scale': 0 }, { '--line-scale': 1, stagger: { amount: 0.3 } }, 'in')
  }

  useEffect(() => {
    header.current = gsap.utils.selector(elementRef)

    document.fonts.ready.then(function (): void {
      if (document.fonts.check('5rem Helvetica Now Text W05')) {
        gsap.delayedCall(0.2, splittext)
        gsap.delayedCall(0.5, timeline)
      }
    }).catch(() => {
      gsap.delayedCall(0.2, splittext)
      gsap.delayedCall(0.5, timeline)
    })
    return () => {
      if (hasValue(tl.current)) tl.current.kill()
      if (hasValue(st.current)) st.current = null
    }
  }, [splittext, timeline])

  useEffect(() => {
    if (hasValue(st.current)) {
      st.current.revert()
      splittext()
      timeline()
    }
  }, [useWindowSize()])

  useEffect(() => {
    if (hasValue(mouseHandler) && hasValue(tl.current)) {
      if (mouseHandler === 'play') {
        tl.current.timeScale(1).play()

        return
      }

      tl.current.timeScale(2).reverse()
    }
  }, [mouseHandler])

  return (
    <div ref={elementRef} className={clsx(styles.lines, className)}>{children}</div>
  )
}
