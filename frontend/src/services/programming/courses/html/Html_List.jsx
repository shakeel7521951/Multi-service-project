import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Lists = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const unorderedListExample = `<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`;

  const orderedListExample = `<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>`;

  const descriptionListExample = `<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Lists</h1>

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
            HTML lists allow web developers to group a set of related items in lists.
          </p>

          {/* Example Overview */}
          <h2 className="text-2xl font-semibold mb-4">Example Overview</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>An unordered HTML list: Item, Item, Item, Item</li>
            <li>An ordered HTML list: First item, Second item, Third item, Fourth item</li>
          </ul>

          {/* Unordered List */}
          <h3 className="text-2xl font-semibold mb-2">Unordered HTML List</h3>
          <p className="mb-4">
            An unordered list starts with the <code>&lt;ul&gt;</code> tag. Each list item starts with the <code>&lt;li&gt;</code> tag.
          </p>
          <p className="mb-6">
            The list items will be marked with bullets (small black circles) by default:
          </p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h4 className="font-bold mb-3">Example:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{unorderedListExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(unorderedListExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === unorderedListExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Ordered List */}
          <h3 className="text-2xl font-semibold mb-2">Ordered HTML List</h3>
          <p className="mb-4">
            An ordered list starts with the <code>&lt;ol&gt;</code> tag. Each list item starts with the <code>&lt;li&gt;</code> tag.
          </p>
          <p className="mb-6">
            The list items will be marked with numbers by default:
          </p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h4 className="font-bold mb-3">Example:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{orderedListExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(orderedListExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === orderedListExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Description List */}
          <h3 className="text-2xl font-semibold mb-2">HTML Description Lists</h3>
          <p className="mb-4">
            HTML also supports description lists. A description list is a list of terms, with a description of each term.
          </p>
          <p className="mb-6">
            The <code>&lt;dl&gt;</code> tag defines the description list, the <code>&lt;dt&gt;</code> tag defines the term (name), and the <code>&lt;dd&gt;</code> tag describes each term:
          </p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h4 className="font-bold mb-3">Example:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{descriptionListExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(descriptionListExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === descriptionListExample ? "Copied!" : "Copy Code"}
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

export default Html_Lists;
