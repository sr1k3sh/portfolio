import React from 'react'
import Slider from 'react-slick';

import { SiProtonvpn } from 'react-icons/si';
import { MdOutlineFeaturedPlayList , MdOutlineDesignServices , MdDoubleArrow } from 'react-icons/md';
import { FaConnectdevelop } from 'react-icons/fa';
import { AiFillShop } from 'react-icons/ai';
import { IoIosArrowForward , IoIosArrowBack } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { getcolorState } from '../AppSlice';

function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <button
        className={className}
        onClick={onClick}>
         <IoIosArrowForward></IoIosArrowForward>
        </button>
    );
}

function PrevArrow(props){
    const { className , onClick} = props;
    return (
        <button className={ className } onClick={onClick}>
            <IoIosArrowBack></IoIosArrowBack>
        </button>
    )
}

export default function Services() {
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
    };
    const colorState = useSelector(getcolorState);
    return (
        <section className={colorState === 'dark' ? 'rs-services__section rs-services__section--dark' : 'rs-services__section rs-services__section--light'}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='rs-services__wrapper'>
                            <div className='rs-services__my-services'>
                                <div className='rs-services__content'>
                                    <h2>Services</h2>
                                    <p>I'm happy to assist you to grow your business</p>
                                </div>
                                <MdDoubleArrow color={colorState === 'dark' ? 'white' :'#651FFF'}></MdDoubleArrow>
                            </div>
                            <Slider {...settings}>
                                <div>
                                    <article className='rs-services__card rs-services__card--empty'>

                                    </article>
                                </div>
                                <div>
                                    <article className='rs-services__card'>
                                        <figure className='rs-services__figure'>
                                            <MdOutlineDesignServices color={colorState === 'dark' ? '#651FFF' :'#651FFF'}></MdOutlineDesignServices>
                                            <figcaption>
                                                <span>UI design</span>
                                                <p>web design/mobile app design</p>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </div>
                                <div>
                                    <article className='rs-services__card'>
                                        <figure className='rs-services__figure'>
                                            <SiProtonvpn color={colorState === 'dark' ? '#651FFF' :'#651FFF'}></SiProtonvpn>
                                            <figcaption>
                                                <span>HTML prototyping</span>
                                                <p>I can help you with html prototyping from given design</p>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </div>
                                <div>
                                    <article className='rs-services__card'>
                                        <figure className='rs-services__figure'>
                                            <MdOutlineFeaturedPlayList color={colorState === 'dark' ? '#651FFF' :'#651FFF'}></MdOutlineFeaturedPlayList>
                                            <figcaption>
                                                <span>Feature request</span>
                                                <p>I can add features to the existing site with proper outcome</p>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </div>
                                <div>
                                    <article className='rs-services__card'>
                                        <figure className='rs-services__figure'>
                                            <FaConnectdevelop color={colorState === 'dark' ? '#651FFF' :'#651FFF'}></FaConnectdevelop>
                                            <figcaption>
                                                <span>Ecommerce website</span>
                                                <p>I can help you with your ideas into a complete website/webapp</p>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </div>
                                <div>
                                <article className='rs-services__card'>
                                        <figure className='rs-services__figure'>
                                            <AiFillShop color={colorState === 'dark' ? '#651FFF' :'#651FFF'}></AiFillShop>
                                            <figcaption>
                                                <span>Feature request</span>
                                                <p>I can add features to the existing site with proper outcome</p>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </div>
                                <div>
                                <article className='rs-services__card'>
                                        <figure className='rs-services__figure'>
                                            <MdOutlineFeaturedPlayList color={colorState === 'dark' ? '#651FFF' :'#651FFF'}></MdOutlineFeaturedPlayList>
                                            <figcaption>
                                                <span>Feature request</span>
                                                <p>I can add features to the existing site with proper outcome</p>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
