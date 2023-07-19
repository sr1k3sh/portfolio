import React from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { Refs } from '../../../pages'
import { Righteous } from 'next/font/google'
import BlogListItem from '../blogListItem'
import Link from 'next/link'
import { getThemeMode } from 'src/redux/ThemeSlice'

interface Props {
    refs: Refs
    blogs: any
}

const righteous = Righteous({
    weight: '400',
    subsets: ['latin']
})

export default function Experience(props: Props) {
    const { refs , blogs} = props
    const colorState = useSelector(getThemeMode)
    return (
        <section ref={refs.experience.experienceRef} className={colorState === 'dark' ? 'rs-exp__section rs-exp__section--dark' : 'rs-exp__section rs-exp__section--light'}>
            <div className='rs-exp__float-bg'>
                <svg version="1.1" id="Layer_1" width="845" height="1099" x="0px" y="0px"
                    viewBox="0 0 845.2 1099.8" >
                    <g>
                        <g>
                            <circle className="st0" cx="42.4" cy="53" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="116.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="179.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="243.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="306.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="369.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="433.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="496.5" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="559.9" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="623.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="686.6" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="750" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="813.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="876.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="940.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="993.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="42.4" cy="1046.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="53" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="116.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="179.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="243.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="306.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="369.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="433.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="496.5" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="559.9" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="623.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="686.6" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="750" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="813.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="876.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="940.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="993.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="105.8" cy="1046.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="53" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="116.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="179.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="243.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="306.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="369.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="433.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="496.5" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="559.9" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="623.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="686.6" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="750" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="813.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="876.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="940.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="993.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="169.1" cy="1046.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="53" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="116.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="179.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="243.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="306.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="369.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="433.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="496.5" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="559.9" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="623.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="686.6" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="750" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="813.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="876.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="940.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="993.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="232.5" cy="1046.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="53" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="116.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="179.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="243.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="306.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="369.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="433.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="496.5" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="559.9" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="623.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="686.6" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="750" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="813.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="876.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="940.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="993.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="295.8" cy="1046.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="53" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="116.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="179.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="243.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="306.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="369.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="433.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="496.5" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="559.9" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="623.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="686.6" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="750" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="813.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="876.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="940.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="993.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="359.2" cy="1046.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="53" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="116.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="179.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="243.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="306.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="369.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="433.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="496.5" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="559.9" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="623.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="686.6" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="750" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="813.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="876.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="940.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="993.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="422.6" cy="1046.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="53" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="116.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="179.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="243.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="306.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="369.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="433.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="496.5" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="559.9" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="623.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="686.6" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="750" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="813.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="876.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="940.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="993.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="485.9" cy="1046.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="53" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="116.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="179.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="243.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="306.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="369.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="433.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="496.5" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="559.9" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="623.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="686.6" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="750" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="813.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="876.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="940.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="993.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="549.3" cy="1046.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="53" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="116.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="179.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="243.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="306.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="369.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="433.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="496.5" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="559.9" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="623.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="686.6" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="750" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="813.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="876.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="940.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="993.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="612.7" cy="1046.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="53" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="116.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="179.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="243.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="306.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="369.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="433.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="496.5" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="559.9" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="623.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="686.6" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="750" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="813.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="876.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="940.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="993.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="676" cy="1046.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="53" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="116.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="179.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="243.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="306.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="369.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="433.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="496.5" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="559.9" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="623.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="686.6" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="750" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="813.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="876.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="940.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="993.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="739.4" cy="1046.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="53" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="116.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="179.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="243.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="306.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="369.8" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="433.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="496.5" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="559.9" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="623.2" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="686.6" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="750" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="813.3" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="876.7" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="940.1" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="993.4" r="7.3" />
                        </g>
                        <g>
                            <circle className="st0" cx="802.8" cy="1046.8" r="7.3" />
                        </g>
                    </g>
                </svg>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2'>
                        <div className='rs-exp__headline'>
                            <h2>Rikesh Shrestha</h2>
                        </div>
                    </div>
                    <div className='col-md-10'>
                        <div className="rs-exp__wrapper">
                            <div className="rs-exp__work-history">
                                <h3 className={righteous.className}>Work experience</h3>
                                <ul>
                                    <li>
                                        <header>
                                            <h1 className={righteous.className}>Frontend Developer </h1>
                                            <h2>Freelancer </h2>
                                            <span>October 2021 – Present</span>
                                        </header>
                                    </li>
                                    <li>
                                        <header>
                                            <h1 className={righteous.className}>Frontend Developer</h1>
                                            <h2>Itonics Nepal</h2>
                                            <span>January 2020 – October 2021</span>
                                        </header>
                                    </li>
                                    <li>
                                        <header>
                                            <h1 className={righteous.className}>Web Developer</h1>
                                            <h2>GsignalX Pvt Ltd</h2>
                                            <span> February 2018 – December 2019</span>
                                        </header>
                                    </li>
                                    <li>
                                        <header>
                                            <h1 className={righteous.className}>Software Engineer</h1>
                                            <h2>Arrtsm Gmbh</h2>
                                            <span>December 2016 – February 2018</span>
                                        </header>
                                    </li>
                                    <li>
                                        <header>
                                            <h1 className={righteous.className}>Web Developer</h1>
                                            <h2>North american web</h2>
                                            <span>Aug 2016 – Feb 2017</span>
                                        </header>
                                    </li>
                                </ul>
                            </div>
                            <div className='rs-exp__work-skills'>
                                <div className='rs-exp__skills'>
                                    <h3 className={righteous.className}>SKILL AND EXPERTISE</h3>
                                    <ul>
                                        <li><Image priority={false} src='/images/html.svg' width={300} height={300} alt="Rikesh Shrestha, HTML"></Image></li>
                                        <li><Image priority={false} src={'/images/css.svg'} width={300} height={300} alt="Rikesh Shrestha, CSS"></Image></li>
                                        <li><Image priority={false} src={'/images/sass.svg'} width={300} height={300} alt="Rikesh Shrestha, SASS"></Image></li>
                                        <li><Image priority={false} src={'/images/js.svg'} width={300} height={300} alt="Rikesh Shrestha, Javascript"></Image></li>
                                        <li><Image priority={false} src={'/images/react.svg'} width={300} height={300} alt="Rikesh Shrestha, React"></Image></li>
                                        <li><Image priority={false} src={'/images/angular.svg'} width={300} height={300} alt="Rikesh Shrestha, Angular"></Image></li>
                                        <li><Image priority={false} src={'/images/vue.svg'} width={300} height={300} alt="Rikesh Shrestha, Vue"></Image></li>
                                        <li><Image priority={false} src={'/images/mongodb.svg'} width={300} height={300} alt="Rikesh Shrestha, MongoDb"></Image></li>
                                        <li><Image priority={false} src={'/images/mysql.svg'} width={300} height={300} alt="Rikesh Shrestha, mysql"></Image></li>
                                        <li><Image priority={false} src={'/images/node.svg'} width={300} height={300} alt="Rikesh Shrestha, Node.js"></Image></li>
                                        <li><Image priority={false} src={'/images/firebase.svg'} width={300} height={300} alt="Rikesh Shrestha, Firebase"></Image></li>
                                        <li><Image priority={false} src={'/images/express.svg'} width={300} height={300} alt="Rikesh Shrestha, EXpress"></Image></li>
                                        <li><Image priority={false} src={'/images/figma-1.svg'} width={300} height={300} alt="Rikesh Shrestha, Figma"></Image></li>
                                        <li><Image priority={false} src={'/images/xd.svg'} width={300} height={300} alt="Rikesh Shrestha, xd"></Image></li>
                                        <li><Image priority={false} src={'/images/zeplin.svg'} width={300} height={300} alt="Rikesh Shrestha, Zeplin"></Image></li>
                                        <li><Image priority={false} src={'/images/git.svg'} width={300} height={300} alt="Rikesh Shrestha, git"></Image></li>
                                        <li><Image priority={false} src={'/images/github.svg'} width={300} height={300} alt="Rikesh Shrestha, github"></Image></li>
                                        <li><Image priority={false} src={'/images/bitbucket.svg'} width={300} height={300} alt="Rikesh Shrestha, bitbucket"></Image></li>
                                        <li><Image priority={false} src={'/images/jira.svg'} width={300} height={300} alt="Rikesh Shrestha, jira"></Image></li>
                                        <li><Image priority={false} src={'/images/netlify.svg'} width={300} height={300} alt="Rikesh Shrestha, netlify"></Image></li>
                                        <li><Image priority={false} src={'/images/heroku.svg'} width={300} height={300} alt="Rikesh Shrestha, heroku"></Image></li>
                                        <li><Image priority={false} src={'/images/vscode.svg'} width={300} height={300} alt="Rikesh Shrestha, vscode"></Image></li>
                                    </ul>
                                </div>
                                <div className='rs-exp__blogs'>
                                    <h3 className={righteous.className}>Recent blogs</h3>
                                    <ul className='rs-exp__blog-list'>
                                        {
                                            blogs.data.map((blog:any,index:number) => <li key={index}>
                                                <BlogListItem blogDetail={blog} ></BlogListItem>
                                            </li>)
                                        }
                                    </ul>
                                    <Link href={'/blogs'} className={`rs-exp__more ${righteous.className}`}> Read more blogs</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
