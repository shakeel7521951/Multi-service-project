import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Storage_Api = () => {
  const localStorageExample = `// Store data
localStorage.setItem("name", "John Doe");

// Retrieve data
const name = localStorage.getItem("name");

// Remove data
localStorage.removeItem("name");`;

  const sessionStorageExample = `// Store data for session
sessionStorage.setItem("name", "John Doe");

// Retrieve session data
const name = sessionStorage.getItem("name");`;

  const methods = [
    { name: "key(n)", description: "Returns the name of the nth key in the storage" },
    { name: "length", description: "Returns the number of data items stored in the Storage object" },
    { name: "getItem(keyname)", description: "Returns the value of the specified key name" },
    { name: "setItem(keyname, value)", description: "Adds a key to the storage, or updates a key value (if it already exists)" },
    { name: "removeItem(keyname)", description: "Removes that key from the storage" },
    { name: "clear()", description: "Empty all key out of the storage" },
  ];

  const relatedPages = [
    { property: "window.localStorage", description: "Allows to save key/value pairs in a web browser. Stores the data with no expiration date" },
    { property: "window.sessionStorage", description: "Allows to save key/value pairs in a web browser. Stores the data for one session" },
  ];

  const browserSupport = [
    { browser: "Chrome", supported: "Yes" },
    { browser: "IE/Edge", supported: "Yes" },
    { browser: "Firefox", supported: "Yes" },
    { browser: "Safari", supported: "Yes" },
    { browser: "Opera", supported: "Yes" },
  ];

  const [copied, setCopied] = useState({ localStorage: false, sessionStorage: false });

  const handleCopy = (type) => {
    const textToCopy = type === 'localStorage' ? localStorageExample : sessionStorageExample;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied({ ...copied, [type]: true });
        setTimeout(() => setCopied({ ...copied, [type]: false }), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">Web Storage API</h1>
          <p className="text-gray-600 text-lg">
            Store and retrieve data in the browser with the simple Web Storage API syntax.
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
          <h2 className="text-3xl font-bold mb-4">Web Storage API</h2>
          <p className="text-gray-800 mb-3">
            The Web Storage API is a simple syntax for storing and retrieving data in the browser. It is very easy to use:
          </p>
          <div className="bg-white p-4 rounded-md my-4">
            <pre className="font-mono text-sm">
              <code>localStorage.setItem("name", "John Doe");</code><br />
              <code>localStorage.getItem("name");</code>
            </pre>
          </div>
        </section>

        {/* Browser Support Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Browser Support</h2>
          <p className="text-gray-700 mb-4">
            The Web Storage API is supported in all browsers:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Browser</th>
                  <th className="text-left py-2">Supported</th>
                </tr>
              </thead>
              <tbody>
                {browserSupport.map((browser, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2">{browser.browser}</td>
                    <td className="py-2">{browser.supported}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* localStorage Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">The localStorage Object</h2>
          <p className="text-gray-700 mb-4">
            The localStorage object provides access to a local storage for a particular Web Site. It allows you to store, read, add, modify, and delete data items for that domain.
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
            <li>The data is stored with no expiration date</li>
            <li>Will not be deleted when the browser is closed</li>
            <li>The data will be available for days, weeks, and years</li>
          </ul>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl mt-4">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{localStorageExample}</code>
            </pre>
            <button
              onClick={() => handleCopy('localStorage')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.localStorage ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* sessionStorage Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">The sessionStorage Object</h2>
          <p className="text-gray-700 mb-4">
            The sessionStorage object is identical to the localStorage object. The difference is that the sessionStorage object stores data for one session.
          </p>
          <p className="text-gray-700 mb-4">
            The data is deleted when the browser is closed.
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl mt-4">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{sessionStorageExample}</code>
            </pre>
            <button
              onClick={() => handleCopy('sessionStorage')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.sessionStorage ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Methods Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Storage Object Properties and Methods</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Property/Method</th>
                  <th className="text-left py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                {methods.map((method, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 font-mono">{method.name}</td>
                    <td className="py-2">{method.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Pages Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Related Pages for Web Storage API</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Property</th>
                  <th className="text-left py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                {relatedPages.map((page, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 font-mono">{page.property}</td>
                    <td className="py-2">{page.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default Storage_Api;
