import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link'
import { HiHome } from 'react-icons/hi2'
import { useSelector } from 'react-redux'
import { getThemeMode } from 'src/redux/ThemeSlice'

export interface IbreadCrumb {
  url?: string | null,
  name: string,
}
type Props = {
  data: IbreadCrumb[]
}

export default function BreadCrumb({data}: Props) {
  const colorState = useSelector(getThemeMode)

  return (
    <ul className={`flex flex-row flex-wrap items-center gap-2`}>
      <li>
        <Link href="/">
          <HiHome className='text-primary dark:white-400'></HiHome>
        </Link>
      </li>
      {
        data.map((d:IbreadCrumb,index:number) => <li key={`bread-${index}`} className={`text-sm before:content-['>'] before:me-2 text-black-400 dark:text-white-400`}>
          {
            d.url == null ? d.name :
            <Link href={`${d.url}`}>
              {
                d.name
              }
            </Link>
          }
        </li>)
      }
    </ul>
  )
}