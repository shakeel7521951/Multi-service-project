import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Editors = () => {
  const [copiedButton, setCopiedButton] = useState({ code1: false, code2: false });

  const htmlExample = `<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`;

  const htmlExample2 = `<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`;

  const copyToClipboard = (key, text) => {
    navigator.clipboard.writeText(text);
    setCopiedButton((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setCopiedButton((prev) => ({ ...prev, [key]: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">HTML Editors</h1>

        {/* Navigation */}
        <div className="flex justify-between mb-8">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-4 py-2 rounded hover:bg-[#03945f] transition cursor-pointer">
            <FaChevronLeft />
            Previous
          </button>
        </div>

        {/* Step 1 Example */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Step 1: Write HTML in Notepad</h2>
          <p className="text-gray-800 mb-4">Copy the following HTML code:</p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{htmlExample}</code>
            </pre>
            <button
              onClick={() => copyToClipboard("code1", htmlExample)}
              className="mt-4 bg-[#04AA6D] text-white font-bold px-6 py-2 rounded hover:bg-[#03945f] transition cursor-pointer"
            >
              {copiedButton.code1 ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </div>

        {/* Step 2 Example */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Step 2: Try HTML Online</h2>
          <p className="text-gray-800 mb-4">Try this second example as well:</p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{htmlExample2}</code>
            </pre>
            <button
              onClick={() => copyToClipboard("code2", htmlExample2)}
              className="mt-4 bg-[#04AA6D] text-white font-bold px-6 py-2 rounded hover:bg-[#03945f] transition cursor-pointer"
            >
              {copiedButton.code2 ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </div>

        {/* Final Next Button */}
        <div className="flex justify-end mt-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-4 py-2 rounded hover:bg-[#03945f] transition cursor-pointer">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Html_Editors;
