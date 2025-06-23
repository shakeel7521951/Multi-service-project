import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Default = () => {
  const references = [
    "HTML Elements",
    "Browser Support",
    "Attributes",
    "Global Attributes",
    "Event Attributes",
    "Color Names",
    "Canvas API",
    "Media Tags",
    "Character Sets",
    "URL Encoding",
    "Language Codes",
    "Country Codes",
    "HTTP Status Codes",
    "Px to Em Converter",
    "Keyboard Shortcuts",
  ];

  const htmlExample = `<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>

  <h1>Welcome to HTML</h1>
  <p>This is a simple HTML document.</p>

</body>
</html>`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(htmlExample)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // Reset after 1.5 seconds
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
          <h1 className="text-3xl font-extrabold mb-2">HTML Fundamentals</h1>
          <p className="text-gray-600 text-lg">
            Master the foundation of web development with our easy-to-follow
            HTML guide.
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
          <h2 className="text-3xl font-bold mb-4">Why Learn HTML?</h2>
          <p className="text-gray-800 mb-3">
            HTML (HyperText Markup Language) is the backbone of all websites. It
            defines the structure and content of web pages.
          </p>
          <p className="text-gray-800 mb-3">
            Whether you're aiming to build personal websites, professional
            portfolios, or large-scale applications — HTML is your starting
            point.
          </p>
          <p className="text-gray-800 mb-6">
            Let’s begin your journey into web development with hands-on examples
            and interactive learning.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Start Learning Now »
          </button>
        </section>

        {/* Code Editor Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Practice Live with HTML
          </h2>
          <p className="text-gray-700 mb-4">
            Try out HTML code directly in your browser and see the results
            instantly.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{htmlExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* HTML References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">HTML References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Use our comprehensive HTML references to find details about every
            HTML element, its attributes, browser compatibility, and usage tips.
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

export default Default;
