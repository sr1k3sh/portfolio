import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'

import { SiProtonvpn } from 'react-icons/si'
import { MdOutlineFeaturedPlayList, MdOutlineDesignServices, MdDoubleArrow } from 'react-icons/md'
import { FaConnectdevelop } from 'react-icons/fa'
import { AiFillShop } from 'react-icons/ai'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { getcolorState } from '../../../redux/AppSlice'
import { Refs } from '../../../pages'
import { Righteous } from 'next/font/google'
import Image from 'next/image'
import { Options, Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/sea-green'
import styles from './index.module.scss'

interface buttonProps {
    className: string,
    onClick?: () => void
}

function NextArrow(props: buttonProps) {
    const { className, onClick } = props
    return (
        <button
            className={className}
            onClick={onClick}>
            <IoIosArrowForward></IoIosArrowForward>
        </button>
    )
}

function PrevArrow(props: buttonProps) {
    const { className, onClick } = props
    return (
        <button className={className} onClick={onClick}>
            <IoIosArrowBack></IoIosArrowBack>
        </button>
    )
}

interface Props {
    refs: Refs
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
        imageUrl: "url-to-image-website-development"
    },
    {
        title: "UI/UX Design",
        description: "Creating visually appealing and intuitive user interfaces and user experience designs.",
        url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
        imageUrl: "url-to-image-ui-ux-design"
    },
    {
        title: "Responsive Design",
        description: "Ensuring that websites and applications adapt and function well across different devices and screen sizes.",
        url: 'https://images.unsplash.com/photo-1516471845540-98fd378beb4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
        imageUrl: "url-to-image-responsive-design"
    },
    {
        title: "Frontend Optimization",
        description: "Optimizing website performance, speed, and efficiency by minimizing file sizes and optimizing code.",
        url: 'https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
        imageUrl: "url-to-image-frontend-optimization"
    },
    {
        title: "Cross-Browser Compatibility",
        description: "https://images.unsplash.com/photo-1505851543971-19811a8f4c21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80Ensuring consistent website functionality and appearance across different web browsers and versions.",
        url: '/bg.avif',
        imageUrl: "url-to-image-cross-browser-compatibility"
    },
    {
        title: "Wireframing and Prototyping",
        description: "Creating wireframes and interactive prototypes to visualize and test user flows and interactions.",
        url: 'https://images.unsplash.com/photo-1502512571217-6a08d302fe5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
        imageUrl: "url-to-image-wireframing-prototyping"
    },
    // {
    //     title: "Mobile App Design",
    //     description: "Designing engaging and intuitive mobile app interfaces for iOS and Android platforms.",
    //     url: '/bg.avif',
    //     imageUrl: "url-to-image-mobile-app-design"
    // },
    // {
    //     title: "Frontend Testing and Debugging",
    //     description: "Conducting testing and debugging to ensure frontend code is error-free and functions as intended.",
    //     url: '/bg.avif',
    //     imageUrl: "url-to-image-frontend-testing-debugging"
    // },
    // {
    //     title: "CMS Integration",
    //     description: "Integrating content management systems to enable easy content updates and management.",
    //     url: '/bg.avif',
    //     imageUrl: "url-to-image-cms-integration"
    // },
    // {
    //     title: "Animation and Motion Graphics",
    //     description: "Creating interactive and visually appealing animations and motion graphics for websites and applications.",
    //     url: '/bg.avif',
    //     imageUrl: "url-to-image-animation-motion-graphics"
    // },
    // {
    //     title: "Frontend Consulting and Strategy",
    //     description: "Providing guidance and strategic planning for frontend development projects, including technology stack selection and architecture design.",
    //     url: '/bg.avif',
    //     imageUrl: "url-to-image-frontend-consulting-strategy"
    // },
    // {
    //     title: "Performance Optimization",
    //     description: "Analyzing and improving website and application performance to ensure fast loading times and smooth user experiences.",
    //     url: '/bg.avif',
    //     imageUrl: "url-to-image-performance-optimization"
    // }
]

