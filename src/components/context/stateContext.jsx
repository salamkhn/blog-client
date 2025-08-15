import React from 'react'
import Blogcontext from './createContext'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { Blog } from '../../../../Server/model/blogModel'
const StateContext = ({ children }) => {
  const [allBlogs, setallBlogs] = useState([])
  const [creater, setCreaters] = useState([])
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

    const fetchAllCreater = async () => {
      const { data } = await axios.get("http://localhost:3333/api/user/allusers", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log("creaters :", data.users)
      setCreaters(data.users)
    }
    fetchAllCreater()
    fetchAllBlogs()
  }, [])

  const signupuser = async () => {
    try {
      const userSignupDetails = await axios("http://localhost:3333/api/user/register")
      console.log("userSignupDetails :", userSignupDetails)
    } catch (err) {
      console.log("error in catch of signupUser :", err.message)
    }
  }


  return (
    <Blogcontext.Provider
      value={{
        allBlogs,
        creater
      }}
    >
      {children}
    </Blogcontext.Provider>
  )
}

export default StateContext
