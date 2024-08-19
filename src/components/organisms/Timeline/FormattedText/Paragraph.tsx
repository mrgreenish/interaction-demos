import React from 'react'
import { FormattedText } from '@components/molecules/FormattedText/Component'

interface Props {
  html: string
}

export default function FormattedTextParagraph (props: Props): JSX.Element {
  return (
    <div className='formatted-text'>
      <FormattedText html={props.html} />
    </div>
  )
}
