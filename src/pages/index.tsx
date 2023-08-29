import HeaderSection from '../app/components/HeaderSection'
import { MutableRefObject, useRef, useState } from 'react'
import About from '../app/components/AboutSection'
import Experience from '../app/components/Experience'
import Projects from '../app/components/Projects'
import Testimonial from '../app/components/Testimonials'
import Contact from '../app/components/Contact'
import { useSelector } from 'react-redux'
import { GET_ARTICLES_QUERY, client } from 'src/utils/config'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import NavBar from 'src/app/components/NavSection'
import SliderV3tar from 'src/app/components/SliderV2/SliderV3'
import { getThemeMode } from 'src/redux/ThemeSlice'
import Layout from 'src/app/components/Layout'

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

  const colorState = useSelector(getThemeMode)


  const classes = {
    colorState: colorState === "dark" ? "dark " : "light "
  }

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
    <Layout className={`${classes.colorState} bg-white-700 dark:bg-black-200 dark:text-white`}>
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
        <meta property="og:image" content="/profile.ico"/>
        <meta property="og:url" content="https://rikesh.codes/"/>
        <meta property="og:type" content="website"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@rikeshshrestha"/>
        <meta name="twitter:title" content={metadata.title}/>
        <meta name="twitter:description" content={metadata.description}/>
        <meta name="twitter:image" content="/profile.ico"/>

        <link rel="icon" href="/profile.ico" sizes="any" />
      </Head>
      <script
        dangerouslySetInnerHTML={
                      {
          __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "ik3xvtkx34");`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavBar isHome refs={refs}></NavBar>
      <HeaderSection refs={refs}></HeaderSection>
      <About refs={refs}></About>
      <Experience refs={refs} blogs={blogs}></Experience>
      <Projects></Projects>
      <SliderV3tar refs={refs} title={'Things enjoy doing'}></SliderV3tar>
      <Testimonial refs={refs}></Testimonial>
      <Contact refs={refs}></Contact>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_ARTICLES_QUERY,
    variables: {
      pagination: {
        limit: 4,
      },
    },
  })

  return {
    props: {
      blogs: data.blogs,
    },
    revalidate: 10,
  }
}

export default Home
