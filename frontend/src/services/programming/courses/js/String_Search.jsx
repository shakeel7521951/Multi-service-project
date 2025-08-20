import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript String Search</h1>
          <p className="text-gray-600 text-lg">
            Explore different methods to search within strings in JavaScript with detailed examples.
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
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">String Search Methods</h2>
          <p className="text-gray-800 mb-3">
            JavaScript provides several methods to search within strings, each with its own use cases and advantages.
          </p>
          <p className="text-gray-800 mb-6">
            Below you'll find all the string search methods available in JavaScript. Click on any method to learn more about it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {searchMethods.map((method, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMethod(method.split(" ")[1].replace("()", "").toLowerCase())}
                className={`cursor-pointer text-center font-medium py-3 px-4 rounded transition ${
                  activeMethod === method.split(" ")[1].replace("()", "").toLowerCase()
                    ? "bg-black text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                {method}
              </button>
            ))}
          </div>
        </section>

        {/* Method Details Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">{methodContent.title}</h2>
          <p className="text-gray-700 mb-4">{methodContent.description}</p>
          
          {methodContent.example && (
            <div className="bg-[#E7E9EB] p-6 rounded-xl mb-4">
              <h3 className="font-bold mb-3">Example:</h3>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{methodContent.example}</code>
              </pre>
              <button
                onClick={() => handleCopy(methodContent.example, activeMethod)}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                {copied === activeMethod ? "Copied!" : "Copy Code"}
              </button>
            </div>
          )}

          {methodContent.notes.length > 0 && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <h3 className="font-bold mb-2">Notes:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {methodContent.notes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">See Also</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore these related string references for more information:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {references.map((ref, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded transition"
              >
                {ref}
              </button>
            ))}
          </div>
        </section>

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

export default String_Search;