import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Links = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const linkExample = `<a href="https://www.w3schools.com/">Visit W3Schools.com!</a>`;
  const targetExample = `<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a>`;
  const urlExample = `<h2>Absolute URLs</h2>
<p><a href="https://www.w3.org/">W3C</a></p>
<p><a href="https://www.google.com/">Google</a></p>

<h2>Relative URLs</h2>
<p><a href="html_images.asp">HTML Images</a></p>
<p><a href="/css/default.asp">CSS Tutorial</a></p>`;
  const imageLinkExample = `<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a>`;
  const emailLinkExample = `<a href="mailto:someone@example.com">Send email</a>`;
  const buttonLinkExample = `<button onclick="document.location='default.asp'">HTML Tutorial</button>`;
  const titleExample = `<a href="https://www.w3schools.com/html/" title="Go to W3Schools HTML section">Visit our HTML Tutorial</a>`;
  const moreUrlsExample = `<a href="https://www.w3schools.com/html/default.asp">HTML tutorial</a>
<a href="/html/default.asp">HTML tutorial</a>
<a href="default.asp">HTML tutorial</a>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Links</h1>

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

          <h2 className="text-3xl font-bold mb-4">HTML Links - Hyperlinks</h2>
          <p className="mb-4">HTML links are hyperlinks. Users can click on a link to jump to another document.</p>
          <p className="mb-6">When you hover over a link, the cursor changes to a hand.</p>

          <h3 className="text-2xl font-semibold mb-2">HTML Links - Syntax</h3>
          <p className="mb-4">
            The <code>&lt;a&gt;</code> tag defines a hyperlink. Example syntax:
          </p>
          <pre className="bg-[#E7E9EB] p-4 rounded whitespace-pre-wrap mb-4">&lt;a href="url"&gt;link text&lt;/a&gt;</pre>

          {/* Link Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{linkExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(linkExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition"
            >
              {copiedCode === linkExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Target Example */}
          <h3 className="text-2xl font-semibold mb-2">HTML Links - The target Attribute</h3>
          <p className="mb-4">The <code>target</code> attribute defines where to open the linked document.</p>
          <ul className="list-disc ml-6 mb-6">
            <li><code>_self</code> - Default. Opens in the same window/tab</li>
            <li><code>_blank</code> - Opens in a new window/tab</li>
            <li><code>_parent</code> - Opens in the parent frame</li>
            <li><code>_top</code> - Opens in the full body of the window</li>
          </ul>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{targetExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(targetExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition"
            >
              {copiedCode === targetExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* URL Examples */}
          <h3 className="text-2xl font-semibold mb-2">Absolute URLs vs. Relative URLs</h3>
          <p className="mb-6">Absolute URLs link to full web addresses, while relative URLs link within the same site.</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{urlExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(urlExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition"
            >
              {copiedCode === urlExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Image as Link */}
          <h3 className="text-2xl font-semibold mb-2">Use an Image as a Link</h3>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{imageLinkExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(imageLinkExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition"
            >
              {copiedCode === imageLinkExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Email Link */}
          <h3 className="text-2xl font-semibold mb-2">Link to an Email Address</h3>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{emailLinkExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(emailLinkExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition"
            >
              {copiedCode === emailLinkExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Button Link */}
          <h3 className="text-2xl font-semibold mb-2">Button as a Link</h3>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{buttonLinkExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(buttonLinkExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition"
            >
              {copiedCode === buttonLinkExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Title Attribute */}
          <h3 className="text-2xl font-semibold mb-2">Link Titles</h3>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{titleExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(titleExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition"
            >
              {copiedCode === titleExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* More URL Examples */}
          <h3 className="text-2xl font-semibold mb-2">More on Absolute & Relative URLs</h3>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{moreUrlsExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(moreUrlsExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition"
            >
              {copiedCode === moreUrlsExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

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

export default Html_Links;
