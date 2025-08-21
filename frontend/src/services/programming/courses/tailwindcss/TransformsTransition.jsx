// src/services/programming/courses/tailwindcss/TransformsTransitions.jsx

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TransformsTransitions = () => {
  const [copied, setCopied] = useState(false);

  // 🔹 Example snippets
  const examples = {
    scale: `<div class="transform hover:scale-110 bg-blue-500 text-white px-6 py-3 rounded transition duration-300">
  Hover to Scale
</div>`,

    rotate: `<div class="transform hover:rotate-12 bg-green-500 text-white px-6 py-3 rounded transition duration-300">
  Hover to Rotate
</div>`,

    translate: `<div class="transform hover:translate-x-4 bg-purple-500 text-white px-6 py-3 rounded transition duration-300">
  Hover to Move Right
</div>`,

    skew: `<div class="transform hover:skew-x-6 bg-red-500 text-white px-6 py-3 rounded transition duration-300">
  Hover to Skew
</div>`,

    transition: `<button class="bg-pink-500 text-white px-6 py-3 rounded transition ease-in-out duration-500 hover:bg-pink-700">
  Hover for Smooth Transition
</button>`,
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
    <div className="min-h-screen bg-white px-4 py-10 mx-auto max-w-4xl">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* 🔹 Header */}
        <header>
          <h1 className="text-3xl font-extrabold mb-2">
            Tailwind CSS – Transforms & Transitions
          </h1>
          <p className="text-gray-600 text-lg">
            Learn how to animate elements in Tailwind using{" "}
            <b>transforms</b> (scale, rotate, translate, skew) and{" "}
            <b>transitions</b> (duration, easing, delay). These utilities make
            your UI smooth, interactive, and visually engaging — without writing
            custom CSS.
          </p>
        </header>

        {/* 🔹 Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Responsive Design
          </button>
        </div>

        {/* 🔹 SECTION 1: Scale */}
        <section>
          <h2 className="text-2xl font-bold mb-3">1. Scale</h2>
          <p className="text-gray-700 mb-4">
            Scaling resizes an element. Tailwind provides{" "}
            <code className="bg-gray-100 px-1">scale-*</code> utilities and{" "}
            <code className="bg-gray-100 px-1">hover:scale-*</code> modifiers.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.scale}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.scale)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li>
              <code>transform</code> → enables transform utilities.
            </li>
            <li>
              <code>hover:scale-110</code> → scales element to 110% on hover.
            </li>
            <li>
              <code>transition duration-300</code> → animates scaling smoothly
              over 300ms.
            </li>
          </ul>
        </section>

        {/* 🔹 SECTION 2: Rotate */}
        <section>
          <h2 className="text-2xl font-bold mb-3">2. Rotate</h2>
          <p className="text-gray-700 mb-4">
            Rotation spins an element by degrees. Tailwind supports{" "}
            <code className="bg-gray-100 px-1">rotate-*</code> values, along
            with hover modifiers.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.rotate}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.rotate)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li>
              <code>hover:rotate-12</code> → rotates element by 12° when hovered.
            </li>
            <li>
              <code>transition duration-300</code> → smoothens rotation over
              300ms.
            </li>
          </ul>
        </section>

        {/* 🔹 SECTION 3: Translate */}
        <section>
          <h2 className="text-2xl font-bold mb-3">3. Translate</h2>
          <p className="text-gray-700 mb-4">
            Translation moves an element along the X or Y axis. Tailwind uses{" "}
            <code className="bg-gray-100 px-1">translate-x-*</code> and{" "}
            <code className="bg-gray-100 px-1">translate-y-*</code>.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.translate}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.translate)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li>
              <code>hover:translate-x-4</code> → shifts element 1rem (16px) to
              the right.
            </li>
            <li>
              <code>transform</code> → ensures translation works.
            </li>
          </ul>
        </section>

        {/* 🔹 SECTION 4: Skew */}
        <section>
          <h2 className="text-2xl font-bold mb-3">4. Skew</h2>
          <p className="text-gray-700 mb-4">
            Skewing distorts an element along the X or Y axis. Tailwind uses{" "}
            <code className="bg-gray-100 px-1">skew-x-*</code> and{" "}
            <code className="bg-gray-100 px-1">skew-y-*</code>.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.skew}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.skew)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li>
              <code>hover:skew-x-6</code> → skews element by 6° along X axis.
            </li>
            <li>
              <code>transition duration-300</code> → makes skewing animated.
            </li>
          </ul>
        </section>

        {/* 🔹 SECTION 5: Transitions */}
        <section>
          <h2 className="text-2xl font-bold mb-3">5. Transitions</h2>
          <p className="text-gray-700 mb-4">
            Transitions control <b>how long</b> an animation runs,{" "}
            <b>how it eases</b>, and <b>whether it has delay</b>. Tailwind
            provides utilities like{" "}
            <code className="bg-gray-100 px-1">transition</code>,{" "}
            <code className="bg-gray-100 px-1">duration-500</code>,{" "}
            <code className="bg-gray-100 px-1">ease-in-out</code>, and{" "}
            <code className="bg-gray-100 px-1">delay-200</code>.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.transition}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.transition)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li>
              <code>transition</code> → enables transitions on properties like
              color, transform, etc.
            </li>
            <li>
              <code>duration-500</code> → sets animation length to 500ms.
            </li>
            <li>
              <code>ease-in-out</code> → smooth start & end easing.
            </li>
            <li>
              <code>hover:bg-pink-700</code> → background changes smoothly on
              hover.
            </li>
          </ul>
        </section>

        {/* 🔹 Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next: Animation Utilities
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransformsTransitions;
