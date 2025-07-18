import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Popup_Boxes = () => {
  const references = [
    "Alert Box",
    "Confirm Box",
    "Prompt Box",
    "Window Object",
    "DOM Manipulation",
    "Event Handling",
    "Form Validation",
    "Timing Events",
    "Error Handling",
    "JSON Methods",
    "Cookies",
    "Web Storage",
    "Browser Object Model",
    "Screen Object",
    "History Object"
  ];

  const alertExample = `alert("I am an alert box!");`;

  const confirmExample = `if (confirm("Press a button!")) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}`;

  const promptExample = `let person = prompt("Please enter your name", "Harry Potter");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}`;

  const lineBreakExample = `alert("Hello\\nHow are you?");`;

  const [copied, setCopied] = useState({
    alert: false,
    confirm: false,
    prompt: false,
    lineBreak: false
  });

  const handleCopy = (code, type) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(prev => ({ ...prev, [type]: true }));
        setTimeout(() => setCopied(prev => ({ ...prev, [type]: false })), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Popup Boxes</h1>
          <p className="text-gray-600 text-lg">
            Learn how to interact with users using JavaScript's built-in popup boxes.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">Popup Boxes in JavaScript</h2>
          <p className="text-gray-800 mb-3">
            JavaScript has three kinds of popup boxes: Alert box, Confirm box, and Prompt box.
          </p>
          <p className="text-gray-800 mb-6">
            These simple methods allow you to interact with users, gather input, and display important messages.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Examples Live »
          </button>
        </section>

        {/* Alert Box Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Alert Box</h2>
          <p className="text-gray-700 mb-4">
            An alert box is often used if you want to make sure information comes through to the user.
            When an alert box pops up, the user will have to click "OK" to proceed.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Syntax:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>window.alert("sometext");</code>
            </pre>
            <p className="text-gray-700 mt-2 mb-4">
              The window.alert() method can be written without the window prefix.
            </p>
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{alertExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(alertExample, 'alert')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.alert ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Confirm Box Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Confirm Box</h2>
          <p className="text-gray-700 mb-4">
            A confirm box is often used if you want the user to verify or accept something.
            When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed.
          </p>
          <p className="text-gray-700 mb-4">
            If the user clicks "OK", the box returns true. If the user clicks "Cancel", the box returns false.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Syntax:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>window.confirm("sometext");</code>
            </pre>
            <p className="text-gray-700 mt-2 mb-4">
              The window.confirm() method can be written without the window prefix.
            </p>
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{confirmExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(confirmExample, 'confirm')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.confirm ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Prompt Box Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Prompt Box</h2>
          <p className="text-gray-700 mb-4">
            A prompt box is often used if you want the user to input a value before entering a page.
            When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.
          </p>
          <p className="text-gray-700 mb-4">
            If the user clicks "OK" the box returns the input value. If the user clicks "Cancel" the box returns null.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Syntax:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>window.prompt("sometext","defaultText");</code>
            </pre>
            <p className="text-gray-700 mt-2 mb-4">
              The window.prompt() method can be written without the window prefix.
            </p>
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{promptExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(promptExample, 'prompt')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.prompt ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Line Breaks Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Line Breaks in Popup Boxes</h2>
          <p className="text-gray-700 mb-4">
            To display line breaks inside a popup box, use a back-slash followed by the character n.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{lineBreakExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(lineBreakExample, 'lineBreak')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.lineBreak ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our JavaScript references to learn more about popup boxes and other essential JavaScript features.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {references.map((ref, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded transition"
              >
                {ref}
              </button>
            ))}
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup_Boxes;
