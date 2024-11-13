'use client'

import { useState, useEffect, useRef } from 'react'
import Bowser from 'bowser'
import { hasValue } from './helpers'

export function useWindowSize (): { viewportWidth: number, viewportHeight: number, documentWidth: number, documentHeight: number } {
  const isClient = typeof window === 'object'
  const THROTTLE_DELAY = 250
  const eventTimeout = useRef<number | null>(null)

  function getSize (): { viewportWidth: number
    viewportHeight: number
    documentWidth: number
    documentHeight: number } {
    if (!isClient) {
      return {
        viewportWidth: 0,
        viewportHeight: 0,
        documentWidth: 0,
        documentHeight: 0
      }
    }
    const { body } = document
    const html = document.documentElement

    return {
      viewportWidth: Math.min(window.innerWidth ?? 0),
      viewportHeight: Math.min(window.innerHeight ?? 0),
      documentWidth: Math.max(
        body.scrollWidth,
        body.offsetWidth,
        html.clientWidth,
        html.scrollWidth,
        html.offsetWidth
      ),
      documentHeight: Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      )
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return
    }

    function resizeHandler (): void {
      if (!hasValue(eventTimeout.current)) {
        eventTimeout.current = window.setTimeout(() => {
          eventTimeout.current = null
          resize()
        }, THROTTLE_DELAY)
      }
    }

    function resize (): void {
      setWindowSize(getSize())
    }

    const resizeEvent =
      Bowser.parse(window.navigator.userAgent).platform.type !== 'desktop'
        ? 'orientationchange'
        : 'resize'
    window.addEventListener(resizeEvent, resizeHandler, false)
    return () => {
      window.removeEventListener(resizeEvent, resizeHandler, false)
    }
  }, [])

  return windowSize
}
