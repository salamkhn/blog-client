
import React from 'react'

const Signup = () => {
  return (<>
    <form
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
          />
        </div>

        {/* Email */}
        <div className="flex flex-col w-full">
          <label className="mb-1 text-lg font-mono" htmlFor="email">Email</label>
          <input
            className="h-[3rem] w-full px-3 focus:outline-none border-2 border-white rounded-sm text-gray-400 font-semibold"
            type="email"
            placeholder="Enter email"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col w-full">
          <label className="mb-1 text-lg font-mono" htmlFor="password">Password</label>
          <input
            className="h-[3rem] w-full px-3 focus:outline-none border-2 border-white rounded-sm text-gray-400 font-semibold"
            type="password"
            placeholder="Enter password"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col w-full">
          <label className="mb-1 text-lg font-mono" htmlFor="phoneNumber">Phone Number</label>
          <input
            className="h-[3rem] w-full px-3 focus:outline-none border-2 border-white rounded-sm text-gray-400 font-semibold"
            type="text"
            placeholder="Enter phone number"
          />
        </div>

        {/* Role */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 pt-3 w-full">
          <h3 className="text-xl sm:text-2xl font-medium">Role</h3>
          <select
            className="py-2 px-4 border-2 border-white rounded-lg text-gray-400 bg-black w-full sm:w-auto"
          >
            <option className="text-black bg-white" value="user">User</option>
            <option className="text-black bg-white" value="admin">Admin</option>
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