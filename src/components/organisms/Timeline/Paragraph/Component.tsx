import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import { hasValue } from '@misc/helpers'
import { FormattedText } from '@components/organisms/Timeline/FormattedText/Component'

import classNames from 'classnames'

interface ParagraphProps {
  html: string
  sideImage?: {
    src: string
    alt: string
    caption?: string | null
    width: number
    height: number
  }
  topImage?: {
    src: string
    alt: string
    caption?: string | null
    width: number
    height: number
  }
  bottomImage?: {
    src: string
    alt: string
    caption?: string | null
    width: number
    height: number
  }
}

interface crossLink
{
  id: string
  description: string
  link: {
    label: string
    href: string
  }
}

export default function Paragraph (props: ParagraphProps): JSX.Element {
  const [crossLinksData, setCrossLinksData] =
    useState<crossLink[] | null>(null)
  const { html, sideImage, topImage, bottomImage } = props
  const wrapperRef = useRef<HTMLDivElement>(null)
  const el = gsap.utils.selector(wrapperRef)

  useEffect(() => {
    const referenceLinks = el('[data-reference=on]')
    const crossLinksArr: crossLink[] = []

    referenceLinks.forEach((referenceLink: any) => {
      const obj: crossLink = {
        id: referenceLink.getAttribute('href').substring(1) ?? '',
        description: referenceLink.getAttribute('title') ?? '',
        link: {
          label: referenceLink.dataset.description ?? '',
          href: referenceLink.dataset.href ?? ''
        }
      }
      crossLinksArr.push(obj)
      setCrossLinksData(crossLinksArr)
    })
  }, [wrapperRef])

  return (
    <div className='paragraph--wrapper'>
      {topImage != null && (
        <div className='relative py-1'>
          <Image
            className='w-full h-auto pb-1'
            src={topImage.src}
            alt={topImage.alt}
            width={topImage.width}
            height={topImage.height}
            sizes='(max-width: 768px) 100vw, 930px'

          />
          {hasValue(topImage.caption) && (
            <i className='block pb-2 text-sm leading-3 text-grey-100'>
              {topImage.caption}
            </i>
          )}
        </div>
      )}

      <div
        className={classNames(
          hasValue(crossLinksData) && 'mb-8',
          hasValue(sideImage) && 'md:grid md:grid-cols-2 md:gap-x-1',
          hasValue(topImage) && '',
          hasValue(bottomImage) && ''
        )}
        ref={wrapperRef}
      >
        <FormattedText html={html} />
        {sideImage != null && (
          <div className='relative px-3 py-3 md:py-0'>
            <Image
              className='w-full h-auto'
              src={sideImage.src}
              alt={sideImage.alt}
              width={sideImage.width}
              height={sideImage.height}
              sizes='(max-width: 768px) 100vw, 460px'

            />
            {hasValue(sideImage.caption) && (
              <i className='block pb-2 pt-1 text-sm leading-3 text-grey-100'>
                {sideImage.caption}
              </i>
            )}
          </div>
        )}
      </div>
      {bottomImage != null && (
        <div className='relative py-3'>
          <Image
            className='w-full h-auto pb-1'
            src={bottomImage.src}
            alt={bottomImage.alt}
            width={bottomImage.width}
            height={bottomImage.height}
            sizes='(max-width: 768px) 100vw, 930px'

          />
          {hasValue(bottomImage.caption) && (
            <i className='block pb-2 text-sm leading-3 text-grey-100'>
              {bottomImage.caption}
            </i>
          )}
        </div>
      )}

    </div>
  )
}
