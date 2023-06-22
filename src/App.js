import React from 'react'
import Navbar from './components/Navbar'
import './index.css'
import { Routes,Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import NoPage from './components/NoPage';
import { useState } from 'react';

export default function App() {

  const[login,setLogin]=useState(false);


  return (
    <div className='bg-richblack-900  '>
      <Navbar login={login} setLogin={setLogin} />

      <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/About' element={<About></About>}/>
          <Route path='/Contact' element={<Contact login={login} ></Contact>}/>
          <Route path='/Login' element={<Login login={login} setLogin={setLogin}></Login>}/>
          <Route path='/Signup' element={<Signup login={login} setLogin={setLogin}></Signup>}/>
          <Route path='/Dashboard' element={<Dashboard></Dashboard>}/>
          <Route path='*' element={<NoPage></NoPage>}/>
      </Routes>
    </div>
  )
}
