// src/pages/bootstrap/Flexbox.jsx
import CodeBlock from "./CodeBlock";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Flexbox = () => {
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
    <div className="relative min-h-screen bg-gradient-to-br from-white via-[#f9f9f9] to-[#f0f0f0] px-0 sm:px-4 lg:px-6 py-3 sm:py-10 lg:py-14">
      <div className="max-w-6xl mx-auto space-y-5 sm:space-y-10 lg:space-y-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-[#04AA6D] drop-shadow">
            Bootstrap Flexbox
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Bootstrap includes a powerful flexbox grid system and utility
            classes to control layout, alignment, and spacing without writing
            custom CSS. Below are all the flexbox utilities with examples and
            code.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex sm:flex-row justify-between gap-4 sm:gap-0">
          <Link
            to="/bootstrap/utilities"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            <FaChevronLeft /> Utilities
          </Link>

          <Link
            to="/bootstrap"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            Bootstrap <FaChevronRight />
          </Link>
        </div>
        <section className="bg-[#D9EEE1] border border-[#04AA6D]/30 p-5 sm:p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Enable Flex
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Use <code>.d-flex</code> to create a flex container.
          </p>
          <CodeBlock code={dFlexExample} />
        </section>

        <section className="bg-white border border-gray-200 p-5 sm:p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Direction</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Control the direction of flex items.
          </p>
          <CodeBlock code={directionExample} />
        </section>

        <section className="bg-[#D9EEE1] border border-[#04AA6D]/30 p-5 sm:p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Justify Content
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Align items along the main axis.
          </p>
          <CodeBlock code={justifyExample} />
        </section>

        <section className="bg-white border border-gray-200 p-5 sm:p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Align Items
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Align items along the cross axis.
          </p>
          <CodeBlock code={alignExample} />
        </section>

        <section className="bg-[#D9EEE1] border border-[#04AA6D]/30 p-5 sm:p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Align Self</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Override alignment for individual items.
          </p>
          <CodeBlock code={alignSelfExample} />
        </section>

        <section className="bg-white border border-gray-200 p-5 sm:p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Flex Fill</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Make items expand equally to fill available space.
          </p>
          <CodeBlock code={fillExample} />
        </section>

        <section className="bg-[#D9EEE1] border border-[#04AA6D]/30 p-5 sm:p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Grow & Shrink
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Control how items grow or shrink.
          </p>
          <CodeBlock code={growShrinkExample} />
        </section>

        <section className="bg-white border border-gray-200 p-5 sm:p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Flex Wrap</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Allow items to wrap onto multiple lines.
          </p>
          <CodeBlock code={wrapExample} />
        </section>

        <section className="bg-[#D9EEE1] border border-[#04AA6D]/30 p-5 sm:p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Order</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Reorder flex items with order utilities.
          </p>
          <CodeBlock code={orderExample} />
        </section>

        <section className="bg-white border border-gray-200 p-5 sm:p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Align Content
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Align flex lines within a flex container.
          </p>
          <CodeBlock code={alignContentExample} />
        </section>
        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">Next Step</h2>
          <p className="text-gray-700">
            Now that you know all about Flexbox utilities, move on to{" "}
            <Link
              to="/bootstrap/grid"
              className="text-[#04AA6D] font-semibold hover:underline"
            >
              Grid
            </Link>{" "}
            to learn how Bootstrap’s grid system works with flexbox.
          </p>
        </section>

        {/* Bottom Navigation */}
        <div className="flex sm:flex-row justify-between gap-4 sm:gap-0">
          <Link
            to="/bootstrap/utilities"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            <FaChevronLeft /> Utilities
          </Link>

          <Link
            to="/bootstrap"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            Bootstrap <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Flexbox;
