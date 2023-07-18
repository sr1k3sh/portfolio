
import '../app/globals.scss'

import { DM_Sans, Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const inter = DM_Sans({ subsets: ['latin'] , weight: '400'})

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { MutableRefObject, useEffect, useRef, useState } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {

  const cursorRef:MutableRefObject<HTMLDivElement|null> = useRef(null)
  const cursorInnerRef:MutableRefObject<HTMLDivElement|null> = useRef(null)
  const [showCustomCursor, setShowCustomCursor] = useState<boolean>(false)

  useEffect(() => {
    if (window.innerWidth < 767) {
      setShowCustomCursor(false)
    } else {
      setShowCustomCursor(true)
    }
  },[])

  useEffect(() => {
    let timeoutId:ReturnType<typeof setTimeout>
    const  mouseMoveEvent = (e:any) => {
      let x = e.clientX
      let y = e.clientY
      clearTimeout(timeoutId);
      if(cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`
        cursorRef.current.style.width = '50px'
        cursorRef.current.style.height = '50px'
      }
      if(cursorInnerRef.current) {
        cursorInnerRef.current.style.left = x + 'px'
        cursorInnerRef.current.style.top = y + 'px'
      }

      timeoutId = setTimeout(() => {
        // Perform actions when the mouse stops moving
        if(cursorRef.current) {
          cursorRef.current.style.width = '0px'
          cursorRef.current.style.height = '0px'
        }
      }, 500);
    }

    const mouseEnter = () => {
      if(cursorRef.current){
        cursorRef.current.style.background = '#edb50687'
      }
    }

    const mouseLeave = () => {
      if(cursorRef.current){
        cursorRef.current.style.background = 'none'
      }
    }

    document.querySelectorAll('a').forEach((link) => {
      link.addEventListener(('mouseover'),mouseEnter)
      link.addEventListener(('mouseleave'),mouseLeave)
    })

    document.querySelectorAll('button').forEach((link) => {
      link.addEventListener(('mouseover'),mouseEnter)
      link.addEventListener(('mouseleave'),mouseLeave)
    })

    addEventListener('mousemove',mouseMoveEvent)

    let timeout: ReturnType<typeof setTimeout>
    const onResize = () => {
      clearTimeout(timeout)

      timeout = setTimeout(() => {
        if (window.innerWidth < 767) {
          setShowCustomCursor(false)
        } else {
          setShowCustomCursor(true)
        }
      }, 200)
    }


    addEventListener('resize', onResize)

    return () => {
      removeEventListener('mousemove',mouseMoveEvent)
      removeEventListener('mouseover', mouseEnter)
      removeEventListener('mouseleave', mouseLeave)
      removeEventListener('resize', onResize)
    }
  },[])

  return (
  <Provider store={store}>
    <main className={inter.className}>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      {
        showCustomCursor &&
        <>
          <div ref={cursorRef} style={{
            position:'fixed',
            pointerEvents: 'none',
            border: '1px solid #edb506',
            borderRadius: '50%',
            background:'#edb50687',
            width: 0,
            height: 0,
            left: 0,
            top: 0,
            zIndex: 100,
            transition: 'all 0.3s ease-out',
            transform: `translate(calc(-50% + 15px), -50%)`,
          }}></div>
          <div ref={cursorInnerRef} style={{
            position:'fixed',
            pointerEvents: 'none',
            border: '1px solid #edb506',
            background: '#edb506',
            width: 20,
            borderRadius: '50%',
            height: 20,
            left: 0,
            top: 0,
            zIndex: 100,
            transition: 'width .3s, height .3s, opacity .3s',
            transform: `translate(calc(-50%), -50%)`,
          }}></div>
        </>
      }
      <Component {...pageProps}/>
    </main>
  </Provider>
)}

export default MyApp