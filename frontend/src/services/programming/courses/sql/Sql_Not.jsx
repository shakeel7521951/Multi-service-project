import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Not = () => {
  // SQL examples
  const sqlEx1 = `SELECT * FROM Customers\nWHERE NOT Country = 'Spain';`;
  const sqlEx2 = `SELECT * FROM Customers\nWHERE CustomerName NOT LIKE 'A%';`;
  const sqlEx3 = `SELECT * FROM Customers\nWHERE CustomerID NOT BETWEEN 10 AND 60;`;
  const sqlEx4 = `SELECT * FROM Customers\nWHERE City NOT IN ('Paris', 'London');`;
  const sqlEx5 = `SELECT * FROM Customers\nWHERE NOT CustomerID > 50;`;
  const sqlEx6 = `SELECT * FROM Customers\nWHERE NOT CustomerID < 50;`;

  const [copied, setCopied] = useState("");

  const handleCopy = (text, key) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(key);
        setTimeout(() => setCopied(""), 1500);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">SQL NOT Operator</h1>
          <p className="text-gray-600 text-lg">
            The <strong>NOT</strong> operator is used to give the opposite (negative) result in a condition.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Example 1 */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Customers NOT from Spain</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx1}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx1, "ex1")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied === "ex1" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Syntax */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`SELECT column1, column2, ...\nFROM table_name\nWHERE NOT condition;`}</code>
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
                  <td className="border px-3 py-2">Obere Str. 57</td>
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
                  <td className="border px-3 py-2">3</td>
                  <td className="border px-3 py-2">Antonio Moreno Taquería</td>
                  <td className="border px-3 py-2">Antonio Moreno</td>
                  <td className="border px-3 py-2">Mataderos 2312</td>
                  <td className="border px-3 py-2">México D.F.</td>
                  <td className="border px-3 py-2">05023</td>
                  <td className="border px-3 py-2">Mexico</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Example 2: NOT LIKE */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: NOT LIKE</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx2}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx2, "ex2")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied === "ex2" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example 3: NOT BETWEEN */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: NOT BETWEEN</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx3}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx3, "ex3")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied === "ex3" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example 4: NOT IN */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: NOT IN</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx4}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx4, "ex4")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied === "ex4" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example 5: NOT Greater Than */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: NOT Greater Than</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx5}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx5, "ex5")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied === "ex5" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example 6: NOT Less Than */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: NOT Less Than</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx6}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx6, "ex6")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied === "ex6" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            What does the SQL NOT operator do?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li className="font-bold">It negates a condition and returns the opposite result ✅</li>
            <li>It checks if at least one condition is true</li>
            <li>It sorts records in ascending order</li>
            <li>It limits the number of rows returned</li>
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

export default Sql_Not;
