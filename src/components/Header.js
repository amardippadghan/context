import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Context";

const Header = () => {
  const { cart } = useContext(Cart);

  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <Link
        to={"/"}
        className="text-blue-500 hover:text-blue-700 text-lg font-semibold"
      >
        Amardip Shoping App
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link to={"/"} className="text-blue-500 hover:text-blue-700">
            Home
          </Link>
        </li>
        <li className="relative">
          <Link to={"/cart"} className="text-blue-500 hover:text-blue-700">
            Cart
            <br />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-blue-500 text-white rounded-full px-2">
                {cart.length}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
