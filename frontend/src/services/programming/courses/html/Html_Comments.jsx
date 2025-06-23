import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Comments = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const commentSyntax = `<!-- Write your comments here -->`;

  const basicCommentExample = `<!-- This is a comment -->
<p>This is a paragraph.</p>
<!-- Remember to add more information here -->`;

  const hiddenContentExample = `<p>This is a paragraph.</p>

<!-- <p>This is another paragraph </p> -->

<p>This is a paragraph too.</p>`;

  const hiddenBlockExample = `<p>This is a paragraph.</p>
<!--
<p>Look at this cool image:</p>
<img border="0" src="pic_trulli.jpg" alt="Trulli">
-->
<p>This is a paragraph too.</p>`;

  const inlineCommentExample = `<p>This <!-- great text --> is a paragraph.</p>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Comments</h1>

        <section className="text-gray-800">
          <p className="mb-4">
            HTML comments are not displayed in the browser, but they can help document your HTML source code.
          </p>

          <h2 className="text-3xl font-bold mb-4">HTML Comment Tag</h2>
          <p className="mb-4">
            You can add comments to your HTML source by using the following syntax:
          </p>

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

          {/* Syntax Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Syntax:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{commentSyntax}</code>
            </pre>
            <button
              onClick={() => handleCopy(commentSyntax)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === commentSyntax ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h2 className="text-2xl font-semibold mb-2">Add Comments</h2>
          <p className="mb-6">
            With comments, you can place notifications and reminders in your HTML code.
          </p>

          {/* Basic Comment Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{basicCommentExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(basicCommentExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === basicCommentExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h2 className="text-2xl font-semibold mb-2">Hide Content</h2>
          <p className="mb-4">
            Comments can be used to hide content. This can be helpful if you want to temporarily hide sections of HTML.
          </p>

          {/* Hide Content Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{hiddenContentExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(hiddenContentExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === hiddenContentExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <p className="mb-6">
            You can also hide more than one line. Everything between <code>&lt;!--</code> and <code>--&gt;</code> will be hidden from the display.
          </p>

          {/* Hide Block Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{hiddenBlockExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(hiddenBlockExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === hiddenBlockExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h2 className="text-2xl font-semibold mb-2">Hide Inline Content</h2>
          <p className="mb-6">
            Comments can also be used to hide parts of the content in the middle of an HTML element.
          </p>

          {/* Inline Comment Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{inlineCommentExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(inlineCommentExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === inlineCommentExample ? "Copied!" : "Copy Code"}
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

export default Html_Comments;
