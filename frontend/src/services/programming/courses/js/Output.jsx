import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Output = () => {
  const displayMethods = [
    "innerHTML",
    "innerText",
    "document.write()",
    "window.alert()",
    "console.log()",
    "window.print()"
  ];

  const examples = [
    {
      title: "Using innerHTML",
      description: "To access an HTML element, you can use the document.getElementById(id) method. Use the id attribute to identify the HTML element. Then use the innerHTML property to change the HTML content of the HTML element:",
      code: `<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "<h2>Hello World</h2>";
</script>

</body>
</html>`
    },
    {
      title: "Using innerText",
      description: "To access an HTML element, use the document.getElementById(id) method. Then use the innerText property to change the inner text of the HTML element:",
      code: `<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerText = "Hello World";
</script>

</body>
</html>`
    },
    {
      title: "Using document.write()",
      description: "For testing purposes, it is convenient to use document.write():",
      code: `<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
document.write(5 + 6);
</script>

</body>
</html>`
    },
    {
      title: "Using window.alert()",
      description: "You can use an alert box to display data:",
      code: `<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
window.alert(5 + 6);
</script>

</body>
</html>`
    },
    {
      title: "Using console.log()",
      description: "For debugging purposes, you can use console.log():",
      code: `<!DOCTYPE html>
<html>
<body>

<script>
console.log(5 + 6);
</script>

</body>
</html>`
    },
    {
      title: "JavaScript Print",
      description: "You can print the current window using window.print():",
      code: `<!DOCTYPE html>
<html>
<body>

<button onclick="window.print()">Print this page</button>

</body>
</html>`
    }
  ];

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (index) => {
    navigator.clipboard
      .writeText(examples[index].code)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Output</h1>
          <p className="text-gray-600 text-lg">
            Learn different ways to display and output data in JavaScript.
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
          <h2 className="text-3xl font-bold mb-4">JavaScript Display Possibilities</h2>
          <p className="text-gray-800 mb-3">
            JavaScript can display data in different ways:
          </p>
          <ul className="list-disc pl-5 mb-3 text-gray-800">
            <li>Writing into an HTML element, using innerHTML or innerText</li>
            <li>Writing into the HTML output using document.write()</li>
            <li>Writing into an alert box, using window.alert()</li>
            <li>Writing into the browser console, using console.log()</li>
          </ul>
          <p className="text-gray-800 mb-6">
            Each method serves different purposes and is useful in different scenarios.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Examples »
          </button>
        </section>

        {/* Display Methods */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            JavaScript Output Methods
          </h2>
          <p className="text-gray-700 mb-4">
            Explore different ways to output data in JavaScript:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {displayMethods.map((method, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded transition"
              >
                {method}
              </button>
            ))}
          </div>
        </section>

        {/* Examples Section */}
        <section className="space-y-8">
          {examples.map((example, index) => (
            <div key={index} className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">{example.title}</h3>
              <p className="text-gray-700 mb-4">{example.description}</p>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{example.code}</code>
              </pre>
              <button
                onClick={() => handleCopy(index)}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                {copiedIndex === index ? "Copied!" : "Copy Code"}
              </button>
            </div>
          ))}
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

export default Output;