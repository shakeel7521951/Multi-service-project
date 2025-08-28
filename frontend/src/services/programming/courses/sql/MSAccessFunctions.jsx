import { useState } from "react";

const MSAccessFunctions = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  // Function categories
  const stringFunctions = [
    { fn: "Asc", desc: "Returns the ASCII value for the specific character" },
    { fn: "Chr", desc: "Returns the character for the specified ASCII number code" },
    { fn: "Concat with &", desc: "Adds two or more strings together" },
    { fn: "CurDir", desc: "Returns the full path for a specified drive" },
    { fn: "Format", desc: "Formats a value with the specified format" },
    { fn: "InStr", desc: "Gets the position of the first occurrence of a string in another" },
    { fn: "InstrRev", desc: "Gets the position of the first occurrence of a string in another, from the end of string" },
    { fn: "LCase", desc: "Converts a string to lower-case" },
    { fn: "Left", desc: "Extracts a number of characters from a string (starting from left)" },
    { fn: "Len", desc: "Returns the length of a string" },
    { fn: "LTrim", desc: "Removes leading spaces from a string" },
    { fn: "Mid", desc: "Extracts some characters from a string (starting at any position)" },
    { fn: "Replace", desc: "Replaces a substring within a string, with another substring" },
    { fn: "Right", desc: "Extracts a number of characters from a string (starting from right)" },
    { fn: "RTrim", desc: "Removes trailing spaces from a string" },
    { fn: "Space", desc: "Returns a string of the specified number of space characters" },
    { fn: "Split", desc: "Splits a string into an array of substrings" },
    { fn: "Str", desc: "Returns a number as string" },
    { fn: "StrComp", desc: "Compares two strings" },
    { fn: "StrConv", desc: "Returns a converted string" },
    { fn: "StrReverse", desc: "Reverses a string and returns the result" },
    { fn: "Trim", desc: "Removes both leading and trailing spaces from a string" },
    { fn: "UCase", desc: "Converts a string to upper-case" }
  ];

  const numericFunctions = [
    { fn: "Abs", desc: "Returns the absolute value of a number" },
    { fn: "Atn", desc: "Returns the arc tangent of a number" },
    { fn: "Avg", desc: "Returns the average value of an expression" },
    { fn: "Cos", desc: "Returns the cosine of an angle" },
    { fn: "Count", desc: "Returns the number of records returned by a select query" },
    { fn: "Exp", desc: "Returns e raised to the power of a specified number" },
    { fn: "Fix", desc: "Returns the integer part of a number" },
    { fn: "Format", desc: "Formats a numeric value with the specified format" },
    { fn: "Int", desc: "Returns the integer part of a number" },
    { fn: "Max", desc: "Returns the maximum value in a set of values" },
    { fn: "Min", desc: "Returns the minimum value in a set of values" },
    { fn: "Randomize", desc: "Initializes the random number generator" },
    { fn: "Rnd", desc: "Returns a random number" },
    { fn: "Round", desc: "Rounds a number to a specified number of decimal places" },
    { fn: "Sgn", desc: "Returns the sign of a number" },
    { fn: "Sqr", desc: "Returns the square root of a number" },
    { fn: "Sum", desc: "Calculates the sum of a set of values" },
    { fn: "Val", desc: "Reads a string and returns the numbers found in the string" }
  ];

  const dateFunctions = [
    { fn: "Date", desc: "Returns the current system date" },
    { fn: "DateAdd", desc: "Adds a time/date interval to a date and then returns the date" },
    { fn: "DateDiff", desc: "Returns the difference between two dates" },
    { fn: "DatePart", desc: "Returns a specified part of a date (as an integer)" },
    { fn: "DateSerial", desc: "Returns a date from the specified parts" },
    { fn: "DateValue", desc: "Returns a date based on a string" },
    { fn: "Day", desc: "Returns the day of the month for a given date" },
    { fn: "Format", desc: "Formats a date value with the specified format" },
    { fn: "Hour", desc: "Returns the hour part of a time/datetime" },
    { fn: "Minute", desc: "Returns the minute part of a time/datetime" },
    { fn: "Month", desc: "Returns the month part of a given date" },
    { fn: "MonthName", desc: "Returns the name of the month based on a number" },
    { fn: "Now", desc: "Returns the current date and time" },
    { fn: "Second", desc: "Returns the seconds part of a time/datetime" },
    { fn: "Time", desc: "Returns the current system time" },
    { fn: "TimeSerial", desc: "Returns a time from the specified parts" },
    { fn: "TimeValue", desc: "Returns a time based on a string" },
    { fn: "Weekday", desc: "Returns the weekday number for a given date" },
    { fn: "WeekdayName", desc: "Returns the weekday name based on a number" },
    { fn: "Year", desc: "Returns the year part of a given date" }
  ];

  const otherFunctions = [
    { fn: "CurrentUser", desc: "Returns the name of the current database user" },
    { fn: "Environ", desc: "Returns a string that contains the value of an environment variable" },
    { fn: "IsDate", desc: "Checks whether an expression can be converted to a date" },
    { fn: "IsNull", desc: "Checks whether an expression contains Null (no data)" },
    { fn: "IsNumeric", desc: "Checks whether an expression is a valid number" }
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
          <h1 className="text-3xl font-bold mb-2">MS Access Functions</h1>
          <p className="text-gray-600 text-lg">
            MS Access has many built-in functions. This reference contains the string,
            numeric, date, and other useful functions in MS Access.
          </p>
        </header>

        {renderTable("MS Access String Functions", stringFunctions)}
        {renderTable("MS Access Numeric Functions", numericFunctions)}
        {renderTable("MS Access Date Functions", dateFunctions)}
        {renderTable("MS Access Other Functions", otherFunctions)}
      </div>
    </div>
  );
};

export default MSAccessFunctions;
