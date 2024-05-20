import React from "react";
import Retro from "../assets/image-retro-pcs.jpg";
import Laptop from "../assets/image-top-laptops.jpg";
import Gaming from "../assets/image-gaming-growth.jpg";

const Testimonails = () => {
  return (
    // max-w-7xl will  xl:max-w-7xl md:max-w-5xl px-2 apply a maximum width to the element on larger screens
    <div className=" flex items-center justify-between mt-10 mb-12 mx-auto   text-left cursor-pointer md:ml-[7vw]   xl:ml-[10vw]   ">
      {/* Testimonials Container */}
      <div className="flex flex-col  md:flex-row md:space-x-6">
        {/* Retro */}
        <div className=" flex  items-center p-2   md:w-1/3">
          <img src={Retro} alt="Retro img" className="w-28" />
          <div className="flex flex-col ml-4  mb-14">
            <h5 className="text-2xl  font-bold text-grayish-blue">01</h5>
            <h3 className="text-lg font-bold hover:text-soft-red">
              Reviving Retro PCs
            </h3>
            <p className="text-xs text-gray-500 ">
              What happens when old PCs are giving modern upgrades?
            </p>
          </div>
        </div>
        {/* Laptop */}
        <div className=" flex  items-center p-2  md:w-1/3">
          <img src={Laptop} alt="Laptop img" className="w-28" />
          <div className="flex flex-col ml-4  mb-14">
            <h5 className="text-2xl font-bold text-grayish-blue">02</h5>
            <h3 className="text-lg font-bold hover:text-soft-red">
              Top 10 Laptops of 2022
            </h3>
            <p className="text-xs text-gray-500 ">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        {/* Gaming */}
        <div className=" flex  items-center p-2   md:w-1/3">
          <img src={Gaming} alt="Gaming img" className="w-28 " />
          <div className="flex flex-col ml-4 mb-14">
            <h5 className="text-2xl font-bold text-grayish-blue">03</h5>
            <h3 className="text-lg font-bold hover:text-soft-red">
              The Growth of Gaming
            </h3>
            <p className="text-xs text-gray-500 ">
              How the pandemic has sparked fresh opportunties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonails;
