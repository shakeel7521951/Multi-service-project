// src/pages/bootstrap/Modals.jsx
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Modals = () => {
  const [copied, setCopied] = useState(false);

  // Sample modal codes
  const basicModal = `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basicModal">
  Launch Basic Modal
</button>

<div class="modal fade" id="basicModal" tabindex="-1" aria-labelledby="basicModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="basicModalLabel">Modal Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        This is a basic Bootstrap modal.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`;

  const modalSizes = `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#largeModal">
  Large Modal
</button>

<div class="modal fade" id="largeModal" tabindex="-1">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Large Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        This modal uses <code>.modal-lg</code> for a larger size.
      </div>
    </div>
  </div>
</div>

<button type="button" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#smallModal">
  Small Modal
</button>

<div class="modal fade" id="smallModal" tabindex="-1">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Small Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        This modal uses <code>.modal-sm</code> for a smaller size.
      </div>
    </div>
  </div>
</div>`;

  const modalScrolling = `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#scrollingModal">
  Scrollable Modal
</button>

<div class="modal fade" id="scrollingModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Scrollable Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <p>Lots of content here...</p>
        <p>Repeat content to demonstrate scrolling...</p>
        <p>Keep adding content...</p>
        <p>More content...</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;

  const modalCentered = `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#centeredModal">
  Vertically Centered Modal
</button>

<div class="modal fade" id="centeredModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Centered Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        This modal is vertically centered using <code>.modal-dialog-centered</code>.
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
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
            Bootstrap Modals
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Modals are dialog boxes that pop up over the main content. Bootstrap modals support multiple sizes, scrolling content, centered positioning, and rich interactive content.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap/dropdowns"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Dropdowns
          </Link>

          <Link
            to="/bootstrap/carousel"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Carousel <FaChevronRight />
          </Link>
        </div>

        {/* Basic Modal */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Basic Modal</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            A basic modal has a header, body, and footer. Use the <code>data-bs-toggle="modal"</code> attribute on a button to trigger the modal.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-inner border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{basicModal}</code>
            </pre>
            <button
              onClick={() => handleCopy(basicModal)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Modal Sizes */}
        <section className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Modal Sizes</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Modals can be small, default, or large using <code>.modal-sm</code>, default, or <code>.modal-lg</code>.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{modalSizes}</code>
            </pre>
            <button
              onClick={() => handleCopy(modalSizes)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Scrollable Modal */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Scrollable Modal</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Add <code>.modal-dialog-scrollable</code> to make the modal body scrollable while keeping the header and footer fixed.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{modalScrolling}</code>
            </pre>
            <button
              onClick={() => handleCopy(modalScrolling)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Vertically Centered Modal */}
        <section className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Vertically Centered Modal</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Center modals vertically using <code>.modal-dialog-centered</code> to improve the user experience on larger screens.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{modalCentered}</code>
            </pre>
            <button
              onClick={() => handleCopy(modalCentered)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Next Step */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">Next Step</h2>
          <p className="text-gray-700">
            Now that you understand modals, the next topic is{" "}
            <Link
              to="/bootstrap/pagination"
              className="text-[#04AA6D] font-semibold hover:underline"
            >
              Pagination
            </Link>{" "}
            where you will learn about different pagination styles and alignment.
          </p>
        </section>

        {/* Bottom Navigation */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap/dropdowns"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Dropdowns
          </Link>

          <Link
            to="/bootstrap/carousel"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Carousel <FaChevronRight />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Modals;
