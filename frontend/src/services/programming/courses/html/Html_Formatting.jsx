import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Formatting = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const boldExample = `<b>This text is bold</b>`;
  const italicExample = `<i>This text is italic</i>`;
  const subSuperExample = `<sub>This is subscript</sub> and <sup>This is superscript</sup>`;
  const bExample = `<b>This text is bold</b>`;
  const strongExample = `<strong>This text is important!</strong>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Text Formatting</h1>

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

          <h2 className="text-3xl font-bold mb-4">HTML Text Formatting</h2>
          <p className="mb-4">
            HTML contains several elements for defining text with a special meaning.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Example</h3>
          <div className="flex flex-col gap-3 mb-10">
            <p><b>This text is bold</b></p>
            <p><i>This text is italic</i></p>
            <p>
              <sub>This is subscript</sub> and <sup>this is superscript</sup>
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">HTML Formatting Elements</h3>
          <p className="mb-6">
            Formatting elements were designed to display special types of text:
          </p>
          <ul className="list-disc list-inside mb-10 space-y-1 text-gray-700">
            <li><code>&lt;b&gt;</code> - Bold text</li>
            <li><code>&lt;strong&gt;</code> - Important text</li>
            <li><code>&lt;i&gt;</code> - Italic text</li>
            <li><code>&lt;em&gt;</code> - Emphasized text</li>
            <li><code>&lt;mark&gt;</code> - Marked text</li>
            <li><code>&lt;small&gt;</code> - Smaller text</li>
            <li><code>&lt;del&gt;</code> - Deleted text</li>
            <li><code>&lt;ins&gt;</code> - Inserted text</li>
            <li><code>&lt;sub&gt;</code> - Subscript text</li>
            <li><code>&lt;sup&gt;</code> - Superscript text</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">HTML &lt;b&gt; and &lt;strong&gt; Elements</h3>
          <p className="mb-4">
            The HTML <code>&lt;b&gt;</code> element defines bold text, without any extra importance.
          </p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h4 className="font-bold mb-3">Example:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{bExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(bExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === bExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <p className="mb-4">
            The HTML <code>&lt;strong&gt;</code> element defines text with strong importance. The content inside is typically displayed in bold.
          </p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h4 className="font-bold mb-3">Example:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{strongExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(strongExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === strongExample ? "Copied!" : "Copy Code"}
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

export default Html_Formatting;

