import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Entities = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const paragraphExample = `<p>This is a paragraph.</p>\n<p>This is another paragraph.</p>`;

  const paragraphDisplayExample = `<p>
This paragraph
contains a lot of lines
in the source code,
but the browser
ignores it.
</p>

<p>
This paragraph
contains         a lot of spaces
in the source         code,
but the        browser
ignores it.
</p>`;

  const hrExample = `<h1>This is heading 1</h1>\n<p>This is some text.</p>\n<hr>\n<h2>This is heading 2</h2>\n<p>This is some other text.</p>\n<hr>`;

  const preExample = `<pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</pre>`;

  const brExample = `<p>This is<br>a paragraph<br>with line breaks.</p>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold mb-4">HTML Entities</h2>

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


          {/* Additional Sections like Entities, etc. */}
  
<p className="mb-4">
            Reserved characters in HTML must be replaced with entities:
          </p>

          <ul className="mb-6 list-disc pl-6 text-gray-800">
            <li>&lt; (less than) = <code>&amp;lt;</code></li>
            <li>&gt; (greater than) = <code>&amp;gt;</code></li>
          </ul>

          <h3 className="text-2xl font-semibold mb-2">HTML Character Entities</h3>
          <p className="mb-4">
            Some characters are reserved in HTML. If you use the less than (<code>&lt;</code>) or greater than (<code>&gt;</code>) signs in your HTML text, the browser might mix them with tags.
          </p>
          <p className="mb-4">
            Entity names or entity numbers can be used to display reserved HTML characters.
          </p>
          <p className="mb-4">
            Entity format: <code>&amp;entity_name;</code> or <code>&amp;#entity_number;</code>
          </p>
          <p className="mb-6">
            To display a less than sign (&lt;) we must write: <code>&amp;lt;</code> or <code>&amp;#60;</code>
          </p>

          <h3 className="text-2xl font-semibold mb-2">Non-breaking Space</h3>
          <p className="mb-4">
            A commonly used HTML entity is the non-breaking space: <code>&amp;nbsp;</code>
          </p>
          <p className="mb-4">
            A non-breaking space is a space that will not break into a new line.
          </p>
          <p className="mb-6">
            Examples:
          </p>

          <ul className="mb-6 list-disc pl-6 text-gray-800">
            <li>§ 10</li>
            <li>10 km/h</li>
            <li>10 PM</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-2">Some Useful HTML Character Entities</h3>
          <div className="overflow-auto">
            <table className="min-w-full border border-gray-300 text-sm mb-10">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-left">Result</th>
                  <th className="border px-4 py-2 text-left">Description</th>
                  <th className="border px-4 py-2 text-left">Name</th>
                  <th className="border px-4 py-2 text-left">Number</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['\u00A0', 'non-breaking space', '&nbsp;', '&#160;'],
                  ['<', 'less than', '&lt;', '&#60;'],
                  ['>', 'greater than', '&gt;', '&#62;'],
                  ['&', 'ampersand', '&amp;', '&#38;'],
                  ['"', 'double quotation mark', '&quot;', '&#34;'],
                  ["'", 'single quotation mark', '&apos;', '&#39;'],
                  ['¢', 'cent', '&cent;', '&#162;'],
                  ['£', 'pound', '&pound;', '&#163;'],
                  ['¥', 'yen', '&yen;', '&#165;'],
                  ['€', 'euro', '&euro;', '&#8364;'],
                  ['©', 'copyright', '&copy;', '&#169;'],
                  ['®', 'registered trademark', '&reg;', '&#174;'],
                  ['™', 'trademark', '&trade;', '&#8482;']
                ].map(([result, desc, name, number], index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{result}</td>
                    <td className="border px-4 py-2">{desc}</td>
                    <td className="border px-4 py-2"><code>{name}</code></td>
                    <td className="border px-4 py-2"><code>{number}</code></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold mb-2">Combining Diacritical Marks</h3>
          <p className="mb-4">
            A diacritical mark is a "glyph" added to a letter. Some, like grave (<code>&#768;</code>) and acute (<code>&#769;</code>), are called accents.
          </p>
          <p className="mb-6">
            These can be combined with characters to form extended symbols.
          </p>

          <div className="overflow-auto">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-left">Mark</th>
                  <th className="border px-4 py-2 text-left">Character</th>
                  <th className="border px-4 py-2 text-left">Construct</th>
                  <th className="border px-4 py-2 text-left">Result</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['̀', 'a', 'a&#768;', 'à'],
                  ['́', 'a', 'a&#769;', 'á'],
                  ['̂', 'a', 'a&#770;', 'â'],
                  ['̃', 'a', 'a&#771;', 'ã'],
                  ['̀', 'O', 'O&#768;', 'Ò'],
                  ['́', 'O', 'O&#769;', 'Ó'],
                  ['̂', 'O', 'O&#770;', 'Ô'],
                  ['̃', 'O', 'O&#771;', 'Õ']
                ].map(([mark, char, construct, result], index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{mark}</td>
                    <td className="border px-4 py-2">{char}</td>
                    <td className="border px-4 py-2"><code>{construct}</code></td>
                    <td className="border px-4 py-2">{result}</td>
                  </tr>
                ))}
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

export default Html_Entities;
