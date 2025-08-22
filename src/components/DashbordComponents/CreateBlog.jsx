import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";


export const CreateBlog = () => {


  const navigate = useNavigate()

  // handle go back function
  const handlegoback = () => {
    navigate("/dashbord")
  }

  // userState for BlogDetails
  const [blog, setblog] = useState({
    title: "",
    category: "education",
    image: "",
    content: ""
  })

  const handlecreateBlog = async (e) => {
    e.preventDefault()
    if (!blog.image) {
      toast.error("⚠️Please provide an image before posting blog")
      return
    }
    try {
      //working with formData() so that we can  save files
      const formdata = new FormData();
      //appending
      formdata.append("title", blog.title)
      formdata.append("category", blog.category)
      formdata.append("image", blog.image)
      formdata.append("content", blog.content)

      console.log("this blog created :", blog)



      const { data } = await axios.post("http://localhost:3333/api/blog/create", formdata,
        { withCredentials: true }
      )

      //showing response in toastx
      toast.success(data.message)
      // setting field's to empty
      setblog({
        category: "education",
        content: "",
        image: "",
        title: ""
      })
      navigate("/dashbord")

    } catch (err) {
      toast.error(err.response.data.message)
    }



  }

  //categories Array
  const Categories = ["education", "tech", "branding", "health", "kirana", "marketing", "sales"]

  return (<>
    <div className='min-h-screen flex justify-center items-center bg-gray-700'>
      <form onSubmit={handlecreateBlog} className=' my-8 flex flex-col space-y-5.5  justify-center border-2 border-blue-70 py-10 px-10 bg-white text-gray-900 rounded-lg shadow-lg  w-3xl'>
        <div style={{ boxShadow: "rgba(14, 63, 126, 0.04) 0px 0px 5px 5px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px" }} className=' py-4.5 px-4'>
          <h1 className='text-2xl md:text-4xl font-mono font-semibold font-extralight h-full md:h-auto w-full md:w-full  rounded-2xl'>Create Blog</h1>
          <div className="flex flex-col space-y-2.5 ">
            <label className='text-3xl font-semibold' htmlFor="title">
              Title
            </label>
            <input className='h-18.5 text-xl md:text-2xl px-2 font-semibold focus:outline-0 border-[1px] focus:border-[3px] text-blue-500 border-blue-700 rounded-md'
              type="text"
              placeholder='Enter your title'
              value={blog.title}
              onChange={(e) => setblog({ ...blog, title: e.target.value })}
            />

          </div>
          <div className="flex flex-col space-y-2.5 ">
            <label className='text-3xl font-semibold' htmlFor="title">
              category
            </label>
            <select
              className='h-15.5 text-xl md:text-2xl px-2 font-semibold focus:outline-0 border-[1px] focus:border-[3px] text-blue-500 border-blue-700 w-full rounded-lg w-full'
              value={blog.category}
              onChange={(e) => setblog({ ...blog, category: e.target.value })}
            >
              {
                Categories.map((category, index) => <option key={index} value={category}>{category}</option>)
              }
            </select>
          </div>
          <div className="flex flex-col space-y-2.5 ">
            <label className='text-3xl font-semibold' htmlFor="title">
              image
            </label>
            <input className='file:shadow-xs  cursor-pointer file: border-2 cursor-pointer rounded-lg text-blue-700 font-semibold h-14 text-center items-center m-auto py-3.5 px-3.5'
              type="file"
              placeholder='upload Image'
              onChange={(e) => setblog({ ...blog, image: e.target.files[0] })}

            />
          </div>
          <div className="flex flex-col space-y-2.5 ">
            <label className='text-3xl font-semibold' htmlFor="title">
              content
            </label>
            <textarea className='min-h-[14rem] text-xl md:text-2xl text-blue-600 font-semibold px-2 py-2 focus:outline-0 border-[2px] border-blue-700 rounded-lg focus:border-[3px]'
              name="content"
              id="content"
              value={blog.content}
              onChange={(e) => setblog({ ...blog, content: e.target.value })}

            >
            </textarea>
          </div>

          <button type='submit' className=' py-4 w-full my-3 bg-blue-700 text-white text-xl md:text-2xl cursor-pointer font-semibold rounded-[3px] hover:bg-blue-900  transition duration-150'>post Blog</button>
        </div>

        <NavLink className='bg-black text-white text-2xl text-center top-10% py-3 px-2.5 font-semibold rounded-md w-[10rem]' onClick={handlegoback} > <IoMdArrowRoundBack /> go back</NavLink>

      </form>
    </div>

  </>)
}

export default CreateBlog