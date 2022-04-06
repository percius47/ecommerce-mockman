const getSortedProducts = ( products,sortBy) => {
    if (sortBy === "HIGH_TO_LOW") {
      return [...products].sort(
        (item1, item2) => item2.price - item1.price
      );
    }
    if (sortBy === "LOW_TO_HIGH") {
      return [...products].sort(
        (item1, item2) => item1.price - item2.price
      );
    }
  
    return products;
  };
  
  export { getSortedProducts };