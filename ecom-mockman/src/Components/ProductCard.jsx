import React from 'react';
import {useAuth} from "../contexts/auth-context"
import vegIcon from "../images/veg.png";
import nonvegIcon from "../images/nonveg.png";
import StarIcon from '@mui/icons-material/Star';
import { useCart } from '../contexts/cart-context';
import { useWishlist } from '../contexts/wish-context';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
function ProductCard({product}) {
    const{
            _id,
            title,
            Cal,
            nutrition,
            veg,
            rating,bestseller,image,price,categoryName
    }=product;

    const {
      wishlistState, 
      toggleWishlist,
      loading: wishlistLoading,
    } = useWishlist();

    const { cartState, addToCartHandler,removeFromCartHandler } = useCart();
    const { isAuth, navigate } = useAuth();
    const itemInCart = cartState.find((item) => item._id === _id);
    const itemInWishlist = wishlistState.find((item) => item._id === _id);
  return ( 
    <div> <div class="card">
    <div class="card-img-wrapper">
    <img class="card-img" src={image} alt="meal" />
    </div>

    <div class="card-title">
      
      <h2 class="card-header">{title}</h2>
      {/* <!-- Product subtitle --> */}
      <div class="prod-abt">
       {veg &&<img class="v-nveg" src={vegIcon} alt="veg"/>}      
        {!veg &&<img class="v-nveg" src={nonvegIcon} alt="nonveg"/>}
    
        <h6 class="card-subtitle"> {Cal} Cal | {nutrition} </h6>
        <button className='fav-icon'
            onClick={() => toggleWishlist(product)}
            
          >
            { isAuth && itemInWishlist?(
            <FavoriteIcon className='fav-icon'/>):(<FavoriteBorderIcon className='fav-icon'/>)}
          </button>
      </div>
      <div class="rating">
        <p class="rating-num">{rating}</p>
        <StarIcon className="r-star"/>
      </div>
    </div>
    <div class="hor-flex">
        <div class="price">
            <span>₹ {price}</span>
        </div>
      <div >

        <button 
        className={isAuth && itemInCart?'primary-btn':'secondary-btn font-size-md'}
          onClick={() =>{
            console.log("add clicked", isAuth,itemInCart,cartState);
            isAuth && itemInCart ? removeFromCartHandler(product) : addToCartHandler(product)}
          }
        >
        {isAuth && itemInCart ? "Remove from Cart" : "Add To Cart"}</button>                  
      </div>
    </div>
  </div></div>
  )
}

export default ProductCard