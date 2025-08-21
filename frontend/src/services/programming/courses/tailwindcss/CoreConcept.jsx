import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CoreConcept = () => {
  const [copied, setCopied] = useState(false);

  // 🔹 Example snippets
  const examples = {
    utility: `<p class="text-xl font-bold text-blue-600">
  Tailwind is Utility-First!
</p>`,
    responsive: `<div class="bg-red-400 sm:bg-green-400 md:bg-blue-400 lg:bg-purple-400 xl:bg-pink-400 p-6 text-white">
  Resize the screen to see background change
</div>`,
    flex: `<div class="flex space-x-4">
  <div class="bg-blue-500 text-white px-4 py-2 rounded">Box 1</div>
  <div class="bg-green-500 text-white px-4 py-2 rounded">Box 2</div>
  <div class="bg-red-500 text-white px-4 py-2 rounded">Box 3</div>
</div>`,
    grid: `<div class="grid grid-cols-3 gap-4">
  <div class="bg-blue-500 text-white p-4 rounded">1</div>
  <div class="bg-green-500 text-white p-4 rounded">2</div>
  <div class="bg-red-500 text-white p-4 rounded">3</div>
</div>`,
    typography: `<h1 class="text-4xl font-extrabold text-gray-800">
  Typography Example
</h1>
<p class="text-lg text-gray-600">
  Tailwind gives you full control of font size, weight, and color.
</p>`,
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
        {/* 🔹 Header */}
        <header>
          <h1 className="text-3xl font-extrabold mb-2">
            Tailwind CSS – Core Concepts
          </h1>
          <p className="text-gray-600 text-lg">
            A detailed guide to mastering Tailwind’s utility-first classes, with
            examples and explanations for every major concept.
          </p>
        </header>

        {/* 🔹 Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* 🔹 SECTION 1: Utility-First Classes */}
        <section>
          <h2 className="text-2xl font-bold mb-3">1. Utility-First Classes</h2>
          <p className="text-gray-700 mb-4">
            Tailwind CSS uses <strong>utility classes</strong> like{" "}
            <code className="bg-gray-100 px-1">text-xl</code>,{" "}
            <code className="bg-gray-100 px-1">font-bold</code>, and{" "}
            <code className="bg-gray-100 px-1">bg-blue-600</code> to apply styles
            directly in your markup. This avoids writing custom CSS and speeds
            up development.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.utility}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.utility)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li>
              <code>text-xl</code> → sets font size to <b>extra-large</b>.
            </li>
            <li>
              <code>font-bold</code> → makes text <b>bold</b>.
            </li>
            <li>
              <code>text-blue-600</code> → applies a <b>blue</b> color shade.
            </li>
          </ul>
        </section>

        {/* 🔹 SECTION 2: Responsive Design */}
        <section>
          <h2 className="text-2xl font-bold mb-3">2. Responsive Design</h2>
          <p className="text-gray-700 mb-4">
            Tailwind makes responsive design simple with prefixes like{" "}
            <code className="bg-gray-100 px-1">sm:</code>,{" "}
            <code className="bg-gray-100 px-1">md:</code>,{" "}
            <code className="bg-gray-100 px-1">lg:</code>, and{" "}
            <code className="bg-gray-100 px-1">xl:</code>. These apply styles at
            specific breakpoints.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.responsive}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.responsive)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li>
              <code>sm:bg-green-400</code> → applies green background on{" "}
              <b>small screens</b> and up.
            </li>
            <li>
              <code>md:bg-blue-400</code> → applies blue background on{" "}
              <b>medium screens</b> and up.
            </li>
            <li>
              <code>lg:bg-purple-400</code> → applies purple background on{" "}
              <b>large screens</b>.
            </li>
          </ul>
        </section>

        {/* 🔹 SECTION 3: Flexbox */}
        <section>
          <h2 className="text-2xl font-bold mb-3">3. Flexbox</h2>
          <p className="text-gray-700 mb-4">
            Tailwind provides utilities like{" "}
            <code className="bg-gray-100 px-1">flex</code>,{" "}
            <code className="bg-gray-100 px-1">items-center</code>, and{" "}
            <code className="bg-gray-100 px-1">justify-between</code> for
            building layouts with Flexbox.
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
            <li>
              <code>flex</code> → turns container into a flexbox.
            </li>
            <li>
              <code>space-x-4</code> → adds horizontal spacing between children.
            </li>
          </ul>
        </section>

        {/* 🔹 SECTION 4: Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-3">4. CSS Grid</h2>
          <p className="text-gray-700 mb-4">
            Tailwind makes grids simple with classes like{" "}
            <code className="bg-gray-100 px-1">grid-cols-3</code> and{" "}
            <code className="bg-gray-100 px-1">gap-4</code>.
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
            <li>
              <code>grid</code> → enables CSS Grid layout.
            </li>
            <li>
              <code>grid-cols-3</code> → creates a grid with 3 equal columns.
            </li>
            <li>
              <code>gap-4</code> → adds spacing between grid items.
            </li>
          </ul>
        </section>

        {/* 🔹 SECTION 5: Typography */}
        <section>
          <h2 className="text-2xl font-bold mb-3">5. Typography</h2>
          <p className="text-gray-700 mb-4">
            Tailwind gives fine-grained control over text with classes like{" "}
            <code className="bg-gray-100 px-1">text-4xl</code>,{" "}
            <code className="bg-gray-100 px-1">font-extrabold</code>, and{" "}
            <code className="bg-gray-100 px-1">text-gray-600</code>.
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
            <li>
              <code>text-4xl</code> → sets very large font size.
            </li>
            <li>
              <code>font-extrabold</code> → makes text extremely bold.
            </li>
            <li>
              <code>text-gray-600</code> → applies medium gray color.
            </li>
          </ul>
        </section>

        {/* 🔹 Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next: Colors & Backgrounds
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoreConcept;
