import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#282A35] text-center py-24 text-white">
      <h1 className="text-4xl md:text-6xl font-bold">Learn to Code</h1>
      <p className="text-[#FFF4A0] text-2xl md:text-3xl mt-4">
        With the world's largest web developer site.
      </p>

      {/* Search Box */}
      <div className="flex items-center gap-2 bg-white text-black rounded-full w-[90%] md:w-[40%] lg:w-[30%] mx-auto mt-8 px-4 py-1 shadow-md">
        <input
          type="text"
          placeholder="Search our tutorials, e.g. HTML"
          className="flex-1 outline-none p-2 rounded-full"
        />
        <button className="p-2 bg-[#059862] text-white rounded-full hover:bg-[#04724d] transition">
          <FaSearch />
        </button>
      </div>
      <div className="mt-4">
        <Link to="#" className="underline hover:text-[#FFF4A3] text-xl">
          Not Sure Where To Begin?
        </Link>
      </div>
    </div>
  );
};

export default Header;
