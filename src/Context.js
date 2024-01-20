import React, { createContext } from "react";

export const Cart = createContext();

const Context = ({ children }) => {
  const [cart , setcart] = React.useState([]);
  return <Cart.Provider
   value={{cart , setcart}}
  >{children}</Cart.Provider>;
};

export default Context;
