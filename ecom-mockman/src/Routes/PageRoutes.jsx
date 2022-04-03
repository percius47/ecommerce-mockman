import React from 'react'
import Mockman from "mockman-js";
import {Routes,Route} from "react-router-dom"
import Home from '../pages/Home/Home'
import Login from "../pages/Auth/login"
import Products from "../pages/Products/Products"
import Cart from "../pages/Cart/cart"
function PageRoutes() {
  return (
    <div><Routes>
    <Route path="/mockman" element={<Mockman/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/cart" element={<Cart/>}/>
  </Routes></div>
  )
}

export default PageRoutes