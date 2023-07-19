import Image from 'next/image'
import React from 'react'
import styles from './index.module.scss'
import { Righteous } from 'next/font/google'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { getThemeMode } from 'src/redux/ThemeSlice'

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
  const { attributes, id }: any = blogDetail

  const colorState = useSelector(getThemeMode)

  return (
    <Link href={`/blogs/${attributes.category.data.attributes.slug}/${id}`} className={styles.link}>
      <article className={`${colorState === 'dark' ? styles.darkArticle : styles.lightArticle} ${styles.article}`}>
        <figure className={styles.fig}>
          <Image loading='lazy' src={attributes?.cover?.data?.attributes?.url || '/bg.avif'} placeholder='blur' blurDataURL={'/bg.avif'} fill={true} style={{ objectFit: "cover" }} alt='blogs'></Image>
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
    </Link>
  )
}