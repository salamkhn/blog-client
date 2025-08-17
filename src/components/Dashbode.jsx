import React from 'react'

const Dashbord = () => {
  return (<>
    <div className='w-screen h-screen flex'>

      {/* left side */}
      <div className=' bg-gray-400 w-[20rem]   flex flex-col px-4     py-3.5  gap-4'>
        <div className='flex flex-row justify-center items-center'>
          <figure>
            <img style={{ boxShadow: " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }} className='h-[9rem] w-[9rem] rounded-[50%] border-2 border-white' src="https://i0.wp.com/cms.sofrep.com/wp-content/uploads/2022/10/Dr.-Abdul-Qadeer-Khan.jpg?fit=927%2C511&ssl=1" alt="image-loading" />
          </figure>
        </div>
        <div>
          <button style={{ boxShadow: "rgba(0, 0, 0, 0.19) 0px 20px 30px, rgba(0, 0, 0, 0.23) 0px 16px 16px" }} className=' w-[40rem] bg-blue-600 rounded-lg w-full font-serif font-semibold self-stretch text-xl sm:text-3xl border-2 border-white text-shadow-2xs py-8 px-3.5 text-white'>My Profile</button>
        </div>
        <div>
          <button className=' cursor-pointer w-[40rem] bg-[#306646] rounded-lg w-full font-serif font-semibold self-stretch text-xl sm:text-2xl py-2 px-3.5 text-white'>Create Blog</button>
        </div>
        <div>
          <button className=' cursor-pointer w-[40rem] bg-[#465C88] rounded-lg w-full font-serif font-semibold self-stretch text-xl sm:text-2xl py-2 px-3.5 text-white'>Profile</button>
        </div>
        <div>
          <button className=' cursor-pointer w-[40rem] bg-[#320A6B] rounded-lg w-full font-serif font-semibold self-stretch text-xl sm:text-2xl py-2 px-3.5 text-white'>Home</button>
        </div>
        <div>
          <button className=' cursor-pointer w-[40rem] bg-red-700 rounded-lg w-full font-serif font-semibold self-stretch text-xl sm:text-2xl py-2 px-3.5 text-white'>Logout</button>
        </div>

      </div>
      {/* reght side */}
      <div>
        <h2>Left-bar</h2>
      </div>

    </div >
  </>)
}

export default Dashbord