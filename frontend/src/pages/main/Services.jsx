import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const ServiceArray = [
  {
    id: 1,
    name: "Free Tutorial",
    desc: "Enjoy our free tutorials like millions of otherinternet users since 1999",
  },
  {
    id: 2,
    name: "References",
    desc: "Explore our selection of references covering all popular  coding languages",
  },
  {
    id: 3,
    name: "Create a Website",
    desc: "Create your Website with W3School Spaces -no setup requried",
  },
  {
    id: 4,
    name: "Exercises",
    desc: "Test your skills with different exercises",
  },
  {
    id: 5,
    name: "Quizzes",
    desc: "Test yourself with multiple choice questions",
  },
  { id: 6, name: "Get Certified", desc: "Document your knowledge" },
  {
    id: 7,
    name: "Log in / Sign Up",
    desc: "W3Schools Account to Improve Your Learning Experience",
  },
  {
    id: 8,
    name: "My Learning",
    desc: "Track your learning progress at W3Schools and collect rewards",
  },
  {
    id: 9,
    name: "Upgrade",
    desc: "Become a PLUS user and unlock powerful features (ad-free, hosting, support,..)",
  },
  {
    id: 10,
    name: "Where To Start",
    desc: "Not sure where you want to start? Follow our guided path",
  },
  {
    id: 11,
    name: "Code Editor (Try it)",
    desc: "With our online code editor, you can edit code and view  the result in your browser",
  },
  {
    id: 12,
    name: "Videos",
    desc: "Learn the basics of HTML in a fun and engaging video tutorial",
  },
  {
    id: 13,
    name: "Templates",
    desc: "We have created a bunch of responsive website templates  you can use - for free!",
  },
  {
    id: 14,
    name: "Web Hosting",
    desc: "Host your own website, and share it to the world with",
  },
];

const Services = () => {

    const [SearchTerm, setSearchTerm] = useState("")

    const filteredData = ServiceArray.filter(item=> item.name.toLocaleLowerCase().includes(SearchTerm.toLocaleLowerCase()));
  return (
    <div className="relative bg-gray-700 min-h-screen">
      <div className=" w-[80vw] mx-auto px-2 py-10 mt-3 ">
        <Link to="/"><RxCross2 className="absolute text-white right-4 top-3 text-4xl cursor-pointer" /></Link>
        {/* Hero  */}
        <div>
          <div className="max-w-xl  flex flex-col sm:flex-row gap-3 items-center justify-between">
            <h1 className="text-3xl font-bold mr-10 whitespace-nowrap sm:whitespace-none text-yellow-400">All Our Servies</h1>{" "}
            <div className="flex items-center  border-2 hover:border-green-500 cursor-pointer px-3 mt-5 sm:mt-0 rounded-full focus:border-green-500 py-1  ">
              <input
                type="text"
                placeholder="Filter..."
                value={SearchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                className="  rounded-full text-white focus:outline-none p-2 text-lg"
              />
              <IoSearchOutline className="text-2xl text-white" />
            </div>
          </div>
          <div className="mt-5">
            <p className="max-w-2xl text-white text-lg font-semibold">
              W3Schools offers a wide range of services and products for
              beginners and professionals, helping millions of people everyday
              to learn and master new skills.
            </p>
          </div>
        </div>
        {/* Hero End  */}
        {/* <!-- ========== Start Services Card  ========== --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 py-5 gap-3">
          {filteredData.map((item) => (
            <Link key={item.id} to="/">
              <div className="px-3 py-8  transition duration-200  border bg-gray-500 text-white hover:bg-black cursor-pointer rounded-lg">
                <h1 className="text-xl font-semibold text-yellow-300">
                  {item.name}
                </h1>
                <p className="max-w-xs mt-3">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        {/* <!-- ========== End Services Card  ========== --> */}

        {/* <!-- ========== Start Social Link  ========== --> */}

        <div className="flex gap-4 mt-10">
          <Link to="/">
            <div className="p-3 bg-blue-500 rounded-full text-white cursor-pointer hover:bg-blue-400">
              <FaFacebookF className="text-2xl" />
            </div>
          </Link>
          <Link to="/">
            <div className="p-3 bg-green-500 rounded-full text-white cursor-pointer hover:bg-green-400">
              <FaWhatsapp className="text-2xl" />
            </div>
          </Link>
          <Link to="/">
            {" "}
            <div className="p-3 bg-blue-500 rounded-full text-white cursor-pointer hover:bg-blue-400">
              <FaLinkedinIn className="text-2xl" />
            </div>
          </Link>
          <Link to="/">
            {" "}
            <div className="p-3 bg-red-500 rounded-full text-white cursor-pointer hover:bg-red-400">
              <FaYoutube className="text-2xl" />
            </div>
          </Link>
        </div>
        {/* <!-- ========== End Social Link  ========== --> */}
      </div>
    </div>
  );
};

export default Services;
