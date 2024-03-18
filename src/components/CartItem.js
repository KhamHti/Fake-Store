import React from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

const CartItem = ({ item }) => {
  const { id, price, amount, category, description, image, rating, title } =
    item;
  // console.log(item, "item");

  return (
    <div className="flex">
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
              onClick={() => console.log("on press delete icon")}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-grey-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex bg-pink-200 gap-x-2 h-[36px]">
            {/* qty */}
            <div
              className="flex flex-1 max-w-[100px] bg-blue-400 
            items-center h-full border text-primary"
            >
              <div className="flex-1">
                <IoMdRemove />
              </div>
              <div>{amount}</div>
              <div>
                <IoMdAdd />
              </div>
            </div>
            <div>$ {price}</div>
            <div>$ {amount * price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
