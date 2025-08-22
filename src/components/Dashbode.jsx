import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import Blogcontext from './context/createContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Dashbord = () => {
  const [userSpecifiedBlogs, setuserSpecifiedBlogs] = useState([])
  const { creater } = useContext(Blogcontext)
  console.log("creater :", creater)
  const navigate = useNavigate()

  const userID = localStorage.getItem("userId")
  const filteredCreater = creater.filter((creater) => creater._id === userID)

  console.log("filteredCreater :", filteredCreater)



  // go to openuserProfile
  const gotoprofileDetail = () => {
    navigate('/profile')
  }

  //go to  createrBlog function
  const createBlog = () => {
    navigate("/createBlog")
  }

  console.log("userID :", userID)

  useEffect(() => {
    const fetchedUserSpecificBlog = async () => {
      const { data } = await axios.get(`http://localhost:3333/api/blog/userspecificblogs/${userID}`, {
        withCredentials: true,
      })
      console.log("userSpecificBlog :", data)
      setuserSpecifiedBlogs(data.userSpecificBlogs)

      console.log("userSpecifiedBlogs :", userSpecifiedBlogs)
    }
    fetchedUserSpecificBlog()
  }, [])


  //handle clicked btn
  const deleteHandle = async (id) => {
    console.log("this id fetched-for deleting btn :", id)
    try {
      const { data } = await axios.delete(`http://localhost:3333/api/blog/deleteblog/${id}`,
        { withCredentials: true }

      )
      console.log("dara form delete Blog :", data)
      setuserSpecifiedBlogs(pre => pre.filter(blog => blog._id !== id))
      toast.success('🗑️ blog deleted successfully')

    } catch (err) {
      console.log("error in handleDelete btn :", err)
    }
  }
  return (<>
    <div className=' flex'>

      {/* left side */}

      <div>
        {
          filteredCreater?.map((filtercreater, index) => {
            return <div key={filtercreater._id || index} className='hidden md:block bg-gray-400 min-w-[20rem] h-auto py-3.5 mb-2   flex flex-col px-4     py-3.5  gap-3 space-y-5'>
              <div className='flex flex-row justify-center items-center'>
                <figure className='w-40 h-40 rounded-full overflow-hidden'>
                  <img style={{ boxShadow: " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }} className='w-full h-full object-cover' src={filtercreater.userprofile} alt="image-loading" />
                </figure>
              </div>
              <div>
                <button style={{ boxShadow: "rgba(0, 0, 0, 0.19) 0px 20px 30px, rgba(0, 0, 0, 0.23) 0px 16px 16px" }} className=' w-[40rem] bg-blue-600 rounded-lg w-full font-serif font-semibold self-stretch text-xl sm:text-3xl border-2 border-white text-shadow-2xs py-8 px-3.5 text-white'>My Profile</button>
              </div>
              <div>
                <button onClick={createBlog} className=' cursor-pointer w-[40rem] bg-[#306646] rounded-lg w-full font-serif font-semibold self-stretch text-xl sm:text-2xl py-2 px-3.5 text-white'>Create Blog</button>
              </div>
              <div>
                <button onClick={gotoprofileDetail} className=' cursor-pointer w-[40rem] bg-[#465C88] rounded-lg w-full font-serif font-semibold self-stretch text-xl sm:text-2xl py-2 px-3.5 text-white'>Profile</button>
              </div>
              <div>
                <button className=' cursor-pointer w-[40rem] bg-[#320A6B] rounded-lg w-full font-serif font-semibold self-stretch text-xl sm:text-2xl py-2 px-3.5 text-white'>Home</button>
              </div>
              <div>
                <button className=' cursor-pointer w-[40rem] bg-red-700 rounded-lg w-full font-serif font-semibold self-stretch text-xl sm:text-2xl py-2 px-3.5 text-white'>Logout</button>
              </div>

            </div>
          })
        }
      </div>

      {/* reght side */}
      <div>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 py-14 mx-6 h-auto">
          {userSpecifiedBlogs?.map((blog, index) => {
            console.log("blog_id-checking =:>", blog._id)
            return (<> <div key={blog._id || index}
              className="bg-[#101828] text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300 flex flex-col"
            >
              {/* Image */}
              <NavLink to={`/blogdetail/${blog._id}`} className="w-full h-56 overflow-hidden">

                <img
                  src={blog.image}
                  alt="blog_image"
                  className="w-full h-full object-cover hover:opacity-70 transition duration-300"
                />
              </NavLink>


              {/* Content */}
              <div className="p-5 flex flex-col gap-3">
                <h2 className="text-xl font-bold font-serif">
                  {blog.title}
                </h2>
                <div className='flex flex-row justify-between'>
                  <span className="text-sm text-gray-300 bg-gray-700 px-3 pt-2 rounded-full w-fit">
                    {blog.category}
                  </span>

                  <button onClick={() => deleteHandle(blog._id)} className='bg-red-500 py-1.5 px-1.5 rounded-sm hover:rounded:lg cursor-pointer'>Delete</button>
                </div>
              </div>
            </div>

            </>);
          })}
        </div>
      </div>

    </div >
  </>)
}

export default Dashbord