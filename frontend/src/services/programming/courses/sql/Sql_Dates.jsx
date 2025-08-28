import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Dates = () => {
  const [copied, setCopied] = useState("");

  const selectDate = `SELECT * FROM Orders WHERE OrderDate='2008-11-11';`;

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
          <h1 className="text-3xl font-bold mb-2">SQL Working With Dates</h1>
          <p className="text-gray-600 text-lg">
            Handling dates in SQL can be tricky. The format of the date you insert
            must match the format of the date column in your database.
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
          <h2 className="text-2xl font-bold mb-4">SQL Dates</h2>
          <p className="text-gray-700 mb-2">
            If your data contains only the <strong>date portion</strong>, queries
            will work as expected. If a <strong>time portion</strong> is involved,
            it becomes more complicated.
          </p>
        </section>

        {/* SQL Date Data Types */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">SQL Date Data Types</h2>

          <h3 className="text-xl font-semibold mb-2">MySQL</h3>
          <ul className="list-disc ml-6 text-gray-700 mb-6">
            <li>DATE - format: YYYY-MM-DD</li>
            <li>DATETIME - format: YYYY-MM-DD HH:MI:SS</li>
            <li>TIMESTAMP - format: YYYY-MM-DD HH:MI:SS</li>
            <li>YEAR - format: YYYY or YY</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">SQL Server</h3>
          <ul className="list-disc ml-6 text-gray-700">
            <li>DATE - format: YYYY-MM-DD</li>
            <li>DATETIME - format: YYYY-MM-DD HH:MI:SS</li>
            <li>SMALLDATETIME - format: YYYY-MM-DD HH:MI:SS</li>
            <li>TIMESTAMP - a unique number</li>
          </ul>

          <p className="text-gray-600 mt-4">
            <strong>Note:</strong> Date types are chosen for a column when you
            create a new table in your database!
          </p>
        </section>

        {/* Orders Table Example */}
        <section>
          <h2 className="text-2xl font-bold mb-4">SQL Working With Dates</h2>
          <p className="mb-4 text-gray-700">Example Orders table:</p>

          <table className="w-full border border-gray-300 text-left mb-6">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">OrderId</th>
                <th className="border px-4 py-2">ProductName</th>
                <th className="border px-4 py-2">OrderDate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">Geitost</td>
                <td className="border px-4 py-2">2008-11-11</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">Camembert Pierrot</td>
                <td className="border px-4 py-2">2008-11-09</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">3</td>
                <td className="border px-4 py-2">Mozzarella di Giovanni</td>
                <td className="border px-4 py-2">2008-11-11</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">4</td>
                <td className="border px-4 py-2">Mascarpone Fabioli</td>
                <td className="border px-4 py-2">2008-10-29</td>
              </tr>
            </tbody>
          </table>

          <p className="text-gray-700 mb-2">
            Select all records with <code>OrderDate = '2008-11-11'</code>:
          </p>

          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{selectDate}</code>
          </pre>
          <button
            onClick={() => handleCopy(selectDate, "select")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "select" ? "Copied!" : "Copy SQL"}
          </button>

          <h3 className="text-xl font-semibold mt-6 mb-2">Result-set:</h3>
          <table className="w-full border border-gray-300 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">OrderId</th>
                <th className="border px-4 py-2">ProductName</th>
                <th className="border px-4 py-2">OrderDate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">Geitost</td>
                <td className="border px-4 py-2">2008-11-11</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">3</td>
                <td className="border px-4 py-2">Mozzarella di Giovanni</td>
                <td className="border px-4 py-2">2008-11-11</td>
              </tr>
            </tbody>
          </table>

          <p className="text-gray-600 mt-4">
            <strong>Note:</strong> Two dates can easily be compared if there is no
            time component involved.
          </p>
        </section>

        {/* Orders with Time Example */}
        <section>
          <p className="text-gray-700 mb-4">
            If the table includes a <strong>time component</strong>:
          </p>

          <table className="w-full border border-gray-300 text-left mb-6">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">OrderId</th>
                <th className="border px-4 py-2">ProductName</th>
                <th className="border px-4 py-2">OrderDate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">Geitost</td>
                <td className="border px-4 py-2">2008-11-11 13:23:44</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">Camembert Pierrot</td>
                <td className="border px-4 py-2">2008-11-09 15:45:21</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">3</td>
                <td className="border px-4 py-2">Mozzarella di Giovanni</td>
                <td className="border px-4 py-2">2008-11-11 11:12:01</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">4</td>
                <td className="border px-4 py-2">Mascarpone Fabioli</td>
                <td className="border px-4 py-2">2008-10-29 14:56:59</td>
              </tr>
            </tbody>
          </table>

          <p className="text-gray-700">
            Using the same query will return <strong>no result</strong>, because it
            only matches pure dates, not dates with a time portion.
          </p>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Which SQL data type stores both <strong>date and time</strong> values in
            MySQL?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>DATE</li>
            <li className="font-bold">DATETIME ✅</li>
            <li>YEAR</li>
            <li>TIMESTAMP</li>
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

export default Sql_Dates;
