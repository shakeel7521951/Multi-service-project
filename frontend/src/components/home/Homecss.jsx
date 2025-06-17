const Home_html = () => {
  return (
    <div className="flex justify-center bg-[#FFF4A3] py-10 px-4">
      <div className="flex flex-col md:flex-row md:gap-16 items-center text-center">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">CSS</h1>
          <p className="font-bold mt-4 text-lg md:text-xl">
            The language for building web pages
          </p>
          <div className="flex flex-col gap-4 mt-6">
            <button className="bg-[#04AA6D] cursor-pointer text-white font-bold rounded-full py-2 px-6 hover:bg-[#03945f] transition">
              Learn CSS
            </button>
            <button className="bg-black cursor-pointer text-white font-bold rounded-full py-2 px-6 hover:bg-[#333] transition">
              CSS Reference
            </button>
          </div>
        </div>

        {/* Right Section: HTML Example */}
        <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left w-full md:w-[400px]">
          <h2 className="font-bold mb-3">CSS Example:</h2>
          <div className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
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
