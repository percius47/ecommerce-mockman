import React from 'react'
import "./Home.css";
import ProfileImg from "../../images/Profile-navbar.png"
import CartIcon from "../../images/cart-icon.png"
import StormIcon from '@mui/icons-material/Storm';
import HomeBanner from "../../images/home-banner.jpg"
import Food1 from "../../images/thali-6.jpg"
import Food2 from "../../images/thali-7.jpg"
import {NavLink} from "react-router-dom"
function Home() {
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
        <a href="./product-page.html">
        <span class="material-icons-outlined">
          menu
          </span>
          </a>
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

  

    {/* <!-- Hero-banner --> */}
    <div class="hero-banner">
        <img src={HomeBanner} alt="" class="home-banner-img" loading="eager"/>
      
    <div class="banner-text">
   
         <div class="banner-head">
          <StormIcon className="banner-logo-cta"/>
           
        <h1 class=" banner-logo">Windy's</h1>
         </div>
         <div class="banner-logo-subtext banner-logo">
            <p >Toned food for toned you!</p>
          </div>
          </div>
          </div>

          <div class="home-card-parent">
            <div class="home-card-landscape">
                <NavLink  to="./products" class="link-productpage">
              <div class="card-img-wrapper">
              <img src={Food1} alt=""/>
              </div>
              <h2 class="card-heading">Order Meals Online</h2>
              <p class="card-subheading">Avail the luxury of tongue-tastic meals at your doorstep.</p>
              </NavLink>
            </div>
            <div class="home-card-landscape">
                <NavLink to="./products" class="link-productpage">
              <div class="card-img-wrapper">
                 
              <img src={Food2} alt=""/>
              </div>
              <h2 class="card-heading">Welcome Healthy Snacks</h2>
              <p class="card-subheading">Try the new set of health foods and snacks to keep your diet on track in a healthy fashion.</p>
              </NavLink>
            </div>
          </div>

 <div class="footer">
     <p class="footer-text">
         Made with &lt;Wind-UI/&gt;.
     </p>
 </div>
    </div>
  )
}

export default Home