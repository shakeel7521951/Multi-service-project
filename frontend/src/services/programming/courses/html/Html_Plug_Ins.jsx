import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Plug_Ins = () => {
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

  const objectHtmlExample = `<object width="100%" height="500px" data="snippet.html"></object>`;
  const objectImageExample = `<object data="audi.jpeg"></object>`;
  const embedImageExample = `<embed src="audi.jpeg">`;
  const embedHtmlExample = `<embed width="100%" height="500px" src="snippet.html">`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Plug-ins</h1>

        <div className="flex justify-between mb-10">
          <button
            type="button"
            aria-label="Previous"
            className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer"
          >
            <FaChevronLeft />
            Previous
          </button>
          <button
            type="button"
            aria-label="Next"
            className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer"
          >
            Next
            <FaChevronRight />
          </button>
        </div>

        <section className="text-gray-800">

          {/* Plug-ins Overview */}
          <h2 className="text-3xl font-bold mb-4">Plug-ins</h2>
          <p className="mb-4">
            Plug-ins were designed to be used for many different purposes:
          </p>
          <ul className="list-disc ml-6 mb-6 space-y-1">
            <li>To run Java applets</li>
            <li>To run Microsoft ActiveX controls</li>
            <li>To display Flash movies</li>
            <li>To display maps</li>
            <li>To scan for viruses</li>
            <li>To verify a bank ID</li>
          </ul>

          {/* <object> Element */}
          <h3 className="text-2xl font-semibold mb-2">The &lt;object&gt; Element</h3>
          <p className="mb-4">
            The <code>&lt;object&gt;</code> element is supported by all browsers and defines an embedded object within an HTML document.
          </p>

          {/* Object HTML Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-8">
            <h4 className="font-bold mb-3">Example:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{objectHtmlExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(objectHtmlExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === objectHtmlExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Object Image Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h4 className="font-bold mb-3">Example (Image Embed):</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{objectImageExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(objectImageExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === objectImageExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* <embed> Element */}
          <h3 className="text-2xl font-semibold mb-2">The &lt;embed&gt; Element</h3>
          <p className="mb-4">
            The <code>&lt;embed&gt;</code> element is supported in all major browsers and is used to define an embedded object within an HTML document.
          </p>

          {/* Embed Image Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-8">
            <h4 className="font-bold mb-3">Example (Image Embed):</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{embedImageExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(embedImageExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === embedImageExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Embed HTML Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h4 className="font-bold mb-3">Example (HTML Embed):</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{embedHtmlExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(embedHtmlExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === embedHtmlExample ? "Copied!" : "Copy Code"}
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

export default Html_Plug_Ins;
