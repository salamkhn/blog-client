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

    <div className='mt-1 py-1 px-2 md:mt-2 md:py-4 md:px-10'>
      {
        filteredData?.map((blogDetail, index) => {
          return (
            <div key={blogDetail._id || index} className="pt-0.5 py-1.5 md:mt-4 md:py-10 px-6">
              {filteredData?.map((blogDetail) => (
                <div
                  key={blogDetail._id} // unique key (avoid index)
                  className="flex flex-col"
                >
                  {/* Blog Title */}
                  <h1 className="text-center font-extralight font-semibold font-sans text-xl sm:text-lg md:text-5xl md:font-extrabold italic tracking-wide">{blogDetail.title}</h1>

                  {/* Blog Image + Content */}
                  <div className="py-3.5">
                    <figure className="">
                      <img style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset" }}
                        className="w-full border-2 border-white rounded-2xl shadow-2xl"
                        src={blogDetail.image}
                        alt={blogDetail.title + ""}
                      />
                    </figure>
                    <p
                      className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed md:leading-loose 
             font-medium md:font-semibold text-gray-500 dark:text-gray-500 mt-3 tracking-wide text-justify"
                    >
                      {blogDetail.content}
                    </p>
                  </div>

                  {/* Go Back Button */}
                  <button
                    onClick={handleNavigate}
                    className="bg-blue-700   py-3  text-2xl text-white font-sans italic cursor-pointer inline-block text-center rounded-md italic hover:bg-blue-600"
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
