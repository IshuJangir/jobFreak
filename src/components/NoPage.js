import React from 'react'
import nopage from '../assets/nopage.png'

export default function () {
  return (
    <div className='flex flex-col h-screen  items-center'>
        <div>
            <img src={nopage} width={500} alt="" />
        </div>

        <div className='text-white flex justify-center  flex-col items-center text-3xl '>
            <p>Error No Page Found</p>
            <p className='text-red-500 text-sm'>(This page is inserted here intentionally inplace of guide*)</p>
        </div>
    </div>
  )
}
