import react from "react"
import React from "react"
import Home from "./components/Home"
import Blogs from "./components/Blogs"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Creaters from "./components/Creater"
import Layout from "./components/Layout.jsx/Layout"
import SingePageBlog from "./components/SingePAgeBlog"
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
        }
      ]
    },
  ])
  return (<>

    <RouterProvider router={router} />
  </>)
}

export default App
