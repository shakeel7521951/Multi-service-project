import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Delete = () => {
  const [copied, setCopied] = useState("");

  const sqlSyntax = `DELETE FROM table_name WHERE condition;`;

  const sqlEx1 = `DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';`;

  const sqlEx2 = `DELETE FROM Customers;`;

  const sqlEx3 = `DROP TABLE Customers;`;

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
          <h1 className="text-3xl font-extrabold mb-2">SQL DELETE Statement</h1>
          <p className="text-gray-600 text-lg">
            The <strong>DELETE</strong> statement is used to delete existing records in a table.
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
          <h2 className="text-2xl font-bold mb-4">DELETE Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{sqlSyntax}</code>
          </pre>
          <p className="text-gray-700 mt-3">
            <strong>Note:</strong> Be careful when deleting records in a table! If you omit the <strong>WHERE</strong> clause, all records in the table will be deleted!
          </p>
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

        {/* Example 1 */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Delete a Single Record</h2>
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

        {/* Example 2 */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Delete All Records</h2>
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

        {/* Example 3 - Drop Table */}
        <section className="bg-[#FFF3CD] p-8 rounded-lg shadow border border-yellow-300">
          <h2 className="text-2xl font-bold mb-4 text-red-700">⚠️ Delete a Table</h2>
          <p className="mb-4 text-gray-700">
            To completely remove a table (including structure), use the <strong>DROP TABLE</strong> statement.
          </p>
          <pre className="bg-white border-l-4 border-red-500 p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx3}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx3, "ex3")}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "ex3" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">What is the purpose of the SQL DELETE statement?</p>
          <ul className="space-y-2 text-gray-800">
            <li>To add new records to a table</li>
            <li>To modify existing records in a table</li>
            <li className="font-bold">To delete existing records from a table ✅</li>
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

export default Sql_Delete;
