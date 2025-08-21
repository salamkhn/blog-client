import { useContext, useEffect } from 'react'
import Blogcontext from './context/createContext'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import React from "react";

const SingePageBlog = () => {
  const Navigate = useNavigate()
  const { id } = useParams()
  console.log("id :", id)
  
  const blogsData = useContext(Blogcontext);
  console.log("single blogs details :=>", blogsData)


  const { allBlogs } = blogsData

  console.log("allBlogs details :=>", allBlogs)

  //filtering logic 
  const filteredData = allBlogs.filter((blog, index) => blog._id === id)
  console.log("filteredData :", filteredData)


  // handle navigation btns.
  const handleNavigate = () => {
    Navigate(-1)
  }
  return (<>

    <div className='mt-4 py-10 px-30'>
      {
        filteredData?.map((blogDetail, index) => {
          return (
            <div className="mt-4 py-10 px-6">
              {filteredData?.map((blogDetail) => (
                <div
                  key={blogDetail._id} // unique key (avoid index)
                  className="flex flex-col items-center mt-5 space-y-6"
                >
                  {/* Blog Title */}
                  <h1 className="text-3xl font-bold text-center">{blogDetail.title}</h1>

                  {/* Blog Image + Content */}
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <figure className="flex-shrink-0">
                      <img
                        className="w-full md:w-[30rem] h-[17rem] object-cover rounded-3xl shadow-lg"
                        src={blogDetail.image}
                        alt={blogDetail.title}
                      />
                    </figure>
                    <p className="font-medium leading-8 text-justify">
                      {blogDetail.content}
                    </p>
                  </div>

                  {/* Go Back Button */}
                  <button
                    onClick={handleNavigate}
                    className="bg-blue-950 text-gray-400 rounded-md text-xl px-6 py-3 border border-white transition-all duration-200 hover:bg-blue-800 hover:text-white"
                  >
                    Go Back
                  </button>
                </div>
              ))}
            </div>
          );

        })
      }
    </div>
  </>)
}
export default SingePageBlog
