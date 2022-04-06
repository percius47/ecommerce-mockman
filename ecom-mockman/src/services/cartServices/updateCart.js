import axios from "axios";

const updateCart = (id, token, type) => {
  return axios.post(
    `/api/user/cart/${id}`,
    { action: { type } },
    { headers: { authorization: token } }
  );
};

export { updateCart };
