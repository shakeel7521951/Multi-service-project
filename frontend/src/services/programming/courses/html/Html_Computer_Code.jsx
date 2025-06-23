import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Computer_Code = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExample = `x = 5;
y = 6;
z = x + y;`;

  const kbdExample = `<p>Save the document by pressing <kbd>Ctrl + S</kbd></p>`;

  const sampExample = `<p>Message from my computer:</p>
<p><samp>File not found.<br>Press F1 to continue</samp></p>`;

  const codePreExample = `<pre>
<code>
x = 5;
y = 6;
z = x + y;
</code>
</pre>`;

  const varExample = `<p>The area of a triangle is: 1/2 x <var>b</var> x <var>h</var>, where <var>b</var> is the base, and <var>h</var> is the vertical height.</p>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Computer Code Elements</h1>

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

          {/* <code> element */}
          <h2 className="text-3xl font-bold mb-4">HTML &lt;code&gt; For Computer Code</h2>
          <p className="mb-4">
            The HTML <code>&lt;code&gt;</code> element is used to define a piece of computer code. The content is displayed in the browser’s default monospace font.
          </p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{codeExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(codeExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition"
            >
              {copiedCode === codeExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* <kbd> element */}
          <h2 className="text-3xl font-bold mb-4">HTML &lt;kbd&gt; For Keyboard Input</h2>
          <p className="mb-4">
            The <code>&lt;kbd&gt;</code> tag defines keyboard input, displayed in a monospace font.
          </p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{kbdExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(kbdExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition"
            >
              {copiedCode === kbdExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* <samp> element */}
          <h2 className="text-3xl font-bold mb-4">HTML &lt;samp&gt; For Program Output</h2>
          <p className="mb-4">
            The <code>&lt;samp&gt;</code> tag is used to define sample output from a program.
          </p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{sampExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(sampExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition"
            >
              {copiedCode === sampExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* <pre><code> combined */}
          <h2 className="text-3xl font-bold mb-4">Preserve Line Breaks with &lt;pre&gt; & &lt;code&gt;</h2>
          <p className="mb-4">
            To preserve whitespace and line-breaks in your code, wrap the <code>&lt;code&gt;</code> inside a <code>&lt;pre&gt;</code>.
          </p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{codePreExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(codePreExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition"
            >
              {copiedCode === codePreExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* <var> element */}
          <h2 className="text-3xl font-bold mb-4">HTML &lt;var&gt; For Variables</h2>
          <p className="mb-4">
            The <code>&lt;var&gt;</code> tag defines variables in programming or mathematics, usually shown in italic.
          </p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{varExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(varExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition"
            >
              {copiedCode === varExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Summary */}
          <h2 className="text-3xl font-bold mb-4">Chapter Summary</h2>
          <ul className="list-disc list-inside space-y-2 mb-10">
            <li><code>&lt;kbd&gt;</code> defines keyboard input</li>
            <li><code>&lt;samp&gt;</code> defines sample output from a computer program</li>
            <li><code>&lt;code&gt;</code> defines a piece of computer code</li>
            <li><code>&lt;var&gt;</code> defines a variable in programming or math</li>
            <li><code>&lt;pre&gt;</code> defines preformatted text</li>
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

export default Html_Computer_Code;
