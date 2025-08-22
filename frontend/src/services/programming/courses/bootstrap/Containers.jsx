// src/pages/bootstrap/Containers.jsx
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Containers = () => {
  // Code samples
  const basicContainer = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Basic .container</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <header class="py-4 bg-light">
    <div class="container">
      <h1 class="h3 mb-0">Fixed-width Container</h1>
    </div>
  </header>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;

  const fluidContainer = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>.container-fluid</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <section class="py-4 bg-dark text-white">
    <div class="container-fluid">
      <h1 class="h3 mb-0">Fluid Container (always 100% width)</h1>
    </div>
  </section>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;

  const responsiveContainer = `<!-- .container-{breakpoint}: fluid below breakpoint, fixed above it -->
<header class="py-4 bg-light">
  <div class="container-md">
    <!-- 100% width below md; fixed max-width at md and up -->
    <h1 class="h4 mb-0">container-md</h1>
  </div>
</header>`;

  const gridInsideContainer = `<!-- Grid must live inside a container (fixed, responsive, or fluid) -->
<section class="py-4">
  <div class="container">
    <div class="row g-3">
      <div class="col-12 col-md-6">
        <div class="p-3 border rounded">Column A</div>
      </div>
      <div class="col-12 col-md-6">
        <div class="p-3 border rounded">Column B</div>
      </div>
    </div>
  </div>
</section>`;

  const fullBleedPattern = `<!-- Full-width background with centered content -->
<section class="py-5 bg-light">
  <div class="container">
    <h2 class="h4">Centered content inside a full-width background</h2>
    <p class="mb-0">Use a full-bleed section + inner .container.</p>
  </div>
</section>`;

  const navbarPatterns = `<!-- Navbar with fixed-width inner .container -->
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">Brand</a>
  </div>
</nav>

<!-- Navbar spanning full width -->
<nav class="navbar navbar-expand-lg bg-body-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Brand</a>
  </div>
</nav>`;

  const paddingControl = `<!-- Adjust side padding via utilities (quick) -->
<div class="container px-4">Content with wider side padding on all breakpoints</div>

<!-- Or per breakpoint -->
<div class="container px-2 px-md-4 px-xl-5">Responsive padding</div>

<!-- Change horizontal gutter variable locally (affects rows/cols inside) -->
<div class="container" style="--bs-gutter-x: 2rem;">
  <div class="row g-0">
    <div class="col"><div class="p-3 border rounded">A</div></div>
    <div class="col"><div class="p-3 border rounded">B</div></div>
  </div>
</div>`;

  const customContainerCSS = `/* Create your own container size */
.custom-container {
  /* Typical centered wrapper pattern */
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: calc(var(--bs-gutter-x, 1.5rem) * .5);
  padding-left: calc(var(--bs-gutter-x, 1.5rem) * .5);
  max-width: 80rem; /* 1280px example */
}

/* Optional: alter at breakpoints */
@media (min-width: 1400px) {
  .custom-container { max-width: 90rem; } /* 1440px */
}`;

  const sassCustomization = `// _custom.scss (loaded after Bootstrap’s source)
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);

$container-max-widths: (
  sm: 560px,  // customize
  md: 740px,
  lg: 980px,
  xl: 1160px,
  xxl: 1320px
);

// Optional: tweak container-side padding
$container-padding-x: 1rem; // default is based on gutter; override if needed

@import "bootstrap";`;

  const containerInGridColumn = `<!-- Avoid putting .container directly inside a .col unless you want a new layout context -->
<div class="container">
  <div class="row">
    <div class="col-12 col-lg-8">
      <!-- If you add another .container here, you create a new centered context with its own side padding -->
      <!-- Prefer using simple wrappers or utilities unless you intentionally need this -->
      <div class="px-3">Content without nesting another .container</div>
    </div>
  </div>
</div>`;

  const mixedLayouts = `<!-- Mixed usage: fixed header, fluid hero, fixed content -->
<header class="py-3 border-bottom">
  <div class="container">
    <h1 class="h4 mb-0">Site Title</h1>
  </div>
</header>

<section class="py-5 bg-dark text-white">
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col-12 col-lg-6 p-4">
        <h2 class="h3">Fluid Hero</h2>
        <p class="mb-0">Great for edge-to-edge imagery or backgrounds.</p>
      </div>
    </div>
  </div>
</section>

<main class="py-5">
  <div class="container">
    <p class="lead mb-0">Primary content area in a fixed-width container.</p>
  </div>
</main>`;

  // Copy state
  const [copied, setCopied] = useState({
    basic: false,
    fluid: false,
    responsive: false,
    grid: false,
    fullBleed: false,
    navbar: false,
    padding: false,
    customCss: false,
    sass: false,
    inCol: false,
    mixed: false,
  });

  const handleCopy = (key, text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied((s) => ({ ...s, [key]: true }));
        setTimeout(() => setCopied((s) => ({ ...s, [key]: false })), 1500);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-[#f9f9f9] to-[#f0f0f0] px-0 sm:px-4 lg:px-6 py-3 sm:py-10 lg:py-14">
      <div className="w-full max-w-6xl mx-auto space-y-5 sm:space-y-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold mb-4 text-[#04AA6D] drop-shadow">
            Bootstrap Containers
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Containers are the fundamental building block for layout in
            Bootstrap. They provide a centered, responsive wrapper that sets
            horizontal padding and optional maximum widths. All grid layouts
            should be placed inside a container.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex flex-row justify-between gap-3 sm:gap-2">
          <Link
            to="/bootstrap/installation-setup"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Installation & Setup
          </Link>
          <Link
            to="/bootstrap/grid-system"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Grid System <FaChevronRight />
          </Link>
        </div>

        {/* Types of Containers */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-6 text-[#04AA6D]">
            Container Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800">
            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <h3 className="font-bold mb-2">.container</h3>
              <p>
                Sets responsive max-widths at each breakpoint. Centers content
                and adds side padding.
              </p>
            </div>
            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <h3 className="font-bold mb-2">.container-fluid</h3>
              <p>
                Always 100% width across all breakpoints. Still includes
                horizontal side padding.
              </p>
            </div>
            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <h3 className="font-bold mb-2">.container-{`{breakpoint}`}</h3>
              <p>
                Fluid below the specified breakpoint, fixed max-width at and
                above it. Available for sm, md, lg, xl, xxl.
              </p>
            </div>
          </div>
        </section>

        {/* Breakpoints & Max-widths */}
        <section className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-[#04AA6D]">
            Breakpoints and Max-widths
          </h2>
          <p className="text-gray-800 mb-4">
            By default, Bootstrap’s containers align to these breakpoints and
            maximum widths (approximate defaults):
          </p>
          <div className="overflow-x-auto rounded-xl border">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#E7E9EB]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Class</th>
                  <th className="px-4 py-3 font-semibold">Applies at ≥</th>
                  <th className="px-4 py-3 font-semibold">Max-width</th>
                  <th className="px-4 py-3 font-semibold">
                    Behavior below breakpoint
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    cls: ".container",
                    at: "xs (0px)",
                    mw: "varies by breakpoint",
                    beh: "Fixed at each breakpoint; responsive overall",
                  },
                  {
                    cls: ".container-sm",
                    at: "576px (sm)",
                    mw: "540px",
                    beh: "Fluid below 576px",
                  },
                  {
                    cls: ".container-md",
                    at: "768px (md)",
                    mw: "720px",
                    beh: "Fluid below 768px",
                  },
                  {
                    cls: ".container-lg",
                    at: "992px (lg)",
                    mw: "960px",
                    beh: "Fluid below 992px",
                  },
                  {
                    cls: ".container-xl",
                    at: "1200px (xl)",
                    mw: "1140px",
                    beh: "Fluid below 1200px",
                  },
                  {
                    cls: ".container-xxl",
                    at: "1400px (xxl)",
                    mw: "1320px",
                    beh: "Fluid below 1400px",
                  },
                  {
                    cls: ".container-fluid",
                    at: "always",
                    mw: "100% width",
                    beh: "Always fluid",
                  },
                ].map((r, i) => (
                  <tr key={i} className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-3 font-mono">{r.cls}</td>
                    <td className="px-4 py-3">{r.at}</td>
                    <td className="px-4 py-3">{r.mw}</td>
                    <td className="px-4 py-3">{r.beh}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4">
            These values come from Bootstrap’s Sass maps and can be customized
            during a Sass build.
          </p>
        </section>

        {/* Basic .container */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">
            Basic .container
          </h2>
          <p className="text-gray-700 mb-4">
            A centered wrapper with responsive max-widths and horizontal
            padding.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-2xl shadow-inner border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-[13px] rounded-lg overflow-x-auto shadow">
              <code>{basicContainer}</code>
            </pre>
            <button
              onClick={() => handleCopy("basic", basicContainer)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition"
            >
              {copied.basic ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* .container-fluid */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">
            .container-fluid
          </h2>
          <p className="text-gray-700 mb-4">
            Spans the entire viewport width at all breakpoints; still provides
            side padding.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-2xl shadow-inner border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-[13px] rounded-lg overflow-x-auto shadow">
              <code>{fluidContainer}</code>
            </pre>
            <button
              onClick={() => handleCopy("fluid", fluidContainer)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition"
            >
              {copied.fluid ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* .container-{breakpoint} */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">
            .container-{`{breakpoint}`}
          </h2>
          <p className="text-gray-700 mb-4">
            Use <code>.container-sm</code>, <code>.container-md</code>,{" "}
            <code>.container-lg</code>, <code>.container-xl</code>, or{" "}
            <code>.container-xxl</code> to be fluid below a breakpoint and fixed
            above it.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-2xl shadow-inner border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-[13px] rounded-lg overflow-x-auto shadow">
              <code>{responsiveContainer}</code>
            </pre>
            <button
              onClick={() => handleCopy("responsive", responsiveContainer)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition"
            >
              {copied.responsive ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Grid inside container */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">
            Using the Grid Inside Containers
          </h2>
          <p className="text-gray-800 mb-4">
            Rows and columns should live inside a container. The container sets
            side padding and centers the content; the grid’s gutters are
            calculated from a CSS variable that the container also defines.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-inner border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-[13px] rounded-lg overflow-x-auto shadow">
              <code>{gridInsideContainer}</code>
            </pre>
            <button
              onClick={() => handleCopy("grid", gridInsideContainer)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition"
            >
              {copied.grid ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Full-bleed pattern */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">
            Full-Bleed Background, Centered Content
          </h2>
          <p className="text-gray-700 mb-4">
            Wrap a full-width section in a background color or image, then place
            an inner <code>.container</code> to keep content aligned with the
            rest of the page.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-2xl shadow-inner border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-[13px] rounded-lg overflow-x-auto shadow">
              <code>{fullBleedPattern}</code>
            </pre>
            <button
              onClick={() => handleCopy("fullBleed", fullBleedPattern)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition"
            >
              {copied.fullBleed ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Navbar patterns */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">
            Containers in Navbars
          </h2>
          <p className="text-gray-700 mb-4">
            Use <code>.container</code> to align navbar content with the page
            width, or <code>.container-fluid</code> to span the viewport edge to
            edge.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-2xl shadow-inner border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-[13px] rounded-lg overflow-x-auto shadow">
              <code>{navbarPatterns}</code>
            </pre>
            <button
              onClick={() => handleCopy("navbar", navbarPatterns)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition"
            >
              {copied.navbar ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Padding and gutters */}
        <section className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Padding, Gutters, and Alignment
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
            <li>
              Containers include horizontal padding so content doesn’t touch the
              viewport edges.
            </li>
            <li>
              The grid uses <code>--bs-gutter-x</code> to compute horizontal
              gutters; containers set this variable.
            </li>
            <li>
              Adjust side padding with spacing utilities like <code>px-*</code>,
              or override the gutter variable locally.
            </li>
            <li>
              For sections with no side padding, use <code>.g-0</code> on rows
              or utilities like <code>px-0</code> on the container.
            </li>
          </ul>
          <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-inner border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-[13px] rounded-lg overflow-x-auto shadow">
              <code>{paddingControl}</code>
            </pre>
            <button
              onClick={() => handleCopy("padding", paddingControl)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition"
            >
              {copied.padding ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Nesting guidance */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">
            Nesting and Best Practices
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
            <li>
              Place rows and columns inside a container. Do not place rows
              directly in the body without a container.
            </li>
            <li>
              Avoid nesting a <code>.container</code> inside grid columns unless
              you intentionally need a new centered layout context.
            </li>
            <li>
              Prefer one container per major section. Use utilities and wrappers
              for inner spacing instead of extra containers.
            </li>
          </ul>
          <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-inner border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-[13px] rounded-lg overflow-x-auto shadow">
              <code>{containerInGridColumn}</code>
            </pre>
            <button
              onClick={() => handleCopy("inCol", containerInGridColumn)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition"
            >
              {copied.inCol ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Mixed layout pattern */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">
            Combining Fixed and Fluid Sections
          </h2>
          <p className="text-gray-700 mb-4">
            Mix container types to achieve balanced layouts with full-bleed
            sections and centered content.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-2xl shadow-inner border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-[13px] rounded-lg overflow-x-auto shadow">
              <code>{mixedLayouts}</code>
            </pre>
            <button
              onClick={() => handleCopy("mixed", mixedLayouts)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition"
            >
              {copied.mixed ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Custom container CSS */}
        <section className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Creating a Custom Container
          </h2>
          <p className="text-gray-800 mb-4">
            If none of the built-in sizes fit your design, create a custom
            container class with your own <code>max-width</code> while keeping
            Bootstrap’s padding behavior.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-inner border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-[13px] rounded-lg overflow-x-auto shadow">
              <code>{customContainerCSS}</code>
            </pre>
            <button
              onClick={() => handleCopy("customCss", customContainerCSS)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition"
            >
              {copied.customCss ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Visual Representation of Containers */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30 mt-10">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Visual: Bootstrap Containers
          </h2>
          <p className="text-gray-800 mb-6 leading-relaxed">
            Below are all the Bootstrap container types. Resize your browser
            window to see how each one behaves at different breakpoints.
          </p>

          <div className="space-y-6">
            {/* Container */}
            <div className="border-2 border-[#04AA6D] bg-white p-6 rounded-lg shadow text-center">
              <div className="container bg-[#E7E9EB] border border-gray-400 p-4 rounded">
                <p className="font-semibold text-gray-700">
                  .container (Responsive fixed-width)
                </p>
              </div>
            </div>

            {/* Container Fluid */}
            <div className="border-2 border-[#04AA6D] bg-white p-6 rounded-lg shadow text-center">
              <div className="container-fluid bg-[#E7E9EB] border border-gray-400 p-4 rounded">
                <p className="font-semibold text-gray-700">
                  .container-fluid (Always 100% width)
                </p>
              </div>
            </div>

            {/* Breakpoint Specific */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border-2 border-[#04AA6D] bg-white p-6 rounded-lg shadow text-center">
                <div className="container-sm bg-[#E7E9EB] border border-gray-400 p-4 rounded">
                  <p className="font-semibold text-gray-700">.container-sm</p>
                </div>
              </div>

              <div className="border-2 border-[#04AA6D] bg-white p-6 rounded-lg shadow text-center">
                <div className="container-md bg-[#E7E9EB] border border-gray-400 p-4 rounded">
                  <p className="font-semibold text-gray-700">.container-md</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="border-2 border-[#04AA6D] bg-white p-6 rounded-lg shadow text-center">
                <div className="container-lg bg-[#E7E9EB] border border-gray-400 p-4 rounded">
                  <p className="font-semibold text-gray-700">.container-lg</p>
                </div>
              </div>

              <div className="border-2 border-[#04AA6D] bg-white p-6 rounded-lg shadow text-center">
                <div className="container-xl bg-[#E7E9EB] border border-gray-400 p-4 rounded">
                  <p className="font-semibold text-gray-700">.container-xl</p>
                </div>
              </div>

              <div className="border-2 border-[#04AA6D] bg-white p-6 rounded-lg shadow text-center">
                <div className="container-xxl bg-[#E7E9EB] border border-gray-400 p-4 rounded">
                  <p className="font-semibold text-gray-700">.container-xxl</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sass customization */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Advanced: Sass Customization
          </h2>
          <p className="text-gray-800 mb-4">
            When building Bootstrap from source, adjust the Sass maps to change
            breakpoints and container widths globally. Import your overrides
            before compiling Bootstrap.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-inner border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-[13px] rounded-lg overflow-x-auto shadow">
              <code>{sassCustomization}</code>
            </pre>
            <button
              onClick={() => handleCopy("sass", sassCustomization)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition"
            >
              {copied.sass ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <ul className="list-disc list-inside text-gray-800 mt-4 space-y-1">
            <li>
              <code>$grid-breakpoints</code> controls the breakpoint map.
            </li>
            <li>
              <code>$container-max-widths</code> sets the fixed widths for{" "}
              <code>.container</code> at each breakpoint.
            </li>
            <li>
              <code>$container-padding-x</code> can be used to adjust default
              horizontal padding.
            </li>
          </ul>
        </section>

        {/* Quick reference list */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">
            Quick Reference
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>
              <code>.container</code> — responsive fixed widths at breakpoints.
            </li>
            <li>
              <code>.container-fluid</code> — always full width.
            </li>
            <li>
              <code>.container-sm|md|lg|xl|xxl</code> — fluid below, fixed at
              and above the breakpoint.
            </li>
            <li>
              Place grids inside containers; containers set gutter variables and
              side padding.
            </li>
            <li>
              Use spacing utilities or CSS variables to tune inner padding and
              gutters.
            </li>
            <li>
              Use full-bleed sections plus inner containers for edge-to-edge
              visuals with aligned content.
            </li>
          </ul>
        </section>

        {/* Bottom Navigation */}
        <div className="flex flex-row justify-between gap-3 sm:gap-2">
          <Link
            to="/bootstrap/installation-setup"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Installation & Setup
          </Link>
          <Link
            to="/bootstrap/grid-system"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Grid System <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Containers;
