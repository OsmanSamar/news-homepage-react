import React from "react";
import IllustrationIntro from "../assets/webdesktop.jpg";
import IllustrationIntroMob from "../assets/webmobile.jpg";

const Hero = () => {
  return (
    <div
      className="container flex flex-col
      items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0  md:flex-row"
    >
      {/* Left Side */}
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
        <img
          src={IllustrationIntro}
          alt="Desktop Illustration"
          className="hidden sm:block"
        />
        <img
          src={IllustrationIntroMob}
          alt="Mobile Illustration"
          className="block sm:hidden"
        />

        <div className="flex flex-col md:text-left md:flex-row">
          <h1
            className="max-w-md text-4xl font-bold text-left
               md:text-5xl "
          >
            The Bright Future of Web 3.0?
          </h1>
          <div className="mt-4 md:flex md:flex-col md:items-start md:mt-0">
            <p className="max-w-sm text-left text-gray-500 mb-6 ">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>

            <button
              className="p-2 px-6  text-white bg-soft-red
                rounded-none self-baseline hover:bg-very-dark-blue tracking-[.15em]  "
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="  md:w-1/2  ">
        <div
          className=" flex flex-col items-center justify-center h-[366px]  w-[350px] 
         bg-very-dark-blue px-6 mx-auto  md:mt-[-17rem]   md:w-[270px] "
        >
          <div className="mb-80 cursor-pointer">
            <h1
              className="text-soft-orange text-2xl font-bold text-left mt-[18rem]
               md:text-3xl "
            >
              New
            </h1>
            <h2 className="text-off-white hover:text-soft-orange mb-2">
              Hydrogen VS Electric Cars
            </h2>
            <p className="text-off-white text-xs text-left  mb-2 ">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>

            <div className="flex items-center justify-center mt-4 mb-4 px-1 flex-1 border-b-2 border-slate-800"></div>

            {/*  */}
            <h2 className="text-off-white hover:text-soft-orange mb-2">
              The Downside of AI Artistry
            </h2>
            <p className="text-off-white text-xs text-left  mb-2 ">
              What are the possible adverse effect of on-demand AI image
              generation?
            </p>

            <div className="flex items-center justify-center mt-4 mb-4 px-1 flex-1 border-b-2 border-slate-800"></div>
            {/*  */}
            <h2 className="text-off-white hover:text-soft-orange mb-2">
              Is VC Funding Drying Up?
            </h2>
            <p className="text-off-white text-xs text-left  mb-2 ">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
