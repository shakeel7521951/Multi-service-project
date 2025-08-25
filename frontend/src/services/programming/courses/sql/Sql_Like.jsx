import { useState } from "react";
import { FaChevronLeft, FaCopy, FaCheck } from "react-icons/fa";

const Sql_Like = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  // SQL Examples
  const examples = [
    {
      id: "ex1",
      title: "Starts With",
      desc: "Return all customers that start with the letter 'a':",
      sql: `SELECT * FROM Customers\nWHERE CustomerName LIKE 'a%';`,
    },
    {
      id: "ex2",
      title: "Ends With",
      desc: "Return all customers that end with 'es':",
      sql: `SELECT * FROM Customers\nWHERE CustomerName LIKE '%es';`,
    },
    {
      id: "ex3",
      title: "Contains",
      desc: "Return all customers that contain 'mer':",
      sql: `SELECT * FROM Customers\nWHERE CustomerName LIKE '%mer%';`,
    },
    {
      id: "ex4",
      title: "Underscore _",
      desc: "Return all customers from a city matching '_ondon':",
      sql: `SELECT * FROM Customers\nWHERE City LIKE '_ondon';`,
    },
    {
      id: "ex5",
      title: "Character Range",
      desc: "Return all customers starting with 'a' to 'f':",
      sql: `SELECT * FROM Customers\nWHERE CustomerName LIKE '[a-f]%';`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">
            SQL Wildcards & LIKE Operator
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Learn how to use <code className="bg-gray-200 px-1">LIKE</code> with wildcards to filter records in SQL.
          </p>
        </header>

        {/* Wildcard Characters */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Wildcard Characters</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm">
              <thead className="bg-green-100">
                <tr>
                  <th className="border px-3 py-2">Symbol</th>
                  <th className="border px-3 py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">%</td>
                  <td className="border px-3 py-2">Represents zero or more characters</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border px-3 py-2">_</td>
                  <td className="border px-3 py-2">Represents a single character</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">[ ]</td>
                  <td className="border px-3 py-2">Matches any single character inside the brackets</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border px-3 py-2">-</td>
                  <td className="border px-3 py-2">Specifies a range of characters inside [ ]</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">{`{ }`}</td>
                  <td className="border px-3 py-2">Represents escaped characters (Oracle only)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Examples Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold">Examples</h2>
          {examples.map((ex) => (
            <div key={ex.id} className="bg-green-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">{ex.title}</h3>
              <p className="mb-2 text-gray-700">{ex.desc}</p>
              <pre className="bg-white border-l-4 border-green-500 p-4 rounded mb-4 text-sm overflow-x-auto">
                <code>{ex.sql}</code>
              </pre>
              <button
                onClick={() => handleCopy(ex.sql, ex.id)}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                {copied === ex.id ? <FaCheck /> : <FaCopy />}
                {copied === ex.id ? "Copied!" : "Copy SQL"}
              </button>
            </div>
          ))}
        </section>

        {/* Exercise */}
        <section className="bg-gray-100 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4">What does the <code>%</code> wildcard represent in SQL?</p>
          <ul className="space-y-2">
            <li className="p-3 bg-white rounded hover:bg-green-50 cursor-pointer">Zero or more characters ✅</li>
            <li className="p-3 bg-white rounded hover:bg-green-50 cursor-pointer">A single character</li>
            <li className="p-3 bg-white rounded hover:bg-green-50 cursor-pointer">Any single character within a range</li>
            <li className="p-3 bg-white rounded hover:bg-green-50 cursor-pointer">Exact string match</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Sql_Like;
