import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar({login,setLogin}) {

  return (
    <div className='flex bg-[#0692E6] relative z-50 shadow-white shadow-2xl w-fit h-screen p-2 text-white'>
        <div>
            <ul className='flex flex-col mt-5 gap-10'>
                <li><Link to={"/"} >Home</Link></li>
                <li><Link to={'/Contact'}>Contact</Link></li>
                <li><Link to={'/information'}>Information</Link></li>
                <li><Link to={'/guide'}>Guide</Link></li>
            </ul>
        </div>
    </div>
  )
}
