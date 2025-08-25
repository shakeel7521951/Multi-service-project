import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Null_Functions = () => {
  const [copied, setCopied] = useState("");

  const examples = {
    mysqlIfNull: `SELECT ProductName, UnitPrice * (UnitsInStock + IFNULL(UnitsOnOrder, 0))\nFROM Products;`,
    mysqlCoalesce: `SELECT ProductName, UnitPrice * (UnitsInStock + COALESCE(UnitsOnOrder, 0))\nFROM Products;`,
    sqlServerIsNull: `SELECT ProductName, UnitPrice * (UnitsInStock + ISNULL(UnitsOnOrder, 0))\nFROM Products;`,
    sqlServerCoalesce: `SELECT ProductName, UnitPrice * (UnitsInStock + COALESCE(UnitsOnOrder, 0))\nFROM Products;`,
    msAccess: `SELECT ProductName, UnitPrice * (UnitsInStock + IIF(IsNull(UnitsOnOrder), 0, UnitsOnOrder))\nFROM Products;`,
    oracleNvl: `SELECT ProductName, UnitPrice * (UnitsInStock + NVL(UnitsOnOrder, 0))\nFROM Products;`,
    oracleCoalesce: `SELECT ProductName, UnitPrice * (UnitsInStock + COALESCE(UnitsOnOrder, 0))\nFROM Products;`,
  };

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold mb-2">SQL NULL Functions</h1>
          <p className="text-gray-600 text-lg">
            SQL provides several functions to handle <strong>NULL</strong> values:{" "}
            <code className="bg-gray-200 px-1 rounded">IFNULL()</code>,{" "}
            <code className="bg-gray-200 px-1 rounded">ISNULL()</code>,{" "}
            <code className="bg-gray-200 px-1 rounded">COALESCE()</code>, and{" "}
            <code className="bg-gray-200 px-1 rounded">NVL()</code>.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Demo Database */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Demo Database (Products)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">P_Id</th>
                  <th className="border px-3 py-2">ProductName</th>
                  <th className="border px-3 py-2">UnitPrice</th>
                  <th className="border px-3 py-2">UnitsInStock</th>
                  <th className="border px-3 py-2">UnitsOnOrder</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">Jarlsberg</td>
                  <td className="border px-3 py-2">10.45</td>
                  <td className="border px-3 py-2">16</td>
                  <td className="border px-3 py-2">15</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">Mascarpone</td>
                  <td className="border px-3 py-2">32.56</td>
                  <td className="border px-3 py-2">23</td>
                  <td className="border px-3 py-2"></td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">3</td>
                  <td className="border px-3 py-2">Gorgonzola</td>
                  <td className="border px-3 py-2">15.67</td>
                  <td className="border px-3 py-2">9</td>
                  <td className="border px-3 py-2">20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* General Problem Explanation */}
        <section>
          <h2 className="text-2xl font-bold mb-4">The Problem with NULL</h2>
          <p className="text-gray-700 mb-4">
            If a column contains <strong>NULL</strong> values, calculations that
            involve that column may also return <strong>NULL</strong>.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`SELECT ProductName, UnitPrice * (UnitsInStock + UnitsOnOrder)\nFROM Products;`}</code>
          </pre>
        </section>

        {/* Solutions */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Solutions</h2>

          {/* MySQL */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow mb-6">
            <h3 className="text-xl font-semibold mb-3">MySQL</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded mb-4">
              <code>{examples.mysqlIfNull}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.mysqlIfNull, "mysqlIfNull")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-4 py-2 rounded mb-4"
            >
              {copied === "mysqlIfNull" ? "Copied!" : "Copy SQL"}
            </button>

            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded mb-4">
              <code>{examples.mysqlCoalesce}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.mysqlCoalesce, "mysqlCoalesce")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-4 py-2 rounded"
            >
              {copied === "mysqlCoalesce" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* SQL Server */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow mb-6">
            <h3 className="text-xl font-semibold mb-3">SQL Server</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded mb-4">
              <code>{examples.sqlServerIsNull}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.sqlServerIsNull, "sqlServerIsNull")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-4 py-2 rounded mb-4"
            >
              {copied === "sqlServerIsNull" ? "Copied!" : "Copy SQL"}
            </button>

            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded mb-4">
              <code>{examples.sqlServerCoalesce}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.sqlServerCoalesce, "sqlServerCoalesce")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-4 py-2 rounded"
            >
              {copied === "sqlServerCoalesce" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* MS Access */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow mb-6">
            <h3 className="text-xl font-semibold mb-3">MS Access</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded mb-4">
              <code>{examples.msAccess}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.msAccess, "msAccess")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-4 py-2 rounded"
            >
              {copied === "msAccess" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* Oracle */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Oracle</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded mb-4">
              <code>{examples.oracleNvl}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.oracleNvl, "oracleNvl")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-4 py-2 rounded mb-4"
            >
              {copied === "oracleNvl" ? "Copied!" : "Copy SQL"}
            </button>

            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded mb-4">
              <code>{examples.oracleCoalesce}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.oracleCoalesce, "oracleCoalesce")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-4 py-2 rounded"
            >
              {copied === "oracleCoalesce" ? "Copied!" : "Copy SQL"}
            </button>
          </div>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Which SQL function in Oracle is used to replace NULL values with a specified value?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>ISNULL()</li>
            <li>IFNULL()</li>
            <li className="font-bold">NVL() ✅</li>
            <li>NULLIF()</li>
          </ul>
        </section>

        {/* Navigation Bottom */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft /> Back
          </button>
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sql_Null_Functions;
