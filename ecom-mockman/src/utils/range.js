const getRangeProducts=(products,calorieRange)=>{
    return [...products].filter((product)=>Number(product.Cal)<=calorieRange);
};
export {getRangeProducts}