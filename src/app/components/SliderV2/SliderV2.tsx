import React from 'react'
import { Refs } from '../../../pages'
import Image from 'next/image'
import Link from 'next/link'
import { proza } from 'src/utils/fonts'

interface Props {
  refs?: Refs
  parallex?: boolean
  title?: string | Element | any
  data: any
}

export default function SliderV2tar({ refs, title, data }: Props) {

  return (
    <section ref={refs && refs.services.servicesRef} className={``}>
      {
        title &&
        <h2 className={`text:2xl md:text-3xl font-[600] font-sans uppercase mb-4 ${proza.className}`}>{title}</h2>
      }
      <div className='columns-3 gap-2'>
        {
          data.map((d: any, index: number) => {
            return <figure key={`${index}-image-gallery`} className='relative aspect-square rounded-xl overflow-hidden group mt-2 first:mt-0'>
              <Image className='object-cover transition-all duration-300 group-hover:scale-105' src={d.attributes.url} placeholder='blur' blurDataURL={d.attributes.url} fill alt=".."></Image>
            </figure>
          })
        }
      </div>
      <Link href="/" className='text-secondary text-sm text-right block font-regular capitalize'>more on galleries...</Link>

    </section>
  )
}
