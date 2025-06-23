import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Colors = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const backgroundColorExample = `<h1 style="background-color:DodgerBlue;">Hello World</h1>
<p style="background-color:Tomato;">Lorem ipsum...</p>`;

  const textColorExample = `<h1 style="color:Tomato;">Hello World</h1>
<p style="color:DodgerBlue;">Lorem ipsum...</p>
<p style="color:MediumSeaGreen;">Ut wisi enim...</p>`;

  const borderColorExample = `<h1 style="border:2px solid Tomato;">Hello World</h1>
<h1 style="border:2px solid DodgerBlue;">Hello World</h1>
<h1 style="border:2px solid Violet;">Hello World</h1>`;

  const colorValueExample = `<h1 style="background-color:rgb(255, 99, 71);">...</h1>
<h1 style="background-color:#ff6347;">...</h1>
<h1 style="background-color:hsl(9, 100%, 64%);">...</h1>

<h1 style="background-color:rgba(255, 99, 71, 0.5);">...</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 0.5);">...</h1>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Colors</h1>

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
          {/* Intro */}
          <p className="mb-4">
            HTML colors are specified using predefined names, RGB, HEX, HSL, RGBA, or HSLA values.
          </p>

          {/* Color Names */}
          <h2 className="text-3xl font-bold mt-10 mb-4">Color Names</h2>
          <p className="mb-4">
            HTML supports 140 standard color names, such as:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {["Tomato", "Orange", "DodgerBlue", "MediumSeaGreen", "Gray", "SlateBlue", "Violet", "LightGray"].map(color => (
              <div key={color} className="rounded-lg p-3 text-center text-white font-semibold shadow-md" style={{ backgroundColor: color }}>
                {color}
              </div>
            ))}
          </div>

          {/* Background Color */}
          <h2 className="text-2xl font-semibold mt-10 mb-2">Background Color</h2>
          <p className="mb-4">
            You can set the background color for HTML elements using inline styles.
          </p>
          <div className="p-4 mb-4 rounded-lg bg-blue-400 text-white font-bold">Hello World</div>
          <div className="p-4 mb-6 rounded-lg bg-red-400 text-white">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
          </div>

          {/* Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-blue-500 p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{backgroundColorExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(backgroundColorExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3"
            >
              {copiedCode === backgroundColorExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Text Color */}
          <h2 className="text-2xl font-semibold mt-10 mb-2">Text Color</h2>
          <p className="mb-4">Text color is defined with the <code>color</code> property.</p>
          <h1 className="text-2xl font-bold text-red-500 mb-2">Hello World</h1>
          <p className="text-blue-500 mb-2">Lorem ipsum dolor sit amet...</p>
          <p className="text-green-600 mb-6">Ut wisi enim ad minim veniam...</p>

          {/* Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-red-500 p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{textColorExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(textColorExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3"
            >
              {copiedCode === textColorExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Border Color */}
          <h2 className="text-2xl font-semibold mt-10 mb-2">Border Color</h2>
          <p className="mb-4">Borders can also have colors defined using CSS.</p>
          <div className="mb-2 border-2 border-red-500 rounded p-2 text-center font-bold">Hello World</div>
          <div className="mb-2 border-2 border-blue-500 rounded p-2 text-center font-bold">Hello World</div>
          <div className="mb-6 border-2 border-violet-500 rounded p-2 text-center font-bold">Hello World</div>

          {/* Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-violet-500 p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{borderColorExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(borderColorExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3"
            >
              {copiedCode === borderColorExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Color Values */}
          <h2 className="text-2xl font-semibold mt-10 mb-2">Color Values</h2>
          <p className="mb-4">
            HTML colors can also be set using RGB, HEX, HSL, RGBA, and HSLA values.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            <div className="p-4 text-center text-white font-bold rounded" style={{ backgroundColor: "rgb(255, 99, 71)" }}>
              rgb(255, 99, 71)
            </div>
            <div className="p-4 text-center text-white font-bold rounded" style={{ backgroundColor: "#ff6347" }}>
              #ff6347
            </div>
            <div className="p-4 text-center text-white font-bold rounded" style={{ backgroundColor: "hsl(9, 100%, 64%)" }}>
              hsl(9, 100%, 64%)
            </div>
            <div className="p-4 text-center text-white font-bold rounded" style={{ backgroundColor: "rgba(255, 99, 71, 0.5)" }}>
              rgba(255, 99, 71, 0.5)
            </div>
            <div className="p-4 text-center text-white font-bold rounded" style={{ backgroundColor: "hsla(9, 100%, 64%, 0.5)" }}>
              hsla(9, 100%, 64%, 0.5)
            </div>
          </div>

          {/* Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-pink-500 p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{colorValueExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(colorValueExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3"
            >
              {copiedCode === colorValueExample ? "Copied!" : "Copy Code"}
            </button>
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

export default Html_Colors;
