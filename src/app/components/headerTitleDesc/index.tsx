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
    <div className={'text-center flex flex-col py-5 md:py-10'}>
      <span className={'font-sans font-medium text-xl mb-2'}>My blogs</span>
      <h1 className={`font-sans text-2xl font-bold uppercase mb-4`}>Writing from my experience</h1>
      <p className={`font-sans text-base`}>
        {
          `is a captivating blog where personal stories and insightful reflections come together to offer a unique and relatable perspective. Join the author on a journey through their triumphs, challenges, and the valuable life lessons they've learned along the way. Discover inspiration, entertainment, and thought-provoking insights that invite you to reflect on your own experiences.`
        }
      </p>
    </div>
  )
}