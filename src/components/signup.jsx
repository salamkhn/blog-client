
import React, { useContext, useState } from 'react'
import Blogcontext from './context/createContext.jsx'
import axios from 'axios'

import toast from "react-hot-toast"


const Signup = () => {

  const [user, setuser] = useState({
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "user",
    userprofile: ""
  })




  // calling handlesignupsubmit
  const handlesignupsubmit = async (e) => {

    const formdata = new FormData();
    formdata.append("userName", user.userName)
    formdata.append("email", user.email)
    formdata.append("password", user.password)
    formdata.append("phoneNumber", user.phoneNumber)
    formdata.append("role", user.role)
    formdata.append("userprofile", user.userprofile)
    e.preventDefault()


    console.log("user :", user)
    try {
      const { data } = await axios.post("http://localhost:3333/api/user/register", user, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })

      console.log("user from user signup :", user.role)
      toast.success(`${data.message} ${user.role}` || "user Registered successfully !")

    } catch (error) {
      console.log("error from res :", error)
      // if response come from backend
      if (error.response) {
        toast.error(error.response.data.message)
      }
      // if request not go
      else {
        toast.error("user Registration failed")
      }

      //if there is another error except these

    }
  }


  return (<>
    <form onSubmit={handlesignupsubmit}
      className="bg-black text-white my-8 w-full max-w-lg flex flex-col items-center justify-center m-auto py-8 px-4 sm:px-8 rounded-lg shadow-lg"
    >
      {/* Form Title */}
      <h2 className="text-[2.5rem] sm:text-[3rem] font-serif mb-6 text-center">Signup</h2>

      <div className="w-full flex flex-col items-center justify-center gap-4">

        {/* UserName */}
        <div className="flex flex-col w-full">
          <label className="mb-1 text-lg font-mono" htmlFor="userName">UserName</label>
          <input
            className="h-[3rem] w-full px-3 focus:outline-none border-2 border-white rounded-sm text-gray-400 font-semibold"
            type="text"
            placeholder="Enter userName"
            value={user.userName}
            onChange={(e) => setuser({ ...user, userName: e.target.value })}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col w-full">
          <label className="mb-1 text-lg font-mono" htmlFor="email">Email</label>
          <input
            className="h-[3rem] w-full px-3 focus:outline-none border-2 border-white rounded-sm text-gray-400 font-semibold"
            type="email"
            placeholder="Enter email"
            value={user.email}
            onChange={(e) => setuser({ ...user, email: e.target.value })}
          />
        </div>

        {/* Password */}
        <div className="flex flex-col w-full">
          <label className="mb-1 text-lg font-mono" htmlFor="password">Password</label>
          <input
            className="h-[3rem] w-full px-3 focus:outline-none border-2 border-white rounded-sm text-gray-400 font-semibold"
            type="password"
            placeholder="Enter password"
            value={user.password}
            onChange={(e) => setuser({ ...user, password: e.target.value })}
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col w-full">
          <label className="mb-1 text-lg font-mono" htmlFor="phoneNumber">Phone Number</label>
          <input
            className="h-[3rem] w-full px-3 focus:outline-none border-2 border-white rounded-sm text-gray-400 font-semibold"
            type="text"
            placeholder="Enter phone number"
            value={user.phoneNumber}
            onChange={(e) => setuser({ ...user, phoneNumber: e.target.value })}
          />
        </div>

        {/* Role */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 pt-3 w-full">
          <h3 className="text-xl sm:text-2xl font-medium">Role</h3>
          <select
            className="py-2 px-4 border-2 border-white rounded-lg text-gray-400 bg-black w-full sm:w-auto"
            value={user.role}
            onChange={(e) => setuser({ ...user, role: e.target.value })}
          >
            <option className="text-black bg-white" value="user">user</option>
            <option className="text-black bg-white" value="admin">admin</option>
          </select>
        </div>

        {/* Profile Picture */}
        <div className="flex flex-col w-full gap-1.5">
          <label className="text-lg font-semibold" htmlFor="userprofile">Profile Picture</label>
          <input
            type="file"
            name="userprofile"
            className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100
        "

            onChange={(e) => setuser({ ...user, userprofile: e.target.files[0] })}
          />
        </div>

        {/* Signup Button */}
        <button
          className="py-3 w-full border-2 rounded-2xl text-xl sm:text-2xl bg-white text-black hover:bg-gray-200 transition-all duration-300 mt-4"
        >
          Signup
        </button>

      </div>
    </form>


  </>)
}

export default Signup