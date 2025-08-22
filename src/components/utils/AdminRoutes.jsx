import React from 'react'
import getroleformtoken from '../helper/getroleformtoken'
import { Navigate } from 'react-router-dom'

const AdminRoutes = ({ children }) => {
  const role = getroleformtoken()
  return role === "admin" ? children : <Navigate to="/login" />;
}

export default AdminRoutes
