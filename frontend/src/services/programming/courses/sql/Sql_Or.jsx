import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Or = () => {
  // SQL examples
  const sqlEx1 = `SELECT * FROM Customers\nWHERE Country = 'Germany' OR Country = 'Spain';`;
  const sqlEx2 = `SELECT * FROM Customers\nWHERE City = 'Berlin' OR CustomerName LIKE 'G%' OR Country = 'Norway';`;
  const sqlEx3 = `SELECT * FROM Customers\nWHERE Country = 'Spain' AND (CustomerName LIKE 'G%' OR CustomerName LIKE 'R%');`;
  const sqlEx4 = `SELECT * FROM Customers\nWHERE Country = 'Spain' AND CustomerName LIKE 'G%' OR CustomerName LIKE 'R%';`;

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
          <h1 className="text-3xl font-extrabold mb-2">SQL OR Operator</h1>
          <p className="text-gray-600 text-lg">
            The <strong>OR</strong> operator is used in the <strong>WHERE</strong> clause to filter records based on more than one condition.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Example 1: Basic OR */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Customers from Germany or Spain</h2>
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
            <code>{`SELECT column1, column2, ...\nFROM table_name\nWHERE condition1 OR condition2 OR condition3 ...;`}</code>
          </pre>
          <p className="text-gray-700 mt-3">
            The <strong>OR</strong> operator returns a record if <strong>any condition</strong> is TRUE.
          </p>
        </section>

        {/* OR vs AND */}
        <section className="bg-[#FFF4CC] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">OR vs AND</h2>
          <p className="text-gray-700 mb-4">
            - <strong>OR</strong>: at least one condition must be TRUE.<br />
            - <strong>AND</strong>: all conditions must be TRUE.
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

        {/* Example: At least one condition must be true */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">At Least One Condition Must Be True</h2>
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

        {/* Combining AND and OR */}
        <section className="bg-[#FFF4CC] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">Combining AND and OR</h2>
          <p className="text-gray-700 mb-4">
            Use parenthesis to control the logic order when combining <strong>AND</strong> and <strong>OR</strong>.
          </p>

          <h3 className="text-xl font-semibold mb-2">Correct (with parenthesis)</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx3}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx3, "ex3")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied === "ex3" ? "Copied!" : "Copy SQL"}
          </button>

          <h3 className="text-xl font-semibold mb-2 mt-6">Incorrect (without parenthesis)</h3>
          <pre className="bg-white border-l-4 border-red-500 p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx4}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx4, "ex4")}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied === "ex4" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            What is the primary purpose of the SQL OR operator?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li className="font-bold">To filter records based on multiple conditions where at least one condition is true ✅</li>
            <li>To filter records based on multiple conditions where all conditions must be true</li>
            <li>To sort records in descending order</li>
            <li>To count the number of rows in a table</li>
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

export default Sql_Or;
