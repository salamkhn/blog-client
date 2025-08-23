import React from 'react'
import Blogcontext from './createContext'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'



const StateContext = ({ children }) => {
  const [allBlogs, setallBlogs] = useState([])
  const [creater, setCreaters] = useState([])




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

        setallBlogs(data.Blogs || [])
      } catch (err) {
        console.log("error in fetching all blogs :", err)
      }
    }

    const fetchAllCreater = async () => {
      const { data } = await axios.get("http://localhost:3333/api/user/allusers", {
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
