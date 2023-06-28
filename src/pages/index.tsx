import styles from './page.module.css'
import HeaderSection from '../app/components/HeaderSection'
import { MutableRefObject, useRef } from 'react'
import About from '../app/components/AboutSection'
import Experience from '../app/components/Experience'
import Projects from '../app/components/Projects'
import Services from '../app/components/Services'
import Testimonial from '../app/components/Testimonials'
import Contact from '../app/components/Contact'

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

interface HeaderSectionProps {
  refs: Refs
}

interface AboutProps {
  refs: Refs
}

interface ExperienceProps {
  refs: Refs
}

interface ServicesProps {
  refs: Refs
}

interface ContactProps {
  refs: Refs
}

export default function Home() {
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
    <main className={styles.main}>
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
