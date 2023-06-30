import HeaderSection from '../app/components/HeaderSection'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import About from '../app/components/AboutSection'
import Experience from '../app/components/Experience'
import Projects from '../app/components/Projects'
import Services from '../app/components/Services'
import Testimonial from '../app/components/Testimonials'
import Contact from '../app/components/Contact'
import { metadata } from './_document'
import { useDispatch, useSelector } from 'react-redux'
import { changeColorByValue, getcolorState } from 'src/redux/AppSlice'


export interface Refs {
  home: {
    homeRef: MutableRefObject<any>,
  },
  about: {
    aboutRef: MutableRefObject<any>,
  },
  experience: {
    experienceRef: MutableRefObject<any>,
  },
  projects: {
    projectsRef: MutableRefObject<any>,
  },
  services: {
    servicesRef: MutableRefObject<any>,
  },
  testimonial: {
    testimonialRef: MutableRefObject<any>,
  },
  contact: {
    contactRef: MutableRefObject<any>,
  },
}

export default function Home() {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Rikesh Shrestha',
    image: '/profile.png',
    description: metadata.description,
  }

  const colorState = useSelector(getcolorState)
  const dispatch = useDispatch()
  const cursorRef:MutableRefObject<HTMLDivElement|null> = useRef(null)
  const cursorInnerRef:MutableRefObject<HTMLDivElement|null> = useRef(null)
  const [showCustomCursor, setShowCustomCursor] = useState<boolean>(false)

  const [date , setDate ] = useState<number|null>(null)

  const classes = {
    colorState : colorState === "dark" ? "rs-app__dark " : "rs-app__light "
  }

  useEffect(() => {

    setDate(new Date().getHours())

    if(date) {
      if(date >= 6 && date <= 18){
        if(date < 12){
          dispatch(changeColorByValue({color:"light",greet:"Good morning"}))
        }else{
          dispatch(changeColorByValue({color:"light",greet:"Good afternoon"}))
        }
      }else{
        dispatch(changeColorByValue({color:"dark",greet:"Good evening"}))
      }
    }

    return () => {

    }
  }, [date, dispatch])

  const refs = {
    home: {
      homeRef: useRef()
    },
    about:{
      aboutRef: useRef()
    },
    experience:{
      experienceRef: useRef()
    },
    projects:{
      projectsRef: useRef()
    },
    services:{
      servicesRef: useRef()
    },
    testimonial:{
      testimonialRef: useRef()
    },
    contact:{
      contactRef: useRef()
    }
  }

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

    addEventListener('mouseleave', () => {
      console.log('mouseup')
    })

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
    <main className={classes.colorState}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
      <HeaderSection refs={refs}></HeaderSection>
      <About refs={refs}></About>
      <Experience refs={refs}></Experience>
      <Projects></Projects>
      <Services refs={refs}></Services>
      <Testimonial refs={refs}></Testimonial>
      <Contact refs={refs}></Contact>
    </main>
  )
}
