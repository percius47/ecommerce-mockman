


const initialProducts = {
  products: [], 
  category: "",
  sortBy: null,
  rating: null,
  priceRange: 250,
 
};



const productReducer = (state, { type, payload }) => {
  switch (type) {
    case "DISPLAY_PRODUCTS":
      return { ...state, products: payload.data };
    
   
    case "CLEAR_FILTERS":
      return {
        ...initialProducts,
        products: payload.data,
      };
    default:
      return state;
  }
};

export { productReducer, initialProducts };
