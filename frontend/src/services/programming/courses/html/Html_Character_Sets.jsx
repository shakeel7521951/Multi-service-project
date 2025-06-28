import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Character_Sets = () => {
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

  const characterSetNote = `The default character set in HTML5 is UTF-8.`;

  const characterSetTable = [
    {
      number: "32",
      ascii: "",
      ansi: "",
      iso: "",
      utf8: "",
      description: "space"
    },
    {
      number: "33",
      ascii: "!",
      ansi: "!",
      iso: "!",
      utf8: "!",
      description: "exclamation mark"
    },
    {
      number: "34",
      ascii: `"`,
      ansi: `"`,
      iso: `"`,
      utf8: `"`,
      description: "quotation mark"
    },
    {
      number: "35",
      ascii: "#",
      ansi: "#",
      iso: "#",
      utf8: "#",
      description: "number sign"
    },
    {
      number: "36",
      ascii: "$",
      ansi: "$",
      iso: "$",
      utf8: "$",
      description: "dollar sign"
    },
    {
      number: "37",
      ascii: "%",
      ansi: "%",
      iso: "%",
      utf8: "%",
      description: "percent sign"
    },
    {
      number: "38",
      ascii: "&",
      ansi: "&",
      iso: "&",
      utf8: "&",
      description: "ampersand"
    },
    {
      number: "39",
      ascii: "'",
      ansi: "'",
      iso: "'",
      utf8: "'",
      description: "apostrophe"
    },
    {
      number: "40",
      ascii: "(",
      ansi: "(",
      iso: "(",
      utf8: "(",
      description: "left parenthesis"
    },
    {
      number: "41",
      ascii: ")",
      ansi: ")",
      iso: ")",
      utf8: ")",
      description: "right parenthesis"
    },
    {
      number: "42",
      ascii: "*",
      ansi: "*",
      iso: "*",
      utf8: "*",
      description: "asterisk"
    },
    {
      number: "43",
      ascii: "+",
      ansi: "+",
      iso: "+",
      utf8: "+",
      description: "plus sign"
    },
    {
      number: "44",
      ascii: ",",
      ansi: ",",
      iso: ",",
      utf8: ",",
      description: "comma"
    },
    {
      number: "45",
      ascii: "-",
      ansi: "-",
      iso: "-",
      utf8: "-",
      description: "hyphen-minus"
    },
    {
      number: "46",
      ascii: ".",
      ansi: ".",
      iso: ".",
      utf8: ".",
      description: "full stop"
    },
    {
      number: "47",
      ascii: "/",
      ansi: "/",
      iso: "/",
      utf8: "/",
      description: "solidus"
    },
    {
      number: "48",
      ascii: "0",
      ansi: "0",
      iso: "0",
      utf8: "0",
      description: "digit zero"
    },
    {
      number: "49",
      ascii: "1",
      ansi: "1",
      iso: "1",
      utf8: "1",
      description: "digit one"
    },
    {
      number: "50",
      ascii: "2",
      ansi: "2",
      iso: "2",
      utf8: "2",
      description: "digit two"
    },
    {
      number: "51",
      ascii: "3",
      ansi: "3",
      iso: "3",
      utf8: "3",
      description: "digit three"
    },
    // Add more rows here as needed...
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Character Sets</h1>

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
          <h2 className="text-3xl font-bold mb-4">Common HTML Character Sets</h2>
          <p className="mb-6">{characterSetNote}</p>

          <div className="overflow-auto bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <table className="min-w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#04AA6D] text-white">
                  <th className="p-3 border border-white">Number</th>
                  <th className="p-3 border border-white">ASCII</th>
                  <th className="p-3 border border-white">ANSI</th>
                  <th className="p-3 border border-white">8859-1</th>
                  <th className="p-3 border border-white">UTF-8</th>
                  <th className="p-3 border border-white">Description</th>
                </tr>
              </thead>
              <tbody>
                {characterSetTable.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                  >
                    <td className="p-2 border border-gray-300">{row.number}</td>
                    <td className="p-2 border border-gray-300">{row.ascii}</td>
                    <td className="p-2 border border-gray-300">{row.ansi}</td>
                    <td className="p-2 border border-gray-300">{row.iso}</td>
                    <td className="p-2 border border-gray-300">{row.utf8}</td>
                    <td className="p-2 border border-gray-300">{row.description}</td>
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

export default Html_Character_Sets;
