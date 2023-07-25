import React, { MutableRefObject, useCallback, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Refs } from '../../../pages'
import { Righteous } from 'next/font/google'
import Image from 'next/image'
import '@splidejs/react-splide/css/sea-green'
import styles from './index.module.scss'

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css'

import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules'

import { SiVitest, SiGoogleoptimize, SiSemanticuireact } from 'react-icons/si'
import { PiFigmaLogoDuotone } from 'react-icons/pi'
import { LuScreenShare } from 'react-icons/lu'
import { FaFirefoxBrowser, FaApple } from 'react-icons/fa'
import { GiWireframeGlobe } from 'react-icons/gi'
import { MdOutlineIntegrationInstructions, MdAnimation } from 'react-icons/md'
import { FiHelpCircle } from 'react-icons/fi'
import { CgPerformance } from 'react-icons/cg'
import { getThemeMode } from 'src/redux/ThemeSlice'

interface Props {
  refs?: Refs
  parallex?: boolean
  title?: string | Element | any
  data: any
}

const righteous = Righteous({
  weight: '400',
  subsets: ['latin']
})

const services = [
  {
    title: "Website Development",
    description: "Building responsive and user-friendly websites using HTML, CSS, and JavaScript.",
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    imageUrl: "url-to-image-website-development",
    icon: (color: string) => <SiSemanticuireact className={styles.icon} size={84} color={color}></SiSemanticuireact>
  },
  {
    title: "UI/UX Design",
    description: "Creating visually appealing and intuitive user interfaces and user experience designs.",
    url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    imageUrl: "url-to-image-ui-ux-design",
    icon: (color: string) => <PiFigmaLogoDuotone className={styles.icon} size={84} color={color}></PiFigmaLogoDuotone>
  },
  {
    title: "Responsive Design",
    description: "Ensuring that websites and applications adapt and function well across different devices and screen sizes.",
    url: 'https://images.unsplash.com/photo-1516471845540-98fd378beb4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    imageUrl: "url-to-image-responsive-design",
    icon: (color: string) => <LuScreenShare className={styles.icon} size={84} color={color}></LuScreenShare>
  },
  {
    title: "Frontend Optimization",
    description: "Optimizing website performance, speed, and efficiency by minimizing file sizes and optimizing code.",
    url: 'https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    imageUrl: "url-to-image-frontend-optimization",
    icon: (color: string) => <SiGoogleoptimize className={styles.icon} size={84} color={color}></SiGoogleoptimize>
  },
  {
    title: "Cross-Browser Compatibility",
    description: "Ensuring consistent website functionality and appearance across different web browsers and versions.",
    url: '/bg.avif',
    imageUrl: "url-to-image-cross-browser-compatibility",
    icon: (color: string) => <FaFirefoxBrowser className={styles.icon} size={84} color={color}></FaFirefoxBrowser>
  },
  {
    title: "Wireframing and Prototyping",
    description: "Creating wireframes and interactive prototypes to visualize and test user flows and interactions.",
    url: 'https://images.unsplash.com/photo-1502512571217-6a08d302fe5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    imageUrl: "url-to-image-wireframing-prototyping",
    icon: (color: string) => <GiWireframeGlobe className={styles.icon} size={84} color={color}></GiWireframeGlobe>
  },
  {
    title: "Mobile App Design",
    description: "Designing engaging and intuitive mobile app interfaces for iOS and Android platforms.",
    url: '/bg.avif',
    imageUrl: "url-to-image-mobile-app-design",
    icon: (color: string) => <FaApple className={styles.icon} size={84} color={color}></FaApple>
  },
  {
    title: "Frontend Testing and Debugging",
    description: "Conducting testing and debugging to ensure frontend code is error-free and functions as intended.",
    url: '/bg.avif',
    imageUrl: "url-to-image-frontend-testing-debugging",
    icon: (color: string) => <SiVitest className={styles.icon} size={84} color={color}></SiVitest>
  },
  {
    title: "CMS Integration",
    description: "Integrating content management systems to enable easy content updates and management.",
    url: '/bg.avif',
    imageUrl: "url-to-image-cms-integration",
    icon: (color: string) => <MdOutlineIntegrationInstructions className={styles.icon} size={84} color={color}></MdOutlineIntegrationInstructions>
  },
  {
    title: "Animation and Motion Graphics",
    description: "Creating interactive and visually appealing animations and motion graphics for websites and applications.",
    url: '/bg.avif',
    imageUrl: "url-to-image-animation-motion-graphics",
    icon: (color: string) => <MdAnimation className={styles.icon} size={84} color={color}></MdAnimation>
  },
  {
    title: "Frontend Consulting and Strategy",
    description: "Providing guidance and strategic planning for frontend development projects, including technology stack selection and architecture design.",
    url: '/bg.avif',
    imageUrl: "url-to-image-frontend-consulting-strategy",
    icon: (color: string) => <FiHelpCircle className={styles.icon} size={84} color={color}></FiHelpCircle>
  },
  {
    title: "Performance Optimization",
    description: "Analyzing and improving website and application performance to ensure fast loading times and smooth user experiences.",
    url: '/bg.avif',
    imageUrl: "url-to-image-performance-optimization",
    icon: (color: string) => <CgPerformance className={styles.icon} size={84} color={color}></CgPerformance>
  }
]

