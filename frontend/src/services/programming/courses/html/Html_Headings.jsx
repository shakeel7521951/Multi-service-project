import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Headings = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const headingExample = `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`;

  const styledHeadingExample = `<h1 style="font-size:60px;">Heading 1</h1>`;

  const semanticExample = `<section>
  <h2>Features</h2>
  <p>We offer fast delivery, secure payments, and 24/7 support.</p>
</section>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Headings</h1>

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
          <h2 className="text-3xl font-bold mb-4">What are HTML Headings?</h2>
          <p className="mb-4">
            HTML headings are used to define the structure and hierarchy of content on a webpage.
            They range from <code>&lt;h1&gt;</code> (most important) to <code>&lt;h6&gt;</code> (least important).
          </p>

          {/* Preview */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example Preview:</h3>
            <div className="bg-white p-4 rounded border border-gray-300">
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>
              <h5>Heading 5</h5>
              <h6>Heading 6</h6>
            </div>
          </div>

          <p className="mb-2">HTML headings are defined with the &lt;h1&gt; to &lt;h6&gt; tags.</p>
          <p className="mb-6">
            Use only one <code>&lt;h1&gt;</code> per page for the main title. Subsequent headings should follow a hierarchical order.
          </p>

          {/* Code Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example Code:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{headingExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(headingExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === headingExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">Custom Font Size with CSS</h3>
          <p className="mb-2">
            Headings have default sizes in browsers. You can override them with inline or external CSS:
          </p>

          {/* Styled Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{styledHeadingExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(styledHeadingExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === styledHeadingExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">Semantic Use in Layouts</h3>
          <p className="mb-2">
            Headings are not just for size—they give **structure** to your content. Use them inside sections to describe content purpose:
          </p>

          {/* Semantic Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Semantic Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{semanticExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(semanticExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === semanticExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">Accessibility & SEO Tips</h3>
          <ul className="list-disc ml-6 text-base text-gray-700 mb-10">
            <li>Use headings in correct order (h1 → h2 → h3).</li>
            <li>Use only one <code>&lt;h1&gt;</code> per page (for main topic).</li>
            <li>Screen readers rely on headings for navigation.</li>
            <li>Search engines use headings to understand page structure.</li>
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

export default Html_Headings;
