import React from 'react'
import { RiWindowsFill , RiAppleFill , RiUbuntuFill } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { Refs } from '../../../pages'
import Image from 'next/image'
import { getThemeMode } from 'src/redux/ThemeSlice'
import { proza, sansFont } from 'src/utils/fonts'

interface AboutSectionProps {
    refs: Refs
}

export default function About(props:AboutSectionProps) {
    const { refs } = props
    const colorState = useSelector(getThemeMode)

    return (
        <section ref={ refs.about.aboutRef } id="about" className={`${colorState === 'dark' ? 'rs-about__section rs-about__section--dark' : 'rs-about__section rs-about__section--light'} py-8`}>
            {/* <div className='rs-about__float-bg'>
                <svg version="1.1" id="Layer_1" width="845" height="1099" x="0px" y="0px"
                    viewBox="0 0 845.2 1099.8" >
                    <g>
                        <g>
                            <circle className="st0" cx="42.4" cy="53" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="116.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="179.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="243.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="306.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="369.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="433.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="496.5" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="559.9" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="623.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="686.6" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="750" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="813.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="876.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="940.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="993.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="1046.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="53" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="116.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="179.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="243.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="306.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="369.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="433.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="496.5" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="559.9" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="623.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="686.6" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="750" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="813.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="876.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="940.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="993.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="1046.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="53" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="116.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="179.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="243.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="306.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="369.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="433.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="496.5" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="559.9" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="623.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="686.6" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="750" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="813.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="876.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="940.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="993.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="1046.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="53" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="116.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="179.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="243.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="306.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="369.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="433.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="496.5" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="559.9" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="623.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="686.6" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="750" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="813.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="876.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="940.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="993.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="1046.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="53" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="116.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="179.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="243.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="306.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="369.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="433.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="496.5" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="559.9" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="623.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="686.6" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="750" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="813.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="876.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="940.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="993.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="1046.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="53" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="116.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="179.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="243.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="306.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="369.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="433.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="496.5" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="559.9" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="623.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="686.6" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="750" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="813.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="876.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="940.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="993.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="1046.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="53" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="116.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="179.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="243.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="306.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="369.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="433.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="496.5" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="559.9" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="623.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="686.6" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="750" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="813.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="876.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="940.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="993.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="1046.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="53" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="116.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="179.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="243.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="306.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="369.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="433.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="496.5" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="559.9" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="623.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="686.6" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="750" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="813.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="876.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="940.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="993.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="1046.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="53" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="116.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="179.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="243.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="306.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="369.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="433.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="496.5" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="559.9" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="623.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="686.6" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="750" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="813.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="876.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="940.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="993.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="1046.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="53" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="116.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="179.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="243.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="306.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="369.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="433.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="496.5" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="559.9" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="623.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="686.6" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="750" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="813.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="876.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="940.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="993.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="1046.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="53" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="116.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="179.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="243.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="306.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="369.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="433.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="496.5" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="559.9" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="623.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="686.6" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="750" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="813.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="876.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="940.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="993.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="1046.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="53" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="116.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="179.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="243.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="306.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="369.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="433.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="496.5" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="559.9" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="623.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="686.6" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="750" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="813.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="876.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="940.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="993.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="1046.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="53" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="116.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="179.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="243.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="306.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="369.8" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="433.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="496.5" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="559.9" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="623.2" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="686.6" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="750" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="813.3" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="876.7" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="940.1" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="993.4" r="7.3"/>
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="1046.8" r="7.3"/>
                        </g>
                    </g>
                </svg>
            </div> */}
            <div className='container m-auto'>
                <div className='flex flex-col justify-center gap-10 md:flex-row md:items-center'>
                    <div className='md:w-3/4'>
                        <p className={`${sansFont.className} first-letter:text-7xl first-letter:${proza.className} first-letter:text-primary first-letter:font-bold first-letter:text-black first-letter:mr-3  first-letter:float-left`}>As a frontend developer, I code with a brush of creativity and a palette of pixels, crafting immersive experiences that dance at the intersection of aesthetics and functionality. With each line of code, I sculpt user journeys, painting interfaces that not only work seamlessly but also breathe life into design dreams. For me, coding is an art, and UI/UX is my canvas – a canvas where pixels come alive, telling stories of beauty and interaction.</p>
                    </div>
                    <div className='w-1/4'>
                        <div className='flex justify-center items-center w-64 height-64'>
                            <figure className='relative rounded-full w-64 h-64'>
                                <span className="animate-wiggle absolute inline-flex h-full w-full rounded-full bg-secondary bg-opacity-10 opacity-100 z-0 dark:bg-black-400"></span>
                                <Image className='w-64 h-64 rounded-full overflow-hidden object-cover border-white-300 border-8 z-10' priority={true} src='/profile.png' fill alt="Rikesh Shrestha, Frontend Developer in japan" ></Image>
                            </figure>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
