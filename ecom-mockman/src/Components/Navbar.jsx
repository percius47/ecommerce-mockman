import React, { useState } from 'react'
import "./Navbar.css"
import ProfileImg from "../images/Profile-navbar.png"
import CartIcon from "../images/cart-icon.png"
import {NavLink} from "react-router-dom"
import StormIcon from '@mui/icons-material/Storm';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { toast } from "react-hot-toast";
import { useAuth } from '../contexts/auth-context'
import { useCart } from '../contexts/cart-context'
import { useWishlist } from '../contexts/wish-context'

function Navbar() {
    const { isAuth, setIsAuth } = useAuth();
    const { totalProducts} = useCart();
    const {wishlistState}=useWishlist();
    const [menuList,setMenuList]=useState(false);
  return (
    <div>
             
        {/* <!-- Nav --> */}
    <div class="header-wrapper">
        <div class="header-logo" >
            <NavLink to="/" class="nav-logo-link">
        
                <StormIcon className='cta'/>
            <h1 class="header-logo-text">Windy's</h1>
        </NavLink>
        </div>
    
     
        
           {/* <!-- Menu --> */}

       <div class=" menu-mobile">
        <NavLink to="">
       <MenuIcon
       onClick={()=>setMenuList(!menuList)}
       />
          </NavLink>
        </div>
        {console.log("menu",menuList)}
         {menuList && < div className="menu-list">
            <ul className="mobile-menu-list">

                <li className='mobile-menu-list-item'>
                <NavLink to="/favorites">
                <span  className='mobile-menu-list-item'>
                    Favorites
                    {isAuth && wishlistState.length>0 &&
                  <span>  ({wishlistState.length})</span>
                    }
                 </span>
                    </NavLink>
                </li>
                <li className='mobile-menu-list-item'>
                <NavLink to="/cart">
                <span  className='mobile-menu-list-item'>
                    Cart
                    {isAuth && wishlistState.length>0 &&
                  <span> ( {totalProducts})</span>
                    }
                 </span>
                    </NavLink>
                </li>
                <li  className='mobile-menu-list-item'>
                   
                   {isAuth?( 
                    <NavLink to="/logout">
                        <span
                   
                 
                    onClick={() => {
                      localStorage.removeItem("token");
                      localStorage.setItem("isAuth", false);
                      setIsAuth(false);
                      toast.success("Logged out!")}}
                   >
                       Logout
                       </span>
                  
                   </NavLink>):(
                       <NavLink to="/login">
                       <span  className='mobile-menu-list-item'
                       
                     
                   
                        onClick={() => {
                          localStorage.removeItem("token");
                          localStorage.setItem("isAuth", false);
                          setIsAuth(false);
                          toast.success("Logged in!")
                   }}
                       >
                           Login
                       </span>
                       </NavLink>
   
                   )}
                   </li>
            </ul>
        </div>} 

                {/* desktop menu */}
            <div class="header-options">
             
                 {isAuth?( 
                 <NavLink to="/logout">
                     <button
                 className="header-login btn btn-outline"
              
              
                 onClick={() => {
                   localStorage.removeItem("token");
                   localStorage.setItem("isAuth", false);
                   setIsAuth(false);
                   toast.success("Logged out!")}}
                >
                    Logout
                    </button>
               
                </NavLink>):(
                    <NavLink to="/login">
                    <button class="header-login btn btn-outline"
                    
                  
                
                     onClick={() => {
                       localStorage.removeItem("token");
                       localStorage.setItem("isAuth", false);
                       setIsAuth(false);
                    //    toast.success("Logged in!")
                }}
                    >
                        Login
                    </button>
                    </NavLink>

                )}
               
            <div class="header-icon">
                {/* <!-- img --> */}

                <div class="badge-wrapper">
                    {/* <!-- Profile --> */}
                    <NavLink to="/favorites">
                       <FavoriteIcon/>
                 
                    </NavLink>
                    {isAuth && wishlistState.length>0 &&
                    <span class=" badge-top-right ">{wishlistState.length}</span>}
                    
                    </div> 
      
            </div>
            <div class="header-icon">
           
          
                <div class="badge-wrapper">
                    {/* <!-- Cart --> */}
                  <NavLink to="/cart">
                    <img src={CartIcon} alt="cart" class="" loading="lazy" width="24" height="22.01834862385321"/>
                    </NavLink>
                    {isAuth && totalProducts > 0  &&
                    <span class=" badge-top-right">{totalProducts}</span>}
                    
                    </div>
           
            </div>
        </div>
    </div>

    </div>
  )
}

export default Navbar