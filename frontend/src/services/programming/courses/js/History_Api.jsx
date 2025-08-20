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

  const backMethodExample = `<button onclick="myFunction()">Go Back</button>

<script>
function myFunction() {
  window.history.back();
}
</script>`;

  const goMethodExample = `<button onclick="myFunction()">Go Back 2 Pages</button>

<script>
function myFunction() {
  window.history.go(-2);
}
</script>`;

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
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">Web History API</h1>
          <p className="text-gray-600 text-lg">
            Learn how to interact with the browser's session history using the Web History API.
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
          <h2 className="text-3xl font-bold mb-4">What is Web History API?</h2>
          <p className="text-gray-800 mb-3">
            The Web History API provides easy methods to access the windows.history object.
          </p>
          <p className="text-gray-800 mb-3">
            The window.history object contains the URLs (Web Sites) visited by the user.
          </p>
          <p className="text-gray-800 mb-6">
            The Web History API is supported in all browsers:
          </p>
          <div className="bg-white p-4 rounded-lg inline-block mb-6 ">
            <table className="border-collapse">
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Chrome</td>
                  <td className="border px-4 py-2 font-semibold">Edge</td>
                  <td className="border px-4 py-2 font-semibold">Firefox</td>
                  <td className="border px-4 py-2 font-semibold">Safari</td>
                  <td className="border px-4 py-2 font-semibold">Opera</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-center">Yes</td>
                  <td className="border px-4 py-2 text-center">Yes</td>
                  <td className="border px-4 py-2 text-center">Yes</td>
                  <td className="border px-4 py-2 text-center">Yes</td>
                  <td className="border px-4 py-2 text-center">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
         
        </section>

        {/* Methods Section */}
        <section className="space-y-8">
          {/* back() Method */}
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-2">The History back() Method</h3>
            <p className="text-gray-700 mb-4">
              The back() method loads the previous URL in the windows.history list.
              It is the same as clicking the "back arrow" in your browser.
            </p>
            <h4 className="font-bold mb-3">Example:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{backMethodExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(backMethodExample, 'backMethod')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.backMethod ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* go() Method */}
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-2">The History go() Method</h3>
            <p className="text-gray-700 mb-4">
              The go() method loads a specific URL from the history list.
            </p>
            <h4 className="font-bold mb-3">Example:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{goMethodExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(goMethodExample, 'goMethod')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.goMethod ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Reference Tables */}
        <section className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-semibold mb-4">History Object Properties</h3>
            <table className="w-full border-collapse">
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

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-semibold mb-4">History Object Methods</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#04AA6D] text-white">
                  <th className="p-3 text-left">Method</th>
                  <th className="p-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">back()</td>
                  <td className="p-3">Loads the previous URL in the history list</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">forward()</td>
                  <td className="p-3">Loads the next URL in the history list</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">go()</td>
                  <td className="p-3">Loads a specific URL from the history list</td>
                </tr>
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

export default History_Api;