import React from 'react'
import "./Home.css";
import Navbar from "../../Components/Navbar"
import {NavLink} from "react-router-dom"
import StormIcon from '@mui/icons-material/Storm';
import HomeBanner from "../../images/home-banner.jpg"
import Food1 from "../../images/home-thali-1.jpg"
import Food2 from "../../images/home-thali-2.jpg"
import Footer from '../../Components/Footer';

function Home() {
  return (
    <div>
  <Navbar/>

  

    {/* <!-- Hero-banner --> */}
    <div class="home-banner">
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

<Footer/>
    </div>
  )
}

export default Home