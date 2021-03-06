import React from 'react'
import "../Cart/Cart.css"
import CartBill from '../../Components/CartBill'
import CartCard from '../../Components/CartCard'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import EditIcon from '@mui/icons-material/Edit';
import { Helmet } from 'react-helmet'
import { Toaster } from "react-hot-toast";
import {NavLink} from "react-router-dom"
import { useWishlist } from '../../contexts/wish-context'
import FavCard from '../../Components/FavCard'

function Favorites() {
  const {wishlistState}=useWishlist();
  return (
    <div>
       <Helmet>
    <title>Favorites ({`${wishlistState.length}`})</title>
</Helmet>
    <Toaster/>
      <Navbar/>
      
<div class="cart-parent min-ht">
  <div class="cart-heading">
     <p>My Favorites</p>
  </div>

  <div class="cart-content">
      <div class="cart-items">       
      {
    
      wishlistState.map((item) => {

               return <FavCard product={item} key={item._id} />
      })}


      </div>
    
  {/* {wishlistState.length>0 && <CartBill/>} */}
   
  </div>
  {wishlistState.length===0 &&
<h2 className='not-text'>Sorry, you did not add anything!<NavLink to="/products" > Return to <span className='prod-link'>Foods.</span>  </NavLink></h2>

}
</div>

<Footer/>
  </div>
  )
}

export default Favorites