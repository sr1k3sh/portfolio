import { Righteous } from 'next/font/google'
import Link from 'next/link'
import React, { MutableRefObject, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeMenuStatus, getMenuStatus } from 'src/redux/features/body/BodySlice'
import {RiHome8Line , RiServiceLine, RiBriefcase2Fill, RiChat1Line, RiMagicLine, RiMailSendLine } from 'react-icons/ri'
import { BsPeople } from 'react-icons/bs'
import { Refs } from 'src/pages'
import { Toggle } from '../ToggleButton'
import { changeColorState } from 'src/redux/AppSlice'
import styles from './index.module.scss'

const righteous = Righteous({
  weight: '400',
  subsets: ['latin']
})

interface ToolTipsProps {
  className: string,
  children: string | JSX.Element | JSX.Element
  title: string
  onClick?: () => void
}

function Tooltip (props:ToolTipsProps){
  const { className, children, title } = props
  return(
      <div className={ className } >
          { children }
          <span>{ title }</span>
      </div>
  )
}

interface NavBarSectionProps {
  refs?: Refs | null
  isHome?: boolean
}

export default function NavBar({ refs, isHome = false }: NavBarSectionProps) {

  const dispatch = useDispatch()
  const menuState = useSelector(getMenuStatus)

  const refNav:MutableRefObject<HTMLElement | null> = useRef(null)

  const toggleMenu: React.MouseEventHandler<HTMLDivElement> = (e) =>{
    e.preventDefault()
    dispatch(changeMenuStatus())
  }

  const toggleCallback = () => {
    dispatch(changeColorState())
  }

  return (
    <section>
      <div className='container-fluid'>
        <div className='row'>
          <div className={styles.navbar}>
            <div className={styles.sidebar}>
              {
                isHome ?
                <>
                  <div className='rs-banner__logo' onClick={toggleMenu}>
                    <span className={righteous.className}>RS</span>
                  </div>
                  <nav className={menuState ? 'rs-banner__navigation rs-banner__navigation--open' : 'rs-banner__navigation rs-banner__navigation--close'} ref={refNav}>
                    <ul>
                      <li>
                        <Link href="/" onClick={() => refs && refs.home.homeRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}><RiHome8Line></RiHome8Line></Link>
                        <Tooltip onClick={() => {
                          setTimeout(() => {
                            refs && refs.home.homeRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          }, 100)
                        }} className="rs-banner__tooltip" title="Home">
                          <RiHome8Line></RiHome8Line>
                        </Tooltip>
                      </li>
                      <li>
                        <Link href="/" onClick={() => {
                          setTimeout(() => {
                            refs && refs.about.aboutRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          }, 100)
                        }}><BsPeople></BsPeople></Link>
                        <Tooltip onClick={() => {
                          setTimeout(() => {
                            refs && refs.about.aboutRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          }, 100)
                        }} className="rs-banner__tooltip" title="About">
                          <BsPeople></BsPeople>
                        </Tooltip>
                      </li>
                      <li>
                        <Link href="/" onClick={() => {
                          setTimeout(() => {
                            refs && refs.experience.experienceRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          }, 100)
                        }}><RiBriefcase2Fill></RiBriefcase2Fill></Link>
                        <Tooltip className="rs-banner__tooltip" title="Experience">
                          <RiBriefcase2Fill></RiBriefcase2Fill>
                        </Tooltip>
                      </li>
                      <li>
                        <Link href="/" onClick={() => {
                          setTimeout(() => {
                            refs && refs.services.servicesRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          }, 100)
                        }}><RiServiceLine></RiServiceLine></Link>
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
                        <Link href="/" onClick={() => {
                          setTimeout(() => {
                            refs && refs.testimonial.testimonialRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          }, 100)
                        }}><RiMagicLine></RiMagicLine></Link>
                        <Tooltip className="rs-banner__tooltip" title="Testimonial">
                          <RiMagicLine></RiMagicLine>
                        </Tooltip>
                      </li>
                      <li>
                        <Link href="/" onClick={() => {
                          setTimeout(() => {
                            refs && refs.contact.contactRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          }, 100)
                        }}><RiMailSendLine></RiMailSendLine></Link>
                        <Tooltip className="rs-banner__tooltip" title="Contact me">
                          <RiMailSendLine></RiMailSendLine>
                        </Tooltip>
                      </li>
                    </ul>
                  </nav>
                </>
                :
                <Link style={{textDecoration: 'none'}} className='rs-banner__logo' href={'/'}>
                  <span className={righteous.className}>RS</span>
                </Link>
              }
            </div>
            <div className="dropdown rs-banner__dropdown">
                <Toggle label="Mode" cb={toggleCallback}></Toggle>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}