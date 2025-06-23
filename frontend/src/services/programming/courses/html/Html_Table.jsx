import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Tables = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const examples = [
    {
      title: "Basic Table",
      desc: "A simple HTML table using <table>, <tr>, <th>, and <td>.",
      code: `<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
</table>`
    },
    {
      title: "Table Caption",
      desc: "Use <caption> to describe the table.",
      code: `<table>
  <caption>Monthly Savings</caption>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
</table>`
    },
    {
      title: "Colspan",
      desc: "The colspan attribute allows a cell to span multiple columns.",
      code: `<table>
  <tr>
    <th>Name</th>
    <th colspan="2">Phone</th>
  </tr>
  <tr>
    <td>John</td>
    <td>123-456</td>
    <td>789-012</td>
  </tr>
</table>`
    },
    {
      title: "Rowspan",
      desc: "The rowspan attribute allows a cell to span multiple rows.",
      code: `<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td rowspan="2">Alice</td>
    <td>24</td>
  </tr>
  <tr>
    <td>25</td>
  </tr>
</table>`
    },
    {
      title: "Table Spacing & Padding",
      desc: "Using style attributes to add spacing and padding.",
      code: `<table style="border-spacing: 10px; padding: 10px;" border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Tom</td>
    <td>32</td>
  </tr>
</table>`
    },
    {
      title: "Thead, Tbody, Tfoot",
      desc: "Structuring table with header, body, and footer.",
      code: `<table border="1">
  <thead>
    <tr>
      <th>Item</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Apple</td>
      <td>$1</td>
    </tr>
    <tr>
      <td>Banana</td>
      <td>$2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$3</td>
    </tr>
  </tfoot>
</table>`
    },
    {
      title: "Nested Table",
      desc: "Table inside another table.",
      code: `<table border="1">
  <tr>
    <td>
      <table border="1">
        <tr>
          <td>Nested 1</td>
          <td>Nested 2</td>
        </tr>
      </table>
    </td>
  </tr>
</table>`
    }
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Tables</h1>

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
          {examples.map(({ title, desc, code }, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="mb-4">{desc}</p>
              <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
                  <code>{code}</code>
                </pre>
                <button
                  onClick={() => handleCopy(code)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
                >
                  {copiedCode === code ? "Copied!" : "Copy Code"}
                </button>
              </div>
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

export default Html_Tables;
