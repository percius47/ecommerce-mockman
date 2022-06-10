import "./Checkout.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";



import { OrderDetails } from "./OrderDetails";
import { AddressModal } from "../../Components/AddressModal"
import { useCart } from "../../contexts/cart-context";
import { useAddress } from "../../contexts/address-context";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer"
import AddIcon from '@mui/icons-material/Add';
export const Checkout = () => {
  const {
    addressState: { addresses, selectedAddrId },
    dispatchAddress,
  } = useAddress();
  const { cartState } = useCart();

  const [showAddrModal, setShowAddrModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (cartState.length === 0) {
      navigate("/products");
    }
  }, [cartState]);

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="main-section checkout-container">
        <div className="heading-3">Checkout</div>

        <div className="checkout-wrapper">
          <div className="checkout-address">
            <div className="address-title title">Select Address</div>

            <div className="address-list">
              {addresses.length ? (
                addresses.map((address) => (
                  <label className="address" key={address._id}>
                    <input
                      type="radio"
                      name="address"
                      checked={selectedAddrId === address._id}
                      onChange={() =>
                        dispatchAddress({
                          type: "SET_ADDRESS_ID",
                          payload: address._id,
                        })
                      }
                    />

                    <div>
                      <div className="address-name">{address.name}</div>
                      <div>{address.street},</div>
                      <div>
                        {address.city} - {address.zipcode}
                      </div>
                      <div>
                        {address.state}, {address.country}
                      </div>
                      <div>{address.mobile}</div>
                    </div>
                  </label>
                ))
              ) : (
               
                  <p>No address available.</p>
               
              )}
            </div>

            <button
              className="btn  add-address"
              onClick={() => setShowAddrModal(true)}
            >
              <AddIcon/>Add address
            </button>
          </div>

          <OrderDetails />
        </div>

        {showAddrModal ? (
          <div className="address-modal">
            <AddressModal setShowAddrModal={setShowAddrModal} />
          </div>
        ) : null}
      </section>

<Footer/>
    </div>
  );
};
