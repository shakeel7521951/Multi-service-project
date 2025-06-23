import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Iframes = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const syntaxExample = `<iframe src="url" title="description"></iframe>`;

  const sizeExample = `<iframe src="demo_iframe.htm" height="200" width="300" title="Iframe Example"></iframe>`;

  const styleSizeExample = `<iframe src="demo_iframe.htm" style="height:200px;width:300px;" title="Iframe Example"></iframe>`;

  const borderRemoveExample = `<iframe src="demo_iframe.htm" style="border:none;" title="Iframe Example"></iframe>`;

  const borderStyledExample = `<iframe src="demo_iframe.htm" style="border:2px solid red;" title="Iframe Example"></iframe>`;

  const targetExample = `<iframe src="demo_iframe.htm" name="iframe_a" title="Iframe Example"></iframe>

<p><a href="https://www.w3schools.com" target="iframe_a">W3Schools.com</a></p>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Iframes</h1>

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
          <p className="mb-4">
            An HTML iframe is used to display a web page within another web page.
          </p>

          {/* Syntax */}
          <h2 className="text-3xl font-bold mb-4">HTML Iframe Syntax</h2>
          <p className="mb-4">
            The HTML <code>&lt;iframe&gt;</code> tag specifies an inline frame. It is used to embed another document within the current HTML document.
          </p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Syntax:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{syntaxExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(syntaxExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === syntaxExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Height & Width */}
          <h3 className="text-2xl font-semibold mb-2">Iframe - Set Height and Width</h3>
          <p className="mb-4">
            Use the <code>height</code> and <code>width</code> attributes to specify the size of the iframe.
          </p>
          <p className="mb-6">They are specified in pixels by default:</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
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

          <p className="mb-4">
            You can also use the <code>style</code> attribute with CSS:
          </p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{styleSizeExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(styleSizeExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === styleSizeExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Remove Border */}
          <h3 className="text-2xl font-semibold mb-2">Iframe - Remove the Border</h3>
          <p className="mb-4">
            By default, an iframe has a border. You can remove it with CSS:
          </p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{borderRemoveExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(borderRemoveExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === borderRemoveExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <p className="mb-4">
            You can also style the border using CSS properties:
          </p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{borderStyledExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(borderStyledExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === borderStyledExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Target Frame */}
          <h3 className="text-2xl font-semibold mb-2">Iframe - Target for a Link</h3>
          <p className="mb-4">
            An iframe can act as a target for a hyperlink using the <code>name</code> attribute in the iframe and <code>target</code> in the anchor tag.
          </p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{targetExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(targetExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === targetExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Summary */}
          <h3 className="text-2xl font-semibold mb-2">Chapter Summary</h3>
          <ul className="list-disc list-inside mb-10 space-y-2">
            <li>The HTML <code>&lt;iframe&gt;</code> tag specifies an inline frame.</li>
            <li>The <code>src</code> attribute defines the URL of the page to embed.</li>
            <li>Always include a <code>title</code> attribute for accessibility.</li>
            <li>Use <code>height</code> and <code>width</code> to set the size.</li>
            <li>Use <code>border:none;</code> to remove the border.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Html_Iframes;
