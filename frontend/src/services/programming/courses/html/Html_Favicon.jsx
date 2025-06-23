import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Favicon = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const faviconExample = `<!DOCTYPE html>
<html>
<head>
  <title>My Page Title</title>
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Favicon</h1>

        <div className="flex justify-between mb-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            <FaChevronLeft />
            Previous
          </button>
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            Next
            <FaChevronRight />
          </button>
        </div>

        <section className="text-gray-800">
          <h2 className="text-3xl font-bold mb-4">What is a Favicon?</h2>
          <p className="mb-4">A favicon is a small image displayed next to the page title in the browser tab.</p>

          <h3 className="text-2xl font-semibold mb-2">How To Add a Favicon in HTML</h3>
          <p className="mb-4">
            You can use any image as your favicon. You can also create one on websites like
            <a href="https://www.favicon.cc" className="text-blue-600 underline ml-1" target="_blank" rel="noopener noreferrer">favicon.cc</a>.
          </p>
          <p className="mb-4">The image is displayed to the left of the page title in the browser tab.</p>

          {/* Example Box */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{faviconExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(faviconExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === faviconExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Favicon File Format Support</h3>

          {/* Browser Support Table */}
          <div className="overflow-auto rounded-2xl bg-[#E7E9EB] p-5 text-left mb-10">
            <table className="min-w-full table-auto border-collapse bg-white rounded-md overflow-hidden text-sm text-gray-700">
              <thead className="bg-[#04AA6D] text-white">
                <tr>
                  <th className="p-3 border border-gray-200">Browser</th>
                  <th className="p-3 border border-gray-200">ICO</th>
                  <th className="p-3 border border-gray-200">PNG</th>
                  <th className="p-3 border border-gray-200">GIF</th>
                  <th className="p-3 border border-gray-200">JPEG</th>
                  <th className="p-3 border border-gray-200">SVG</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Edge", "Yes", "Yes", "Yes", "Yes", "Yes"],
                  ["Chrome", "Yes", "Yes", "Yes", "Yes", "Yes"],
                  ["Firefox", "Yes", "Yes", "Yes", "Yes", "Yes"],
                  ["Opera", "Yes", "Yes", "Yes", "Yes", "Yes"],
                  ["Safari", "Yes", "Yes", "Yes", "Yes", "Yes"],
                ].map((row, i) => (
                  <tr key={i} className="even:bg-gray-100">
                    {row.map((cell, j) => (
                      <td key={j} className="p-3 border border-gray-200 text-center">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold mb-2">Chapter Summary</h3>
          <p className="mb-4">
            Use the HTML <code>&lt;link&gt;</code> element to insert a favicon on your website. Make sure to store the favicon file in an accessible path.
          </p>
        </section>

        <div className="flex justify-end mt-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Html_Favicon;