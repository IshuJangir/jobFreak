import React, { useState } from 'react'
import './contactusform.css'
import { useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast"

export default function Contact({login}) {

  const navigate=useNavigate();

  const[formData,setFormData]=useState({
    firstname:"",
    lastname:"",
    email:"",
    mobile:"",
    message:""
  })


  function changeHandler(event){
    setFormData((prev)=>({
        ...prev,
        [event.target.name]:event.target.value
    }))
}

  function clickHandler(event){
    event.preventDefault();
    console.log("This is Your contact Data")
    console.log(formData);
    toast.success("Thanks For your Feedback")

    if (login) {
      navigate('/Dashboard');
    }

    else{
      navigate('/')
    }

}



  return (
    <div className='text-white flex w-full justify-center items-center h-screen'>
      <section>
      <div class="container">
        <h2>Contact Us Form</h2>
        <div class="row100">
          <div class="col">
            <div class="inputBox">
              <input onChange={changeHandler}  value={FormData.firstname} type="text" name="firstname" required="required"  />
              <span class="text">First Name</span>
              <span class="line"></span>
            </div>
          </div>

          <div class="col">
            <div class="inputBox">
              <input onChange={changeHandler}  value={FormData.lastname} type="text" name="lastname" required="required"  />
              <span class="text">Last Name</span>
              <span class="line"></span>
            </div>
          </div>

          <div class="col">
            <div class="inputBox">
              <input onChange={changeHandler}  value={FormData.email} type="text" name="email" required="required"  />
              <span class="text">Email</span>
              <span class="line"></span>
            </div>
          </div>

          <div class="col">
            <div class="inputBox">
              <input onChange={changeHandler}  value={FormData.mobile} type="text" name="mobile" required="required"  />
              <span class="text">Mobile</span>
              <span class="line"></span>
            </div>
          </div>
        </div>

        <div class="row100">
          <div class="col">
            <div class="inputBox textarea">
              <textarea onChange={changeHandler} value={FormData.message} name='message' required="required" ></textarea>
              <span class="text">Type your message here....</span>
              <span class="line"></span>
            </div>
          </div>
        </div>

        <div class="row100">
          <div class="glass-button mt-5 px-3 py-1 rounded">
            <button onClick={clickHandler} >Submit</button>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
