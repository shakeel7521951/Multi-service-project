import React from "react";

const Home_html = () => {
  return (
    <div className="bg-gradient-to-br from-[#FFF4A3] to-[#ffefa1]">
      <div className="flex justify-center mx-auto max-w-4xl py-20 px-4">
        <div className="flex flex-col md:flex-row md:gap-20 items-center text-center max-w-6xl w-full">
          {/* Left Section */}
          <div className="md:text-center mb-10 md:mb-0">
            <h1 className="text-5xl font-bold text-[#04AA6D] drop-shadow-md">
              CSS
            </h1>
            <p className="font-bold mt-6 text-xl text-center text-gray-800 sm:w-94">
              The language for styling web pages
            </p>
            <div className="flex flex-col gap-5 mt-8">
              <button className="bg-[#04AA6D] cursor-pointer text-white font-bold rounded-full py-3 px-8 hover:bg-[#03945f] transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg">
                Learn CSS
              </button>
              <button className="bg-black cursor-pointer text-white font-bold rounded-full py-3 px-8 hover:bg-[#333] transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg">
                CSS Reference
              </button>
            </div>
          </div>

          {/* Right Section: CSS Example */}
          <div className="bg-white p-6 rounded-2xl text-left w-full md:w-[450px] shadow-2xl border border-gray-200">
            <h2 className="font-bold mb-4 text-xl text-gray-800">
              CSS Example:
            </h2>
            <div className="bg-gray-900 p-5 font-mono text-sm whitespace-pre-wrap rounded-lg overflow-hidden relative">
              {/* Mac style dots with animation */}
              <div className="absolute top-3 left-4 flex space-x-1.5">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse [animation-delay:200ms]"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse [animation-delay:400ms]"></div>
              </div>

              <code className="text-amber-300 block mt-4">
                {`body {
  background-color: #FFF4A3;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
}

p {
  line-height: 1.6;
}`}
              </code>
            </div>
            <button className="bg-[#04AA6D] cursor-pointer text-white font-bold rounded-full py-3 px-10 mt-5 hover:bg-[#03945f] transition-all transform hover:scale-105 shadow-md w-full">
              Let's Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_html;
