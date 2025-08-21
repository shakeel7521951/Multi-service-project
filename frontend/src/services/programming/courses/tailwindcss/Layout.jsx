import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Layout = () => {
  const [copied, setCopied] = useState(false);

  const examples = {
    margin: `<div class="bg-blue-500 text-white p-4 m-4 rounded">Margin Example</div>`,
    padding: `<div class="bg-green-500 text-white p-8 rounded">Padding Example</div>`,
    widthHeight: `<div class="bg-red-500 text-white w-64 h-32 flex items-center justify-center rounded">
  Fixed width & height
</div>`,
    boxSizing: `<div class="bg-purple-500 text-white p-4 border-4 box-border rounded">
  Box border included in size
</div>
<div class="bg-pink-500 text-white p-4 border-4 box-content rounded mt-2">
  Box border added outside content
</div>`,
    borders: `<div class="border-4 border-blue-500 p-4 rounded">Thick Border</div>
<div class="border-2 border-green-500 border-dashed p-4 rounded mt-2">Dashed Border</div>
<div class="border-t-4 border-red-500 p-4 rounded mt-2">Top Border Only</div>`,
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
            Tailwind CSS – Layout & Box Model
          </h1>
          <p className="text-gray-600 text-lg">
            Learn how to control spacing, sizing, and borders with Tailwind's
            layout and box model utilities. Master margin, padding, width,
            height, box-sizing, and borders for structured layouts.
          </p>
        </header>

        {/* Navigation */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Section 1: Margin */}
        <section>
          <h2 className="text-2xl font-bold mb-3">1. Margin</h2>
          <p className="text-gray-700 mb-4">
            Control the spacing outside elements with <code className="bg-gray-100 px-1">m-{`[size]`}</code> classes.
            Use <code>m-4</code> for uniform margin, <code>mx-2</code> for horizontal, or <code>my-6</code> for vertical spacing.
          </p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.margin}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.margin)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>bg-blue-500</code> → background color blue (500 shade).</li>
            <li><code>text-white</code> → makes text white for contrast.</li>
            <li><code>p-4</code> → padding on all sides.</li>
            <li><code>m-4</code> → margin on all sides.</li>
            <li><code>rounded</code> → rounded corners.</li>
          </ul>
        </section>

        {/* Section 2: Padding */}
        <section>
          <h2 className="text-2xl font-bold mb-3">2. Padding</h2>
          <p className="text-gray-700 mb-4">
            Control the spacing inside elements with <code className="bg-gray-100 px-1">p-{`[size]`}</code> classes.
            You can use <code>p-4</code> for all sides, <code>px-6</code> for horizontal, or <code>py-2</code> for vertical padding.
          </p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.padding}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.padding)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>bg-green-500</code> → green background.</li>
            <li><code>text-white</code> → white text color.</li>
            <li><code>p-8</code> → padding 2rem (large spacing inside box).</li>
            <li><code>rounded</code> → rounded corners for smooth edges.</li>
          </ul>
        </section>

        {/* Section 3: Width & Height */}
        <section>
          <h2 className="text-2xl font-bold mb-3">3. Width & Height</h2>
          <p className="text-gray-700 mb-4">
            Control element dimensions with <code className="bg-gray-100 px-1">w-{`[size]`}</code> and <code className="bg-gray-100 px-1">h-{`[size]`}</code>.
            Tailwind provides fixed, fractional, and full sizes (e.g., <code>w-64</code>, <code>w-1/2</code>, <code>h-full</code>).
          </p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.widthHeight}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.widthHeight)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>bg-red-500</code> → red background.</li>
            <li><code>w-64</code> → fixed width (16rem).</li>
            <li><code>h-32</code> → fixed height (8rem).</li>
            <li><code>flex</code> → enables flexbox layout.</li>
            <li><code>items-center</code> → vertically centers content.</li>
            <li><code>justify-center</code> → horizontally centers content.</li>
            <li><code>rounded</code> → smooth rounded corners.</li>
          </ul>
        </section>

        {/* Section 4: Box Sizing */}
        <section>
          <h2 className="text-2xl font-bold mb-3">4. Box Sizing</h2>
          <p className="text-gray-700 mb-4">
            Control how width and height are calculated with <code className="bg-gray-100 px-1">box-border</code> or <code className="bg-gray-100 px-1">box-content</code>.
            <strong>box-border</strong> includes padding & border in size, <strong>box-content</strong> only counts content.
          </p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.boxSizing}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.boxSizing)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>box-border</code> → includes padding & border in total size.</li>
            <li><code>box-content</code> → excludes border/padding, only content counts.</li>
            <li><code>border-4</code> → sets border thickness.</li>
            <li><code>bg-purple-500 / bg-pink-500</code> → different background colors for contrast.</li>
            <li><code>mt-2</code> → margin top spacing for separation.</li>
          </ul>
        </section>

        {/* Section 5: Borders */}
        <section>
          <h2 className="text-2xl font-bold mb-3">5. Borders</h2>
          <p className="text-gray-700 mb-4">
            Add borders with <code className="bg-gray-100 px-1">border</code> classes. Control width, color, and style with <code>border-2</code>, <code>border-red-500</code>, <code>border-dashed</code>, and specific sides like <code>border-t-4</code>.
          </p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.borders}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.borders)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>border-4</code> → thick border width.</li>
            <li><code>border-blue-500</code> → border color blue.</li>
            <li><code>border-dashed</code> → dashed border style.</li>
            <li><code>border-t-4</code> → applies border only to the top.</li>
            <li><code>p-4</code> → padding inside the bordered box.</li>
            <li><code>rounded</code> → smooth rounded edges.</li>
            <li><code>mt-2</code> → margin top spacing for stacked elements.</li>
          </ul>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next: Flexbox
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Layout;
