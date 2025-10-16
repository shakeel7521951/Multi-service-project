const Home_python = () => {
  return (
    <div className="bg-gradient-to-br from-[#F3ECEA] to-[#e8e0dd]">
      <div className="flex justify-center py-20 px-4  mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row md:gap-20 items-center text-center max-w-6xl w-full">

          {/* Left Section */}
          <div className="text-black md:text-left  mb-10 md:mb-0">
            <h1 className="text-5xl text-center  font-bold text-[#3776AB] drop-shadow-md">Python</h1>
            <p className="font-bold mt-6 text-center text-xl text-gray-800">
              A powerful and easy-to-learn
            </p>
            <div className="flex flex-col gap-5 mt-8">
              <button className="bg-[#04AA6D] cursor-pointer text-white font-bold rounded-full py-3 px-8 hover:bg-[#03945f] transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg">
                Learn Python
              </button>
              <button className="bg-black cursor-pointer text-white font-bold rounded-full py-3 px-8 hover:bg-[#333] transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg">
                Python Reference
              </button>
            </div>
          </div>

          {/* Right Section: Python Example */}
          <div className="bg-white p-6 rounded-2xl text-left w-full md:w-[450px] shadow-2xl border border-gray-200">
            <h2 className="font-bold mb-4 text-xl text-gray-800">Python Example:</h2>
            <div className="bg-gray-900 p-5 font-mono text-sm whitespace-pre-wrap rounded-lg overflow-hidden relative">
              
              {/* Animated Dots */}
              <div className="absolute top-3 left-4 flex space-x-1.5">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-ping"></div>
              </div>

              <code className="text-amber-300 block mt-4">
{`# Python function example
def greet(name):
    print(f"Hello, {name}!")

greet("World")`}
              </code>
            </div>
            <button className="bg-[#04AA6D] cursor-pointer text-white font-bold rounded-full py-3 px-10 mt-5 hover:bg-[#03945f] transition-all transform hover:scale-105 shadow-md w-full">
              Let's Start Scripting
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home_python;
