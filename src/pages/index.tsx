import styles from './page.module.css'
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
import { getMenuStatus } from 'src/redux/features/body/BodySlice'


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

  const [date , setDate ] = useState<number|null>(null);

  const classes = {
    colorState : colorState === "dark" ? "rs-app__dark " : "rs-app__light "
  }

  useEffect(() => {

    setDate(new Date().getHours());

    if(date) {
      if(date >= 6 && date <= 18){
        if(date < 12){
          dispatch(changeColorByValue({color:"light",greet:"Good morning"}));
        }else{
          dispatch(changeColorByValue({color:"light",greet:"Good afternoon"}))
        }
      }else{
        dispatch(changeColorByValue({color:"dark",greet:"Good evening"}));
      }
    }

    return () => {

    }
  }, [date, dispatch]);

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

    const  mouseMoveEvent = (e:any) => {
      let x = e.clientX
      let y = e.clientY
      if(cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`
      }
      if(cursorInnerRef.current) {
        cursorInnerRef.current.style.left = x + 'px'
        cursorInnerRef.current.style.top = y + 'px'
      }
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

    return () => {
      removeEventListener('mousemove',mouseMoveEvent)
      removeEventListener('mouseover', mouseEnter)
      removeEventListener('mouseleave', mouseLeave)
    }
  },[])

  return (
    <main className={classes.colorState}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div ref={cursorRef} style={{
        position:'fixed',
        pointerEvents: 'none',
        border: '1px solid #edb506',
        borderRadius: '50%',
        width: 50,
        height: 50,
        left: 0,
        top: 0,
        zIndex: 100,
        transition: 'all 0.1s ease-out',
        transform: `translate(calc(-50% + 15px), -50%)`,
      }}></div>
      <div ref={cursorInnerRef} style={{
        position:'fixed',
        pointerEvents: 'none',
        border: '1px solid #D1C4E9',
        background: '#D1C4E9',
        width: 20,
        borderRadius: '50%',
        height: 20,
        left: 0,
        top: 0,
        zIndex: 100,
        transition: 'width .3s, height .3s, opacity .3s',
        transform: `translate(calc(-50%), -50%)`,
      }}></div>
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
