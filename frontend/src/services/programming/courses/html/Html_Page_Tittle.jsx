import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Page_Title = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const titleExample = `<!DOCTYPE html>
<html>
<head>
  <title>HTML Tutorial</title>
</head>
<body>

The content of the document......

</body>
</html>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Page Title</h1>

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
          {/* Introduction */}
          <h2 className="text-3xl font-bold mb-4">HTML Page Title</h2>
          <p className="mb-4">
            Every web page should have a page title to describe the purpose or content of the page.
          </p>

          {/* The Title Element */}
          <h3 className="text-2xl font-semibold mb-2">The &lt;title&gt; Element</h3>
          <p className="mb-4">
            The <code>&lt;title&gt;</code> element defines the title of the HTML document.
          </p>
          <p className="mb-6">
            It is placed inside the <code>&lt;head&gt;</code> section and is used in browser tabs, favorites, and search engine results.
          </p>

          {/* Title Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{titleExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(titleExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === titleExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* What is a Good Title */}
          <h3 className="text-2xl font-semibold mb-2">What is a Good Title?</h3>
          <p className="mb-4">
            A good page title should clearly describe the content and purpose of the page.
          </p>
          <p className="mb-4">
            It is also crucial for <strong>Search Engine Optimization (SEO)</strong>, as search engines use the title to rank pages.
          </p>

          {/* Summary of title usage */}
          <h3 className="text-2xl font-semibold mb-2">Uses of the &lt;title&gt; Tag:</h3>
          <ul className="list-disc list-inside mb-10">
            <li>Displays a title in the browser toolbar</li>
            <li>Provides a title when the page is added to bookmarks/favorites</li>
            <li>Appears in search engine result titles</li>
          </ul>

          {/* Title Tag Table */}
          <h3 className="text-2xl font-semibold mb-2">HTML Title Tag</h3>
          <table className="w-full text-left border border-gray-300">
            <thead>
              <tr className="bg-[#f2f2f2]">
                <th className="border px-4 py-2">Tag</th>
                <th className="border px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">
                  <code>&lt;title&gt;</code>
                </td>
                <td className="border px-4 py-2">Defines the title of the document</td>
              </tr>
            </tbody>
          </table>
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

export default Html_Page_Title;

