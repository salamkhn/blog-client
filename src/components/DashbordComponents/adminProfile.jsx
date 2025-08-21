import React from 'react'
import { useContext } from 'react'
import Blogcontext from '../context/createContext'

export const AdminProfile = () => {
  const { creater } = useContext(Blogcontext)
  const adminid = localStorage.getItem("userId")
  console.log("creater i admingprofiles :", creater)
  console.log("admin-profile", adminid)


  const filteredadminProfile = creater.filter((person, id) => {
    return person._id === adminid
  })

  console.log("filteredadminProfile :", filteredadminProfile)
  return (<>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      {
        filteredadminProfile.map((curProlile, index) => {
          return <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm text-center border border-gray-200">
            {/* Profile Image */}
            <img
              src={curProlile.userprofile}
              alt="Admin Profile"
              className="w-28 h-28 rounded-full mx-auto border-4 border-blue-500 object-cover"
            />

            {/* User Info */}
            <h2 className="mt-4 text-2xl font-bold text-gray-800">
              {curProlile.userName}
            </h2>
            <p className="text-gray-600 text-lg">{curProlile.email}</p>
            <p className="text-gray-600 text-lg">📞 {curProlile.phoneNumber}</p>

            {/* Footer */}
            <div className="mt-6">
              <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                {curProlile.role}
              </span>
            </div>
          </div>
        })
      }
    </div>

  </>)
}

export default AdminProfile