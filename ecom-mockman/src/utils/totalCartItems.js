const cartTotalProducts=(cart)=>{
return cart.reduce((count,item)=>{
    return (count+=Number(item.qty));
},0);
};
export {cartTotalProducts};