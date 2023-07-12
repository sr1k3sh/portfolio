import Image from 'next/image'
import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link'

type Props = {
  blog: any
}

export default function BlogGridItem({blog}: Props) {
  return (
    <Link className={styles.link} href="/">
      <article>
        <figure className={styles.fig}>
          <Image style={{ objectFit: 'cover' }} src={blog?.attributes?.cover?.data?.attributes?.url || '/bg.avif'} blurDataURL='/bg.avif' fill={true} alt={blog?.attributes?.cover?.data?.attributes.alternativeText || ''} />
        </figure>
        <h3 className={styles.title}>{blog.attributes.title}</h3>
        <p className={styles.content}>{blog.attributes.description}</p>
        <span className={styles.date}>{blog.attributes.publishedAt && new Date(blog.attributes.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit'
        })}</span>
      </article>
    </Link>
  )
}