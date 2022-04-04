import React from 'react';
import vegIcon from "../images/veg.png";
import nonvegIcon from "../images/nonveg.png";
import StarIcon from '@mui/icons-material/Star';
function ProductCard({product}) {
    const{
            _id,
            title,
            Cal,
            nutrition,
            veg,
            rating,bestseller,image,price,categoryName
    }=product;
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
    
        <h6 class="card-subtitle"> {Cal} Cal | {nutrition}</h6>
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
      <div class="card-btn ">

        <button className='add-product'>ADD</button>                  
      </div>
    </div>
  </div></div>
  )
}

export default ProductCard