import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy } from "react-icons/fa";

const Random = () => {
  const examples = [
    {
      title: "Basic Random Number",
      code: "Math.random();",
      description: "Returns a random number between 0 (inclusive) and 1 (exclusive)"
    },
    {
      title: "Random Integer 0-9",
      code: "Math.floor(Math.random() * 10);",
      description: "Returns a random integer from 0 to 9"
    },
    {
      title: "Random Integer 0-10",
      code: "Math.floor(Math.random() * 11);",
      description: "Returns a random integer from 0 to 10"
    },
    {
      title: "Random Integer 0-99",
      code: "Math.floor(Math.random() * 100);",
      description: "Returns a random integer from 0 to 99"
    },
    {
      title: "Random Integer 1-10",
      code: "Math.floor(Math.random() * 10) + 1;",
      description: "Returns a random integer from 1 to 10"
    },
    {
      title: "Random Integer 1-100",
      code: "Math.floor(Math.random() * 100) + 1;",
      description: "Returns a random integer from 1 to 100"
    }
  ];

  const functions = [
    {
      title: "Random between min (included) and max (excluded)",
      code: `function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}`,
      description: "This function returns a random number between min (included) and max (excluded)"
    },
    {
      title: "Random between min and max (both included)",
      code: `function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}`,
      description: "This function returns a random number between min and max (both included)"
    }
  ];

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (code, index) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Random</h1>
          <p className="text-gray-600 text-lg">
            Learn how to generate random numbers in JavaScript with Math.random() and related functions.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">Math.random()</h2>
          <p className="text-gray-800 mb-3">
            <code className="bg-gray-200 px-1 rounded">Math.random()</code> returns a random number between 0 (inclusive), and 1 (exclusive).
          </p>
          <p className="text-gray-800 mb-6">
            <code className="bg-gray-200 px-1 rounded">Math.random()</code> always returns a number lower than 1.
          </p>
        </section>

        {/* Random Integers Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">JavaScript Random Integers</h2>
          <p className="text-gray-700 mb-6">
            <code className="bg-gray-200 px-1 rounded">Math.random()</code> used with <code className="bg-gray-200 px-1 rounded">Math.floor()</code> can be used to return random integers.
            There is no such thing as JavaScript integers - we're talking about numbers with no decimals here.
          </p>
          
          <div className="space-y-6">
            {examples.map((example, index) => (
              <div key={index} className="bg-[#E7E9EB] p-6 rounded-xl">
                <h3 className="font-bold mb-3">{example.title}</h3>
                <p className="text-gray-700 mb-4">{example.description}</p>
                <div className="relative">
                  <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                  <button
                    onClick={() => handleCopy(example.code, index)}
                    className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 p-2 rounded"
                    title="Copy code"
                  >
                    {copiedIndex === index ? (
                      <span className="text-green-600">Copied!</span>
                    ) : (
                      <FaCopy className="text-gray-600" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Proper Random Functions Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">A Proper Random Function</h2>
          <p className="text-gray-700 mb-6">
            As you can see from the examples above, it might be a good idea to create a proper random function to use for all random integer purposes.
          </p>
          
          <div className="space-y-6">
            {functions.map((func, index) => (
              <div key={index} className="bg-[#E7E9EB] p-6 rounded-xl">
                <h3 className="font-bold mb-3">{func.title}</h3>
                <p className="text-gray-700 mb-4">{func.description}</p>
                <div className="relative">
                  <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                    <code>{func.code}</code>
                  </pre>
                  <button
                    onClick={() => handleCopy(func.code, index + examples.length)}
                    className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 p-2 rounded"
                    title="Copy code"
                  >
                    {copiedIndex === index + examples.length ? (
                      <span className="text-green-600">Copied!</span>
                    ) : (
                      <FaCopy className="text-gray-600" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Random;