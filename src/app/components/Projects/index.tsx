import React from 'react'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { BsClock, BsEmojiHeartEyes } from 'react-icons/bs'
import { proza } from 'src/utils/fonts'

export default function Projects() {
    return (
        <section className='py-10'>
            <div className='container md:container m-auto'>
                <ul className='columns-1 md:columns-3 bg-white-500 p-10 md:p-20 rounded-2xl shadow-md shadow-primary-light dark:bg-black-300 dark:shadow-black-200'>
                    <li className='flex flex-col justify-center items-center mb-6 md:mb-0'>
                        <div className='p-3 bg-black-400 mb-2 rounded-full border-4 border-black-600 dark:border-white-600 dark:bg-white-400'>
                            <IoBriefcaseOutline className='w-8 h-8 text-white-400 dark:text-black-400'></IoBriefcaseOutline>
                        </div>
                        <span className={`${proza.className} text-3xl font-bold mb-1 text-secondary`}>10+</span>
                        <span className={`${proza.className} text-base font-[500] text-black-400 dark:text-white-400`}>Completed Project</span>
                    </li>
                    <li className='flex flex-col justify-center items-center mb-6 md:mb-0'>
                        <div className='p-3 bg-black-400 mb-2 rounded-full border-4 border-black-600 dark:border-white-600 dark:bg-white-400'>
                            <BsClock className='w-8 h-8 text-white-400 dark:text-black-400'></BsClock>
                        </div>
                        <span className={`${proza.className} text-3xl font-bold mb-1 text-secondary`}>10000+</span>
                        <span className={`${proza.className} text-base font-[500] text-black-400 dark:text-white-400`}>Working Hours</span>
                    </li>
                    <li className='flex flex-col justify-center items-center mb-0'>
                        <div className='p-3 bg-black-400 mb-2 rounded-full border-4 border-black-600 dark:border-white-600 dark:bg-white-400'>
                            <BsEmojiHeartEyes className='w-8 h-8 text-white-400 dark:text-black-400'></BsEmojiHeartEyes>
                        </div>
                        <span className={`${proza.className} text-3xl font-bold mb-1 text-secondary`}>20</span>
                        <span className={`${proza.className} text-base font-[500] text-black-400 dark:text-white-400`}>Happy Clients</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}
