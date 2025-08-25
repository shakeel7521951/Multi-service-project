import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_SelectInto = () => {
  const [copied, setCopied] = useState("");

  const examples = {
    ex1: `SELECT * INTO CustomersBackup2017\nFROM Customers;`,
    ex2: `SELECT * INTO CustomersBackup2017 IN 'Backup.mdb'\nFROM Customers;`,
    ex3: `SELECT CustomerName, ContactName INTO CustomersBackup2017\nFROM Customers;`,
    ex4: `SELECT * INTO CustomersGermany\nFROM Customers\nWHERE Country = 'Germany';`,
    ex5: `SELECT Customers.CustomerName, Orders.OrderID\nINTO CustomersOrderBackup2017\nFROM Customers\nLEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;`,
    ex6: `SELECT * INTO newtable\nFROM oldtable\nWHERE 1 = 0;`,
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
          <h1 className="text-3xl font-bold mb-2">SQL SELECT INTO Statement</h1>
          <p className="text-gray-600 text-lg">
            The <strong>SELECT INTO</strong> statement copies data from one table into a new table.
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
          <h2 className="text-2xl font-bold mb-4">SELECT INTO Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`-- Copy all columns into a new table\nSELECT *\nINTO newtable [IN externaldb]\nFROM oldtable\nWHERE condition;`}</code>
          </pre>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`-- Copy only some columns into a new table\nSELECT column1, column2, column3, ...\nINTO newtable [IN externaldb]\nFROM oldtable\nWHERE condition;`}</code>
          </pre>
          <p className="text-gray-700 mt-3">
            The new table will be created with the column names and types as defined in the old table. You can also create new column names using the <code>AS</code> clause.
          </p>
        </section>

        {/* Examples */}
        {Object.entries(examples).map(([key, sql], idx) => (
          <section key={key} className="bg-[#D9EEE1] p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Example {idx + 1}</h2>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
              <code>{sql}</code>
            </pre>
            <button
              onClick={() => handleCopy(sql, key)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
            >
              {copied === key ? "Copied!" : "Copy SQL"}
            </button>
          </section>
        ))}

        {/* Tip */}
        <section className="bg-yellow-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Tip</h2>
          <p className="text-gray-700">
            <code>SELECT INTO</code> can also be used to create a new, empty table using the schema of another. Just add a <code>WHERE</code> clause that causes the query to return no data.
          </p>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">Which SQL statement would create a backup copy of the <code>Orders</code> table?</p>
          <ul className="space-y-2 text-gray-800">
            <li className="font-bold">SELECT * INTO OrdersBackup FROM Orders; ✅</li>
            <li>INSERT INTO OrdersBackup SELECT * FROM Orders;</li>
            <li>BACKUP Orders INTO OrdersBackup;</li>
            <li>SAVE Orders AS OrdersBackup;</li>
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

export default Sql_SelectInto;