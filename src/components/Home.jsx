import React from 'react'
import { useContext } from 'react'
import Blogcontext from './context/createContext'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const Home = () => {
  const params = useParams()
  console.log("params-in-home-from-useParams :", params)

  const { allBlogs, creater } = useContext(Blogcontext)

  // extrect Arrays of categories
  const educationalBlogs = allBlogs.filter(blogs => blogs.category === "education")
  const techBlogs = allBlogs.filter(blogs => blogs.category === "tech")
  const healthBlogs = allBlogs.filter(blogs => blogs.category === "health")
  const markitingBlogs = allBlogs.filter(blogs => blogs.category === "markiting")
  const salesBlogs = allBlogs.filter(blogs => blogs.category === "sales")

  console.log("all blogs :=>", educationalBlogs, healthBlogs, techBlogs, markitingBlogs, salesBlogs)
  return (<>
    <div className="py-6 px-7 flex gap-6 overflow-x-auto scrollbar-hide">
      {allBlogs.map((blog, index) => {
        const person = creater.find((c) => c._id === blog.Author);

        return (
          <NavLink to={`/blogdetail/${blog._id}`}
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
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-200 to-white">
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
          </NavLink>




        );
      })}

    </div>
    {/* Blogs Deponds upon Category
       "education", "tech", "branding", "health", "kirana", "marketing", "sales" */}

    {/* filtering base on categories */}

    {/* education based */}
    <div className='py-12 px-3.5 md:px-5'>
      <h2 className='text-xl md:text-2xl font-sans font-semibold'>|Education|</h2>
      {/* div for maping blogs based upon categories*/}
      {/* maping Blog */}
      <div className='flex flex-wrap gap-7 py-5 px-3.5 md:px-6'>
        {
          educationalBlogs.length !== 0 ? educationalBlogs.map((blog, index) => {
            const person = creater.find(v => v._id === blog.Author)
            return (<> <NavLink key={blog._id || index} to={`/blogdetail/${blog._id}`}

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
              <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-200 to-white">
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
            </NavLink>

            </>)
          }) : "not any blog found with this category"

        }
      </div>

    </div>

    {/* teach based  */}
    <div className='py-12 px-7'>
      <h2 className='text-xl md:text-2xl font-sans font-semibold'>|tech|</h2>
      {/* div for maping blogs based upon categories*/}
      {/* maping Blog */}
      <div className='flex flex-wrap gap-7 py-5 px-6'>
        {
          techBlogs.length !== 0 ? techBlogs.map((blog, index) => {
            const person = creater.find(v => v._id === blog.Author)
            return (<>
              <NavLink to={`/blogdetail/${blog._id}`}
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
                <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-200 to-white">
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
              </NavLink>

            </>)
          }) : "not any blog found with this category"

        }
      </div>

    </div>

    {/* health based */}
    <div className='py-12 px-7'>
      <h2 className='text-xl md:text-2xl font-sans font-semibold'>|Health|</h2>
      {/* div for maping blogs based upon categories*/}
      {/* maping Blog */}
      <div className='flex flex-wrap gap-7 py-5 px-6'>
        {
          healthBlogs.length !== 0 ? healthBlogs.map((blog, index) => {
            const person = creater.find(v => v._id === blog.Author)
            return (<>
              <NavLink to={`/blogdetail/${blog._id}`}
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
                <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-200 to-white">
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
              </NavLink>

            </>)
          }) : "not any blog found with this category"

        }
      </div>

    </div>
    {/* markiting based */}
    <div className='py-12 px-7'>
      <h2 className='text-xl md:text-2xl font-sans font-semibold'>|Markiting|</h2>
      {/* div for maping blogs based upon categories*/}
      {/* maping Blog */}
      <div className='flex flex-wrap gap-7 py-5 px-6'>
        {
          markitingBlogs.length !== 0 ? markitingBlogs.map((blog, index) => {
            const person = creater.find(v => v._id === blog.Author)
            return (<>
              <NavLink to={`/blogdetail/${blog._id}`}
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
                <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-200 to-white">
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
              </NavLink>

            </>)
          }) : "not any blog found with this category"

        }
      </div>

    </div>

    {/* sales based */}
    <div className='py-12 px-7'>
      <h2 className='text-xl md:text-2xl font-sans font-semibold'>|Sales|</h2>
      {/* div for maping blogs based upon categories*/}
      {/* maping Blog */}
      <div className='flex flex-wrap gap-7 py-5 px-6'>
        {
          salesBlogs.length !== 0 ? salesBlogs.map((blog, index) => {
            const person = creater.find(v => v._id === blog.Author)
            return (<>
              <NavLink to={`/blogdetail/${blog._id}`}
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
                <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-200 to-white">
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
              </NavLink>

            </>)
          }) : "not any blog found with this category"

        }
      </div>

    </div>









  </>)
}

export default Home
