'use client'

import React, { useRef } from 'react'
import Image from 'next/image'

import Paragraph from '@components/organisms/Timeline/Paragraph/Component'
import useTimeline from './useTimeline'
import { hasValue } from '@misc/helpers'
import clsx from 'clsx'

export interface timelineItem {
  id: string
  date?: string | null
  title: string
  image?: {
    src: string
    alt: string
  } | undefined
  body: string
}

interface Props {
  title: string
  items: timelineItem[]
}

export default function TimelineComponent ({ title, items }: Props): JSX.Element {
  const elRef = useRef<HTMLHeadingElement>(null)

  useTimeline(elRef)

  return (
    <div className='relative w-full overflow-hidden bg-eggshell-100 js-content-chapter' ref={elRef}>
      <div className='relative lg:grid lg:grid-cols-2'>
        <ul className='hidden lg:block js-image-wrapper'>
          {items.map((item, i) => (
            <li key={i}>
              {hasValue(item.image)
                ? <div className='relative overflow-hidden h-30 lg:absolute lg:top-0 lg:h-screen lg:w-full '>
                  <Image
                    className='object-cover w-screen h-full lg:min-h-screen lg:absolute lg:w-full lg:top-0 js-item-image'
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes='100vw'
                  />
                  {/* eslint-disable-next-line */}
                  </div>
                : <div className='w-screen h-full lg:min-h-screen lg:absolute lg:w-full lg:top-0 js-item-image' />}
            </li>
          ))}
        </ul>
        <ul className='timeline js-wrapper'>
          <li>
            <h2 className='px-5 mt-10 mb-5 heading-2'>
              {title}
            </h2>
          </li>
          {items.map((item, i) => (
            <li key={item.id}>
              <div className='lg:grid lg:grid-cols-1 js-item'>
                {hasValue(item.image) &&
                  <div className='relative block lg:hidden h-[70vh] lg:absolute lg:top-0 lg:h-screen lg:w-5/12'>
                    <Image
                      className='object-cover w-screen h-full lg:min-h-screen lg:absolute lg:w-full lg:top-0'
                      src={item.image.src}
                      alt={item.title}
                      fill
                      sizes='100vw'
                    />
                  </div>}
                <div className='main-grid js-content'>
                  <div className='col-span-10 lg:col-span-12'>
                    <div className='relative pt-5 pb-5 pl-10 lg:pb-10 lg:pt-2'>
                      {hasValue(item.date) &&
                        <div className='mb-3 text-base font-bold text-grey-100 '>
                          {item.date}
                        </div>}
                      <h3 className='heading-4'>
                        {item.title}
                      </h3>
                      <Paragraph html={item.body} />
                      <div>
                        <div className='progress-bar absolute top-0 lg:top-2 left-1 w-[1px] h-[calc(100%-0em)] lg:h-full bg-grey-100 -z-0' />
                        <div className={clsx('red', 'progress-bar absolute top-0 lg:top-2 left-1 ml-[-1px] w-[3px] h-[calc(100%-0em)] lg:h-full -z-1 origin-top js-progress')} />
                        <div className='absolute left-0 flex items-center justify-center w-2 h-2 border rounded-full top-5 lg:top-2 border-grey-100 bg-eggshell-100'>
                          <div className='w-1 h-1 rounded-full bg-grey-100' />
                        </div>
                        <div className='absolute left-0 flex items-center justify-center w-2 h-2 border rounded-full top-5 lg:top-2 border-grey-100 bg-eggshell-100'>
                          <div className={clsx('red', 'w-1 h-1 rounded-full js-end-circle')} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
