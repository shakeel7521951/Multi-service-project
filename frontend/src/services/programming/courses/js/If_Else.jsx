import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const If_Else = () => {
  const references = [
    "if Statement",
    "else Statement",
    "else if Statement",
    "switch Statement",
    "Ternary Operator",
    "Logical Operators",
    "Comparison Operators",
    "Truthy/Falsy Values",
    "Conditional Chains",
    "Nested Conditionals",
    "Short-circuit Evaluation",
    "Nullish Coalescing",
    "Optional Chaining",
    "Error Handling",
    "Best Practices"
  ];

  const basicIfExample = `if (hour < 18) {
  greeting = "Good day";
}`;

  const ifElseExample = `if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}`;

  const elseIfExample = `if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}`;

  const randomLinkExample = `let text;
if (Math.random() < 0.5) {
  text = "<a href='https://w3schools.com'>Visit W3Schools</a>";
} else {
  text = "<a href='https://wwf.org'>Visit WWF</a>";
}
document.getElementById("demo").innerHTML = text;`;

  const [copied, setCopied] = useState({
    basicIf: false,
    ifElse: false,
    elseIf: false,
    randomLink: false
  });

  const handleCopy = (code, key) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(prev => ({ ...prev, [key]: true }));
        setTimeout(() => {
          setCopied(prev => ({ ...prev, [key]: false }));
        }, 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Conditionals</h1>
          <p className="text-gray-600 text-lg">
            Control program flow with conditional statements to make decisions in your code.
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
          <h2 className="text-3xl font-bold mb-4">JavaScript if, else, and else if</h2>
          <p className="text-gray-800 mb-3">
            Conditional statements are used to perform different actions based on different conditions.
          </p>
          <p className="text-gray-800 mb-3">
            Very often when you write code, you want to perform different actions for different decisions.
            You can use conditional statements in your code to do this.
          </p>
          <p className="text-gray-800 mb-6">
            In JavaScript we have the following conditional statements:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-800">
            <li>Use <code className="bg-gray-200 px-1 rounded">if</code> to specify a block of code to be executed if a condition is true</li>
            <li>Use <code className="bg-gray-200 px-1 rounded">else</code> to specify a block if the condition is false</li>
            <li>Use <code className="bg-gray-200 px-1 rounded">else if</code> to specify a new condition if the first is false</li>
            <li>Use <code className="bg-gray-200 px-1 rounded">switch</code> to specify many alternative blocks (covered in next chapter)</li>
          </ul>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try It Yourself »
          </button>
        </section>

        {/* The if Statement Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">The if Statement</h2>
          <p className="text-gray-700 mb-4">
            Use the <code className="bg-gray-200 px-1 rounded">if</code> statement to specify a block of JavaScript code to be executed if a condition is true.
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-6">
            <h3 className="font-bold mb-3">Syntax:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{`if (condition) {
  // block of code to be executed if the condition is true
}`}</code>
            </pre>
            <p className="text-gray-700 mt-2">
              Note that <code className="bg-gray-200 px-1 rounded">if</code> is in lowercase letters. Uppercase letters (If or IF) will generate a JavaScript error.
            </p>
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <p className="text-gray-700 mb-3">
              Make a "Good day" greeting if the hour is less than 18:00:
            </p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{basicIfExample}</code>
            </pre>
            <p className="text-gray-700 mt-3">
              The result of greeting will be: <span className="font-semibold">Good day</span>
            </p>
            <button
              onClick={() => handleCopy(basicIfExample, 'basicIf')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.basicIf ? "Copied!" : "Copy Example"}
            </button>
          </div>
        </section>

        {/* The else Statement Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">The else Statement</h2>
          <p className="text-gray-700 mb-4">
            Use the <code className="bg-gray-200 px-1 rounded">else</code> statement to specify a block of code to be executed if the condition is false.
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-6">
            <h3 className="font-bold mb-3">Syntax:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{`if (condition) {
  // block if condition is true
} else {
  // block if condition is false
}`}</code>
            </pre>
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <p className="text-gray-700 mb-3">
              If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":
            </p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{ifElseExample}</code>
            </pre>
            <p className="text-gray-700 mt-3">
              The result of greeting will be: <span className="font-semibold">Good day</span> or <span className="font-semibold">Good evening</span>
            </p>
            <button
              onClick={() => handleCopy(ifElseExample, 'ifElse')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.ifElse ? "Copied!" : "Copy Example"}
            </button>
          </div>
        </section>

        {/* The else if Statement Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">The else if Statement</h2>
          <p className="text-gray-700 mb-4">
            Use the <code className="bg-gray-200 px-1 rounded">else if</code> statement to specify a new condition if the first condition is false.
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-6">
            <h3 className="font-bold mb-3">Syntax:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{`if (condition1) {
  // block if condition1 is true
} else if (condition2) {
  // block if condition1 is false and condition2 is true
} else {
  // block if both conditions are false
}`}</code>
            </pre>
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-6">
            <h3 className="font-bold mb-3">Example:</h3>
            <p className="text-gray-700 mb-3">
              If time is less than 10:00, create a "Good morning" greeting, if not but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":
            </p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{elseIfExample}</code>
            </pre>
            <p className="text-gray-700 mt-3">
              The result of greeting will be: <span className="font-semibold">Good morning</span>, <span className="font-semibold">Good day</span>, or <span className="font-semibold">Good evening</span>
            </p>
            <button
              onClick={() => handleCopy(elseIfExample, 'elseIf')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.elseIf ? "Copied!" : "Copy Example"}
            </button>
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Random Link Example:</h3>
            <p className="text-gray-700 mb-3">
              This example will write a link to either W3Schools or to the World Wildlife Foundation (WWF). By using a random number, there is a 50% chance for each of the links:
            </p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{randomLinkExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(randomLinkExample, 'randomLink')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.randomLink ? "Copied!" : "Copy Example"}
            </button>
          </div>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive JavaScript references for conditional statements and related concepts:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
            Next: Switch Statement
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default If_Else;