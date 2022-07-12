import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {RiHome8Line , RiServiceLine, RiBriefcase2Fill, RiChat1Line, RiMagicLine, RiMailSendLine } from 'react-icons/ri';
import { BsPeople } from 'react-icons/bs';

import { IoSettingsOutline } from 'react-icons/io5';
import { FaFacebook , FaInstagram , FaLinkedin , FaGithubAlt } from 'react-icons/fa';
import { changeColorState, getcolorState } from '../AppSlice';
import { Link } from 'react-router-dom';
import { changeMenuStatus, getMenuStatus } from '../features/body/BodySlice';

function Tooltip (props){
    const { className, children, title } = props;
    return(
        <div className={ className } >
            { children }
            <span>{ title }</span>
        </div>
    )
}

export default function Header( props ) {

    const {refs} = props;
    const refNav = useRef();

    const colorState = useSelector(getcolorState);
    const dispatch = useDispatch();

    const menuState = useSelector(getMenuStatus);

    const onModeChange = (e) =>{
        e.preventDefault();
        dispatch(changeColorState());
    }

    const toggleMenu = (e) =>{
        e.preventDefault();
        dispatch(changeMenuStatus());
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
                                            <Link to="/" onClick={()=>refs.home.homeRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}><RiHome8Line></RiHome8Line></Link>
                                            <Tooltip onClick={()=>refs.home.homeRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="rs-banner__tooltip" title="Home">
                                                <RiHome8Line></RiHome8Line>
                                            </Tooltip>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={()=>refs.about.aboutRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}><BsPeople></BsPeople></Link>
                                            <Tooltip onClick={()=>refs.about.aboutRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="rs-banner__tooltip" title="About">
                                                <BsPeople></BsPeople>
                                            </Tooltip>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={()=>refs.experience.experienceRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}><RiBriefcase2Fill></RiBriefcase2Fill></Link>
                                            <Tooltip className="rs-banner__tooltip" title="Experience">
                                                <RiBriefcase2Fill></RiBriefcase2Fill>
                                            </Tooltip>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={()=>refs.services.servicesRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}><RiServiceLine></RiServiceLine></Link>
                                            <Tooltip className="rs-banner__tooltip" title="Services">
                                                <RiServiceLine></RiServiceLine>
                                            </Tooltip>
                                        </li>
                                        <li>
                                            <Link to="/"><RiChat1Line></RiChat1Line></Link>
                                            <Tooltip className="rs-banner__tooltip" title="About">
                                                <RiChat1Line></RiChat1Line>
                                            </Tooltip>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={()=>refs.testimonial.testimonialRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}><RiMagicLine></RiMagicLine></Link>
                                            <Tooltip className="rs-banner__tooltip" title="Testimonial">
                                                <RiMagicLine></RiMagicLine>
                                            </Tooltip>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={()=>refs.contact.contactRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}><RiMailSendLine></RiMailSendLine></Link>
                                            <Tooltip className="rs-banner__tooltip" title="Contact me">
                                                <RiMailSendLine></RiMailSendLine>
                                            </Tooltip>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className='rs-banner__main-banner'>
                                <div className="rs-banner__content">
                                    <h2>Hello World,</h2>
                                    <h3>I am Rikesh, Frontend Dev</h3>
                                    <p>Almost 6 year + experience in software engineering field, most focused on frontend stack.</p>
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link to="/">
                                                    <FaFacebook className='icon icon-facebook'></FaFacebook>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <FaInstagram className='icon icon-instagram'></FaInstagram>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <FaLinkedin className='icon icon-linkedin'></FaLinkedin>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <FaGithubAlt className='icon icon-github'></FaGithubAlt>
                                                </Link>
                                            </li>
                                        </ul>

                                    </nav>
                                </div>
                                <div className="dropdown rs-banner__dropdown">
                                    <button className="btn btn-primary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <IoSettingsOutline color="white"></IoSettingsOutline>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li onClick={onModeChange}><Link className='dropdown-item' to="/">{ colorState === "dark" ? "Light mode" : "Dark mode"}</Link></li>
                                        <li><Link className='dropdown-item' to="/">Download Pdf</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
