import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Operators = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  // Example query
  const sqlEx1 = `SELECT * FROM Customers WHERE CustomerID = 5;`;

  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold mb-2">SQL Operators</h1>
          <p className="text-gray-600 text-lg">
            SQL operators are used to perform operations on data in SQL statements.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Arithmetic Operators */}
        <section>
          <h2 className="text-2xl font-bold mb-4">SQL Arithmetic Operators</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">Operator</th>
                  <th className="border px-3 py-2">Description</th>
                  <th className="border px-3 py-2">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border px-3 py-2">+</td><td className="border px-3 py-2">Add</td><td className="border px-3 py-2">a + b</td></tr>
                <tr><td className="border px-3 py-2">-</td><td className="border px-3 py-2">Subtract</td><td className="border px-3 py-2">a - b</td></tr>
                <tr><td className="border px-3 py-2">*</td><td className="border px-3 py-2">Multiply</td><td className="border px-3 py-2">a * b</td></tr>
                <tr><td className="border px-3 py-2">/</td><td className="border px-3 py-2">Divide</td><td className="border px-3 py-2">a / b</td></tr>
                <tr><td className="border px-3 py-2">%</td><td className="border px-3 py-2">Modulo</td><td className="border px-3 py-2">a % b</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Bitwise Operators */}
        <section>
          <h2 className="text-2xl font-bold mb-4">SQL Bitwise Operators</h2>
          <table className="w-full border border-gray-300 text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2">Operator</th>
                <th className="border px-3 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-3 py-2">&</td><td className="border px-3 py-2">Bitwise AND</td></tr>
              <tr><td className="border px-3 py-2">|</td><td className="border px-3 py-2">Bitwise OR</td></tr>
              <tr><td className="border px-3 py-2">^</td><td className="border px-3 py-2">Bitwise exclusive OR</td></tr>
            </tbody>
          </table>
        </section>

        {/* Comparison Operators */}
        <section>
          <h2 className="text-2xl font-bold mb-4">SQL Comparison Operators</h2>
          <table className="w-full border border-gray-300 text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2">Operator</th>
                <th className="border px-3 py-2">Description</th>
                <th className="border px-3 py-2">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-3 py-2">=</td><td className="border px-3 py-2">Equal to</td><td className="border px-3 py-2">a = b</td></tr>
              <tr><td className="border px-3 py-2">&gt;</td><td className="border px-3 py-2">Greater than</td><td className="border px-3 py-2">a &gt; b</td></tr>
              <tr><td className="border px-3 py-2">&lt;</td><td className="border px-3 py-2">Less than</td><td className="border px-3 py-2">a &lt; b</td></tr>
              <tr><td className="border px-3 py-2">&gt;=</td><td className="border px-3 py-2">Greater than or equal to</td><td className="border px-3 py-2">a &gt;= b</td></tr>
              <tr><td className="border px-3 py-2">&lt;=</td><td className="border px-3 py-2">Less than or equal to</td><td className="border px-3 py-2">a &lt;= b</td></tr>
              <tr><td className="border px-3 py-2">&lt;&gt;</td><td className="border px-3 py-2">Not equal to</td><td className="border px-3 py-2">a &lt;&gt; b</td></tr>
            </tbody>
          </table>
        </section>

        {/* Compound Operators */}
        <section>
          <h2 className="text-2xl font-bold mb-4">SQL Compound Operators</h2>
          <table className="w-full border border-gray-300 text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2">Operator</th>
                <th className="border px-3 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-3 py-2">+=</td><td className="border px-3 py-2">Add equals</td></tr>
              <tr><td className="border px-3 py-2">-=</td><td className="border px-3 py-2">Subtract equals</td></tr>
              <tr><td className="border px-3 py-2">*=</td><td className="border px-3 py-2">Multiply equals</td></tr>
              <tr><td className="border px-3 py-2">/=</td><td className="border px-3 py-2">Divide equals</td></tr>
              <tr><td className="border px-3 py-2">% =</td><td className="border px-3 py-2">Modulo equals</td></tr>
              <tr><td className="border px-3 py-2">&=</td><td className="border px-3 py-2">Bitwise AND equals</td></tr>
              <tr><td className="border px-3 py-2">^=</td><td className="border px-3 py-2">Bitwise exclusive equals</td></tr>
              <tr><td className="border px-3 py-2">|=</td><td className="border px-3 py-2">Bitwise OR equals</td></tr>
            </tbody>
          </table>
        </section>

        {/* Logical Operators */}
        <section>
          <h2 className="text-2xl font-bold mb-4">SQL Logical Operators</h2>
          <table className="w-full border border-gray-300 text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2">Operator</th>
                <th className="border px-3 py-2">Description</th>
                <th className="border px-3 py-2">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-3 py-2">ALL</td><td className="border px-3 py-2">TRUE if all subquery values meet condition</td><td className="border px-3 py-2">SELECT ALL ...</td></tr>
              <tr><td className="border px-3 py-2">AND</td><td className="border px-3 py-2">TRUE if all conditions are TRUE</td><td className="border px-3 py-2">a &gt; 1 AND b &lt; 10</td></tr>
              <tr><td className="border px-3 py-2">ANY</td><td className="border px-3 py-2">TRUE if any subquery value meets condition</td><td className="border px-3 py-2">SELECT ANY ...</td></tr>
              <tr><td className="border px-3 py-2">BETWEEN</td><td className="border px-3 py-2">TRUE if value is within range</td><td className="border px-3 py-2">a BETWEEN 10 AND 20</td></tr>
              <tr><td className="border px-3 py-2">EXISTS</td><td className="border px-3 py-2">TRUE if subquery returns records</td><td className="border px-3 py-2">EXISTS (SELECT ...)</td></tr>
              <tr><td className="border px-3 py-2">IN</td><td className="border px-3 py-2">TRUE if value is equal to any in list</td><td className="border px-3 py-2">a IN (1,2,3)</td></tr>
              <tr><td className="border px-3 py-2">LIKE</td><td className="border px-3 py-2">TRUE if matches a pattern</td><td className="border px-3 py-2">name LIKE 'A%'</td></tr>
              <tr><td className="border px-3 py-2">NOT</td><td className="border px-3 py-2">Displays record if condition is NOT TRUE</td><td className="border px-3 py-2">NOT a = 5</td></tr>
              <tr><td className="border px-3 py-2">OR</td><td className="border px-3 py-2">TRUE if any condition is TRUE</td><td className="border px-3 py-2">a=1 OR b=2</td></tr>
              <tr><td className="border px-3 py-2">SOME</td><td className="border px-3 py-2">TRUE if any subquery value meets condition</td><td className="border px-3 py-2">SELECT SOME ...</td></tr>
            </tbody>
          </table>
        </section>

        {/* Example */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Comparison Operator</h2>
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

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">Which operator is used to check if a value is within a range?</p>
          <ul className="space-y-2 text-gray-800">
            <li>A. =</li>
            <li>B. &lt;&gt;</li>
            <li className="font-bold">C. BETWEEN ✅</li>
            <li>D. EXISTS</li>
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

export default Sql_Operators;
