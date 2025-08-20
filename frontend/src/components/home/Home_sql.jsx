const Home_sql = () => {
  return (
    <div className="bg-gradient-to-br from-[#96D4D4] to-[#7fc4c4] ">
    <div className="flex justify-center  py-20 px-4 mx-auto max-w-4xl">
      <div className="flex flex-col md:flex-row md:gap-20 items-center text-center max-w-6xl w-full">

        {/* Left Section */}
        <div className="text-black md:text-center mb-10 md:mb-0">
          <h1 className="text-5xl font-bold text-[#E48B3F] drop-shadow-md">SQL</h1>
          <p className="font-bold mt-6 text-xl text-gray-800 sm:w-94">
            A language for accessing databases
          </p>
          <div className="flex flex-col gap-5 mt-8">
            <button className="bg-[#04AA6D] cursor-pointer text-white font-bold rounded-full py-3 px-8 hover:bg-[#03945f] transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg">
              Learn SQL
            </button>
            <button className="bg-black cursor-pointer text-white font-bold rounded-full py-3 px-8 hover:bg-[#333] transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg">
              SQL Reference
            </button>
          </div>
        </div>

        {/* Right Section: SQL Example */}
        <div className="bg-white p-6 rounded-2xl text-left w-full md:w-[450px] shadow-2xl border border-gray-200">
          <h2 className="font-bold mb-4 text-xl text-gray-800">SQL Example:</h2>
          <div className="bg-gray-900 p-5 font-mono text-sm whitespace-pre-wrap rounded-lg overflow-hidden relative">
            <div className="absolute top-3 left-4 flex space-x-1.5">
  <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
  <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
  <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"></div>
</div>
            <code className="text-amber-300 block mt-4">
{`SELECT * FROM Customers
WHERE Country='Mexico';`}
            </code>
          </div>
          <button className="bg-[#04AA6D] cursor-pointer text-white font-bold rounded-full py-3 px-10 mt-5 hover:bg-[#03945f] transition-all transform hover:scale-105 shadow-md w-full">
            Let's Start Querying
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home_sql;