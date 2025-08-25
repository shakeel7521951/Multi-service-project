import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_BackupDatabase = () => {
  const [copied, setCopied] = useState("");

  const sqlEx1 = `BACKUP DATABASE testDB\nTO DISK = 'D:\\backups\\testDB.bak';`;
  const sqlEx2 = `BACKUP DATABASE testDB\nTO DISK = 'D:\\backups\\testDB.bak'\nWITH DIFFERENTIAL;`;

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
          <h1 className="text-3xl font-bold mb-2">SQL BACKUP DATABASE for SQL Server</h1>
          <p className="text-gray-600 text-lg">
            The <strong>BACKUP DATABASE</strong> statement in SQL Server is used to create a full 
            or differential backup of an existing database.
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
          <h2 className="text-2xl font-bold mb-4">The SQL BACKUP DATABASE Statement</h2>
          <p className="text-gray-700">
            A full database backup creates a complete copy of the database. 
            Differential backups only copy the data that has changed since the last full backup.
          </p>
        </section>

        {/* Syntax - Full Backup */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Syntax: Full Backup</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`BACKUP DATABASE databasename\nTO DISK = 'filepath';`}</code>
          </pre>
        </section>

        {/* Syntax - Differential Backup */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Syntax: Differential Backup</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`BACKUP DATABASE databasename\nTO DISK = 'filepath'\nWITH DIFFERENTIAL;`}</code>
          </pre>
        </section>

        {/* Example 1: Full Backup */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Full Database Backup</h2>
          <p className="mb-4 text-gray-700">
            This statement creates a full backup of the database <code>testDB</code> 
            to the <code>D:</code> drive:
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
            Always back up the database to a different drive than the one hosting the actual database. 
            This ensures that if a disk crash occurs, your backup remains safe.
          </p>
        </section>

        {/* Example 2: Differential Backup */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Differential Backup</h2>
          <p className="mb-4 text-gray-700">
            This statement creates a differential backup of the <code>testDB</code> database:
          </p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx2}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx2, "ex2")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "ex2" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Which statement would you use to create a differential backup of a database named <code>SchoolDB</code>?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>BACKUP DATABASE SchoolDB TO DISK = 'D:\\backups\\SchoolDB.bak';</li>
            <li className="font-bold">
              BACKUP DATABASE SchoolDB TO DISK = 'D:\\backups\\SchoolDB.bak' WITH DIFFERENTIAL; ✅
            </li>
            <li>BACKUP DIFFERENTIAL SchoolDB TO DISK = 'D:\\backups\\SchoolDB.bak';</li>
            <li>BACKUP DATABASE DIFFERENTIAL SchoolDB;</li>
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

export default Sql_BackupDatabase;
