import React from 'react'
import "../pages/Products/Products.css"
function ProductCategory() {
  return (
    <div>
        <div class="home-filter">
        <p class="filter-head">
            Filters
        </p>
        <div class="filter-clear">Clear</div>
        <p class="category-head gr-text">Calories: 0-1000</p>
        <div class="category-parent">
        <input type="range"
            step="250"
            min="0"
            max="1000"
            defaultValue="500" />
    </div>

    <p class="category-head gr-text">Nutrition</p>
        <div class="category-parent">
        <label>
        <input type="checkbox" className='category-check' />Protein
        </label>
        <label>
        <input type="checkbox" className='category-check' />Carbs
        </label>
        <label>
        <input type="checkbox" className='category-check' />Fats
        </label>
    </div>
    <p class="category-head gr-text">Categories</p>
        <div class="category-parent">
        <label>
        <input type="checkbox" className='category-check' />Thali
        </label>
        <label>
        <input type="checkbox" className='category-check' />Khichdi
        </label>
        <label>
        <input type="checkbox" className='category-check' />Pizza
        </label>
    </div>
    <p class="category-head gr-text">Price</p>
        <div class="category-parent">
        <label>
        <input type="checkbox" className='category-check' />High to Low
        </label>
        <label>
        <input type="checkbox" className='category-check' />Low to High
        </label>
    </div>
    

    </div>
    </div>
  )
}

export default ProductCategory