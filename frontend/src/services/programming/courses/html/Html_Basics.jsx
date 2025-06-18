import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Basics = () => {
  const examples = {
    htmlDoc: `<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`,

    doctype: `<!DOCTYPE html>`,

    headings: `<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>`,

    paragraphs: `<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`,

    link: `<a href="https://www.w3schools.com">This is a link</a>`,

    image: `<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">`,
  };

  const documentStructure = [
    {
      text: "All HTML documents must start with a document type declaration: ",
      tag: "<!DOCTYPE html>",
    },
    {
      text: "The HTML document itself begins with ",
      tag: "<html>",
      textEnd: " and ends with ",
      tagEnd: "</html>",
    },
    {
      text: "The visible part of the HTML document is between ",
      tag: "<body>",
      textEnd: " and ",
      tagEnd: "</body>",
    },
  ];

  // Track copied block index
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2s
  };

  const renderExampleBlock = (title, code, index) => (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
        <h2 className="font-bold mb-3">Example:</h2>
        <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
          <code>{code}</code>
        </pre>
        <button
          onClick={() => handleCopy(code, index)}
          className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-bold rounded py-2 px-10 mt-3 transition cursor-pointer"
        >
          {copiedIndex === index ? "Copied!" : "Copy Code"}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-6">HTML Basic Examples</h1>

        {/* Navigation Top */}
        <div className="flex justify-between mb-6">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded hover:bg-[#03945f] transition cursor-pointer">
            <FaChevronLeft />
            Previous
          </button>
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded hover:bg-[#03945f] transition cursor-pointer">
            Next
            <FaChevronRight />
          </button>
        </div>

        <p className="mb-4">
          In this chapter we will explore some fundamental HTML elements. Don’t
          worry if you haven’t encountered these tags before – this is a great
          place to start!
        </p>

        <hr className="border-gray-200 my-8" />

        {/* Document Structure */}
        <h2 className="text-4xl font-bold mb-6">HTML Documents</h2>
        <ul className="space-y-4 text-gray-800 mb-8">
          {documentStructure.map((item, idx) => (
            <li key={idx}>
              {item.text}
              <span className="text-[#DC143C] font-mono">{item.tag}</span>
              {item.textEnd && (
                <>
                  {item.textEnd}
                  <span className="text-[#DC143C] font-mono">{item.tagEnd}</span>
                </>
              )}
            </li>
          ))}
        </ul>

        {renderExampleBlock("A Simple HTML Document", examples.htmlDoc, 0)}

        {/* DOCTYPE */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            The <span className="text-[#DC143C] font-mono">&lt;!DOCTYPE&gt;</span> Declaration
          </h2>
          <ul className="space-y-4 text-gray-800 mb-6">
            <li>
              <span className="text-[#DC143C] font-mono">&lt;!DOCTYPE&gt;</span> declares the document type and ensures browsers render pages correctly.
            </li>
            <li>It must appear at the top of the document before any other tags.</li>
            <li>It is not case-sensitive.</li>
            <li>For HTML5, the declaration is:</li>
          </ul>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{examples.doctype}</code>
            </pre>
          </div>
        </div>

        {renderExampleBlock("HTML Headings", examples.headings, 1)}
        <ul className="space-y-4 text-gray-800 mb-8 text-base">
          <li>
            Headings are defined using <code className="text-[#DC143C]">&lt;h1&gt;</code> to{" "}
            <code className="text-[#DC143C]">&lt;h6&gt;</code>. <code>&lt;h1&gt;</code> is the most important.
          </li>
        </ul>

        {renderExampleBlock("HTML Paragraphs", examples.paragraphs, 2)}
        <ul className="space-y-4 text-gray-800 mb-8 text-base">
          <li>
            Paragraphs are defined using the{" "}
            <code className="text-[#DC143C]">&lt;p&gt;</code> tag.
          </li>
        </ul>

        {renderExampleBlock("HTML Links", examples.link, 3)}
        <ul className="space-y-4 text-gray-800 mb-8 text-base">
          <li>
            Links are defined using the <code className="text-[#DC143C]">&lt;a&gt;</code> tag and the{" "}
            <code className="text-[#DC143C]">href</code> attribute.
          </li>
        </ul>

        {renderExampleBlock("HTML Images", examples.image, 4)}
        <ul className="space-y-4 text-gray-800 mb-8 text-base">
          <li>
            Images are defined with the <code className="text-[#DC143C]">&lt;img&gt;</code> tag. Attributes include:
            <ul className="list-disc ml-6 mt-2">
              <li><code className="text-[#DC143C]">src</code> – image source path</li>
              <li><code className="text-[#DC143C]">alt</code> – alternate text</li>
              <li><code className="text-[#DC143C]">width</code> and <code className="text-[#DC143C]">height</code></li>
            </ul>
          </li>
        </ul>

        {/* Bottom Right Navigation */}
        <div className="flex justify-end mt-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded hover:bg-[#03945f] transition cursor-pointer">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Html_Basics;
