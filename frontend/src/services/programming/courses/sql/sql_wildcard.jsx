import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Wildcard = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  // SQL Example Queries
  const exStartsWith = `SELECT * FROM Customers\nWHERE CustomerName LIKE 'a%';`;
  const exEndsWith = `SELECT * FROM Customers\nWHERE CustomerName LIKE '%es';`;
  const exContains = `SELECT * FROM Customers\nWHERE CustomerName LIKE '%mer%';`;
  const exUnderscore = `SELECT * FROM Customers\nWHERE City LIKE '_ondon';`;
  const exLength = `SELECT * FROM Customers\nWHERE City LIKE 'L___on';`;
  const exCharSet = `SELECT * FROM Customers\nWHERE CustomerName LIKE '[bsp]%';`;
  const exRange = `SELECT * FROM Customers\nWHERE CustomerName LIKE '[a-f]%';`;
  const exCombine = `SELECT * FROM Customers\nWHERE CustomerName LIKE 'a__%';`;
  const exSecondChar = `SELECT * FROM Customers\nWHERE CustomerName LIKE '_r%';`;
  const exExact = `SELECT * FROM Customers\nWHERE Country LIKE 'Spain';`;

  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-extrabold mb-2">SQL Wildcards</h1>
          <p className="text-gray-600 text-lg">
            Wildcards are used with the <strong>LIKE</strong> operator to search for a specified pattern in a column.
          </p>
           <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition mt-4">
            <FaChevronLeft />
            Back
          </button>
        </header>

        {/* Syntax */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`SELECT column1, column2, ...\nFROM table_name\nWHERE columnN LIKE pattern;`}</code>
          </pre>
        </section>

        {/* Wildcards Table */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Wildcard Characters</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">Symbol</th>
                  <th className="border px-3 py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border px-3 py-2">%</td><td className="border px-3 py-2">Represents zero or more characters</td></tr>
                <tr><td className="border px-3 py-2">_</td><td className="border px-3 py-2">Represents a single character</td></tr>
                <tr><td className="border px-3 py-2">[]</td><td className="border px-3 py-2">Any single character within the brackets *</td></tr>
                <tr><td className="border px-3 py-2">^</td><td className="border px-3 py-2">Any character not in the brackets *</td></tr>
                <tr><td className="border px-3 py-2">-</td><td className="border px-3 py-2">Any single character within a specified range *</td></tr>
                <tr><td className="border px-3 py-2">{`{}`}</td><td className="border px-3 py-2">Any escaped character **</td></tr>
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-2">* Not supported in PostgreSQL and MySQL. <br /> ** Supported only in Oracle.</p>
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
                <tr><td className="border px-3 py-2">1</td><td className="border px-3 py-2">Alfreds Futterkiste</td><td className="border px-3 py-2">Maria Anders</td><td className="border px-3 py-2">Obere Str. 57</td><td className="border px-3 py-2">Berlin</td><td className="border px-3 py-2">12209</td><td className="border px-3 py-2">Germany</td></tr>
                <tr><td className="border px-3 py-2">2</td><td className="border px-3 py-2">Ana Trujillo Emparedados y helados</td><td className="border px-3 py-2">Ana Trujillo</td><td className="border px-3 py-2">Avda. de la Constitución 2222</td><td className="border px-3 py-2">México D.F.</td><td className="border px-3 py-2">05021</td><td className="border px-3 py-2">Mexico</td></tr>
                <tr><td className="border px-3 py-2">3</td><td className="border px-3 py-2">Antonio Moreno Taquería</td><td className="border px-3 py-2">Antonio Moreno</td><td className="border px-3 py-2">Mataderos 2312</td><td className="border px-3 py-2">México D.F.</td><td className="border px-3 py-2">05023</td><td className="border px-3 py-2">Mexico</td></tr>
                <tr><td className="border px-3 py-2">4</td><td className="border px-3 py-2">Around the Horn</td><td className="border px-3 py-2">Thomas Hardy</td><td className="border px-3 py-2">120 Hanover Sq.</td><td className="border px-3 py-2">London</td><td className="border px-3 py-2">WA1 1DP</td><td className="border px-3 py-2">UK</td></tr>
                <tr><td className="border px-3 py-2">5</td><td className="border px-3 py-2">Berglunds snabbköp</td><td className="border px-3 py-2">Christina Berglund</td><td className="border px-3 py-2">Berguvsvägen 8</td><td className="border px-3 py-2">Luleå</td><td className="border px-3 py-2">S-958 22</td><td className="border px-3 py-2">Sweden</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Examples */}
        <section className="space-y-8">
          {[
            { title: "Starts With", desc: "Return customers that start with 'a'", code: exStartsWith, key: "ex1" },
            { title: "Ends With", desc: "Return customers that end with 'es'", code: exEndsWith, key: "ex2" },
            { title: "Contains", desc: "Return customers containing 'mer'", code: exContains, key: "ex3" },
            { title: "The _ Wildcard", desc: "City that matches '_ondon'", code: exUnderscore, key: "ex4" },
            { title: "Fixed Length", desc: "City starting with 'L' + 3 chars + 'on'", code: exLength, key: "ex5" },
            { title: "Character Set []", desc: "Start with b, s, or p", code: exCharSet, key: "ex6" },
            { title: "Range [-]", desc: "Start with a-f", code: exRange, key: "ex7" },
            { title: "Combine", desc: "Start with 'a' and at least 3 characters", code: exCombine, key: "ex8" },
            { title: "Second Character", desc: "'r' in the second position", code: exSecondChar, key: "ex9" },
            { title: "Exact Match", desc: "Return all customers from Spain", code: exExact, key: "ex10" },
          ].map((ex) => (
            <div key={ex.key} className="bg-[#D9EEE1] p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">{ex.title}</h2>
              <p className="mb-2">{ex.desc}</p>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
                <code>{ex.code}</code>
              </pre>
              <button onClick={() => handleCopy(ex.code, ex.key)} className="bg-[#04AA6D] text-white px-5 py-2 rounded">
                {copied === ex.key ? "Copied!" : "Copy SQL"}
              </button>
            </div>
          ))}
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-2 text-gray-700">What does the % wildcard represent in SQL?</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Zero or more characters ✅</li>
            <li>A single character</li>
            <li>Any single character within a range</li>
            <li>An exact match</li>
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

export default Sql_Wildcard;