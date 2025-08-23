import React from 'react';
import { jwtDecode } from "jwt-decode";
const getroleformtoken = () => {
  const tokenfromLocalstorage = localStorage.getItem("jwt")


  try {
    if (!tokenfromLocalstorage) return

    const decode = jwtDecode(tokenfromLocalstorage)
    const { role } = decode


    return role
  } catch (err) {
    return null
  }

}

export default getroleformtoken