import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Online_Editor = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
      })
      .catch(() => {
        alert("Failed to copy. Please copy manually.");
      });
  };

  const paragraphExample = `<p>This is a paragraph.</p>\n<p>This is another paragraph.</p>`;

  const paragraphDisplayExample = `<p>
This paragraph
contains a lot of lines
in the source code,
but the browser
ignores it.
</p>

<p>
This paragraph
contains         a lot of spaces
in the source         code,
but the        browser
ignores it.
</p>`;

  const hrExample = `<h1>This is heading 1</h1>\n<p>This is some text.</p>\n<hr>\n<h2>This is heading 2</h2>\n<p>This is some other text.</p>\n<hr>`;

  const preExample = `<pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</pre>`;

  const brExample = `<p>This is<br>a paragraph<br>with line breaks.</p>`;

  const iframeCode = `<iframe src=\"https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default\" width=\"100%\" height=\"400\" title=\"HTML Editor\"></iframe>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Html Online Editor</h1>

        <div className="flex justify-between mb-10">
          <button type="button" aria-label="Previous" className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            <FaChevronLeft /> Previous
          </button>
          <button type="button" aria-label="Next" className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            Next <FaChevronRight />
          </button>
        </div>

        <section className="text-gray-800">
          <h2 className="text-3xl font-bold mb-4">HTML Editor</h2>
          <p className="mb-4">A Editor always starts on a new line and is usually a block of text.</p>
          <p className="mb-4">The HTML <code>&lt;p&gt;</code> element defines a paragraph.</p>
          <p className="mb-6">Browsers automatically add some white space (a margin) before and after a paragraph.</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{paragraphExample}</code>
            </pre>
            <button onClick={() => handleCopy(paragraphExample)} className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer">
              {copiedCode === paragraphExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">HTML Display Behavior</h3>
          <p className="mb-4">You cannot be sure how HTML will be displayed across different screen sizes or window resizing.</p>
          <p className="mb-4">Browsers automatically remove extra spaces and lines in your HTML code when displaying the page.</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{paragraphDisplayExample}</code>
            </pre>
            <button onClick={() => handleCopy(paragraphDisplayExample)} className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer">
              {copiedCode === paragraphDisplayExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">HTML Horizontal Rules</h3>
          <p className="mb-4">The <code>&lt;hr&gt;</code> tag defines a thematic break, often displayed as a horizontal line.</p>
          <p className="mb-6">It's used to separate content or indicate a change in the HTML page.</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{hrExample}</code>
            </pre>
            <button onClick={() => handleCopy(hrExample)} className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer">
              {copiedCode === hrExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">The HTML &lt;pre&gt; Element</h3>
          <p className="mb-4">The <code>&lt;pre&gt;</code> element displays preformatted text, preserving spaces and line breaks.</p>
          <p className="mb-6">It usually uses a fixed-width font like Courier.</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{preExample}</code>
            </pre>
            <button onClick={() => handleCopy(preExample)} className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer">
              {copiedCode === preExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">HTML Line Breaks</h3>
          <p className="mb-6">The <code>&lt;br&gt;</code> element creates a line break without starting a new paragraph.</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{brExample}</code>
            </pre>
            <button onClick={() => handleCopy(brExample)} className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer">
              {copiedCode === brExample ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* HTML Editor */}
        <section className="text-gray-800 mt-16">
          <h2 className="text-3xl font-bold mb-6">HTML Editor</h2>
          <p className="mb-4">With our online HTML editor, you can write and run <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> directly in your browser.</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Templates:</strong> Start from scratch or use ready-made templates.</li>
            <li><strong>Cloud-based:</strong> No installations required, only a browser.</li>
            <li><strong>Terminal & Log:</strong> Easily debug and troubleshoot your code.</li>
            <li><strong>File Navigator:</strong> Quickly switch between your project files.</li>
          </ul>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example: Embed a Code Editor</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{iframeCode}</code>
            </pre>
            <button onClick={() => handleCopy(iframeCode)} className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer">
              {copiedCode === iframeCode ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Share It With The World */}
        <section className="text-gray-800 mt-16">
          <h2 className="text-3xl font-bold mb-6">Share It With The World</h2>
          <p className="mb-4">Host and publish your website instantly with <strong>W3Schools Spaces</strong>.</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Free SSL Certificate:</strong> Secure and encrypted connection.</li>
            <li><strong>W3Schools Subdomain:</strong> No extra configuration required.</li>
            <li><strong>Trusted:</strong> Improves visibility and trust in search engines.</li>
          </ul>
          <p className="mb-4">Want a custom domain name? You can easily buy one or connect your existing domain to your space.</p>
        </section>

        <div className="flex justify-end mt-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            Next <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Html_Online_Editor;
