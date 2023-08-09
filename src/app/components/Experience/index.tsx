import React from 'react'
import Image from 'next/image'
import { Refs } from '../../../pages'
import BlogListItem from '../blogListItem'
import Link from 'next/link'
import { proza, sansFont } from 'src/utils/fonts'

interface Props {
    refs: Refs
    blogs: any
}

export default function Experience(props: Props) {
    const { refs , blogs} = props
    return (
        <section ref={refs.experience.experienceRef} className={'py-5　md:py-10'}>
            {/* <div className='rs-exp__float-bg'>
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
            </div> */}
            <div className='container m-auto'>
                <div className='flex flex-col md:flex-row'>
                    <div className='w-full md:w-1/12'>
                        <div className='rs-exp__headline h-full relative mb-6 md:mb-0'>
                            <h2 className={`${proza.className} text-6xl xs:text-7xl font-[400] md:whitespace-nowrap text-secondary md:-rotate-90 md:-translate-x-1/2 md:-translate-y-full md:absolute md:left-1/2 md:top-1/2 md:tracking-wider dark:text-white-400`}>Rikesh Shrestha</h2>
                        </div>
                    </div>
                    <div className='w-full md:w-11/12 md:ps-8'>
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 mb-10 md:mb-0">
                                <h3 className={`${proza.className} font-bold text-2xl md:text-3xl uppercase mb-4 md:mb-8`}>Work experience</h3>
                                <ul>
                                    <li className='mb-3 md:mb-6'>
                                        <header>
                                            <h1 className={`${proza.className} uppercase tracking-wide font-[400] text-black-400 mb-0 text-lg dark:text-white`}>D&S Inc. </h1>
                                            <h2 className={`${sansFont} text-base font-bold text-black-100 mb-0 dark:text-white-500`}>Frontend Developer </h2>
                                            <span className={`text-xs text-black-400 dark:text-white-700 ${sansFont.className}`}>October 2023 – Present</span>
                                        </header>
                                    </li>
                                    <li className='mb-3 md:mb-6'>
                                        <header>
                                            <h1 className={`${proza.className} uppercase tracking-wide font-[400] text-black-400 mb-0 text-lg dark:text-white`}>Freelancer </h1>
                                            <h2 className={`${sansFont} text-base font-bold text-black-100 mb-0 dark:text-white-500`}>Frontend Developer </h2>
                                            <span className={`text-xs text-black-400 dark:text-white-700 ${sansFont.className}`}>October 2021 – October 2022</span>
                                        </header>
                                    </li>
                                    <li className='mb-3 md:mb-6'>
                                        <header>
                                            <h1 className={`${proza.className} uppercase tracking-wide font-[400] text-black-400 mb-0 text-lg dark:text-white`}>Itonics Nepal</h1>
                                            <h2 className={`${sansFont} text-base font-bold text-black-100 mb-0 dark:text-white-500`}>Frontend Developer</h2>
                                            <span className={`text-xs text-black-400 dark:text-white-700 ${sansFont.className}`}>January 2020 – October 2021</span>
                                        </header>
                                    </li>
                                    <li className='mb-3 md:mb-6'>
                                        <header>
                                            <h1 className={`${proza.className} uppercase tracking-wide font-[400] text-black-400 mb-0 text-lg dark:text-white`}>GsignalX Pvt Ltd</h1>
                                            <h2 className={`${sansFont} text-base font-bold text-black-100 mb-0 dark:text-white-500`}>Web Developer</h2>
                                            <span className={`text-xs text-black-400 dark:text-white-700 ${sansFont.className}`}> February 2018 – December 2019</span>
                                        </header>
                                    </li>
                                    <li className='mb-3 md:mb-6'>
                                        <header>
                                            <h1 className={`${proza.className} uppercase tracking-wide font-[400] text-black-400 mb-0 text-lg dark:text-white`}>Arrtsm Gmbh</h1>
                                            <h2 className={`${sansFont} text-base font-bold text-black-100 mb-0 dark:text-white-500`}>Software Engineer</h2>
                                            <span className={`text-xs text-black-400 dark:text-white-700 ${sansFont.className}`}>December 2016 – February 2018</span>
                                        </header>
                                    </li>
                                    <li className='mb-0'>
                                        <header>
                                            <h1 className={`${proza.className} uppercase tracking-wide font-semibold text-black-400 mb-0 text-lg dark:text-white`}>North american web</h1>
                                            <h2 className={`${sansFont} text-base font-bold text-black-100 mb-0 dark:text-white-500`}>Web Developer</h2>
                                            <span className={`text-xs text-black-400 dark:text-white-700 ${sansFont.className}`}>Aug 2016 – Feb 2017</span>
                                        </header>
                                    </li>
                                </ul>
                            </div>
                            <div className='w-full md:w-1/2'>
                                <div className='md:mb-12'>
                                    <h3 className={`${proza.className} font-bold text-2xl md:text-3xl uppercase mb-4 md:mb-8`}>SKILL AND EXPERTISE</h3>
                                    <ul className='flex flex-wrap items-center justify-start gap-4'>
                                        <li className='relative w-[calc(100%/6_-_8px)] aspect-square rounded-lg bg-white-500 flex justify-center items-center p-2 dark:bg-black-300'><Image className='object-contain w-8 h-8' priority={false} src='/images/html.svg' width={32} height={32} alt="Rikesh Shrestha, HTML"></Image></li>
                                        <li className='relative w-[calc(100%/6_-_8px)] aspect-square rounded-lg bg-white-500 flex justify-center items-center p-2 dark:bg-black-300'><Image className='object-contain w-8 h-8' priority={false} src={'/images/css.svg'} width={32} height={32} alt="Rikesh Shrestha, CSS"></Image></li>
                                        <li className='relative w-[calc(100%/6_-_8px)] aspect-square rounded-lg bg-white-500 flex justify-center items-center p-2 dark:bg-black-300'><Image className='object-contain w-8 h-8' priority={false} src={'/images/sass.svg'} width={32} height={32} alt="Rikesh Shrestha, SASS"></Image></li>
                                        <li className='relative w-[calc(100%/6_-_8px)] aspect-square rounded-lg bg-white-500 flex justify-center items-center p-2 dark:bg-black-300'><Image className='object-contain w-8 h-8' priority={false} src={'/images/js.svg'} width={32} height={32} alt="Rikesh Shrestha, Javascript"></Image></li>
                                        <li className='relative w-[calc(100%/6_-_8px)] aspect-square rounded-lg bg-white-500 flex justify-center items-center p-2 dark:bg-black-300'><Image className='object-contain w-8 h-8' priority={false} src={'/images/react.svg'} width={32} height={32} alt="Rikesh Shrestha, React"></Image></li>
                                        <li className='relative w-[calc(100%/6_-_8px)] aspect-square rounded-lg bg-white-500 flex justify-center items-center p-2 dark:bg-black-300'><Image className='object-contain w-8 h-8' priority={false} src={'/images/angular.svg'} width={32} height={32} alt="Rikesh Shrestha, Angular"></Image></li>
                                        <li className='relative w-[calc(100%/6_-_8px)] aspect-square rounded-lg bg-white-500 flex justify-center items-center p-2 dark:bg-black-300'><Image className='object-contain w-8 h-8' priority={false} src={'/images/vue.svg'} width={32} height={32} alt="Rikesh Shrestha, Vue"></Image></li>
                                        <li className='relative w-[calc(100%/6_-_8px)] aspect-square rounded-lg bg-white-500 flex justify-center items-center p-2 dark:bg-black-300'><Image className='object-contain w-8 h-8' priority={false} src={'/images/mongodb.svg'} width={32} height={32} alt="Rikesh Shrestha, MongoDb"></Image></li>
                                        <li className='relative w-[calc(100%/6_-_8px)] aspect-square rounded-lg bg-white-500 flex justify-center items-center p-2 dark:bg-black-300'><Image className='object-contain w-8 h-8' priority={false} src={'/images/mysql.svg'} width={32} height={32} alt="Rikesh Shrestha, mysql"></Image></li>
                                        <li className='relative w-[calc(100%/6_-_8px)] aspect-square rounded-lg bg-white-500 flex justify-center items-center p-2 dark:bg-black-300'><Image className='object-contain w-8 h-8' priority={false} src={'/images/node.svg'} width={32} height={32} alt="Rikesh Shrestha, Node.js"></Image></li>
                                        <li className='relative w-[calc(100%/6_-_8px)] aspect-square rounded-lg bg-white-500 flex justify-center items-center p-2 dark:bg-black-300'><Image className='object-contain w-8 h-8' priority={false} src={'/images/firebase.svg'} width={32} height={32} alt="Rikesh Shrestha, Firebase"></Image></li>
                                        <li className='relative w-[calc(100%/6_-_8px)] aspect-square rounded-lg bg-white-500 flex justify-center items-center p-2 dark:bg-black-300'><Image className='object-contain w-8 h-8' priority={false} src={'/images/express.svg'} width={32} height={32} alt="Rikesh Shrestha, EXpress"></Image></li>
                                        <li className='relative w-[calc(100%/6_-_8px)] aspect-square rounded-lg bg-white-500 flex justify-center items-center p-2 dark:bg-black-300'><Image className='object-contain w-8 h-8' priority={false} src={'/images/figma-1.svg'} width={32} height={32} alt="Rikesh Shrestha, Figma"></Image></li>
                                        <li className='relative w-[calc(100%/6_-_8px)] aspect-square rounded-lg bg-white-500 flex justify-center items-center p-2 dark:bg-black-300'><Image className='object-contain w-8 h-8' priority={false} src={'/images/xd.svg'} width={32} height={32} alt="Rikesh Shrestha, xd"></Image></li>
                                        <li className='relative w-[calc(100%/6_-_8px)] aspect-square rounded-lg bg-white-500 flex justify-center items-center p-2 dark:bg-black-300'><Image className='object-contain w-8 h-8' priority={false} src={'/images/zeplin.svg'} width={32} height={32} alt="Rikesh Shrestha, Zeplin"></Image></li>
                                        <li className='relative w-[calc(100%/6_-_8px)] aspect-square rounded-lg bg-white-500 flex justify-center items-center p-2 dark:bg-black-300'><Image className='object-contain w-8 h-8' priority={false} src={'/images/git.svg'} width={32} height={32} alt="Rikesh Shrestha, git"></Image></li>
                                        <li className='relative w-[calc(100%/6_-_8px)] aspect-square rounded-lg bg-white-500 flex justify-center items-center p-2 dark:bg-black-300'><Image className='object-contain w-8 h-8' priority={false} src={'/images/github.svg'} width={32} height={32} alt="Rikesh Shrestha, github"></Image></li>
                                        <li className='relative w-[calc(100%/6_-_8px)] aspect-square rounded-lg bg-white-500 flex justify-center items-center p-2 dark:bg-black-300'><Image className='object-contain w-8 h-8' priority={false} src={'/images/bitbucket.svg'} width={32} height={32} alt="Rikesh Shrestha, bitbucket"></Image></li>
                                        <li className='relative w-[calc(100%/6_-_8px)] aspect-square rounded-lg bg-white-500 flex justify-center items-center p-2 dark:bg-black-300'><Image className='object-contain w-8 h-8' priority={false} src={'/images/jira.svg'} width={32} height={32} alt="Rikesh Shrestha, jira"></Image></li>
                                        <li className='relative w-[calc(100%/6_-_8px)] aspect-square rounded-lg bg-white-500 flex justify-center items-center p-2 dark:bg-black-300'><Image className='object-contain w-8 h-8' priority={false} src={'/images/netlify.svg'} width={32} height={32} alt="Rikesh Shrestha, netlify"></Image></li>
                                        <li className='relative w-[calc(100%/6_-_8px)] aspect-square rounded-lg bg-white-500 flex justify-center items-center p-2 dark:bg-black-300'><Image className='object-contain w-8 h-8' priority={false} src={'/images/heroku.svg'} width={32} height={32} alt="Rikesh Shrestha, heroku"></Image></li>
                                        <li className='relative w-[calc(100%/6_-_8px)] aspect-square rounded-lg bg-white-500 flex justify-center items-center p-2 dark:bg-black-300'><Image className='object-contain w-8 h-8' priority={false} src={'/images/vscode.svg'} width={32} height={32} alt="Rikesh Shrestha, vscode"></Image></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='rs-exp__blogs'>
                        <h3 className={`${proza.className} font-bold text-2xl md:text-3xl uppercase mb-8`}>Recent blogs</h3>
                        <ul className='flex flex-col md:flex-row md:flex-wrap md:justify-between mb-4'>
                            {
                                blogs ? blogs.data.map((blog:any,index:number) => <li key={index} className='mb-4 md:w-[calc(50%__-__1rem)] last:mb-0'>
                                    <BlogListItem blogDetail={blog} ></BlogListItem>
                                </li>) : null
                            }
                        </ul>
                        <Link href={'/blogs'} className={`${proza.className} font-[400] text-sm text-secondary`}> Read more blogs.. </Link>
                    </div>
                </div>
            </div>

        </section>
    )
}
