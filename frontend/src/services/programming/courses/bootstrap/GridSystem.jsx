// src/pages/bootstrap/GridSystem.jsx
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const GridSystem = () => {
  const [copied, setCopied] = useState(false);

  const sampleGrid = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bootstrap Grid Example</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container text-center mt-4">
  <div class="row">
    <div class="col border bg-light">Column 1</div>
    <div class="col border bg-light">Column 2</div>
    <div class="col border bg-light">Column 3</div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-[#f9f9f9] to-[#f0f0f0] px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-[#04AA6D] drop-shadow">
            Bootstrap Grid System
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            The Bootstrap grid system is the foundation for building responsive layouts. 
            It uses a series of containers, rows, and columns to align and distribute 
            content across devices of all sizes. Bootstrap’s grid system is built with 
            Flexbox, making it powerful and flexible.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap/containers"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Containers
          </Link>

          <Link
            to="/bootstrap/typography"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Typography <FaChevronRight />
          </Link>
        </div>

        {/* How it works */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            How the Grid Works
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            The grid system in Bootstrap uses a 12-column layout. Each row can be divided into up to 12 columns. 
            You can combine columns to create different layouts. The grid is fully responsive and adapts across breakpoints.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Use <code>.container</code> for a fixed-width container or <code>.container-fluid</code> for full width.</li>
            <li>Inside containers, use <code>.row</code> to create horizontal groups of columns.</li>
            <li>Inside rows, use <code>.col-*</code> classes to create responsive columns.</li>
          </ul>
        </section>

        {/* Example */}
        <section className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Basic Example</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Below is a simple grid example with 3 equal-width columns:
          </p>

          <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-inner border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{sampleGrid}</code>
            </pre>
            <button
              onClick={() => handleCopy(sampleGrid)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Breakpoints */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Grid Breakpoints</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Bootstrap provides responsive breakpoints to define how columns should behave on different screen sizes:
          </p>
          <table className="table-auto w-full border border-gray-300 text-left text-gray-700 bg-white shadow rounded-lg overflow-hidden">
            <thead className="bg-[#04AA6D] text-white">
              <tr>
                <th className="px-4 py-2">Breakpoint</th>
                <th className="px-4 py-2">Class Prefix</th>
                <th className="px-4 py-2">Screen Size</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-4 py-2">Extra small</td><td className="px-4 py-2"><code>.col-</code></td><td className="px-4 py-2">&lt;576px</td></tr>
              <tr><td className="px-4 py-2">Small</td><td className="px-4 py-2"><code>.col-sm-</code></td><td className="px-4 py-2">≥576px</td></tr>
              <tr><td className="px-4 py-2">Medium</td><td className="px-4 py-2"><code>.col-md-</code></td><td className="px-4 py-2">≥768px</td></tr>
              <tr><td className="px-4 py-2">Large</td><td className="px-4 py-2"><code>.col-lg-</code></td><td className="px-4 py-2">≥992px</td></tr>
              <tr><td className="px-4 py-2">Extra large</td><td className="px-4 py-2"><code>.col-xl-</code></td><td className="px-4 py-2">≥1200px</td></tr>
              <tr><td className="px-4 py-2">XXL</td><td className="px-4 py-2"><code>.col-xxl-</code></td><td className="px-4 py-2">≥1400px</td></tr>
            </tbody>
          </table>
        </section>

        {/* Advanced Features */}
        <section className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200 space-y-6">
          <h2 className="text-3xl font-bold text-[#04AA6D]">Advanced Grid Features</h2>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Auto-layout Columns</h3>
            <p className="text-gray-700 leading-relaxed">
              Use <code>.col</code> without a number to create equal-width flexible columns.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Column Wrapping</h3>
            <p className="text-gray-700">
              If more than 12 columns are placed in one row, the extra columns will wrap onto a new line.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Responsive Classes</h3>
            <p className="text-gray-700">
              You can combine multiple breakpoints. Example: <code>.col-12 .col-md-6 .col-lg-4</code>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Column Ordering</h3>
            <p className="text-gray-700">
              Use <code>.order-*</code> classes to change the visual order of columns.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Column Offsetting</h3>
            <p className="text-gray-700">
              Use <code>.offset-*</code> classes to leave space before a column.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Alignment & Justification</h3>
            <p className="text-gray-700">
              With Flexbox utilities, align columns vertically with <code>.align-items-*</code> 
              and horizontally with <code>.justify-content-*</code>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Nesting</h3>
            <p className="text-gray-700">
              Place a <code>.row</code> inside a <code>.col</code> to create nested grids.
            </p>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">Next Step</h2>
          <p className="text-gray-700">
            Now that you understand the grid system, the next topic is{" "}
            <Link
              to="/bootstrap/typography"
              className="text-[#04AA6D] font-semibold hover:underline"
            >
              Typography
            </Link>{" "}
            where you will learn how to style text with Bootstrap.
          </p>
        </section>

        {/* Bottom Navigation */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap/containers"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Containers
          </Link>

          <Link
            to="/bootstrap/typography"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Typography <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GridSystem;
