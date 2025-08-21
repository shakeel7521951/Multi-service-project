import React, { useState } from "react";
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

const Default = () => {
  const [text, setText] = useState("console.log('Hello I'm JavaScript')");
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4 text-center sm:text-left">
        JavaScript Tutorial
      </h1>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center p-3 mt-2 text-white">
        <button className="py-2 px-4 text-sm sm:text-lg flex items-center gap-1 cursor-pointer rounded-lg bg-[#059862] hover:bg-[#047a4b] transition">
          <MdOutlineKeyboardArrowLeft className="text-xl" /> Home
        </button>
        <button className="py-2 px-4 text-sm sm:text-lg flex items-center gap-1 cursor-pointer rounded-lg bg-[#059862] hover:bg-[#047a4b] transition">
          Next <MdKeyboardArrowRight className="text-xl" />
        </button>
      </div>

      {/* Learn JavaScript Section */}
      <div className="rounded-xl bg-[#D9EEE1] p-6 mt-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Learn JavaScript</h2>
        <ol className="list-decimal pl-5 flex flex-col gap-2 text-gray-700">
          <li>JavaScript is one of the most widely-used and versatile programming languages in the world.</li>
          <li>It powers the dynamic behavior on most websites and is the backbone of modern web development.</li>
          <li>Whether you're building interactive websites, developing web apps, or diving into frameworks like React or Node.js, JavaScript is essential.</li>
          <li>This tutorial will guide you step by step, from the fundamentals to advanced concepts, making it easy and fun to learn.</li>
        </ol>
        <button className="mt-6 bg-[#059862] hover:bg-[#047a4b] text-white text-sm sm:text-lg px-5 py-3 rounded-lg flex items-center gap-2 shadow-md transition">
          Start learning JavaScript now <MdKeyboardArrowRight />
        </button>
      </div>

      {/* Example Section */}
      <div className="mt-8 px-3">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">Examples in Each Chapter</h2>
        <p className="mb-4 text-gray-700">Try it Yourself: copy code and run it in your editor.</p>

        <div className="rounded-lg bg-[#E7E9EB] p-5 shadow-md">
          <span className="text-lg font-medium">Example</span>
          <div className="p-4 bg-white rounded-md mt-2 shadow">
            <h3 className="text-lg font-semibold mb-3">My First Code</h3>
            <div className="p-2 rounded-md border w-full sm:w-8/12 md:w-6/12 lg:w-4/12 bg-gray-50">
              <code className="text-sm sm:text-base text-gray-800">{text}</code>
            </div>
          </div>
          <button
            onClick={copy}
            className="mt-3 px-4 py-2 rounded-lg bg-[#059862] text-white hover:bg-[#047a4b] transition shadow-md"
          >
            {copied ? "Copied!" : "Copy Code"}
          </button>
        </div>
      </div>

      {/* Sections */}
      <div className="mt-8 px-3 space-y-6 text-gray-800 leading-relaxed">
        {/* Using the Menu */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Using the Menu</h2>
          <p>Follow the lessons in order for the best learning experience.</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>On larger screens, the menu is always visible on the left.</li>
            <li>On smaller screens, tap the ☰ menu icon to open the menu.</li>
          </ul>
        </section>

        {/* Learn by Examples */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Learn by Examples</h2>
          <p>Learning is easier by seeing things in action with simple examples.</p>
          <div className="bg-[#FFFFCC] rounded-md p-4 mt-3 font-mono text-sm">
            let name = "Asad";<br /> console.log("Welcome, " + name);
          </div>
        </section>

        {/* Why Study JS */}
        <section className="bg-[#D9EEE1] p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Why Study JavaScript?</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li><span className="underline font-bold">HTML</span> defines the content of web pages.</li>
            <li><span className="underline font-bold">CSS</span> specifies the layout of web pages.</li>
            <li><span className="font-bold">JavaScript</span> programs the behavior of web pages.</li>
          </ol>
        </section>

        {/* Versions */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">JavaScript Versions Covered</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Original JavaScript (ES1–ES3) – 1997 to 1999</li>
            <li>ES5 (2009) – Widely supported upgrade</li>
            <li>ES6 (2015) – Modern features like let, const, arrow functions, and classes</li>
            <li>Yearly Updates – Continuous improvements from 2016 onwards</li>
          </ul>
        </section>

        {/* Pace */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Learn at Your Own Pace</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Take your time, revisit topics, and explore examples.</li>
            <li>If something feels tricky, pause and review.</li>
          </ul>
          <p className="mt-2 font-semibold">Practice. Explore. Build. Repeat.</p>
        </section>

        {/* Questions */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Common Questions</h2>
          <ol className="list-decimal pl-5 space-y-1">
            <li>How do I get JavaScript?</li>
            <li>Where can I download JavaScript?</li>
            <li>Is JavaScript free?</li>
          </ol>
          <p className="mt-2">✅ JavaScript is built into all modern browsers and is completely free.</p>
        </section>

        {/* Reference */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">JavaScript Reference</h2>
          <p>W3Schools provides a complete JavaScript reference with up-to-date examples.</p>
        </section>
      </div>

      {/* Footer Navigation */}
      <div className="flex justify-end mt-10">
        <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-6 py-3 rounded-lg hover:bg-[#03945f] font-medium transition shadow-md">
          Next <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Default;
