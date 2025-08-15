import React from 'react'
import Blogcontext from './context/createContext'
import { useContext } from 'react'
import { NavLink } from "react-router-dom"



const Blogs = () => {
  const blogsData = useContext(Blogcontext)
  
  const {
    allBlogs
  } = blogsData

  console.log("Blog in Blogs =>:", typeof allBlogs)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-14 mx-6">
      {allBlogs?.map((blog, index) => {
        return (<> <NavLink key={blog._id || index} to={`/blogdetail/${blog._id}`}

          className="bg-[#101828] text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300 flex flex-col"
        >
          {/* Image */}
          <div className="w-full h-56 overflow-hidden">
            <img
              src={blog.image}
              alt="blog_image"
              className="w-full h-full object-cover hover:opacity-70 transition duration-300"
            />
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col gap-3">
            <h2 className="text-xl font-bold font-serif">
              {blog.title}
            </h2>
            <span className="text-sm text-gray-300 bg-gray-700 px-3 py-1 rounded-full w-fit">
              {blog.category}
            </span>
          </div>
        </NavLink>
        </>);
      })}
    </div>
  );

}

export default Blogs