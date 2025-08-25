import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_ForeignKey = () => {
  const [copied, setCopied] = useState("");

  const createMySQL = `CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);`;

  const createSQLServer = `CREATE TABLE Orders (
    OrderID int NOT NULL PRIMARY KEY,
    OrderNumber int NOT NULL,
    PersonID int FOREIGN KEY REFERENCES Persons(PersonID)
);`;

  const createNamedFK = `CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    CONSTRAINT FK_PersonOrder FOREIGN KEY (PersonID)
    REFERENCES Persons(PersonID)
);`;

  const alterFK = `ALTER TABLE Orders
ADD FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);`;

  const alterNamedFK = `ALTER TABLE Orders
ADD CONSTRAINT FK_PersonOrder
FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);`;

  const dropMySQL = `ALTER TABLE Orders
DROP FOREIGN KEY FK_PersonOrder;`;

  const dropSQLServer = `ALTER TABLE Orders
DROP CONSTRAINT FK_PersonOrder;`;

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
          <h1 className="text-3xl font-bold mb-2">SQL FOREIGN KEY Constraint</h1>
          <p className="text-gray-600 text-lg">
            The <strong>FOREIGN KEY</strong> constraint is used to prevent actions that would destroy links between tables.
          </p>
          <p className="text-gray-600 text-lg">
            A FOREIGN KEY in one table points to a PRIMARY KEY in another table.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Demo Tables */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Example Tables</h2>
          <p className="text-gray-700 mb-4">
            Here, the <code>PersonID</code> column in <strong>Orders</strong> table is a FOREIGN KEY, 
            referencing <code>PersonID</code> in <strong>Persons</strong> table.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Persons Table</h3>
              <table className="w-full border text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-2 py-1">PersonID</th>
                    <th className="border px-2 py-1">LastName</th>
                    <th className="border px-2 py-1">FirstName</th>
                    <th className="border px-2 py-1">Age</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-2 py-1">1</td><td className="border px-2 py-1">Hansen</td><td className="border px-2 py-1">Ola</td><td className="border px-2 py-1">30</td></tr>
                  <tr><td className="border px-2 py-1">2</td><td className="border px-2 py-1">Svendson</td><td className="border px-2 py-1">Tove</td><td className="border px-2 py-1">23</td></tr>
                  <tr><td className="border px-2 py-1">3</td><td className="border px-2 py-1">Pettersen</td><td className="border px-2 py-1">Kari</td><td className="border px-2 py-1">20</td></tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Orders Table</h3>
              <table className="w-full border text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-2 py-1">OrderID</th>
                    <th className="border px-2 py-1">OrderNumber</th>
                    <th className="border px-2 py-1">PersonID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-2 py-1">1</td><td className="border px-2 py-1">77895</td><td className="border px-2 py-1">3</td></tr>
                  <tr><td className="border px-2 py-1">2</td><td className="border px-2 py-1">44678</td><td className="border px-2 py-1">3</td></tr>
                  <tr><td className="border px-2 py-1">3</td><td className="border px-2 py-1">22456</td><td className="border px-2 py-1">2</td></tr>
                  <tr><td className="border px-2 py-1">4</td><td className="border px-2 py-1">24562</td><td className="border px-2 py-1">1</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CREATE TABLE Example */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow space-y-6">
          <h2 className="text-2xl font-bold">SQL FOREIGN KEY on CREATE TABLE</h2>

          <div>
            <h3 className="text-xl font-semibold mb-2">MySQL</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded mb-2 overflow-x-auto">
              <code>{createMySQL}</code>
            </pre>
            <button
              onClick={() => handleCopy(createMySQL, "mysql")}
              className="bg-[#04AA6D] text-white px-5 py-2 rounded hover:bg-[#03945f] transition"
            >
              {copied === "mysql" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">SQL Server / Oracle / MS Access</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded mb-2 overflow-x-auto">
              <code>{createSQLServer}</code>
            </pre>
            <button
              onClick={() => handleCopy(createSQLServer, "sqlserver")}
              className="bg-[#04AA6D] text-white px-5 py-2 rounded hover:bg-[#03945f] transition"
            >
              {copied === "sqlserver" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Named FOREIGN KEY</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded mb-2 overflow-x-auto">
              <code>{createNamedFK}</code>
            </pre>
            <button
              onClick={() => handleCopy(createNamedFK, "named")}
              className="bg-[#04AA6D] text-white px-5 py-2 rounded hover:bg-[#03945f] transition"
            >
              {copied === "named" ? "Copied!" : "Copy SQL"}
            </button>
          </div>
        </section>

        {/* ALTER TABLE Example */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow space-y-6">
          <h2 className="text-2xl font-bold">SQL FOREIGN KEY on ALTER TABLE</h2>

          <div>
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded mb-2 overflow-x-auto">
              <code>{alterFK}</code>
            </pre>
            <button
              onClick={() => handleCopy(alterFK, "alter")}
              className="bg-[#04AA6D] text-white px-5 py-2 rounded hover:bg-[#03945f] transition"
            >
              {copied === "alter" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Named Constraint</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded mb-2 overflow-x-auto">
              <code>{alterNamedFK}</code>
            </pre>
            <button
              onClick={() => handleCopy(alterNamedFK, "alterNamed")}
              className="bg-[#04AA6D] text-white px-5 py-2 rounded hover:bg-[#03945f] transition"
            >
              {copied === "alterNamed" ? "Copied!" : "Copy SQL"}
            </button>
          </div>
        </section>

        {/* DROP FOREIGN KEY */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow space-y-6">
          <h2 className="text-2xl font-bold">Drop a FOREIGN KEY Constraint</h2>

          <div>
            <h3 className="text-xl font-semibold mb-2">MySQL</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded mb-2 overflow-x-auto">
              <code>{dropMySQL}</code>
            </pre>
            <button
              onClick={() => handleCopy(dropMySQL, "dropmysql")}
              className="bg-[#04AA6D] text-white px-5 py-2 rounded hover:bg-[#03945f] transition"
            >
              {copied === "dropmysql" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">SQL Server / Oracle / MS Access</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded mb-2 overflow-x-auto">
              <code>{dropSQLServer}</code>
            </pre>
            <button
              onClick={() => handleCopy(dropSQLServer, "dropsqlserver")}
              className="bg-[#04AA6D] text-white px-5 py-2 rounded hover:bg-[#03945f] transition"
            >
              {copied === "dropsqlserver" ? "Copied!" : "Copy SQL"}
            </button>
          </div>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Which constraint is used to link one table to another by referencing the PRIMARY KEY in the parent table?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>NOT NULL</li>
            <li>UNIQUE</li>
            <li className="font-bold">FOREIGN KEY ✅</li>
            <li>CHECK</li>
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

export default Sql_ForeignKey;
