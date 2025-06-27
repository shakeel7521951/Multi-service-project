import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Web_Api = () => {
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

  const apiExamples = `YouTube API - Allows you to display videos on a web site.
Twitter API - Allows you to display Tweets on a web site.
Facebook API - Allows you to display Facebook info on a web site.`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML - What is a Web API?</h1>

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

          {/* What is a Web API */}
        <div className="bg-[#D9EEE1] p-5 rounded-2xl mb-6">
  <h2 className="text-3xl font-bold mb-4">What is a Web API?</h2>
  <p className="mb-4">A Web API is a developer's dream.</p>
  <ul className="list-disc list-inside space-y-1">
    <li>It can extend the functionality of the browser</li>
    <li>It can greatly simplify complex functions</li>
    <li>It can provide easy syntax to complex code</li>
  </ul>
</div>

          {/* API Definition */}
          <h3 className="text-2xl font-semibold mb-2">What is Web API?</h3>
          <p className="mb-4">
            API stands for <strong>Application Programming Interface</strong>.
          </p>
          <p className="mb-6">
            An API is some kind of interface that includes a set of functions and subroutines that allow programmers to access specific features or data of an application, operating system, or other services.
          </p>

          {/* Third Party APIs */}
          <h3 className="text-2xl font-semibold mb-2">Third Party APIs</h3>
          <p className="mb-4">
            Third party APIs are not built into your browser.
          </p>
          <p className="mb-4">
            To use these APIs, you will have to download the code from the Web.
          </p>
          <p className="mb-4 font-semibold">Examples:</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{apiExamples}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(apiExamples)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === apiExamples ? "Copied!" : "Copy Code"}
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

export default Html_Web_Api;
