import axios from "axios";

const fetchCart = (token) => {
  return axios.get("/api/user/cart", {
    headers: { authorization: token },
  });
};

export { fetchCart };
