import Image from 'next/image'
import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link'

type Props = {
  blog: any
}

export default function BlogGridItem({blog}: Props) {
  const {attributes, id} = blog

  return (
    <Link href={`/blogs/${attributes.category.data.attributes.name}/${id}`} className={styles.link} >
      <article>
        <figure className={styles.fig}>
          <Image loading='lazy' style={{ objectFit: 'cover' }} src={attributes?.cover?.data?.attributes?.url || '/bg.avif'} blurDataURL='/bg.avif' fill={true} alt={attributes?.cover?.data?.attributes.alternativeText || ''} />
        </figure>
        <h3 className={styles.title}>{attributes.title}</h3>
        <p className={styles.content}>{attributes.description}</p>
        <span className={styles.date}>{attributes.publishedAt && new Date(attributes.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit'
        })}</span>
      </article>
    </Link>
  )
}