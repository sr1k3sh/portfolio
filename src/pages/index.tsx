import HeaderSection from '../app/components/HeaderSection'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import About from '../app/components/AboutSection'
import Experience from '../app/components/Experience'
import Projects from '../app/components/Projects'
import Services from '../app/components/Services'
import Testimonial from '../app/components/Testimonials'
import Contact from '../app/components/Contact'
import { useDispatch, useSelector } from 'react-redux'
import { changeColorByValue, getcolorState } from 'src/redux/AppSlice'
import { GET_ARTICLES_QUERY, client } from 'src/utils/config'
import { GetStaticProps } from 'next'
import Head from 'next/head'

export const metadata = {
  title: 'Rikesh Shrestha - Frontend Developer | Web Design | HTML | CSS | JavaScript | React | React Native | Ureshino, Japan',
  description: 'Welcome to the portfolio of Rikesh Shrestha, a skilled frontend developer specializing in web design, HTML, CSS, JavaScript, React, and React Native. Based in Ureshino, Japan, he creates visually appealing and user-friendly websites and mobile apps. Explore his projects, expertise, and experience.',
}
interface Props {
  blogs: any
}
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




const Home = (props: Props) => {

  const { blogs } = props

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Rikesh Shrestha',
    image: '/profile.png',
    description: metadata.description,
  }

  const colorState = useSelector(getcolorState)
  const dispatch = useDispatch()
  const [date, setDate] = useState<number | null>(null)

  const classes = {
    colorState: colorState === "dark" ? "rs-app__dark " : "rs-app__light "
  }

  useEffect(() => {

    setDate(new Date().getHours())

    if (date) {
      if (date >= 6 && date <= 18) {
        if (date < 12) {
          dispatch(changeColorByValue({ color: "light", greet: "Good morning" }))
        } else {
          dispatch(changeColorByValue({ color: "light", greet: "Good afternoon" }))
        }
      } else {
        dispatch(changeColorByValue({ color: "dark", greet: "Good evening" }))
      }
    }

    return () => {

    }
  }, [date, dispatch])

  const refs = {
    home: {
      homeRef: useRef()
    },
    about: {
      aboutRef: useRef()
    },
    experience: {
      experienceRef: useRef()
    },
    projects: {
      projectsRef: useRef()
    },
    services: {
      servicesRef: useRef()
    },
    testimonial: {
      testimonialRef: useRef()
    },
    contact: {
      contactRef: useRef()
    }
  }

  return (
    <main className={classes.colorState}>
      <Head>
        <title>
          {
            metadata.title
          }
        </title>
        <meta
          name="description"
          content={metadata.description}
          key="desc"
        />

        <meta name="keywords" content="Rikesh Shrestha, Frontend Developer, Web Design, HTML, CSS, JavaScript, React, React Native, Ureshino, Japan, Portfolio"/>
        <meta property="og:title" content={metadata.title}/>
        <meta property="og:description" content={metadata.description}/>
        <meta property="og:image" content="/profile.png"/>
        <meta property="og:url" content="https://rikeshshrestha.com/"/>
        <meta property="og:type" content="website"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@rikeshshrestha"/>
        <meta name="twitter:title" content={metadata.title}/>
        <meta name="twitter:description" content={metadata.description}/>
        <meta name="twitter:image" content="/profile.png"/>

        <link rel="icon" href="/profile.png" sizes="any" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeaderSection refs={refs}></HeaderSection>
      <About refs={refs}></About>
      <Experience refs={refs} blogs={blogs}></Experience>
      <Projects></Projects>
      <Services refs={refs}></Services>
      <Testimonial refs={refs}></Testimonial>
      <Contact refs={refs}></Contact>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_ARTICLES_QUERY
  })

  return {
    props: {
      blogs: data.blogs,
    },
    revalidate: 10,
  }
}

export default Home
