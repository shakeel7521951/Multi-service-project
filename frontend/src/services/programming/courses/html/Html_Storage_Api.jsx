import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Storage_Api = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
      })
      .catch(() => {
        alert("Failed to copy. Please copy manually.");
      });
  };

  const browserSupportExample = `<script>
const x = document.getElementById("result");
if (typeof(Storage) !== "undefined") {
  x.innerHTML = "Your browser supports Web storage!";
} else {
  x.innerHTML = "Sorry, no Web storage support!";
}
</script>`;

  const localStorageExample = `<script>
const x = document.getElementById("result");

if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("lastname", "Smith");
  localStorage.setItem("bgcolor", "yellow");
  // Retrieve
  x.innerHTML = localStorage.getItem("lastname");
  x.style.backgroundColor = localStorage.getItem("bgcolor");
} else {
  x.innerHTML = "Sorry, no Web storage support!";
}
</script>`;

  const clickCounterLocal = `<script>
function clickCounter() {
  const x = document.getElementById("result");
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    x.innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s)!";
  } else {
    x.innerHTML = "Sorry, no Web storage support!";
  }
}
</script>`;

  const clickCounterSession = `<script>
function clickCounter() {
  const x = document.getElementById("result");
  if (typeof(Storage) !== "undefined") {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    } else {
      sessionStorage.clickcount = 1;
    }
    x.innerHTML = "You have clicked the button " + sessionStorage.clickcount + " time(s) in this session!";
  } else {
    x.innerHTML = "Sorry, no Web storage support!";
  }
}
</script>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Web Storage API</h1>

        <div className="flex justify-between mb-10">
          <button
            type="button"
            aria-label="Previous"
            className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer"
          >
            <FaChevronLeft />
            Previous
          </button>
          <button
            type="button"
            aria-label="Next"
            className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer"
          >
            Next
            <FaChevronRight />
          </button>
        </div>

        <section className="text-gray-800">
            <div className="bg-[#D9EEE1] p-5 rounded-2xl mb-6">
          <h2 className="text-3xl font-bold mb-4">What is HTML Web Storage?</h2>
          <p className="mb-4">
            With web storage, applications can store data locally within the user's browser.
          </p>
          <p className="mb-4">
            Before HTML5, application data had to be stored in cookies and sent with every server request.
            Web storage is more secure and allows large amounts of data to be stored locally without affecting website performance.
          </p>
</div>
          <h3 className="text-2xl font-semibold mb-2">Web Storage API Objects</h3>
          <ul className="list-disc pl-5 mb-6">
            <li><code>window.localStorage</code> - stores data with no expiration date</li>
            <li><code>window.sessionStorage</code> - stores data for one session (data is lost when the browser tab is closed)</li>
          </ul>

          {/* Test Support */}
          <h3 className="text-2xl font-semibold mb-2">Test Web Storage API Support</h3>
          <p className="mb-4">You can check if the browser supports web storage using JavaScript:</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{browserSupportExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(browserSupportExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === browserSupportExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* localStorage */}
          <h3 className="text-2xl font-semibold mb-2">The localStorage Object</h3>
          <p className="mb-4">Use <code>localStorage</code> to store key/value pairs in a web browser.</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{localStorageExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(localStorageExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === localStorageExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Click Counter - localStorage */}
          <h3 className="text-2xl font-semibold mb-2">Counting Clicks with localStorage</h3>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{clickCounterLocal}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(clickCounterLocal)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === clickCounterLocal ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* sessionStorage */}
          <h3 className="text-2xl font-semibold mb-2">The sessionStorage Object</h3>
          <p className="mb-4">
            <code>sessionStorage</code> is like <code>localStorage</code>, but the data is only saved for the duration of the page session.
          </p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{clickCounterSession}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(clickCounterSession)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === clickCounterSession ? "Copied!" : "Copy Code"}
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

export default Html_Storage_Api;
