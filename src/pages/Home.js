import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <div className="">
      <h1>Welcome to Our Homepage</h1>
      {products.length > 0 ? (
        <div className="flex justify-center m-10">
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
            ))}
        </ul>
            </div>
      ) : (
        <p>Products are loading...</p>
      )}
    </div>
  );
};

export default Home;
