import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Examples = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
      })
      .catch(() => {
        alert("Failed to copy. Please copy manually.");
      });
  };

  const examples = [
    {
      title: "HTML Links",
      description: "Opens a link in a new tab.",
      code: `<a href=\"https://www.w3schools.com\" target=\"_blank\">Visit W3Schools</a>`
    },
    {
      title: "HTML Image",
      description: "Displays an image with alternate text.",
      code: `<img src=\"https://via.placeholder.com/150\" alt=\"Placeholder Image\" width=\"150\" height=\"150\">`
    },
    {
      title: "HTML Lists",
      description: "Unordered and ordered lists.",
      code: `<ul>\n  <li>Apples</li>\n  <li>Bananas</li>\n  <li>Cherries</li>\n</ul>\n\n<ol>\n  <li>Wake up</li>\n  <li>Eat breakfast</li>\n  <li>Go to work</li>\n</ol>`
    },
    {
      title: "HTML Table",
      description: "A simple table with headers and rows.",
      code: `<table border=\"1\">\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>John</td>\n    <td>25</td>\n  </tr>\n  <tr>\n    <td>Alice</td>\n    <td>30</td>\n  </tr>\n</table>`
    },
    {
      title: "HTML Form",
      description: "A basic form with name and email fields.",
      code: `<form>\n  <label for=\"name\">Name:</label>\n  <input type=\"text\" id=\"name\" name=\"name\"><br><br>\n  <label for=\"email\">Email:</label>\n  <input type=\"email\" id=\"email\" name=\"email\"><br><br>\n  <input type=\"submit\" value=\"Submit\">\n</form>`
    },
    {
      title: "HTML Button",
      description: "A clickable button that triggers JavaScript.",
      code: `<button onclick=\"alert('Button clicked!')\">Click Me</button>`
    },
    {
      title: "HTML Div and Span",
      description: "Shows difference between block and inline.",
      code: `<div style=\"background-color:lightblue;\">This is a block element</div>\n<span style=\"color:red;\">This is an inline element</span>`
    }
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Examples</h1>

        <div className="flex justify-between mb-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            <FaChevronLeft /> Previous
          </button>
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            Next <FaChevronRight />
          </button>
        </div>

        <section className="text-gray-800">
          {examples.map((example, idx) => (
            <div key={idx} className="mb-10">
              <h2 className="text-2xl font-semibold mb-2">{example.title}</h2>
              <p className="mb-4">{example.description}</p>
              <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
                <h3 className="font-bold mb-3">Example:</h3>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
                  <code>{example.code}</code>
                </pre>
                <button
                  type="button"
                  onClick={() => handleCopy(example.code)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
                >
                  {copiedCode === example.code ? "Copied!" : "Copy Code"}
                </button>
              </div>
            </div>
          ))}
        </section>

        <div className="flex justify-end mt-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            Next <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Html_Examples;
