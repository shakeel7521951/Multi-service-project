import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Aliases = () => {
  const [copied, setCopied] = useState("");

  const examples = {
    ex1: `SELECT CustomerID AS ID\nFROM Customers;`,
    ex2: `SELECT CustomerID ID\nFROM Customers;`,
    ex3: `SELECT CustomerID AS ID, CustomerName AS Customer\nFROM Customers;`,
    ex4: `SELECT ProductName AS [My Great Products]\nFROM Products;`,
    ex5: `SELECT ProductName AS \"My Great Products\"\nFROM Products;`,
    ex6: `SELECT CustomerName, Address + ', ' + PostalCode + ' ' + City + ', ' + Country AS Address\nFROM Customers;`,
    ex7: `SELECT CustomerName, CONCAT(Address,', ',PostalCode,', ',City,', ',Country) AS Address\nFROM Customers;`,
    ex8: `SELECT CustomerName, (Address || ', ' || PostalCode || ' ' || City || ', ' || Country) AS Address\nFROM Customers;`,
    ex9: `SELECT * FROM Customers AS Persons;`,
    ex10: `SELECT o.OrderID, o.OrderDate, c.CustomerName\nFROM Customers AS c, Orders AS o\nWHERE c.CustomerName='Around the Horn' AND c.CustomerID=o.CustomerID;`,
    ex11: `SELECT Orders.OrderID, Orders.OrderDate, Customers.CustomerName\nFROM Customers, Orders\nWHERE Customers.CustomerName='Around the Horn' AND Customers.CustomerID=Orders.CustomerID;`
  };

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-extrabold mb-2">SQL Aliases</h1>
          <p className="text-gray-600 text-lg">
            SQL aliases are used to give a table, or a column in a table, a temporary name. They often make column names more readable.
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
          <h2 className="text-2xl font-bold mb-4">About Aliases</h2>
          <p className="text-gray-700 mb-2">
            An alias only exists for the duration of a query and is created using the <strong>AS</strong> keyword.
          </p>
          <p className="text-gray-700">
            Actually, in most databases, you can skip the <strong>AS</strong> keyword and get the same result.
          </p>
        </section>

        {/* Example 1 */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Alias with AS</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded mb-4 overflow-x-auto">
            <code>{examples.ex1}</code>
          </pre>
          <button onClick={() => handleCopy(examples.ex1, "ex1")} className="bg-[#04AA6D] text-white px-6 py-2 rounded">
            {copied === "ex1" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Syntax */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`-- Column Alias\nSELECT column_name AS alias_name\nFROM table_name;\n\n-- Table Alias\nSELECT column_name(s)\nFROM table_name AS alias_name;`}</code>
          </pre>
        </section>

        {/* Demo Database */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Demo Database</h2>
          <div className="overflow-x-auto mb-6">
            <h3 className="font-semibold mb-2">Customers</h3>
            <table className="w-full border text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-2 py-1">CustomerID</th>
                  <th className="border px-2 py-1">CustomerName</th>
                  <th className="border px-2 py-1">ContactName</th>
                  <th className="border px-2 py-1">Address</th>
                  <th className="border px-2 py-1">City</th>
                  <th className="border px-2 py-1">PostalCode</th>
                  <th className="border px-2 py-1">Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1">1</td>
                  <td className="border px-2 py-1">Alfreds Futterkiste</td>
                  <td className="border px-2 py-1">Maria Anders</td>
                  <td className="border px-2 py-1">Obere Str. 57</td>
                  <td className="border px-2 py-1">Berlin</td>
                  <td className="border px-2 py-1">12209</td>
                  <td className="border px-2 py-1">Germany</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">2</td>
                  <td className="border px-2 py-1">Ana Trujillo Emparedados y helados</td>
                  <td className="border px-2 py-1">Ana Trujillo</td>
                  <td className="border px-2 py-1">Avda. de la Constitución 2222</td>
                  <td className="border px-2 py-1">México D.F.</td>
                  <td className="border px-2 py-1">05021</td>
                  <td className="border px-2 py-1">Mexico</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto">
            <h3 className="font-semibold mb-2">Orders</h3>
            <table className="w-full border text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-2 py-1">OrderID</th>
                  <th className="border px-2 py-1">CustomerID</th>
                  <th className="border px-2 py-1">EmployeeID</th>
                  <th className="border px-2 py-1">OrderDate</th>
                  <th className="border px-2 py-1">ShipperID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1">10248</td>
                  <td className="border px-2 py-1">90</td>
                  <td className="border px-2 py-1">5</td>
                  <td className="border px-2 py-1">7/4/1996</td>
                  <td className="border px-2 py-1">3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* More Examples */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow space-y-6">
          <h2 className="text-2xl font-bold">More Examples</h2>

          {Object.entries(examples).map(([key, code]) => (
            <div key={key}>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded mb-2 overflow-x-auto">
                <code>{code}</code>
              </pre>
              <button onClick={() => handleCopy(code, key)} className="bg-[#04AA6D] text-white px-6 py-2 rounded">
                {copied === key ? "Copied!" : "Copy SQL"}
              </button>
            </div>
          ))}
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">Which SQL statement creates an alias for the CustomerID column as 'ID'?</p>
          <ul className="space-y-2 text-gray-800">
            <li>SELECT CustomerID = 'ID' FROM Customers;</li>
            <li className="font-bold">SELECT CustomerID AS ID FROM Customers; ✅</li>
            <li>SELECT CustomerID TO ID FROM Customers;</li>
            <li>SELECT CustomerID 'ID' FROM Customers;</li>
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

export default Sql_Aliases;
