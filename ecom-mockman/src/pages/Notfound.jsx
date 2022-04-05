import React from 'react'
import "./Notfound.css"
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import notFoundImg from "../images/not-found.svg"
function Notfound() {
  return (
    <div>
        <Navbar/>
        <h1 class="notfound-text">Sorry, the page you are looking for is unavailable.</h1>
        <img src={notFoundImg} alt="404" class="notfound-banner" loading="eager"/>
        <Footer/>
    </div>
  )
}

export default Notfound