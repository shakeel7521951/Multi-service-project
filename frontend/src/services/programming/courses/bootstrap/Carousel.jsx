// src/pages/bootstrap/Carousel.jsx
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Carousel = () => {
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

  // Snippets
  const basicCarousel = `<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://picsum.photos/id/1015/1200/400" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/id/1016/1200/400" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/id/1018/1200/400" class="d-block w-100" alt="...">
    </div>
  </div>
</div>`;

  const withControls = `<div id="carouselControls" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://picsum.photos/id/1020/1200/400" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/id/1021/1200/400" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>`;

  const withIndicators = `<div id="carouselIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://picsum.photos/id/1022/1200/400" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/id/1023/1200/400" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/id/1024/1200/400" class="d-block w-100" alt="...">
    </div>
  </div>
</div>`;

  const withCaptions = `<div id="carouselCaptions" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://picsum.photos/id/1025/1200/400" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First Slide</h5>
        <p>This is an example caption text for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/id/1026/1200/400" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second Slide</h5>
        <p>Captions can include headings, paragraphs, or buttons.</p>
      </div>
    </div>
  </div>
</div>`;

  const fadeCarousel = `<div id="carouselFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://picsum.photos/id/1027/1200/400" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/id/1028/1200/400" class="d-block w-100" alt="...">
    </div>
  </div>
</div>`;

  const autoplayCarousel = `<div id="carouselInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      <img src="https://picsum.photos/id/1029/1200/400" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://picsum.photos/id/1030/1200/400" class="d-block w-100" alt="...">
    </div>
  </div>
</div>`;

  const darkCarousel = `<div id="carouselDark" class="carousel slide carousel-dark">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://picsum.photos/id/1031/1200/400" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Dark Variant</h5>
        <p>Captions and controls appear dark for better readability.</p>
      </div>
    </div>
  </div>
</div>`;

  const customContent = `<div id="carouselContent" class="carousel slide">
  <div class="carousel-inner text-center">
    <div class="carousel-item active p-5 bg-light">
      <h3>Custom Slide 1</h3>
      <p>You can add text, buttons, or even cards.</p>
    </div>
    <div class="carousel-item p-5 bg-info text-white">
      <h3>Custom Slide 2</h3>
      <button class="btn btn-dark">Click Me</button>
    </div>
  </div>
</div>`;

  // ---- Utility renderer ----
  const renderExample = (title, desc, code) => (
    <section className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">{title}</h2>
      <p className="text-gray-800 mb-4 leading-relaxed">{desc}</p>
      <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-inner border border-gray-300">
        <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
          <code>{code}</code>
        </pre>
        <button
          onClick={() => handleCopy(code)}
          className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
        >
          {copied ? "Copied!" : "Copy Code"}
        </button>
      </div>
    </section>
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-[#f9f9f9] to-[#f0f0f0] px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-[#04AA6D] drop-shadow">
            Bootstrap Carousel
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Bootstrap Carousel is a slideshow component that cycles through
            images or custom content. It includes controls, indicators,
            captions, fade transitions, autoplay, dark mode, and is responsive
            by default.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap/modals"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Modals
          </Link>
          <Link
            to="/bootstrap/utilities"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Utilities <FaChevronRight />
          </Link>
        </div>

        {/* Sections */}
        {renderExample("Basic Example", "A simple carousel without controls or indicators.", basicCarousel)}
        {renderExample("With Controls", "Navigation controls let users go forward and backward.", withControls)}
        {renderExample("With Indicators", "Indicators represent each slide at the bottom.", withIndicators)}
        {renderExample("With Captions", "Captions overlay text or buttons on slides.", withCaptions)}
        {renderExample("Fade Transition", "Add .carousel-fade for smooth crossfading.", fadeCarousel)}
        {renderExample("Autoplay & Interval", "Customize slide intervals with data-bs-interval.", autoplayCarousel)}
        {renderExample("Dark Variant", "Use .carousel-dark for dark captions and controls.", darkCarousel)}
        {renderExample("Custom Content", "Carousels can hold any content, not just images.", customContent)}

        {/* Features Summary */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Features</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><b>Controls</b>: Previous & Next buttons.</li>
            <li><b>Indicators</b>: Small dots for navigation.</li>
            <li><b>Captions</b>: Overlay text and buttons.</li>
            <li><b>Fade</b>: Smooth crossfade transitions.</li>
            <li><b>Autoplay</b>: Automatic cycling with intervals.</li>
            <li><b>Dark variant</b>: Dark controls & captions.</li>
            <li><b>Custom content</b>: Text, buttons, or cards inside slides.</li>
            <li><b>Responsive</b>: Works on all screen sizes with touch support.</li>
            <li><b>Keyboard support</b>: Use ← → arrows to navigate.</li>
          </ul>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">Next Step</h2>
          <p className="text-gray-700">
            Next, explore{" "}
            <Link
              to="/bootstrap/buttons"
              className="text-[#04AA6D] font-semibold hover:underline"
            >
              Buttons
            </Link>{" "}
            to learn how to style interactive elements in Bootstrap.
          </p>
        </section>

        {/* Bottom Navigation */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap/modals"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Modals
          </Link>
          <Link
            to="/bootstrap/utilities"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Utilities <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
