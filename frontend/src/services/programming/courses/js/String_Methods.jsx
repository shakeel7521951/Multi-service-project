import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy } from "react-icons/fa";

const String_Methods = () => {
  const methods = [
    "String length",
    "String charAt()",
    "String charCodeAt()",
    "String codePointAt()",
    "String concat()",
    "String at()",
    "String [ ]",
    "String slice()",
    "String substring()",
    "String substr()",
    "String toUpperCase()",
    "String toLowerCase()",
    "String isWellFormed()",
    "String toWellFormed()",
    "String trim()",
    "String trimStart()",
    "String trimEnd()",
    "String padStart()",
    "String padEnd()",
    "String repeat()",
    "String replace()",
    "String replaceAll()",
    "String split()"
  ];

  const relatedLinks = [
    "String Tutorial",
    "String Search",
    "String Templates",
    "String Reference"
  ];

  const examples = {
    length: {
      code: `let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;`,
      description: "The length property returns the length of a string:"
    },
    charAt: {
      code: `let text = "HELLO WORLD";
let char = text.charAt(0);`,
      description: "The charAt() method returns the character at a specified index (position) in a string:"
    },
    charCodeAt: {
      code: `let text = "HELLO WORLD";
let char = text.charCodeAt(0);`,
      description: "The charCodeAt() method returns the code of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535):"
    },
    codePointAt: {
      code: `let text = "HELLO WORLD";
let code = text.codePointAt(0);`,
      description: "Get code point value at the first position in a string:"
    },
    at: {
      code: `const name = "W3Schools";
let letter = name.at(2);`,
      description: "ES2022 introduced the string method at(). Get the third letter of name:",
      note: "The at() method is a new addition to JavaScript. It allows the use of negative indexes while charAt() do not. Now you can use myString.at(-2) instead of charAt(myString.length-2).",
      browserSupport: {
        title: "Browser Support",
        content: "at() is an ES2022 feature. JavaScript 2022 is supported in all modern browsers since March 2023:",
        browsers: [
          { name: "Chrome 94", date: "Sep 2021" },
          { name: "Edge 94", date: "Sep 2021" },
          { name: "Firefox 93", date: "Oct 2021" },
          { name: "Safari 16.4", date: "Mar 2023" },
          { name: "Opera 79", date: "Oct 2021" }
        ]
      }
    },
    bracketNotation: {
      code: `const name = "W3Schools";
let letter = name[2];`,
      description: "Property access [ ]:",
      note: "Property access might be a little unpredictable:\n- It makes strings look like arrays (but they are not)\n- If no character is found, [ ] returns undefined, while charAt() returns an empty string.\n- It is read only. str[0] = \"A\" gives no error (but does not work!)\n\nExample:\nlet text = \"HELLO WORLD\";\ntext[0] = \"A\";    // Gives no error, but does not work"
    },
    concat: {
      code: `let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);`,
      description: "concat() joins two or more strings:",
      note: "The concat() method can be used instead of the plus operator. These two lines do the same:\n\ntext = \"Hello\" + \" \" + \"World!\";\ntext = \"Hello\".concat(\" \", \"World!\");\n\nNote:\nAll string methods return a new string. They don't modify the original string.\n\nFormally said:\nStrings are immutable: Strings cannot be changed, only replaced."
    },
    slice: {
      code: `let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);`,
      description: "slice() extracts a part of a string and returns the extracted part in a new string. The method takes 2 parameters: start position, and end position (end not included):",
      note: "JavaScript counts positions from zero. First position is 0. Second position is 1.\n\nExamples:\nIf you omit the second parameter, the method will slice out the rest of the string:\nlet text = \"Apple, Banana, Kiwi\";\nlet part = text.slice(7);\n\nIf a parameter is negative, the position is counted from the end of the string:\nlet text = \"Apple, Banana, Kiwi\";\nlet part = text.slice(-12);\n\nThis example slices out a portion of a string from position -12 to position -6:\nlet text = \"Apple, Banana, Kiwi\";\nlet part = text.slice(-12, -6);"
    },
    substring: {
      code: `let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);`,
      description: "substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring():",
      note: "If you omit the second parameter, substring() will slice out the rest of the string."
    },
    substr: {
      code: `let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);`,
      description: "substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part:",
      warning: "The substr() method is removed (deprecated) in the latest JavaScript standard. Use substring() or slice() instead.",
      note: "If you omit the second parameter, substr() will slice out the rest of the string.\n\nExample:\nlet str = \"Apple, Banana, Kiwi\";\nlet part = str.substr(7);\n\nIf the first parameter is negative, the position counts from the end of the string.\n\nExample:\nlet str = \"Apple, Banana, Kiwi\";\nlet part = str.substr(-4);"
    },
    toUpperCase: {
      code: `let text1 = "Hello World!";
let text2 = text1.toUpperCase();`,
      description: "A string is converted to upper case with toUpperCase():"
    },
    toLowerCase: {
      code: `let text1 = "Hello World!";       // String
let text2 = text1.toLowerCase();  // text2 is text1 converted to lower`,
      description: "A string is converted to lower case with toLowerCase():"
    },
    isWellFormed: {
      code: `let text = "Hello world!";
let result = text.isWellFormed();`,
      description: "The isWellFormed() method returns true if a string is well formed. Otherwise it returns false. A string is not well formed if it contains lone surrogates:",
      note: "Lone Surrogates:\nA lone surrogate is a Unicode surrogate code point that is not part of a valid surrogate pair used to represent characters in UTF-16 encoding."
    },
    toWellFormed: {
      code: `let text = "Hello World \\uD800";
let result = text.toWellFormed();`,
      description: "The String method toWellFormed() returns a new string where all \"lone surrogates\" are replaced with the Unicode replacement character (U+FFFD):"
    },
    trim: {
      code: `let text1 = "      Hello World!      ";
let text2 = text1.trim();`,
      description: "The trim() method removes whitespace from both sides of a string:"
    },
    trimStart: {
      code: `let text1 = "     Hello World!     ";
let text2 = text1.trimStart();`,
      description: "ECMAScript 2019 added the String method trimStart() to JavaScript. The trimStart() method works like trim(), but removes whitespace only from the start of a string:",
      browserSupport: {
        title: "Browser Support",
        content: "JavaScript String trimStart() is supported in all modern browsers since January 2020:",
        browsers: [
          { name: "Chrome 66", date: "Apr 2018" },
          { name: "Edge 79", date: "Jan 2020" },
          { name: "Firefox 61", date: "Jun 2018" },
          { name: "Safari 12", date: "Sep 2018" },
          { name: "Opera 50", date: "May 2018" }
        ]
      }
    },
    trimEnd: {
      code: `let text1 = "     Hello World!     ";
let text2 = text1.trimEnd();`,
      description: "ECMAScript 2019 added the string method trimEnd() to JavaScript. The trimEnd() method works like trim(), but removes whitespace only from the end of a string:",
      browserSupport: {
        title: "Browser Support",
        content: "JavaScript String trimEnd() is supported in all modern browsers since January 2020:",
        browsers: [
          { name: "Chrome 66", date: "Apr 2018" },
          { name: "Edge 79", date: "Jan 2020" },
          { name: "Firefox 61", date: "Jun 2018" },
          { name: "Safari 12", date: "Sep 2018" },
          { name: "Opera 50", date: "May 2018" }
        ]
      }
    },
    padStart: {
      code: `let text = "5";
let padded = text.padStart(4,"0");`,
      description: "ECMAScript 2017 added two new string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string. The padStart() method pads a string from the start. It pads a string with another string (multiple times) until it reaches a given length:",
      note: "The padStart() method is a string method. To pad a number, convert the number to a string first.\n\nExample:\nlet numb = 5;\nlet text = numb.toString();\nlet padded = text.padStart(4,\"0\");",
      browserSupport: {
        title: "Browser Support",
        content: "padStart() is an ECMAScript 2017 feature. ES2017 is supported in all modern browsers since September 2017:",
        browsers: [
          { name: "Chrome 58", date: "Apr 2017" },
          { name: "Edge 15", date: "Apr 2017" },
          { name: "Firefox 52", date: "Mar 2017" },
          { name: "Safari 11", date: "Sep 2017" },
          { name: "Opera 45", date: "May 2017" }
        ],
        warning: "padStart() is not supported in Internet Explorer."
      }
    },
    padEnd: {
      code: `let text = "5";
let padded = text.padEnd(4,"0");`,
      description: "The padEnd() method pads a string from the end. It pads a string with another string (multiple times) until it reaches a given length:",
      note: "The padEnd() method is a string method. To pad a number, convert the number to a string first.\n\nExample:\nlet numb = 5;\nlet text = numb.toString();\nlet padded = text.padEnd(4,\"0\");",
      browserSupport: {
        title: "Browser Support",
        content: "padEnd() is an ECMAScript 2017 feature. ES2017 is supported in all modern browsers since September 2017:",
        browsers: [
          { name: "Chrome 58", date: "Apr 2017" },
          { name: "Edge 15", date: "Apr 2017" },
          { name: "Firefox 52", date: "Mar 2017" },
          { name: "Safari 11", date: "Sep 2017" },
          { name: "Opera 45", date: "May 2017" }
        ],
        warning: "padEnd() is not supported in Internet Explorer."
      }
    },
    repeat: {
      code: `let text = "Hello world!";
let result = text.repeat(2);`,
      description: "The repeat() method returns a string with a number of copies of a string. The repeat() method returns a new string. The repeat() method does not change the original string:",
      syntax: "string.repeat(count)",
      parameters: [
        { name: "count", description: "Required. The number of copies wanted." }
      ],
      returnValue: {
        type: "String",
        description: "A new string containing the copies."
      },
      browserSupport: {
        title: "Browser Support",
        content: "repeat() is an ES6 feature (JavaScript 2015). ES6 is fully supported in all modern browsers since June 2017:",
        browsers: [
          { name: "Chrome 51", date: "May 2016" },
          { name: "Edge 15", date: "Apr 2017" },
          { name: "Firefox 54", date: "Jun 2017" },
          { name: "Safari 10", date: "Sep 2016" },
          { name: "Opera 38", date: "Jun 2016" }
        ],
        warning: "repeat() is not supported in Internet Explorer."
      }
    },
    replace: {
      code: `let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");`,
      description: "The replace() method replaces a specified value with another value in a string:",
      note: "The replace() method does not change the string it is called on. The replace() method returns a new string. The replace() method replaces only the first match.\n\nIf you want to replace all matches, use a regular expression with the /g flag set.\n\nBy default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:\n\nExample:\nlet text = \"Please visit Microsoft!\";\nlet newText = text.replace(\"MICROSOFT\", \"W3Schools\");\n\nTo replace case insensitive, use a regular expression with an /i flag (insensitive):\n\nExample:\nlet text = \"Please visit Microsoft!\";\nlet newText = text.replace(/MICROSOFT/i, \"W3Schools\");\n\nNote:\nRegular expressions are written without quotes.\n\nTo replace all matches, use a regular expression with a /g flag (global match):\n\nExample:\nlet text = \"Please visit Microsoft and Microsoft!\";\nlet newText = text.replace(/Microsoft/g, \"W3Schools\");\n\nNote:\nYou will learn a lot more about regular expressions in the chapter JavaScript Regular Expressions."
    },
    replaceAll: {
      code: `text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");`,
      description: "In 2021, JavaScript introduced the string method replaceAll():",
      note: "The replaceAll() method allows you to specify a regular expression instead of a string to be replaced. If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.\n\nExample:\ntext = text.replaceAll(/Cats/g,\"Dogs\");\ntext = text.replaceAll(/cats/g,\"dogs\");\n\nNote:\nreplaceAll() is an ES2021 feature. replaceAll() does not work in Internet Explorer."
    },
    split: {
      code: `text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe`,
      description: "A string can be converted to an array with the split() method:",
      note: "If the separator is omitted, the returned array will contain the whole string in index [0]. If the separator is \"\", the returned array will be an array of single characters:\n\nExample:\ntext.split(\"\")"
    }
  };

  const [activeMethod, setActiveMethod] = useState("length");
  const [copied, setCopied] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const renderMethodContent = () => {
    const methodData = examples[activeMethod];
    if (!methodData) return null;

    return (
      <>
        <h3 className="text-2xl font-semibold mb-4">{methods.find(m => m.toLowerCase().includes(activeMethod))}</h3>
        
        <p className="mb-4">{methodData.description}</p>
        
        <pre className="bg-gray-100 p-4 rounded-md mb-4 relative">
          <code>{methodData.code}</code>
          <button
            onClick={() => handleCopy(methodData.code)}
            className="absolute top-2 right-2 p-1 rounded bg-gray-200 hover:bg-gray-300"
            title="Copy code"
          >
            <FaCopy className="text-gray-700" />
          </button>
        </pre>

        {methodData.note && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <p className="font-semibold">Note:</p>
            <pre className="whitespace-pre-wrap">{methodData.note}</pre>
          </div>
        )}

        {methodData.warning && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
            <p className="font-semibold">Warning:</p>
            <p>{methodData.warning}</p>
          </div>
        )}

        {methodData.syntax && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Syntax</h4>
            <pre className="bg-gray-100 p-2 rounded">{methodData.syntax}</pre>
          </div>
        )}

        {methodData.parameters && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Parameters</h4>
            <table className="min-w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Parameter</th>
                  <th className="border p-2">Description</th>
                </tr>
              </thead>
              <tbody>
                {methodData.parameters.map((param, idx) => (
                  <tr key={idx}>
                    <td className="border p-2 font-mono">{param.name}</td>
                    <td className="border p-2">{param.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {methodData.returnValue && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Return Value</h4>
            <table className="min-w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Type</th>
                  <th className="border p-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 font-mono">{methodData.returnValue.type}</td>
                  <td className="border p-2">{methodData.returnValue.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {methodData.browserSupport && (
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
            <h4 className="font-semibold mb-2">{methodData.browserSupport.title}</h4>
            <p className="mb-2">{methodData.browserSupport.content}</p>
            <table className="min-w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Browser</th>
                  <th className="border p-2">Version</th>
                </tr>
              </thead>
              <tbody>
                {methodData.browserSupport.browsers.map((browser, idx) => (
                  <tr key={idx}>
                    <td className="border p-2">{browser.name}</td>
                    <td className="border p-2">{browser.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {methodData.browserSupport.warning && (
              <p className="mt-2 text-red-600">{methodData.browserSupport.warning}</p>
            )}
          </div>
        )}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript String Methods</h1>
          <p className="text-gray-600 text-lg">
            Master JavaScript string manipulation with these essential methods.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Basic String Methods</h2>
          <p className="text-gray-800 mb-4">
            JavaScript strings are primitive and immutable: All string methods produce a new string without altering the original string.
          </p>
        </section>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Methods List */}
          <div className="w-full md:w-1/3">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">String Methods</h3>
              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {methods.map((method, idx) => {
                  const methodKey = method.split(' ')[1].replace(/[()]/g, '').toLowerCase();
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveMethod(methodKey)}
                      className={`w-full text-left p-2 rounded transition ${
                        activeMethod === methodKey
                          ? 'bg-[#04AA6D] text-white'
                          : 'bg-white hover:bg-gray-200'
                      }`}
                    >
                      {method}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Related Links */}
            <div className="bg-gray-100 p-4 rounded-lg shadow mt-6">
              <h3 className="text-xl font-semibold mb-4">See Also:</h3>
              <div className="space-y-2">
                {relatedLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="block w-full text-left p-2 rounded bg-white hover:bg-gray-200 text-blue-600 hover:text-blue-800 transition"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Method Details */}
          <div className="w-full md:w-2/3">
            <div className="bg-white p-6 rounded-lg shadow">
              {renderMethodContent()}
            </div>
          </div>
        </div>

        {/* Next Button */}
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

export default String_Methods;