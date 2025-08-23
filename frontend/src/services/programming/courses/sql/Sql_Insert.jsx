import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Insert = () => {
  const [copied, setCopied] = useState("");

  const sqlEx1 = `INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)\nVALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');`;

  const sqlEx2 = `INSERT INTO Customers (CustomerName, City, Country)\nVALUES ('Cardinal', 'Stavanger', 'Norway');`;

  const sqlEx3 = `INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)\nVALUES\n('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway'),\n('Greasy Burger', 'Per Olsen', 'Gateveien 15', 'Sandnes', '4306', 'Norway'),\n('Tasty Tee', 'Finn Egan', 'Streetroad 19B', 'Liverpool', 'L1 0AA', 'UK');`;

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-extrabold mb-2">SQL INSERT INTO Statement</h1>
          <p className="text-gray-600 text-lg">
            The <strong>INSERT INTO</strong> statement is used to insert new records in a table.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Syntax */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`INSERT INTO table_name (column1, column2, column3, ...)\nVALUES (value1, value2, value3, ...);\n\nINSERT INTO table_name\nVALUES (value1, value2, value3, ...);`}</code>
          </pre>
        </section>

        {/* Demo Database */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Demo Database (Customers)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">CustomerID</th>
                  <th className="border px-3 py-2">CustomerName</th>
                  <th className="border px-3 py-2">ContactName</th>
                  <th className="border px-3 py-2">Address</th>
                  <th className="border px-3 py-2">City</th>
                  <th className="border px-3 py-2">PostalCode</th>
                  <th className="border px-3 py-2">Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">89</td>
                  <td className="border px-3 py-2">White Clover Markets</td>
                  <td className="border px-3 py-2">Karl Jablonski</td>
                  <td className="border px-3 py-2">305 - 14th Ave. S. Suite 3B</td>
                  <td className="border px-3 py-2">Seattle</td>
                  <td className="border px-3 py-2">98128</td>
                  <td className="border px-3 py-2">USA</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">90</td>
                  <td className="border px-3 py-2">Wilman Kala</td>
                  <td className="border px-3 py-2">Matti Karttunen</td>
                  <td className="border px-3 py-2">Keskuskatu 45</td>
                  <td className="border px-3 py-2">Helsinki</td>
                  <td className="border px-3 py-2">21240</td>
                  <td className="border px-3 py-2">Finland</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">91</td>
                  <td className="border px-3 py-2">Wolski</td>
                  <td className="border px-3 py-2">Zbyszek</td>
                  <td className="border px-3 py-2">ul. Filtrowa 68</td>
                  <td className="border px-3 py-2">Walla</td>
                  <td className="border px-3 py-2">01-012</td>
                  <td className="border px-3 py-2">Poland</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Example 1: Full Insert */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Insert Full Row</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx1}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx1, "ex1")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "ex1" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example 2: Partial Insert */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Insert Into Selected Columns</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx2}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx2, "ex2")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "ex2" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example 3: Insert Multiple Rows */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Insert Multiple Rows</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx3}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx3, "ex3")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "ex3" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            What is the purpose of the SQL INSERT INTO statement?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>To update records in a table</li>
            <li>To delete records from a table</li>
            <li className="font-bold">To add new records to a table ✅</li>
            <li>To retrieve records from a table</li>
          </ul>
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

export default Sql_Insert;
