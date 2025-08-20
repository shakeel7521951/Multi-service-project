import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const JavaScript_Cookies = () => {
  const references = [
    "Cookie Basics",
    "Creating Cookies",
    "Reading Cookies",
    "Updating Cookies",
    "Deleting Cookies",
    "Cookie Expiration",
    "Cookie Paths",
    "Cookie Security",
    "Session Cookies",
    "Persistent Cookies",
    "Third-party Cookies",
    "Cookie Attributes",
    "SameSite Attribute",
    "HTTP-only Cookies",
    "Cookie Best Practices"
  ];

  const cookieExample = `// Set a cookie
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";

// Get all cookies
const allCookies = document.cookie;

// Delete a cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";`;

  const fullExample = `function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let username = getCookie("username");
  if (username != "") {
    alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 365);
    }
  }
}`;

  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("basic");

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

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Cookies</h1>
          <p className="text-gray-600 text-lg">
            Learn how to use cookies to store user information in web pages and create personalized experiences.
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
          <h2 className="text-3xl font-bold mb-4">What are Cookies?</h2>
          <p className="text-gray-800 mb-3">
            Cookies are data, stored in small text files, on your computer. They allow websites to remember information about users between pages and visits.
          </p>
          <p className="text-gray-800 mb-3">
            When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user. Cookies solve this by storing information locally.
          </p>
          <p className="text-gray-800 mb-6">
            Try our interactive examples below to see how cookies work in practice.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Cookie Examples »
          </button>
        </section>

        {/* Tabs Section */}
        <section>
          <div className="flex border-b border-gray-200">
            <button
              className={`py-2 px-4 font-medium ${activeTab === "basic" ? "text-[#04AA6D] border-b-2 border-[#04AA6D]" : "text-gray-600"}`}
              onClick={() => setActiveTab("basic")}
            >
              Basic Examples
            </button>
            <button
              className={`py-2 px-4 font-medium ${activeTab === "functions" ? "text-[#04AA6D] border-b-2 border-[#04AA6D]" : "text-gray-600"}`}
              onClick={() => setActiveTab("functions")}
            >
              Cookie Functions
            </button>
            <button
              className={`py-2 px-4 font-medium ${activeTab === "full" ? "text-[#04AA6D] border-b-2 border-[#04AA6D]" : "text-gray-600"}`}
              onClick={() => setActiveTab("full")}
            >
              Complete Example
            </button>
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-b-xl rounded-tr-xl">
            {activeTab === "basic" && (
              <>
                <h3 className="font-bold mb-3">Basic Cookie Operations:</h3>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{cookieExample}</code>
                </pre>
                <button
                  onClick={() => handleCopy(cookieExample)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copied ? "Copied!" : "Copy Code"}
                </button>
              </>
            )}

            {activeTab === "functions" && (
              <>
                <h3 className="font-bold mb-3">Cookie Utility Functions:</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">setCookie() - Create/Update a cookie</h4>
                    <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                      <code>{`function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}`}</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">getCookie() - Read a cookie value</h4>
                    <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                      <code>{`function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}`}</code>
                    </pre>
                  </div>
                </div>
              </>
            )}

            {activeTab === "full" && (
              <>
                <h3 className="font-bold mb-3">Complete Cookie Example:</h3>
                <p className="mb-4 text-gray-700">
                  This example shows a complete implementation of cookie handling, including setting, getting, and checking cookies.
                </p>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{fullExample}</code>
                </pre>
                <button
                  onClick={() => handleCopy(fullExample)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copied ? "Copied!" : "Copy Full Example"}
                </button>
              </>
            )}
          </div>
        </section>

        {/* Key Concepts */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold mb-4">Key Cookie Concepts</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-[#04AA6D]">Cookie Properties</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Name=Value:</strong> The actual data stored in the cookie</li>
              <li><strong>Expires:</strong> When the cookie should expire (session cookie if not set)</li>
              <li><strong>Path:</strong> Which paths on the domain can access the cookie</li>
              <li><strong>Domain:</strong> Which domain can access the cookie</li>
              <li><strong>Secure:</strong> Only sent over HTTPS if this flag is set</li>
              <li><strong>SameSite:</strong> Controls cross-site cookie sending (Lax, Strict, None)</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-[#04AA6D]">Cookie Limitations</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Typically limited to 4KB per cookie</li>
              <li>Browsers may impose limits on number of cookies per domain (usually around 50)</li>
              <li>Users can disable cookies in browser settings</li>
              <li>Subject to same-origin policy and CORS restrictions</li>
              <li>Consider privacy regulations (GDPR, CCPA) when using cookies</li>
            </ul>
          </div>
        </section>

        {/* References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Cookie References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive cookie references to learn about all aspects of cookie handling in JavaScript.
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

export default JavaScript_Cookies;