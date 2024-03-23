import React, { useContext, useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Me from "../img/me.png";
import RN from "../img/images.png";
import Luffy from "../img/luffy.png";
import Logo from "../img/logo.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // window listener

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${isActive ? "bg-white py-3 shadow-md" : "bg-none py-5"} 
    fixed w-full transition-all z-10`}
    >
      <div
        className="flex container h-full items-center
       justify-between mx-auto"
      >
        <Link to={"/"}>
          <div>
            <img src={Me} alt="" className="w-[40px]"></img>
          </div>
        </Link>
        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div
            className="bg-red-500 absolute -right-2 
        -bottom-2 text-[12px] w-[18px] h-[18px]
         text-white rounded-full flex justify-center 
         items-center"
          >
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
