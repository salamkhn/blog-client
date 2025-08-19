import react from "react"
import React from "react"
import Home from "./components/Home"
import Blogs from "./components/Blogs"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Creaters from "./components/Creater"
import Layout from "./components/Layout.jsx/Layout"
import SingePageBlog from "./components/SingePAgeBlog"
import Signup from "./components/signup"
import { Toaster } from "react-hot-toast"
import Login from "./components/Login"
import { Navigate } from "react-router-dom"
import PageNotFound from "./components/PageNotFound"
import Dashbord from "./components/Dashbode"
import CreateBlog from "./components/DashbordComponents/CreateBlog"
function App() {

  // getting token form the local storage
  const token = localStorage.getItem("jwt")
  console.log("token :", token)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />

        },
        {
          path: "/blogs",
          element: token ? <Dashbord /> : <Navigate to={"/login"} />
        },

        {
          path: "/creaters",
          element: <Creaters />
        },
        {
          path: "/blogdetail/:id",
          element: <SingePageBlog />
        },
        {
          path: "/signup",
          element: <Signup />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/dashbord",
          element: <Dashbord />

        },

        {
          path: "/createBlog",
          element: <CreateBlog />

        },
        {
          path: "*",
          element: <PageNotFound />
        },
      ]
    },
  ])
  return (<>

    <RouterProvider router={router} />
    <Toaster position="top-center" reverseOrder="false" />
  </>)
}

export default App
