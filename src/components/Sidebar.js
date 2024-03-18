import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl 
      md:w-[35vw] 
        xl:max-w-[30vw] transition-all duration-300 z-20 
        px-4 lg:px-[35px]`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="font-semibold text-sm uppercase">Shopping Bag (0)</div>
        <div
          onClick={handleClose}
          className="w-8 h-8 cursor-pointer 
          flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>

      {/*  sidebar bottom */}
      <div
        className="flex bg-pink-200 flex-col gap-y-3 
      py-3 mt-4"
      >
        <div
          className="flex w-full 
        justify-between items-center"
        >
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-5">Total:</span>$ 1000
          </div>
          {/* clear cart icon */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-rose-500 w-12 h-12 
            flex justify-center items-center text-xl text-white"
          >
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
