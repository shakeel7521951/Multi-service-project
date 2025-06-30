import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Request_Methods = () => {
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

  const getExample = `/test/demo_form.php?name1=value1&name2=value2`;
  const postExample = `POST /test/demo_form.php HTTP/1.1
Host: w3schools.com

name1=value1&name2=value2`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTTP Request Methods</h1>

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
          <h2 className="text-3xl font-bold mb-4">What is HTTP?</h2>
          <p className="mb-4">
            The Hypertext Transfer Protocol (HTTP) is designed to enable communications between clients and servers.
          </p>
          <p className="mb-6">
            HTTP works as a request-response protocol between a client and server.
          </p>

          <h3 className="text-2xl font-semibold mb-2">HTTP Methods</h3>
          <p className="mb-4">
            Common HTTP methods include: <strong>GET, POST, PUT, DELETE, HEAD, PATCH, OPTIONS, CONNECT, TRACE</strong>.
          </p>
          <p className="mb-6">
            The two most commonly used HTTP methods are: <strong>GET</strong> and <strong>POST</strong>.
          </p>

          {/* GET Method */}
          <h3 className="text-2xl font-semibold mb-2">The GET Method</h3>
          <p className="mb-4">
            GET is used to request data from a specified resource. Data is sent in the URL.
          </p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-6">
            <h4 className="font-bold mb-3">Example:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{getExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(getExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === getExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <ul className="list-disc list-inside mb-6">
            <li>Can be cached</li>
            <li>Remains in browser history</li>
            <li>Can be bookmarked</li>
            <li>Should not be used for sensitive data</li>
            <li>Has length restrictions</li>
            <li>Used only to request data</li>
          </ul>

          {/* POST Method */}
          <h3 className="text-2xl font-semibold mb-2">The POST Method</h3>
          <p className="mb-4">
            POST is used to send data to a server to create or update a resource. Data is included in the request body.
          </p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-6">
            <h4 className="font-bold mb-3">Example:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{postExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(postExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === postExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <ul className="list-disc list-inside mb-6">
            <li>Not cached</li>
            <li>Not stored in browser history</li>
            <li>Cannot be bookmarked</li>
            <li>No restrictions on data length</li>
          </ul>

          {/* Comparison Table */}
          <h3 className="text-2xl font-semibold mb-4">GET vs. POST</h3>
          <div className="overflow-auto mb-10">
            <table className="min-w-full text-sm text-left border border-gray-300">
              <thead className="bg-[#04AA6D] text-white">
                <tr>
                  <th className="p-3 border border-gray-300">Feature</th>
                  <th className="p-3 border border-gray-300">GET</th>
                  <th className="p-3 border border-gray-300">POST</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Back button/Reload", "Harmless", "Data re-submitted"],
                  ["Bookmarked", "Yes", "No"],
                  ["Cached", "Yes", "No"],
                  ["Encoding type", "application/x-www-form-urlencoded", "application/x-www-form-urlencoded or multipart/form-data"],
                  ["History", "Params in history", "Not stored"],
                  ["Data length", "Restricted", "No restrictions"],
                  ["Data type", "ASCII only", "Binary allowed"],
                  ["Security", "Less secure", "More secure"],
                  ["Visibility", "URL visible", "Data hidden"],
                ].map(([feature, getVal, postVal], idx) => (
                  <tr key={idx} className="odd:bg-white even:bg-gray-100">
                    <td className="p-3 border border-gray-300">{feature}</td>
                    <td className="p-3 border border-gray-300">{getVal}</td>
                    <td className="p-3 border border-gray-300">{postVal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Other Methods */}
          {[
            ["PUT", "Used to send data to a server to create or update a resource. PUT is idempotent, meaning multiple identical requests will not create duplicates."],
            ["HEAD", "Same as GET but without the response body. Useful for checking headers before downloading."],
            ["DELETE", "Deletes the specified resource."],
            ["PATCH", "Applies partial modifications to a resource."],
            ["OPTIONS", "Describes the communication options for the target resource."],
            ["CONNECT", "Starts a two-way tunnel to the server."],
            ["TRACE", "Performs a loop-back test to check the path to the resource."]
          ].map(([method, description], idx) => (
            <div key={idx} className="mb-6">
              <h4 className="text-xl font-semibold">{method} Method</h4>
              <p className="ml-4 mt-1">{description}</p>
            </div>
          ))}
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

export default Html_Request_Methods;
