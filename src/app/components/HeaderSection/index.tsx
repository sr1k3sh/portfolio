import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaFacebook , FaInstagram , FaLinkedin , FaGithubAlt } from 'react-icons/fa'
import { getGreetState } from '../../../redux/AppSlice'
import Link from 'next/link'
import { lang } from './../../../utils/Constant'
import { Refs } from '../../../pages'
import { Righteous} from 'next/font/google'

const righteous = Righteous({
    weight: '400',
    subsets: ['latin']
})

interface HeaderSectionProps {
    refs: Refs
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ refs }) => {

    const greetState = useSelector(getGreetState)

    const [hello , setHello] = useState({language:"Hello", hello: 'Welcome!'})

    useEffect(()=>{
        let count = 0
        setInterval(function(){
            setHello(lang[count])
          count++
        },3000)
    },[])

    return (
        <section ref={ refs.home.homeRef } className='rs-banner__section'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        {/* <NavBar refs={refs} isHome={true}></NavBar> */}
                        <div className='rs-banner__wrapper'>
                            <div className='rs-banner__main-banner'>
                                <div className="rs-banner__content">
                                    <h2><strong>{hello ? hello.hello : "Hello"}</strong> {greetState},</h2>
                                    <h3 className={righteous.className}>I am Rikesh, Frontend Dev</h3>
                                    <p>Almost 6 year + experience in software engineering field, most focused on frontend stack.</p>
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link href="https://www.facebook.com/rikezzzzzzzzzzz">
                                                    <FaFacebook className='icon icon-facebook'></FaFacebook>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.instagram.com/r1k3sh/">
                                                    <FaInstagram className='icon icon-instagram'></FaInstagram>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.linkedin.com/in/rikesh-shrestha-62539b111/">
                                                    <FaLinkedin className='icon icon-linkedin'></FaLinkedin>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://github.com/sr1k3sh">
                                                    <FaGithubAlt className='icon icon-github'></FaGithubAlt>
                                                </Link>
                                            </li>
                                        </ul>

                                    </nav>
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