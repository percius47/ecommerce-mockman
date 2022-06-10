import React from 'react'
import { useAuth } from '../contexts/auth-context';
import { useCart } from '../contexts/cart-context';
import { getPrice } from '../utils/cartPrice';
import { getTotalPrice } from '../utils/getTotalPrice';

export default function CartBill() {
    
        const { cartState } = useCart();
 const {navigate}=useAuth();
        const cartPrice = {
          deliveryCharges: 49, 
          price: getPrice(cartState),
        
        };
      
        const totalPrice = getTotalPrice(
          cartState,
          cartPrice.price,
     
         cartPrice.deliveryCharges
        );
      
  
  
  return (
    <div>
           <div class="cart-total">
            <p class="bill-header">Cart Total</p>
            {cartState.map(({qty,price,title})=>{
                return(
            <div class="bill-slab">
            <span class="cart-item-name">{title} x{qty}</span> 
            <span class="bill-item-price">₹ {Number(price*qty)}.00</span>
            </div>)
            })}
           
           
            <div class="bill-slab">
                <span class="cart-item-name">Delivery Charges</span>
                <span class="bill-item-price">₹ 49.00</span>
            </div>
       
            <div class="bill-slab">
                <span class="cart-item-name">Discount</span>
                <span class="bill-item-price">-₹ 50
                    <span class="coupon-name">(WINDY500)</span>
                </span>
              
            </div>
          
            <div class="bill-slab bill-total">
                <span class="cart-item-name">Grand Total</span>
                <span class="bill-item-price">₹ {totalPrice}.00</span>
            </div>
           
         
                <button class="order-btn"  onClick={() => navigate("/checkout")}>Checkout</button>
     
              
        </div>
    </div>
  )
}

