import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Window_Navigator = () => {
  const references = [
    "Window Object",
    "Screen Object",
    "Location Object",
    "History Object",
    "Timing API",
    "Cookies",
    "Storage API",
    "Geolocation API",
    "Web Workers",
    "Web APIs",
    "Browser Detection",
    "Feature Detection",
    "User Agent",
    "Browser Compatibility",
    "JavaScript References"
  ];

  const examples = [
    {
      title: "Browser Cookies",
      code: `<p id="demo"></p>\n\n<script>\ndocument.getElementById("demo").innerHTML =\n"cookiesEnabled is " + navigator.cookieEnabled;\n</script>`,
      description: "The cookieEnabled property returns true if cookies are enabled."
    },
    {
      title: "Browser Language",
      code: `<p id="demo"></p>\n\n<script>\ndocument.getElementById("demo").innerHTML = navigator.language;\n</script>`,
      description: "The language property returns the browser's language."
    },
    {
      title: "Browser Online Status",
      code: `<p id="demo"></p>\n\n<script>\ndocument.getElementById("demo").innerHTML = navigator.onLine;\n</script>`,
      description: "The onLine property returns true if the browser is online."
    },
    {
      title: "User Agent",
      code: `<p id="demo"></p>\n\n<script>\ndocument.getElementById("demo").innerHTML = navigator.userAgent;\n</script>`,
      description: "The userAgent property returns the user-agent header sent by the browser.",
      warning: "The information from the navigator object can often be misleading."
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard
      .writeText(code)
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Window Navigator</h1>
          <p className="text-gray-600 text-lg">
            Explore browser properties and capabilities with the Navigator object.
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
          <h2 className="text-3xl font-bold mb-4">The Navigator Object</h2>
          <p className="text-gray-800 mb-3">
            The navigator object contains information about the visitor's browser.
          </p>
          <p className="text-gray-800 mb-3">
            It can be written with or without the window prefix like: <code className="bg-gray-200 px-1 rounded">window.navigator</code> or just <code className="bg-gray-200 px-1 rounded">navigator</code>.
          </p>
          <p className="text-gray-800 mb-6">
            Note that many navigator properties are deprecated in modern web standards and should be used with caution.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Examples Below »
          </button>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Navigator Properties & Methods</h2>
          <p className="text-gray-700 mb-6">
            Explore common navigator properties with these interactive examples:
          </p>

          <div className="space-y-8">
            {examples.map((example, idx) => (
              <div key={idx} className="bg-[#E7E9EB] p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-3">{example.title}</h3>
                <p className="text-gray-700 mb-4">{example.description}</p>
                {example.warning && (
                  <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
                    <p className="font-semibold">Warning:</p>
                    <p>{example.warning}</p>
                  </div>
                )}
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{example.code}</code>
                </pre>
                <button
                  onClick={() => handleCopy(example.code)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copied ? "Copied!" : "Copy Code"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Deprecation Warning Section */}
        <section className="bg-red-100 border-l-4 border-red-500 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-3">Important Note on Deprecated Properties</h2>
          <p className="mb-2">
            Many navigator properties like <code className="bg-gray-200 px-1 rounded">appName</code>, <code className="bg-gray-200 px-1 rounded">appCodeName</code>, <code className="bg-gray-200 px-1 rounded">product</code>, and <code className="bg-gray-200 px-1 rounded">platform</code> are deprecated in modern web standards.
          </p>
          <p>
            These properties often return misleading information and should not be used for browser detection or feature checking.
          </p>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore more JavaScript objects, methods, and browser APIs with our comprehensive references:
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


export default Window_Navigator;
