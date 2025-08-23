// src/pages/bootstrap/Tables.jsx
import CodeBlock from "./CodeBlock";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Tables = () => {
  const basicTable = `
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
    </tbody>
  </table>`;

  const stripedTable = `
  <table class="table table-striped">
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
        <td>Tony</td>
        <td>Stark</td>
        <td>@ironman</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Steve</td>
        <td>Rogers</td>
        <td>@captain</td>
      </tr>
      <tr>
    </tbody>
  </table>`;

  const darkTable = `
  <table class="table table-dark">
    <thead>
      <tr>
        <th>#</th>
        <th>Planet</th>
        <th>Galaxy</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Earth</td>
        <td>Milky Way</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Mars</td>
        <td>Milky Way</td>
        <td>Inactive</td>
      </tr>
      <tr>
    </tbody>
  </table>`;
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-[#f9f9f9] to-[#f0f0f0] px-0 sm:px-4 lg:px-6 py-3 sm:py-10 lg:py-14">
      <div className="max-w-6xl mx-auto space-y-5 sm:space-y-10 lg:space-y-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-[#04AA6D] drop-shadow">
            Bootstrap Tables
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Tables in Bootstrap are used to present data in a structured way.
            Bootstrap provides a wide variety of table styles, including
            striped, bordered, hoverable, dark, responsive, and more. You can
            easily customize tables using Bootstrap utility classes.
          </p>
        </div>
        {/* Navigation Top */}
        <div className="flex sm:flex-row justify-between gap-4 sm:gap-0">
          <Link
            to="/bootstrap/colors-backgrounds"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            <FaChevronLeft /> Colors & Backgrounds
          </Link>

          <Link
            to="/bootstrap/images"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            Images <FaChevronRight />
          </Link>
        </div>
        {/* Basic Table */}
        <section className="bg-[#D9EEE1] p-5 md:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-[#04AA6D]">
            Basic Table
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed text-sm md:text-base">
            Add the <code>.table</code> class to a table element to apply basic
            Bootstrap styling.
          </p>
        </section>
        <section className="bg-white p-5 md:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold mb-5 text-[#04AA6D]">
            Basic Example
          </h2>
          <CodeBlock code={basicTable} />
        </section>
        <section className="bg-[#D9EEE1] p-5 md:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold mb-5 text-[#04AA6D]">
            Striped Table Example
          </h2>
          <CodeBlock code={stripedTable} />
        </section>
        <section className="bg-white p-5 md:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold mb-5 text-[#04AA6D]">
            Dark Table Example
          </h2>
          <CodeBlock code={darkTable} />
        </section>
        {/* Table Variants */}
        <section className="bg-[#D9EEE1] p-5 md:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#04AA6D]">
            Table Variants
          </h2>

          {[
            {
              title: "Striped Rows",
              text: "Add .table-striped for alternating row colors.",
            },
            {
              title: "Bordered Tables",
              text: "Add .table-bordered for borders on all sides of the table and cells.",
            },
            {
              title: "Hoverable Rows",
              text: "Add .table-hover to highlight a row when hovered over.",
            },
            {
              title: "Dark Tables",
              text: "Use .table-dark for a dark background and light text.",
            },
            {
              title: "Small Tables",
              text: "Use .table-sm for compact table rows with less padding.",
            },
            {
              title: "Responsive Tables",
              text: "Wrap your table in .table-responsive to make it scrollable horizontally on smaller screens.",
            },
          ].map((variant, idx) => (
            <div key={idx}>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                {variant.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                {variant.text}
              </p>
            </div>
          ))}
        </section>
        {/* Next Steps */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#04AA6D]">
            Next Step
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            Now that you’ve learned about tables, the next topic is{" "}
            <Link
              to="/bootstrap/images"
              className="text-[#04AA6D] font-semibold hover:underline"
            >
              Images
            </Link>{" "}
            where you will learn how to style and make images responsive in
            Bootstrap.
          </p>
        </section>
        {/* Navigation Bottom */}
        <div className="flex sm:flex-row justify-between gap-4 sm:gap-0">
          <Link
            to="/bootstrap/colors-backgrounds"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            <FaChevronLeft /> Colors & Backgrounds
          </Link>

          <Link
            to="/bootstrap/images"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            Images <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tables;
