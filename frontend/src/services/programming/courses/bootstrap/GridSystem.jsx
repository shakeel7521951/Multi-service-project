// src/pages/bootstrap/GridSystem.jsx
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CodeBlock from "./CodeBlock";

const GridSystem = () => {
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

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-[#f9f9f9] to-[#f0f0f0] px-0 sm:px-4 lg:px-6 py-3 sm:py-10 lg:py-14">
      <div className="w-full max-w-6xl mx-auto space-y-5 sm:space-y-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-[#04AA6D] drop-shadow">
            Bootstrap Grid System
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            The Bootstrap grid system is the foundation for building responsive
            layouts. It uses a series of containers, rows, and columns to align
            and distribute content across devices of all sizes. Bootstrap’s grid
            system is built with Flexbox, making it powerful and flexible.
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
        <section className="bg-[#D9EEE1]  p-5 md:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            How the Grid Works
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            The grid system in Bootstrap uses a 12-column layout. Each row can
            be divided into up to 12 columns. You can combine columns to create
            different layouts. The grid is fully responsive and adapts across
            breakpoints.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Use <code>.container</code> for a fixed-width container or{" "}
              <code>.container-fluid</code> for full width.
            </li>
            <li>
              Inside containers, use <code>.row</code> to create horizontal
              groups of columns.
            </li>
            <li>
              Inside rows, use <code>.col-*</code> classes to create responsive
              columns.
            </li>
          </ul>
        </section>

        {/* Example */}
        <section className="bg-white p-5 md:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Basic Example
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Below is a simple grid example with 3 equal-width columns:
          </p>

          <CodeBlock code={sampleGrid} />
        </section>

        {/* Breakpoints */}
        <section className="bg-[#D9EEE1] p-4 sm:p-6 md:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 text-[#04AA6D] text-center md:text-left">
            Grid Breakpoints
          </h2>

          {/* Paragraph */}
          <p className="text-gray-800 mb-4 leading-relaxed text-sm sm:text-base md:text-lg text-center md:text-left">
            Bootstrap provides responsive breakpoints to define how columns
            should behave on different screen sizes:
          </p>

          {/* Responsive table wrapper */}
          <div className="overflow-x-auto rounded-lg">
            <table className="table-auto min-w-full border border-gray-300 text-left text-gray-700 bg-white shadow rounded-lg">
              <thead className="bg-[#04AA6D] text-white text-sm sm:text-base">
                <tr>
                  <th className="px-3 sm:px-4 py-2 whitespace-nowrap">
                    Breakpoint
                  </th>
                  <th className="px-3 sm:px-4 py-2 whitespace-nowrap">
                    Class Prefix
                  </th>
                  <th className="px-3 sm:px-4 py-2 whitespace-nowrap">
                    Screen Size
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm sm:text-base">
                <tr>
                  <td className="px-3 sm:px-4 py-2">Extra small</td>
                  <td className="px-3 sm:px-4 py-2">
                    <code>.col-</code>
                  </td>
                  <td className="px-3 sm:px-4 py-2">&lt;576px</td>
                </tr>
                <tr>
                  <td className="px-3 sm:px-4 py-2">Small</td>
                  <td className="px-3 sm:px-4 py-2">
                    <code>.col-sm-</code>
                  </td>
                  <td className="px-3 sm:px-4 py-2">≥576px</td>
                </tr>
                <tr>
                  <td className="px-3 sm:px-4 py-2">Medium</td>
                  <td className="px-3 sm:px-4 py-2">
                    <code>.col-md-</code>
                  </td>
                  <td className="px-3 sm:px-4 py-2">≥768px</td>
                </tr>
                <tr>
                  <td className="px-3 sm:px-4 py-2">Large</td>
                  <td className="px-3 sm:px-4 py-2">
                    <code>.col-lg-</code>
                  </td>
                  <td className="px-3 sm:px-4 py-2">≥992px</td>
                </tr>
                <tr>
                  <td className="px-3 sm:px-4 py-2">Extra large</td>
                  <td className="px-3 sm:px-4 py-2">
                    <code>.col-xl-</code>
                  </td>
                  <td className="px-3 sm:px-4 py-2">≥1200px</td>
                </tr>
                <tr>
                  <td className="px-3 sm:px-4 py-2">XXL</td>
                  <td className="px-3 sm:px-4 py-2">
                    <code>.col-xxl-</code>
                  </td>
                  <td className="px-3 sm:px-4 py-2">≥1400px</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Breakpoints with Visual Representation */}
        <section className="bg-[#D9EEE1] p-5 md:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Grid Breakpoints Visuals
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Bootstrap provides responsive breakpoints to define how columns
            should behave on different screen sizes:
          </p>

          {/* Visual Representation */}
          <div className="space-y-3">
            {/* Extra Small */}
            <div>
              <p className="text-sm font-semibold text-[#04AA6D] mb-2">
                Extra Small (&lt;576px)
              </p>
              <div className="flex flex-col gap-2 bg-[#E7E9EB] p-4 rounded-lg">
                <div className="bg-[#04AA6D] text-white text-center py-2 rounded">
                  col
                </div>
                <div className="bg-[#04AA6D] text-white text-center py-2 rounded">
                  col
                </div>
              </div>
            </div>

            {/* Small */}
            <div>
              <p className="text-sm font-semibold text-[#04AA6D] mb-2">
                Small (≥576px)
              </p>
              <div className="grid grid-cols-2 gap-2 bg-[#E7E9EB] p-4 rounded-lg">
                <div className="bg-[#04AA6D] text-white text-center py-2 rounded">
                  col-sm-6
                </div>
                <div className="bg-[#04AA6D] text-white text-center py-2 rounded">
                  col-sm-6
                </div>
              </div>
            </div>

            {/* Medium */}
            <div>
              <p className="text-sm font-semibold text-[#04AA6D] mb-2">
                Medium (≥768px)
              </p>
              <div className="grid grid-cols-3 gap-2 bg-[#E7E9EB] p-4 rounded-lg">
                <div className="bg-[#04AA6D] text-white text-center py-2 rounded">
                  col-md-4
                </div>
                <div className="bg-[#04AA6D] text-white text-center py-2 rounded">
                  col-md-4
                </div>
                <div className="bg-[#04AA6D] text-white text-center py-2 rounded">
                  col-md-4
                </div>
              </div>
            </div>

            {/* Large */}
            <div>
              <p className="text-sm font-semibold text-[#04AA6D] mb-2">
                Large (≥992px)
              </p>
              <div className="grid grid-cols-4 gap-2 bg-[#E7E9EB] p-4 rounded-lg">
                <div className="bg-[#04AA6D] text-white text-center py-2 rounded">
                  col-lg-3
                </div>
                <div className="bg-[#04AA6D] text-white text-center py-2 rounded">
                  col-lg-3
                </div>
                <div className="bg-[#04AA6D] text-white text-center py-2 rounded">
                  col-lg-3
                </div>
                <div className="bg-[#04AA6D] text-white text-center py-2 rounded">
                  col-lg-3
                </div>
              </div>
            </div>

            {/* Extra Large */}
            <div>
              <p className="text-sm font-semibold text-[#04AA6D] mb-2">
                Extra Large (≥1200px)
              </p>
              <div className="grid grid-cols-5 gap-2 bg-[#E7E9EB] p-4 rounded-lg">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-[#04AA6D] text-white text-center py-2 p-2 rounded text-nowrap"
                  >
                    col-xl-2
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="bg-white p-5 md:p-10 rounded-2xl shadow-lg border border-gray-200 space-y-6">
          <h2 className="text-3xl font-bold text-[#04AA6D]">
            Advanced Grid Features
          </h2>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Auto-layout Columns
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Use <code>.col</code> without a number to create equal-width
              flexible columns.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Column Wrapping
            </h3>
            <p className="text-gray-700">
              If more than 12 columns are placed in one row, the extra columns
              will wrap onto a new line.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Responsive Classes
            </h3>
            <p className="text-gray-700">
              You can combine multiple breakpoints. Example:{" "}
              <code>.col-12 .col-md-6 .col-lg-4</code>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Column Ordering
            </h3>
            <p className="text-gray-700">
              Use <code>.order-*</code> classes to change the visual order of
              columns.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Column Offsetting
            </h3>
            <p className="text-gray-700">
              Use <code>.offset-*</code> classes to leave space before a column.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Alignment & Justification
            </h3>
            <p className="text-gray-700">
              With Flexbox utilities, align columns vertically with{" "}
              <code>.align-items-*</code>
              and horizontally with <code>.justify-content-*</code>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Nesting
            </h3>
            <p className="text-gray-700">
              Place a <code>.row</code> inside a <code>.col</code> to create
              nested grids.
            </p>
          </div>
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
