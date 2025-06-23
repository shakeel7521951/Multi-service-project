import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Class = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const classExample1 = `<!DOCTYPE html>
<html>
<head>
<style>
.city {
  background-color: tomato;
  color: white;
  border: 2px solid black;
  margin: 20px;
  padding: 20px;
}
</style>
</head>
<body>

<div class="city">
  <h2>London</h2>
  <p>London is the capital of England.</p>
</div>

<div class="city">
  <h2>Paris</h2>
  <p>Paris is the capital of France.</p>
</div>

<div class="city">
  <h2>Tokyo</h2>
  <p>Tokyo is the capital of Japan.</p>
</div>

</body>
</html>`;

  const classExample2 = `<!DOCTYPE html>
<html>
<head>
<style>
.note {
  font-size: 120%;
  color: red;
}
</style>
</head>
<body>

<h1>My <span class="note">Important</span> Heading</h1>
<p>This is some <span class="note">important</span> text.</p>

</body>
</html>`;

  const classSyntaxExample = `<!DOCTYPE html>
<html>
<head>
<style>
.city {
  background-color: tomato;
  color: white;
  padding: 10px;
}
</style>
</head>
<body>

<h2 class="city">London</h2>
<p>London is the capital of England.</p>

<h2 class="city">Paris</h2>
<p>Paris is the capital of France.</p>

<h2 class="city">Tokyo</h2>
<p>Tokyo is the capital of Japan.</p>

</body>
</html>`;

  const multipleClassExample = `<h2 class="city main">London</h2>
<h2 class="city">Paris</h2>
<h2 class="city">Tokyo</h2>`;

  const sharedClassExample = `<h2 class="city">Paris</h2>
<p class="city">Paris is the capital of France</p>`;

  const jsClassExample = `<script>
function myFunction() {
  var x = document.getElementsByClassName("city");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}
</script>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Class Attribute</h1>

        {/* Introduction */}
        <section className="text-gray-800 mb-10">
          <p className="mb-4">
            The HTML <code>class</code> attribute is used to specify a class for an HTML element.
          </p>
          <p className="mb-4">
            Multiple elements can share the same class for reusable styling or scripting.
          </p>
          <p className="mb-6">
            It is often used with CSS and JavaScript to apply styles or behaviors.
          </p>
        </section>

        {/* Example 1 */}
        <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-8">
          <h3 className="font-bold mb-3">Example 1: Multiple Elements with Same Class</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
            <code>{classExample1}</code>
          </pre>
          <button
            onClick={() => handleCopy(classExample1)}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
          >
            {copiedCode === classExample1 ? "Copied!" : "Copy Code"}
          </button>
        </div>

        {/* Example 2 */}
        <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-8">
          <h3 className="font-bold mb-3">Example 2: Class on &lt;span&gt; Elements</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
            <code>{classExample2}</code>
          </pre>
          <button
            onClick={() => handleCopy(classExample2)}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
          >
            {copiedCode === classExample2 ? "Copied!" : "Copy Code"}
          </button>
        </div>

        {/* Syntax */}
        <h3 className="text-2xl font-semibold mb-3">Syntax for Class</h3>
        <p className="mb-6">
          Define a class in CSS with a period (<code>.</code>) followed by the class name, then use it in HTML via the <code>class</code> attribute.
        </p>

        {/* Syntax Example */}
        <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-8">
          <h3 className="font-bold mb-3">Syntax Example</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
            <code>{classSyntaxExample}</code>
          </pre>
          <button
            onClick={() => handleCopy(classSyntaxExample)}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
          >
            {copiedCode === classSyntaxExample ? "Copied!" : "Copy Code"}
          </button>
        </div>

        {/* Multiple Classes */}
        <h3 className="text-2xl font-semibold mb-3">Multiple Classes</h3>
        <p className="mb-6">
          Elements can have multiple classes separated by spaces, and will inherit styles from all defined classes.
        </p>

        <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-8">
          <h3 className="font-bold mb-3">Example: Multiple Classes</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
            <code>{multipleClassExample}</code>
          </pre>
          <button
            onClick={() => handleCopy(multipleClassExample)}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
          >
            {copiedCode === multipleClassExample ? "Copied!" : "Copy Code"}
          </button>
        </div>

        {/* Shared Class Across Elements */}
        <h3 className="text-2xl font-semibold mb-3">Shared Class Across Elements</h3>
        <p className="mb-6">
          Different element types can share the same class to maintain consistent styling.
        </p>

        <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-8">
          <h3 className="font-bold mb-3">Example: Shared Class</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
            <code>{sharedClassExample}</code>
          </pre>
          <button
            onClick={() => handleCopy(sharedClassExample)}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
          >
            {copiedCode === sharedClassExample ? "Copied!" : "Copy Code"}
          </button>
        </div>

        {/* JavaScript with class */}
        <h3 className="text-2xl font-semibold mb-3">Use of Class Attribute in JavaScript</h3>
        <p className="mb-6">
          JavaScript can access elements by class name using <code>getElementsByClassName()</code>.
        </p>

        <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-16">
          <h3 className="font-bold mb-3">Example: Hide All Elements with Specific Class</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
            <code>{jsClassExample}</code>
          </pre>
          <button
            onClick={() => handleCopy(jsClassExample)}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
          >
            {copiedCode === jsClassExample ? "Copied!" : "Copy Code"}
          </button>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            <FaChevronLeft />
            Previous
          </button>
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Html_Class;
