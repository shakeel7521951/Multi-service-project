import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaGithub, FaLock } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const SignIn = () => {
  const [isOpen, setIsOpen] = useState(true);
  const boxRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
const fristfuc=()=>{
    setIsOpen(!isOpen);
}
  return (
    <>
        
      {isOpen && (
        <div
          ref={boxRef}
          className="absolute  bg-white z-50 right-0 top-20 max-w-sm w-full mx-auto mt-10 border shadow-lg p-6 rounded-md"
        >
            <div className="float-right ">
                <RxCross2 className="text-xl cursor-pointer"
                onClick={fristfuc}
                />

            </div>
          <h1 className="text-xl font-semibold text-center mb-1">Sign in</h1>
          <p className="text-center text-sm text-gray-600 mb-4">
            Get access to more learning features
          </p>

          <p className="text-sm text-center mb-4">
            Don’t have an account?{" "}
            <Link to="" className="text-green-600 hover:underline">
              Register
            </Link>
          </p>

          <div className="flex justify-between gap-2 mb-6">
            <button className="border border-gray-400 cursor-pointer p-3 rounded-md hover:bg-gray-100">
              <FaGoogle className="text-lg" />
            </button>
            <button className="border border-gray-400 cursor-pointer p-3 rounded-md hover:bg-gray-100">
              <FaFacebookF className="text-lg" />
            </button>
            <button className="border border-gray-400 cursor-pointer p-3 rounded-md hover:bg-gray-100">
              <FaGithub className="text-lg" />
            </button>
            <button className="border border-gray-400 cursor-pointer p-3 rounded-md hover:bg-gray-100">
              <FaLock className="text-lg" />
            </button>
          </div>

          <div className="flex items-center mb-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-sm text-gray-500">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Email Input */}
          <div className="w-full relative mb-5">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="peer w-full px-3 pt-6 pb-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-2 text-gray-500 text-sm transition-all duration-200 
                peer-placeholder-shown:top-5 
                peer-placeholder-shown:text-base 
                peer-placeholder-shown:text-gray-400 
                peer-focus:-top-3 
                peer-focus:text-sm 
                peer-focus:bg-white 
                peer-focus:text-green-600"
            >
              Email
            </label>
          </div>

          {/* Password Input */}
          <div className="w-full relative mb-5">
            <input
              type="password"
              id="password"
              placeholder=" "
              className="peer w-full px-3 pt-6 pb-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            />
            <label
              htmlFor="password"
              className="absolute left-3 top-2 text-gray-500 text-sm transition-all duration-200 
                peer-placeholder-shown:top-5 
                peer-placeholder-shown:text-base 
                peer-placeholder-shown:text-gray-400 
                peer-focus:-top-3 
                peer-focus:text-sm 
                peer-focus:bg-white 
                peer-focus:text-green-600"
            >
              Password
            </label>
          </div>

          <p className="text-right mb-5 text-sm">
            <Link to="" className="text-blue-600 hover:underline">
              Forgot your password?
            </Link>
          </p>
          <div className="px-3 py-3 bg-green-500 text-center hover:bg-green-300 text-white font-semibold text-md cursor-pointer rounded-3xl">SignIn</div>
        </div>
      )}
    </>
  );
};

export default SignIn;
