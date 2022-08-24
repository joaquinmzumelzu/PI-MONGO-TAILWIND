import React from 'react'

import SearchHome from './SearchHome'

export default function Home() {
  return (
    <div className='w-full max-w-screen-xl mt-2 flex flex-col mb-20 '>
       <h1 className='text-7xl text-center text-purple-700'> COUNTRIES APP</h1>
       <SearchHome/>

       <div className='w-full max-w-screen-xl flex justify-center my-8'>
        <div className='flex space-x-8 items-center'>
          <button className='text-neutral-300 text-4xl p-3'>{'<<'}</button>
          <button className='text-neutral-300 text-4xl p-3'>{'<'}</button>
          <p className='text-neutral-300 text-2xl p-3'>1 de 4</p>
          <button className='text-neutral-300 text-4xl p-3'>{'>'}</button>
          <button className='text-neutral-300 text-4xl p-3'>{'>>'}</button>

        </div>
       </div>

      <div className='flex space-x-20'>
         <div className='w-80 h-card bg-purple-700 bg-opacity-5 rounded-xl shadow-neutral-800 shadow-xl'>
          <img src='https://flagcdn.com/va.svg' className=' h-52 w-full rounded-t-xl object-cover'></img>
         </div>

         
      </div>  
    </div>
  )
}
