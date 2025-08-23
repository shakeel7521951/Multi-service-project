import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const History_Api = () => {
  const references = [
    "History Object Properties",
    "History Object Methods",
    "Browser Support",
    "back() Method",
    "forward() Method",
    "go() Method",
    "length Property",
    "Window Object",
    "Location Object",
    "Navigation Timing API",
    "Session History",
    "PushState Examples",
    "ReplaceState Examples",
    "Popstate Event",
    "Hashchange Event"
  ];

  const backMethodExample = `<button onclick="myFunction()">Go Back</button>\n\n<script>\nfunction myFunction() {\n  window.history.back();\n}\n</script>`;

  const goMethodExample = `<button onclick="myFunction()">Go Back 2 Pages</button>\n\n<script>\nfunction myFunction() {\n  window.history.go(-2);\n}\n</script>`;

  const [copied, setCopied] = useState({
    backMethod: false,
    goMethod: false
  });

  const handleCopy = (example, key) => {
    navigator.clipboard
      .writeText(example)
      .then(() => {
        setCopied(prev => ({ ...prev, [key]: true }));
        setTimeout(() => {
          setCopied(prev => ({ ...prev, [key]: false }));
        }, 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center sm:text-left">
          <h1 className="text-4xl font-extrabold mb-2 text-gray-900">Web History API</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Learn how to interact with the browser's session history using the Web History API.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded-lg shadow hover:shadow-lg hover:scale-105 transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">What is Web History API?</h2>
          <p className="text-gray-800 mb-3">
            The Web History API provides easy methods to access the <code>window.history</code> object.
          </p>
          <p className="text-gray-800 mb-3">
            The <code>window.history</code> object contains the URLs (Web Sites) visited by the user.
          </p>
          <p className="text-gray-800 mb-6">
            The Web History API is supported in all modern browsers:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border text-sm sm:text-base rounded-lg overflow-hidden">
              <thead className="bg-[#04AA6D] text-white">
                <tr>
                  {['Chrome','Edge','Firefox','Safari','Opera'].map((browser, i) => (
                    <th key={i} className="px-4 py-2 font-semibold text-center">{browser}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {Array(5).fill("Yes").map((val, i) => (
                    <td key={i} className="border px-4 py-2 text-center">{val}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Methods Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* back() Method */}
          <div className="bg-[#E7E9EB] p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-2">The <code>history.back()</code> Method</h3>
            <p className="text-gray-700 mb-4">
              The <code>back()</code> method loads the previous URL in the <code>window.history</code> list.
              It is the same as clicking the browser's back button.
            </p>
            <h4 className="font-bold mb-3">Example:</h4>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
              <code>{backMethodExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(backMethodExample, 'backMethod')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded-lg shadow transition"
            >
              {copied.backMethod ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* go() Method */}
          <div className="bg-[#E7E9EB] p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-2">The <code>history.go()</code> Method</h3>
            <p className="text-gray-700 mb-4">
              The <code>go()</code> method loads a specific URL from the history list.
            </p>
            <h4 className="font-bold mb-3">Example:</h4>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
              <code>{goMethodExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(goMethodExample, 'goMethod')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded-lg shadow transition"
            >
              {copied.goMethod ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Reference Tables */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-4">History Object Properties</h3>
            <table className="w-full border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-[#04AA6D] text-white">
                  <th className="p-3 text-left">Property</th>
                  <th className="p-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">length</td>
                  <td className="p-3">Returns the number of URLs in the history list</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-4">History Object Methods</h3>
            <table className="w-full border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-[#04AA6D] text-white">
                  <th className="p-3 text-left">Method</th>
                  <th className="p-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {[{name:'back()',desc:'Loads the previous URL'},
                  {name:'forward()',desc:'Loads the next URL'},
                  {name:'go()',desc:'Loads a specific URL'}].map((m,i)=>(
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{m.name}</td>
                    <td className="p-3">{m.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* HTML References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">History API References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive references for the Web History API, including properties, methods, and related concepts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {references.map((ref, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-[#04AA6D] hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded-lg shadow-sm transition"
              >
                {ref}
              </button>
            ))}
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded-lg shadow hover:scale-105 hover:shadow-lg transition">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default History_Api;
