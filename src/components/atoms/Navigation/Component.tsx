'use client'
import React from 'react'
import styles from '../../../app/page.module.css'

interface Props {
  description: string
}
export default function Navigation (props: Props): JSX.Element {
  return (
    <>
      <nav className={styles.nav}>
        <a href='/'>Back to home</a>
      </nav>
      <p className={styles.description}>
        {props.description}
      </p>
    </>
  )
}
