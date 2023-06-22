import React from 'react'
import frame from '../assets/frame.png'
import signup from '../assets/signup.png'
import {FcGoogle} from 'react-icons/fc'
import {NavLink} from "react-router-dom";
import { useState } from 'react';
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';

export default function Login({login,setLogin}) {

    const navigate=useNavigate();

    const[accountType,setAccountType]=useState('Student');

    const[formData,SetFormData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    function changeHandler(event){
        SetFormData((prev)=>({
            ...prev,
            [event.target.name]:event.target.value
        }))
    }

    function clickHandler(event){
        if (formData.password!==formData.confirmPassword) {
            toast.error("Password Must match")
        }
        else{
            event.preventDefault();
        console.log("This is Your SignUp Data")
        const fullData={
            accountType,formData
        }
        console.log(fullData);
        navigate('/Dashboard');
        toast.success("Signed Up")
        setLogin(true)
        }
    }
    


  return (
     <div className='text-white flex justify-between w-11/12 p-10  mx-auto '>
        
        <div>
            
            <h1 className='font-bold mb-5 w-96 text-3xl'>Join the millions to code with StudyNotion for free</h1>
            <p className='text-richblack-100 mb-1'>Build skills for today,tomorrow and beyond</p>
            <p className='text-sm text-blue-100 mb-5'>Education to future-proof your career</p>
            <div className='flex flex-col gap-3'>
            
            </div>

            <div className='flex gap-4 bg-richblack-800 w-fit px-4 py-2 rounded-full mb-2'>
                <div onClick={()=>{setAccountType('Student')}} className={`${accountType==="Student" ? "bg-richblack-900 text-richblack-5 ":"bg-transparent text-richblack-200 "} py-1  px-2 rounded-full transition-all duration-200 `}>Student</div>
                <div onClick={()=>{setAccountType('Instructor')}} className={`${accountType==="Instructor" ? "bg-richblack-900 text-richblack-5 ":"bg-transparent text-richblack-200 "} py-1  px-5 rounded-full transition-all duration-200 `}>Instructor</div>
            </div>
            <div className='flex w-96 gap-4'>
                <div>
                    <label className='text-richblack-100' htmlFor="">First Name <sup className='text-pink-500'>*</sup></label>
                    <input className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[10px] ' required type="text" name="firstname" onChange={changeHandler} placeholder='Enter First name' value={formData.firstname}  />
                </div>
                <div>
                    <label className='text-richblack-100' htmlFor="">Last Name <sup className='text-pink-500'> *</sup></label>
                    <input required onChange={changeHandler} className='w-44 p-2 rounded bg-richblack-700' type="text" placeholder='Enter Last Name' name='lastname' value={formData.lastname} />
                </div>
            </div>

            <div>
            <label htmlFor="" className=''>
                <p class className='text-richblack-100 inline'>Email Address</p> <sup className='text-pink-500'>*</sup> <br />
                <input required onChange={changeHandler} className='w-96 p-2 rounded bg-richblack-700' type="email" placeholder='Enter Email Address' name="email" id="email" value={formData.email} />
            </label>
            </div>


            <div>
            <div className='flex w-96 gap-4'>
                <div >
                    <label required className='text-richblack-100' htmlFor="">Create Password <sup className='text-pink-500'>*</sup></label>
                    <input  onChange={changeHandler} className='w-48 p-2 rounded required   bg-richblack-700' type="password" placeholder='Enter Password' name='password' value={formData.password} />
                </div>
                <div>
                    <label className='text-richblack-100' htmlFor="">Confirm Password<sup className='text-pink-500'> *</sup></label>
                    <input  onChange={changeHandler} className='w-44 required p-2 rounded bg-richblack-700' type="password" placeholder='Confirm Password' name='confirmPassword' value={formData.confirmPassword} />
                </div>
            </div>
            </div>



            <button onClick={clickHandler} className='bg-yellow-400 w-96 mt-5 mb-5 py-2 font-bold text-black rounded-md'>Create Account</button>
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
            <div className='absolute top-[100px] right-[120px]  '><img width={450} src={signup} alt="" /></div>
        </div>
     </div>
  )
}
