import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Styles = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const redExample = `<p style="color:red;">I am Red</p>`;
  const blueExample = `<p style="color:blue;">I am Blue</p>`;
  const bigExample = `<p style="font-size:32px;">I am Big</p>`;

  const bgColorPageExample = `<body style="background-color:powderblue;">
  <h1>This is a heading</h1>
  <p>This is a paragraph.</p>
</body>`;

  const bgColorElementsExample = `<body>
  <h1 style="background-color:powderblue;">This is a heading</h1>
  <p style="background-color:tomato;">This is a paragraph.</p>
</body>`;

  const colorExample = `<h1 style="color:blue;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>`;

  const fontsExample = `<h1 style="font-family:verdana;">This is a heading</h1>
<p style="font-family:courier;">This is a paragraph.</p>`;

  const sizeExample = `<h1 style="font-size:300%;">This is a heading</h1>
<p style="font-size:160%;">This is a paragraph.</p>`;

  const alignExample = `<h1 style="text-align:center;">Centered Heading</h1>
<p style="text-align:center;">Centered paragraph.</p>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Styles</h1>

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

          <h2 className="text-3xl font-bold mb-4">The HTML Style Attribute</h2>
          <p className="mb-6">
            The HTML <code>style</code> attribute is used to add inline styles like color, font, size, and more to an element.
          </p>

          <h3 className="text-2xl font-semibold mb-3">Examples:</h3>
          <div className="space-y-4 mb-10">
            <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
              <p style={{ color: "red" }} className="font-semibold">I am Red</p>
              <p style={{ color: "blue" }} className="font-semibold">I am Blue</p>
              <p style={{ fontSize: "32px" }} className="font-semibold">I am Big</p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-3">Style Attribute Syntax</h3>
          <p className="mb-6">
            Setting the style of an HTML element can be done with the <code>style</code> attribute.
          </p>

          {/* Background Color */}
          <h3 className="text-2xl font-semibold mb-3">Background Color</h3>
          <p className="mb-4">The CSS <code>background-color</code> property defines the background color for an HTML element.</p>

          {/* bgColorPageExample */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-6">
            <h4 className="font-bold mb-2">Set background color for the whole page:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{bgColorPageExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(bgColorPageExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === bgColorPageExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* bgColorElementsExample */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h4 className="font-bold mb-2">Set background color for specific elements:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{bgColorElementsExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(bgColorElementsExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === bgColorElementsExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Text Color */}
          <h3 className="text-2xl font-semibold mb-3">Text Color</h3>
          <p className="mb-6">
            The CSS <code>color</code> property defines the text color of an element.
          </p>

          {/* colorExample */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h4 className="font-bold mb-2">Example:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{colorExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(colorExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === colorExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Fonts */}
          <h3 className="text-2xl font-semibold mb-3">Fonts</h3>
          <p className="mb-6">
            The CSS <code>font-family</code> property defines the font to be used.
          </p>

          {/* fontsExample */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h4 className="font-bold mb-2">Example:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{fontsExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(fontsExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === fontsExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Text Size */}
          <h3 className="text-2xl font-semibold mb-3">Text Size</h3>
          <p className="mb-6">
            The CSS <code>font-size</code> property defines the size of text.
          </p>

          {/* sizeExample */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h4 className="font-bold mb-2">Example:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{sizeExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(sizeExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === sizeExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Text Alignment */}
          <h3 className="text-2xl font-semibold mb-3">Text Alignment</h3>
          <p className="mb-6">
            The CSS <code>text-align</code> property defines horizontal alignment of text.
          </p>

          {/* alignExample */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h4 className="font-bold mb-2">Example:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{alignExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(alignExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === alignExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Chapter Summary */}
          <h3 className="text-2xl font-semibold mb-3">Chapter Summary</h3>
          <ul className="list-disc ml-6 text-base text-gray-700 mb-10">
            <li>Use the <code>style</code> attribute for styling HTML elements.</li>
            <li>Use <code>background-color</code> for backgrounds.</li>
            <li>Use <code>color</code> for text colors.</li>
            <li>Use <code>font-family</code> for fonts.</li>
            <li>Use <code>font-size</code> for text sizes.</li>
            <li>Use <code>text-align</code> for text alignment.</li>
          </ul>

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

export default Html_Styles;

