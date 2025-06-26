import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Drag_Drop = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
      })
      .catch(() => alert("Failed to copy. Please copy manually."));
  };

  const dragDropExample = `<!DOCTYPE HTML>
<html>
<head>
<script>
function dragstartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function dragoverHandler(ev) {
  ev.preventDefault();
}

function dropHandler(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
</script>
</head>
<body>

<div id="div1" ondrop="dropHandler(event)" ondragover="dragoverHandler(event)" 
     style="width: 350px; height: 100px; border: 1px solid black;"></div>

<img id="img1" src="img_logo.gif" draggable="true" 
     ondragstart="dragstartHandler(event)" width="336" height="69">

</body>
</html>`;

  const h1Example = `<div id="div1" ondrop="dropHandler(event)" ondragover="dragoverHandler(event)"
     style="width: 350px; height: 100px; border: 1px solid black;"></div>

<h1 id="h1" draggable="true" ondragstart="dragstartHandler(event)">W3Schools.com</h1>`;

  const anchorExample = `<div id="div1" ondrop="dropHandler(event)" ondragover="dragoverHandler(event)"
     style="width: 350px; height: 100px; border: 1px solid black;"></div>

<a id="link1" href="https://w3schools.com" draggable="true" 
   ondragstart="dragstartHandler(event)">W3Schools.com</a>`;

  const dragScript = `function dragstartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}`;

  const dragoverScript = `function dragoverHandler(ev) {
  ev.preventDefault();
}`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Drag and Drop API</h1>

        <div className="flex justify-between mb-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            <FaChevronLeft />
            Previous
          </button>
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            Next
            <FaChevronRight />
          </button>
        </div>

        <section className="text-gray-800">
          <h2 className="text-3xl font-bold mb-4">Drag and Drop</h2>
          <p className="mb-4">Drag and drop is a very common feature. It is when you "grab" an object and drag it to a different location.</p>

          <h3 className="text-2xl font-semibold mb-2">HTML Drag and Drop API Example</h3>
          <p className="mb-4">The example below is a simple drag and drop implementation using native JavaScript.</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h4 className="font-bold mb-3">Example:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{dragDropExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(dragDropExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === dragDropExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">Make an Element Draggable</h3>
          <p className="mb-4">To make an element draggable, add the <code>draggable="true"</code> attribute:</p>

          <pre className="bg-gray-100 p-4 mb-4 rounded font-mono text-sm">
            <code>{`<img id="img1" draggable="true">`}</code>
          </pre>
          <pre className="bg-gray-100 p-4 mb-10 rounded font-mono text-sm">
            <code>{`<p id="p1" draggable="true">Draggable text</p>`}</code>
          </pre>

          <h3 className="text-2xl font-semibold mb-2">What to Drag - <code>ondragstart</code> and <code>setData()</code></h3>
          <p className="mb-4">The <code>setData()</code> method sets the type and value of the dragged data.</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h4 className="font-bold mb-3">Example:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{dragScript}</code>
            </pre>
            <button
              onClick={() => handleCopy(dragScript)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === dragScript ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">Where to Drop - <code>ondragover</code></h3>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h4 className="font-bold mb-3">Example:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{dragoverScript}</code>
            </pre>
            <button
              onClick={() => handleCopy(dragoverScript)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === dragoverScript ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">More Examples</h3>

          {/* h1 drag & drop */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h4 className="font-bold mb-3">Drag an &lt;h1&gt; to a &lt;div&gt;:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{h1Example}</code>
            </pre>
            <button
              onClick={() => handleCopy(h1Example)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === h1Example ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* anchor drag & drop */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h4 className="font-bold mb-3">Drag an &lt;a&gt; to a &lt;div&gt;:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{anchorExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(anchorExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === anchorExample ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        <div className="flex justify-end mt-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Html_Drag_Drop;
