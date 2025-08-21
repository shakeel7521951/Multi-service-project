import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy, FaCheck } from "react-icons/fa";

const String_Search = () => {
  const references = [
    "String Tutorial",
    "String Methods",
    "String Templates",
    "String Reference"
  ];

  const searchMethods = [
    "String indexOf()",
    "String lastIndexOf()",
    "String search()",
    "String match()",
    "String matchAll()",
    "String includes()",
    "String startsWith()",
    "String endsWith()"
  ];

  const indexOfExample = `let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");`;

  const lastIndexOfExample = `let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate");`;

  const searchExample = `let text = "Please locate where 'locate' occurs!";
let position = text.search("locate");`;

  const [copied, setCopied] = useState("");
  const [activeMethod, setActiveMethod] = useState("indexOf");

  const handleCopy = (code, method) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(method);
        setTimeout(() => setCopied(""), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const renderMethodContent = () => {
    switch(activeMethod) {
      case "indexOf":
        return {
          title: "JavaScript String indexOf()",
          description: "The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:",
          example: indexOfExample,
          notes: [
            "JavaScript counts positions from zero.",
            "0 is the first position in a string, 1 is the second, 2 is the third, ..."
          ]
        };
      case "lastIndexOf":
        return {
          title: "JavaScript String lastIndexOf()",
          description: "The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:",
          example: lastIndexOfExample,
          notes: [
            "Both indexOf() and lastIndexOf() return -1 if the text is not found.",
            "Both methods accept a second parameter as the starting position for the search.",
            "lastIndexOf() searches backwards (from the end to the beginning)."
          ]
        };
      case "search":
        return {
          title: "JavaScript String search()",
          description: "The search() method searches a string for a string (or a regular expression) and returns the position of the match:",
          example: searchExample,
          notes: [
            "The search() method cannot take a second start position argument.",
            "The indexOf() method cannot take powerful search values (regular expressions)."
          ]
        };
      // Add cases for other methods here
      default:
        return {
          title: "JavaScript String Search Methods",
          description: "Select a method from the list to learn about its usage and examples.",
          example: "",
          notes: []
        };
    }
  };

  const methodContent = renderMethodContent();

  return (
    <div className="min-h-screen bg-white px-4 py-10 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-4xl font-bold mb-3 text-gray-800">JavaScript String Search</h1>
          <p className="text-gray-600 text-lg">
            Explore different methods to search within strings in JavaScript with detailed examples.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-3 rounded-lg hover:bg-[#03945f] transition-all shadow-md hover:shadow-lg">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">String Search Methods</h2>
          <p className="text-gray-800 mb-3 text-lg">
            JavaScript provides several methods to search within strings, each with its own use cases and advantages.
          </p>
          <p className="text-gray-800 mb-6 text-lg">
            Below you'll find all the string search methods available in JavaScript. Click on any method to learn more about it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {searchMethods.map((method, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMethod(method.split(" ")[1].replace("()", "").toLowerCase())}
                className={`cursor-pointer text-center font-medium py-3 px-4 rounded-lg transition-all ${
                  activeMethod === method.split(" ")[1].replace("()", "").toLowerCase()
                    ? "bg-[#04AA6D] text-white shadow-md"
                    : "bg-white hover:bg-gray-100 text-gray-800 shadow-sm hover:shadow-md"
                }`}
              >
                {method}
              </button>
            ))}
          </div>
        </section>

        {/* Method Details Section */}
        <section className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">{methodContent.title}</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">{methodContent.description}</p>
          
          {methodContent.example && (
            <div className="bg-gray-50 p-6 rounded-xl mb-6 border border-gray-200">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-gray-800">Example:</h3>
                <button
                  onClick={() => handleCopy(methodContent.example, activeMethod)}
                  className="flex items-center gap-2 bg-[#04AA6D] hover:bg-[#03945f] text-white font-medium px-4 py-2 rounded-lg transition-all"
                >
                  {copied === activeMethod ? (
                    <>
                      <FaCheck /> Copied!
                    </>
                  ) : (
                    <>
                      <FaCopy /> Copy Code
                    </>
                  )}
                </button>
              </div>
              <pre className="bg-white p-5 border-l-4 border-[#04AA6D] font-mono text-sm rounded-r-lg overflow-x-auto shadow-inner">
                <code className="text-gray-800">{methodContent.example}</code>
              </pre>
            </div>
          )}

          {methodContent.notes.length > 0 && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 mb-6 rounded-r-lg">
              <h3 className="font-bold mb-3 text-gray-800">Notes:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {methodContent.notes.map((note, idx) => (
                  <li key={idx} className="leading-relaxed">{note}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* References Section */}
        <section className="bg-gray-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">See Also</h2>
          <p className="text-gray-700 mb-6 max-w-3xl text-lg">
            Explore these related string references for more information:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {references.map((ref, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-white hover:bg-[#04AA6D] hover:text-white text-gray-800 text-center font-medium py-4 px-4 rounded-lg transition-all shadow-sm hover:shadow-md"
              >
                {ref}
              </button>
            ))}
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#03945f] transition-all shadow-md hover:shadow-lg">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default String_Search;