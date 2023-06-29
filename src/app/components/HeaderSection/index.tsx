import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {RiHome8Line , RiServiceLine, RiBriefcase2Fill, RiChat1Line, RiMagicLine, RiMailSendLine } from 'react-icons/ri';
import { BsPeople } from 'react-icons/bs';
import { FaFacebook , FaInstagram , FaLinkedin , FaGithubAlt } from 'react-icons/fa';
import { changeColorState, getGreetState } from '../../../redux/AppSlice';
// import { Link } from 'react-router-dom';
import Link from 'next/link'
import { changeMenuStatus, getMenuStatus } from '../../../redux/features/body/BodySlice';
import { lang } from './../../../utils/Constant'
import { Refs } from '../../../pages';
import { Toggle } from '../ToggleButton';

interface ToolTipsProps {
    className: string,
    children: string | JSX.Element | JSX.Element
    title: string
    onClick?: () => void;
}

function Tooltip (props:ToolTipsProps){
    const { className, children, title } = props;
    return(
        <div className={ className } >
            { children }
            <span>{ title }</span>
        </div>
    )
}

interface HeaderSectionProps {
    refs: Refs;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ refs }) => {

    const refNav:MutableRefObject<HTMLElement | null> = useRef(null);
    const dispatch = useDispatch();

    const menuState = useSelector(getMenuStatus);

    const greetState = useSelector(getGreetState);

    const [hello , setHello] = useState({language:"Hello", hello: 'Welcome!'});

    useEffect(()=>{
        let count = 0;
        setInterval(function(){
            setHello(lang[count]);
          count++;
        },3000)
    },[])

    const toggleMenu: React.MouseEventHandler<HTMLDivElement> = (e) =>{
        e.preventDefault();
        dispatch(changeMenuStatus());
    }

    const toggleCallback = (isToggled:boolean) => {
        dispatch(changeColorState());
    }

    return (
        <section ref={ refs.home.homeRef } className='rs-banner__section'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className='rs-banner__wrapper'>
                            <div className='rs-banner__sidebar'>
                                <div className='rs-banner__logo' onClick={toggleMenu}>
                                    <span>RS</span>
                                </div>
                                <nav className={menuState ? 'rs-banner__navigation rs-banner__navigation--open' : 'rs-banner__navigation rs-banner__navigation--close'} ref={refNav}>
                                    <ul>
                                        <li>
                                            <Link href="/" onClick={()=>refs.home.homeRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}><RiHome8Line></RiHome8Line></Link>
                                            <Tooltip onClick={()=>refs.home.homeRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="rs-banner__tooltip" title="Home">
                                                <RiHome8Line></RiHome8Line>
                                            </Tooltip>
                                        </li>
                                        <li>
                                            <Link href="/" onClick={()=>refs.about.aboutRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}><BsPeople></BsPeople></Link>
                                            <Tooltip onClick={()=>refs.about.aboutRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="rs-banner__tooltip" title="About">
                                                <BsPeople></BsPeople>
                                            </Tooltip>
                                        </li>
                                        <li>
                                            <Link href="/" onClick={()=>refs.experience.experienceRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}><RiBriefcase2Fill></RiBriefcase2Fill></Link>
                                            <Tooltip className="rs-banner__tooltip" title="Experience">
                                                <RiBriefcase2Fill></RiBriefcase2Fill>
                                            </Tooltip>
                                        </li>
                                        <li>
                                            <Link href="/" onClick={()=>refs.services.servicesRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}><RiServiceLine></RiServiceLine></Link>
                                            <Tooltip className="rs-banner__tooltip" title="Services">
                                                <RiServiceLine></RiServiceLine>
                                            </Tooltip>
                                        </li>
                                        <li>
                                            <Link href="/"><RiChat1Line></RiChat1Line></Link>
                                            <Tooltip className="rs-banner__tooltip" title="About">
                                                <RiChat1Line></RiChat1Line>
                                            </Tooltip>
                                        </li>
                                        <li>
                                            <Link href="/" onClick={()=>refs.testimonial.testimonialRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}><RiMagicLine></RiMagicLine></Link>
                                            <Tooltip className="rs-banner__tooltip" title="Testimonial">
                                                <RiMagicLine></RiMagicLine>
                                            </Tooltip>
                                        </li>
                                        <li>
                                            <Link href="/" onClick={()=>refs.contact.contactRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}><RiMailSendLine></RiMailSendLine></Link>
                                            <Tooltip className="rs-banner__tooltip" title="Contact me">
                                                <RiMailSendLine></RiMailSendLine>
                                            </Tooltip>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className='rs-banner__main-banner'>
                                <div className="rs-banner__content">
                                    <h2><strong>{hello ? hello.hello : "Hello"}</strong> {greetState},</h2>
                                    <h3>I am Rikesh, Frontend Dev</h3>
                                    <p>Almost 6 year + experience in software engineering field, most focused on frontend stack.</p>
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link href="/">
                                                    <FaFacebook className='icon icon-facebook'></FaFacebook>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <FaInstagram className='icon icon-instagram'></FaInstagram>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <FaLinkedin className='icon icon-linkedin'></FaLinkedin>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <FaGithubAlt className='icon icon-github'></FaGithubAlt>
                                                </Link>
                                            </li>
                                        </ul>

                                    </nav>
                                </div>
                                <div className="dropdown rs-banner__dropdown">
                                    <Toggle label="Mode" toggled={true} cb={toggleCallback}></Toggle>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default HeaderSection