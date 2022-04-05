import React from 'react'
import { useProducts } from '../contexts/product-context'
import "../pages/Products/Products.css"
function ProductCategory() {
    const {productState,productDispatch}=useProducts();
  return (
    <div>
        <div class="home-filter">
        <p class="filter-head">
            Filters
        </p>
        <div class="filter-clear"       onClick={() =>
             {
                  productDispatch({
                type: "CLEAR",
                payload: { data: productState.products },
              })}
            }>Clear</div>
        <p class="category-head gr-text">Calories: 0-{productState.calorieRange}</p>
        <div class="category-parent">
        <input type="range"
            step="100"
            min="300"
            max="1000"
            defaultValue="400"
            value={productState.calorieRange}
            onChange={(e) =>
              productDispatch({
                type: "CALORIE_RANGE",
                payload: { value: e.target.value },
              })
            } /> 
    </div>

    <p class="category-head gr-text">Nutrition</p>
        <div class="category-parent">
        <label>
        <input type="checkbox" className='category-check'checked={productState.nutrition.includes("Protein")}
                value="Protein"
                onChange={(e) =>
                  productDispatch({
                    type: "NUTRITION",
                    payload: { value: e.target.value },
                  })
                } />Protein
        </label>
        <label>
        <input type="checkbox" className='category-check' checked={productState.nutrition.includes("Carbs")}
                value="Carbs"
                onChange={(e) =>
                  productDispatch({
                    type: "NUTRITION",
                    payload: { value: e.target.value },
                  })
                } />Carbs
        </label>
        <label>
        <input type="checkbox" className='category-check' checked={productState.nutrition.includes("Fats")}
                value="Fats"
                onChange={(e) =>
                  productDispatch({
                    type: "NUTRITION",
                    payload: { value: e.target.value },
                  })
                } />Fats
        </label>
    </div>
    <p class="category-head gr-text">Categories</p>
        <div class="category-parent">
        <label>
        <input type="checkbox" className='category-check'  checked={productState.category.includes("Thali")}
                value="Thali"
                onChange={(e) =>
                  productDispatch({
                    type: "CATEGORY",
                    payload: { value: e.target.value },
                  })
                }/>Thali
        </label>
        <label>
        <input type="checkbox" className='category-check' checked={productState.category.includes("Khichdi")}
                value="Khichdi"
                onChange={(e) =>
                  productDispatch({
                    type: "CATEGORY",
                    payload: { value: e.target.value },
                  })}/>Khichdi
        </label>
        <label>
        <input type="checkbox" className='category-check' checked={productState.category.includes("Pizza")}
                value="Pizza"
                onChange={(e) =>
                  productDispatch({
                    type: "CATEGORY",
                    payload: { value: e.target.value },
                  })}/>Pizza
        </label>
    </div>
    <p class="category-head gr-text">Price</p>
        <div class="category-parent">
        <label>
        <input type="checkbox" className='category-check'       checked={productState.sortBy && productState.sortBy=== "HIGH_TO_LOW"} onChange={() =>
              productDispatch({ type: "SORT", payload: {value:"HIGH_TO_LOW"} })
            }/>High to Low
        </label>
        <label>
        <input type="checkbox" className='category-check'     checked={productState.sortBy && productState.sortBy === "LOW_TO_HIGH"}
        onChange={() =>
              productDispatch({ type: "SORT", payload: {value:"LOW_TO_HIGH" }})
         
            }/>Low to High
        </label>
    </div>
    

    </div>
    </div>
  )
}

export default ProductCategory