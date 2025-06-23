import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_JavaScript = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const example1 = `<button onclick="document.getElementById('demo').innerHTML = Date()">Click me to display Date and Time</button>`;
  const example2 = `<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>`;
  const example3 = `document.getElementById("demo").innerHTML = "Hello JavaScript!";`;
  const example4 = `document.getElementById("demo").style.fontSize = "25px";
document.getElementById("demo").style.color = "red";
document.getElementById("demo").style.backgroundColor = "yellow";`;
  const example5 = `document.getElementById("image").src = "picture.gif";`;
  const example6 = `<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>
<noscript>Sorry, your browser does not support JavaScript!</noscript>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML JavaScript</h1>

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
          <p className="mb-4">JavaScript makes HTML pages more dynamic and interactive.</p>

          {/* Example 1 */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-6">
            <h3 className="font-bold mb-3">Example: My First JavaScript</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{example1}</code>
            </pre>
            <button
              onClick={() => handleCopy(example1)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === example1 ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">The HTML &lt;script&gt; Tag</h3>
          <p className="mb-4">
            The HTML <code>&lt;script&gt;</code> tag is used to define a client-side script (JavaScript).
          </p>
          <p className="mb-4">
            The <code>&lt;script&gt;</code> element either contains script statements or points to an external script file through the <code>src</code> attribute.
          </p>
          <p className="mb-4">
            Common uses for JavaScript are image manipulation, form validation, and dynamic changes of content.
          </p>
          <p className="mb-4">
            To select an HTML element, JavaScript most often uses the <code>document.getElementById()</code> method.
          </p>

          {/* Example 2 */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-6">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{example2}</code>
            </pre>
            <button
              onClick={() => handleCopy(example2)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === example2 ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">A Taste of JavaScript</h3>
          <p className="mb-4">Here are some examples of what JavaScript can do:</p>

          {/* Example 3 */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-6">
            <h3 className="font-bold mb-3">Example: Change Content</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{example3}</code>
            </pre>
            <button
              onClick={() => handleCopy(example3)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === example3 ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Example 4 */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-6">
            <h3 className="font-bold mb-3">Example: Change Styles</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{example4}</code>
            </pre>
            <button
              onClick={() => handleCopy(example4)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === example4 ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Example 5 */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-6">
            <h3 className="font-bold mb-3">Example: Change Attributes</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{example5}</code>
            </pre>
            <button
              onClick={() => handleCopy(example5)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === example5 ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">The HTML &lt;noscript&gt; Tag</h3>
          <p className="mb-4">
            The <code>&lt;noscript&gt;</code> tag defines alternate content to be displayed to users who have disabled scripts or have browsers that don't support them.
          </p>

          {/* Example 6 */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-6">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{example6}</code>
            </pre>
            <button
              onClick={() => handleCopy(example6)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === example6 ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Final Next Button */}
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

export default Html_JavaScript;
