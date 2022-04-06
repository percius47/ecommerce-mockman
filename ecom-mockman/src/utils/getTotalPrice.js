const getTotalPrice = (cart, price) => {
    return cart.reduce((total) => {
      return (total += price);
    }, 0);
  };
  
  export { getTotalPrice };