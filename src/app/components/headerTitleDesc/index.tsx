import React from 'react'
import { proza, sansFont } from 'src/utils/fonts'

type Props = {
  blog: {
    blogTitle: string,
    blogSubTitle: string,
    blogDescription: string,
  }
}

export default function HeaderTitleDesc({ blog }: Props) {
  return (
    <div className={'text-center flex flex-col py-5 md:py-10'}>
      <span className={`${sansFont.className} font-medium text-xl mb-2`}>{blog.blogTitle}</span>
      <h1 className={`${proza.className} text-2xl font-bold uppercase mb-4`}>{blog.blogSubTitle}</h1>
      <p className={`text-base ${sansFont.className}`}>
        {
          blog.blogDescription
        }
        {/* {
          `is a captivating blog where personal stories and insightful reflections come together to offer a unique and relatable perspective. Join the author on a journey through their triumphs, challenges, and the valuable life lessons they've learned along the way. Discover inspiration, entertainment, and thought-provoking insights that invite you to reflect on your own experiences.`
        } */}
      </p>
    </div>
  )
}