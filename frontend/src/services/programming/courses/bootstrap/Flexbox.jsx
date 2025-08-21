// src/pages/bootstrap/Flexbox.jsx
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Flexbox = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  // Code Snippets
  const dFlexExample = `<div class="d-flex p-3 bg-light border">
  <div class="p-2 bg-primary text-white">Flex Item 1</div>
  <div class="p-2 bg-success text-white">Flex Item 2</div>
  <div class="p-2 bg-danger text-white">Flex Item 3</div>
</div>`;

  const directionExample = `<div class="d-flex flex-row bg-light border mb-3">
  <div class="p-2 bg-info text-white">Row 1</div>
  <div class="p-2 bg-warning text-dark">Row 2</div>
</div>
<div class="d-flex flex-column bg-light border">
  <div class="p-2 bg-info text-white">Column 1</div>
  <div class="p-2 bg-warning text-dark">Column 2</div>
</div>`;

  const justifyExample = `<div class="d-flex justify-content-between bg-light border p-3">
  <div class="p-2 bg-primary text-white">Start</div>
  <div class="p-2 bg-success text-white">Middle</div>
  <div class="p-2 bg-danger text-white">End</div>
</div>`;

  const alignExample = `<div class="d-flex align-items-center border bg-light" style="height:120px;">
  <div class="p-2 bg-primary text-white">Aligned Center</div>
</div>`;

  const alignSelfExample = `<div class="d-flex border bg-light" style="height:120px;">
  <div class="p-2 bg-success text-white align-self-start">Start</div>
  <div class="p-2 bg-primary text-white align-self-center">Center</div>
  <div class="p-2 bg-danger text-white align-self-end">End</div>
</div>`;

  const fillExample = `<div class="d-flex">
  <div class="flex-fill bg-primary text-white p-2">Flex Fill 1</div>
  <div class="flex-fill bg-success text-white p-2">Flex Fill 2</div>
  <div class="flex-fill bg-danger text-white p-2">Flex Fill 3</div>
</div>`;

  const growShrinkExample = `<div class="d-flex bg-light border">
  <div class="flex-grow-1 bg-primary text-white p-2">Grow 1</div>
  <div class="flex-grow-1 bg-success text-white p-2">Grow 2</div>
  <div class="flex-shrink-1 bg-danger text-white p-2">Shrink</div>
</div>`;

  const wrapExample = `<div class="d-flex flex-wrap bg-light border p-2">
  <div class="p-2 bg-primary text-white">Item 1</div>
  <div class="p-2 bg-success text-white">Item 2</div>
  <div class="p-2 bg-danger text-white">Item 3</div>
  <div class="p-2 bg-warning text-dark">Item 4</div>
  <div class="p-2 bg-info text-white">Item 5</div>
</div>`;

  const orderExample = `<div class="d-flex bg-light border p-2">
  <div class="order-3 p-2 bg-primary text-white">First (order-3)</div>
  <div class="order-1 p-2 bg-success text-white">Second (order-1)</div>
  <div class="order-2 p-2 bg-danger text-white">Third (order-2)</div>
</div>`;

  const alignContentExample = `<div class="d-flex flex-wrap align-content-between border bg-light" style="height:200px;">
  <div class="p-2 bg-primary text-white">A</div>
  <div class="p-2 bg-success text-white">B</div>
  <div class="p-2 bg-danger text-white">C</div>
  <div class="p-2 bg-warning text-dark">D</div>
  <div class="p-2 bg-info text-white">E</div>
  <div class="p-2 bg-secondary text-white">F</div>
</div>`;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-[#f9f9f9] to-[#f0f0f0] px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-[#04AA6D] drop-shadow">
            Bootstrap Flexbox
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Bootstrap includes a powerful flexbox grid system and utility classes to control layout,
            alignment, and spacing without writing custom CSS. Below are all the flexbox utilities
            with examples and code.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap/utilities"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Utilities
          </Link>

          <Link
            to="/bootstrap"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Bootstrap <FaChevronRight />
          </Link>
        </div>

        {/* Sections */}
        {[
          { title: "Enable Flex", desc: "Use .d-flex to create a flex container.", code: dFlexExample, bg: "green" },
          { title: "Direction", desc: "Control the direction of flex items.", code: directionExample, bg: "white" },
          { title: "Justify Content", desc: "Align items along the main axis.", code: justifyExample, bg: "green" },
          { title: "Align Items", desc: "Align items along the cross axis.", code: alignExample, bg: "white" },
          { title: "Align Self", desc: "Override alignment for individual items.", code: alignSelfExample, bg: "green" },
          { title: "Flex Fill", desc: "Make items expand equally to fill available space.", code: fillExample, bg: "white" },
          { title: "Grow & Shrink", desc: "Control how items grow or shrink.", code: growShrinkExample, bg: "green" },
          { title: "Flex Wrap", desc: "Allow items to wrap onto multiple lines.", code: wrapExample, bg: "white" },
          { title: "Order", desc: "Reorder flex items with order utilities.", code: orderExample, bg: "green" },
          { title: "Align Content", desc: "Align flex lines within a flex container.", code: alignContentExample, bg: "white" },
        ].map((section, idx) => (
          <section
            key={idx}
            className={`${
              section.bg === "green"
                ? "bg-[#D9EEE1] border border-[#04AA6D]/30"
                : "bg-white border border-gray-200"
            } p-10 rounded-2xl shadow-lg`}
          >
            <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">{section.title}</h2>
            <p className="text-gray-800 mb-4 leading-relaxed">{section.desc}</p>
            <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-inner border">
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
                <code>{section.code}</code>
              </pre>
              <button
                onClick={() => handleCopy(section.code)}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
              >
                {copied ? "Copied!" : "Copy Code"}
              </button>
            </div>
          </section>
        ))}

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">Next Step</h2>
          <p className="text-gray-700">
            Now that you know all about Flexbox utilities, move on to{" "}
            <Link to="/bootstrap/grid" className="text-[#04AA6D] font-semibold hover:underline">
              Grid
            </Link>{" "}
            to learn how Bootstrap’s grid system works with flexbox.
          </p>
        </section>

        {/* Bottom Navigation */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap/utilities"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Utilities
          </Link>

          <Link
            to="/bootstrap"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Bootstrap <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Flexbox;
