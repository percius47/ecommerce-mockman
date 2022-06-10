const getTotalPrice = (cart, price,  deliveryCharges) => {
  return cart.reduce((total) => {
    return (total += price + deliveryCharges-Number(50));
  }, 0);
};

export { getTotalPrice };
