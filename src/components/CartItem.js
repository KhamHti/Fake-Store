import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { id, price, amount, category, description, image, rating, title } =
    item;
  // console.log(item, "item");

  const { addToCart, removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  return (
    <div
      className="flex gap-x-4 py-2 lg:px-6 border-b 
    border-grey-200 w-full font-light text-grey-500"
    >
      <div
        className="w-full min-h-[150px] flex items-center 
      gap-x-4"
      >
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="flex w-full flex-col">
          {/* title & remove icon */}
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium text-primary 
            hover:underline max-w-[240px]"
            >
              {title}
            </Link>

            {/* remove icon */}
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-grey-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px]">
            {/* qty */}
            <div
              className="flex flex-1 max-w-[100px] items-center 
              h-full border text-primary font-medium"
            >
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 h-full flex justify-center 
                items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              <div
                className="flex h-full justify-center 
              items-center px-2"
              >
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center 
                items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around">
              $ {price}
            </div>
            <div
              className="flex-1 flex justify-end 
              items-center text-primary font-medium"
            >
              {`$ ${parseFloat(amount * price)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
