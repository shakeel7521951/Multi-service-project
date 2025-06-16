import React from "react";

const Home_html = () => {
  return (
    <div className="flex justify-center bg-[#D9EEE1] py-10 px-4">
      <div className="flex flex-col md:flex-row gap-10 items-center text-center">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">HTML</h1>
          <p className="font-bold mt-4 text-lg md:text-xl">
            The language for building web pages
          </p>
          <div className="flex flex-col gap-4 mt-6">
            <button className="bg-[#04AA6D] cursor-pointer text-white font-bold rounded-full py-2 px-6 hover:bg-[#03945f] transition">
              Learn HTML
            </button>
            <button className="bg-black cursor-pointer text-white font-bold rounded-full py-2 px-6 hover:bg-[#333] transition">
              HTML Reference
            </button>
          </div>
        </div>

        {/* Right Section: HTML Example */}
        <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left w-full md:w-[400px]">
          <h2 className="font-bold mb-3">HTML Example:</h2>
          <div className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
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
          </div>
          <button className="bg-[#04AA6D] cursor-pointer text-white font-bold rounded-full py-2 px-10 mt-3 hover:bg-[#03945f] transition">
            Let's Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home_html;
