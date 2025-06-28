import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Doctype = () => {
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

  const doctypeExamples = `<!DOCTYPE html>

<!-- HTML 4.01 Transitional -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<!-- XHTML 1.1 -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML &lt;!DOCTYPE&gt; and Element Support</h1>

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
          {/* <!DOCTYPE> Introduction */}
          <h2 className="text-3xl font-bold mb-4">HTML &lt;!DOCTYPE&gt;</h2>
          <p className="mb-4">
            All HTML documents must begin with a <code>&lt;!DOCTYPE&gt;</code> declaration.
            It tells the browser which version of HTML the page is written in.
          </p>
          <p className="mb-6">
            In modern HTML5, it's simply: <code>&lt;!DOCTYPE html&gt;</code>.
            Older versions use more complex declarations linked to DTDs (Document Type Definitions).
          </p>

          {/* Example Block */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{doctypeExamples}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(doctypeExamples)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === doctypeExamples ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Element Support Table */}
          <h3 className="text-2xl font-semibold mb-4">Valid HTML Elements in Different DOCTYPES</h3>
          <p className="mb-6">
            The table below shows which elements are valid in HTML5, HTML4, and XHTML.
          </p>

          <div className="overflow-auto mb-10">
            <table className="min-w-full bg-white text-sm border border-gray-300">
              <thead className="bg-[#04AA6D] text-white">
                <tr>
                  <th className="px-4 py-2 text-left border border-gray-300">Tag</th>
                  <th className="px-4 py-2 text-left border border-gray-300">HTML 5</th>
                  <th className="px-4 py-2 text-left border border-gray-300">HTML 4</th>
                  <th className="px-4 py-2 text-left border border-gray-300">XHTML</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  ["<a>", "Yes", "Yes", "Yes"],
                  ["<abbr>", "Yes", "Yes", "Yes"],
                  ["<acronym>", "No", "Yes", "Yes"],
                  ["<article>", "Yes", "No", "No"],
                  ["<audio>", "Yes", "No", "No"],
                  ["<b>", "Yes", "Yes", "Yes"],
                  ["<canvas>", "Yes", "No", "No"],
                  ["<center>", "No", "Yes", "No"],
                  ["<dialog>", "Yes", "No", "No"],
                  ["<footer>", "Yes", "No", "No"],
                  ["<header>", "Yes", "No", "No"],
                  ["<main>", "Yes", "No", "No"],
                  ["<nav>", "Yes", "No", "No"],
                  ["<section>", "Yes", "No", "No"],
                  ["<video>", "Yes", "No", "No"],
                  ["<tt>", "No", "Yes", "Yes"],
                  ["<font>", "No", "Yes", "No"],
                  ["<strike>", "No", "Yes", "No"],
                ].map(([tag, html5, html4, xhtml], index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-4 py-2 border border-gray-200 font-mono">{tag}</td>
                    <td className="px-4 py-2 border border-gray-200">{html5}</td>
                    <td className="px-4 py-2 border border-gray-200">{html4}</td>
                    <td className="px-4 py-2 border border-gray-200">{xhtml}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-2 text-xs text-gray-600">* This is a partial list for display purposes. Expand as needed.</p>
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

export default Html_Doctype;
