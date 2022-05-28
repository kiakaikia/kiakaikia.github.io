import React from 'react'
import SectionTitle from './SectionTitle'
import logo from '../data/media/photo.jpg'

function About() {
  return (
    <div className='flex flex-col md:flex-row items-center
    justify-start gap-10 md:gap-20 py-20'>
        <div className='w-full md:w-6/12'>
        <SectionTitle>About Me</SectionTitle>
        <p className='text-md text-gray-600 dark:text-gray-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Velit ullam laborum ut sint ipsam excepturi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Velit ullam laborum ut sint ipsam excepturi!
        </p>
        <a href="mailto:kiaaw.sh@gmail.com"
        className='block mt-3 text-md md:text-lg
         text-gray-700 dark:text-gray-300 underline
        hover:text-indigo-500 dark:hover:text-indigo-500'>
            Kiaaw.sh@gmail.com</a>
        </div>

        <img src={logo} alt='KiA' className='w-full
        md:w-6/12 rounded-lg object-cover'></img>
    </div>
  )
}

export default About