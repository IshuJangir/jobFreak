import React from 'react'
import frame from '../assets/frame.png'
import {FcGoogle} from 'react-icons/fc'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast"
import loginImg from '../assets/loginImg.png'

export default function Login({login,setLogin}) {

    const navigate=useNavigate();


    const[formData,setFormData]=useState({
        email:"",
        password:""
    })

    function changeHandler(event){
        setFormData((prev)=>({
            ...prev,
            [event.target.name]:event.target.value
        }))
    }


    function clickHandler(event){
        event.preventDefault();
        console.log("This is Your Login Data")
        console.log(formData);
        navigate('/Dashboard');
        toast.success("Logged In")
        setLogin(true)
    }


  return (
     <div className='text-white flex justify-between w-11/12 p-10 h-screen mx-auto '>
        <div>
            <h1 className='font-bold mb-5 text-3xl'>Welcome Back</h1>
            <p className='text-richblack-100 mb-1'>Build skills for today,tomorrow and beyond</p>
            <p className='text-sm text-blue-100 mb-5'>Education to future-proof your career</p>
            <div className='flex flex-col gap-3'>
            <label htmlFor="" className=''>
                <p class className='text-richblack-100 inline'>Email Address</p> <sup className='text-pink-500'>*</sup> <br />
                <input required onChange={changeHandler} className='w-96 p-2 rounded bg-richblack-700' type="email" placeholder='Enter Email Address' name="email" id="email" value={formData.email}/>
            </label>
            <label htmlFor="" className=''>
                <p className='text-richblack-100 inline'>Password</p> <sup className='text-pink-500'>*</sup> <br />
                <input required onChange={changeHandler} className='w-96 p-2 rounded bg-richblack-700' type="password" placeholder='Enter Password' name="password" id="password" value={formData.password}/>
            </label>
            </div>
            <div className='flex text-blue-100  w-96 justify-end'><p className='text-xs '>Forgot Password</p></div>
            <button onClick={clickHandler} className='bg-yellow-400 w-96 mt-5 mb-5 py-2 font-bold text-black rounded-md'>Sign in</button>
            <div className='w-96  flex justify-center items-center text-richblack-100'>
                <div className='bg-richblack-100 h-[1px] w-60'></div>
                <p>OR</p>
                <div className='bg-richblack-100 h-[1px] w-60'></div>
            </div>
            <div className='relative'>
                <button className='bg-transparent w-96 mt-5 text-center py-2 text-richblack-100 border rounded-md'> <FcGoogle className='absolute bottom-3 left-24'></FcGoogle> Sign Up with Google</button>
            </div>
        </div>
        <div >
            <img className='relative mt-10' src={frame} width={450} alt="" />
            <div className='absolute top-[100px] right-[120px]  '><img width={450} src={loginImg} alt="" /></div>
        </div>
     </div>
  )
}
