import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Url_Resource = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const urlSyntaxExample = `scheme://prefix.domain:port/path/filename`;

  const asciiEncodingExample = `
Character    Windows-1252    UTF-8
€            %80             %E2%82%AC
£            %A3             %C2%A3
©            %A9             %C2%A9
®            %AE             %C2%AE
À            %C0             %C3%80
Á            %C1             %C3%81
Â            %C2             %C3%82
Ã            %C3             %C3%83
Ä            %C4             %C3%84
Å            %C5             %C3%85
`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          HTML Uniform Resource Locators (URLs)
        </h1>

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

          {/* Introduction */}
          <p className="mb-4">
            Web browsers request pages from web servers by using a URL.
          </p>
          <p className="mb-4">
            A Uniform Resource Locator (URL) is used to address a document (or other data) on the web.
          </p>

          {/* Syntax Rules */}
          <h2 className="text-3xl font-bold mb-4">URL Syntax</h2>
          <p className="mb-4">
            A web address like <code>https://www.w3schools.com/html/default.asp</code> follows this structure:
          </p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-6">
            <h3 className="font-bold mb-3">Syntax:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded whitespace-pre-wrap">
              <code>{urlSyntaxExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(urlSyntaxExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === urlSyntaxExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Explanation */}
          <h3 className="text-2xl font-semibold mb-2">Explanation:</h3>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li><strong>scheme</strong> - defines the type of Internet service (most common is http or https)</li>
            <li><strong>prefix</strong> - defines a domain prefix (default for http is www)</li>
            <li><strong>domain</strong> - defines the Internet domain name (like w3schools.com)</li>
            <li><strong>port</strong> - defines the port number at the host (default for http is 80)</li>
            <li><strong>path</strong> - defines a path at the server (If omitted: the root directory of the site)</li>
            <li><strong>filename</strong> - defines the name of a document or resource</li>
          </ul>

          {/* Common Schemes */}
          <h2 className="text-3xl font-bold mb-4">Common URL Schemes</h2>
          <div className="overflow-auto mb-10">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-[#04AA6D] text-white">
                <tr>
                  <th className="p-3 border">Scheme</th>
                  <th className="p-3 border">Short for</th>
                  <th className="p-3 border">Used for</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 border">http</td>
                  <td className="p-3 border">HyperText Transfer Protocol</td>
                  <td className="p-3 border">Common web pages. Not encrypted</td>
                </tr>
                <tr className="bg-[#f9f9f9]">
                  <td className="p-3 border">https</td>
                  <td className="p-3 border">Secure HyperText Transfer Protocol</td>
                  <td className="p-3 border">Secure web pages. Encrypted</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border">ftp</td>
                  <td className="p-3 border">File Transfer Protocol</td>
                  <td className="p-3 border">Downloading or uploading files</td>
                </tr>
                <tr className="bg-[#f9f9f9]">
                  <td className="p-3 border">file</td>
                  <td className="p-3 border"> </td>
                  <td className="p-3 border">A file on your computer</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* URL Encoding */}
          <h2 className="text-3xl font-bold mb-4">URL Encoding</h2>
          <p className="mb-4">
            URLs can only be sent over the Internet using the ASCII character set. Non-ASCII characters must be encoded.
          </p>
          <p className="mb-6">
            URL encoding replaces non-ASCII characters with a <code>%</code> followed by hexadecimal digits. Spaces are usually replaced by <code>+</code> or <code>%20</code>.
          </p>

          {/* ASCII Encoding Examples */}
          <h3 className="text-2xl font-semibold mb-2">ASCII Encoding Examples</h3>
          <p className="mb-4">
            Your browser encodes input based on the character set of your page. HTML5 defaults to UTF-8.
          </p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10 overflow-auto">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded whitespace-pre-wrap">
              <code>{asciiEncodingExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(asciiEncodingExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === asciiEncodingExample ? "Copied!" : "Copy Code"}
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

export default Html_Url_Resource;
