import React, { MutableRefObject, useCallback, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Refs } from '../../../pages'
import { Righteous } from 'next/font/google'
import Image from 'next/image'
import '@splidejs/react-splide/css/sea-green'
import styles from './index.module.scss'

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css'

import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules'

import { SiVitest, SiGoogleoptimize, SiSemanticuireact } from 'react-icons/si'
import { PiFigmaLogoDuotone } from 'react-icons/pi'
import { LuScreenShare } from 'react-icons/lu'
import { FaFirefoxBrowser, FaApple } from 'react-icons/fa'
import { GiWireframeGlobe } from 'react-icons/gi'
import { MdOutlineIntegrationInstructions, MdAnimation } from 'react-icons/md'
import { FiHelpCircle } from 'react-icons/fi'
import { CgPerformance } from 'react-icons/cg'
import { getThemeMode } from 'src/redux/ThemeSlice'
import Link from 'next/link'

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
        <h2 className={`text-3xl font-bold font-sans uppercase mb-4`}>{title}</h2>
      }
      <div className='columns-3 gap-2'>
        {
          data.map((d: any, index: number) => {
            return <figure key={`${index}-image-gallery`} className='relative aspect-square roudned-xl overflow-hidden group mt-2 first:mt-0'>
              <Image className='object-cover transition-all duration-300 group-hover:scale-105' src={d.attributes.url} placeholder='blur' blurDataURL={d.attributes.url} fill alt=".."></Image>
            </figure>
          })
        }
      </div>
      <Link href="/" className='text-secondary text-sm text-right block font-regular capitalize'>more on galleries...</Link>

    </section>
  )
}
