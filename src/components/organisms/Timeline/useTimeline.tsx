import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useMedia } from 'react-use'
import { useWindowSize } from '@misc/useWindowSize'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { hasValue } from '@misc/helpers'

gsap.registerPlugin(ScrollTrigger)

export default function useTimeline (elRef: React.RefObject<HTMLElement>): any {
  const isWide = useMedia('(min-width: 768px)', false)
  const { viewportWidth } = useWindowSize()

  const el = gsap.utils.selector(elRef)
  const pinTimeline = useRef<GSAPTimeline | null>(null)
  const progressTimelines = useRef<GSAPTimeline[]>([])

  const killTimelines = (): void => {
    if (hasValue(pinTimeline.current)) {
      pinTimeline.current.scrollTrigger?.kill(true)
      pinTimeline.current.progress(0).kill()
      pinTimeline.current = null
    }
    if (hasValue(progressTimelines.current)) {
      progressTimelines.current.forEach((tl: GSAPTimeline): void => {
        tl.scrollTrigger?.kill(true)
        tl.progress(0).kill()
      })
      progressTimelines.current = []
    }
  }

  const setupTimeline = React.useCallback(() => {
    killTimelines()

    const timelineItems = el('.js-content')
    const image = el('.js-item-image')

    pinTimeline.current = gsap.timeline({
      scrollTrigger: {
        trigger: el('.js-image-wrapper'),
        start: 'top',
        end: 'bottom bottom',
        scrub: true,
        pin: true,
        markers: false,
        pinSpacing: false
      }
    })

    timelineItems.forEach(function (elem, index) {
      const e = gsap.utils.selector(elem)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: elem,
          start: 'top center+=10%',
          end: 'bottom center+=10%',
          scrub: 1,
          pin: false,
          markers: false
        }
      })
      tl.fromTo(e('.js-end-circle'), { scale: 0 }, { duration: 0.2, scale: 1 }, 'incircle')
      tl.fromTo(e('.js-progress'), { scaleY: 0 }, { scaleY: 1 }, 'in-=0.2')
      if (isWide && index !== 0) {
        tl.fromTo(image[index], { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, ease: 'power4.out' }, 'in-=0.3')
      }
      progressTimelines?.current.push(tl)
    })
  }, [isWide])

  useEffect(() => {
    setupTimeline()
  }, [viewportWidth, isWide])

  useEffect(() => {
    return () => {
      killTimelines()
    }
  }, [])
}
