import React from 'react'

function Footer() {
  return (
    <div className='py-5 text-gray-600 bg-slate-300 dark:bg-slate-800 text-center
    dark:text-gray-300 rounded-t-lg'>
        <a href="#hero" className='block text-xl md:text-2xl
        font-semibold'>KiA </a>
        <a href='mailto:kiaaw.sh@gmail.com'
          className=' text-sm md:text-md 
          hover:text-indigo-600 dark:hover:text-indigo-500'
          >Kiaaw.sh@gmail.com</a>
        <p className='text-xs  mt-2 text-gray-500'>
            Kia {new Date().getFullYear()}. All rights reserved.
        </p>
    </div>
  )
}

export default Footer