import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Canvas_Reference = () => {
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

  const canvasExample = `<canvas id="myCanvas" width="300" height="150"></canvas>
const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");`;

  const drawExample = `const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

ctx.fillRect(20, 20, 150, 100);`;

  const colorExample = `const myCanvas = document.createElement("canvas");
document.body.appendChild(myCanvas);
const ctx = myCanvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(20, 20, 150, 100);`;

  const pathExample = `const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(20, 100);
ctx.lineTo(70, 100);
ctx.stroke();`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Canvas Reference</h1>

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
        <div className="bg-[#D9EEE1] p-5 rounded-md">
          <h2 className="text-3xl font-bold mb-4">HTML &lt;canvas&gt; Element</h2>
          <p className="mb-4">
            The <code>&lt;canvas&gt;</code> element defines a bitmapped area in an HTML page.
          </p>
          <p className="mb-4">
            The Canvas API allows JavaScript to draw graphics like shapes, lines, curves, text, and images on the canvas.
          </p>
</div>
          {/* Canvas Element Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mt-6">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{canvasExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(canvasExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === canvasExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">Drawing on the Canvas</h3>
          <p className="mb-4">Use the <code>getContext("2d")</code> method to draw on the canvas.</p>

          {/* Drawing Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{drawExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(drawExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === drawExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">Using Colors</h3>
          <p className="mb-4">The <code>fillStyle</code> property sets the color used inside shapes.</p>

          {/* Color Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{colorExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(colorExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === colorExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">Drawing Paths</h3>
          <p className="mb-4">
            Use <code>beginPath()</code>, <code>moveTo()</code>, <code>lineTo()</code>, and <code>stroke()</code> to draw custom shapes.
          </p>

          {/* Path Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{pathExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(pathExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === pathExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <p className="mt-10 mb-6">
            For a complete list of canvas methods and properties (drawing, paths, text, styles, transformations, image manipulation, and compositing), refer to detailed documentation or resources like MDN Web Docs.
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

export default Html_Canvas_Reference;
