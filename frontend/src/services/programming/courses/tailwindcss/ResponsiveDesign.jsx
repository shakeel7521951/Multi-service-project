import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ResponsiveDesign = () => {
  const [copied, setCopied] = useState(false);

  // Example snippets
  const examples = {
    breakpoints: `<div class="bg-red-400 sm:bg-green-400 md:bg-blue-400 lg:bg-purple-400 xl:bg-pink-400 p-6 text-white">
  Resize the screen to see background change
</div>`,

    typography: `<h1 class="text-base sm:text-lg md:text-2xl lg:text-4xl font-bold">
  Responsive Heading
</h1>
<p class="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
  Text size adjusts with screen size.
</p>`,

    spacing: `<div class="p-2 sm:p-4 md:p-8 lg:p-12 bg-blue-500 text-white">
  Responsive Padding
</div>`,

    flex: `<div class="flex flex-col sm:flex-row gap-4">
  <div class="bg-green-500 p-4 rounded text-white">Box 1</div>
  <div class="bg-red-500 p-4 rounded text-white">Box 2</div>
  <div class="bg-purple-500 p-4 rounded text-white">Box 3</div>
</div>`,

    grid: `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <div class="bg-blue-500 p-4 text-white rounded">1</div>
  <div class="bg-green-500 p-4 text-white rounded">2</div>
  <div class="bg-red-500 p-4 text-white rounded">3</div>
  <div class="bg-purple-500 p-4 text-white rounded">4</div>
</div>`,
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
          <h1 className="text-3xl font-extrabold mb-2">
            Tailwind CSS – Responsive Design
          </h1>
          <p className="text-gray-600 text-lg">
            Learn how to build responsive layouts with Tailwind’s powerful
            breakpoint system and utility-first classes.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft /> Core Concepts
          </button>
        </div>

        {/* Section 1: Breakpoints */}
        <section>
          <h2 className="text-2xl font-bold mb-3">1. Responsive Breakpoints</h2>
          <p className="text-gray-700 mb-4">
            Tailwind uses a mobile-first approach. Utilities are applied from a
            breakpoint and up. For example, <code>md:</code> applies styles on
            medium screens <strong>and larger</strong>.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.breakpoints}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.breakpoints)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>sm:</code> → min-width: 640px</li>
            <li><code>md:</code> → min-width: 768px</li>
            <li><code>lg:</code> → min-width: 1024px</li>
            <li><code>xl:</code> → min-width: 1280px</li>
            <li><code>2xl:</code> → min-width: 1536px</li>
          </ul>
        </section>

        {/* Section 2: Typography */}
        <section>
          <h2 className="text-2xl font-bold mb-3">2. Responsive Typography</h2>
          <p className="text-gray-700 mb-4">
            You can scale text size across breakpoints for headings and body
            text. This ensures readability on all devices.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.typography}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.typography)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>text-base</code> → default small screens</li>
            <li><code>md:text-2xl</code> → medium screens: larger headings</li>
            <li><code>lg:text-4xl</code> → large screens: very large text</li>
          </ul>
        </section>

        {/* Section 3: Spacing */}
        <section>
          <h2 className="text-2xl font-bold mb-3">3. Responsive Spacing</h2>
          <p className="text-gray-700 mb-4">
            Use responsive utilities to control padding, margin, and gap at
            different screen sizes.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.spacing}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.spacing)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>p-2</code> → small padding on mobile</li>
            <li><code>sm:p-4</code> → larger padding on small screens</li>
            <li><code>md:p-8</code> → more spacious on tablets</li>
            <li><code>lg:p-12</code> → generous padding on desktops</li>
          </ul>
        </section>

        {/* Section 4: Responsive Flexbox */}
        <section>
          <h2 className="text-2xl font-bold mb-3">4. Responsive Flexbox</h2>
          <p className="text-gray-700 mb-4">
            Change flex direction, alignment, and spacing depending on the
            screen size.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.flex}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.flex)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>flex-col</code> → stacks items vertically by default</li>
            <li><code>sm:flex-row</code> → changes to horizontal on small screens</li>
            <li><code>gap-4</code> → spacing between flex items</li>
          </ul>
        </section>

        {/* Section 5: Responsive Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-3">5. Responsive Grid</h2>
          <p className="text-gray-700 mb-4">
            Adjust the number of columns at different breakpoints for adaptive
            layouts.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.grid}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.grid)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>grid-cols-1</code> → single column on mobile</li>
            <li><code>sm:grid-cols-2</code> → two columns on small screens</li>
            <li><code>md:grid-cols-3</code> → three columns on tablets</li>
          </ul>
        </section>

        {/* Navigation Bottom */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft /> Core Concepts
          </button>
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Flexbox <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveDesign;
