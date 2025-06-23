import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Introduction = () => {
  const htmlExample = `<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlExample).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-6">HTML Introduction</h1>

        {/* Navigation Buttons (Top Removed) */}

        <p className="mb-6 text-gray-700">
          HTML is the standard markup language for creating Web pages.
        </p>

        <hr className="border-gray-200 mb-8" />

        {/* What is HTML */}
        <h2 className="text-3xl font-bold mb-6">What is HTML?</h2>
        <ul className="list-disc ml-8 space-y-4 text-gray-800 mb-6">
          {[
            "HTML stands for Hyper Text Markup Language",
            "HTML is the standard markup language for creating Web pages",
            "HTML describes the structure of a Web page",
            "HTML consists of a series of elements",
            "HTML elements tell the browser how to display the content",
            'HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.',
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <hr className="border-gray-200 mb-8" />

        {/* Code Example Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">A Simple HTML Document</h2>
          <p className="text-gray-800 mb-4">
            Copy the HTML code example below to practice in your own editor:
          </p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{htmlExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-bold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </div>

        <hr className="border-gray-200 mb-8" />

        {/* Rest of Content */}
        {/* (unchanged content below — skipped here for brevity, can be added back if needed) */}

        {/* Next Button - Bottom Right */}
        <div className="flex justify-end mt-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition cursor-pointer">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Html_Introduction;
