import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Character = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Code snippets for examples
  const metaUtf8 = `<meta charset="UTF-8">`;

  const metaWin1252 = `<meta charset="Windows-1252">`;

  const metaIsoHtml4 = `<meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1">`;

  const metaIsoHtml5 = `<meta charset="ISO-8859-1">`;

  const metaUtf8Full = `<meta charset="UTF-8">`;

  return (
    <div className="min-h-screen bg-white px-4 py-10 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">HTML Encoding (Character Sets)</h1>

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
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">To display an HTML page correctly</h2>
          <p className="mb-4">
            A web browser must know which character set to use.
          </p>

          <h3 className="text-2xl font-semibold mb-3">The HTML charset Attribute</h3>
          <p className="mb-4">
            The character set is specified in the <code>&lt;meta&gt;</code> tag:
          </p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl mb-6">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{metaUtf8}</code>
            </pre>
            <button
              onClick={() => handleCopy(metaUtf8)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === metaUtf8 ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-3">The ASCII Character Set</h3>
          <p className="mb-3">
            ASCII was the first character encoding standard for the web. It defined 128 different characters that could be used on the internet:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>English letters (A-Z)</li>
            <li>Numbers (0-9)</li>
            <li>Special characters like ! $ + - ( ) @ &lt; &gt;.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3">The ANSI Character Set</h3>
          <p className="mb-3">
            ANSI (Windows-1252) was the original Windows character set:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Identical to ASCII for the first 127 characters</li>
            <li>Special characters from 128 to 159</li>
            <li>Identical to UTF-8 from 160 to 255</li>
          </ul>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl mb-6">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{metaWin1252}</code>
            </pre>
            <button
              onClick={() => handleCopy(metaWin1252)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === metaWin1252 ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-3">The ISO-8859-1 Character Set</h3>
          <p className="mb-3">
            ISO-8859-1 was the default character set for HTML 4. This character set supported 256 different character codes. HTML 4 also supported UTF-8.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Identical to ASCII for the first 127 characters</li>
            <li>Does not use the characters from 128 to 159</li>
            <li>Identical to ANSI and UTF-8 from 160 to 255</li>
          </ul>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl mb-4">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{metaIsoHtml4}</code>
            </pre>
            <button
              onClick={() => handleCopy(metaIsoHtml4)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === metaIsoHtml4 ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl mb-6">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{metaIsoHtml5}</code>
            </pre>
            <button
              onClick={() => handleCopy(metaIsoHtml5)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === metaIsoHtml5 ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-3">The UTF-8 Character Set</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Identical to ASCII for the values from 0 to 127</li>
            <li>Does not use the characters from 128 to 159</li>
            <li>Identical to ANSI and 8859-1 from 160 to 255</li>
            <li>Continues from the value 256 to 10,000 characters</li>
          </ul>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl mb-6">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{metaUtf8Full}</code>
            </pre>
            <button
              onClick={() => handleCopy(metaUtf8Full)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === metaUtf8Full ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">Differences Between Character Sets</h3>
          <p className="mb-6">
            The following table displays the differences between the character sets described above:
          </p>

          <div className="overflow-auto border rounded-lg mb-10">
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-2 py-1 text-left">Numb</th>
                  <th className="border border-gray-300 px-2 py-1 text-left">ASCII</th>
                  <th className="border border-gray-300 px-2 py-1 text-left">ANSI</th>
                  <th className="border border-gray-300 px-2 py-1 text-left">8859</th>
                  <th className="border border-gray-300 px-2 py-1 text-left">UTF‑8</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">32</td>
                  <td className="border border-gray-300 px-2 py-1">Space</td>
                  <td className="border border-gray-300 px-2 py-1">Space</td>
                  <td className="border border-gray-300 px-2 py-1">Space</td>
                  <td className="border border-gray-300 px-2 py-1">Space</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">33</td>
                  <td className="border border-gray-300 px-2 py-1">!</td>
                  <td className="border border-gray-300 px-2 py-1">!</td>
                  <td className="border border-gray-300 px-2 py-1">!</td>
                  <td className="border border-gray-300 px-2 py-1">!</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">34</td>
                  <td className="border border-gray-300 px-2 py-1">"</td>
                  <td className="border border-gray-300 px-2 py-1">"</td>
                  <td className="border border-gray-300 px-2 py-1">"</td>
                  <td className="border border-gray-300 px-2 py-1">"</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">35</td>
                  <td className="border border-gray-300 px-2 py-1">#</td>
                  <td className="border border-gray-300 px-2 py-1">#</td>
                  <td className="border border-gray-300 px-2 py-1">#</td>
                  <td className="border border-gray-300 px-2 py-1">#</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">36</td>
                  <td className="border border-gray-300 px-2 py-1">$</td>
                  <td className="border border-gray-300 px-2 py-1">$</td>
                  <td className="border border-gray-300 px-2 py-1">$</td>
                  <td className="border border-gray-300 px-2 py-1">$</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">37</td>
                  <td className="border border-gray-300 px-2 py-1">%</td>
                  <td className="border border-gray-300 px-2 py-1">%</td>
                  <td className="border border-gray-300 px-2 py-1">%</td>
                  <td className="border border-gray-300 px-2 py-1">%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">38</td>
                  <td className="border border-gray-300 px-2 py-1">&amp;</td>
                  <td className="border border-gray-300 px-2 py-1">&amp;</td>
                  <td className="border border-gray-300 px-2 py-1">&amp;</td>
                  <td className="border border-gray-300 px-2 py-1">&amp;</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">39</td>
                  <td className="border border-gray-300 px-2 py-1">'</td>
                  <td className="border border-gray-300 px-2 py-1">'</td>
                  <td className="border border-gray-300 px-2 py-1">'</td>
                  <td className="border border-gray-300 px-2 py-1">'</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">40</td>
                  <td className="border border-gray-300 px-2 py-1">(</td>
                  <td className="border border-gray-300 px-2 py-1">(</td>
                  <td className="border border-gray-300 px-2 py-1">(</td>
                  <td className="border border-gray-300 px-2 py-1">(</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">41</td>
                  <td className="border border-gray-300 px-2 py-1">)</td>
                  <td className="border border-gray-300 px-2 py-1">)</td>
                  <td className="border border-gray-300 px-2 py-1">)</td>
                  <td className="border border-gray-300 px-2 py-1">)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">42</td>
                  <td className="border border-gray-300 px-2 py-1">*</td>
                  <td className="border border-gray-300 px-2 py-1">*</td>
                  <td className="border border-gray-300 px-2 py-1">*</td>
                  <td className="border border-gray-300 px-2 py-1">*</td>
                </tr>
              </tbody>
            </table>
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

export default Html_Character;
