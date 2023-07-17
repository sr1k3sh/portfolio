import React from 'react'
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
        imageUrl: "url-to-image-website-development"
    },
    {
        title: "UI/UX Design",
        description: "Creating visually appealing and intuitive user interfaces and user experience designs.",
        imageUrl: "url-to-image-ui-ux-design"
    },
    {
        title: "Responsive Design",
        description: "Ensuring that websites and applications adapt and function well across different devices and screen sizes.",
        imageUrl: "url-to-image-responsive-design"
    },
    {
        title: "Frontend Optimization",
        description: "Optimizing website performance, speed, and efficiency by minimizing file sizes and optimizing code.",
        imageUrl: "url-to-image-frontend-optimization"
    },
    {
        title: "Cross-Browser Compatibility",
        description: "Ensuring consistent website functionality and appearance across different web browsers and versions.",
        imageUrl: "url-to-image-cross-browser-compatibility"
    },
    {
        title: "Wireframing and Prototyping",
        description: "Creating wireframes and interactive prototypes to visualize and test user flows and interactions.",
        imageUrl: "url-to-image-wireframing-prototyping"
    },
    {
        title: "Mobile App Design",
        description: "Designing engaging and intuitive mobile app interfaces for iOS and Android platforms.",
        imageUrl: "url-to-image-mobile-app-design"
    },
    {
        title: "Frontend Testing and Debugging",
        description: "Conducting testing and debugging to ensure frontend code is error-free and functions as intended.",
        imageUrl: "url-to-image-frontend-testing-debugging"
    },
    {
        title: "CMS Integration",
        description: "Integrating content management systems to enable easy content updates and management.",
        imageUrl: "url-to-image-cms-integration"
    },
    {
        title: "Animation and Motion Graphics",
        description: "Creating interactive and visually appealing animations and motion graphics for websites and applications.",
        imageUrl: "url-to-image-animation-motion-graphics"
    },
    {
        title: "Frontend Consulting and Strategy",
        description: "Providing guidance and strategic planning for frontend development projects, including technology stack selection and architecture design.",
        imageUrl: "url-to-image-frontend-consulting-strategy"
    },
    {
        title: "Performance Optimization",
        description: "Analyzing and improving website and application performance to ensure fast loading times and smooth user experiences.",
        imageUrl: "url-to-image-performance-optimization"
    },
]

export default function Services(props: Props) {
    const { refs } = props

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow className="slick-arrow slick-next"></NextArrow>,
        prevArrow: <PrevArrow className="slick-arrow slick-next"></PrevArrow>,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    arrows: false,
                    // centerMode: true,
                    // centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    // centerMode: true,
                    // centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    arrows: false,
                    // centerMode: true,
                    // centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    }
    const colorState = useSelector(getcolorState)

    return (
        <section ref={refs.services.servicesRef} className={colorState === 'dark' ? 'rs-services__section rs-services__section--dark' : 'rs-services__section rs-services__section--light'}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='rs-services__wrapper'>
                            <div className='rs-services__my-services'>
                                <div className='rs-services__content'>
                                    <h2 className={righteous.className}>Services</h2>
                                    <p>{`I'm happy to assist you to grow your business`}</p>
                                </div>
                                <MdDoubleArrow color={colorState === 'dark' ? 'white' : '#651FFF'}></MdDoubleArrow>
                            </div>
                            <Slider {...settings}>
                                <div>
                                    <article className='rs-services__card rs-services__card--empty'>

                                    </article>
                                </div>
                                {
                                    services.map((service: any, index: number) => (
                                        <div key={`servic-${index}`}>
                                            <article className='rs-services__card'>
                                                <figure className='rs-services__figure'>
                                                    <MdOutlineDesignServices color={colorState === 'dark' ? '#651FFF' : '#651FFF'}></MdOutlineDesignServices>
                                                    <figcaption>
                                                        <span className={righteous.className}>{service.title}</span>
                                                        <p>{service.description}</p>
                                                    </figcaption>
                                                </figure>
                                            </article>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
