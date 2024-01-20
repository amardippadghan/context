import React, { useContext } from "react";
import { Cart } from "../Context";

const SingleProduct = ({ prod }) => {
  const { cart, setcart } = useContext(Cart);

  return (
    <div className="max-w-xs mx-auto my-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover object-center"
          src={prod.image}
          alt={prod.name}
        />
        <div className="p-4">
          <h4 className="text-xl font-semibold mb-2">{prod.name}</h4>
          <p className="text-gray-700 mb-2">
            Price: ${prod.price.substring(0, 5)}
          </p>
          <div className="flex justify-center mt-4">
            {cart.includes(prod) ? (
              <button
                onClick={() => {
                  setcart(cart.filter((c) => c.id !== prod.id));
                }}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Remove From Cart
              </button>
            ) : (
              <button
                onClick={() => {
                  setcart([...cart, prod]);
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
