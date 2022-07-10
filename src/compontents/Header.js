import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {RiHome8Line , RiProfileLine, RiCustomerServiceLine, RiChat1Line, RiMagicLine, RiContactsBook2Line } from 'react-icons/ri';
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

export default function Header() {

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
        <section className='rs-banner__section'>
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
                                            <Link to="/"><RiHome8Line></RiHome8Line></Link>
                                            <Tooltip className="rs-banner__tooltip" title="Home">
                                                <RiHome8Line></RiHome8Line>
                                            </Tooltip>
                                        </li>
                                        <li>
                                            <Link to="/"><RiProfileLine></RiProfileLine></Link>
                                            <Tooltip className="rs-banner__tooltip" title="About">
                                                <RiProfileLine></RiProfileLine>
                                            </Tooltip>
                                        </li>
                                        <li>
                                            <Link to="/"><RiCustomerServiceLine></RiCustomerServiceLine></Link>
                                            <Tooltip className="rs-banner__tooltip" title="Services">
                                                <RiCustomerServiceLine></RiCustomerServiceLine>
                                            </Tooltip>
                                        </li>
                                        <li>
                                            <Link to="/"><RiChat1Line></RiChat1Line></Link>
                                            <Tooltip className="rs-banner__tooltip" title="About">
                                                <RiChat1Line></RiChat1Line>
                                            </Tooltip>
                                        </li>
                                        <li>
                                            <Link to="/"><RiMagicLine></RiMagicLine></Link>
                                            <Tooltip className="rs-banner__tooltip" title="Testimonial">
                                                <RiMagicLine></RiMagicLine>
                                            </Tooltip>
                                        </li>
                                        <li>
                                            <Link to="/"><RiContactsBook2Line></RiContactsBook2Line></Link>
                                            <Tooltip className="rs-banner__tooltip" title="Contact me">
                                                <RiContactsBook2Line></RiContactsBook2Line>
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
                                        <li onClick={onModeChange}><Link className='dropdown-item' to="/">{ colorState === "dark" ? "light mode" : "dark mode"}</Link></li>
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
