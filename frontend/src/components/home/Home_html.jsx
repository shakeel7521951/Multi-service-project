import React from "react";

const Home_html = () => {
  return (
    <div className="bg-gradient-to-br from-[#D9EEE1] to-[#c5e8d4]">
    <div className="flex justify-center  py-20 px-4 mx-auto max-w-4xl">
      <div className="flex flex-col md:flex-row md:gap-20 items-center text-center max-w-6xl w-full ">
        {/* Left Section */}
        <div className="md:text-center mb-10 md:mb-0">
          <h1 className="text-5xl font-bold text-[#04AA6D] drop-shadow-md">HTML</h1>
          <p className="font-bold mt-6 text-center text-xl  text-gray-800  sm:w-94">
            The language for building web pages
          </p>
          <div className="flex flex-col gap-5 mt-8">
            <button className="bg-[#04AA6D] cursor-pointer text-white font-bold rounded-full py-3 px-8 hover:bg-[#03945f] transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg">
              Learn HTML
            </button>
            <button className="bg-black cursor-pointer text-white font-bold rounded-full py-3 px-8 hover:bg-[#333] transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg">
              HTML Reference
            </button>
          </div>
        </div>

        {/* Right Section: HTML Example */}
        <div className="bg-white p-6 rounded-2xl text-left w-full md:w-[450px] shadow-2xl border border-gray-200">
          <h2 className="font-bold mb-4 text-xl text-gray-800">HTML Example:</h2>
          <div className="bg-gray-900 p-5 font-mono text-sm whitespace-pre-wrap rounded-lg overflow-hidden relative">
            <div className="absolute top-3 left-4 flex space-x-1.5">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <code className="text-green-400 block mt-4">
{`<!DOCTYPE html>
<html>
  <head>
    <title>HTML Tutorial</title>
  </head>
  <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`}
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