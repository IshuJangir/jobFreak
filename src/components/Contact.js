import React, { useState } from 'react'
import './contactusform.css'
import { useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast"

export default function Contact({login}) {

  const navigate=useNavigate();

  function clickHandler(event){
    event.preventDefault();
    toast.success("Thanks For your Feedback")
    navigate('/');
  }



  return (
    <div className='text-white absolute left-[5%] scale-[90%] overflow-hidden  top-0 flex w-full justify-center items-center h-screen'>
      <section>
      <div class="container">
        <h2>Contact Us Form</h2>
        <div class="row100">
          <div class="col">
            <div class="inputBox">
              <input type="text" name="firstname" required="required"  />
              <span class="text">First Name</span>
              <span class="line"></span>
            </div>
          </div>

          <div class="col">
            <div class="inputBox">
              <input type="text" name="lastname" required="required"  />
              <span class="text">Last Name</span>
              <span class="line"></span>
            </div>
          </div>

          <div class="col">
            <div class="inputBox">
              <input type="text" name="email" required="required"  />
              <span class="text">Email</span>
              <span class="line"></span>
            </div>
          </div>

          <div class="col">
            <div class="inputBox">
              <input type="text" name="mobile" required="required"  />
              <span class="text">Mobile</span>
              <span class="line"></span>
            </div>
          </div>
        </div>

        <div class="row100">
          <div class="col">
            <div class="inputBox textarea">
              <textarea  name='message' required="required" ></textarea>
              <span class="text">Type your message here....</span>
              <span class="line"></span>
            </div>
          </div>
        </div>

        <div class="row100">
          <div class="bg-[#0692E6] w-fit mt-5 px-3 py-1 rounded">
            <button onClick={clickHandler} >Submit</button>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
