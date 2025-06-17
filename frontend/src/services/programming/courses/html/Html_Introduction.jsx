import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Introduction = () => {
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

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-6">HTML Introduction</h1>

        {/* Navigation Buttons */}
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

        <p className="mb-6">
          HTML is the standard markup language for creating Web pages.
        </p>

        <hr className="border-gray-200 mb-8" />

        {/* What is HTML */}
        <h1 className="text-4xl font-bold mb-6">What is HTML?</h1>
        <ul className="list-disc ml-[50px] space-y-4 text-gray-800 mb-6">
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

        <hr className="border-gray-200 mb-8" />

        {/* Try it Yourself Example */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">A Simple HTML Document</h2>
          <p className="text-gray-800 mb-4">
            With our "Try it Yourself" editor, you can edit the HTML code and view the result:
          </p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
            <h2 className="font-bold mb-3">Example:</h2>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{htmlExample}</code>
            </pre>
            <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-bold rounded py-2 px-10 mt-3 transition cursor-pointer">
              Try It Yourself »
            </button>
          </div>
        </div>

        <hr className="border-gray-200 mb-8" />

        {/* Example Explanation */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Example Explained</h2>
          <ul className="list-disc pl-3 ml-[50px] space-y-4 text-gray-800 mb-6">
            {[
              {
                tag: "<!DOCTYPE html>",
                desc: " declaration defines that this document is an HTML5 document",
              },
              {
                tag: "<html>",
                desc: " element is the root element of an HTML page",
              },
              {
                tag: "<head>",
                desc: " element contains meta information about the HTML page",
              },
              {
                tag: "<title>",
                desc: " element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)",
              },
              {
                tag: "<body>",
                desc: " element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.",
              },
              {
                tag: "<h1>",
                desc: " element defines a large heading",
              },
              {
                tag: "<p>",
                desc: " element defines a paragraph",
              },
            ].map((item, index) => (
              <li key={index}>
                The <span className="text-[#DC143C] font-mono">{item.tag}</span>
                {item.desc}
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-gray-200 mb-5" />

        {/* HTML Element Section */}
        <div className="mb-8">
          <div className="bg-white py-10 px-4 md:px-8 text-gray-800">
            <h2 className="text-3xl font-bold mb-4">What is an HTML Element?</h2>
            <p className="mb-4">
              An HTML element is defined by a start tag, some content, and an end tag:
            </p>

            <div className="text-xl font-mono mb-6">
              <code>
                <span className="text-[#0000CD]">&lt;</span>
                <span className="text-[#A52A2A]">tagname</span>
                <span className="text-[#0000CD]">&gt;</span>{" "}
                Content goes here...{" "}
                <span className="text-[#0000CD]">&lt;/</span>
                <span className="text-[#A52A2A]">tagname</span>
                <span className="text-[#0000CD]">&gt;</span>
              </code>
            </div>

            <p className="mb-4">
              The HTML element is everything from the start tag to the end tag:
            </p>

            <div className="text-xl font-mono space-y-2">
              <div>
                <span className="text-[#0000CD]">&lt;</span>
                <span className="text-[#A52A2A]">h1</span>
                <span className="text-[#0000CD]">&gt;</span>
                My First Heading
                <span className="text-[#0000CD]">&lt;/</span>
                <span className="text-[#A52A2A]">h1</span>
                <span className="text-[#0000CD]">&gt;</span>
              </div>
              <div>
                <span className="text-[#0000CD]">&lt;</span>
                <span className="text-[#A52A2A]">p</span>
                <span className="text-[#0000CD]">&gt;</span>
                My first paragraph.
                <span className="text-[#0000CD]">&lt;/</span>
                <span className="text-[#A52A2A]">p</span>
                <span className="text-[#0000CD]">&gt;</span>
              </div>
            </div>
          </div>

          {/* HTML Element Table */}
          <div className="overflow-x-auto mt-2">
            <table className="min-w-full border border-gray-200 text-sm text-left text-gray-800">
              <thead className="text-black">
                <tr>
                  <th className="px-6 py-3 border">Start tag</th>
                  <th className="px-6 py-3 border">Element content</th>
                  <th className="px-6 py-3 border">End tag</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#E7E9EB]">
                  <td className="px-6 py-3 border">
                    <code>&lt;h1&gt;</code>
                  </td>
                  <td className="px-6 py-3 border">My First Heading</td>
                  <td className="px-6 py-3 border">
                    <code>&lt;/h1&gt;</code>
                  </td>
                </tr>
                <tr className="hover:bg-[#E7E9EB]">
                  <td className="px-6 py-3 border">
                    <code>&lt;p&gt;</code>
                  </td>
                  <td className="px-6 py-3 border">My first paragraph.</td>
                  <td className="px-6 py-3 border">
                    <code>&lt;/p&gt;</code>
                  </td>
                </tr>
                <tr className="bg-[#E7E9EB]">
                  <td className="px-6 py-3 border">
                    <code>&lt;br&gt;</code>
                  </td>
                  <td className="px-6 py-3 border">none</td>
                  <td className="px-6 py-3 border">none</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Html_Introduction;
