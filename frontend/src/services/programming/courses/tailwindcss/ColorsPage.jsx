import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ColorsPage = () => {
  const examples = {
    text: `<p class="text-red-500">Red Text</p>
<p class="text-green-600">Green Text</p>
<p class="text-blue-700">Blue Text</p>`,
    background: `<div class="bg-red-200 p-4 rounded mb-2">Light Red Background</div>
<div class="bg-green-500 p-4 rounded mb-2 text-white">Medium Green Background</div>
<div class="bg-blue-800 p-4 rounded mb-2 text-white">Dark Blue Background</div>`,
    opacity: `<div class="bg-red-500 bg-opacity-50 p-4 rounded mb-2">50% opacity red</div>
<div class="bg-green-500 bg-opacity-75 p-4 rounded mb-2">75% opacity green</div>`,
    gradient: `<div class="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-4 rounded text-white">Gradient Background</div>
<div class="bg-gradient-to-b from-green-300 to-blue-500 p-4 rounded text-white">Vertical Gradient</div>`,
    combo: `<p class="text-white bg-blue-600 p-2 rounded">White text on blue background</p>
<p class="text-gray-900 bg-yellow-300 p-2 rounded">Dark text on light yellow background</p>`,
    custom: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brandBlue: '#1E40AF',
        brandRed: '#DC2626',
      },
    },
  },
}`,
  };

  const [copied, setCopied] = useState(false);

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
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">
            Tailwind CSS Colors & Backgrounds
          </h1>
          <p className="text-gray-600 text-lg">
            Learn how to style text and backgrounds with Tailwind CSS colors.
            Control color shades, opacity, gradients, and accessibility with ease.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Text Colors */}
        <section className="bg-[#F3F4F6] p-8 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-bold mb-2">Text Colors</h2>
          <p className="text-gray-800">
            Use <code>text-{'{color}-{number}'}</code> to apply text colors from Tailwind’s palette.
          </p>
          <div className="bg-white border-l-4 border-[#04AA6D] p-4 rounded font-mono text-sm overflow-x-auto">
            <code>{examples.text}</code>
          </div>
          <button
            onClick={() => handleCopy(examples.text)}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied ? "Copied!" : "Copy Code"}
          </button>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><code>text-red-500</code> → medium shade of red.</li>
            <li><code>text-green-600</code> → darker shade of green.</li>
            <li><code>text-blue-700</code> → very dark blue shade.</li>
          </ul>
        </section>

        {/* Background Colors */}
        <section className="bg-[#F3F4F6] p-8 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-bold mb-2">Background Colors</h2>
          <p className="text-gray-800">Use <code>bg-{'{color}-{number}'}</code> for background colors.</p>
          <div className="bg-white border-l-4 border-[#04AA6D] p-4 rounded font-mono text-sm overflow-x-auto">
            <code>{examples.background}</code>
          </div>
          <button
            onClick={() => handleCopy(examples.background)}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied ? "Copied!" : "Copy Code"}
          </button>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><code>bg-red-200</code> → very light red background.</li>
            <li><code>bg-green-500</code> → medium green background.</li>
            <li><code>bg-blue-800</code> → dark navy-blue background.</li>
            <li><code>text-white</code> → ensures text is visible on dark backgrounds.</li>
          </ul>
        </section>

        {/* Opacity */}
        <section className="bg-[#F3F4F6] p-8 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-bold mb-2">Opacity</h2>
          <p className="text-gray-800">Adjust background or text opacity with <code>bg-opacity-{'{n}'}</code> or <code>text-opacity-{'{n}'}</code>.</p>
          <div className="bg-white border-l-4 border-[#04AA6D] p-4 rounded font-mono text-sm overflow-x-auto">
            <code>{examples.opacity}</code>
          </div>
          <button
            onClick={() => handleCopy(examples.opacity)}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied ? "Copied!" : "Copy Code"}
          </button>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><code>bg-opacity-50</code> → sets 50% transparency.</li>
            <li><code>bg-opacity-75</code> → sets 75% transparency.</li>
          </ul>
        </section>

        {/* Gradients */}
        <section className="bg-[#F3F4F6] p-8 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-bold mb-2">Gradient Backgrounds</h2>
          <p className="text-gray-800">Use <code>bg-gradient-to-{'{direction}'}</code> + <code>from</code>, <code>via</code>, <code>to</code>.</p>
          <div className="bg-white border-l-4 border-[#04AA6D] p-4 rounded font-mono text-sm overflow-x-auto">
            <code>{examples.gradient}</code>
          </div>
          <button
            onClick={() => handleCopy(examples.gradient)}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied ? "Copied!" : "Copy Code"}
          </button>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><code>bg-gradient-to-r</code> → gradient flows left → right.</li>
            <li><code>bg-gradient-to-b</code> → gradient flows top → bottom.</li>
            <li><code>from-blue-400</code> → gradient starts with light blue.</li>
            <li><code>via-purple-500</code> → mid-color is purple.</li>
            <li><code>to-pink-500</code> → gradient ends with pink.</li>
          </ul>
        </section>

        {/* Text & Background Together */}
        <section className="bg-[#F3F4F6] p-8 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-bold mb-2">Text & Background Together</h2>
          <p className="text-gray-800">Combine background and text classes for contrast.</p>
          <div className="bg-white border-l-4 border-[#04AA6D] p-4 rounded font-mono text-sm overflow-x-auto">
            <code>{examples.combo}</code>
          </div>
          <button
            onClick={() => handleCopy(examples.combo)}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied ? "Copied!" : "Copy Code"}
          </button>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><code>text-white</code> → ensures readability on blue background.</li>
            <li><code>bg-blue-600</code> → dark blue background.</li>
            <li><code>text-gray-900</code> → nearly black text color.</li>
            <li><code>bg-yellow-300</code> → light yellow background.</li>
          </ul>
        </section>

        {/* Custom Colors */}
        <section className="bg-[#F3F4F6] p-8 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-bold mb-2">Custom Colors</h2>
          <p className="text-gray-800">Extend your Tailwind config with custom brand colors.</p>
          <div className="bg-white border-l-4 border-[#04AA6D] p-4 rounded font-mono text-sm overflow-x-auto">
            <code>{examples.custom}</code>
          </div>
          <button
            onClick={() => handleCopy(examples.custom)}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied ? "Copied!" : "Copy Code"}
          </button>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><code>extend.colors</code> → adds new colors to Tailwind palette.</li>
            <li><code>brandBlue</code> → custom hex blue (#1E40AF).</li>
            <li><code>brandRed</code> → custom hex red (#DC2626).</li>
            <li>Use them like <code>bg-brandBlue</code> or <code>text-brandRed</code>.</li>
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

export default ColorsPage;
