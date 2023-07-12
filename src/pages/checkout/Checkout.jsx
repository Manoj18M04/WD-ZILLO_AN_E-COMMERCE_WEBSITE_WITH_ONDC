import React from 'react';
import { ShopContext } from "../../context/shop-context";

const Checkout = () => {
  const { getTotalCartAmount } = useContext(ShopContext);
  const totalAmount=getTotalCartAmount();
  return (
    <div>
      
    </div>
  )
}

export default Checkout
