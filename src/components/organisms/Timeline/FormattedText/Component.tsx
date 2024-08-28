import React from 'react'
import clsx from 'clsx'
import { sanitize } from 'isomorphic-dompurify'

interface Props {
  html: string
  className?: string
}

export const FormattedText = React.forwardRef(
  (props: Props, ref: React.Ref<HTMLDivElement>): JSX.Element => {
    const SANITIZE_CONFIG = {
      ADD_ATTR: ['target', 'rel']
    }

    const EXTERNAL_TARGET = 'target="_blank"'
    const APPENDED_TARGET = 'target="_blank" rel="noopener noreferrer"'

    return (
      <div
        ref={ref}
        dangerouslySetInnerHTML={{
          __html: sanitize(
            props.html.replace(EXTERNAL_TARGET, APPENDED_TARGET),
            SANITIZE_CONFIG
          )
        }}
        className={clsx('formatted-text', props.className)}
      />
    )
  }
)

FormattedText.displayName = 'FormattedText'
