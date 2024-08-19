
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useMedia } from 'react-use'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { hasValue } from '@misc/helpers'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  className?: string
  children: React.ReactNode
  wrapperRef: React.RefObject<HTMLElement>
  direction: number
  axis: 'x' | 'y'
  mobileAxis?: 'x' | 'y'
  mobileDirection?: number
}

export default function Parallax (props: Props): JSX.Element {
  const elRef = useRef<HTMLDivElement>(null)
  const tl = useRef<GSAPTimeline>(gsap.timeline({ paused: true }))
  const isWide = useMedia('(min-width: 768px)', true)

  useEffect(() => {
    if (hasValue(tl.current)) tl.current.kill()

    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: props.wrapperRef.current,
        scrub: 0.3,
        start: 'top 80%',
        end: isWide ? 'bottom 10%' : 'center 10%',
        markers: false
      }
    })

    const direction = isWide ? props.direction ?? -50 : props.mobileDirection ?? -50
    const axis = isWide ? props.axis ?? 'x' : props.mobileAxis ?? 'x'

    gsap.set(elRef.current, { clearProps: 'all' })

    if (axis === 'x') {
      tl.current.fromTo(elRef.current, { xPercent: direction }, { xPercent: 0, ease: 'power1.out' }, 'parallax')
    } else {
      tl.current.fromTo(elRef.current, { yPercent: direction }, { yPercent: 0, ease: 'power1.out' }, 'parallax')
    }
  }, [isWide])

  useEffect(() => {
    return () => {
      if (hasValue(tl.current)) tl.current.kill()
    }
  }, [])

  return (
    <div ref={elRef} className={props.className ?? ''}>
      {props.children}
    </div>
  )
}
