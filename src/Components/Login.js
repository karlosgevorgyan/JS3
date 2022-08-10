import React from 'react'
import './Login.css'
import { Outlet, Link } from "react-router-dom";
import Password from './Password';
function Login() {
  return (
    <div className='Login'>
        <p className='p1'>Manage your time</p>
        <p className='p2'>Make your work more effectively</p>
        <div className='group'></div>
        <div className='div1'>
            <p className='p3'>Log in</p>
            <input placeholder='Email' className='inp1'/>
            <input placeholder='Password' className='inp2'/>
            <button className='btn'>Login</button>
            <p className='p4'><Link className='link' to='/password'>Forgot password?</Link></p>
        </div>
    </div>
  )
}

export default Login