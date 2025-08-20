const Home_javascript = () => {
  return (
    <div className="flex justify-center bg-gradient-to-br from-[#282A35] to-[#1d1f29] py-12 px-4">
      <div className="flex flex-col md:flex-row md:gap-20 items-center text-center max-w-6xl w-full">
        {/* Left Section */}
        <div className="text-white md:text-left mb-10 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold text-[#FFC0C7] drop-shadow-md">JavaScript</h1>
          <p className="font-bold mt-6 text-xl md:text-2xl text-white">
            The programming language of the Web
          </p>
          <div className="flex flex-col gap-5 mt-8">
            <button className="bg-[#04AA6D] cursor-pointer text-white font-bold rounded-full py-3 px-8 hover:bg-[#03945f] transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg">
              Learn JavaScript
            </button>
            <button className="bg-[#FFC0C7] cursor-pointer text-[#282A35] font-bold rounded-full py-3 px-8 hover:bg-[#ffb3bb] transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg">
              JS Reference
            </button>
          </div>
        </div>

        {/* Right Section: JavaScript Example */}
        <div className="bg-white p-6 rounded-2xl text-left w-full md:w-[450px] shadow-2xl border border-gray-300">
          <h2 className="font-bold mb-4 text-xl text-gray-800">JavaScript Example:</h2>
          <div className="bg-gray-900 p-5 font-mono text-sm whitespace-pre-wrap rounded-lg overflow-hidden relative">
            <div className="absolute top-3 left-4 flex space-x-1.5">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <code className="text-amber-300 block mt-4">
{`<button onclick="myFunction()">Click Me!</button>

<script>
function myFunction() {
  let x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
}
</script>`}
            </code>
          </div>
          <button className="bg-[#04AA6D] cursor-pointer text-white font-bold rounded-full py-3 px-10 mt-5 hover:bg-[#03945f] transition-all transform hover:scale-105 shadow-md w-full">
            Let's Start Scripting
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home_javascript;