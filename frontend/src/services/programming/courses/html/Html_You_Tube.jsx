import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_You_Tube = () => {
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

  const paragraphExample = `<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`;

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

  const hrExample = `<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr>
<h2>This is heading 2</h2>
<p>This is some other text.</p>
<hr>`;

  const preExample = `<pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</pre>`;

  const brExample = `<p>This is<br>a paragraph<br>with line breaks.</p>`;

  const iframeDefault = `<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>`;

  const iframeAutoplay = `<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
</iframe>`;

  const iframeLoop = `<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
</iframe>`;

  const iframeControls = `<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
</iframe>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Paragraphs & Related Elements</h1>

        <div className="flex justify-between mb-10">
          <button
            type="button"
            aria-label="Previous"
            className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer"
          >
            <FaChevronLeft />
            Previous
          </button>
          <button
            type="button"
            aria-label="Next"
            className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer"
          >
            Next
            <FaChevronRight />
          </button>
        </div>

        <section className="text-gray-800">
          {/* HTML Paragraphs */}
          <h2 className="text-3xl font-bold mb-4">HTML Paragraphs</h2>
          <p className="mb-4">A paragraph always starts on a new line and is usually a block of text.</p>
          <p className="mb-4">The HTML <code>&lt;p&gt;</code> element defines a paragraph.</p>
          <p className="mb-6">Browsers automatically add some white space (a margin) before and after a paragraph.</p>

          {/* Paragraph Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{paragraphExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(paragraphExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === paragraphExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* HTML Display Behavior */}
          <h3 className="text-2xl font-semibold mb-2">HTML Display Behavior</h3>
          <p className="mb-4">You cannot be sure how HTML will be displayed across different screen sizes or window resizing.</p>
          <p className="mb-4">Browsers automatically remove extra spaces and lines in your HTML code when displaying the page.</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{paragraphDisplayExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(paragraphDisplayExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === paragraphDisplayExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Horizontal Rule */}
          <h3 className="text-2xl font-semibold mb-2">HTML Horizontal Rules</h3>
          <p className="mb-4"><code>&lt;hr&gt;</code> defines a thematic break, often displayed as a horizontal line.</p>
          <p className="mb-6">It's used to separate content or indicate a change in the HTML page.</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{hrExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(hrExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === hrExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Preformatted Text */}
          <h3 className="text-2xl font-semibold mb-2">The HTML &lt;pre&gt; Element</h3>
          <p className="mb-4">The <code>&lt;pre&gt;</code> element displays preformatted text, preserving spaces and line breaks.</p>
          <p className="mb-6">It usually uses a fixed-width font like Courier.</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{preExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(preExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === preExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Line Breaks */}
          <h3 className="text-2xl font-semibold mb-2">HTML Line Breaks</h3>
          <p className="mb-6"><code>&lt;br&gt;</code> inserts a line break without starting a new paragraph.</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{brExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(brExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === brExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* YouTube Section */}
          <h2 className="text-3xl font-bold mb-4">HTML YouTube Videos</h2>
          <p className="mb-4">To embed a YouTube video:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-800">
            <li>Upload to YouTube and get the video ID</li>
            <li>Use an <code>&lt;iframe&gt;</code> tag with <code>src</code> set to the video</li>
            <li>Customize with attributes and parameters</li>
          </ul>

          {/* Default YouTube Embed */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{iframeDefault}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(iframeDefault)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === iframeDefault ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Autoplay & Muted */}
          <h3 className="text-2xl font-semibold mb-2">YouTube - Autoplay + Muted</h3>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{iframeAutoplay}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(iframeAutoplay)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === iframeAutoplay ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Loop */}
          <h3 className="text-2xl font-semibold mb-2">YouTube - Loop Forever</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-800">
            <li><code>loop=0</code> – play once</li>
            <li><code>loop=1</code> – loop forever</li>
          </ul>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{iframeLoop}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(iframeLoop)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === iframeLoop ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Controls */}
          <h3 className="text-2xl font-semibold mb-2">YouTube - Controls</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-800">
            <li><code>controls=1</code> (default) – show controls</li>
            <li><code>controls=0</code> – hide controls</li>
          </ul>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{iframeControls}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(iframeControls)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === iframeControls ? "Copied!" : "Copy Code"}
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

export default Html_You_Tube;
