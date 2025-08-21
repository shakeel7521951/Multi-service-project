import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Forms = () => {
  const [copied, setCopied] = useState(false);

  const examples = {
    input: `<input class="border border-gray-300 rounded px-4 py-2 w-full" placeholder="Enter text" />`,
    textarea: `<textarea class="border border-gray-300 rounded px-4 py-2 w-full" rows="4" placeholder="Enter message"></textarea>`,
    select: `<select class="border border-gray-300 rounded px-4 py-2 w-full">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>`,
    checkbox: `<label class="inline-flex items-center">
  <input type="checkbox" class="form-checkbox text-green-500" />
  <span class="ml-2">Accept terms</span>
</label>`,
    radio: `<label class="inline-flex items-center">
  <input type="radio" class="form-radio text-blue-500" name="option" />
  <span class="ml-2">Option A</span>
</label>
<label class="inline-flex items-center ml-4">
  <input type="radio" class="form-radio text-blue-500" name="option" />
  <span class="ml-2">Option B</span>
</label>`,
    button: `<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded">
  Submit
</button>`,
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
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-extrabold mb-2">Tailwind CSS – Forms</h1>
          <p className="text-gray-600 text-lg">
            Learn how to style form elements like inputs, textareas, selects,
            checkboxes, radio buttons, and buttons with Tailwind CSS.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Input */}
        <section>
          <h2 className="text-2xl font-bold mb-3">1. Input</h2>
          <p className="text-gray-700 mb-4">
            Tailwind provides utilities to style input fields with borders, padding, rounded corners, and width.
          </p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.input}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.input)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>border</code> → adds a border around the input.</li>
            <li><code>border-gray-300</code> → sets border color to gray shade.</li>
            <li><code>rounded</code> → applies rounded corners.</li>
            <li><code>px-4</code> → horizontal padding inside the input.</li>
            <li><code>py-2</code> → vertical padding inside the input.</li>
            <li><code>w-full</code> → makes input take full container width.</li>
          </ul>
        </section>

        {/* Textarea */}
        <section>
          <h2 className="text-2xl font-bold mb-3">2. Textarea</h2>
          <p className="text-gray-700 mb-4">Textareas are styled similar to inputs and can include rows for height.</p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.textarea}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.textarea)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>border</code> → adds a border.</li>
            <li><code>rounded</code> → rounded corners.</li>
            <li><code>px-4 py-2</code> → padding inside the textarea.</li>
            <li><code>w-full</code> → full width.</li>
            <li><code>rows="4"</code> → sets the height of the textarea.</li>
          </ul>
        </section>

        {/* Select */}
        <section>
          <h2 className="text-2xl font-bold mb-3">3. Select</h2>
          <p className="text-gray-700 mb-4">Style dropdowns with border, padding, and rounded utilities.</p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.select}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.select)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>border</code> → adds border to the select.</li>
            <li><code>rounded</code> → rounded corners.</li>
            <li><code>px-4 py-2</code> → padding inside the select.</li>
            <li><code>w-full</code> → full width.</li>
          </ul>
        </section>

        {/* Checkbox */}
        <section>
          <h2 className="text-2xl font-bold mb-3">4. Checkbox</h2>
          <p className="text-gray-700 mb-4">Use form-checkbox and text color utilities to style checkboxes.</p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.checkbox}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.checkbox)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>form-checkbox</code> → default Tailwind checkbox style.</li>
            <li><code>text-green-500</code> → checkbox color.</li>
            <li><code>ml-2</code> → spacing between checkbox and label text.</li>
          </ul>
        </section>

        {/* Radio */}
        <section>
          <h2 className="text-2xl font-bold mb-3">5. Radio Buttons</h2>
          <p className="text-gray-700 mb-4">Use form-radio and text utilities to style radio buttons.</p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.radio}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.radio)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>form-radio</code> → default Tailwind radio button style.</li>
            <li><code>text-blue-500</code> → radio color.</li>
            <li><code>ml-2</code> → spacing between radio and label text.</li>
            <li><code>ml-4</code> → spacing between multiple radio options.</li>
          </ul>
        </section>

        {/* Button */}
        <section>
          <h2 className="text-2xl font-bold mb-3">6. Button</h2>
          <p className="text-gray-700 mb-4">Use background, hover, text color, padding, and rounded utilities for buttons.</p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.button}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.button)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>bg-blue-600</code> → sets button background color.</li>
            <li><code>hover:bg-blue-700</code> → changes background on hover.</li>
            <li><code>text-white</code> → button text color.</li>
            <li><code>font-semibold</code> → semi-bold text.</li>
            <li><code>px-6 py-2</code> → padding inside button.</li>
            <li><code>rounded</code> → rounded corners.</li>
          </ul>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next: Forms Validation
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forms;
