import React from 'react'
import "./Cart.css"
import CartBill from '../../Components/CartBill'
import CartCard from '../../Components/CartCard'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'

import { Helmet } from 'react-helmet'
import { Toaster } from "react-hot-toast";
import { useCart } from '../../contexts/cart-context'
import {NavLink} from "react-router-dom"
function Cart() {
  const { cartState,totalProducts } = useCart();

  return (
    <div >   <Helmet>
    <title>Cart ({`${totalProducts}`})</title>
</Helmet>
      <Toaster/>
        <Navbar/>
        
<div class="cart-parent min-ht">
    <div class="cart-heading">
       <p>My Cart</p>
    </div>

    <div class="cart-content ">
        <div class="cart-items">       
        {
      
        cartState.map((cartItem) => {

                 return <CartCard product={cartItem} key={cartItem._id} />
        })}


        </div>
      
    {cartState.length>0 && <CartBill/>}
     
    </div>
    {cartState.length===0 &&
  <h2 className='not-text'>Sorry, you did not add anything!<NavLink to="/products" > Return to <span className='prod-link'>Foods.</span>  </NavLink></h2>

}
</div>

<Footer/>
    </div>
  )
}

export default Cart