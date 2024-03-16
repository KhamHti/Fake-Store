import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  const { products } = useContext(ProductContext);
  // console.log(products);
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  console.log(filteredProducts);

  return (
    <div className="">
      <section className="py-8">
        <div className="container ms-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {filteredProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className="mb-4 w-full bg-pink-200 h-[300px] mx-5"
                >
                  {product.title}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
