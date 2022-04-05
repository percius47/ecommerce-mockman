


const initialProducts = {
  products: [], 
  category: [],
  nutrition:[],
  sortBy: false,
  rating: null,
  calorieRange: 500,
 
};

 

const productReducer = (state, { type, payload }) => {
  switch (type) {
    case "DISPLAY_PRODUCTS":
      return { ...state, products: payload.data };
      case "NUTRITION":
      if (state.nutrition.includes(payload.value))
      return {
        ...state,
        nutrition: [...state.nutrition].filter((nutrition) => nutrition !== payload.value),
      };
    return { ...state, nutrition: [...state.nutrition, payload.value] };
    case "CATEGORY":
      if (state.category.includes(payload.value))
      return {
        ...state,
        category: [...state.category].filter((category) => category !== payload.value),
      };
    return { ...state, category: [...state.category, payload.value] };
    case "SORT":
      return{...state,sortBy: payload.value}
      case "CALORIE_RANGE":
        return{...state,calorieRange:payload.value}
    case "CLEAR":
      return {
        ...initialProducts,
        products: payload.data,
      };
    default:
      return state;
  }
};

export { productReducer, initialProducts };
