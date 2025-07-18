import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Window_History = () => {
  const references = [
    "window.location",
    "window.navigator",
    "window.screen",
    "window.document",
    "Window Methods",
    "Window Properties",
    "History Object",
    "Location Object",
    "Navigator Object",
    "Screen Object",
    "Timing Events",
    "Popup Boxes",
    "Cookies",
    "Web Storage",
    "Web Workers"
  ];

  const backExample = `<html>
<head>
<script>
function goBack() {
  window.history.back()
}
</script>
</head>
<body>

<input type="button" value="Back" onclick="goBack()">

</body>
</html>`;

  const forwardExample = `<html>
<head>
<script>
function goForward() {
  window.history.forward()
}
</script>
</head>
<body>

<input type="button" value="Forward" onclick="goForward()">

</body>
</html>`;

  const [copiedBack, setCopiedBack] = useState(false);
  const [copiedForward, setCopiedForward] = useState(false);

  const handleCopyBack = () => {
    navigator.clipboard
      .writeText(backExample)
      .then(() => {
        setCopiedBack(true);
        setTimeout(() => setCopiedBack(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleCopyForward = () => {
    navigator.clipboard
      .writeText(forwardExample)
      .then(() => {
        setCopiedForward(true);
        setTimeout(() => setCopiedForward(false), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Window History</h1>
          <p className="text-gray-600 text-lg">
            Learn how to interact with the browser's history using JavaScript's Window History API.
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
          <h2 className="text-3xl font-bold mb-4">Understanding Window History</h2>
          <p className="text-gray-800 mb-3">
            The <code className="bg-gray-200 px-1 rounded">window.history</code> object contains the browser's history.
          </p>
          <p className="text-gray-800 mb-3">
            The <code className="bg-gray-200 px-1 rounded">window.history</code> object can be written without the window prefix.
          </p>
          <p className="text-gray-800 mb-6">
            To protect user privacy, there are limitations to how JavaScript can access this object.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Examples Below »
          </button>
        </section>

        {/* Methods Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Common History Methods</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><code className="bg-gray-200 px-1 rounded">history.back()</code> - same as clicking back in the browser</li>
            <li><code className="bg-gray-200 px-1 rounded">history.forward()</code> - same as clicking forward in the browser</li>
            <li><code className="bg-gray-200 px-1 rounded">history.go()</code> - loads a specific page from history</li>
          </ul>
        </section>

        {/* Window History Back Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Window History Back</h2>
          <p className="text-gray-700 mb-4">
            The <code className="bg-gray-200 px-1 rounded">history.back()</code> method loads the previous URL in the history list.
            This is the same as clicking the Back button in the browser.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-8">
            <h3 className="font-bold mb-3">Example: Create a back button</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{backExample}</code>
            </pre>
            <button
              onClick={handleCopyBack}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copiedBack ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Window History Forward Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Window History Forward</h2>
          <p className="text-gray-700 mb-4">
            The <code className="bg-gray-200 px-1 rounded">history.forward()</code> method loads the next URL in the history list.
            This is the same as clicking the Forward button in the browser.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example: Create a forward button</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{forwardExample}</code>
            </pre>
            <button
              onClick={handleCopyForward}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copiedForward ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our JavaScript references to learn more about window objects, methods, and properties.
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


export default Window_History;
