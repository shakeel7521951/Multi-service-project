import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Api_Intro = () => {
  const references = [
    "Geolocation API",
    "Web Storage API",
    "Fetch API",
    "Canvas API",
    "Web Workers API",
    "History API",
    "WebSocket API",
    "Payment Request API",
    "Drag and Drop API",
    "Web Components",
    "YouTube API",
    "Twitter API",
    "Facebook API",
    "Google Maps API",
    "Payment APIs"
  ];

  const apiExample = `const myElement = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myElement.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(apiExample)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">Web APIs - Introduction</h1>
          <p className="text-gray-600 text-lg">
            Unlock the full potential of web development with powerful Web APIs.
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
          <h2 className="text-3xl font-bold mb-4">A Web API is a developer's dream</h2>
          <ul className="text-gray-800 mb-6 space-y-3">
            <li className="flex items-start">
              <span className="mr-2 text-[#04AA6D] font-bold">•</span>
              It can extend the functionality of the browser
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#04AA6D] font-bold">•</span>
              It can greatly simplify complex functions
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#04AA6D] font-bold">•</span>
              It can provide easy syntax to complex code
            </li>
          </ul>
        </section>

        {/* What is Web API Section */}
        <section className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">What is Web API?</h2>
          <p className="text-gray-800 mb-4">
            <span className="font-semibold">API</span> stands for <span className="font-semibold">Application Programming Interface</span>.
          </p>
          <p className="text-gray-800 mb-4">
            A <span className="font-semibold">Web API</span> is an application programming interface for the Web.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-[#FFF4A3] p-4 rounded-lg">
              <h3 className="font-bold mb-2">Browser APIs</h3>
              <p>Can extend the functionality of a web browser.</p>
            </div>
            <div className="bg-[#FFC0C7] p-4 rounded-lg">
              <h3 className="font-bold mb-2">Server APIs</h3>
              <p>Can extend the functionality of a web server.</p>
            </div>
          </div>
        </section>

        {/* Browser APIs Section */}
        <section className="bg-[#F3ECEA] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Browser APIs</h2>
          <p className="text-gray-800 mb-4">
            All browsers have a set of built-in Web APIs to support complex operations, and to help accessing data.
          </p>
          <p className="text-gray-800 mb-6">
            For example, the <span className="font-semibold">Geolocation API</span> can return the coordinates of where the browser is located.
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <p className="mb-3">Get the latitude and longitude of the user's position:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{apiExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Third Party APIs Section */}
        <section className="bg-[#D9EEE1] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Third Party APIs</h2>
          <p className="text-gray-800 mb-4">
            Third party APIs are not built into your browser. To use these APIs, you will have to download the code from the Web.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-[#04AA6D] mb-2">YouTube API</h3>
              <p>Allows you to display videos on a web site.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-[#04AA6D] mb-2">Twitter API</h3>
              <p>Allows you to display Tweets on a web site.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-[#04AA6D] mb-2">Facebook API</h3>
              <p>Allows you to display Facebook info on a web site.</p>
            </div>
          </div>
        </section>

        {/* API References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Web API References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive collection of Web API references to integrate powerful functionalities into your applications.
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

export default Api_Intro;