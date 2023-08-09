import Image from 'next/image'
import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link'
import { proza, sansFont } from 'src/utils/fonts'

type Props = {
  blog: any
}

export default function BlogGridItem({blog}: Props) {
  const {attributes, id} = blog

  return (
    <Link href={`/blogs/${attributes.category.data.attributes.slug}/${id}`} className={'flex w-full group'} >
      <article className='flex flex-col'>
        <figure className={'mb-2 relative w-full h-52 overflow-hidden rounded-lg'}>
          <Image className='object-cover group-hover:scale-105 transition-all duration-300' loading='lazy' style={{ objectFit: 'cover' }} src={attributes?.cover?.data?.attributes?.url || '/bg.avif'} blurDataURL='/bg.avif' fill={true} alt={attributes?.cover?.data?.attributes.alternativeText || ''} />
        </figure>
        <h3 className={`text-lg mb-1 font-semibold line-clamp-2 uppercase group-hover:text-primary ${proza.className}`}>{attributes.title}</h3>
        <p className={`text-base mb-1 line-clamp-3 ${sansFont.className}`}>{attributes.description}</p>
        <span className={'text-sm text-black-500'}>{attributes.publishedAt && new Date(attributes.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit'
        })}</span>
      </article>
    </Link>
  )
}