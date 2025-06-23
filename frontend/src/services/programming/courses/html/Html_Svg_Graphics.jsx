import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Svg_Graphics = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const examples = [
    {
      label: "Example 1",
      code: `<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>`,
    },
    {
      label: "Example 2",
      code: `<svg width="400" height="120">
  <rect x="10" y="10" width="200" height="100" stroke="red" stroke-width="6" fill="blue" />
</svg>`,
    },
    {
      label: "Example 3",
      code: `<svg width="400" height="180">
  <rect x="50" y="20" rx="20" ry="20" width="150" height="150"
  style="fill:red;stroke:black;stroke-width:5;opacity:0.5" />
</svg>`,
    },
    {
      label: "Example 4",
      code: `<svg width="300" height="200">
  <polygon points="100,10 40,198 190,78 10,78 160,198"
  style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
</svg>`,
    },
    {
      label: "Example 5",
      code: `<svg height="130" width="500">
  <defs>
    <linearGradient id="grad1">
      <stop offset="0%" stop-color="yellow" />
      <stop offset="100%" stop-color="red" />
    </linearGradient>
  </defs>
  <ellipse cx="100" cy="70" rx="85" ry="55" fill="url(#grad1)" />
  <text fill="#ffffff" font-size="45" font-family="Verdana" x="50" y="86">SVG</text>
  Sorry, your browser does not support inline SVG.
</svg>`,
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML SVG Graphics</h1>

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
          <h2 className="text-3xl font-bold mb-4">What is SVG?</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>SVG stands for Scalable Vector Graphics</li>
            <li>SVG is used to define vector-based graphics for the Web</li>
            <li>SVG defines graphics in XML format</li>
            <li>Each element and attribute in SVG files can be animated</li>
            <li>SVG is a W3C recommendation</li>
            <li>SVG integrates with other standards, such as CSS, DOM, XSL, and JavaScript</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-2">&lt;svg&gt; Element</h3>
          <p className="mb-6">
            The HTML <code>&lt;svg&gt;</code> element is a container for SVG graphics.
          </p>

          {/* SVG Examples */}
          {examples.map(({ label, code }, idx) => (
            <div key={idx} className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
              <h3 className="font-bold mb-3">{label}:</h3>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
                <code>{code}</code>
              </pre>
              <button
                onClick={() => handleCopy(code)}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
              >
                {copiedCode === code ? "Copied!" : "Copy Code"}
              </button>
            </div>
          ))}

          {/* SVG vs Canvas Comparison */}
          <h3 className="text-2xl font-semibold mb-4">SVG vs Canvas</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border border-gray-300">SVG</th>
                  <th className="p-3 border border-gray-300">Canvas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-300">Resolution independent</td>
                  <td className="p-3 border border-gray-300">Resolution dependent</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-300">Support for event handlers</td>
                  <td className="p-3 border border-gray-300">No support for event handlers</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-300">Good text rendering capabilities</td>
                  <td className="p-3 border border-gray-300">Poor text rendering capabilities</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-300">Slow rendering if complex</td>
                  <td className="p-3 border border-gray-300">You can save the resulting image as .png or .jpg</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-300">Not suited for game applications</td>
                  <td className="p-3 border border-gray-300">Well suited for graphic-intensive games</td>
                </tr>
              </tbody>
            </table>
          </div>
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

export default Html_Svg_Graphics;
