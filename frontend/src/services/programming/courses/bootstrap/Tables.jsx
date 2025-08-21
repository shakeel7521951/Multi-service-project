// src/pages/bootstrap/Tables.jsx
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Tables = () => {
  const [copied, setCopied] = useState(false);

  const basicTable = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bootstrap Table Example</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container mt-4">
  <h2>Basic Table</h2>
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>First</th>
        <th>Last</th>
        <th>Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Larry</td>
        <td>Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
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
            Bootstrap Tables
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Tables in Bootstrap are used to present data in a structured way. 
            Bootstrap provides a wide variety of table styles, including striped, bordered, hoverable, 
            dark, responsive, and more. You can easily customize tables using Bootstrap utility classes.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap/colors"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Colors
          </Link>

          <Link
            to="/bootstrap/images"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Images <FaChevronRight />
          </Link>
        </div>

        {/* Basic Table */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Basic Table</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Add the <code>.table</code> class to a table element to apply basic Bootstrap styling.
          </p>
        </section>

        {/* Example */}
        <section className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-5 text-[#04AA6D]">Example</h2>
          <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-inner border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{basicTable}</code>
            </pre>
            <button
              onClick={() => handleCopy(basicTable)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Table Variants */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30 space-y-6">
          <h2 className="text-3xl font-bold text-[#04AA6D]">Table Variants</h2>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Striped Rows</h3>
            <p className="text-gray-700">
              Add <code>.table-striped</code> for alternating row colors.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Bordered Tables</h3>
            <p className="text-gray-700">
              Add <code>.table-bordered</code> for borders on all sides of the table and cells.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Hoverable Rows</h3>
            <p className="text-gray-700">
              Add <code>.table-hover</code> to highlight a row when hovered over.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Dark Tables</h3>
            <p className="text-gray-700">
              Use <code>.table-dark</code> for a dark background and light text.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Small Tables</h3>
            <p className="text-gray-700">
              Use <code>.table-sm</code> for compact table rows with less padding.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Responsive Tables</h3>
            <p className="text-gray-700">
              Wrap your table in <code>.table-responsive</code> to make it scrollable horizontally on smaller screens.
            </p>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">Next Step</h2>
          <p className="text-gray-700">
            Now that you’ve learned about tables, the next topic is{" "}
            <Link
              to="/bootstrap/images"
              className="text-[#04AA6D] font-semibold hover:underline"
            >
              Images
            </Link>{" "}
            where you will learn how to style and make images responsive in Bootstrap.
          </p>
        </section>

        {/* Navigation Bottom */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap/colors"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Colors
          </Link>

          <Link
            to="/bootstrap/images"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Images <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tables;
