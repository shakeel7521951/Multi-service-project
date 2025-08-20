import React from "react";
import { CiBookmark } from "react-icons/ci";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <div >
      <div className="mt-10 ">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl">CSS Tutorial</h1>
          <div>
            <CiBookmark className="text-4xl text-green-400 " />
          </div>
        </div>
        <div className="flex  justify-between">
          <div className="flex px-3 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Home
          </div>

        </div>
      </div>

      <div className="px-5 bg-[#D9EEE1] mt-5 w- py-10">
        <h1 className="text-2xl">Learn CSS</h1>
        <ul className="flex flex-col gap-3 my-5">
          <li>CSS is the language we use to style an HTML document.</li>
          <li>CSS is the language we use to style an HTML document.</li>
          <li>CSS is the language we use to style an HTML document.</li>
        </ul>
        <div className="flex px-5 w-xs cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
          Start Learning CSS Now
          <MdOutlineKeyboardArrowRight className="text-3xl" />
        </div>
      </div>
      <hr className="text-gray-400 my-4" />
    </div>
  );
};

export default Hero;
