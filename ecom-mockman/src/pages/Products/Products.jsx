import React, { useEffect } from 'react'

import "./Products.css"
import Navbar from '../../Components/Navbar'
import ProductBanner from "../../images/banner-2.jpeg"


import ProductCategory from '../../Components/ProductCategory';

import { useProducts } from '../../contexts/product-context';
import ProductCard from '../../Components/ProductCard';
function Products() {
  const { productState, toggleFilter, showFilter, loading } = useProducts();

  const { 
    products,
    brand,
    category,
    sortBy,
    rating,
    inStock,
    fastDelivery,
    priceRange,
  } = productState;



  return (
    <div>
        <Navbar/>
        {/* <!-- Sub nav --> */}
    <div class="subnav-parent">
    <div class="subnav">
        <span class="submenu-item">
            Breakfast
        </span>
        <span class="submenu-item">
            Lunch
        </span>
        <span class="submenu-item">
            Snacks
        </span>
        <span class="submenu-item">
            Dinner
        </span>
    </div>
</div>

    {/* <!-- Hero-banner --> */}
    <div class="hero-banner">
        <img src={ProductBanner} alt="" class="banner-img" loading="eager"/>
    </div>
<div class="home-content">
  {/* Categories */}
    <ProductCategory/>

    {/* Products listing grid */}
    <div class="home-product">
     
    
        <h2 class="product-h2">Showing {products.length} of {products.length} products.</h2>
   
        <div class="product-list">
            {/* <!-- Cards --> */}
           
              {products.map((item)=>{
                return <ProductCard product={item}/>
              })}
            
        </div>

    </div>
</div>
 <div class="home-footer">
     <p class="footer-text">
         Made with &lt;Wind-UI/&gt;.
     </p>
 </div>
    </div>
   
  )
}

export default Products