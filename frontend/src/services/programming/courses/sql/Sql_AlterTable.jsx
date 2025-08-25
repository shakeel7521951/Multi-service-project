import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_AlterTable = () => {
  const [copied, setCopied] = useState("");

  const exAdd = `ALTER TABLE Customers\nADD Email varchar(255);`;
  const exDrop = `ALTER TABLE Customers\nDROP COLUMN Email;`;
  const exRename = `ALTER TABLE table_name\nRENAME COLUMN old_name TO new_name;`;
  const exRenameSQLServer = `EXEC sp_rename 'table_name.old_name', 'new_name', 'COLUMN';`;
  const exAlterTypeSQL = `ALTER TABLE table_name\nALTER COLUMN column_name datatype;`;
  const exAlterTypeMySQL = `ALTER TABLE table_name\nMODIFY COLUMN column_name datatype;`;
  const exAddDOB = `ALTER TABLE Persons\nADD DateOfBirth date;`;
  const exChangeDOB = `ALTER TABLE Persons\nALTER COLUMN DateOfBirth year;`;
  const exDropDOB = `ALTER TABLE Persons\nDROP COLUMN DateOfBirth;`;

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
          <h1 className="text-3xl font-bold mb-2">SQL ALTER TABLE Statement</h1>
          <p className="text-gray-600 text-lg">
            The <strong>ALTER TABLE</strong> statement is used to add, delete, or modify columns in an existing table.  
            It can also be used to add or drop various constraints.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft /> Back
          </button>
        </div>

        {/* ADD Column */}
        <section>
          <h2 className="text-2xl font-bold mb-4">ALTER TABLE - ADD Column</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-3">
            <code>{`ALTER TABLE table_name\nADD column_name datatype;`}</code>
          </pre>
          <p className="mb-3 text-gray-700">Example: Add a new column <code>Email</code> to the <code>Customers</code> table:</p>
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow mb-6">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-3">
              <code>{exAdd}</code>
            </pre>
            <button onClick={() => handleCopy(exAdd, "add")} className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition">
              {copied === "add" ? "Copied!" : "Copy SQL"}
            </button>
          </div>
        </section>

        {/* DROP Column */}
        <section>
          <h2 className="text-2xl font-bold mb-4">ALTER TABLE - DROP Column</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-3">
            <code>{`ALTER TABLE table_name\nDROP COLUMN column_name;`}</code>
          </pre>
          <p className="mb-3 text-gray-700">Example: Remove the <code>Email</code> column:</p>
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow mb-6">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-3">
              <code>{exDrop}</code>
            </pre>
            <button onClick={() => handleCopy(exDrop, "drop")} className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition">
              {copied === "drop" ? "Copied!" : "Copy SQL"}
            </button>
          </div>
        </section>

        {/* RENAME Column */}
        <section>
          <h2 className="text-2xl font-bold mb-4">ALTER TABLE - RENAME Column</h2>
          <p className="text-gray-700 mb-2">General syntax:</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-3">
            <code>{exRename}</code>
          </pre>
          <p className="text-gray-700 mb-2">SQL Server syntax:</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{exRenameSQLServer}</code>
          </pre>
        </section>

        {/* ALTER Data Type */}
        <section>
          <h2 className="text-2xl font-bold mb-4">ALTER TABLE - Modify Column Data Type</h2>
          <p className="text-gray-700 mb-2">SQL Server / MS Access:</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-3">
            <code>{exAlterTypeSQL}</code>
          </pre>
          <p className="text-gray-700 mb-2">MySQL / Oracle (before 10G):</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-3">
            <code>{exAlterTypeMySQL}</code>
          </pre>
          <p className="text-gray-700">Oracle 10G and later uses <code>MODIFY column_name datatype;</code></p>
        </section>

        {/* Demo Persons Table */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Demo Table: Persons</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">ID</th>
                  <th className="border px-3 py-2">LastName</th>
                  <th className="border px-3 py-2">FirstName</th>
                  <th className="border px-3 py-2">Address</th>
                  <th className="border px-3 py-2">City</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">Hansen</td>
                  <td className="border px-3 py-2">Ola</td>
                  <td className="border px-3 py-2">Timoteivn 10</td>
                  <td className="border px-3 py-2">Sandnes</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">Svendson</td>
                  <td className="border px-3 py-2">Tove</td>
                  <td className="border px-3 py-2">Borgvn 23</td>
                  <td className="border px-3 py-2">Sandnes</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">3</td>
                  <td className="border px-3 py-2">Pettersen</td>
                  <td className="border px-3 py-2">Kari</td>
                  <td className="border px-3 py-2">Storgt 20</td>
                  <td className="border px-3 py-2">Stavanger</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Example: Add Column */}
        <section className="bg-[#D9EEE1] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Add Column</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded mb-3">
            <code>{exAddDOB}</code>
          </pre>
          <button onClick={() => handleCopy(exAddDOB, "adddob")} className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition">
            {copied === "adddob" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example: Change Data Type */}
        <section className="bg-[#D9EEE1] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Change Data Type</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded mb-3">
            <code>{exChangeDOB}</code>
          </pre>
          <button onClick={() => handleCopy(exChangeDOB, "changedob")} className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition">
            {copied === "changedob" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example: Drop Column */}
        <section className="bg-[#D9EEE1] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Drop Column</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded mb-3">
            <code>{exDropDOB}</code>
          </pre>
          <button onClick={() => handleCopy(exDropDOB, "dropdob")} className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition">
            {copied === "dropdob" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">Which SQL command is used to add a new column to an existing table?</p>
          <ul className="space-y-2 text-gray-800">
            <li className="font-bold">ALTER TABLE table_name ADD column_name datatype; ✅</li>
            <li>UPDATE table_name ADD column_name datatype;</li>
            <li>INSERT INTO table_name ADD column_name datatype;</li>
            <li>MODIFY TABLE table_name ADD column_name datatype;</li>
          </ul>
        </section>

        {/* Navigation Bottom */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sql_AlterTable;
