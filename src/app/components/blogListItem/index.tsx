import Image from 'next/image'
import React from 'react'
import styles from './index.module.scss'
import { Righteous } from 'next/font/google'

type Props = {
  blogDetail: {
    title: string,
    date: string,
    category: string,
    url: string,
  }
}

const righteous = Righteous({
  weight: '400',
  subsets: ['latin']
})

export default function BlogListItem({ blogDetail }: Props) {
  const { attributes }: any = blogDetail

  return (
    <article className={styles.article}>
      <figure className={styles.fig}>
        <Image src={attributes.cover.data.attributes.url} width={100} height={100} style={{ objectFit: "cover" }} alt='blogs'></Image>
      </figure>
      <div className={styles.content}>
        <span className={styles.category}>{attributes.category.data.attributes.name}</span>
        <h4 className={`${styles.title} ${righteous.className}`}>{attributes.title}</h4>
        <span className={styles.date}>{attributes.publishedAt && new Date(attributes.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit'
        })}</span>
      </div>
    </article>
  )
}