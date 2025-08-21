import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BordersEffect = () => {
  const [copied, setCopied] = useState(false);

  const examples = {
    borders: `<div class="border border-gray-400 p-4 mb-4">Default Border</div>
<div class="border-2 border-red-500 p-4 rounded">Thicker Red Border</div>
<div class="border-t-4 border-blue-500 p-4">Top Border Only</div>`,
    borderRadius: `<div class="rounded p-4 bg-green-200 mb-2">Small Rounded</div>
<div class="rounded-lg p-4 bg-yellow-200 mb-2">Large Rounded</div>
<div class="rounded-full p-4 bg-pink-200">Full Circle</div>`,
    shadows: `<div class="shadow p-4 bg-white mb-2">Default Shadow</div>
<div class="shadow-md p-4 bg-white mb-2">Medium Shadow</div>
<div class="shadow-xl p-4 bg-white">Extra Large Shadow</div>`,
    opacity: `<div class="bg-blue-500 text-white p-4 mb-2 opacity-50">50% Opacity</div>
<div class="bg-red-500 text-white p-4 opacity-75">75% Opacity</div>`,
    effects: `<div class="hover:bg-green-400 p-4 mb-2 transition duration-300">Hover Background Change</div>
<div class="transform hover:scale-110 p-4 bg-purple-400 text-white transition duration-300">Hover Scale</div>`,
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
            Tailwind CSS – Borders & Effects
          </h1>
          <p className="text-gray-600 text-lg">
            Learn how to style borders, shadows, opacity, and interactive effects with Tailwind utilities.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* SECTION 1: Borders */}
        <section>
          <h2 className="text-2xl font-bold mb-3">1. Borders</h2>
          <p className="text-gray-700 mb-4">
            Tailwind provides utilities for borders like <code className="bg-gray-100 px-1">border</code>, <code className="bg-gray-100 px-1">border-2</code>, <code className="bg-gray-100 px-1">border-t</code>, and color classes like <code className="bg-gray-100 px-1">border-red-500</code>.
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
            <li><code>border</code> → default 1px border on all sides.</li>
            <li><code>border-2</code> → thicker 2px border.</li>
            <li><code>border-t-4</code> → 4px top border only.</li>
            <li><code>border-gray-400</code> → gray border color.</li>
            <li><code>border-red-500</code> → red border color.</li>
          </ul>
        </section>

        {/* SECTION 2: Border Radius */}
        <section>
          <h2 className="text-2xl font-bold mb-3">2. Border Radius</h2>
          <p className="text-gray-700 mb-4">
            Use <code className="bg-gray-100 px-1">rounded</code>, <code className="bg-gray-100 px-1">rounded-lg</code>, or <code className="bg-gray-100 px-1">rounded-full</code> to control the roundness of corners.
          </p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.borderRadius}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.borderRadius)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>rounded</code> → small rounded corners.</li>
            <li><code>rounded-lg</code> → larger rounded corners.</li>
            <li><code>rounded-full</code> → fully circular element.</li>
          </ul>
        </section>

        {/* SECTION 3: Shadows */}
        <section>
          <h2 className="text-2xl font-bold mb-3">3. Shadows</h2>
          <p className="text-gray-700 mb-4">
            Tailwind provides <code className="bg-gray-100 px-1">shadow</code> utilities to add depth and elevation effects.
          </p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.shadows}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.shadows)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>shadow</code> → default subtle shadow.</li>
            <li><code>shadow-md</code> → medium shadow depth.</li>
            <li><code>shadow-xl</code> → extra large shadow depth.</li>
          </ul>
        </section>

        {/* SECTION 4: Opacity */}
        <section>
          <h2 className="text-2xl font-bold mb-3">4. Opacity</h2>
          <p className="text-gray-700 mb-4">
            Control transparency of elements using classes like <code className="bg-gray-100 px-1">opacity-50</code> or <code className="bg-gray-100 px-1">opacity-75</code>.
          </p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.opacity}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.opacity)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>opacity-50</code> → 50% opacity.</li>
            <li><code>opacity-75</code> → 75% opacity.</li>
          </ul>
        </section>

        {/* SECTION 5: Effects & Transitions */}
        <section>
          <h2 className="text-2xl font-bold mb-3">5. Effects & Transitions</h2>
          <p className="text-gray-700 mb-4">
            Use <code className="bg-gray-100 px-1">hover:</code>, <code className="bg-gray-100 px-1">transform</code>, and <code className="bg-gray-100 px-1">transition</code> utilities for interactive effects.
          </p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.effects}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.effects)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>hover:bg-green-400</code> → background changes on hover.</li>
            <li><code>transform</code> → enables transforms.</li>
            <li><code>hover:scale-110</code> → scales element to 110% on hover.</li>
            <li><code>transition duration-300</code> → smooth transition over 300ms.</li>
          </ul>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next: Layout & Box Model
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BordersEffect;
