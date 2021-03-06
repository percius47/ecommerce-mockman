import React from 'react'
import Mockman from "mockman-js";
import {Routes,Route} from "react-router-dom"
import Home from '../pages/Home/Home'

import Products from  "../pages/Products/Products"
import Notfound from '../pages/Notfound';
import Cart from '../pages/Cart/Cart';
import Signup from '../pages/Auth/Signup';
import Login from '../pages/Auth/Login';
import Signout from '../pages/Auth/Signout';
import Favorites from '../pages/Favorites/Favorites';
import { PrivateRoute } from './PrivateRoute';
import { UserAccount } from '../pages/UserAccount/UserAccount';
import { UserProfile } from '../Components/UserProfile';
import { OrderList } from '../Components/OrderList';
import { AddressList } from '../Components/AddressList';
import  {Checkout} from "../pages/Checkout/Checkout" 
import { OrderSummary } from '../pages/OrderSummary/OrderSummary';

function PageRoutes() {
  return (
    <div>
      <Routes>
    <Route path="/mockman" element={<Mockman/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path='*' element={<Notfound/>}/>

    <Route element={<PrivateRoute />}>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/favorites' element={<Favorites/>}/>
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/order/:orderId" element={<OrderSummary />} />
    <Route path="/profile" element={<UserAccount />}>
             <Route path="" element={<UserProfile />} />
           <Route path="orders" element={<OrderList />} />
            <Route path="addresses" element={<AddressList />} /> 
          </Route>

    </Route>
    
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/logout' element={<Signout/>}/>
    <Route path='/login' element={<Login/>}/>

    <Route path="/products" element={<Products/>}/>
 
  </Routes>
  </div>
  )
}

export default PageRoutes