import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {

  const {FirstName, setFirstName}= useState('');
  const {LastName, setLastName}= useState('');
  const {email, setEmail}= useState('');
  const {password, setPassword}= useState('');
  const {passwordii, setPasswordii}= useState('');

  return (
    <div className=' flex flex-row  justify-end items-center bg-pink-100 h-screen'>
      <div className=" pt-32 pl-14 m-5 pr-20 bg-white h-full  w-1/3  border-6">
        <form className=' '>
            <input className='rounded-lg m-1 p-2 w-4/5 h-1/2 border-blue-400 border-b-2 border-solid'
                  name ='FirstName'
                  placeholder='FirstName'
                  type="text"
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
           /> 
            <input className='rounded-lg m-1 p-2 w-4/5 border-blue-400 border-b-2 border-solid'
                  name ='LastName'
                  placeholder='LastName'
                  type="text"
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
           /> 
             <input className='rounded-lg m-1 p-2 w-4/5 border-blue-400 border-b-2 border-solid'
                  name ='email'
                  placeholder='Email'
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
           /> 
            <input className='rounded-lg m-1 p-2 w-4/5  border-blue-400 border-b-2 border-solid'
                  name ='password'
                  placeholder='Password'
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
           /> 
             <input className='rounded-lg m-1 p-2 w-4/5 border-blue-400 border-b-2 border-solid'
                  name ='password'
                  placeholder='Confirm Password'
                  type="password"
                  value={passwordii}
                  onChange={(e) => setPasswordii(e.target.value)}
           /> 
           <div className='flex flex-row justify-between pt-4 px-4'>
            <b className='p-2'>Already have Account ,<Link to='/login'>Create Here</Link> .</b>
            <button className='rounded-lg mr-24 p-2 border-2 py-0 text-blue-400  w-40 border-blue-400' type='submit' > Create Account </button>
           </div>
        </form>

      </div>
    </div>
  )
}

export default Signup