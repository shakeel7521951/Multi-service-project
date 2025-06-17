const Home_sql = () => {
  return (
    <div className="flex justify-center bg-[#96D4D4] py-10 px-4 min-h-[450px]">
      <div className="flex flex-col md:flex-row md:gap-16 items-center text-center">

        {/* Left Section */}
        <div className="text-black">
          <h1 className="text-4xl md:text-6xl font-bold">SQL</h1>
          <p className="font-bold mt-4 text-lg md:text-xl">
            A language for accessing databases
          </p>
          <div className="flex flex-col gap-4 mt-6">
            <button className="bg-[#04AA6D] cursor-pointer text-white font-bold rounded-full py-2 px-6 hover:bg-[#03945f] transition">
              Learn SQL
            </button>
            <button className="bg-black cursor-pointer text-white font-bold rounded-full py-2 px-6 hover:bg-[#333] transition">
              SQL Reference
            </button>
          </div>
        </div>

        {/* Right Section: Python Example */}
        <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left w-full md:w-[400px]">
          <h2 className="font-bold mb-3">SQL Example:</h2>
          <div className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
            {`# Python function example
SELECT * FROM Customers
WHERE Country='Mexico';
`}
          </div>
          <button className="bg-[#04AA6D] cursor-pointer text-white font-bold rounded-full py-2 px-10 mt-3 hover:bg-[#03945f] transition">
            Let's Start Scripting
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Home_sql;
