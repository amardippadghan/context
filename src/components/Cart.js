import React, { useState, useContext, useEffect } from "react";
import SingleProduct from "./SingleProduct";
import { Cart } from "../Context";

const CartPage = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useContext(Cart);

  useEffect(() => {
    
    setTotal(cart.reduce((acc, cur) => acc + Number(cur.price), 0));
  }, [cart]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">My Cart</h1>
      <div className="mb-4">
        <span className="text-xl">Total: ${total.toFixed(2)}</span>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} inCartView />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
