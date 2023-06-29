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
  const dispatch = useDispatch();

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
  return (
    <main className={classes.colorState}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
