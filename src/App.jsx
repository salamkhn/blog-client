import react from "react"
import React from "react"
import Home from "./components/Home"
import Blogs from "./components/Blogs"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Creaters from "./components/Creater"
import Layout from "./components/Layout.jsx/Layout"
import SingelPageBlog from "./components/SingelPageBlog"
import Signup from "./components/signup"
import { Toaster } from "react-hot-toast"
import Login from "./components/Login"

import PageNotFound from "./components/PageNotFound"
import Dashbord from "./components/Dashbode"
import CreateBlog from "./components/DashbordComponents/CreateBlog"
import AdminProfile from "./components/DashbordComponents/adminProfile"
import AdminRoutes from "./components/utils/AdminRoutes"
import { useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"

function App() {


  // getting token form the local storage
  const token = localStorage.getItem("jwt")
  console.log("token form app.jsx :", token)


  //user effect for deleting tokens
  useEffect(() => {
    const expire = localStorage.getItem("expire");
    if (expire && new Date().getTime() > expire) {
      localStorage.removeItem("jwt");
      localStorage.removeItem("userId");
      localStorage.removeItem("expire");
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: token ? <Home /> : <Navigate to='/login' />

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
          element: <SingelPageBlog />
        },


        {
          path: "/dashbord",
          element:
            <AdminRoutes>
              <Dashbord />
            </AdminRoutes>
        },

        {
          path: "/createBlog",
          element: <CreateBlog />

        },
        {
          path: "profile",
          element: <AdminProfile />

        },
        {
          path: "*",
          element: <PageNotFound />
        },
      ]
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/login",
      element: <Login />
    },
  ])
  return (<>

    <RouterProvider router={router} />
    <Toaster position="top-center" reverseOrder="false" />
  </>)
}

export default App
