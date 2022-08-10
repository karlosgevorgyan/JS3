import React from 'react'
import './Password.css'
import { Outlet, Link } from "react-router-dom";
function Password() {
  return (
    <div className='Password'>
        <div className='group1'></div>
        <div className='div2'>
            <p className='t1'>Forgot Password </p>
            <p className='t2'>Enter your email address and we'll email you your new password</p>
            <input placeholder='Email' className='inp'/>
            <button className='btn1'>Send</button>
            <p className='t3'><Link className='link' to='/login'>Back To Login</Link></p>
        </div>
    </div>
  )
}

export default Password