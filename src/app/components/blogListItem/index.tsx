import Image from 'next/image'
import React from 'react'
import styles from './index.module.scss'
import { Righteous } from 'next/font/google'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { getThemeMode } from 'src/redux/ThemeSlice'
import { proza, sansFont } from 'src/utils/fonts'

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
    <Link href={`/blogs/${attributes.category.data.attributes.slug}/${id}`} className={'group'}>
      <article className={`flex flex-row items-start`}>
        <figure className={'relative rounded-lg overflow-hidden border-4 border-white transition-all duration-300 bg-primary-light w-28 h-28 me-2 group-hover:border-white-200'}>
          <Image loading='lazy' src={attributes?.cover?.data?.attributes?.url || '/bg.avif'} placeholder='blur' blurDataURL={'/bg.avif'} fill={true} style={{ objectFit: "cover" }} className='transition-all duration-300 group-hover:scale-105' alt='blogs'></Image>
        </figure>
        <div className={'flex flex-col w-[calc(100%_-_7rem)]'}>
          <span className={`text-sm uppercase font-semibold mb-1 ${proza.className}`}>{attributes.category.data.attributes.name}</span>
          <h4 className={`text-sm mb-1 text-black-200 transition-all duration-300 group-hover:text-primary dark:text-white-200 line-clamp-2 ${sansFont.className}`}>{attributes.title}</h4>
          <span className={'text-xs text-black-500'}>{attributes.publishedAt && new Date(attributes.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
          })}</span>
        </div>
      </article>
    </Link>
  )
}