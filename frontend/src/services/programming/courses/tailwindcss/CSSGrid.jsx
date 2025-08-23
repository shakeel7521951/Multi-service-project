import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CSSGrid = () => {
  const [copied, setCopied] = useState(false);

  const examples = {
    basicGrid: `<div class="grid grid-cols-3 gap-4">
  <div class="bg-blue-500 text-white p-4 rounded">1</div>
  <div class="bg-green-500 text-white p-4 rounded">2</div>
  <div class="bg-red-500 text-white p-4 rounded">3</div>
</div>`,
    responsiveGrid: `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div class="bg-blue-400 p-4 text-white rounded">Box 1</div>
  <div class="bg-green-400 p-4 text-white rounded">Box 2</div>
  <div class="bg-red-400 p-4 text-white rounded">Box 3</div>
  <div class="bg-yellow-400 p-4 text-white rounded">Box 4</div>
</div>`,
    rowColSpan: `<div class="grid grid-cols-4 gap-4">
  <div class="col-span-2 bg-blue-500 text-white p-4 rounded">Span 2 Columns</div>
  <div class="col-span-1 bg-green-500 text-white p-4 rounded">1 Column</div>
  <div class="col-span-1 bg-red-500 text-white p-4 rounded">1 Column</div>
  <div class="row-span-2 bg-yellow-500 text-white p-4 rounded">Span 2 Rows</div>
  <div class="bg-purple-500 text-white p-4 rounded">Box</div>
  <div class="bg-pink-500 text-white p-4 rounded">Box</div>
</div>`,
    gridAlignment: `<div class="grid grid-cols-3 gap-4 items-center justify-center h-64 bg-gray-100">
  <div class="bg-blue-500 text-white p-4 rounded">Center</div>
  <div class="bg-green-500 text-white p-4 rounded">Center</div>
  <div class="bg-red-500 text-white p-4 rounded">Center</div>
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
            Tailwind CSS – CSS Grid
          </h1>
          <p className="text-gray-600 text-lg">
            Learn how to build responsive and flexible grid layouts using Tailwind CSS utilities.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* SECTION 1: Basic Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-3">1. Basic Grid</h2>
          <p className="text-gray-700 mb-4">
            Use <code className="bg-gray-100 px-1">grid</code> to enable CSS Grid layout and <code className="bg-gray-100 px-1">grid-cols-{'{n}'}</code> to define the number of columns. Use <code className="bg-gray-100 px-1">gap-{'{n}'}</code> to control spacing.
          </p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.basicGrid}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.basicGrid)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>grid</code> → enables CSS Grid layout.</li>
            <li><code>grid-cols-3</code> → defines 3 equal-width columns.</li>
            <li><code>gap-4</code> → adds spacing between grid items.</li>
            <li><code>bg-blue-500 / bg-green-500 / bg-red-500</code> → background colors for boxes.</li>
            <li><code>text-white</code> → makes text white for contrast.</li>
            <li><code>p-4</code> → adds padding inside each box.</li>
            <li><code>rounded</code> → adds rounded corners to boxes.</li>
          </ul>
        </section>

        {/* SECTION 2: Responsive Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-3">2. Responsive Grid</h2>
          <p className="text-gray-700 mb-4">
            Tailwind allows responsive grids with prefixes like <code className="bg-gray-100 px-1">sm:</code>, <code className="bg-gray-100 px-1">md:</code>, <code className="bg-gray-100 px-1">lg:</code>, etc. Columns change based on screen size.
          </p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.responsiveGrid}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.responsiveGrid)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>grid-cols-1</code> → default: 1 column layout.</li>
            <li><code>sm:grid-cols-2</code> → 2 columns on small screens (≥640px).</li>
            <li><code>md:grid-cols-3</code> → 3 columns on medium screens (≥768px).</li>
            <li><code>lg:grid-cols-4</code> → 4 columns on large screens (≥1024px).</li>
            <li><code>gap-4</code> → consistent spacing across all breakpoints.</li>
            <li><code>bg-blue-400 / green-400 / red-400 / yellow-400</code> → background colors for each box.</li>
          </ul>
        </section>

        {/* SECTION 3: Column & Row Span */}
        <section>
          <h2 className="text-2xl font-bold mb-3">3. Column & Row Span</h2>
          <p className="text-gray-700 mb-4">
            Use <code className="bg-gray-100 px-1">col-span-{'{n}'}</code> and <code className="bg-gray-100 px-1">row-span-{'{n}'}</code> to make elements span multiple columns or rows.
          </p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.rowColSpan}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.rowColSpan)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>grid-cols-4</code> → defines 4 equal-width columns.</li>
            <li><code>col-span-2</code> → makes an item span across 2 columns.</li>
            <li><code>col-span-1</code> → item only takes 1 column.</li>
            <li><code>row-span-2</code> → makes an item span across 2 rows vertically.</li>
            <li><code>gap-4</code> → spacing between items.</li>
            <li><code>bg-blue-500 / green-500 / red-500 / yellow-500 / purple-500 / pink-500</code> → background colors for different boxes.</li>
          </ul>
        </section>

        {/* SECTION 4: Grid Alignment */}
        <section>
          <h2 className="text-2xl font-bold mb-3">4. Grid Alignment</h2>
          <p className="text-gray-700 mb-4">
            Align grid items with <code className="bg-gray-100 px-1">items-center</code>, <code className="bg-gray-100 px-1">justify-center</code>, and <code className="bg-gray-100 px-1">h-64</code> for height.
          </p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.gridAlignment}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.gridAlignment)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>grid-cols-3</code> → defines 3 equal-width columns.</li>
            <li><code>gap-4</code> → spacing between items.</li>
            <li><code>items-center</code> → aligns items vertically to the center.</li>
            <li><code>justify-center</code> → aligns items horizontally to the center.</li>
            <li><code>h-64</code> → sets grid container height to 16rem (256px).</li>
            <li><code>bg-gray-100</code> → light gray background for the container.</li>
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

export default CSSGrid;
