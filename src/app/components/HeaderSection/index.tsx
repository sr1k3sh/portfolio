import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaFacebook , FaInstagram , FaLinkedin , FaGithubAlt } from 'react-icons/fa'
import { getGreetState, getcolorState } from '../../../redux/AppSlice'
import Link from 'next/link'
import { lang } from './../../../utils/Constant'
import { Refs } from '../../../pages'
import { Righteous} from 'next/font/google'
import { getThemeMode } from 'src/redux/ThemeSlice'
import Image from 'next/image'
import { proza, sansFont } from 'src/utils/fonts'

const righteous = Righteous({
    weight: '400',
    subsets: ['latin']
})

interface HeaderSectionProps {
    refs: Refs
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ refs }) => {

    const greetState = useSelector(getGreetState)

    const colorState = useSelector(getThemeMode)

    const [hello , setHello] = useState({language:"Hello", hello: 'Welcome!'})

    useEffect(()=>{
        let count = 0
        setInterval(function(){
            setHello(lang[count])
          count++
        },3000)
    },[])

    return (
        <section ref={ refs.home.homeRef } className={`${colorState === 'dark' ? 'dark' : 'light'} rs-banner__section`}>
            <div className="m-auto container-none">
                <div className="columns-1 flex justify-end">
                    {/* <NavBar refs={refs} isHome={true}></NavBar> */}
                    <div className='w-full md:w-[calc(100%_-_6rem)] relative rounded-3xl overflow-hidden'>
                        <Image src='/bgnew.jpg' className='z-0' fill style={{objectFit: 'cover'}} alt="rikesh, developer, engineer, frontend, japan"></Image>
                        <div className='container m-auto rs-banner__main-banner py-28 z-1 relative'>
                            <div className="rs-banner__content px-4 py-10 md:px-16 md:py-20 bg-white-600 bg-opacity-70 backdrop-blur-md rounded-3xl max-w-3xl dark:bg-black-500">
                                <h2 className={`${proza.className} text-2xl whitespace-normal md:text-4xl mb-2`}><strong className='text-primary'>{hello ? hello.hello : "Hello"}</strong> {greetState},</h2>
                                <h3 className={`${proza.className} font-[500] text-3xl md:text-5xl mb-3`}>I am Rikesh, Frontend Dev</h3>
                                <p className={`${sansFont.className} text-base mb-5`}>Almost 6 year + experience in software engineering field, most focused on frontend stack.</p>
                                <nav>
                                    <ul className='flex flex-row gap-4'>
                                        <li className='bg-black-300 p-2 rounded-full border-4 border-black-600 dark:bg-white-200 dark:border-white-600'>
                                            <Link className='w-full' href="https://www.facebook.com/rikezzzzzzzzzzz">
                                                <FaFacebook className='icon text-primary-light icon-facebook w-6 h-6 dark:text-black-300'></FaFacebook>
                                            </Link>
                                        </li>
                                        <li className='bg-black-300 p-2 rounded-full border-4 border-black-600 dark:bg-white-200 dark:border-white-600'>
                                            <Link href="https://www.instagram.com/r1k3sh/">
                                                <FaInstagram className='icon text-primary-light icon-instagram w-6 h-6 dark:text-black-300'></FaInstagram>
                                            </Link>
                                        </li>
                                        <li className='bg-black-300 p-2 rounded-full border-4 border-black-600 dark:bg-white-200 dark:border-white-600'>
                                            <Link href="https://www.linkedin.com/in/rikesh-shrestha-62539b111/">
                                                <FaLinkedin className='icon text-primary-light icon-linkedin w-6 h-6 dark:text-black-300'></FaLinkedin>
                                            </Link>
                                        </li>
                                        <li className='bg-black-300 p-2 rounded-full border-4 border-black-600 dark:bg-white-200 dark:border-white-600'>
                                            <Link href="https://github.com/sr1k3sh">
                                                <FaGithubAlt className='icon text-primary-light icon-github w-6 h-6 dark:text-black-300'></FaGithubAlt>
                                            </Link>
                                        </li>
                                    </ul>

                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default HeaderSection