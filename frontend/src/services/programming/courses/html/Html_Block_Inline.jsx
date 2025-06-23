import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Block_Inline = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const blockExample = `<p>Hello World</p>\n<div>Hello World</div>`;
  const inlineExample = `<span>Hello World</span>`;
  const divExample = `<div style="background-color:black;color:white;padding:20px;">
  <h2>London</h2>
  <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
</div>`;
  const spanExample = `<p>My mother has <span style="color:blue;font-weight:bold;">blue</span> eyes and my father has <span style="color:darkolivegreen;font-weight:bold;">dark green</span> eyes.</p>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Block & Inline Elements</h1>

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

          {/* Introduction */}
          <p className="mb-4">
            Every HTML element has a default display value, depending on what type of element it is.
          </p>
          <p className="mb-6">
            The two most common display values are <strong>block</strong> and <strong>inline</strong>.
          </p>

          {/* Block Elements */}
          <h2 className="text-3xl font-bold mb-4">Block-level Elements</h2>
          <p className="mb-4">
            A block-level element always starts on a new line and stretches the full width available.
          </p>
          <p className="mb-4">
            Examples include: <code>&lt;p&gt;</code>, <code>&lt;div&gt;</code>
          </p>
          <p className="mb-6">
            These elements are used to structure the layout of a web page.
          </p>

          {/* Block Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{blockExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(blockExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === blockExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Inline Elements */}
          <h2 className="text-3xl font-bold mb-4">Inline Elements</h2>
          <p className="mb-4">
            An inline element does not start on a new line and only takes up as much width as necessary.
          </p>
          <p className="mb-6">
            Common examples include: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>
          </p>

          {/* Inline Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{inlineExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(inlineExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === inlineExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Div Element */}
          <h3 className="text-2xl font-semibold mb-2">The &lt;div&gt; Element</h3>
          <p className="mb-4">
            The <code>&lt;div&gt;</code> element is a block-level container used to group HTML content for styling or scripting.
          </p>

          {/* Div Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{divExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(divExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === divExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Span Element */}
          <h3 className="text-2xl font-semibold mb-2">The &lt;span&gt; Element</h3>
          <p className="mb-4">
            The <code>&lt;span&gt;</code> element is an inline container used to style or manipulate specific parts of text.
          </p>

          {/* Span Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{spanExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(spanExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === spanExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Summary */}
          <h3 className="text-2xl font-semibold mb-2">Chapter Summary</h3>
          <ul className="list-disc ml-6 mb-6">
            <li>A <strong>block-level</strong> element starts on a new line and takes up the full width.</li>
            <li>An <strong>inline</strong> element does not start on a new line and only takes the necessary width.</li>
            <li><code>&lt;div&gt;</code> is commonly used as a block container.</li>
            <li><code>&lt;span&gt;</code> is used to style or group inline text.</li>
          </ul>

          {/* HTML Tags Table */}
          <h3 className="text-2xl font-semibold mb-2">HTML Tags</h3>
          <table className="w-full border border-gray-300 text-left mb-10">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Tag</th>
                <th className="border px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">&lt;div&gt;</td>
                <td className="border px-4 py-2">Defines a section in a document (block-level)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">&lt;span&gt;</td>
                <td className="border px-4 py-2">Defines a section in a document (inline)</td>
              </tr>
            </tbody>
          </table>

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

export default Html_Block_Inline;
