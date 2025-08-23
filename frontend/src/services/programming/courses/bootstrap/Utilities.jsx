// src/pages/bootstrap/Utilities.jsx
import CodeBlock from "./CodeBlock";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Utilities = () => {
  // Example code snippets
  const colorExample = `<p class="text-primary">Primary text</p>
<p class="text-success">Success text</p>
<p class="text-danger">Danger text</p>
<p class="bg-warning text-dark">Warning background</p>`;
  
  const spacingExample = `<div class="m-3 p-3 bg-light border">Margin 3, Padding 3</div>
<div class="mt-5 mb-2 ps-4 pe-4 bg-light border">Custom spacing</div>`;

  const textExample = `<p class="fw-bold">Bold text</p>
<p class="fst-italic">Italic text</p>
<p class="text-uppercase">Uppercased</p>
<p class="text-center">Centered text</p>`;

  const displayExample = `<div class="d-block bg-light p-2 mb-2">Block</div>
<div class="d-inline bg-light p-2 mb-2">Inline</div>
<div class="d-flex justify-content-between bg-light p-2">
  <span>Left</span><span>Right</span>
</div>`;

  const flexExample = `<div class="d-flex align-items-center justify-content-around border p-3">
  <div class="p-2 bg-primary text-white">Flex 1</div>
  <div class="p-2 bg-success text-white">Flex 2</div>
  <div class="p-2 bg-danger text-white">Flex 3</div>
</div>`;

  const sizingExample = `<div class="w-25 p-3 bg-info text-white">25% width</div>
<div class="w-50 p-3 bg-info text-white">50% width</div>
<div class="w-75 p-3 bg-info text-white">75% width</div>
<div class="w-100 p-3 bg-info text-white">100% width</div>`;

  const borderExample = `<span class="border p-2 m-2">Default border</span>
<span class="border border-primary p-2 m-2">Primary border</span>
<span class="border rounded p-2 m-2">Rounded</span>`;

  const shadowExample = `<div class="shadow-sm p-3 mb-3 bg-body rounded">Small shadow</div>
<div class="shadow p-3 mb-3 bg-body rounded">Regular shadow</div>
<div class="shadow-lg p-3 mb-3 bg-body rounded">Large shadow</div>`;

  const positionExample = `<div class="position-relative border p-5">
  <div class="position-absolute top-0 start-0 bg-warning p-2">Top-Left</div>
  <div class="position-absolute bottom-0 end-0 bg-success text-white p-2">Bottom-Right</div>
</div>`;

  const visibilityExample = `<div class="visible bg-light p-2">I am visible</div>
<div class="invisible bg-light p-2">I am invisible</div>`;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-[#f9f9f9] to-[#f0f0f0] px-0 sm:px-4 lg:px-6 py-3 sm:py-10 lg:py-14">
      <div className="max-w-6xl mx-auto space-y-5 sm:space-y-10 lg:space-y-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-[#04AA6D] drop-shadow">
            Bootstrap Utilities
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Bootstrap utilities are helper classes that make styling elements fast and efficient.
            These classes let you adjust colors, spacing, text, display, sizing, borders, shadows,
            positioning, and much more—without writing custom CSS.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex sm:flex-row justify-between gap-4 sm:gap-0">
          <Link
            to="/bootstrap/carousel"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            <FaChevronLeft /> Carousel
          </Link>

          <Link
            to="/bootstrap/flexbox"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            Flexbox <FaChevronRight />
          </Link>
        </div>

        {/* Sections */}
         {/* Sections */}
        <section className="bg-[#D9EEE1] p-5 sm:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Colors & Backgrounds</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Bootstrap provides color utilities for text and backgrounds.
          </p>
          <CodeBlock code={colorExample}/>
        </section>

        <section className="bg-white p-5 sm:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Spacing</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Use margin (<code>m</code>) and padding (<code>p</code>) classes with scale 0-5.
          </p>
          <CodeBlock code={spacingExample}/>
        </section>

        <section className="bg-[#D9EEE1] p-5 sm:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Text Utilities</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Text alignment, transformation, weight, and style can be quickly applied with text utilities.
          </p>
          <CodeBlock code={textExample}/>
        </section>

        <section className="bg-white p-5 sm:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Display Utilities</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Control how elements are displayed with display classes.
          </p>
          <CodeBlock code={displayExample}/>
        </section>

        <section className="bg-[#D9EEE1] p-5 sm:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Flex Utilities</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Use flexbox utilities for alignment and distribution.
          </p>
          <CodeBlock code={flexExample}/>
        </section>

        <section className="bg-white p-5 sm:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Sizing Utilities</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Set width and height with percentage-based classes.
          </p>
          <CodeBlock code={sizingExample}/>
        </section>

        <section className="bg-[#D9EEE1] p-5 sm:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Borders</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Quickly add borders, remove them, or make them rounded.
          </p>
          <CodeBlock code={borderExample}/>
        </section>

        <section className="bg-white p-5 sm:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Shadows</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Bootstrap offers shadow utilities for different levels of depth.
          </p>
          <CodeBlock code={shadowExample}/>
        </section>

        <section className="bg-[#D9EEE1] p-5 sm:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Position Utilities</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Use relative, absolute, fixed, sticky, and placement classes.
          </p>
          <CodeBlock code={positionExample}/>
        </section>

        <section className="bg-white p-5 sm:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Visibility</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Toggle element visibility with <code>.visible</code> and <code>.invisible</code>.
          </p>
          <CodeBlock code={visibilityExample}/>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">Next Step</h2>
          <p className="text-gray-700">
            Now that you understand Bootstrap utilities, move on to{" "}
            <Link to="/bootstrap/helpers" className="text-[#04AA6D] font-semibold hover:underline">
              Helpers
            </Link>{" "}
            to learn additional helper classes that simplify development.
          </p>
        </section>

        {/* Bottom Navigation */}
         <div className="flex sm:flex-row justify-between gap-4 sm:gap-0">
          <Link
            to="/bootstrap/carousel"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            <FaChevronLeft /> Carousel
          </Link>

          <Link
            to="/bootstrap/flexbox"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            Flexbox <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Utilities;
