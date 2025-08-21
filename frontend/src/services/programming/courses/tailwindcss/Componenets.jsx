import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Components = () => {
  const [copied, setCopied] = useState(false);

  // 🔹 Example snippets for components
  const examples = {
    card: `<div class="max-w-sm bg-white border border-gray-200 rounded-xl shadow p-6">
  <h2 class="text-xl font-bold mb-2">Card Title</h2>
  <p class="text-gray-600 mb-4">This is a simple card component using Tailwind CSS.</p>
  <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Read More</button>
</div>`,
    button: `<button class="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition">
  Click Me
</button>`,
    navbar: `<nav class="flex items-center justify-between bg-gray-800 text-white px-6 py-3">
  <h1 class="text-lg font-bold">MyLogo</h1>
  <ul class="flex space-x-6">
    <li><a href="#" class="hover:text-gray-300">Home</a></li>
    <li><a href="#" class="hover:text-gray-300">About</a></li>
    <li><a href="#" class="hover:text-gray-300">Contact</a></li>
  </ul>
</nav>`,
    modal: `<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
  <div class="bg-white rounded-xl shadow-lg p-6 w-96">
    <h2 class="text-xl font-bold mb-2">Modal Title</h2>
    <p class="text-gray-600 mb-4">This is a modal example with Tailwind.</p>
    <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Close</button>
  </div>
</div>`,
    alert: `<div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
  <strong class="font-bold">Warning!</strong>
  <span class="block">This is an alert message.</span>
</div>`,
    form: `<form class="space-y-4 max-w-md">
  <input type="text" placeholder="Your Name" class="w-full border p-2 rounded focus:ring focus:ring-blue-300" />
  <input type="email" placeholder="Email Address" class="w-full border p-2 rounded focus:ring focus:ring-blue-300" />
  <button type="submit" class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Submit</button>
</form>`,
  };

  const handleCopy = (code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className=" min-h-screen bg-white px-4 py-10 mx-auto max-w-4xl">
      <div className="w-full px-6 space-y-16"> 
        <header>
          <h1 className="text-3xl font-extrabold mb-2">Tailwind CSS – Components</h1>
          <p className="text-gray-600 text-lg">
            A collection of commonly used UI components built with Tailwind CSS, including cards, buttons, navigation bars, modals, alerts, and forms.
          </p>
        </header>

        {/* 🔹 Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back: Utilities
          </button>
        </div>

        {/* 🔹 SECTION 1: Card */}
        <section>
          <h2 className="text-2xl font-bold mb-3">1. Card</h2>
          <p className="text-gray-700 mb-4">
            A card is a flexible container for content. Tailwind provides utilities for spacing, borders, shadows, and rounded corners to create clean card designs.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.card}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.card)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>max-w-sm</code> → sets max width of the card.</li>
            <li><code>rounded-xl</code> → applies large rounded corners.</li>
            <li><code>shadow</code> → adds a soft shadow effect.</li>
          </ul>
        </section>

        {/* 🔹 SECTION 2: Button */}
        <section>
          <h2 className="text-2xl font-bold mb-3">2. Button</h2>
          <p className="text-gray-700 mb-4">
            Buttons are interactive elements. With Tailwind, you can quickly style them with background colors, hover effects, and smooth transitions.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.button}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.button)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>bg-green-500</code> → applies green background.</li>
            <li><code>hover:bg-green-600</code> → darkens on hover.</li>
            <li><code>transition</code> → enables smooth color change.</li>
          </ul>
        </section>

        {/* 🔹 SECTION 3: Navbar */}
        <section>
          <h2 className="text-2xl font-bold mb-3">3. Navbar</h2>
          <p className="text-gray-700 mb-4">
            A navigation bar helps users browse different sections of your app. Tailwind makes it easy to build with flexbox, spacing, and hover effects.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.navbar}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.navbar)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>flex justify-between</code> → spaces logo & menu apart.</li>
            <li><code>space-x-6</code> → adds spacing between nav items.</li>
            <li><code>hover:text-gray-300</code> → lighter text on hover.</li>
          </ul>
        </section>

        {/* 🔹 SECTION 4: Modal */}
        <section>
          <h2 className="text-2xl font-bold mb-3">4. Modal</h2>
          <p className="text-gray-700 mb-4">
            A modal is a dialog overlay used for alerts or forms. Tailwind makes it simple to center content and apply background overlays.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.modal}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.modal)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>fixed inset-0</code> → covers full screen.</li>
            <li><code>bg-black bg-opacity-50</code> → dark overlay.</li>
            <li><code>rounded-xl shadow-lg</code> → styled modal box.</li>
          </ul>
        </section>

        {/* 🔹 SECTION 5: Alert */}
        <section>
          <h2 className="text-2xl font-bold mb-3">5. Alert</h2>
          <p className="text-gray-700 mb-4">
            Alerts display important messages. With Tailwind, they can be styled using background, borders, and text utilities.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.alert}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.alert)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>border-l-4</code> → thick left border.</li>
            <li><code>bg-yellow-100</code> → light yellow background.</li>
            <li><code>text-yellow-700</code> → dark yellow text.</li>
          </ul>
        </section>

        {/* 🔹 SECTION 6: Form */}
        <section>
          <h2 className="text-2xl font-bold mb-3">6. Form</h2>
          <p className="text-gray-700 mb-4">
            Forms are essential for collecting input. Tailwind provides utilities for input styling, focus states, and spacing.
          </p>

          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.form}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.form)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>w-full</code> → makes inputs take full width.</li>
            <li><code>focus:ring</code> → adds focus outline ring.</li>
            <li><code>rounded</code> → rounded corners for input fields.</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Components;
