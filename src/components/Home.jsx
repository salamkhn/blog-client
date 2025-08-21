import React from 'react'
import { useContext } from 'react'
import Blogcontext from './context/createContext'
const Home = () => {

  const { allBlogs, creater } = useContext(Blogcontext)

  console.log("allblogs and in Home :", allBlogs)
  console.log("creater and  in Home :", creater)
  return (<>


    <div className="py-6 px-7 flex gap-6 overflow-x-auto scrollbar-hide">
      {allBlogs.map((blog, index) => {
        const person = creater.find((c) => c._id === blog.Author);

        return (
          <div
            key={blog._id || index}
            className="flex-shrink-0 w-[18rem] sm:w-[20rem] md:w-[24rem] lg:w-[26rem] 
                   bg-white rounded-sm sm:rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 
                   overflow-hidden group"
          >
            {/* Blog Image + Category Badge */}
            <figure className="relative overflow-hidden">
              <img
                className="w-full h-[15rem] object-cover rounded-t-2xl transform group-hover:scale-105 transition-transform duration-500"
                src={blog?.image}
                alt="image loading.."
              />

              {/* Category Badge */}
              <span className="absolute top-3 left-3 bg-black/50 text-white/70 text-xs sm:text-sm px-3 py-1 rounded-full backdrop-blur-md shadow-md group-hover:bg-black/100 group-hover:text-white/100 transition duration-250">
                {blog?.category}
              </span>
            </figure>

            {/* Blog Footer */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-100 to-white">
              <figure>
                <img
                  className="h-[55px] w-[55px] rounded-full object-cover border-2 border-white shadow-md"
                  src={person?.userprofile}
                  alt="image loading.."
                />
              </figure>
              <h1 className="text-lg sm:text-xl font-semibold font-serif text-gray-800">
                {person?.userName?.slice(0, 8) + ".."}
              </h1>
            </div>
          </div>
        );
      })}
    </div>






  </>)
}

export default Home
