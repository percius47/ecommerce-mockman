import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";


import {
  addressReducer,
  initialState,
  initialUserObj,
} from "../reducers/addressReducer";
import {addAddressService} from "../services/addressServices/addAddressService"
import { editAddressService } from "../services/addressServices/editAddress";
import { getAddressService } from "../services/addressServices/getAddressService";
import {deleteAddressService} from "../services/addressServices/deleteAddressService"
import { useAuth } from "./auth-context";


const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [addressState, dispatchAddress] = useReducer(
    addressReducer,
    initialState
  );

  const { token, isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      try {
        (async () => {
          const { data, status } = await getAddressService(token);

          if (status === 200) {
            dispatchAddress({ type: "GET_ADDRESS", payload: data.address });
          }
        })();
      } catch (err) {
        console.error(err);
      }
    }
  }, [token]);

  const submitFormHandler = async (e) => {
    e.preventDefault();

    const addressExists = addressState.addresses.find(
      (address) => address._id === addressState.formData?._id
    );

    if (addressExists) {
      try {
        const { data, status } = await editAddressService(
          token,
          addressState.formData,
          addressExists._id
        );

        if (status === 201) {
          dispatchAddress({ type: "GET_ADDRESS", payload: data.address });
          toast.success("Address updated");
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        const { data, status } = await addAddressService(
          token,
          addressState.formData
        );

        if (status === 201) {
          dispatchAddress({ type: "GET_ADDRESS", payload: data.address });
          toast.success("Address added");
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  const deleteAddressHandler = async (addressId) => {
    try {
      const { data, status } = await deleteAddressService(token, addressId);

      if (status === 200) {
        dispatchAddress({ type: "GET_ADDRESS", payload: data.address });
        toast.success("Address deleted");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AddressContext.Provider
      value={{
        addressState,
        dispatchAddress,
        submitFormHandler,
        deleteAddressHandler,
        initialState,
        initialUserObj,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);

export { AddressProvider, useAddress };
