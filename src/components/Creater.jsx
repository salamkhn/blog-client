import React from 'react'
import { useContext } from 'react'
import Blogcontext from './context/createContext'

const Creaters = () => {
  const createrContext = useContext(Blogcontext)
  const { creater } = createrContext
  console.log("creater :", creater)
  return (<>
    <div className="w-full bg-amber-50 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-4 px-4 md:py-6 md:px-10">
      {creater.map((user, index) => (
        <div key={user._id || index} className="flex flex-col bg-[#F5ECD5] items-center">
          <figure className="relative flex justify-center w-full">
            <img
              style={{
                boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"
              }}
              src={user.userprofile}
              alt="creater"
              className="h-[160px] rounded-t-sm w-full object-cover mb-2 w-full"
            />
            <img
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
              }}
              src={user.userprofile}
              alt="profile"
              className="h-[65px] w-[65px] rounded-full absolute -bottom-8 border-4 border-white"
            />
          </figure>

          <div className="flex flex-col items-center justify-center mt-1 py-5 px-6 gap-2 rounded-2xl shadow-sm bg-white border border-gray-200 hover:shadow-2xl transition-shadow duration-300 w-full">
            <h2 className="text-2xl font-serif font-semibold text-gray-800">{user.userName}</h2>
            <h3 className="text-sm text-gray-500">{user.email}</h3>
            <h4 className="text-md text-gray-600">{user.phoneNumber}</h4>
            <h4 className={`text-lg font-medium ${user.role === "admin" ? "text-red-500" : "text-blue-500"}`}>
              {user.role}
            </h4>
          </div>
        </div>
      ))}
    </div>

  </>)
}

export default Creaters
