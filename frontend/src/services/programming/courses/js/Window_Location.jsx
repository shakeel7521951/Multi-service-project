import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Window_Location = () => {
  const references = [
    "Window Location Href",
    "Window Location Hostname",
    "Window Location Pathname",
    "Window Location Protocol",
    "Window Location Port",
    "Window Location Assign",
    "Window Location Replace",
    "Window Location Reload",
    "Window History",
    "Window Navigator",
    "Window Screen",
    "Window Timing",
    "Window Cookies",
    "Window Local Storage",
    "Window Session Storage",
  ];

  const exampleCode = `// Get current page URL
const currentUrl = window.location.href;

// Redirect to a new page
window.location.assign("https://example.com");`;

  const assignExample = `<html>
<head>
<script>
function newDoc() {
  window.location.assign("https://www.w3schools.com")
}
</script>
</head>
<body>

<input type="button" value="Load new document" onclick="newDoc()">

</body>
</html>`;

  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("href");

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const renderExample = () => {
    switch (activeTab) {
      case "href":
        return {
          code: `document.getElementById("demo").innerHTML =
"Page location is " + window.location.href;`,
          result: "Page location is https://www.example.com/js/window-location"
        };
      case "hostname":
        return {
          code: `document.getElementById("demo").innerHTML =
"Page hostname is " + window.location.hostname;`,
          result: "Page hostname is www.example.com"
        };
      case "pathname":
        return {
          code: `document.getElementById("demo").innerHTML =
"Page path is " + window.location.pathname;`,
          result: "Page path is /js/window-location"
        };
      case "protocol":
        return {
          code: `document.getElementById("demo").innerHTML =
"Page protocol is " + window.location.protocol;`,
          result: "Page protocol is https:"
        };
      case "port":
        return {
          code: `document.getElementById("demo").innerHTML =
"Port number is " + window.location.port;`,
          result: "Port number is "
        };
      case "assign":
        return {
          code: assignExample,
          result: "Clicking the button will redirect to w3schools.com"
        };
      default:
        return {
          code: exampleCode,
          result: ""
        };
    }
  };

  const example = renderExample();

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Window Location</h1>
          <p className="text-gray-600 text-lg">
            Learn how to work with the browser's location object to manage URLs and navigation.
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
          <h2 className="text-3xl font-bold mb-4">Window Location Object</h2>
          <p className="text-gray-800 mb-3">
            The <code className="bg-gray-200 px-1 rounded">window.location</code> object can be used to get the current page address (URL) and to redirect the browser to a new page.
          </p>
          <p className="text-gray-800 mb-3">
            The <code className="bg-gray-200 px-1 rounded">window.location</code> object can be written without the window prefix.
          </p>
          <p className="text-gray-800 mb-6">
            It provides properties and methods to work with the current URL and navigation.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Examples »
          </button>
        </section>

        {/* Properties Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Window Location Properties</h2>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <button 
              onClick={() => setActiveTab("href")}
              className={`px-4 py-2 rounded ${activeTab === "href" ? "bg-[#04AA6D] text-white" : "bg-gray-200"}`}
            >
              href
            </button>
            <button 
              onClick={() => setActiveTab("hostname")}
              className={`px-4 py-2 rounded ${activeTab === "hostname" ? "bg-[#04AA6D] text-white" : "bg-gray-200"}`}
            >
              hostname
            </button>
            <button 
              onClick={() => setActiveTab("pathname")}
              className={`px-4 py-2 rounded ${activeTab === "pathname" ? "bg-[#04AA6D] text-white" : "bg-gray-200"}`}
            >
              pathname
            </button>
            <button 
              onClick={() => setActiveTab("protocol")}
              className={`px-4 py-2 rounded ${activeTab === "protocol" ? "bg-[#04AA6D] text-white" : "bg-gray-200"}`}
            >
              protocol
            </button>
            <button 
              onClick={() => setActiveTab("port")}
              className={`px-4 py-2 rounded ${activeTab === "port" ? "bg-[#04AA6D] text-white" : "bg-gray-200"}`}
            >
              port
            </button>
            <button 
              onClick={() => setActiveTab("assign")}
              className={`px-4 py-2 rounded ${activeTab === "assign" ? "bg-[#04AA6D] text-white" : "bg-gray-200"}`}
            >
              assign()
            </button>
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">
              {activeTab === "href" && "window.location.href - returns the URL of the current page"}
              {activeTab === "hostname" && "window.location.hostname - returns the domain name of the web host"}
              {activeTab === "pathname" && "window.location.pathname - returns the path and filename of the current page"}
              {activeTab === "protocol" && "window.location.protocol - returns the web protocol used (http: or https:)"}
              {activeTab === "port" && "window.location.port - returns the port number of the current page"}
              {activeTab === "assign" && "window.location.assign() - loads a new document"}
            </h3>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Example:</h4>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{example.code}</code>
              </pre>
              <button
                onClick={() => handleCopy(example.code)}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                {copied ? "Copied!" : "Copy Code"}
              </button>
            </div>

            {example.result && (
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Result:</h4>
                <div className="bg-white p-4 rounded border-l-4 border-gray-300">
                  {example.result}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our JavaScript references to find details about window objects, location properties, and navigation methods.
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


export default Window_Location;
