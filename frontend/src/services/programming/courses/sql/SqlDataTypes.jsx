import { useState } from "react";

const SqlDataTypes = () => {
  const [activeTab, setActiveTab] = useState("mysql");
  const [copied, setCopied] = useState("");

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-4">SQL Data Types</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            SQL Data Types define the kind of values a column can hold: <br />
            integers, characters, money, dates, times, binary data, etc.
          </p>
        </header>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("mysql")}
            className={`px-4 py-2 rounded ${
              activeTab === "mysql"
                ? "bg-[#04AA6D] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            MySQL
          </button>
          <button
            onClick={() => setActiveTab("sqlserver")}
            className={`px-4 py-2 rounded ${
              activeTab === "sqlserver"
                ? "bg-[#04AA6D] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            SQL Server
          </button>
          <button
            onClick={() => setActiveTab("access")}
            className={`px-4 py-2 rounded ${
              activeTab === "access"
                ? "bg-[#04AA6D] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            MS Access
          </button>
        </div>

        {/* MySQL */}
        {activeTab === "mysql" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">MySQL Data Types</h2>

            <div className="mb-6 border rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold mb-3">String Data Types</h3>
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="p-2 border">Data Type</th>
                    <th className="p-2 border">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border font-mono">CHAR(size)</td>
                    <td className="p-2 border">Fixed length string (0-255)</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-mono">VARCHAR(size)</td>
                    <td className="p-2 border">Variable length string (0-65535)</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-mono">TEXT</td>
                    <td className="p-2 border">String up to 65,535 characters</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold mb-3">Numeric Data Types</h3>
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="p-2 border">Data Type</th>
                    <th className="p-2 border">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border font-mono">INT</td>
                    <td className="p-2 border">
                      Integer from -2,147,483,648 to 2,147,483,647
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-mono">BIGINT</td>
                    <td className="p-2 border">Larger integer range</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-mono">DECIMAL(size,d)</td>
                    <td className="p-2 border">Exact fixed-point number</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* SQL Server */}
        {activeTab === "sqlserver" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">SQL Server Data Types</h2>
            <div className="border rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold mb-3">Numeric Examples</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                {`CREATE TABLE Products (
    Price money,
    Quantity int,
    Discount decimal(5,2)
);`}
              </pre>
              <button
                onClick={() =>
                  handleCopy(
                    "CREATE TABLE Products (Price money, Quantity int, Discount decimal(5,2));",
                    "sqlserver"
                  )
                }
                className="mt-3 bg-[#04AA6D] hover:bg-[#03945f] text-white px-4 py-2 rounded"
              >
                {copied === "sqlserver" ? "Copied!" : "Copy SQL"}
              </button>
            </div>
          </div>
        )}

        {/* MS Access */}
        {activeTab === "access" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">MS Access Data Types</h2>
            <div className="border rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold mb-3">Examples</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Text</strong> → Up to 255 characters
                </li>
                <li>
                  <strong>Memo</strong> → Up to 65,536 characters
                </li>
                <li>
                  <strong>Currency</strong> → Holds values with 4 decimals
                </li>
                <li>
                  <strong>Yes/No</strong> → Boolean values
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SqlDataTypes;
