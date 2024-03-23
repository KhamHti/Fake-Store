import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id == parseInt(id);
  });

  const { description, image, price, rating, title } = product;
  // console.log("===>", product);
  if (!product) {
    return (
      <section className="flex h-screen justify-center items-center">
        Loading...
      </section>
    );
  }
  return (
    <section
      className="flex items-center h-screen 
      pt-32 pb-12 lg:py-32"
    >
      <div className="container mx-auto">
        <div
          className="flex flex-col 
          items-center lg:flex-row"
        >
          <div
            className="flex flex-1 justify-center 
            items-center mb-8 lg:mb-0v"
          >
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={image}
              alt={title}
            />
          </div>
          <div
            className="text-center 
            lg:text-left flex-1"
          >
            <h1
              className="text-[26px] 
              font-medium max-w-[450px] mx-auto"
            >
              {title}
            </h1>
            <div
              className="text-xl text-red-500 
              font-medium mb-6"
            >
              $ {price}
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-primary 
              py-4 px-8 text-white"
            >
              {console.log(product.id, id)}
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
