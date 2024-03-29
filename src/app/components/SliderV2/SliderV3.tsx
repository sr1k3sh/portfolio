import React, { MutableRefObject, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Refs } from '../../../pages'
import Image from 'next/image'

import { SiVitest, SiGoogleoptimize, SiSemanticuireact } from 'react-icons/si'
import { PiFigmaLogoDuotone } from 'react-icons/pi'
import { LuScreenShare } from 'react-icons/lu'
import { FaFirefoxBrowser, FaApple } from 'react-icons/fa'
import { GiWireframeGlobe } from 'react-icons/gi'
import { MdOutlineIntegrationInstructions, MdAnimation } from 'react-icons/md'
import { FiHelpCircle } from 'react-icons/fi'
import { CgPerformance } from 'react-icons/cg'
import { colors } from 'src/utils/utils'
import { getThemeMode } from 'src/redux/ThemeSlice'
import { proza } from 'src/utils/fonts'

interface Props {
  refs: Refs
  parallex?: boolean
  title?: string | Element | any
}

const services = [
  {
    title: "Website Development",
    description: "Building responsive and user-friendly websites using HTML, CSS, and JavaScript.",
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    imageUrl: "url-to-image-website-development",
    icon: (color:string) => <SiSemanticuireact className={'w-10 h-10 m-auto'} size={84} color={color}></SiSemanticuireact>
  },
  {
    title: "UI/UX Design",
    description: "Creating visually appealing and intuitive user interfaces and user experience designs.",
    url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    imageUrl: "url-to-image-ui-ux-design",
    icon: (color:string) => <PiFigmaLogoDuotone className={'w-10 h-10 m-auto'} size={84} color={color}></PiFigmaLogoDuotone>
  },
  {
    title: "Responsive Design",
    description: "Ensuring that websites and applications adapt and function well across different devices and screen sizes.",
    url: 'https://images.unsplash.com/photo-1516471845540-98fd378beb4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    imageUrl: "url-to-image-responsive-design",
    icon: (color:string) => <LuScreenShare className={'w-10 h-10 m-auto'} size={84} color={color}></LuScreenShare>
  },
  {
    title: "Frontend Optimization",
    description: "Optimizing website performance, speed, and efficiency by minimizing file sizes and optimizing code.",
    url: 'https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    imageUrl: "url-to-image-frontend-optimization",
    icon: (color:string) => <SiGoogleoptimize className={'w-10 h-10 m-auto'} size={84} color={color}></SiGoogleoptimize>
  },
  {
    title: "Cross-Browser Compatibility",
    description: "Ensuring consistent website functionality and appearance across different web browsers and versions.",
    url: '/bg.avif',
    imageUrl: "url-to-image-cross-browser-compatibility",
    icon: (color:string) => <FaFirefoxBrowser className={'w-10 h-10 m-auto'} size={84} color={color}></FaFirefoxBrowser>
  },
  {
    title: "Wireframing and Prototyping",
    description: "Creating wireframes and interactive prototypes to visualize and test user flows and interactions.",
    url: 'https://images.unsplash.com/photo-1502512571217-6a08d302fe5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    imageUrl: "url-to-image-wireframing-prototyping",
    icon: (color:string) => <GiWireframeGlobe className={'w-10 h-10 m-auto'} size={84} color={color}></GiWireframeGlobe>
  },
  {
      title: "Mobile App Design",
      description: "Designing engaging and intuitive mobile app interfaces for iOS and Android platforms.",
      url: '/bg.avif',
      imageUrl: "url-to-image-mobile-app-design",
      icon: (color:string) => <FaApple className={'w-10 h-10 m-auto'} size={84} color={color}></FaApple>
  },
  {
      title: "Frontend Testing and Debugging",
      description: "Conducting testing and debugging to ensure frontend code is error-free and functions as intended.",
      url: '/bg.avif',
      imageUrl: "url-to-image-frontend-testing-debugging",
      icon: (color:string) => <SiVitest className={'w-10 h-10 m-auto'} size={84} color={color}></SiVitest>
  },
  {
      title: "CMS Integration",
      description: "Integrating content management systems to enable easy content updates and management.",
      url: '/bg.avif',
      imageUrl: "url-to-image-cms-integration",
      icon: (color:string) => <MdOutlineIntegrationInstructions className={'w-10 h-10 m-auto'} size={84} color={color}></MdOutlineIntegrationInstructions>
  },
  {
      title: "Animation and Motion Graphics",
      description: "Creating interactive and visually appealing animations and motion graphics for websites and applications.",
      url: '/bg.avif',
      imageUrl: "url-to-image-animation-motion-graphics",
      icon: (color:string) => <MdAnimation className={'w-10 h-10 m-auto'} size={84} color={color}></MdAnimation>
  },
  {
      title: "Frontend Consulting and Strategy",
      description: "Providing guidance and strategic planning for frontend development projects, including technology stack selection and architecture design.",
      url: '/bg.avif',
      imageUrl: "url-to-image-frontend-consulting-strategy",
      icon: (color:string) => <FiHelpCircle className={'w-10 h-10 m-auto'} size={84} color={color}></FiHelpCircle>
  },
  {
      title: "Performance Optimization",
      description: "Analyzing and improving website and application performance to ensure fast loading times and smooth user experiences.",
      url: '/bg.avif',
      imageUrl: "url-to-image-performance-optimization",
      icon: (color:string) => <CgPerformance className={'w-10 h-10 m-auto'} size={84} color={color}></CgPerformance>
  }
]

