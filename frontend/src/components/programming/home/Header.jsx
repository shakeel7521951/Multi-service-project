import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#282A35] text-center py-20 md:py-24 text-white px-4">
     <h1 className="text-3xl md:text-6xl font-extrabold tracking-wide">
        Learn to Code
      </h1>
      <p className="text-[#FFF4A0]  text-2xl mt-5 font-medium">
        With the world's largest web developer site.
      </p>

      {/* Search Box */}
      <div className="flex items-center gap-3 bg-white text-black rounded-full w-[90%] md:w-[40%] lg:w-[30%] mx-auto mt-10 px-5 py-2 shadow-lg border border-gray-200">
        <input
          type="text"
          placeholder="Search our tutorials, e.g. HTML"
          className="flex-1 outline-none p-2 rounded-full text-gray-800 placeholder-gray-500"
        />
        <button className="p-3 bg-[#059862] text-white rounded-full hover:bg-[#04724d] hover:scale-105 transition-transform duration-200 shadow-md">
          <FaSearch size={18} />
        </button>
      </div>

      
      <div className="mt-6">
        <Link
          to="#"
          className="underline hover:text-[#FFF4A3]  md:text-xl tracking-wide transition"
        >
          Not Sure Where To Begin?
        </Link>
      </div>
    </div>
  );
};

export default Header;