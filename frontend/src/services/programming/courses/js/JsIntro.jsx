import { useState } from "react";
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

export default function JsIntro() {
  const data = `<p id="demo">Original Text</p>

<script>
  document.getElementById("demo").innerHTML = "Hello JavaScript";
</script>`.trim();

  const bulb = `
<img id="bulb" src="bulb-off.jpg" alt="Light Bulb">
<button onclick="turnOn()">Turn On</button>
<button onclick="turnOff()">Turn Off</button>

<script>
  function turnOn() {
    document.getElementById("bulb").src = "bulb-on.jpg";
  }

  function turnOff() {
    document.getElementById("bulb").src = "bulb-off.jpg";
  }
</script>
  `.trim();

  const [text] = useState(data);
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
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
        JavaScript Introduction
      </h1>

      {/* Navigation */}
      <div className="flex justify-between items-center p-3 text-white">
        <button className="flex items-center gap-2 bg-[#059862] hover:bg-[#047a4b] px-4 py-2 rounded-lg transition">
          <MdOutlineKeyboardArrowLeft className="text-xl" /> Previous
        </button>
        <button className="flex items-center gap-2 bg-[#059862] hover:bg-[#047a4b] px-4 py-2 rounded-lg transition">
          Next <MdKeyboardArrowRight className="text-xl" />
        </button>
      </div>

      {/* What is JavaScript */}
      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          What is JavaScript?
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>It can manipulate and update both HTML and CSS in real-time</li>
          <li>It allows you to respond to user actions, such as clicks, inputs, or form submissions.</li>
          <li>It can perform calculations, validate data, and control multimedia, animations, and more.</li>
          <li>Supported by all modern web browsers and is essential for user-friendly web apps.</li>
        </ul>
      </section>

      {/* Why Study */}
      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Study JavaScript?
        </h2>
        <p>JavaScript is one of the three core web technologies:</p>
        <ol className="list-decimal pl-6 space-y-1 text-gray-700">
          <li>HTML – Defines the structure and content of web pages</li>
          <li>CSS – Controls the styling and layout of web pages</li>
          <li>JavaScript – Adds interactivity and functionality</li>
        </ol>
        <h3 className="text-xl font-semibold mt-4">
          JavaScript Can Change HTML Content
        </h3>
        <p>
          With <code className="bg-gray-100 px-1 rounded">getElementById()</code>, you can dynamically update elements.
        </p>
      </section>

      {/* Example Code */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Example</h2>
        <div className="bg-[#E7E9EB] rounded-lg p-4 shadow">
          <h3 className="text-lg font-semibold mb-2">My Code:</h3>
          <pre className="bg-white p-3 rounded-md border font-mono text-sm text-gray-800 whitespace-pre-wrap">
            {data}
          </pre>
          <button
            onClick={copy}
            className="mt-3 px-4 py-2 bg-[#059862] hover:bg-[#047a4b] text-white rounded-lg transition"
          >
            {copied ? "Copied!" : "Copy Code"}
          </button>
        </div>
      </section>

      {/* Attribute Example */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          JavaScript Can Change HTML Attribute Values
        </h2>
        <p className="mb-2">
          Example: toggle an image src to simulate a bulb being turned on/off.
        </p>
        <pre className="bg-gray-100 rounded-md p-3 text-sm font-mono whitespace-pre-wrap">
          {bulb}
        </pre>
      </section>

      {/* Style Example */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Modern JavaScript Can Change Styles
        </h2>
        <p>
          Instead of inline styles, use{" "}
          <code className="bg-gray-100 px-1 rounded">classList</code> to toggle
          CSS classes. Cleaner and more maintainable.
        </p>
        <pre className="bg-gray-100 rounded-md p-3 mt-2 font-mono text-sm">
          document.querySelector(\"#demo\").classList.toggle(\"large-font\");
        </pre>
      </section>

      {/* Did You Know */}
      <section className="mt-8 bg-[#FFF4A3] rounded-lg p-6 space-y-3 shadow">
        <h2 className="text-2xl font-semibold">Did You Know?</h2>
        <p>JavaScript and Java are completely different languages.</p>
        <p>JavaScript was created by Brendan Eich in 1995 and standardized as ECMAScript in 1997.</p>
        <p>The official spec is called <strong>ECMA-262</strong>.</p>
        <p>JavaScript powers interactive web pages, while Java is a general-purpose programming language.</p>
      </section>

      {/* Footer Navigation */}
      <div className="flex justify-end mt-10">
        <button className="flex items-center gap-2 bg-[#04AA6D] hover:bg-[#03945f] text-white px-6 py-3 rounded-lg shadow transition">
          Next <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
