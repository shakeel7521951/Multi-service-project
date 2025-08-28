import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Keywords = () => {
  const keywords = [
    { keyword: "ADD", description: "Adds a column in an existing table" },
    { keyword: "ADD CONSTRAINT", description: "Adds a constraint after a table is already created" },
    { keyword: "ALL", description: "Returns true if all of the subquery values meet the condition" },
    { keyword: "ALTER", description: "Adds, deletes, or modifies columns in a table, or changes the data type of a column" },
    { keyword: "ALTER COLUMN", description: "Changes the data type of a column in a table" },
    { keyword: "ALTER TABLE", description: "Adds, deletes, or modifies columns in a table" },
    { keyword: "AND", description: "Only includes rows where both conditions are true" },
    { keyword: "ANY", description: "Returns true if any of the subquery values meet the condition" },
    { keyword: "AS", description: "Renames a column or table with an alias" },
    { keyword: "ASC", description: "Sorts the result set in ascending order" },
    { keyword: "BACKUP DATABASE", description: "Creates a back up of an existing database" },
    { keyword: "BETWEEN", description: "Selects values within a given range" },
    { keyword: "CASE", description: "Creates different outputs based on conditions" },
    { keyword: "CHECK", description: "A constraint that limits the value that can be placed in a column" },
    { keyword: "COLUMN", description: "Changes the data type of a column or deletes a column in a table" },
    { keyword: "CONSTRAINT", description: "Adds or deletes a constraint" },
    { keyword: "CREATE", description: "Creates a database, index, view, table, or procedure" },
    { keyword: "CREATE DATABASE", description: "Creates a new SQL database" },
    { keyword: "CREATE INDEX", description: "Creates an index on a table (allows duplicate values)" },
    { keyword: "CREATE OR REPLACE VIEW", description: "Updates a view" },
    { keyword: "CREATE TABLE", description: "Creates a new table in the database" },
    { keyword: "CREATE PROCEDURE", description: "Creates a stored procedure" },
    { keyword: "CREATE UNIQUE INDEX", description: "Creates a unique index on a table (no duplicate values)" },
    { keyword: "CREATE VIEW", description: "Creates a view based on the result set of a SELECT statement" },
    { keyword: "DATABASE", description: "Creates or deletes an SQL database" },
    { keyword: "DEFAULT", description: "A constraint that provides a default value for a column" },
    { keyword: "DELETE", description: "Deletes rows from a table" },
    { keyword: "DESC", description: "Sorts the result set in descending order" },
    { keyword: "DISTINCT", description: "Selects only distinct (different) values" },
    { keyword: "DROP", description: "Deletes a column, constraint, database, index, table, or view" },
    { keyword: "DROP COLUMN", description: "Deletes a column in a table" },
    { keyword: "DROP CONSTRAINT", description: "Deletes a UNIQUE, PRIMARY KEY, FOREIGN KEY, or CHECK constraint" },
    { keyword: "DROP DATABASE", description: "Deletes an existing SQL database" },
    { keyword: "DROP DEFAULT", description: "Deletes a DEFAULT constraint" },
    { keyword: "DROP INDEX", description: "Deletes an index in a table" },
    { keyword: "DROP TABLE", description: "Deletes an existing table in the database" },
    { keyword: "DROP VIEW", description: "Deletes a view" },
    { keyword: "EXEC", description: "Executes a stored procedure" },
    { keyword: "EXISTS", description: "Tests for the existence of any record in a subquery" },
    { keyword: "FOREIGN KEY", description: "A constraint that is a key used to link two tables together" },
    { keyword: "FROM", description: "Specifies which table to select or delete data from" },
    { keyword: "FULL OUTER JOIN", description: "Returns all rows when there is a match in either left table or right table" },
    { keyword: "GROUP BY", description: "Groups the result set (used with aggregate functions)" },
    { keyword: "HAVING", description: "Used instead of WHERE with aggregate functions" },
    { keyword: "IN", description: "Allows you to specify multiple values in a WHERE clause" },
    { keyword: "INDEX", description: "Creates or deletes an index in a table" },
    { keyword: "INNER JOIN", description: "Returns rows that have matching values in both tables" },
    { keyword: "INSERT INTO", description: "Inserts new rows in a table" },
    { keyword: "IS NULL", description: "Tests for empty values" },
    { keyword: "IS NOT NULL", description: "Tests for non-empty values" },
    { keyword: "JOIN", description: "Joins tables" },
    { keyword: "LEFT JOIN", description: "Returns all rows from the left table, and the matching rows from the right table" },
    { keyword: "LIKE", description: "Searches for a specified pattern in a column" },
    { keyword: "LIMIT", description: "Specifies the number of records to return" },
    { keyword: "NOT", description: "Only includes rows where a condition is not true" },
    { keyword: "NOT NULL", description: "A constraint that enforces a column to not accept NULL values" },
    { keyword: "OR", description: "Includes rows where either condition is true" },
    { keyword: "ORDER BY", description: "Sorts the result set" },
    { keyword: "PRIMARY KEY", description: "A constraint that uniquely identifies each record in a table" },
    { keyword: "RIGHT JOIN", description: "Returns all rows from the right table, and the matching rows from the left table" },
    { keyword: "SELECT", description: "Selects data from a database" },
    { keyword: "UNION", description: "Combines the result set of two or more SELECT statements" },
    { keyword: "UNIQUE", description: "A constraint that ensures all values in a column are unique" },
    { keyword: "UPDATE", description: "Updates existing rows in a table" },
    { keyword: "WHERE", description: "Filters a result set" },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold mb-2">SQL Keywords Reference</h1>
          <p className="text-gray-600 text-lg">
            This SQL keywords reference contains the reserved words in SQL.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Keywords Table */}
        <section className="bg-[#D9EEE1] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">SQL Keywords</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 bg-white rounded">
              <thead>
                <tr className="bg-[#04AA6D] text-white text-left">
                  <th className="px-4 py-2 border">Keyword</th>
                  <th className="px-4 py-2 border">Description</th>
                </tr>
              </thead>
              <tbody>
                {keywords.map((item, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-2 border font-mono font-semibold text-[#04AA6D]">
                      {item.keyword}
                    </td>
                    <td className="px-4 py-2 border text-gray-700">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Exercise Section */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Which SQL keyword is used to remove rows from a table?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>UPDATE</li>
            <li className="font-bold">DELETE ✅</li>
            <li>DROP</li>
            <li>REMOVE</li>
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

export default Sql_Keywords;
