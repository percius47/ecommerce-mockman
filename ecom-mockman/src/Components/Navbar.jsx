import React from 'react'
import "./Navbar.css"
import ProfileImg from "../images/Profile-navbar.png"
import CartIcon from "../images/cart-icon.png"
import {NavLink} from "react-router-dom"
import StormIcon from '@mui/icons-material/Storm';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <div>
             
        {/* <!-- Nav --> */}
    <div class="header-wrapper">
        <div class="header-logo" >
            <a href="./home.html" class="nav-logo-link">
        
                <StormIcon className='cta'/>
            <h1 class="header-logo-text">Windy's</h1>
        </a>
        </div>
    
     
        
           {/* <!-- Menu --> */}

       <div class=" menu-mobile">
        <NavLink to="">
       <MenuIcon/>
          </NavLink>
        </div>

            <div class="header-options">
                
                   <NavLink to="/login">
                <button class="header-login btn btn-outline">
                    Login
                </button>
                </NavLink>
               
            <div class="header-icon">
                {/* <!-- img --> */}

                <div class="badge-wrapper">
                    {/* <!-- Profile --> */}
                    <NavLink to="/profile">
                       
                    <img src={ProfileImg} alt="profile" class=" style-prefix-2jfr04 efaomd31" loading="lazy" width="26" height="26"/>
                    </NavLink>
                    <span class=" badge-top-right ">!</span>
                    
                    </div> 
      
            </div>
            <div class="header-icon">
           
          
                <div class="badge-wrapper">
                    {/* <!-- Cart --> */}
                  <NavLink to="/cart">
                    <img src={CartIcon} alt="cart" class="" loading="lazy" width="24" height="22.01834862385321"/>
                    </NavLink>
                    <span class=" badge-top-right">1</span>
                    
                    </div>
           
            </div>
        </div>
    </div>

    </div>
  )
}

export default Navbar