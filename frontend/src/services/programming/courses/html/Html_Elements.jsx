import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Elements = () => {
  const htmlExample = `<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Elements</h1>

        {/* Navigation */}
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

        {/* Intro Paragraph */}
        <p className="text-gray-800 text-base mb-6">
          An HTML element is defined by a start tag, some content, and an end tag.
        </p>

        <hr className="border-gray-200 mb-10" />

        {/* HTML Element Description */}
        <section className="text-gray-800">
          <h2 className="text-3xl font-bold mb-4">HTML Elements</h2>
          <p className="mb-4">An HTML element includes a start tag, some content, and an end tag:</p>

          <div className="text-xl font-mono bg-gray-50 p-4 rounded-lg mb-6">
            <code>
              <span className="text-[#0000CD]">&lt;</span>
              <span className="text-[#A52A2A]">tagname</span>
              <span className="text-[#0000CD]">&gt;</span> Content goes here...
              <span className="text-[#0000CD]">&lt;/</span>
              <span className="text-[#A52A2A]">tagname</span>
              <span className="text-[#0000CD]">&gt;</span>
            </code>
          </div>

          <p className="mb-4">Examples of HTML elements:</p>

          <div className="text-xl font-mono space-y-2 mb-6">
            <div>
              <span className="text-[#0000CD]">&lt;</span>
              <span className="text-[#A52A2A]">h1</span>
              <span className="text-[#0000CD]">&gt;</span> My First Heading
              <span className="text-[#0000CD]">&lt;/</span>
              <span className="text-[#A52A2A]">h1</span>
              <span className="text-[#0000CD]">&gt;</span>
            </div>
            <div>
              <span className="text-[#0000CD]">&lt;</span>
              <span className="text-[#A52A2A]">p</span>
              <span className="text-[#0000CD]">&gt;</span> My first paragraph.
              <span className="text-[#0000CD]">&lt;/</span>
              <span className="text-[#A52A2A]">p</span>
              <span className="text-[#0000CD]">&gt;</span>
            </div>
          </div>

          {/* HTML Element Table */}
          <div className="overflow-x-auto mb-10">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100 text-gray-900">
                <tr>
                  <th className="px-6 py-3 border">Start tag</th>
                  <th className="px-6 py-3 border">Element content</th>
                  <th className="px-6 py-3 border">End tag</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#E7E9EB]">
                  <td className="px-6 py-3 border"><code>&lt;h1&gt;</code></td>
                  <td className="px-6 py-3 border">My First Heading</td>
                  <td className="px-6 py-3 border"><code>&lt;/h1&gt;</code></td>
                </tr>
                <tr>
                  <td className="px-6 py-3 border"><code>&lt;p&gt;</code></td>
                  <td className="px-6 py-3 border">My first paragraph.</td>
                  <td className="px-6 py-3 border"><code>&lt;/p&gt;</code></td>
                </tr>
                <tr className="bg-[#E7E9EB]">
                  <td className="px-6 py-3 border"><code>&lt;br&gt;</code></td>
                  <td className="px-6 py-3 border">none</td>
                  <td className="px-6 py-3 border">none</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* What is HTML Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">What is HTML?</h2>
          <ul className="list-disc ml-10 space-y-3 text-gray-800">
            {[
              "HTML stands for Hyper Text Markup Language",
              "HTML is the standard markup language for creating Web pages",
              "HTML describes the structure of a Web page",
              "HTML consists of a series of elements",
              "HTML elements tell the browser how to display the content",
              'HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.',
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Nested HTML Elements */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Nested HTML Elements</h2>

          <p className="text-gray-800 mb-4">
            HTML elements can be nested (this means that elements can contain other elements).
          </p>

          <p className="text-gray-800 mb-2">
            All HTML documents consist of nested HTML elements.
          </p>

          <p className="text-gray-800 mb-4">
            The following example contains four HTML elements:{" "}
            <span className="text-[#DC143C] font-mono">&lt;html&gt;</span>,{" "}
            <span className="text-[#DC143C] font-mono">&lt;body&gt;</span>,{" "}
            <span className="text-[#DC143C] font-mono">&lt;h1&gt;</span>, and{" "}
            <span className="text-[#DC143C] font-mono">&lt;p&gt;</span>.
          </p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{htmlExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Example Explanation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Example Explained</h2>
          <ul className="list-disc ml-10 space-y-3 text-gray-800">
            {[
              { tag: "<!DOCTYPE html>", desc: " declaration defines that this document is an HTML5 document." },
              { tag: "<html>", desc: " element is the root element of an HTML page." },
              { tag: "<head>", desc: " element contains meta information about the HTML page." },
              { tag: "<title>", desc: " element specifies a title for the HTML page." },
              { tag: "<body>", desc: " element defines the document's body." },
              { tag: "<h1>", desc: " element defines a large heading." },
              { tag: "<p>", desc: " element defines a paragraph." },
            ].map((item, index) => (
              <li key={index}>
                The <span className="text-[#DC143C] font-mono">{item.tag}</span>
                {item.desc}
              </li>
            ))}
          </ul>
        </section>

        {/* Bottom Right Next Button */}
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

export default Html_Elements;

