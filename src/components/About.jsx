import React from 'react'
import SectionTitle from './SectionTitle'
import logo from '../data/media/photo.jpg'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

function About() {
  return (
    <div className='flex flex-col md:flex-row items-center
    justify-start gap-10 md:gap-20 py-20'>
        <div className='w-full md:w-6/12'>
          <SectionTitle>About Me</SectionTitle>
          <p className='text-md text-gray-600 dark:text-gray-300'>
              Thanks for visiting my webpage! I'm Kiarash Shirazi,
              a recent 'Computer Science' graduate who's looking to expand his
              knowledge and work on irl projects. If you have any concern, you can email me anytime!
          </p>
          <a href="mailto:kiaaw.sh@gmail.com"
          className='block mt-3 text-md md:text-lg
          text-gray-700 dark:text-gray-300 underline
          hover:text-indigo-500 dark:hover:text-indigo-500'>
              Kiaaw.sh@gmail.com</a>
              <br/>
          <div className='text-gray-800 dark:text-gray-300
           mb-3 h-6 gap-3 flex'>
            <a target="_blank" href="https://www.linkedin.com/in/kiarash-shirazi-6243ab200">
              <FaLinkedin className='w-full h-full'></FaLinkedin>
            </a>
            <a target="_blank" href="https://github.com/kiakaikia">
              <FaGithub className='w-full h-full'></FaGithub>
            </a>
          </div>
        </div>
        <img src={logo} alt='KiA' className='w-full
        md:w-6/12 rounded-lg object-cover'></img>
    </div>
  )
}

export default About