import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_DropDatabase = () => {
  const [copied, setCopied] = useState("");

  const sqlEx1 = `DROP DATABASE testDB;`;
  const sqlEx2 = `SHOW DATABASES;`;

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
          <h1 className="text-3xl font-bold mb-2">SQL DROP DATABASE Statement</h1>
          <p className="text-gray-600 text-lg">
            The <strong>DROP DATABASE</strong> statement is used to delete an existing SQL database.
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
          <h2 className="text-2xl font-bold mb-4">Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`DROP DATABASE databasename;`}</code>
          </pre>
          <p className="text-red-600 mt-2 font-semibold">
            ⚠️ Warning: Dropping a database will permanently delete all information stored in it.
          </p>
        </section>

        {/* Example 1: Drop Database */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Drop Database</h2>
          <p className="mb-4 text-gray-700">
            The following SQL statement drops the existing database <code>testDB</code>:
          </p>
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

        {/* Tip Section */}
        <section className="bg-yellow-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Tip</h2>
          <p className="text-gray-700">
            Ensure you have <strong>admin privileges</strong> before dropping a database. 
            After deletion, you can check the available databases with:
          </p>
          <pre className="bg-white border-l-4 border-yellow-500 p-4 font-mono text-sm rounded overflow-x-auto mt-3">
            <code>{sqlEx2}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx2, "ex2")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition mt-3"
          >
            {copied === "ex2" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Which SQL statement correctly deletes a database named <code>SchoolDB</code>?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li className="font-bold">DROP DATABASE SchoolDB; ✅</li>
            <li>DELETE DATABASE SchoolDB;</li>
            <li>REMOVE DATABASE SchoolDB;</li>
            <li>TRUNCATE DATABASE SchoolDB;</li>
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

export default Sql_DropDatabase;
