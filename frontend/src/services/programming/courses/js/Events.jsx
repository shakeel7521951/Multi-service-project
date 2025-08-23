import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy, FaCheck } from "react-icons/fa";

const Events = () => {
  const eventsList = [
    { event: "onchange", description: "An HTML element has been changed" },
    { event: "onclick", description: "The user clicks an HTML element" },
    { event: "onmouseover", description: "The user moves the mouse over an HTML element" },
    { event: "onmouseout", description: "The user moves the mouse away from an HTML element" },
    { event: "onkeydown", description: "The user pushes a keyboard key" },
    { event: "onload", description: "The browser has finished loading the page" },
  ];

  const example1 = `<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>`;
  const example2 = `<button onclick="this.innerHTML = Date()">The time is?</button>`;
  const example3 = `<button onclick="displayDate()">The time is?</button>`;

  const [copied, setCopied] = useState({ example1: false, example2: false, example3: false });

  const handleCopy = (example) => {
    let textToCopy;
    switch (example) {
      case 'example1':
        textToCopy = example1;
        break;
      case 'example2':
        textToCopy = example2;
        break;
      case 'example3':
        textToCopy = example3;
        break;
      default:
        return;
    }

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied({ ...copied, [example]: true });
        setTimeout(() => setCopied({ ...copied, [example]: false }), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-800">JavaScript Events</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            HTML events are "things" that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can "react" on these events.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-3 rounded-md hover:bg-[#03945f] transition-all shadow-md hover:shadow-lg">
            <FaChevronLeft className="text-sm" />
            Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-xl shadow-sm border border-[#c5e5d4]">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">HTML Events</h2>
          <p className="text-gray-800 mb-3 leading-relaxed">
            An HTML event can be something the browser does, or something a user does.
          </p>
          <p className="text-gray-800 mb-6 leading-relaxed">
            Here are some examples of HTML events:
          </p>
          <ul className="list-disc pl-5 mb-6 text-gray-800 space-y-2">
            <li className="leading-relaxed">An HTML web page has finished loading</li>
            <li className="leading-relaxed">An HTML input field was changed</li>
            <li className="leading-relaxed">An HTML button was clicked</li>
          </ul>
          <p className="text-gray-800 mb-6 leading-relaxed">
            Often, when events happen, you may want to do something. HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.
          </p>
        </section>

        {/* Syntax Section */}
        <section className="bg-[#E7E9EB] p-6 rounded-xl border border-gray-300">
          <h3 className="font-bold mb-4 text-xl text-gray-800">Syntax:</h3>
          <p className="mb-3 text-gray-700">With single quotes:</p>
          <div className="relative">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded mb-6 overflow-x-auto">
              <code>{`<element event='some JavaScript'>`}</code>
            </pre>
          </div>
          <p className="mb-3 text-gray-700">With double quotes:</p>
          <div className="relative">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{`<element event="some JavaScript">`}</code>
            </pre>
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Examples</h2>
          
          <div className="mb-8 bg-white p-5 rounded-xl shadow-sm border border-gray-200">
            <p className="text-gray-700 mb-4 leading-relaxed">
              In the following example, an onclick attribute (with code), is added to a button element:
            </p>
            <div className="bg-[#E7E9EB] p-5 rounded-lg">
              <div className="relative">
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
                  <code>{example1}</code>
                </pre>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In the example above, the JavaScript code changes the content of the element with id="demo".
              </p>
              <button
                onClick={() => handleCopy('example1')}
                className="flex items-center gap-2 bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-4 py-2 rounded transition"
              >
                {copied.example1 ? <FaCheck /> : <FaCopy />}
                {copied.example1 ? "Copied!" : "Copy Example 1"}
              </button>
            </div>
          </div>

          <div className="mb-8 bg-white p-5 rounded-xl shadow-sm border border-gray-200">
            <div className="bg-[#E7E9EB] p-5 rounded-lg">
              <div className="relative">
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
                  <code>{example2}</code>
                </pre>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In this example, the code changes the content of its own element (using this.innerHTML).
              </p>
              <button
                onClick={() => handleCopy('example2')}
                className="flex items-center gap-2 bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-4 py-2 rounded transition"
              >
                {copied.example2 ? <FaCheck /> : <FaCopy />}
                {copied.example2 ? "Copied!" : "Copy Example 2"}
              </button>
            </div>
          </div>

          <div className="mb-8 bg-white p-5 rounded-xl shadow-sm border border-gray-200">
            <div className="bg-[#E7E9EB] p-5 rounded-lg">
              <div className="relative">
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
                  <code>{example3}</code>
                </pre>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                JavaScript code is often several lines long. It is more common to see event attributes calling functions.
              </p>
              <button
                onClick={() => handleCopy('example3')}
                className="flex items-center gap-2 bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-4 py-2 rounded transition"
              >
                {copied.example3 ? <FaCheck /> : <FaCopy />}
                {copied.example3 ? "Copied!" : "Copy Example 3"}
              </button>
            </div>
          </div>
        </section>

        {/* Common Events Section */}
        <section className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Common HTML Events</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Here is a list of some common HTML events:
          </p>
          <div className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Event</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {eventsList.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-900 font-medium">{item.event}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Event Handlers Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-xl shadow-sm border border-[#c5e5d4]">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">JavaScript Event Handlers</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Event handlers can be used to handle and verify user input, user actions, and browser actions:
          </p>
          <ul className="list-disc pl-5 mb-6 text-gray-800 space-y-2">
            <li className="leading-relaxed">Things that should be done every time a page loads</li>
            <li className="leading-relaxed">Things that should be done when the page is closed</li>
            <li className="leading-relaxed">Action that should be performed when a user clicks a button</li>
            <li className="leading-relaxed">Content that should be verified when a user inputs data</li>
            <li className="leading-relaxed">And more ...</li>
          </ul>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Many different methods can be used to let JavaScript work with events:
          </p>
          <ul className="list-disc pl-5 mb-6 text-gray-800 space-y-2">
            <li className="leading-relaxed">HTML event attributes can execute JavaScript code directly</li>
            <li className="leading-relaxed">HTML event attributes can call JavaScript functions</li>
            <li className="leading-relaxed">You can assign your own event handler functions to HTML elements</li>
            <li className="leading-relaxed">You can prevent events from being sent or being handled</li>
            <li className="leading-relaxed">And more ...</li>
          </ul>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-yellow-700">
              <strong>Note:</strong> You will learn a lot more about events and event handlers in the HTML DOM chapters.
            </p>
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-3 rounded-md hover:bg-[#03945f] transition-all shadow-md hover:shadow-lg">
            Next
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;