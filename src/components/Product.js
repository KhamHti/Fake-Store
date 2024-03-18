import React, { useContext } from "react";
import { BsPlus, BsEyeFill, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { category, id, image, title, description, rating, price } = product;
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <div
        className="border border-[#e4e4e4] h-[300px] mb-4 relative 
        overflow-hidden group transition"
      >
        <div className="w-full h-full flex justify-center items-center">
          {/* img */}
          <div className="justify-center w-[200px] mx-auto flex items-center">
            <img
              className="max-h-[160px] 
              group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        {/* buttons */}
        <div
          className="absolute top-6 -right-11 group-hover:right-5 p-2 flex 
          flex-col opacity-0 gap-y-2 justify-center items-center group-hover:opacity-100 transition-all duration-300"
        >
          <button onClick={() => addToCart(id, product)}>
            <div
              className="flex justify-center items-center w-12 
              h-12 text-white bg-red-500"
            >
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="flex w-12 h-12 bg-white justify-center 
            items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* some deatils such as price , title */}
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold mb-1">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
