'use client'

import React, { useRef } from 'react'
import gsap, { random } from 'gsap'
import { useGSAP } from '@gsap/react'
import { GSDevTools } from '../../../lib/gsap/GSDevTools'
import clsx from 'clsx'
import styles from './styles.module.css'

gsap.registerPlugin(GSDevTools)

export default function TimelineBasics (): JSX.Element {
  const elRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    if (!elRef.current) return
    if (!circleRef.current) return
    gsap.set(elRef.current, { autoAlpha: 1 })
    const tl = gsap.timeline({
      defaults: {
        onComplete: () => console.log('done')
      }
    })
    tl.to('.js-box', { x: 100, duration: 1 })
    tl.to('.js-box', { x: () => window.innerWidth - 100, duration: 1 })
    tl.to('.js-box', { stagger: 0.1, x: 0, duration: 1 })
    tl.to('.js-box', {
      stagger: {
        each: 0.1,
        from: 'end'
      },
      x: 300,
      duration: 0.3,
      ease: 'power4.inOut'
    })
    tl.to(
      '.js-box',
      {
        stagger: {
          each: 0.1,
          from: 'end'
        },
        x: 300,
        duration: 0.3,
        ease: 'power4.inOut'
      },
      'backWithStagger'
    )
    tl.fromTo('.js-circle', {scale: 0}, {scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.6)'})
    // https://gsap.com/docs/v3/Eases/ check out ease visualizer

    tl.to(
      '.js-box',
      {
        stagger: {
          each: 0.05,
          from: 'start'
        },
        x: () => window.innerWidth - 242,
        top: '180px',
        duration: 1,
        ease: 'elastic.out(1, 0.6)'
      },
      'toCircle-=0.3'
    )
    tl.to(
      '.js-circle',
      {
        scale: 0.5,
        duration: 2,
        ease: 'elastic.out(1, 0.6)'
      },
      'shrink-=0.9'
    )
    tl.to('.js-circle', {autoAlpha: 0, scale: 0, duration: 0.5}, 'hideCircle')
    tl.fromTo(
      '.js-box',
      {
        x: () => window.innerWidth - 242
      },
      {
        stagger: {
          each: 0.1,
          from: 'start'
        },
        x: 0,
        duration: 2,
        ease: 'elastic.out(1, 0.6)',
        repeat: 4,
        yoyoEase: 'power4.inOut',
        yoyo: true
      },
      'loop-=0.5'
    )
    tl.to('.js-box', {scale: 0, autoAlpha: 0, duration: 0.5}, 'hideBoxes')

    GSDevTools.create({ animation: tl })
  }, [elRef])

  return (
    <div ref={elRef} className='opacity-0'>
      <h2>Timeline Basics</h2>
      <p>
        Timeline is a powerful tool that allows you to create complex animations
        with precise control over timing and sequencing.
      </p>
      <div className='relative w-[100vw] h-[100vh]'>
        <div className='w-10 h-10 bg-pink-100 top-10 absolute js-box'></div>
        <div className='w-10 h-10 bg-pink-200 top-10 absolute js-box'></div>
        <div className='w-10 h-10 bg-pink-300 top-20 absolute js-box'></div>
        <div className='w-10 h-10 bg-pink-400 top-30 absolute js-box'></div>
        <div className='w-10 h-10 bg-pink-500 top-40 absolute js-box'></div>
        <div className='w-10 h-10 bg-pink-600 top-50 absolute js-box'></div>
        <div
          className='w-30 h-30 border-2 border-purple-400 rounded-full top-10 absolute right-10 top-[100px] js-circle'
          ref={circleRef}
        ></div>
      </div>
    </div>
  )
}
