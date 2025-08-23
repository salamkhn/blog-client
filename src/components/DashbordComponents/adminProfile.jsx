import React from 'react'
import { useContext } from 'react'
import Blogcontext from '../context/createContext'
import { useNavigate } from 'react-router-dom'

export const AdminProfile = () => {
  const navigate = useNavigate()
  const { creater } = useContext(Blogcontext)
  const adminid = localStorage.getItem("userId")


  //handle navigate
  const handleNavigate = () => {
    navigate("/dashbord")
  }


  const filteredadminProfile = creater.filter((person, id) => {
    return person._id === adminid
  })


  return (<>  <div className='flex flex-col justify-center items-center'>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      {
        filteredadminProfile.map((curProlile, index) => {
          return <div key={index} className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm text-center border border-gray-200">
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

            {/* Go Back Button */}
          </div>

        })
      }
    </div>
    <button
      onClick={handleNavigate}
      className="bg-blue-700 w-[70%] md:w-[23%]  mb-[10rem]  py-3 px-1.5   text-2xl text-white font-sans italic cursor-pointer rounded-md italic hover:bg-blue-600"
    >
      Go Back
    </button>
  </div>



  </>)
}

export default AdminProfile