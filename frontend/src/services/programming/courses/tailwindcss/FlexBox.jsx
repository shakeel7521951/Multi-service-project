import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Flexbox = () => {
  const [copied, setCopied] = useState(false);

  const examples = {
    enableFlex: `<div class="flex bg-gray-100 p-4">
  <div class="bg-blue-500 text-white px-4 py-2 rounded">Item 1</div>
  <div class="bg-green-500 text-white px-4 py-2 rounded">Item 2</div>
</div>`,
    direction: `<div class="flex flex-col gap-2 bg-gray-100 p-4">
  <div class="bg-blue-500 text-white p-2 rounded">Item 1</div>
  <div class="bg-green-500 text-white p-2 rounded">Item 2</div>
  <div class="bg-red-500 text-white p-2 rounded">Item 3</div>
</div>`,
    wrap: `<div class="flex flex-wrap gap-2 bg-gray-100 p-4">
  <div class="bg-blue-500 text-white p-2 rounded w-32">Box 1</div>
  <div class="bg-green-500 text-white p-2 rounded w-32">Box 2</div>
  <div class="bg-red-500 text-white p-2 rounded w-32">Box 3</div>
  <div class="bg-purple-500 text-white p-2 rounded w-32">Box 4</div>
</div>`,
    justify: `<div class="flex justify-between bg-gray-100 p-4">
  <div class="bg-blue-500 text-white p-2 rounded">Start</div>
  <div class="bg-green-500 text-white p-2 rounded">Middle</div>
  <div class="bg-red-500 text-white p-2 rounded">End</div>
</div>`,
    items: `<div class="flex items-center h-32 bg-gray-100 p-4">
  <div class="bg-blue-500 text-white p-2 rounded">Aligned Center</div>
</div>`,
    gap: `<div class="flex gap-4 bg-gray-100 p-4">
  <div class="bg-blue-500 text-white p-2 rounded">A</div>
  <div class="bg-green-500 text-white p-2 rounded">B</div>
  <div class="bg-red-500 text-white p-2 rounded">C</div>
</div>`,
    order: `<div class="flex gap-2 bg-gray-100 p-4">
  <div class="order-3 bg-blue-500 text-white p-2 rounded">1st (order-3)</div>
  <div class="order-1 bg-green-500 text-white p-2 rounded">2nd (order-1)</div>
  <div class="order-2 bg-red-500 text-white p-2 rounded">3rd (order-2)</div>
</div>`,
    growShrink: `<div class="flex bg-gray-100 p-4">
  <div class="flex-grow bg-blue-500 text-white p-2 rounded">Grows to fill space</div>
  <div class="bg-green-500 text-white p-2 rounded w-32">Fixed width</div>
</div>`,
    practical: `<div class="flex flex-wrap justify-between items-center gap-4 bg-gray-100 p-4">
  <div class="bg-blue-500 text-white p-4 rounded">Logo</div>
  <div class="flex gap-4">
    <div class="bg-green-500 text-white px-3 py-2 rounded">Home</div>
    <div class="bg-red-500 text-white px-3 py-2 rounded">About</div>
    <div class="bg-purple-500 text-white px-3 py-2 rounded">Contact</div>
  </div>
</div>`
  };

  const handleCopy = (code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-extrabold mb-2">Tailwind CSS – Flexbox</h1>
          <p className="text-gray-600 text-lg">
            A complete guide to Flexbox utilities in Tailwind CSS. Each section
            includes usage examples, CSS mappings, and best practices.
          </p>
        </header>

        {/* Top Navigation */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft /> Home
          </button>
        </div>

        {/* Sections */}

        {/* Enable Flex */}
        <section>
          <h2 className="text-2xl font-bold mb-3">1. Enabling Flexbox</h2>
          <p className="text-gray-700 mb-4">
            Use <code className="bg-gray-100 px-1">flex</code> to turn a div
            into a flex container. This enables all Flexbox alignment and
            distribution utilities.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.enableFlex}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.enableFlex)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>flex</code> → sets <code>display: flex;</code></li>
          </ul>
        </section>

        {/* Direction */}
        <section>
          <h2 className="text-2xl font-bold mb-3">2. Flex Direction</h2>
          <p className="text-gray-700 mb-4">
            Control the main axis of your flex container with direction classes.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.direction}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.direction)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>flex-row</code> → children in a row (default).</li>
            <li><code>flex-col</code> → children stacked in a column.</li>
          </ul>
        </section>

        {/* Wrap */}
        <section>
          <h2 className="text-2xl font-bold mb-3">3. Flex Wrapping</h2>
          <p className="text-gray-700 mb-4">
            Use wrapping to control how flex items behave when they exceed the
            container width.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.wrap}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.wrap)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>flex-wrap</code> → items wrap to new line.</li>
            <li><code>flex-nowrap</code> → items stay on one line.</li>
          </ul>
        </section>

        {/* Justify */}
        <section>
          <h2 className="text-2xl font-bold mb-3">4. Justify Content</h2>
          <p className="text-gray-700 mb-4">
            Align items along the <b>main axis</b> using justify utilities.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.justify}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.justify)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>justify-start</code> → items at start.</li>
            <li><code>justify-center</code> → items in center.</li>
            <li><code>justify-between</code> → space between items.</li>
          </ul>
        </section>

        {/* Align Items */}
        <section>
          <h2 className="text-2xl font-bold mb-3">5. Align Items</h2>
          <p className="text-gray-700 mb-4">
            Align items along the <b>cross axis</b> (vertical by default).
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.items}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.items)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>items-start</code> → align to top.</li>
            <li><code>items-center</code> → align to center.</li>
            <li><code>items-end</code> → align to bottom.</li>
          </ul>
        </section>

        {/* Gap */}
        <section>
          <h2 className="text-2xl font-bold mb-3">6. Gap & Spacing</h2>
          <p className="text-gray-700 mb-4">
            Use <code>gap-*</code> for spacing between flex children (preferred
            over <code>space-x</code> in modern Tailwind).
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.gap}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.gap)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Order */}
        <section>
          <h2 className="text-2xl font-bold mb-3">7. Ordering</h2>
          <p className="text-gray-700 mb-4">
            Use <code>order-*</code> classes to rearrange flex items without
            changing HTML order.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.order}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.order)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Grow & Shrink */}
        <section>
          <h2 className="text-2xl font-bold mb-3">8. Flex Grow & Shrink</h2>
          <p className="text-gray-700 mb-4">
            Control how items grow or shrink relative to their siblings.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.growShrink}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.growShrink)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Practical Example */}
        <section>
          <h2 className="text-2xl font-bold mb-3">9. Practical Example</h2>
          <p className="text-gray-700 mb-4">
            Combine multiple Flexbox utilities to build real-world layouts like
            navigation bars.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.practical}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.practical)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next: Grid Layout <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Flexbox;