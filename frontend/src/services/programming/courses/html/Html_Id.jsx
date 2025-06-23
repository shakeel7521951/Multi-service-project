// At the top with other imports
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Id = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const idExample = `
<!DOCTYPE html>
<html>
<head>
<style>
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}
</style>
</head>
<body>

<h1 id="myHeader">My Header</h1>

</body>
</html>`.trim();

  const classVsIdExample = `
<style>
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}

.city {
  background-color: tomato;
  color: white;
  padding: 10px;
}
</style>

<h1 id="myHeader">My Cities</h1>

<h2 class="city">London</h2>
<p>London is the capital of England.</p>

<h2 class="city">Paris</h2>
<p>Paris is the capital of France.</p>

<h2 class="city">Tokyo</h2>
<p>Tokyo is the capital of Japan.</p>`.trim();

  const bookmarkExample = `
<h2 id="C4">Chapter 4</h2>

<a href="#C4">Jump to Chapter 4</a>
<a href="html_demo.html#C4">Jump to Chapter 4 from another page</a>`.trim();

  const jsExample = `
<script>
function displayResult() {
  document.getElementById("myHeader").innerHTML = "Have a nice day!";
}
</script>`.trim();

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML id Attribute</h1>

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

          <p className="mb-4">The HTML <code>id</code> attribute is used to specify a unique id for an HTML element.</p>
          <p className="mb-4">You cannot have more than one element with the same id in an HTML document.</p>
          <p className="mb-6">The id attribute is used to point to specific CSS styles or interact with elements via JavaScript.</p>

          {/* ID Attribute Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example (CSS with id):</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{idExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(idExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === idExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">Difference Between Class and ID</h3>
          <p className="mb-6">A class can be shared by multiple elements, while an id must be unique on the page.</p>

          {/* Class vs ID Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{classVsIdExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(classVsIdExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === classVsIdExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Bookmarks */}
          <h3 className="text-2xl font-semibold mb-2">HTML Bookmarks with ID and Links</h3>
          <p className="mb-6">You can use the <code>id</code> attribute to create bookmarks for specific sections on a webpage.</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{bookmarkExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(bookmarkExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === bookmarkExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* JavaScript Example */}
          <h3 className="text-2xl font-semibold mb-2">Using the id Attribute in JavaScript</h3>
          <p className="mb-6">JavaScript can access and manipulate HTML elements using <code>document.getElementById()</code>.</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example (JavaScript):</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{jsExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(jsExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === jsExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Summary */}
          <h3 className="text-2xl font-semibold mb-2">Chapter Summary</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>The <code>id</code> attribute specifies a unique ID for an element.</li>
            <li>It must be unique within an HTML document.</li>
            <li>Used with CSS and JavaScript to style or select specific elements.</li>
            <li>Case-sensitive in value.</li>
            <li>Used to create bookmarks in a page.</li>
            <li>Accessible in JavaScript via <code>getElementById()</code>.</li>
          </ul>
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

export default Html_Id;

