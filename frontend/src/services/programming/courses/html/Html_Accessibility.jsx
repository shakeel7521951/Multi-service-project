import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Accessibility = () => {
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

  const semanticExample = `<button>Report an Error</button>`;
  const nonSemanticExample = `<div>Report an Error</div>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Accessibility</h1>

        {/* Navigation Buttons */}
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

        {/* Content Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Accessibility in HTML</h2>
          <p className="mb-4">
            Always write HTML code with accessibility in mind. Provide users with an intuitive way to navigate and interact with your site.
          </p>
          <p className="mb-6">
            A key principle of accessibility is using <strong>semantic HTML</strong> — writing code that describes the content meaningfully.
          </p>

          {/* Semantic HTML Section */}
          <h3 className="text-2xl font-semibold mb-3">Semantic HTML</h3>
          <p className="mb-4">
            Semantic HTML means using the correct HTML elements for their intended purpose. For example, if you need a button, use the <code>&lt;button&gt;</code> element instead of a generic <code>&lt;div&gt;</code>.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Semantic Example */}
            <div className="bg-[#E7E9EB] p-5 rounded-2xl">
              <h4 className="text-xl font-semibold mb-2">Semantic</h4>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
                <code>{semanticExample}</code>
              </pre>
              <button
                type="button"
                onClick={() => handleCopy(semanticExample)}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-8 mt-3 transition cursor-pointer"
              >
                {copiedCode === semanticExample ? "Copied!" : "Copy Code"}
              </button>
            </div>

            {/* Non-Semantic Example */}
            <div className="bg-[#E7E9EB] p-5 rounded-2xl">
              <h4 className="text-xl font-semibold mb-2">Non-Semantic</h4>
              <pre className="bg-white border-l-4 border-red-500 p-4 font-mono text-sm whitespace-pre-wrap rounded">
                <code>{nonSemanticExample}</code>
              </pre>
              <button
                type="button"
                onClick={() => handleCopy(nonSemanticExample)}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-8 mt-3 transition cursor-pointer"
              >
                {copiedCode === nonSemanticExample ? "Copied!" : "Copy Code"}
              </button>
            </div>
          </div>
        </section>

        {/* Final Next Button */}
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

export default Html_Accessibility;
