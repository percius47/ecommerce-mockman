const getNutritionProducts = ( products,nutrition) => {
  
    if (nutrition.length > 0) {
      return [...products].filter((product) =>
        nutrition.includes(product.nutrition) ? product : null
      );
    }
    return products;
  };
  
  export { getNutritionProducts };
  