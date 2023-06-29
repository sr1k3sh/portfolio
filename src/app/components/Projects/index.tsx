import React from 'react'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { BsClock, BsEmojiHeartEyes } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { getcolorState } from '../../../redux/AppSlice'

export default function Projects() {
    const colorState = useSelector(getcolorState)
    return (
        <section className={colorState === 'dark' ? 'rs-project__section rs-project__section--dark' : 'rs-project__section rs-project__section--light'}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <ul className='rs-project__wrapper'>
                            <li>
                                <div className='rs-project__item'>
                                    <div className='rs-project__icon-text'>
                                        <IoBriefcaseOutline color={colorState === 'dark' ? 'white' : '#ffff'}></IoBriefcaseOutline>
                                        <span className='rs-project__count'>123</span>
                                    </div>
                                    <span className='rs-project__sub-title'>Completed Project</span>
                                </div>
                            </li>
                            <li>
                                <div className='rs-project__item'>
                                    <div className='rs-project__icon-text'>
                                        <BsClock color={colorState === 'dark' ? 'white' : '#ffff'}></BsClock>
                                        <span className='rs-project__count'>4567</span>
                                    </div>
                                    <span className='rs-project__sub-title'>Working Hours</span>
                                </div>
                            </li>
                            <li>
                                <div className='rs-project__item'>
                                    <div className='rs-project__icon-text'>
                                        <BsEmojiHeartEyes color={colorState === 'dark' ? 'white' : '#ffff'}></BsEmojiHeartEyes>
                                        <span className='rs-project__count'>89</span>
                                    </div>
                                    <span className='rs-project__sub-title'>Happy Clients</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
