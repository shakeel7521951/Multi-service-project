import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Injection = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  // Examples
  const exBasic = `txtUserId = getRequestString("UserId");
txtSQL = "SELECT * FROM Users WHERE UserId = " + txtUserId;`;

  const exInjection = `SELECT * FROM Users WHERE UserId = 105 OR 1=1;`;

  const exLogin = `uName = getRequestString("username");
uPass = getRequestString("userpassword");

sql = 'SELECT * FROM Users WHERE Name ="' + uName + '" AND Pass ="' + uPass + '"';`;

  const exLoginHack = `SELECT * FROM Users WHERE Name ="" or ""="" AND Pass ="" or ""=""`; 

  const exBatch = `SELECT * FROM Users; DROP TABLE Suppliers;`;

  const exParamAsp = `txtUserId = getRequestString("UserId");
txtSQL = "SELECT * FROM Users WHERE UserId = @0";
db.Execute(txtSQL,txtUserId);`;

  const exParamPhp = `$stmt = $dbh->prepare("INSERT INTO Customers (CustomerName,Address,City)
VALUES (:nam, :add, :cit)");
$stmt->bindParam(':nam', $txtNam);
$stmt->bindParam(':add', $txtAdd);
$stmt->bindParam(':cit', $txtCit);
$stmt->execute();`;

  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold mb-2">SQL Injection</h1>
          <p className="text-gray-600 text-lg">
            SQL Injection is a <strong>code injection technique</strong> that might destroy your database.
            It is one of the most common web hacking methods, inserting malicious code into SQL queries via user input.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Example 1 */}
        <section className="bg-[#FFF4E5] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">SQL Injection Based on 1=1</h2>
          <p className="text-gray-700 mb-4">
            If user input is not validated, a hacker can inject input like <code>105 OR 1=1</code> to return all rows.
          </p>

          <pre className="bg-white border-l-4 border-[#E67E22] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{exBasic}</code>
          </pre>
          <pre className="bg-white border-l-4 border-[#E67E22] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{exInjection}</code>
          </pre>
          <button
            onClick={() => handleCopy(exInjection, "inj1")}
            className="bg-[#E67E22] hover:bg-[#cf711f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "inj1" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example 2 */}
        <section className="bg-[#FDE2E4] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">SQL Injection Based on ""=""</h2>
          <p className="text-gray-700 mb-4">
            Hackers can bypass login by inserting <code>" or ""="</code> in username or password.
          </p>

          <pre className="bg-white border-l-4 border-red-400 p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{exLogin}</code>
          </pre>

          <pre className="bg-white border-l-4 border-red-400 p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{exLoginHack}</code>
          </pre>

          <button
            onClick={() => handleCopy(exLoginHack, "inj2")}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "inj2" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example 3 */}
        <section className="bg-[#E0F7FA] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Batched SQL Injection</h2>
          <p className="text-gray-700 mb-4">
            Multiple SQL statements can be injected, like selecting all users and dropping a table.
          </p>
          <pre className="bg-white border-l-4 border-[#00ACC1] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{exBatch}</code>
          </pre>
          <button
            onClick={() => handleCopy(exBatch, "inj3")}
            className="bg-[#00ACC1] hover:bg-[#0097a7] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "inj3" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Protection */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Protecting Against SQL Injection</h2>
          <p className="text-gray-700 mb-4">
            Use <strong>SQL Parameters</strong> instead of directly concatenating user input.
          </p>

          <h3 className="text-xl font-semibold mb-2">ASP.NET Example</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{exParamAsp}</code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">PHP Example</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{exParamPhp}</code>
          </pre>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Which method helps protect a database from SQL Injection?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>Concatenating user input directly</li>
            <li className="font-bold">Using SQL Parameters ✅</li>
            <li>Allowing batch statements</li>
            <li>Storing plain text passwords</li>
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

export default Sql_Injection;