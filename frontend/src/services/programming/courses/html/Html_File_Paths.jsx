import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_FilePaths = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const absolutePathExample = `<img src="https://www.w3schools.com/images/picture.jpg" alt="Mountain">`;

  const relativePathRoot = `<img src="/images/picture.jpg" alt="Mountain">`;

  const relativePathCurrent = `<img src="images/picture.jpg" alt="Mountain">`;

  const relativePathUpOne = `<img src="../images/picture.jpg" alt="Mountain">`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML File Paths</h1>

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
          <h2 className="text-3xl font-bold mb-4">Understanding HTML File Paths</h2>
          <p className="mb-4">
            A file path describes the location of a file in a web site's folder structure.
          </p>

          <h3 className="text-2xl font-semibold mb-2">File Path Examples</h3>

          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead className="bg-[#E7E9EB]">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Path</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">&lt;img src="picture.jpg"&gt;</td>
                  <td className="border border-gray-300 px-4 py-2">Same folder as current page</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">&lt;img src="images/picture.jpg"&gt;</td>
                  <td className="border border-gray-300 px-4 py-2">Inside "images" folder in current folder</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">&lt;img src="/images/picture.jpg"&gt;</td>
                  <td className="border border-gray-300 px-4 py-2">Inside "images" at the root of the web</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">&lt;img src="../picture.jpg"&gt;</td>
                  <td className="border border-gray-300 px-4 py-2">One level up from current folder</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold mb-2">Absolute File Paths</h3>
          <p className="mb-6">An absolute file path is the full URL to a file on the web.</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{absolutePathExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(absolutePathExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === absolutePathExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">Relative File Paths</h3>
          <p className="mb-4">A relative file path points to a file relative to the current page location.</p>

          {/* Relative - Root */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-6">
            <h4 className="font-bold mb-3">Root Folder Example:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{relativePathRoot}</code>
            </pre>
            <button
              onClick={() => handleCopy(relativePathRoot)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === relativePathRoot ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Relative - Current */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-6">
            <h4 className="font-bold mb-3">Current Folder Example:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{relativePathCurrent}</code>
            </pre>
            <button
              onClick={() => handleCopy(relativePathCurrent)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === relativePathCurrent ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Relative - Up One */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h4 className="font-bold mb-3">One Folder Up Example:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{relativePathUpOne}</code>
            </pre>
            <button
              onClick={() => handleCopy(relativePathUpOne)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === relativePathUpOne ? "Copied!" : "Copy Code"}
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

export default Html_FilePaths;
