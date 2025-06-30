import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Status_Messages = () => {
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

  const httpExamples = [
    {
      title: "1xx: Informational",
      code: `100 Continue\t\tThe server has received the request headers, and the client should proceed to send the request body
101 Switching Protocols\tThe requester has asked the server to switch protocols
103 Early Hints\t\tUsed with the Link header to allow the browser to start preloading resources while the server prepares a response`
    },
    {
      title: "2xx: Successful",
      code: `200 OK\t\t\tThe request is OK (this is the standard response for successful HTTP requests)
201 Created\t\tThe request has been fulfilled, and a new resource is created
202 Accepted\t\tThe request has been accepted for processing, but the processing has not been completed
203 Non-Authoritative Information\tThe request has been successfully processed, but is returning information that may be from another source
204 No Content\t\tThe request has been successfully processed, but is not returning any content
205 Reset Content\t\tThe request has been successfully processed, but requires that the requester reset the document view
206 Partial Content\t\tThe server is delivering only part of the resource due to a range header sent by the client`
    },
    {
      title: "3xx: Redirection",
      code: `300 Multiple Choices\t\tA link list. The user can select a link and go to that location. Max five addresses
301 Moved Permanently\t\tThe requested page has moved to a new URL
302 Found\t\tThe requested page has moved temporarily to a new URL
303 See Other\t\tThe requested page can be found under a different URL
304 Not Modified\t\tIndicates the requested page has not been modified since last requested
307 Temporary Redirect\tThe requested page has moved temporarily to a new URL
308 Permanent Redirect\tThe requested page has moved permanently to a new URL`
    },
    {
      title: "4xx: Client Error",
      code: `400 Bad Request\t\tThe request cannot be fulfilled due to bad syntax
401 Unauthorized\t\tThe request was a legal request, but authentication is required
402 Payment Required\t\tReserved for future use
403 Forbidden\t\tThe request was valid, but the server is refusing to respond
404 Not Found\t\tThe requested page could not be found but may be available again
405 Method Not Allowed\tA request was made using an unsupported method
406 Not Acceptable\t\tThe server can only generate unacceptable content
407 Proxy Authentication Required\tAuthentication with the proxy is required
408 Request Timeout\t\tThe server timed out waiting for the request
409 Conflict\t\t\tThe request could not be completed due to a conflict
410 Gone\t\t\tThe requested page is no longer available
411 Length Required\t\tThe server requires a defined Content-Length
412 Precondition Failed\t\tA precondition in the request failed
413 Request Too Large\t\tThe request entity is too large
414 Request-URI Too Long\tThe URI is too long for the server to process
415 Unsupported Media Type\tThe media type is not supported
416 Range Not Satisfiable\t\tCannot supply the requested portion of the file
417 Expectation Failed\t\tThe server cannot meet the Expect header requirements`
    },
    {
      title: "5xx: Server Error",
      code: `500 Internal Server Error\t\tA generic server error message
501 Not Implemented\t\tThe server does not recognize the request method
502 Bad Gateway\t\tThe server received an invalid response from an upstream server
503 Service Unavailable\t\tThe server is currently unavailable (overloaded or down)
504 Gateway Timeout\t\tThe server did not receive a timely response
505 HTTP Version Not Supported\tHTTP protocol version not supported
511 Network Authentication Required\tClient needs to authenticate to access the network`
    }
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTTP Status Messages</h1>

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
          <h2 className="text-3xl font-bold mb-4">HTML Error Messages</h2>
          <p className="mb-4">
            When a browser requests a service from a web server, an error might occur, and the server might return an HTTP status code like <strong>404 Not Found</strong>.
          </p>

          {httpExamples.map(({ title, code }, index) => (
            <div key={index} className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
                <code>{code}</code>
              </pre>
              <button
                type="button"
                onClick={() => handleCopy(code)}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
              >
                {copiedCode === code ? "Copied!" : "Copy Code"}
              </button>
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

export default Html_Status_Messages;
