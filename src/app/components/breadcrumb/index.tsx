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
    <ul className={`${styles.wrapper} ${colorState === 'light' ? styles.light : styles.dark}`}>
      <li>
        <Link href="/">
          <HiHome color={colorState === 'light' ? 'var(--primary)' : 'var(--white)'}></HiHome>
        </Link>
      </li>
      {
        data.map((d:IbreadCrumb,index:number) => <li key={`bread-${index}`}>
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