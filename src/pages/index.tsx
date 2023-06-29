import styles from './page.module.css'
import HeaderSection from '../app/components/HeaderSection'
import { MutableRefObject, useRef } from 'react'
import About from '../app/components/AboutSection'
import Experience from '../app/components/Experience'
import Projects from '../app/components/Projects'
import Services from '../app/components/Services'
import Testimonial from '../app/components/Testimonials'
import Contact from '../app/components/Contact'
import { metadata } from './_document'


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
