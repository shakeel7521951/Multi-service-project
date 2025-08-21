// src/pages/bootstrap/Dropdowns.jsx
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dropdowns = () => {
  const [copied, setCopied] = useState(false);

  // Sample dropdown codes
  const basicDropdown = `<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownBasic" data-bs-toggle="dropdown" aria-expanded="false">
    Basic Dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownBasic">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>`;

  const splitButtonDropdown = `<div class="btn-group">
  <button type="button" class="btn btn-primary">Split Dropdown</button>
  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>`;

  const dropdownWithHeaders = `<div class="dropdown">
  <button class="btn btn-info dropdown-toggle" type="button" id="dropdownHeader" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown with Header
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownHeader">
    <li><h6 class="dropdown-header">Dropdown Header</h6></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>`;

  const dropdownSizes = `<div class="dropdown">
  <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Large Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
  </ul>
</div>

<div class="dropdown mt-3">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Small Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
  </ul>
</div>`;

  const dropdownDirections = `<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
    Dropup
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
  </ul>
</div>

<div class="btn-group dropend ms-3">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
    Dropend
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
  </ul>
</div>

<div class="btn-group dropstart ms-3">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
    Dropstart
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
  </ul>
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
            Bootstrap Dropdowns
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Dropdowns in Bootstrap allow users to toggle contextual overlays for displaying lists of links and actions.
            They can include headers, dividers, forms, and can open in multiple directions.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap/navbar"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Navbar
          </Link>

          <Link
            to="/bootstrap/modals"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Modals <FaChevronRight />
          </Link>
        </div>

        {/* Basic Dropdown */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Basic Dropdown</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            A simple dropdown with a button and a list of links. Click to toggle visibility.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-inner border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{basicDropdown}</code>
            </pre>
            <button
              onClick={() => handleCopy(basicDropdown)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Split Button Dropdown */}
        <section className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Split Button Dropdown</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Split buttons allow separating the main action from the dropdown toggle.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{splitButtonDropdown}</code>
            </pre>
            <button
              onClick={() => handleCopy(splitButtonDropdown)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Dropdown with Header & Divider */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Dropdown with Header and Divider</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Add headers, separators, and organize dropdown content for better UX.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{dropdownWithHeaders}</code>
            </pre>
            <button
              onClick={() => handleCopy(dropdownWithHeaders)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Dropdown Sizes */}
        <section className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Dropdown Sizes</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Dropdown buttons can have different sizes using <code>.btn-lg</code> or <code>.btn-sm</code>.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{dropdownSizes}</code>
            </pre>
            <button
              onClick={() => handleCopy(dropdownSizes)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Dropdown Directions */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Dropdown Directions</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Dropdowns can open in different directions: <code>dropup</code>, <code>dropend</code>, and <code>dropstart</code>.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{dropdownDirections}</code>
            </pre>
            <button
              onClick={() => handleCopy(dropdownDirections)}
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
            Now that you understand dropdowns, the next topic is{" "}
            <Link
              to="/bootstrap/buttons"
              className="text-[#04AA6D] font-semibold hover:underline"
            >
              Buttons
            </Link>{" "}
            where you will learn all types of Bootstrap buttons.
          </p>
        </section>

        {/* Bottom Navigation */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap/navbar"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Navbar
          </Link>

          <Link
            to="/bootstrap/modals"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Modals <FaChevronRight />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Dropdowns;
