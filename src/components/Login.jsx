import React, { useState } from 'react'

import axios from 'axios'
import toast from 'react-hot-toast'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import api from '../lib/api'

const Login = () => {
  const navigate = useNavigate()

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  //handle submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/api/user/login",
        {
          email,
          password
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json"
          }
        }

      )

      // setting token in local storage
      const now = new Date().getTime();
      localStorage.setItem("jwt", data.token)
      localStorage.setItem("userId", data.userID)
      localStorage.setItem("expire", now + 600000)

      // its deleting from localstorage after 1 hr

     

      // toast with success
      toast.success(data.message)
      navigate("/")

    } catch (error) {
      toast.error(error.response.data.message)
    }
  }


  return (<>
    {/* important for revision during morning w-full mx-w-lf in form and in divs w-full */}
    <form onSubmit={handleSubmit} className='m-auto my-8 bg-[#0F0E0E] text-white py-7.5 px-5 flex flex-col items-center justify-center rounded-md gap-2.5 w-full max-w-lg' >
      <h1 className='text-2xl font-bold font-serif'>Login Form</h1>
      <div className='flex flex-col gap-2.5 w-full'>
        <label className=' font-sans text-lg font-semibold' htmlFor="email">Email</label>
        <input value={email}
          onChange={(e) => setemail(e.target.value)}
          className=' font-sm h-[3.1rem] mx-w-[20rem] px-3 outline-0 border-2 border-white rounded-sm text-gray-400 ' type="email" placeholder='Enter your Email' />
      </div>
      <div className='flex flex-col gap-2.5 w-full'>
        <label className=' font-sans text-lg font-semibold' htmlFor="password">password</label>
        <input value={password}
          onChange={(e) => setpassword(e.target.value)}
          className=' font-sm h-[3.1rem] mx-w-[20rem] px-3 outline-0 border-2 border-white rounded-sm text-gray-400 ' type="text" placeholder='Enter your password' />
      </div>
      <button className="py-3 w-full border-2 rounded-2xl text-xl sm:text-2xl bg-white text-black hover:bg-gray-200 transition-all duration-300 mt-4 cursor-pointer" type='submit'>Login</button>
      <p className='pt-3 text-xl'>are you new ?<NavLink className="px-1 italic font-thin text-blue-700 text-italic underline" to="/signup">signup</NavLink></p>
    </form>

  </>)
}

export default Login