import React from 'react'

import {IoFilterSharp} from 'react-icons/io5'
import {BsGridFill} from 'react-icons/bs'

export default function SearchHome() {
  return (
       <div className='w-full mt-10 flex'>
          <div className='w-2/12 flex justify-center items-center'>
            <IoFilterSharp className='text-neutral-400 text-5xl ml-4'/>
          </div>

          <div className='w-8/12 flex justify-center items-center'>
            <input 
                placeholder='Search a specific country' 
                className='w-10/12 h-12 rounded-xl bg-transparent 
                border border-neutral-300 pl-8 text-3xl text-neutral-500
                hover:shadow-checkout hover:border-0 focus:shadow-checkout focus:outline-0 focus:border-purple-900 focus:border-2'>
           </input>
          </div>

          <div className='w-2/12 flex justify-center items-center'>
            <BsGridFill className='text-neutral-400 text-4xl ml-4'/>
          </div>      
       </div>
  )
}
