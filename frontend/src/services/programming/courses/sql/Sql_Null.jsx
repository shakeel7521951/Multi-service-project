import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Null = () => {
  const [copied, setCopied] = useState("");

  const sqlEx1 = `SELECT CustomerName, ContactName, Address\nFROM Customers\nWHERE Address IS NULL;`;

  const sqlEx2 = `SELECT CustomerName, ContactName, Address\nFROM Customers\nWHERE Address IS NOT NULL;`;

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
          <h1 className="text-3xl font-extrabold mb-2">SQL NULL Values</h1>
          <p className="text-gray-600 text-lg">
            A field with a <strong>NULL</strong> value is a field with no value.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Explanation */}
        <section>
          <h2 className="text-2xl font-bold mb-4">What is a NULL Value?</h2>
          <p className="text-gray-700 mb-2">
            If a field in a table is optional, it is possible to insert or update a record without adding a value to this field. Then, the field will be saved with a <strong>NULL</strong> value.
          </p>
          <p className="text-gray-700">
            <strong>Note:</strong> A NULL value is different from a zero value or a field that contains spaces. A field with a NULL value is one that has been left blank during record creation!
          </p>
        </section>

        {/* Syntax */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`-- IS NULL Syntax\nSELECT column_names\nFROM table_name\nWHERE column_name IS NULL;\n\n-- IS NOT NULL Syntax\nSELECT column_names\nFROM table_name\nWHERE column_name IS NOT NULL;`}</code>
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
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">Alfreds Futterkiste</td>
                  <td className="border px-3 py-2">Maria Anders</td>
                  <td className="border px-3 py-2"></td>
                  <td className="border px-3 py-2">Berlin</td>
                  <td className="border px-3 py-2">12209</td>
                  <td className="border px-3 py-2">Germany</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">Ana Trujillo Emparedados y helados</td>
                  <td className="border px-3 py-2">Ana Trujillo</td>
                  <td className="border px-3 py-2">Avda. de la Constitución 2222</td>
                  <td className="border px-3 py-2">México D.F.</td>
                  <td className="border px-3 py-2">05021</td>
                  <td className="border px-3 py-2">Mexico</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">4</td>
                  <td className="border px-3 py-2">Around the Horn</td>
                  <td className="border px-3 py-2">Thomas Hardy</td>
                  <td className="border px-3 py-2"></td>
                  <td className="border px-3 py-2">London</td>
                  <td className="border px-3 py-2">WA1 1DP</td>
                  <td className="border px-3 py-2">UK</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Example 1: IS NULL */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: IS NULL</h2>
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

        {/* Example 2: IS NOT NULL */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: IS NOT NULL</h2>
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

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">What is a NULL value in SQL?</p>
          <ul className="space-y-2 text-gray-800">
            <li className="font-bold">A field with no value ✅</li>
            <li>A field with a zero value</li>
            <li>A field containing spaces</li>
            <li>A field that has been deleted</li>
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

export default Sql_Null;
