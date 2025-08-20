import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Fetch_Api = () => {
  const references = [
    "Fetch Methods",
    "Request Options",
    "Response Objects",
    "Headers Interface",
    "Error Handling",
    "Async/Await",
    "JSON Handling",
    "CORS",
    "Authentication",
    "Uploading Data",
    "Polyfills",
    "Performance",
    "Browser Support",
    "Alternatives",
    "Best Practices",
  ];

  const fetchExample = `fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`;

  const asyncExample = `async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}`;

  const [copied, setCopied] = useState("");
  const [activeTab, setActiveTab] = useState("basic");

  const handleCopy = (code, type) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(type);
        setTimeout(() => setCopied(""), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Fetch API</h1>
          <p className="text-gray-600 text-lg">
            Modern interface for making HTTP requests in the browser with a simpler, cleaner syntax.
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
        <section className="bg-[#E7F3FE] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">Why Use Fetch API?</h2>
          <p className="text-gray-800 mb-3">
            The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses.
          </p>
          <p className="text-gray-800 mb-3">
            <span className="font-semibold">😀 No need for XMLHttpRequest anymore.</span> Fetch provides a better alternative that's more powerful and flexible.
          </p>
          <p className="text-gray-800 mb-6">
            With promises and async/await syntax, Fetch makes handling asynchronous requests cleaner and easier to understand.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Fetch Examples »
          </button>
        </section>

        {/* Browser Support Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Browser Support</h2>
          <p className="text-gray-700 mb-4">
            The numbers in the table specify the first browser versions that fully support Fetch API:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b">Chrome 42</th>
                  <th className="py-2 px-4 border-b">Edge 14</th>
                  <th className="py-2 px-4 border-b">Firefox 40</th>
                  <th className="py-2 px-4 border-b">Safari 10.1</th>
                  <th className="py-2 px-4 border-b">Opera 29</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b text-center">Apr 2015</td>
                  <td className="py-2 px-4 border-b text-center">Aug 2016</td>
                  <td className="py-2 px-4 border-b text-center">Aug 2015</td>
                  <td className="py-2 px-4 border-b text-center">Mar 2017</td>
                  <td className="py-2 px-4 border-b text-center">Apr 2015</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Code Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Fetch API Examples</h2>
          <p className="text-gray-700 mb-4">
            Try these examples to understand how Fetch works with different syntax patterns.
          </p>
          
          <div className="mb-4 flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("basic")}
              className={`py-2 px-4 font-medium ${activeTab === "basic" ? "text-[#04AA6D] border-b-2 border-[#04AA6D]" : "text-gray-600"}`}
            >
              Basic Fetch
            </button>
            <button
              onClick={() => setActiveTab("async")}
              className={`py-2 px-4 font-medium ${activeTab === "async" ? "text-[#04AA6D] border-b-2 border-[#04AA6D]" : "text-gray-600"}`}
            >
              Async/Await
            </button>
          </div>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            {activeTab === "basic" ? (
              <>
                <h3 className="font-bold mb-3">Basic Fetch Example:</h3>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{fetchExample}</code>
                </pre>
                <button
                  onClick={() => handleCopy(fetchExample, "basic")}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copied === "basic" ? "Copied!" : "Copy Code"}
                </button>
              </>
            ) : (
              <>
                <h3 className="font-bold mb-3">Async/Await Example:</h3>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{asyncExample}</code>
                </pre>
                <button
                  onClick={() => handleCopy(asyncExample, "async")}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copied === "async" ? "Copied!" : "Copy Code"}
                </button>
              </>
            )}
          </div>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Fetch API References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive references to master all aspects of the Fetch API, from basic requests to advanced configurations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {references.map((ref, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded transition"
              >
                {ref}
              </button>
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


export default Fetch_Api;
