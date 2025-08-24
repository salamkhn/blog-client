import React from 'react'
import Blogcontext from './createContext'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
import api from '../../lib/api'




const StateContext = ({ children }) => {
  const [allBlogs, setallBlogs] = useState([])
  const [creater, setCreaters] = useState([])




  //get Allblogs

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const { data } = await api.get("/api/blog/allblogs",
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        console.log('data from backend:=>', data)

        setallBlogs(data.Blogs || [])
        console.log("all-blogs-data =>", allBlogs)
      } catch (err) {
        console.log("error in fetching all blogs :", err)
      }
    }

    const fetchAllCreater = async () => {
      const { data } = await api.get("/api/user/allusers", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json"
        }
      })

      setCreaters(data.users)
    }
    fetchAllCreater()
    fetchAllBlogs()
  }, [])



  return (
    <Blogcontext.Provider
      value={{
        allBlogs,
        creater,

      }}
    >
      {children}
    </Blogcontext.Provider>
  )
}

export default StateContext
