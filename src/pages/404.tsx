import { Righteous } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import { getThemeMode } from 'src/redux/ThemeSlice'

type Props = {}

const righteous = Righteous({
  weight: '400',
  subsets: ['latin']
})

export default function Custom404({}: Props) {
  const currentTheme = useSelector(getThemeMode)
  const router = useRouter()

  const onClick = () => {
    router.push('/')
  }

  return (
    <div style={{
      position:'relative',
      width: '100%',
      height: '100vh',
      background: currentTheme === 'light' ? 'var(--white-600)' : 'var(--black)'
    }}>
      {/* <Image src="/bgnew.jpg" fill={true} priority={true} alt="page not found" style={{objectFit:'cover', zIndex: 0}}></Image> */}
      <div style={{
        position:'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        maxWidth: '80%',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <div>
          <h1 className={`${righteous.className} not-found-title`}>404</h1>
          <h2 className={'not-found-subtitle'}>Sorry, there nothing here to see</h2>
          <button className='btn btn-primary' onClick={onClick}>go home</button>
        </div>
      </div>
    </div>
  )
}