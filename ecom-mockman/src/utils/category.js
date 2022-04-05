const getCategoryProducts = ( products,category) => {
  
    if (category.length > 0) {
      return [...products].filter((product) =>
        category.includes(product.category) ? product : null
      );
    }
    return products;
  };
  
  export { getCategoryProducts };
  