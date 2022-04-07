import React, { useEffect } from 'react'

import "./Products.css"
import Navbar from '../../Components/Navbar'
import ProductBanner from "../../images/banner-2.jpeg"


import ProductCategory from '../../Components/ProductCategory';
import { Helmet } from 'react-helmet';
import { useProducts } from '../../contexts/product-context';
import ProductCard from '../../Components/ProductCard';
import { getSortedProducts } from '../../utils/sorting';
import { getCategoryProducts } from '../../utils/category';
import { getNutritionProducts } from '../../utils/nutrition';
import { getRangeProducts } from '../../utils/range';
function Products() {
  const { productState, toggleFilter, showFilter, loading } = useProducts();

  const { 
    products,
    nutrition,
    category,
    sortBy,
    rating,
    inStock,
    fastDelivery,
    calorieRange,
  } = productState;


const sortedProducts=getSortedProducts(products,sortBy);
const categoryProducts=getCategoryProducts(sortedProducts,category);
const NutritionProducts=getNutritionProducts(categoryProducts,nutrition)
const RangeProducts=getRangeProducts(NutritionProducts,calorieRange);


  return (
    <div>
       <Helmet>
    <title>Foods</title>
</Helmet>
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
     
    {RangeProducts.length>0?
       (<>
            <h2 class="product-h2">Showing {RangeProducts.length} of {products.length} products.</h2>
   
        <div class="product-list">
         
           
              {RangeProducts.map((item)=>{
                return <ProductCard product={item}/>
              })}
            
        </div>
        </>
        ):
        (<h2 class="product-h2">Do not worry, we are shortly releasing a wider range of lip smacking and healthy food.</h2>)}

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