export default function SliderV2() {
    // const { refs } = props
    const [activeSlide, setActiveSlide] = useState<any>(1)
    const [previousX, setPreviousX] = useState<number>(9)
    const currentSlideRef:MutableRefObject<HTMLDivElement | null> = useRef(null)
    const [movedLeft, setMoveLeft] = useState<boolean | null>(null)

    const options:Options = {
        type: 'loop',
        perPage: 3,
        // gap: 20,
        focus  : 'center',
        pagination: false,
    }

    const onActive = ( cur:any, ind:any) => {
        if (cur) {
            setActiveSlide(ind.slideIndex)
        }
    }

    const colorState = useSelector(getcolorState)

    const onMouseEnter = (event:any, index: number) => {
        if(currentSlideRef?.current) {
            if(index === activeSlide) {
                setPreviousX(currentSlideRef?.current.getBoundingClientRect().left)
            }
        }
    }

    const onMouseMove = (event:any, index: number) => {
        if((index === activeSlide) && currentSlideRef?.current) {

            const currentX = event.clientX

            if (currentX > previousX) {
                setMoveLeft(false)
            } else if (currentX < previousX) {
                setMoveLeft(true)
            }

            setPreviousX(currentX)
        }
    }

    const onMouseLeave = () => {
        setMoveLeft(null)
    }

    return (
        <section className={`${styles.section} ${colorState === 'dark' ? styles.dark : styles.light}`}>
            <div className='container-fluid'>
                <div className='row'>
                    <figure className={styles.bgImage}>
                        <Image src={services[activeSlide].url} fill style={{ objectFit: 'cover' }} alt="..."></Image>
                    </figure>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className={`${styles.wrapper} rs-services__wrapper`}>
                            <Splide onActive={onActive} options={options}
                                aria-label="My Favorite Images">
                                {
                                    services.map((service: any, index: number) => {
                                        return (
                                            <SplideSlide key={index} onMouseEnter={(evt)=>onMouseEnter(evt,index)} onMouseMove={(evt)=>onMouseMove(evt,index)} onMouseLeave={onMouseLeave}>
                                                <div ref={currentSlideRef} key={`servic-${index}`}>
                                                    <article style={{
                                                        height: 400,
                                                        transition: '0.8s all',
                                                        padding: `${index === activeSlide ? '2rem 0' : '2rem 1rem'}`,
                                                        transform: `${index === activeSlide ? movedLeft === null ? '' : movedLeft ? 'perspective(2000px) rotateY(-20deg)' : 'perspective(2000px) rotateY(20deg)' : ''}`,

                                                    }}>
                                                        <figure
                                                            // className={`${styles.test}`}
                                                            style={{
                                                                position: 'relative',
                                                                width: '100%',
                                                                height: '100%',
                                                                // transform: index === activeSlide ? 'unset' : `translateX(${ index > activeSlide ? 26 : -26}px) perspective(600px) rotateY(${ index > activeSlide ? -10 : 10}deg) scale(0.9)`
                                                                // '-webkit-transform-origin-x': 0,
                                                                // '-webkit-transform': `rotateY(8deg)`
                                                                // transform: index === activeSlide ? 'unset' : `matrix3d(1, 0, 1, ${ index > activeSlide ? -0.001 : 0.001}, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1) scale(0.8)`
                                                            }}>
                                                            <Image src={service.url} fill style={{ objectFit: 'cover' }} alt=".."></Image>
                                                            {/* <MdOutlineDesignServices color={colorState === 'dark' ? '#651FFF' : '#651FFF'}></MdOutlineDesignServices> */}
                                                            {/* <figcaption>
                                                          <span className={righteous.className}>{service.title}</span>
                                                          <p>{service.description}</p>
                                                      </figcaption> */}
                                                        </figure>
                                                    </article>
                                                </div>
                                            </SplideSlide>
                                        )
                                    })
                                }
                            </Splide>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