export default function SliderV2tar({ parallex = false, refs, title, data }: Props) {

  const [activeSlide, setActiveSlide] = useState<any>(1)
  const currentSlideRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
  const [movedLeft, setMoveLeft] = useState<boolean | null>(null)
  const [currenSwiper, setCurrentSwiper] = useState<SwiperClass | null>(null)

  const colorState = useSelector(getThemeMode)

  const onMouseMove = useCallback((event: any) => {
    if (currentSlideRef?.current) {
      const currentX = event.clientX

      if (currentX > window.innerWidth / 2) {
        setMoveLeft(false)
      } else {
        setMoveLeft(true)
      }
    }
  }, [])

  const onMouseLeave = () => {
    setMoveLeft(null)
  }

  const onSwiper = (swiper: SwiperClass) => {
    setCurrentSwiper(swiper)
  }

  const onSlideChange = () => {
    if (currenSwiper) {
      setActiveSlide(currenSwiper.activeIndex)
    }
  }

  return (
    <section ref={refs && refs.services.servicesRef} className={`${styles.section} ${colorState === 'dark' ? styles.dark : styles.light}`}>
      {
        parallex &&
        <div className='container-fluid'>
          <div className='row'>
            <figure className={styles.bgImage}>
              <Image src={services[activeSlide].url} placeholder='blur' blurDataURL={services[activeSlide].url} fill style={{ objectFit: 'cover' }} alt="..."></Image>
            </figure>
          </div>
        </div>
      }
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            {
              title &&
              <h2 className={`${styles.title} ${righteous.className}`}>{title}</h2>
            }
            <div className={`${styles.wrapper} rs-services__wrapper`}>
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                loop={true}
                navigation
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false
                }}
                modules={[Pagination, Navigation, EffectCoverflow]}
                className="mySwiper"
                onSwiper={onSwiper}
                onSlideChange={onSlideChange}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    // spaceBetween: 20,
                  },
                  1100: {
                    slidesPerView: 3,
                    // spaceBetween: 40,
                  },
                  // 1024: {
                  //   slidesPerView: 5,
                  //   spaceBetween: 50,
                  // },
                }}
              >
                {
                  data.map((d: any, index: number) => {
                    return (
                      <SwiperSlide
                        key={`swiper-index-${index}`}
                        className={`${movedLeft === null ? '' : movedLeft ? 'left' : 'right'}`}
                      >
                        {({ isActive }) => {
                          return (
                            <div
                              onMouseMove={(e) => isActive && onMouseMove(e)}
                              onMouseLeave={() => isActive && onMouseLeave()}

                            >
                              <article
                                ref={currentSlideRef}
                                className={styles.article}
                              >
                                <figure
                                  className={styles.figure}

                                  style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%',
                                    backdropFilter: 'blur(24px)'
                                  }}>
                                  <Image src={d.attributes.url} placeholder='blur' blurDataURL={d.attributes.url} fill style={{ objectFit: 'cover' }} alt=".."></Image>
                                </figure>
                                {
                                  <div
                                    className={`${isActive && styles.activeDescription} ${styles.descriptionV2}`}>
                                    {
                                      d.attributes.caption &&
                                      <h2 className={righteous.className}>{d.attributes.caption}</h2>
                                    }

                                    {
                                      d.attributes.alternativeText &&
                                      <p>- {d.attributes.alternativeText}</p>
                                    }
                                  </div>
                                }
                              </article>
                            </div>
                          )
                        }
                        }
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
