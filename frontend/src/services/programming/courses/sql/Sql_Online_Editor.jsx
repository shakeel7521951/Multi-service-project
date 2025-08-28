import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Online_Editor = () => {
  const [copied, setCopied] = useState("");

  const sampleQuery = `SELECT * FROM Customers;`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleQuery).then(() => {
      setCopied("query");
      setTimeout(() => setCopied(""), 1500);
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold mb-3">SQL Online Editor (Compiler)</h1>
          <p className="text-gray-600 text-lg">
            With our online SQL editor, you can edit SQL statements and view the result directly in your browser.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* SQL Editor Demo */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow space-y-6">
          <h2 className="text-2xl font-bold mb-2">SQL Editor Demo</h2>
          <p className="text-gray-700">
            Example query running on a sample database:
          </p>

          {/* Code Block */}
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
            <code>{sampleQuery}</code>
          </pre>
          <button
            onClick={handleCopy}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "query" ? "Copied!" : "Copy SQL"}
          </button>

          {/* Table Output */}
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-3 py-2">ID</th>
                  <th className="border border-gray-300 px-3 py-2">Company</th>
                  <th className="border border-gray-300 px-3 py-2">Contact</th>
                  <th className="border border-gray-300 px-3 py-2">Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">Alfreds Futterkiste</td>
                  <td className="border px-3 py-2">Maria Anders</td>
                  <td className="border px-3 py-2">Germany</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">Centro comercial Moctezuma</td>
                  <td className="border px-3 py-2">Francisco Chang</td>
                  <td className="border px-3 py-2">Mexico</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">3</td>
                  <td className="border px-3 py-2">Ernst Handel</td>
                  <td className="border px-3 py-2">Roland Mendel</td>
                  <td className="border px-3 py-2">Austria</td>
                </tr>
              </tbody>
            </table>
          </div>

          <button className="mt-6 bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition">
            Try it Yourself »
          </button>
        </section>

        {/* Info Sections */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#E7E9EB] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">Publish Your Code</h2>
            <p className="text-gray-700">
              Build and share SQL-based web apps with W3Schools Spaces. Includes free hosting, SQL database, and SSL certificate.
            </p>
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">Learn Faster</h2>
            <p className="text-gray-700">
              Practice SQL directly in the editor. Test queries, debug with logs, and build confidence with real examples.
            </p>
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">Easy Package Management</h2>
            <p className="text-gray-700">
              Add or remove frameworks and libraries easily with one click — no manual installation required.
            </p>
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">Build Powerful Websites</h2>
            <p className="text-gray-700">
              Use ready-made templates (blog, webshop, portfolio) or create a full-stack project from scratch.
            </p>
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-lg shadow md:col-span-2">
            <h2 className="text-xl font-bold mb-2">Share Your Website</h2>
            <p className="text-gray-700">
              Publish instantly with a free subdomain and SSL certificate. Optionally connect your own custom domain.
            </p>
          </div>
        </section>

        {/* Navigation Bottom */}
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

export default Sql_Online_Editor;