export default function SliderV3tar({parallex=false, refs, title}:Props) {

  const currentSlideRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

  const colorState = useSelector(getThemeMode)


  return (
    <section ref={refs.services.servicesRef} className={`py-10`}>
      <div className='container-none m-auto overflow-hidden'>
        <div className='flex flex-col'>
          {
            title &&
            <h2 className={`text-center text-2xl md:text-3xl uppercase font-bold mb-10 ${proza.className}`}>{title}</h2>
          }

          <div className="flex flex-row scroll">
            {
              services.map((service: any, index: number) => {
                return (
                  <article
                  key={`${index}-service-1`}
                    ref={currentSlideRef}
                    className={'flex flex-col items-center'}
                  >
                    <div className='w-56 flex justify-center items-center flex-col'>
                      <figure
                        className={'relative mb-4 bg-white-500 p-4 w-18 h-18 rounded-full border-4 border-white-700 dark:bg-black-500 dark:border-black-600'}>
                        {
                          service.icon ?
                          service.icon(colorState === 'dark' ? colors.white : colors.primary ) : //<LiaConnectdevelop ></LiaConnectdevelop> :
                            <Image src={service.url} fill style={{ objectFit: 'cover' }} alt=".."></Image>
                        }
                      </figure>
                      {
                        <div
                          className={``}>
                          <h2
                            className={`text-center text-primary font-[500] text-sm text-md mt-4 dark:text-white-600 ${proza.className}`}>{service.title}</h2>
                        </div>
                      }
                    </div>
                  </article>
                )})
            }
            {
              services.map((service: any, index: number) => {
                return (
                  <article
                    key={`${index}-service-2`}
                    ref={currentSlideRef}
                    className={'flex flex-col items-center'}
                  >
                    <div className='w-56 flex justify-center items-center flex-col'>
                      <figure
                        className={'relative mb-4 bg-white-500 p-4 w-18 h-18 rounded-full border-4 border-white-700 dark:bg-black-500 dark:border-black-600'}>
                        {
                          service.icon ?
                          service.icon(colorState === 'dark' ? colors.white : colors.primary ) : //<LiaConnectdevelop ></LiaConnectdevelop> :
                            <Image src={service.url} fill style={{ objectFit: 'cover' }} alt=".."></Image>
                        }
                      </figure>
                      {
                        <div
                          className={``}>
                          <h2
                            className={`text-center text-primary font-[500] text-sm text-md mt-4 dark:text-white-600 ${proza.className}`}>{service.title}</h2>
                        </div>
                      }
                    </div>
                  </article>
                )})
            }
          </div>
        </div>
      </div>
    </section>
  )
}
