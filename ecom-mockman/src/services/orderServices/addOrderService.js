import axios from "axios";

const addOrderService = (order, token) => {
  console.log("order add",order);
  return axios.post(
    "/api/user/order",
    { order },
    { headers: { authorization: token } }
  );
};

export { addOrderService };
