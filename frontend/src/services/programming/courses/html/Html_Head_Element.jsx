import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Head_Element = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const exampleHtmlDoc = `<!DOCTYPE html>
<html>
<head>
  <title>A Meaningful Page Title</title>
</head>
<body>

The content of the document......

</body>
</html>`;

  const styleExample = `<style>
  body {background-color: powderblue;}
  h1 {color: red;}
  p {color: blue;}
</style>`;

  const linkExample = `<link rel="stylesheet" href="mystyle.css">`;

  const metaExample = `<meta charset="UTF-8">
<meta name="description" content="Free Web tutorials">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="author" content="John Doe">`;

  const scriptExample = `<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
}
</script>`;

  const baseExample = `<head>
<base href="https://www.w3schools.com/" target="_blank">
</head>

<body>
<img src="images/stickman.gif" width="24" height="39" alt="Stickman">
<a href="tags/tag_base.asp">HTML base Tag</a>
</body>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML - The Head Element</h1>

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
          <h2 className="text-3xl font-bold mb-4">The &lt;head&gt; Element</h2>
          <p className="mb-4">The <code>&lt;head&gt;</code> element is a container for metadata and is placed between the <code>&lt;html&gt;</code> and <code>&lt;body&gt;</code> tags.</p>
          <p className="mb-4">It usually contains: <code>&lt;title&gt;</code>, <code>&lt;style&gt;</code>, <code>&lt;meta&gt;</code>, <code>&lt;link&gt;</code>, <code>&lt;script&gt;</code>, and <code>&lt;base&gt;</code>.</p>
          <p className="mb-6">Metadata is not displayed, but used by browsers, search engines, and services.</p>

          {/* Example HTML Doc */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example of a Simple HTML Document:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{exampleHtmlDoc}</code>
            </pre>
            <button
              onClick={() => handleCopy(exampleHtmlDoc)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === exampleHtmlDoc ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* <style> Example */}
          <h3 className="text-2xl font-semibold mb-2">The &lt;style&gt; Element</h3>
          <p className="mb-6">Defines CSS styles inside the document head.</p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{styleExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(styleExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === styleExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* <link> Example */}
          <h3 className="text-2xl font-semibold mb-2">The &lt;link&gt; Element</h3>
          <p className="mb-6">Used to link external resources like stylesheets.</p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{linkExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(linkExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === linkExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* <meta> Example */}
          <h3 className="text-2xl font-semibold mb-2">The &lt;meta&gt; Element</h3>
          <p className="mb-6">Provides metadata such as character set, description, keywords, author, and viewport settings.</p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{metaExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(metaExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === metaExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* <script> Example */}
          <h3 className="text-2xl font-semibold mb-2">The &lt;script&gt; Element</h3>
          <p className="mb-6">Used to define client-side JavaScript.</p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{scriptExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(scriptExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === scriptExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* <base> Example */}
          <h3 className="text-2xl font-semibold mb-2">The &lt;base&gt; Element</h3>
          <p className="mb-6">Specifies a base URL and/or target for all relative URLs on the page. Only one <code>&lt;base&gt;</code> tag is allowed.</p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{baseExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(baseExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === baseExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Html_Head_Element;
