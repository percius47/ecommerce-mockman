import "./AddressList.css";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { AddressModal } from "./AddressModal";
import { useAddress } from "../contexts/address-context";

const AddressList = () => {
  const {
    addressState: { addresses },
    dispatchAddress,
    deleteAddressHandler,
  } = useAddress();

  const [showAddrModal, setShowAddrModal] = useState(false);

  const editAddress = (data) => {
    setShowAddrModal(true);
    dispatchAddress({ type: "EDIT_INPUT", payload: { data } });
  };
console.log("address modal",showAddrModal);
  return (
 
    <div className="address-container">
      <button
        className="add-btn add-address"
        onClick={() => {
          console.log("add address clicked");
          setShowAddrModal(true);}}
      >
    <AddIcon/>   Add address
      </button>

      <div className="address-list">
        {console.log("addr",addresses)}
        
        {addresses.length ? (
          addresses.map((address) => (
           
            <div key={address._id} className="address">
              <p className="name">{address.name}</p>
              <p>{address.street},</p>
              <p>
                {address.city} - {address.zipcode}
              </p>
              <p>
                {address.state}, {address.country}
              </p>
              <p>{address.mobile}</p>

              <div className="address-action">
                <button
                  className="btn-outline btn-primary"
                  onClick={() => editAddress(address)}
                >
                  Edit
                </button>
                <button
                  className="btn-outline btn-secondary"
                  onClick={() => deleteAddressHandler(address._id)}
                >
                  Delete
                </button>
              </div>

             
            </div>
           
          
            
          ))
        ) : (
          <p>No address found.</p>
        )}  
           {showAddrModal ? (
              <div className="address-modal">
                <AddressModal setShowAddrModal={setShowAddrModal} />
              </div>
            ) : null}
      </div>
    </div>
 
  );
};

export { AddressList };
