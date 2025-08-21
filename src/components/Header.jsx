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
    <header className='bg-[#101828] py-4 px-5 text-gray-300 flex flex-row justify-between md:justify-around'>

      <div className='flex flex-row items-center justify-center'>
        <h1 className='text-2xl font-bold font-serif'>SalamBlogs</h1>
      </div>

      {/* menu for md aur us sa uper wali fields ka andar  */}
      <ul className='hidden  md:flex flex-row text gap-3 items-center justify-center justify-between'>
        <li><a className='font-semibold text-lg' href="/">Home</a></li>
        <li><a className='font-semibold text-lg' href="/blogs">Blog</a></li>
        <li><a className='font-semibold text-lg' href="/creaters">Creaters</a></li>
      </ul>


      <div className='flex flex-row gap-2 items-center justify-center'>
        <button onClick={handledashbord} className="bg-white text-black cursor-pointer rounded-lg hover:bg-black hover:bg-gray-200 transition duration-300  py-2.5 px-2.5 font-semibold text-lg">Dashbord</button>
        {
          token ? <button onClick={clearToken} className='bg-white text-black cursor-pointer rounded-lg hover:bg-black hover:bg-gray-200 transition duration-300  py-2.5 px-2.5 font-semibold text-lg'>Logout</button>
            : <NavLink to="/signup" className='bg-white text-black cursor-pointer rounded-lg hover:bg-black hover:bg-gray-200 transition duration-300  py-3 px-3.5 font-semibold text-lg'>Signup</NavLink >
        }
      </div>
      {/*menu for md sa nicha wali fields ka andar  */}
    </header>
    <div className='md:hidden flex flex-row justify-around fixed bg-gray-400 bottom-0 left-0 m-auto w-full z-20 text gap-3 items-center justify-center justify-between'>
      <ul className='flex justify-around w-full flex-row gap-3 py-6' >
        <li className='border border-white bg-white  py-2  px-3 rounded-md text-black hover:bg-gray-400 hover:text-shadow-indigo-100'><a className='font-semibold text-lg' href="">Home</a></li>
        <li className='border border-white bg-white  py-2  px-3 rounded-md text-black hover:bg-gray-400 hover:text-shadow-indigo-100'><a className='font-semibold text-lg' href="">Blog</a></li>
        <li className='border border-white bg-white  py-2  px-3 rounded-md text-black hover:bg-gray-400 hover:text-shadow-indigo-100'><a className='font-semibold text-lg' href="">Creaters</a></li>
      </ul>
    </div>
  </>)
}

export default Header