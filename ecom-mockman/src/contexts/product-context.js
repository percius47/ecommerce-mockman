import { createContext, useContext, useEffect, useReducer, useState } from "react";

import { initialProducts, productReducer } from "../reducers/ProductReducer";
import { getProducts } from "../services/getProducts";

const ProductContext=createContext();
const ProductProvider=({children})=>{
    const [productState, productDispatch] = useReducer(
        productReducer,
        initialProducts
      );
      const [showFilter, setShowFilter] = useState(false);
      const [loading, setLoading] = useState(false);
    
      const toggleFilter = () => {
        setShowFilter((showFilter) => !showFilter);
      }; 
    

      useEffect(() => {
        (async () => {
          try {
            setLoading(true);
            const { data } = await getProducts();
            setLoading(false);
    
         
    
            productDispatch({
              type: "DISPLAY_PRODUCTS",
              payload: { data: data.products },
            });
          } catch (err) {
            setLoading(false);
            console.error(err);
          }
        })();
      }, []);
      return (
        <ProductContext.Provider
          value={{
            productState,
            productDispatch,
         
            toggleFilter,
            showFilter,
            loading,
          }}
        >
          {children}
        </ProductContext.Provider>
      );
}
const useProducts=()=>useContext(ProductContext);
export { ProductProvider, useProducts };