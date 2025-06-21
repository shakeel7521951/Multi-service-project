import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Layout = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const layoutExample = `Cities
London
Paris
Tokyo

London
London is the capital city of England. It is the most populous city of the United Kingdom, with a metropolitan area of over 13 million inhabitants.

Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.

Footer`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          HTML Layout Elements and Techniques
        </h1>

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
            Websites often display content in multiple columns (like a magazine or a newspaper).
          </p>

          {/* Layout Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{layoutExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(layoutExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === layoutExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* HTML Semantic Elements */}
          <h2 className="text-3xl font-semibold mb-4">HTML Layout Elements</h2>
          <p className="mb-4">
            HTML has several semantic elements that define the different parts of a web page:
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-800">
            <li><code>&lt;header&gt;</code> - Defines a header for a document or a section</li>
            <li><code>&lt;nav&gt;</code> - Defines a set of navigation links</li>
            <li><code>&lt;section&gt;</code> - Defines a section in a document</li>
            <li><code>&lt;article&gt;</code> - Defines independent, self-contained content</li>
            <li><code>&lt;aside&gt;</code> - Defines content aside from the content (like a sidebar)</li>
            <li><code>&lt;footer&gt;</code> - Defines a footer for a document or a section</li>
            <li><code>&lt;details&gt;</code> - Defines additional details that the user can open and close on demand</li>
            <li><code>&lt;summary&gt;</code> - Defines a heading for the <code>&lt;details&gt;</code> element</li>
          </ul>

          {/* Layout Techniques */}
          <h2 className="text-3xl font-semibold mb-4">HTML Layout Techniques</h2>
          <p className="mb-4">
            There are four different techniques to create multicolumn layouts. Each technique has its pros and cons:
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-800">
            <li>CSS framework</li>
            <li>CSS float property</li>
            <li>CSS flexbox</li>
            <li>CSS grid</li>
          </ul>

          {/* Float Layout */}
          <h3 className="text-2xl font-semibold mb-2">CSS Float Layout</h3>
          <p className="mb-4">
            Float is easy to learn — just remember how the float and clear properties work.
          </p>
          <p className="mb-6">
            <strong>Disadvantages:</strong> Floating elements are tied to the document flow, which may harm flexibility.
          </p>

          {/* Float Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{layoutExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(layoutExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === layoutExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Flexbox Layout */}
          <h3 className="text-2xl font-semibold mb-2">CSS Flexbox Layout</h3>
          <p className="mb-6">
            Flexbox ensures that elements behave predictably when the layout adapts to various screen sizes and devices.
          </p>

          {/* Flex Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{layoutExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(layoutExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === layoutExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Grid Layout */}
          <h3 className="text-2xl font-semibold mb-2">CSS Grid Layout</h3>
          <p className="mb-6">
            The CSS Grid Layout Module offers a grid-based layout system, making it easier to build responsive and flexible web pages.
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

export default Html_Layout;

