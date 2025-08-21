// src/pages/bootstrap/Images.jsx
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Images = () => {
  const [copied, setCopied] = useState(false);

  const responsiveImageCode = `<img src="https://via.placeholder.com/400x200" class="img-fluid" alt="Responsive image">`;
  const roundedImageCode = `<img src="https://via.placeholder.com/200" class="rounded" alt="Rounded image">`;
  const circleImageCode = `<img src="https://via.placeholder.com/150" class="rounded-circle" alt="Circle image">`;
  const thumbnailImageCode = `<img src="https://via.placeholder.com/200" class="img-thumbnail" alt="Thumbnail image">`;
  const figureImageCode = `<figure class="figure">
  <img src="https://via.placeholder.com/300" class="figure-img img-fluid rounded" alt="Figure image">
  <figcaption class="figure-caption text-center">A caption for the above image.</figcaption>
</figure>`;

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
            Bootstrap Images
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Bootstrap provides a variety of classes to style and manage images easily. 
            You can make images responsive, rounded, circular, thumbnails, and even add captions with figures.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap/tables"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Tables
          </Link>

          <Link
            to="/bootstrap/alerts"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Alerts <FaChevronRight />
          </Link>
        </div>

        {/* Responsive Images */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Responsive Images</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Use the <code>.img-fluid</code> class to make images scale with the parent element.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-inner border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{responsiveImageCode}</code>
            </pre>
            <button
              onClick={() => handleCopy(responsiveImageCode)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Rounded & Circle Images */}
        <section className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200 space-y-6">
          <h2 className="text-3xl font-bold text-[#04AA6D]">Rounded & Circular Images</h2>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Rounded</h3>
            <p className="text-gray-700 mb-2">Add <code>.rounded</code> to create rounded corners.</p>
            <div className="bg-[#E7E9EB] p-4 rounded-xl border border-gray-300">
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
                <code>{roundedImageCode}</code>
              </pre>
              <button
                onClick={() => handleCopy(roundedImageCode)}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-3 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
              >
                {copied ? "Copied!" : "Copy Code"}
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Circle</h3>
            <p className="text-gray-700 mb-2">Add <code>.rounded-circle</code> to make an image circular.</p>
            <div className="bg-[#E7E9EB] p-4 rounded-xl border border-gray-300">
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
                <code>{circleImageCode}</code>
              </pre>
              <button
                onClick={() => handleCopy(circleImageCode)}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-3 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
              >
                {copied ? "Copied!" : "Copy Code"}
              </button>
            </div>
          </div>
        </section>

        {/* Thumbnails */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Image Thumbnails</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Add <code>.img-thumbnail</code> to display an image with a rounded border.
          </p>
          <div className="bg-[#E7E9EB] p-4 rounded-xl border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{thumbnailImageCode}</code>
            </pre>
            <button
              onClick={() => handleCopy(thumbnailImageCode)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-3 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Figures */}
        <section className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Figures with Captions</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Use <code>&lt;figure&gt;</code> and <code>.figure-caption</code> for captions.
          </p>
          <div className="bg-[#E7E9EB] p-4 rounded-xl border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{figureImageCode}</code>
            </pre>
            <button
              onClick={() => handleCopy(figureImageCode)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-3 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">Next Step</h2>
          <p className="text-gray-700">
            After learning images, the next topic is{" "}
            <Link
              to="/bootstrap/buttons"
              className="text-[#04AA6D] font-semibold hover:underline"
            >
              Buttons
            </Link>{" "}
            where you will explore styling buttons in Bootstrap.
          </p>
        </section>

        {/* Bottom Navigation */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap/tables"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Tables
          </Link>

          <Link
            to="/bootstrap/alerts"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Alerts <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Images;
