import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MySQL_Functions = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold mb-2">MySQL Functions</h1>
          <p className="text-gray-600 text-lg">
            MySQL has many built-in functions. These include string, numeric, date, 
            and advanced functions that help in data manipulation and queries.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft /> Back
          </button>
        </div>

        {/* Section Template */}
        {sections.map((section, idx) => (
          <section key={idx} className="bg-[#D9EEE1] p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 bg-white rounded-lg overflow-hidden">
                <thead className="bg-[#04AA6D] text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Function</th>
                    <th className="px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {section.functions.map((fn, i) => (
                    <tr
                      key={i}
                      className="odd:bg-gray-50 even:bg-white border-b border-gray-200"
                    >
                      <td className="px-4 py-2 font-mono text-sm text-[#04AA6D] font-semibold">
                        {fn.name}
                      </td>
                      <td className="px-4 py-2 text-gray-700 text-sm">{fn.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

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

// ================= DATA =================
const sections = [
  {
    title: "MySQL String Functions",
    functions: [
      { name: "ASCII", desc: "Returns the ASCII value for the specific character" },
      { name: "CHAR_LENGTH", desc: "Returns the length of a string (in characters)" },
      { name: "CHARACTER_LENGTH", desc: "Returns the length of a string (in characters)" },
      { name: "CONCAT", desc: "Adds two or more expressions together" },
      { name: "CONCAT_WS", desc: "Adds two or more expressions together with a separator" },
      { name: "FIELD", desc: "Returns the index position of a value in a list of values" },
      { name: "FIND_IN_SET", desc: "Returns the position of a string within a list of strings" },
      { name: "FORMAT", desc: "Formats a number with commas and decimals" },
      { name: "INSERT", desc: "Inserts a string within a string at the specified position" },
      { name: "INSTR", desc: "Returns the position of the first occurrence of a string" },
      { name: "LCASE", desc: "Converts a string to lower-case" },
      { name: "LEFT", desc: "Extracts a number of characters from the left" },
      { name: "LENGTH", desc: "Returns the length of a string (in bytes)" },
      { name: "LOCATE", desc: "Returns the position of the first occurrence of a substring" },
      { name: "LOWER", desc: "Converts a string to lower-case" },
      { name: "LPAD", desc: "Left-pads a string with another string" },
      { name: "LTRIM", desc: "Removes leading spaces from a string" },
      { name: "MID", desc: "Extracts a substring from a string" },
      { name: "POSITION", desc: "Returns the position of a substring" },
      { name: "REPEAT", desc: "Repeats a string a number of times" },
      { name: "REPLACE", desc: "Replaces all occurrences of a substring" },
      { name: "REVERSE", desc: "Reverses a string" },
      { name: "RIGHT", desc: "Extracts characters from the right" },
      { name: "RPAD", desc: "Right-pads a string with another string" },
      { name: "RTRIM", desc: "Removes trailing spaces from a string" },
      { name: "SPACE", desc: "Returns a string of spaces" },
      { name: "STRCMP", desc: "Compares two strings" },
      { name: "SUBSTR", desc: "Extracts a substring from a string" },
      { name: "SUBSTRING", desc: "Extracts a substring from a string" },
      { name: "SUBSTRING_INDEX", desc: "Returns substring before a delimiter occurs" },
      { name: "TRIM", desc: "Removes leading and trailing spaces" },
      { name: "UCASE", desc: "Converts a string to upper-case" },
      { name: "UPPER", desc: "Converts a string to upper-case" },
    ],
  },
  {
    title: "MySQL Numeric Functions",
    functions: [
      { name: "ABS", desc: "Returns the absolute value of a number" },
      { name: "ACOS", desc: "Returns the arc cosine of a number" },
      { name: "ASIN", desc: "Returns the arc sine of a number" },
      { name: "ATAN", desc: "Returns the arc tangent of one or two numbers" },
      { name: "ATAN2", desc: "Returns the arc tangent of two numbers" },
      { name: "AVG", desc: "Returns the average value" },
      { name: "CEIL", desc: "Returns the smallest integer >= number" },
      { name: "CEILING", desc: "Same as CEIL" },
      { name: "COS", desc: "Returns the cosine of a number" },
      { name: "COT", desc: "Returns the cotangent of a number" },
      { name: "COUNT", desc: "Returns the number of records" },
      { name: "DEGREES", desc: "Converts radians to degrees" },
      { name: "DIV", desc: "Used for integer division" },
      { name: "EXP", desc: "Returns e^number" },
      { name: "FLOOR", desc: "Returns the largest integer <= number" },
      { name: "GREATEST", desc: "Returns the greatest value" },
      { name: "LEAST", desc: "Returns the smallest value" },
      { name: "LN", desc: "Returns the natural logarithm" },
      { name: "LOG", desc: "Returns logarithm of a number" },
      { name: "LOG10", desc: "Returns logarithm base 10" },
      { name: "LOG2", desc: "Returns logarithm base 2" },
      { name: "MAX", desc: "Returns the maximum value" },
      { name: "MIN", desc: "Returns the minimum value" },
      { name: "MOD", desc: "Returns the remainder" },
      { name: "PI", desc: "Returns PI" },
      { name: "POW", desc: "Returns number^power" },
      { name: "POWER", desc: "Returns number^power" },
      { name: "RADIANS", desc: "Converts degrees to radians" },
      { name: "RAND", desc: "Returns a random number" },
      { name: "ROUND", desc: "Rounds a number" },
      { name: "SIGN", desc: "Returns the sign of a number" },
      { name: "SIN", desc: "Returns the sine of a number" },
      { name: "SQRT", desc: "Returns the square root" },
      { name: "SUM", desc: "Returns the sum of values" },
      { name: "TAN", desc: "Returns the tangent of a number" },
      { name: "TRUNCATE", desc: "Truncates a number" },
    ],
  },
  {
    title: "MySQL Date Functions",
    functions: [
      { name: "ADDDATE", desc: "Adds a time/date interval to a date" },
      { name: "ADDTIME", desc: "Adds a time interval to a datetime" },
      { name: "CURDATE", desc: "Returns the current date" },
      { name: "CURRENT_DATE", desc: "Returns the current date" },
      { name: "CURRENT_TIME", desc: "Returns the current time" },
      { name: "CURRENT_TIMESTAMP", desc: "Returns the current date and time" },
      { name: "CURTIME", desc: "Returns the current time" },
      { name: "DATE", desc: "Extracts the date part from a datetime" },
      { name: "DATEDIFF", desc: "Returns the number of days between two dates" },
      { name: "DATE_ADD", desc: "Adds a date interval" },
      { name: "DATE_FORMAT", desc: "Formats a date" },
      { name: "DATE_SUB", desc: "Subtracts a date interval" },
      { name: "DAY", desc: "Returns the day of the month" },
      { name: "DAYNAME", desc: "Returns the weekday name" },
      { name: "DAYOFMONTH", desc: "Returns the day of the month" },
      { name: "DAYOFWEEK", desc: "Returns the weekday index" },
      { name: "DAYOFYEAR", desc: "Returns the day of the year" },
      { name: "EXTRACT", desc: "Extracts part from a date" },
      { name: "FROM_DAYS", desc: "Returns a date from a numeric value" },
      { name: "HOUR", desc: "Returns the hour part" },
      { name: "LAST_DAY", desc: "Returns the last day of the month" },
      { name: "LOCALTIME", desc: "Returns the current date and time" },
      { name: "LOCALTIMESTAMP", desc: "Returns the current date and time" },
      { name: "MAKEDATE", desc: "Creates a date from year and days" },
      { name: "MAKETIME", desc: "Creates a time from hour, minute, second" },
      { name: "MICROSECOND", desc: "Returns the microsecond part" },
      { name: "MINUTE", desc: "Returns the minute part" },
      { name: "MONTH", desc: "Returns the month part" },
      { name: "MONTHNAME", desc: "Returns the month name" },
      { name: "NOW", desc: "Returns the current date and time" },
      { name: "PERIOD_ADD", desc: "Adds months to a period" },
      { name: "PERIOD_DIFF", desc: "Difference between two periods" },
      { name: "QUARTER", desc: "Returns the quarter of the year" },
      { name: "SECOND", desc: "Returns the seconds part" },
      { name: "SEC_TO_TIME", desc: "Converts seconds to time" },
      { name: "STR_TO_DATE", desc: "Returns a date from string" },
      { name: "SUBDATE", desc: "Subtracts a date interval" },
      { name: "SUBTIME", desc: "Subtracts a time interval" },
      { name: "SYSDATE", desc: "Returns the current date and time" },
      { name: "TIME", desc: "Extracts the time part" },
      { name: "TIME_FORMAT", desc: "Formats a time" },
      { name: "TIME_TO_SEC", desc: "Converts time to seconds" },
      { name: "TIMEDIFF", desc: "Difference between two times" },
      { name: "TIMESTAMP", desc: "Returns a datetime value" },
      { name: "TO_DAYS", desc: "Returns number of days since year 0" },
      { name: "WEEK", desc: "Returns the week number" },
      { name: "WEEKDAY", desc: "Returns the weekday number" },
      { name: "WEEKOFYEAR", desc: "Returns the week number" },
      { name: "YEAR", desc: "Returns the year part" },
      { name: "YEARWEEK", desc: "Returns year and week" },
    ],
  },
  {
    title: "MySQL Advanced Functions",
    functions: [
      { name: "BIN", desc: "Returns a binary representation of a number" },
      { name: "BINARY", desc: "Converts a value to binary string" },
      { name: "CASE", desc: "Returns value when condition is met" },
      { name: "CAST", desc: "Converts a value into a datatype" },
      { name: "COALESCE", desc: "Returns the first non-null value" },
      { name: "CONNECTION_ID", desc: "Returns the unique connection ID" },
      { name: "CONV", desc: "Converts a number between bases" },
      { name: "CONVERT", desc: "Converts a value into datatype or charset" },
      { name: "CURRENT_USER", desc: "Returns the current authenticated user" },
      { name: "DATABASE", desc: "Returns the current database name" },
      { name: "IF", desc: "Returns value if condition is TRUE, else another" },
      { name: "IFNULL", desc: "Returns value if NULL" },
      { name: "ISNULL", desc: "Returns 1 if NULL, else 0" },
      { name: "LAST_INSERT_ID", desc: "Returns last AUTO_INCREMENT id" },
      { name: "NULLIF", desc: "Returns NULL if expressions are equal" },
      { name: "SESSION_USER", desc: "Returns current session user" },
      { name: "SYSTEM_USER", desc: "Returns system user" },
      { name: "USER", desc: "Returns current user" },
      { name: "VERSION", desc: "Returns MySQL version" },
    ],
  },
];

export default MySQL_Functions;