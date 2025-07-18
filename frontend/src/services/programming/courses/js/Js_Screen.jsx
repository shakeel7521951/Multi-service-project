import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy } from "react-icons/fa";

const Js_Screen = () => {
  const examples = [
    {
      title: "Screen Width",
      description: "Returns the width of the visitor's screen in pixels.",
      code: 'document.getElementById("demo").innerHTML = "Screen Width: " + screen.width;',
      result: "Screen Width: 1366"
    },
    {
      title: "Screen Height",
      description: "Returns the height of the visitor's screen in pixels.",
      code: 'document.getElementById("demo").innerHTML = "Screen Height: " + screen.height;',
      result: "Screen Height: 768"
    },
    {
      title: "Available Screen Width",
      description: "Returns the width minus interface features like the Windows Taskbar.",
      code: 'document.getElementById("demo").innerHTML = "Available Screen Width: " + screen.availWidth;',
      result: "Available Screen Width: 1366"
    },
    {
      title: "Available Screen Height",
      description: "Returns the height minus interface features like the Windows Taskbar.",
      code: 'document.getElementById("demo").innerHTML = "Available Screen Height: " + screen.availHeight;',
      result: "Available Screen Height: 728"
    },
    {
      title: "Screen Color Depth",
      description: "Returns the number of bits used to display one color.",
      code: 'document.getElementById("demo").innerHTML = "Screen Color Depth: " + screen.colorDepth;',
      result: "Screen Color Depth: 24"
    },
    {
      title: "Screen Pixel Depth",
      description: "Returns the pixel depth of the screen (equal to color depth for modern computers).",
      code: 'document.getElementById("demo").innerHTML = "Screen Pixel Depth: " + screen.pixelDepth;',
      result: "Screen Pixel Depth: 24"
    }
  ];

  const properties = [
    "screen.width",
    "screen.height",
    "screen.availWidth",
    "screen.availHeight",
    "screen.colorDepth",
    "screen.pixelDepth"
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Window Screen</h1>
          <p className="text-gray-600 text-lg">
            Learn how to access and work with the user's screen properties using JavaScript.
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
          <h2 className="text-3xl font-bold mb-4">Window Screen Object</h2>
          <p className="text-gray-800 mb-3">
            The <code className="bg-gray-200 px-1 rounded">window.screen</code> object contains information about the user's screen.
          </p>
          <p className="text-gray-800 mb-3">
            The <code className="bg-gray-200 px-1 rounded">window.screen</code> object can be written without the <code className="bg-gray-200 px-1 rounded">window</code> prefix.
          </p>
          <p className="text-gray-800 mb-6">
            Use these properties to create responsive designs that adapt to different screen sizes and capabilities.
          </p>
        </section>

        {/* Properties Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Screen Properties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {properties.map((prop, idx) => (
              <div key={idx} className="bg-gray-100 p-4 rounded-lg">
                <code className="font-mono text-sm bg-gray-200 px-2 py-1 rounded">{prop}</code>
              </div>
            ))}
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Screen Property Examples</h2>
          <p className="text-gray-700 mb-6">
            Try these examples to get information about the user's screen:
          </p>

          <div className="space-y-8">
            {examples.map((example, index) => (
              <div key={index} className="bg-[#E7E9EB] p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-3">{example.title}</h3>
                <p className="text-gray-700 mb-4">{example.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Code:</h4>
                  <div className="relative">
                    <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                    <button
                      onClick={() => handleCopy(example.code, index)}
                      className="absolute top-2 right-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
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
                <div>
                  <h4 className="font-semibold mb-2">Result:</h4>
                  <div className="bg-white border-l-4 border-gray-400 p-4 font-mono text-sm rounded">
                    {example.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Color Depth Info */}
        <section className="bg-[#FFF4A3] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">About Color Depth</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>24 bits</strong> = 16,777,216 different "True Colors"</li>
            <li><strong>32 bits</strong> = 4,294,967,296 different "Deep Colors"</li>
            <li><strong>16 bits</strong> = 65,536 different "High Colors" (older computers)</li>
            <li><strong>8 bits</strong> = 256 different "VGA colors" (very old computers and cell phones)</li>
          </ul>
          <p className="mt-4">
            The <code className="bg-gray-200 px-1 rounded">#rrggbb</code> (rgb) values used in HTML represent "True Colors" (16,777,216 different colors).
          </p>
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

export default Js_Screen;
