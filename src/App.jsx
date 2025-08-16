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
function App() {
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
          element: <Blogs />
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
          path:"/login",
          element:<Login/>
        }
      ]
    },
  ])
  return (<>

    <RouterProvider router={router} />
    <Toaster position="top-center" reverseOrder="false" />
  </>)
}

export default App
