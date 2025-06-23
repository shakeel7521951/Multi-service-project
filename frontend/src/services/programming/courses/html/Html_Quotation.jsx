import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Quotation = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const blockquoteExample = `<p>Here is a quote from WWF's website:</p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 60 years, WWF has worked to help people and nature thrive. As the world's leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.
</blockquote>`;

  const qTagExample = `<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Quotation and Citation Elements</h1>

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
          <h2 className="text-3xl font-bold mb-4">HTML Quotation and Citation Elements</h2>
          <p className="mb-4">
            In this chapter we will go through the <code>&lt;blockquote&gt;</code>, <code>&lt;q&gt;</code>, <code>&lt;abbr&gt;</code>, <code>&lt;address&gt;</code>, <code>&lt;cite&gt;</code>, and <code>&lt;bdo&gt;</code> HTML elements.
          </p>

          {/* Intro Quote Display */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <p className="mb-3">Here is a quote from WWF's website:</p>
            <blockquote className="italic border-l-4 border-[#04AA6D] pl-4 text-gray-700">
              For 60 years, WWF has worked to help people and nature thrive. As the world's leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.
            </blockquote>
          </div>

          <h3 className="text-2xl font-semibold mb-2">HTML &lt;blockquote&gt; for Quotations</h3>
          <p className="mb-4">
            The HTML <code>&lt;blockquote&gt;</code> element defines a section that is quoted from another source.
          </p>
          <p className="mb-6">
            Browsers usually indent <code>&lt;blockquote&gt;</code> elements.
          </p>

          {/* Blockquote Code */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{blockquoteExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(blockquoteExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === blockquoteExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">HTML &lt;q&gt; for Short Quotations</h3>
          <p className="mb-4">
            The HTML <code>&lt;q&gt;</code> tag defines a short quotation.
          </p>
          <p className="mb-6">
            Browsers normally insert quotation marks around the quotation.
          </p>

          {/* Q Tag Code */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{qTagExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(qTagExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === qTagExample ? "Copied!" : "Copy Code"}
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

export default Html_Quotation;