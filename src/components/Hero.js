import React from "react";
import WomanImg from "../img/woman_hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="bg-red-200 h-[800px] bg-hero
      bg-no-repeat bg-cover bg-center py-24"
    >
      <div
        className="container mx-auto flex
      h-full justify-around"
      >
        {/* text */}
        <div className="flex flex-col justify-center">
          <div
            className="font-semibold uppercase flex
            items-center"
          >
            <div
              className="bg-red-500 mr-3 h-[2px] 
              w-10"
            ></div>
            New Trend
          </div>
          <h1
            className="text-[70px] leading-[1.1]
            font-light mb-4"
          >
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">WOMEN</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase
            font-semibold border-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>
        {/* img */}
        <div className="lg:block hidden">
          <div>
            <img src={WomanImg} alt="Woman" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
