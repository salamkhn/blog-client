import React from 'react'

const Header = () => {
  return (<>
    <header className='bg-[#101828] py-4 px-5 text-gray-300 flex flex-row justify-between md:justify-around'>

      <div className='flex flex-row items-center justify-center'>
        <h1 className='text-2xl font-bold font-serif'>SalamBlogs</h1>
      </div>

      {/* menu for md aur us sa uper wali fields ka andar  */}
      <ul className='hidden  md:flex flex-row text gap-3 items-center justify-center justify-between'>
        <li><a className='font-semibold text-lg' href="">Home</a></li>
        <li><a className='font-semibold text-lg' href="">Blog</a></li>
        <li><a className='font-semibold text-lg' href="">Creaters</a></li>
      </ul>


      <div className='flex flex-row items-center justify-center'>
        <h2 className='bg-white text-black cursor-pointer rounded-lg hover:bg-black hover:bg-gray-300 hover:bg-gray-200 transition duration-300  py-3 px-3.5 font-semibold text-lg'>Signup</h2>
      </div>
      {/*menu for md sa nicha wali fields ka andar  */}




    </header>
    <div className='md:hidden flex flex-row justify-around fixed bg-gray-400 bottom-0 left-0 m-auto w-full z-20 text gap-3 items-center justify-center justify-between'>
      <ul className='flex justify-around w-full flex-row gap-3 py-6' >
        <li className='bg-white  py-2  px-3 rounded-md text-black'><a className='font-semibold text-lg' href="">Home</a></li>
        <li className='bg-white  py-2  px-3 rounded-md text-black'><a className='font-semibold text-lg' href="">Blog</a></li>
        <li className='bg-white  py-2  px-3 rounded-md text-black'><a className='font-semibold text-lg' href="">Creaters</a></li>
      </ul>
    </div>
  </>)
}

export default Header