// src/pages/bootstrap/Alerts.jsx
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Alerts = () => {
  const [copied, setCopied] = useState(false);

  const basicAlerts = `<div class="alert alert-primary" role="alert">Primary Alert</div>
<div class="alert alert-secondary" role="alert">Secondary Alert</div>
<div class="alert alert-success" role="alert">Success Alert</div>
<div class="alert alert-danger" role="alert">Danger Alert</div>
<div class="alert alert-warning" role="alert">Warning Alert</div>
<div class="alert alert-info" role="alert">Info Alert</div>
<div class="alert alert-light" role="alert">Light Alert</div>
<div class="alert alert-dark" role="alert">Dark Alert</div>`;

  const dismissibleAlerts = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
  Dismissible Alert!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

  const alertsWithLinks = `<div class="alert alert-primary" role="alert">
  A simple primary alert with <a href="#" class="alert-link">an example link</a>.
</div>`;

  const alertsWithContent = `<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>This is a success alert with more content.</p>
  <hr>
  <p class="mb-0">Use it to provide extended feedback to the user.</p>
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
            Bootstrap Alerts
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Alerts are used to provide feedback messages to users. Bootstrap alerts support contextual colors, links, dismissible options, and more advanced content.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap/images"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Images
          </Link>

          <Link
            to="/bootstrap/buttons"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Buttons <FaChevronRight />
          </Link>
        </div>

       {/* Basic Alerts */}
<section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
  <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Basic Alerts</h2>
  <p className="text-gray-800 mb-4 leading-relaxed">
    Use <code>.alert</code> with contextual classes to display simple alerts.
  </p>

  {/* Visual Representation */}
  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
    <h3 className="text-xl font-semibold text-gray-700 mb-4">Visual Example</h3>
    <div className="space-y-3 text-sm font-medium">
      <div className="p-3 rounded-lg bg-[#cfe2ff] text-[#084298] border border-[#b6d4fe]">
        A simple <b>primary</b> alert—check it out!
      </div>
      <div className="p-3 rounded-lg bg-[#e2e3e5] text-[#41464b] border border-[#d3d6d8]">
        A simple <b>secondary</b> alert—check it out!
      </div>
      <div className="p-3 rounded-lg bg-[#d1e7dd] text-[#0f5132] border border-[#badbcc]">
        A simple <b>success</b> alert—check it out!
      </div>
      <div className="p-3 rounded-lg bg-[#f8d7da] text-[#842029] border border-[#f5c2c7]">
        A simple <b>danger</b> alert—check it out!
      </div>
      <div className="p-3 rounded-lg bg-[#fff3cd] text-[#664d03] border border-[#ffecb5]">
        A simple <b>warning</b> alert—check it out!
      </div>
      <div className="p-3 rounded-lg bg-[#cff4fc] text-[#055160] border border-[#b6effb]">
        A simple <b>info</b> alert—check it out!
      </div>
      <div className="p-3 rounded-lg bg-[#fefefe] text-[#636464] border border-[#fdfdfe]">
        A simple <b>light</b> alert—check it out!
      </div>
      <div className="p-3 rounded-lg bg-[#d3d3d4] text-[#141619] border border-[#bcbebf]">
        A simple <b>dark</b> alert—check it out!
      </div>
    </div>
  </div>

  {/* Code Example */}
  <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-inner border border-gray-300">
    <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
      <code>{basicAlerts}</code>
    </pre>
    <button
      onClick={() => handleCopy(basicAlerts)}
      className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
    >
      {copied ? "Copied!" : "Copy Code"}
    </button>
  </div>
</section>


        {/* Dismissible Alerts */}
        <section className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Dismissible Alerts</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Add <code>alert-dismissible fade show</code> and a <code>.btn-close</code> button to make alerts dismissible.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{dismissibleAlerts}</code>
            </pre>
            <button
              onClick={() => handleCopy(dismissibleAlerts)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Alerts with Links */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Alerts with Links</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            You can include links inside alerts with <code>.alert-link</code>.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{alertsWithLinks}</code>
            </pre>
            <button
              onClick={() => handleCopy(alertsWithLinks)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Alerts with Additional Content */}
        <section className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Alerts with Additional Content</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            You can include headings, paragraphs, and horizontal rules inside alerts for more detailed messages.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{alertsWithContent}</code>
            </pre>
            <button
              onClick={() => handleCopy(alertsWithContent)}
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
            After alerts, the next topic is{" "}
            <Link
              to="/bootstrap/badges"
              className="text-[#04AA6D] font-semibold hover:underline"
            >
              Badges
            </Link>{" "}
            where you will learn how to show count or label indicators.
          </p>
        </section>

        {/* Bottom Navigation */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap/images"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Images
          </Link>

          <Link
            to="/bootstrap/buttons"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Buttons <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
