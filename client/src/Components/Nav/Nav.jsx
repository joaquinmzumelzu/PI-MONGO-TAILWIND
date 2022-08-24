import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {IoMdAddCircle} from 'react-icons/io'

export default function Nav() {
  return (
    <div className='w-screen max-w-screen-xl flex h-14 my-4 '>
      
      <div className='basis-2/12 flex items-center place-content-around'>
        <Link>
          <AiFillHome className='text-neutral-400 text-6xl ml-4'/>
        </Link>

        <Link>
          <IoMdAddCircle className='text-neutral-400 text-6xl ml-4'/>
        </Link>
      </div>

      <div className='basis-8/12 flex items-center justify-center'>
        {/* <input 
        placeholder='Search a specific country' 
        className='w-10/12 h-12 rounded-xl bg-transparent 
        border border-neutral-300 pl-8 text-3xl text-neutral-500
        focus:outline-0 focus:border-purple-900 focus:border-2'>
        </input> */}
        {/* <h1 className='text-4xl text-purple-700'>joaquinmzumelzu Countries App</h1> */}
      </div>

      <div className='basis-2/12 flex items-center justify-center'>
        <Link>
          <p className='text-4xl text-neutral-400 font-serif font-semibold '>About</p>
        </Link>
      </div>


    </div>
  )
}
