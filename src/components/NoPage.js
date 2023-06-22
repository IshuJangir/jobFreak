import React from 'react'
import nopage from '../assets/nopage.png'

export default function () {
  return (
    <div className='flex flex-col h-screen  items-center'>
        <div>
            <img src={nopage} width={500} alt="" />
        </div>

        <div className='text-red-600 flex justify-center items-center text-3xl '>
            Error No Page Found
        </div>
    </div>
  )
}
