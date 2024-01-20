import React, { useContext, useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";
import { Cart } from "../Context";

faker.seed(100);

const Home = () => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.imageUrl(),
  }));

  const [products] = useState(productArray);

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((prod) => (
          <SingleProduct prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default Home;
