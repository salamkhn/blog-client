import React from 'react'
import Header from '../Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (<>
    <div className='min-h-screen flex flex-col'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  </>)
}

export default Layout
