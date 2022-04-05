import React from 'react'
import Mockman from "mockman-js";
import {Routes,Route} from "react-router-dom"
import Home from '../pages/Home/Home'

import Products from  "../pages/Products/Products"
import Notfound from '../pages/Notfound';

function PageRoutes() {
  return (
    <div><Routes>
    <Route path="/mockman" element={<Mockman/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path='*' element={<Notfound/>}/>
    <Route path="/products" element={<Products/>}/>
 
  </Routes></div>
  )
}

export default PageRoutes