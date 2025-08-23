import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Top_Limit = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  // SQL examples
  const sqlServerEx = `SELECT TOP 3 * FROM Customers;`;
  const mysqlEx = `SELECT * FROM Customers LIMIT 3;`;
  const oracleEx = `SELECT * FROM Customers FETCH FIRST 3 ROWS ONLY;`;
  const oracleOldEx = `SELECT * FROM Customers WHERE ROWNUM <= 3;`;
  const topPercentEx = `SELECT TOP 50 PERCENT * FROM Customers;`;
  const oraclePercentEx = `SELECT * FROM Customers FETCH FIRST 50 PERCENT ROWS ONLY;`;
  const whereEx = `SELECT TOP 3 * FROM Customers WHERE Country='Germany';`;
  const mysqlWhereEx = `SELECT * FROM Customers WHERE Country='Germany' LIMIT 3;`;
  const oracleWhereEx = `SELECT * FROM Customers WHERE Country='Germany' FETCH FIRST 3 ROWS ONLY;`;
  const orderEx = `SELECT TOP 3 * FROM Customers ORDER BY CustomerName DESC;`;
  const mysqlOrderEx = `SELECT * FROM Customers ORDER BY CustomerName DESC LIMIT 3;`;
  const oracleOrderEx = `SELECT * FROM Customers ORDER BY CustomerName DESC FETCH FIRST 3 ROWS ONLY;`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-extrabold mb-2">
            SQL TOP, LIMIT, FETCH FIRST or ROWNUM Clause
          </h1>
          <p className="text-gray-600 text-lg">
            The <strong>SELECT TOP</strong> clause is used to specify the number of
            records to return. Useful for large tables to avoid performance
            issues.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Syntax Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Syntax</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">SQL Server / MS Access:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{`SELECT TOP number|percent column_name(s)\nFROM table_name\nWHERE condition;`}</code>
              </pre>
            </div>
            <div>
              <h3 className="font-semibold mb-2">MySQL:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{`SELECT column_name(s)\nFROM table_name\nWHERE condition\nLIMIT number;`}</code>
              </pre>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Oracle 12:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{`SELECT column_name(s)\nFROM table_name\nORDER BY column_name(s)\nFETCH FIRST number ROWS ONLY;`}</code>
              </pre>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Older Oracle:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{`SELECT column_name(s)\nFROM table_name\nWHERE ROWNUM <= number;`}</code>
              </pre>
            </div>
          </div>
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

        {/* Examples */}
        <section className="space-y-8">
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Example (SQL Server)</h2>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{sqlServerEx}</code>
            </pre>
            <button
              onClick={() => handleCopy(sqlServerEx, "ex1")}
              className="bg-[#04AA6D] text-white px-5 py-2 rounded"
            >
              {copied === "ex1" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Example (MySQL)</h2>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{mysqlEx}</code>
            </pre>
            <button
              onClick={() => handleCopy(mysqlEx, "ex2")}
              className="bg-[#04AA6D] text-white px-5 py-2 rounded"
            >
              {copied === "ex2" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Example (Oracle)</h2>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{oracleEx}</code>
            </pre>
            <button
              onClick={() => handleCopy(oracleEx, "ex3")}
              className="bg-[#04AA6D] text-white px-5 py-2 rounded"
            >
              {copied === "ex3" ? "Copied!" : "Copy SQL"}
            </button>
          </div>
        </section>

        {/* More Examples */}
        <section className="space-y-8">
          <div className="bg-[#FFF3CD] p-6 rounded-lg shadow border border-yellow-300">
            <h2 className="text-xl font-bold mb-4 text-yellow-800">Older Oracle Example</h2>
            <pre className="bg-white border-l-4 border-yellow-500 p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{oracleOldEx}</code>
            </pre>
          </div>

          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">TOP PERCENT Example</h2>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{topPercentEx}</code>
            </pre>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{oraclePercentEx}</code>
            </pre>
          </div>

          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">WHERE with TOP / LIMIT / FETCH</h2>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{whereEx}</code>
            </pre>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{mysqlWhereEx}</code>
            </pre>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{oracleWhereEx}</code>
            </pre>
          </div>

          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">ORDER BY with TOP / LIMIT / FETCH</h2>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{orderEx}</code>
            </pre>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{mysqlOrderEx}</code>
            </pre>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{oracleOrderEx}</code>
            </pre>
          </div>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Which SQL keyword is used in MySQL to limit the number of rows returned?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>TOP</li>
            <li className="font-bold">LIMIT ✅</li>
            <li>FETCH FIRST</li>
            <li>ROWNUM</li>
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

export default Sql_Top_Limit;
