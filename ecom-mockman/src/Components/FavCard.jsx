import React from 'react'
import vegIcon from  "../images/veg.png";
import nonvegIcon from "../images/nonveg.png";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from '../contexts/cart-context';
import { useAuth } from '../contexts/auth-context';
import { useWishlist } from '../contexts/wish-context';
import { toast,Toaster } from "react-hot-toast";
function FavCard({product}) {
  const {_id, title, qty, price, image,veg,Cal,description } = product;

  const {
    removeFromCartHandler,
    updateQtyHandler,
    moveToWishlistHandler,
    loading,
  } = useCart();
  const {
    wishlistState, 
    toggleWishlist,
    loading: wishlistLoading,
  } = useWishlist();
  const { isAuth, navigate } = useAuth();
  const itemInWishlist = wishlistState.find((item) => item._id === _id);
  return (
    <div>
         <div class="cart-card">
                <img src={image} alt="Cart Item" class="cart-item-image"/>
                <div class="cart-card-info">
                    <div className="flex-heading">
                   <h2 className="cart-item-heading">    {title}  </h2>

                       <button className='fav-icon'
            onClick={() => toggleWishlist(product)}>
          
              { isAuth && itemInWishlist?(
              
            <FavoriteIcon className='fav-icon'   />):(<FavoriteBorderIcon className='fav-icon'/>)}
            </button>
                    </div>
   


                    <div class="prod-abt">
                    {
                     veg &&
                    
                    <img class="v-nveg" src={vegIcon} alt="veg"/>}  
                  
                    {
                    !veg &&
                    <img class="v-nveg" src={nonvegIcon} alt="nonveg"/>}
                        <h6 class="card-subtitle">    {Cal} Cal | {description}</h6>
                      </div>
                       </div>
            </div>
    </div>
  )
}

export default FavCard