import React from 'react'
import Blogcontext from './createContext'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { Blog } from '../../../../Server/model/blogModel'
const StateContext = ({ children }) => {
  const [allBlogs, setallBlogs] = useState([])
  //ali calling

  //get Alltodos

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const { data } = await axios.get("http://localhost:3333/api/blog/allblogs",
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        console.log("data :", data.Blogs)
        setallBlogs(data.Blogs || [])
      } catch (err) {
        console.log("error in fetching all blogs :", err)
      }
    }
    fetchAllBlogs()
  }, [])


  return (
    <Blogcontext.Provider
      value={{
        allBlogs
      }}
    >
      {children}
    </Blogcontext.Provider>
  )
}

export default StateContext
