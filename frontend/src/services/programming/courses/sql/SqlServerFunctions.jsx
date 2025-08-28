import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SqlServerFunctions = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  // Functions Data
  const stringFunctions = [
    { fn: "ASCII", desc: "Returns the ASCII value for the specific character" },
    { fn: "CHAR", desc: "Returns the character based on the ASCII code" },
    { fn: "CHARINDEX", desc: "Returns the position of a substring in a string" },
    { fn: "CONCAT", desc: "Adds two or more strings together" },
    { fn: "Concat with +", desc: "Adds two or more strings together" },
    { fn: "CONCAT_WS", desc: "Adds two or more strings together with a separator" },
    { fn: "DATALENGTH", desc: "Returns the number of bytes used to represent an expression" },
    { fn: "DIFFERENCE", desc: "Compares two SOUNDEX values, and returns an integer value" },
    { fn: "FORMAT", desc: "Formats a value with the specified format" },
    { fn: "LEFT", desc: "Extracts a number of characters from a string (starting from left)" },
    { fn: "LEN", desc: "Returns the length of a string" },
    { fn: "LOWER", desc: "Converts a string to lower-case" },
    { fn: "LTRIM", desc: "Removes leading spaces from a string" },
    { fn: "NCHAR", desc: "Returns the Unicode character based on the number code" },
    { fn: "PATINDEX", desc: "Returns the position of a pattern in a string" },
    { fn: "QUOTENAME", desc: "Returns a string with delimiters to make it a valid identifier" },
    { fn: "REPLACE", desc: "Replaces all occurrences of a substring with a new substring" },
    { fn: "REPLICATE", desc: "Repeats a string a specified number of times" },
    { fn: "REVERSE", desc: "Reverses a string and returns the result" },
    { fn: "RIGHT", desc: "Extracts a number of characters from a string (starting from right)" },
    { fn: "RTRIM", desc: "Removes trailing spaces from a string" },
    { fn: "SOUNDEX", desc: "Returns a code to evaluate similarity of two strings" },
    { fn: "SPACE", desc: "Returns a string of the specified number of space characters" },
    { fn: "STR", desc: "Returns a number as string" },
    { fn: "STUFF", desc: "Deletes part of a string and inserts another part" },
    { fn: "SUBSTRING", desc: "Extracts some characters from a string" },
    { fn: "TRANSLATE", desc: "Replaces characters in a string based on mapping" },
    { fn: "TRIM", desc: "Removes leading and trailing spaces or specified characters" },
    { fn: "UNICODE", desc: "Returns the Unicode value for the first character" },
    { fn: "UPPER", desc: "Converts a string to upper-case" }
  ];

  const numericFunctions = [
    { fn: "ABS", desc: "Returns the absolute value of a number" },
    { fn: "ACOS", desc: "Returns the arc cosine of a number" },
    { fn: "ASIN", desc: "Returns the arc sine of a number" },
    { fn: "ATAN", desc: "Returns the arc tangent of a number" },
    { fn: "ATN2", desc: "Returns the arc tangent of two numbers" },
    { fn: "AVG", desc: "Returns the average value of an expression" },
    { fn: "CEILING", desc: "Returns the smallest integer greater than or equal to a number" },
    { fn: "COUNT", desc: "Returns the number of records returned by a query" },
    { fn: "COS", desc: "Returns the cosine of a number" },
    { fn: "COT", desc: "Returns the cotangent of a number" },
    { fn: "DEGREES", desc: "Converts radians to degrees" },
    { fn: "EXP", desc: "Returns e raised to a specified power" },
    { fn: "FLOOR", desc: "Returns the largest integer less than or equal to a number" },
    { fn: "LOG", desc: "Returns the natural logarithm, or logarithm with specified base" },
    { fn: "LOG10", desc: "Returns the base-10 logarithm" },
    { fn: "MAX", desc: "Returns the maximum value in a set of values" },
    { fn: "MIN", desc: "Returns the minimum value in a set of values" },
    { fn: "PI", desc: "Returns the value of PI" },
    { fn: "POWER", desc: "Returns a number raised to the power of another number" },
    { fn: "RADIANS", desc: "Converts degrees into radians" },
    { fn: "RAND", desc: "Returns a random number" },
    { fn: "ROUND", desc: "Rounds a number to a specified decimal places" },
    { fn: "SIGN", desc: "Returns the sign of a number" },
    { fn: "SIN", desc: "Returns the sine of a number" },
    { fn: "SQRT", desc: "Returns the square root of a number" },
    { fn: "SQUARE", desc: "Returns the square of a number" },
    { fn: "SUM", desc: "Calculates the sum of values" },
    { fn: "TAN", desc: "Returns the tangent of a number" }
  ];

  const dateFunctions = [
    { fn: "CURRENT_TIMESTAMP", desc: "Returns the current date and time" },
    { fn: "DATEADD", desc: "Adds a time/date interval to a date" },
    { fn: "DATEDIFF", desc: "Returns the difference between two dates" },
    { fn: "DATEFROMPARTS", desc: "Returns a date from year, month, and day values" },
    { fn: "DATENAME", desc: "Returns a specified part of a date (as string)" },
    { fn: "DATEPART", desc: "Returns a specified part of a date (as integer)" },
    { fn: "DAY", desc: "Returns the day of the month" },
    { fn: "GETDATE", desc: "Returns the current database system date and time" },
    { fn: "GETUTCDATE", desc: "Returns the current UTC date and time" },
    { fn: "ISDATE", desc: "Checks if an expression is a valid date" },
    { fn: "MONTH", desc: "Returns the month part of a date" },
    { fn: "SYSDATETIME", desc: "Returns the date and time of the SQL Server" },
    { fn: "YEAR", desc: "Returns the year part of a date" }
  ];

  const advancedFunctions = [
    { fn: "CAST", desc: "Converts a value to a specified datatype" },
    { fn: "COALESCE", desc: "Returns the first non-null value in a list" },
    { fn: "CONVERT", desc: "Converts a value to a specified datatype" },
    { fn: "CURRENT_USER", desc: "Returns the name of the current user" },
    { fn: "IIF", desc: "Returns a value if condition is TRUE, another if FALSE" },
    { fn: "ISNULL", desc: "Returns a specified value if expression is NULL" },
    { fn: "ISNUMERIC", desc: "Tests whether an expression is numeric" },
    { fn: "NULLIF", desc: "Returns NULL if two expressions are equal" },
    { fn: "SESSION_USER", desc: "Returns the name of the current user" },
    { fn: "SESSIONPROPERTY", desc: "Returns the session settings for a specified option" },
    { fn: "SYSTEM_USER", desc: "Returns the login name for the current user" },
    { fn: "USER_NAME", desc: "Returns the database username based on id" }
  ];

  const renderTable = (title, functions) => (
    <section className="bg-[#F3F4F6] p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-[#04AA6D] text-white">
          <tr>
            <th className="text-left px-4 py-2">Function</th>
            <th className="text-left px-4 py-2">Description</th>
            <th className="px-4 py-2">Copy</th>
          </tr>
        </thead>
        <tbody>
          {functions.map((item, idx) => (
            <tr key={idx} className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 font-mono text-sm">{item.fn}</td>
              <td className="px-4 py-2 text-gray-700">{item.desc}</td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => handleCopy(item.fn, item.fn)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-3 py-1 rounded text-sm"
                >
                  {copied === item.fn ? "Copied!" : "Copy"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );

  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold mb-2">SQL Server Functions</h1>
          <p className="text-gray-600 text-lg">
            SQL Server has many built-in functions. This reference contains string,
            numeric, date, and advanced functions.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {renderTable("SQL Server String Functions", stringFunctions)}
        {renderTable("SQL Server Math/Numeric Functions", numericFunctions)}
        {renderTable("SQL Server Date Functions", dateFunctions)}
        {renderTable("SQL Server Advanced Functions", advancedFunctions)}

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Which SQL Server function can be used to convert a value into a specified datatype?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li className="font-bold">CAST ✅</li>
            <li>FORMAT</li>
            <li>SUBSTRING</li>
            <li>LEN</li>
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

export default SqlServerFunctions;
