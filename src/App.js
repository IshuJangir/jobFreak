import React from 'react'
import Navbar from './components/Navbar'
import './index.css'
import { Routes,Route } from "react-router-dom";
import Home from './components/Home';
import Information from './components/Information';
import Guide from './components/Guide'
import Contact from './components/Contact';
import NoPage from './components/NoPage';

export default function App() {


  return (
    <div className='bg-richblack-900 h-screen w-screen overflow-hidden'>
      <Navbar/>

      <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/Contact' element={<Contact></Contact>}/>
          <Route path='/information' element={<Information></Information>}/>
          <Route path='/guide' element={<Guide></Guide>}/>
          <Route path='*' element={<NoPage></NoPage>}/>
      </Routes>
    </div>
  )
}
