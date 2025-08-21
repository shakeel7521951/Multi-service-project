// src/pages/bootstrap/Buttons.jsx
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Buttons = () => {
  const [copied, setCopied] = useState(false);

  const basicButtons = `<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>`;

  const outlineButtons = `<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>`;

  const buttonSizes = `<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-primary btn-sm">Small button</button>`;

  const disabledButtons = `<button type="button" class="btn btn-primary" disabled>Disabled</button>`;

  const buttonBlock = `<button type="button" class="btn btn-primary w-full">Block Button</button>`;

  const buttonGroup = `<div class="btn-group" role="group">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>`;

  const toggleButtons = `<div class="btn-group" role="group">
  <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
  <label class="btn btn-primary" htmlFor="btncheck1">Checkbox 1</label>

  <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
  <label class="btn btn-primary" htmlFor="btncheck2">Checkbox 2</label>
</div>`;

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
            Bootstrap Buttons
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Bootstrap buttons are powerful, customizable, and come with many
            styles and sizes. You can create buttons for actions, navigation,
            toggles, and groups.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap/alerts"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Alerts
          </Link>

          <Link
            to="/bootstrap/badges"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Badges <FaChevronRight />
          </Link>
        </div>

        {/* Basic Buttons */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Basic Buttons
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Use built-in button classes to quickly create buttons with different
            styles.
          </p>

          {/* Visual Representation */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Visual Example
            </h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded bg-[#0d6efd] text-white">
                Primary
              </button>
              <button className="px-4 py-2 rounded bg-[#6c757d] text-white">
                Secondary
              </button>
              <button className="px-4 py-2 rounded bg-[#198754] text-white">
                Success
              </button>
              <button className="px-4 py-2 rounded bg-[#dc3545] text-white">
                Danger
              </button>
              <button className="px-4 py-2 rounded bg-[#ffc107] text-black">
                Warning
              </button>
              <button className="px-4 py-2 rounded bg-[#0dcaf0] text-black">
                Info
              </button>
              <button className="px-4 py-2 rounded bg-[#f8f9fa] text-black border">
                Light
              </button>
              <button className="px-4 py-2 rounded bg-[#212529] text-white">
                Dark
              </button>
              <button className="px-4 py-2 rounded bg-transparent text-[#0d6efd] border border-[#0d6efd]">
                Outline Primary
              </button>
            </div>
          </div>

          {/* Code Example */}
          <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-inner border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{basicButtons}</code>
            </pre>
            <button
              onClick={() => handleCopy(basicButtons)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Outline Buttons */}
        <section className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Outline Buttons
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Add <code>.btn-outline-*</code> classes to create outline style
            buttons.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{outlineButtons}</code>
            </pre>
            <button
              onClick={() => handleCopy(outlineButtons)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Button Sizes */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Button Sizes
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Use <code>.btn-lg</code> and <code>.btn-sm</code> for large and
            small buttons.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{buttonSizes}</code>
            </pre>
            <button
              onClick={() => handleCopy(buttonSizes)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Disabled Buttons */}
        <section className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Disabled Buttons
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Add <code>disabled</code> attribute to disable buttons.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{disabledButtons}</code>
            </pre>
            <button
              onClick={() => handleCopy(disabledButtons)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Block Buttons */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Block Buttons
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Use <code>w-full</code> (or <code>.btn-block</code> in older
            Bootstrap) to create full-width buttons.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{buttonBlock}</code>
            </pre>
            <button
              onClick={() => handleCopy(buttonBlock)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Button Groups */}
        <section className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Button Groups
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Use <code>.btn-group</code> to group multiple buttons together.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{buttonGroup}</code>
            </pre>
            <button
              onClick={() => handleCopy(buttonGroup)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Toggle Buttons */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Toggle Buttons
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Use <code>.btn-check</code> and <code>label.btn</code> to create
            toggleable buttons.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{toggleButtons}</code>
            </pre>
            <button
              onClick={() => handleCopy(toggleButtons)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">Next Step</h2>
          <p className="text-gray-700">
            After buttons, the next topic is{" "}
            <Link
              to="/bootstrap/alerts"
              className="text-[#04AA6D] font-semibold hover:underline"
            >
              Alerts
            </Link>{" "}
            where you will learn about Bootstrap alerts and messages.
          </p>
        </section>

        {/* Bottom Navigation */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap/alerts"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Alerts
          </Link>

          <Link
            to="/bootstrap/badges"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Badges <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
