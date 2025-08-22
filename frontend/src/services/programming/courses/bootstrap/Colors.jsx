import CodeBlock from "./CodeBlock";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Colors = () => {
  const paletteExample = `<!-- Palette examples -->
<p class="text-primary">.text-primary</p>
<p class="text-secondary">.text-secondary</p>
<p class="text-success">.text-success</p>
<p class="text-danger">.text-danger</p>
<p class="text-warning">.text-warning</p>
<p class="text-info">.text-info</p>
<p class="text-dark">.text-dark</p>
<p class="text-muted">.text-muted</p>
<p class="text-white bg-dark d-inline-block px-2">.text-white</p>`;

  const linkUtilities = `<!-- Link color utilities -->
<a href="#" class="link-primary me-2">Primary link</a>
<a href="#" class="link-secondary me-2">Secondary link</a>
<a href="#" class="link-success me-2">Success link</a>
<a href="#" class="link-danger me-2">Danger link</a>
<a href="#" class="link-warning me-2">Warning link</a>
<a href="#" class="link-info me-2">Info link</a>
<a href="#" class="link-dark me-2">Dark link</a>`;

  const textBgHelpers = `<!-- Readable text backgrounds (auto-contrast) -->
<span class="text-bg-primary px-2 py-1 rounded me-2">.text-bg-primary</span>
<span class="text-bg-success px-2 py-1 rounded me-2">.text-bg-success</span>
<span class="text-bg-danger px-2 py-1 rounded me-2">.text-bg-danger</span>
<span class="text-bg-warning px-2 py-1 rounded me-2">.text-bg-warning</span>
<span class="text-bg-info px-2 py-1 rounded me-2">.text-bg-info</span>
<span class="text-bg-dark px-2 py-1 rounded me-2">.text-bg-dark</span>
<span class="text-bg-light px-2 py-1 rounded">.text-bg-light</span>`;

  const backgroundExample = `<!-- Background utilities -->
<div class="p-2 mb-2 bg-primary text-white">.bg-primary</div>
<div class="p-2 mb-2 bg-secondary text-white">.bg-secondary</div>
<div class="p-2 mb-2 bg-success text-white">.bg-success</div>
<div class="p-2 mb-2 bg-danger text-white">.bg-danger</div>
<div class="p-2 mb-2 bg-warning text-dark">.bg-warning</div>
<div class="p-2 mb-2 bg-info text-dark">.bg-info</div>
<div class="p-2 mb-2 bg-light text-dark">.bg-light</div>
<div class="p-2 mb-2 bg-dark text-white">.bg-dark</div>
<div class="p-2 mb-2 bg-white text-dark border">.bg-white</div>`;

  const bgOpacityExample = `<!-- Background opacity variants -->
<div class="p-2 mb-2 bg-primary bg-opacity-100 text-white">100%</div>
<div class="p-2 mb-2 bg-primary bg-opacity-75 text-white">75%</div>
<div class="p-2 mb-2 bg-primary bg-opacity-50">50%</div>
<div class="p-2 mb-2 bg-primary bg-opacity-25">25%</div>
<div class="p-2 mb-2 bg-primary bg-opacity-10">10%</div>`;

  const gradientExample = `<!-- Background gradient helper -->
<div class="p-3 mb-2 bg-primary bg-gradient text-white rounded">Primary gradient</div>
<div class="p-3 mb-2 bg-success bg-gradient text-white rounded">Success gradient</div>
<div class="p-3 mb-2 bg-danger bg-gradient text-white rounded">Danger gradient</div>`;

  const borderExample = `<!-- Border color utilities -->
<div class="p-2 mb-2 border border-primary rounded">.border-primary</div>
<div class="p-2 mb-2 border border-success rounded">.border-success</div>
<div class="p-2 mb-2 border border-danger rounded">.border-danger</div>
<div class="p-2 mb-2 border border-warning rounded">.border-warning</div>
<div class="p-2 mb-2 border border-info rounded">.border-info</div>
<div class="p-2 mb-2 border border-dark rounded">.border-dark</div>`;

  const opacityUtilities = `<!-- Generic opacity utilities (apply to any element) -->
<img src="https://picsum.photos/300/100" class="opacity-100 d-block mb-2" alt="..." />
<img src="https://picsum.photos/300/100" class="opacity-75 d-block mb-2" alt="..." />
<img src="https://picsum.photos/300/100" class="opacity-50 d-block mb-2" alt="..." />
<img src="https://picsum.photos/300/100" class="opacity-25 d-block" alt="..." />`;

  const variablesExample = `/* Override Bootstrap colors with CSS variables (5.3+) */
:root {
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
}

/* Or create a custom utility via Utility API (SCSS) */
// In your SCSS build:
// $utilities: (
//   "text": (
//     property: color,
//     class: text,
//     values: (brand: #04AA6D)
//   )
// );`;

  const contrastTips = `<!-- Contrast tips -->
<!-- Ensure contrast: WCAG recommends 4.5:1 for normal text -->
<p class="text-dark bg-warning p-2">High contrast example</p>
<p class="text-white bg-primary p-2">High contrast example</p>
<p class="text-muted bg-light p-2 border">Muted on light (use for less emphasis)</p>`;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-[#f9f9f9] to-[#f0f0f0] px-0 sm:px-4 lg:px-6 py-3 sm:py-10 lg:py-14">
      <div className="max-w-6xl mx-auto space-y-5 sm:space-y-10 lg:space-y-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-[#04AA6D] drop-shadow">
            Bootstrap Colors & Backgrounds
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Master Bootstrap’s color utilities for text, links, backgrounds,
            borders, gradients, and opacity. This page follows the same layout
            and color scheme as the rest of the tutorial.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap/typography"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Typography
          </Link>

          <Link
            to="/bootstrap/tables"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Tables <FaChevronRight />
          </Link>
        </div>

        {/* Palette Overview */}
        <section className="bg-[#D9EEE1] p-5 md:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Bootstrap Color Palette
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Bootstrap ships with a contextual palette you’ll use across
            components and utilities. These keys map to CSS variables such as{" "}
            <code>--bs-primary</code>, <code>--bs-success</code>,etc.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              ["primary", "#0d6efd"],
              ["secondary", "#6c757d"],
              ["success", "#198754"],
              ["danger", "#dc3545"],
              ["warning", "#ffc107"],
              ["info", "#0dcaf0"],
              ["light", "#f8f9fa"],
              ["dark", "#212529"],
            ].map(([name, hex]) => (
              <div
                key={name}
                className="rounded-xl border overflow-hidden shadow bg-white "
              >
                <div
                  className="h-12 border-b"
                  style={{ background: hex }}
                  title={hex}
                />
                <div className="p-3 text-sm">
                  <div className="font-semibold">{name}</div>
                  <div className="text-gray-600">{hex}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="font-bold mb-3 mt-3">Quick text palette</h3>
          <CodeBlock code={paletteExample} />
        </section>

        {/* Text Colors & Links */}
        <section className="bg-white p-5 md:p-10 rounded-2xl shadow-lg border border-gray-200 space-y-6">
          <h2 className="text-3xl font-bold text-[#04AA6D]">
            Text Colors and Link Utilities
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Apply text colors with <code>.text-*</code> and color your anchors
            consistently with <code>.link-*</code>. Use <code>.text-muted</code>{" "}
            to de-emphasize content.
          </p>

          <h3 className="font-bold mb-3">Link color helpers</h3>
          <CodeBlock code={linkUtilities} />
        </section>

        {/* Readable Text Background Helpers */}
        <section className="bg-[#D9EEE1] p-5 md:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Readable Text Backgrounds
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Use <code>.text-bg-*</code> to apply a background color with
            automatically adjusted readable text color. This is ideal for
            badges, labels, and chips.
          </p>
          <CodeBlock code={textBgHelpers} />
        </section>

        {/* Background Colors */}
        <section className="bg-white p-5 md:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Background Colors
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Use <code>.bg-*</code> to color backgrounds. Pair them with
            appropriate text colors for contrast.
          </p>

          {/* Visual Examples */}
          <div className="space-y-2 mb-6">
            <div className="p-2 rounded bg-blue-600 text-white">
              .bg-primary
            </div>
            <div className="p-2 rounded bg-gray-600 text-white">
              .bg-secondary
            </div>
            <div className="p-2 rounded bg-green-600 text-white">
              .bg-success
            </div>
            <div className="p-2 rounded bg-red-600 text-white">.bg-danger</div>
            <div className="p-2 rounded bg-yellow-400 text-black">
              .bg-warning
            </div>
            <div className="p-2 rounded bg-cyan-400 text-black">.bg-info</div>
            <div className="p-2 rounded bg-gray-100 text-black border">
              .bg-light
            </div>
            <div className="p-2 rounded bg-gray-900 text-white">.bg-dark</div>
            <div className="p-2 rounded bg-white text-black border">
              .bg-white
            </div>
          </div>

          {/* Code Example */}
          <CodeBlock code={backgroundExample} />
        </section>

        {/* Background Opacity */}
        <section className="bg-[#D9EEE1] p-5 md:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Background Opacity
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Add opacity to background colors with <code>.bg-opacity-10</code>,{" "}
            <code>25</code>, <code>50</code>, <code>75</code>, or{" "}
            <code>100</code>. This is applied via CSS variables and keeps your
            text color unaffected.
          </p>
          <CodeBlock code={bgOpacityExample} />
        </section>

        {/* Gradients */}
        <section className="bg-white p-5 md:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Background Gradients
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Add a subtle top-to-bottom gradient with <code>.bg-gradient</code>{" "}
            on any colored background.
          </p>
          <CodeBlock code={gradientExample} />
        </section>

        {/* Borders */}
        <section className="bg-[#D9EEE1] p-5 md:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Border Colors
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Color borders with <code>.border-*</code>. Combine with{" "}
            <code>.border</code>, rounding utilities, and spacing.
          </p>
          <CodeBlock code={borderExample} />
        </section>

        {/* Generic Opacity Utilities */}
        <section className="bg-white p-5 md:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Generic Opacity Utilities
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Control the transparency of any element using{" "}
            <code>.opacity-0</code>, <code>25</code>, <code>50</code>,{" "}
            <code>75</code>, or <code>100</code>.
          </p>
          <CodeBlock code={opacityUtilities} />
        </section>

        {/* CSS Variables and Theming */}
        <section className="bg-[#D9EEE1] p-5 md:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Customizing Colors
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            In Bootstrap 5.3+, colors are powered by CSS variables. You can
            override them at the root, per component, or even per section with{" "}
            <code>data-bs-theme</code>.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>
              Override core colors via <code>:root</code> variables.
            </li>
            <li>
              Use <code>data-bs-theme="dark"</code> on containers to switch
              local colors for dark mode.
            </li>
            <li>Generate custom utilities with the Utility API in SCSS.</li>
          </ul>

          <CodeBlock code={variablesExample} />
        </section>

        {/* Accessibility Notes */}
        <section className="bg-white p-5 md:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Accessibility and Contrast
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Always ensure sufficient color contrast, especially for body text
            and UI controls. Prefer combinations that meet WCAG 2.1 AA
            guidelines.
          </p>
          <CodeBlock code={contrastTips} />
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">Next Step</h2>
          <p className="text-gray-700">
            Continue to{" "}
            <Link
              to="/bootstrap/tables"
              className="text-[#04AA6D] font-semibold hover:underline"
            >
              Tables
            </Link>{" "}
            to learn how to style and format tabular data with Bootstrap.
          </p>
        </section>

        {/* Bottom Navigation */}
        <div className="flex sm:flex-row justify-between gap-4 sm:gap-0">
          <Link
            to="/bootstrap/typography"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Typography
          </Link>

          <Link
            to="/bootstrap/tables"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Tables <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Colors;
