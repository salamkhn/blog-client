import React from 'react';
import { jwtDecode } from "jwt-decode";
const getroleformtoken = () => {
  const tokenfromLocalstorage = localStorage.getItem("jwt")
  console.log("tokenfromLocalstorage for getting role form token  :", tokenfromLocalstorage)

  try {
    if (!tokenfromLocalstorage) return

    const decode = jwtDecode(tokenfromLocalstorage)
    const { role } = decode
    console.log("role form token-decode :", role)

    return role
  } catch (err) {
    return null
  }

}

export default getroleformtoken