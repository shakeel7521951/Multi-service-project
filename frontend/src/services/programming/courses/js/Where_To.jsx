import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const Where_To = () => {
  const jsExamples = {
    scriptTag: `<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>`,

    inHead: `<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>
<h2>Demo JavaScript in Head</h2>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>
</body>
</html>`,

    inBody: `<!DOCTYPE html>
<html>
<body>
<h2>Demo JavaScript in Body</h2>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</body>
</html>`,

    external: `<script src="myScript.js"></script>
<script src="myScript1.js"></script>
<script src="myScript2.js"></script>`,

    externalRef: `<script src="https://www.w3schools.com/js/myScript.js"></script>
<script src="/js/myScript.js"></script>
<script src="myScript.js"></script>`
  };

  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedText(code);
      setTimeout(() => setCopiedText(""), 1500);
    });
  };

  const renderCodeBlock = (title, code) => (
    <div className="bg-[#E7E9EB] p-6 rounded-xl shadow space-y-3">
      <h3 className="text-lg font-semibold">{title}</h3>
      <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
        <code>{code}</code>
      </pre>
      <button
        onClick={() => handleCopy(code)}
        className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-5 py-2 rounded transition"
      >
        {copiedText === code ? "Copied!" : "Copy Code"}
      </button>
    </div>
  );

  return (
    <div className="bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Basics</h1>
          <p className="text-gray-600 text-lg">
            Learn how and where to use JavaScript in your HTML documents with
            real examples.
          </p>
          <div className="flex justify-between mt-4">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>
        </div>

        {/* Intro Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">The &lt;script&gt; Tag</h2>
          <p className="text-gray-800 mb-4">
            JavaScript is written between <code>&lt;script&gt;</code> and{" "}
            <code>&lt;/script&gt;</code> tags. You can include it in the head,
            body, or in external files.
          </p>
          {renderCodeBlock("Example - JavaScript inside <script>", jsExamples.scriptTag)}
        </section>

        {/* Functions & Events */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            JavaScript Functions and Events
          </h2>
          <p className="text-gray-700">
            A JavaScript function is a block of code that runs when "called".
            Functions can be triggered by events like button clicks.
          </p>
        </section>

        {/* JavaScript Placement */}
        <section className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              JavaScript in &lt;head&gt;
            </h2>
            <p className="text-gray-700 mb-4">
              You can place JavaScript in the head section. Here's an example:
            </p>
            {renderCodeBlock("Example - JavaScript in <head>", jsExamples.inHead)}
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              JavaScript in &lt;body&gt;
            </h2>
            <p className="text-gray-700 mb-4">
              You can also place JavaScript in the body section:
            </p>
            {renderCodeBlock("Example - JavaScript in <body>", jsExamples.inBody)}
          </div>
        </section>

        {/* External JavaScript */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">External JavaScript</h2>
          <p className="text-gray-700">
            JavaScript can be placed in separate files and linked with{" "}
            <code>&lt;script src="..."&gt;</code>.
          </p>
          {renderCodeBlock("Example - External JS Links", jsExamples.external)}

          <h3 className="text-lg font-semibold">External References</h3>
          <p className="text-gray-700">
            You can reference external scripts using a full URL, a relative path,
            or just the file name:
          </p>
          {renderCodeBlock("Example - Script References", jsExamples.externalRef)}
        </section>
      
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

export default Where_To;
