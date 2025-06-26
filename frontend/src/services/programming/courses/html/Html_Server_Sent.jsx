import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Server_Sent = () => {
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

  const clientExample = `<script>
const x = document.getElementById("result");
if (typeof(EventSource) !== "undefined") {
  var source = new EventSource("demo_sse.php");
  source.onmessage = function(event) {
    x.innerHTML += event.data + "<br>";
  };
} else {
  x.innerHTML = "Sorry, no support for server-sent events.";
}
</script>`;

  const serverPHPExample = `<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

$time = date('r');
echo "data: The server time is: {$time}\\n\\n";
flush();
?>`;

  const serverASPExample = `<%
Response.ContentType = "text/event-stream"
Response.Expires = -1
Response.Write("data: The server time is: " & now())
Response.Flush()
%>`;

  const eventSourceEvents = `Events      Description
onopen      When a connection to the server is opened
onmessage   When a message is received
onerror     When an error occurs`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Server-Sent Events (SSE)</h1>

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
          <h2 className="text-3xl font-bold mb-4">Server-Sent Events - One Way Messaging</h2>
          <p className="mb-4">
            A server-sent event is when a web page automatically receives updates from a server.
          </p>
          <p className="mb-6">
            Normally, a web page must request data from the server, but with server-sent events, updates are pushed automatically from the server to the client.
          </p>
</div>
          {/* Client Side Example */}
          <h3 className="text-2xl font-semibold mb-2">Receiving SSE Notifications (Client-Side)</h3>
          <p className="mb-4">
            The <code>EventSource</code> object is used to receive server-sent event notifications.
          </p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{clientExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(clientExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === clientExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* PHP Server Side Example */}
          <h3 className="text-2xl font-semibold mb-2">Server-Side Code (PHP)</h3>
          <p className="mb-6">The server sends data in a specific format with MIME type <code>text/event-stream</code>.</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example (PHP):</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{serverPHPExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(serverPHPExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === serverPHPExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* ASP Server Side Example */}
          <h3 className="text-2xl font-semibold mb-2">Server-Side Code (ASP)</h3>
          <p className="mb-6">Here's the equivalent server-side SSE implementation using ASP (VBScript):</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example (ASP):</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{serverASPExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(serverASPExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === serverASPExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* EventSource Events Table */}
          <h3 className="text-2xl font-semibold mb-2">The EventSource Object Events</h3>
          <p className="mb-6">You can handle different types of events using the following properties:</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10 overflow-x-auto">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{eventSourceEvents}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(eventSourceEvents)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === eventSourceEvents ? "Copied!" : "Copy Table"}
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

export default Html_Server_Sent;
