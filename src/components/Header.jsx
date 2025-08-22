import React from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

const Header = () => {
  const navigate = useNavigate()

  //function for clear token
  const clearToken = () => {
    localStorage.removeItem("jwt");
    toast.success("Logout successfully")
    console.log("user logout successfully")
    navigate("/login")

  }

  // handle dashbord
  const handledashbord = () => {
    navigate("/dashbord")
  }

  // grtting token from the local storage for logout logic
  const token = localStorage.getItem("jwt");
  console.log("token in header :", token)
  return (<>
    <header className='sticky top-0 z-50 bg-[#101828] py-4 px-5 text-gray-300 flex flex-row justify-between md:justify-around'>

      <div className='flex flex-row items-center justify-center'>
        <h1 className='text-xl sm:text-2xl font-bold'>SalamBlogs</h1>
      </div>

      {/* menu for md aur us sa uper wali fields ka andar  */}
      <ul className='hidden   md:flex flex-row text gap-8 items-center justify-center justify-between'>
        <li><NavLink to={"/"} className={({ isActive }) =>
          isActive ?
            "font-semibold text-2xl font-extrabold text-indigo-400 hover:text-blue-300 transition duration-200 " :
            "font-semibold text-2xl font-extrabold text-gray-400"
        } >Home🏠</NavLink></li>
        <li><NavLink to={"/blogs"} className={({ isActive }) =>
          isActive ?
            "font-semibold text-2xl font-extrabold text-indigo-400 hover:text-blue-300 transition duration-200 " :
            "font-semibold text-2xl font-extrabold text-gray-400"
        } >Blogs📝</NavLink></li>

        <li><NavLink to={"/creaters"} className={({ isActive }) =>
          isActive ?
            "font-semibold text-2xl font-extrabold text-indigo-400 hover:text-blue-300 transition duration-200 " :
            "font-semibold text-2xl font-extrabold text-gray-400"
        } >creaters👥</NavLink></li>
      </ul>
      <div className='flex flex-row gap-2 items-center justify-center'>
        <button onClick={handledashbord} className="bg-green-500 text-white hover:bg-green-600 text-black cursor-pointer rounded-lg hover:bg-black hover:bg-gray-200 transition duration-300  py-2.5 px-2.5 font-semibold text-md md:text-lg">Dashbord</button>
        {
          token ? <button onClick={clearToken} className='bg-red-500 hover:bg-red-600 text-white  cursor-pointer rounded-md transition transition duration-300 duration-300  py-2.5 px-2.5 font-semibold  text-md md:text-lg'>Logout</button>
            : <NavLink to="/signup" className='bg-blue-500 text-white hover:bg-blue-600 cursor-pointer rounded-lg  transition duration-300 py-1.5  md:py-2 md:px-2.5   font-semibold text-lg'>Signup</NavLink >
        }
      </div>
      {/*menu for md sa nicha wali fields ka andar  */}
    </header>
    <div className='md:hidden flex flex-row justify-around fixed bg-[#101828] bottom-0 left-0 m-auto w-full z-20 text gap-3 items-center justify-center justify-between'>
      <ul className='flex justify-around w-full flex-row gap-3 py-6' >
        <li><NavLink to={"/"} className={({ isActive }) =>
          isActive ?
            "font-semibold text-2xl font-extrabold text-indigo-400 hover:text-blue-300 transition duration-200 " :
            "font-semibold text-2xl font-extrabold text-gray-400"
        } >Home🏠</NavLink></li>
        <li><NavLink to={"/blogs"} className={({ isActive }) =>
          isActive ?
            "font-semibold text-2xl font-extrabold text-indigo-400 hover:text-blue-300 transition duration-200 " :
            "font-semibold text-2xl font-extrabold text-gray-400"
        } >Blogs📝</NavLink></li>

        <li><NavLink to={"/creaters"} className={({ isActive }) =>
          isActive ?
            "font-semibold text-2xl font-extrabold text-indigo-400 hover:text-blue-300 transition duration-200 " :
            "font-semibold text-2xl font-extrabold text-gray-400"
        } >creaters👥</NavLink></li>
      </ul>
    </div>
  </>)
}

export default Header