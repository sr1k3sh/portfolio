import React from 'react'
import styles from './index.module.scss'
import { Righteous } from 'next/font/google'

type Props = {}

const righteous = Righteous({
  weight: '400',
  subsets: ['latin']
})

export default function HeaderTitleDesc({ }: Props) {
  return (
    <div className={styles.container}>
      <span className={styles.subTitle}>My blogs</span>
      <h1 className={`${styles.title} ${righteous.className}`}>Writing from my experience</h1>
      <p className={styles.description}>
        is a captivating blog where personal stories and insightful reflections come together to offer a unique and relatable perspective. Join the author on a journey through their triumphs, challenges, and the valuable life lessons they've learned along the way. Discover inspiration, entertainment, and thought-provoking insights that invite you to reflect on your own experiences.
      </p>
    </div>
  )
}