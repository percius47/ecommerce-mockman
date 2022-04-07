import React from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import { Helmet } from 'react-helmet'
import notFoundImg from "../../images/not-found.svg"
function Signout() {
  return (
    <div>
         <Helmet>
                <title>Logged Out</title>
            </Helmet>
        <Navbar/>
        <h1 class="notfound-text">You have been Successfully logged out.</h1>
        <img src={notFoundImg} alt="404" class="notfound-banner" loading="eager"/>
        <Footer/>
    </div>
  )
}

export default Signout