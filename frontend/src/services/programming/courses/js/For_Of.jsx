import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy } from "react-icons/fa";

const For_Of = () => {
  const references = [
    "JavaScript Basics",
    "For In Loop",
    "While Loop",
    "Do While Loop",
    "Array Methods",
    "String Methods",
    "Map Objects",
    "Set Objects",
    "Iterables",
    "ES6 Features",
    "Browser Compatibility",
    "JavaScript Exercises"
  ];

  const arrayExample = `const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}`;

  const stringExample = `let language = "JavaScript";

let text = "";
for (let x of language) {
  text += x;
}`;

  const exerciseQuestion = `const fruits = ['Apple', 'Banana', 'Orange'];
for (x of fruits) {
  console.log(x);
}`;

  const [copiedArray, setCopiedArray] = useState(false);
  const [copiedString, setCopiedString] = useState(false);
  const [copiedExercise, setCopiedExercise] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCopy = (text, setter) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setter(true);
        setTimeout(() => setter(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const checkAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowAnswer(true);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript For Of Loop</h1>
          <p className="text-gray-600 text-lg">
            Learn how to iterate through iterable objects using the modern for...of loop in JavaScript.
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
        <section className="bg-[#E7F5FE] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">The For Of Loop</h2>
          <p className="text-gray-800 mb-3">
            The JavaScript <code className="bg-gray-100 px-1 rounded">for...of</code> statement loops through the values of an iterable object.
          </p>
          <p className="text-gray-800 mb-3">
            It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more.
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl mt-4">
            <h3 className="font-bold mb-3">Syntax:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{`for (variable of iterable) {
  // code block to be executed
}`}</code>
            </pre>
            <p className="mt-2 text-gray-700">
              <strong>variable</strong> - For every iteration the value of the next property is assigned to the variable. Variable can be declared with <code className="bg-gray-100 px-1 rounded">const</code>, <code className="bg-gray-100 px-1 rounded">let</code>, or <code className="bg-gray-100 px-1 rounded">var</code>.
            </p>
            <p className="mt-2 text-gray-700">
              <strong>iterable</strong> - An object that has iterable properties.
            </p>
          </div>
        </section>

        {/* Browser Support Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Browser Support</h2>
          <p className="text-gray-700 mb-4">
            <code className="bg-gray-100 px-1 rounded">for...of</code> was added to JavaScript in 2015 (ES6).
          </p>
          <div className="bg-[#FFF4A3] p-6 rounded-xl">
            <p className="font-semibold mb-3">Safari 7 was the first browser to support for...of:</p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b">Chrome 38</th>
                    <th className="py-2 px-4 border-b">Edge 12</th>
                    <th className="py-2 px-4 border-b">Firefox 51</th>
                    <th className="py-2 px-4 border-b">Safari 7</th>
                    <th className="py-2 px-4 border-b">Opera 25</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b text-center">Oct 2014</td>
                    <td className="py-2 px-4 border-b text-center">Jul 2015</td>
                    <td className="py-2 px-4 border-b text-center">Oct 2016</td>
                    <td className="py-2 px-4 border-b text-center">Oct 2013</td>
                    <td className="py-2 px-4 border-b text-center">Oct 2014</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-gray-700 font-semibold">
              <code className="bg-gray-100 px-1 rounded">for...of</code> is not supported in Internet Explorer.
            </p>
          </div>
        </section>

        {/* Examples Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold mb-2">Examples</h2>
          
          {/* Array Example */}
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Looping over an Array:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto relative">
              <code>{arrayExample}</code>
              <button
                onClick={() => handleCopy(arrayExample, setCopiedArray)}
                className="absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-700"
                title="Copy code"
              >
                <FaCopy />
              </button>
            </pre>
            {copiedArray && (
              <div className="text-green-600 text-sm mt-1">Code copied!</div>
            )}
          </div>

          {/* String Example */}
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Looping over a String:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto relative">
              <code>{stringExample}</code>
              <button
                onClick={() => handleCopy(stringExample, setCopiedString)}
                className="absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-700"
                title="Copy code"
              >
                <FaCopy />
              </button>
            </pre>
            {copiedString && (
              <div className="text-green-600 text-sm mt-1">Code copied!</div>
            )}
          </div>
        </section>

        {/* Exercise Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Exercise</h2>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <p className="mb-4 text-gray-700">Consider the following code:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto relative">
              <code>{exerciseQuestion}</code>
              <button
                onClick={() => handleCopy(exerciseQuestion, setCopiedExercise)}
                className="absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-700"
                title="Copy code"
              >
                <FaCopy />
              </button>
            </pre>
            {copiedExercise && (
              <div className="text-green-600 text-sm mt-1">Code copied!</div>
            )}
            
            <p className="mt-4 mb-3 font-semibold">What will be the result in the console?</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['1\n2\n3', '0\n1\n2', 'Apple\nBanana\nOrange'].map((option, index) => (
                <button
                  key={index}
                  onClick={() => checkAnswer(index)}
                  className={`p-3 border rounded text-left font-mono whitespace-pre ${
                    selectedAnswer === index
                      ? showAnswer
                        ? index === 2
                          ? 'bg-green-100 border-green-500'
                          : 'bg-red-100 border-red-500'
                        : 'bg-blue-100 border-blue-500'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            
            {showAnswer && (
              <div className={`mt-4 p-3 rounded ${selectedAnswer === 2 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {selectedAnswer === 2 ? (
                  <p className="font-semibold">✓ Correct! The for...of loop iterates over the values of the array.</p>
                ) : (
                  <p className="font-semibold">✗ Not quite right. Remember, for...of loops return the actual values, not indexes.</p>
                )}
                <p className="mt-2">The correct output is:</p>
                <pre className="bg-white p-2 rounded mt-1">Apple\nBanana\nOrange</pre>
              </div>
            )}
          </div>
        </section>

        {/* Note about While Loops */}
        <section className="bg-[#FFF4A3] p-6 rounded-xl">
          <h3 className="font-bold mb-2">The While Loop</h3>
          <p className="text-gray-800">
            The <code className="bg-gray-100 px-1 rounded">while</code> loop and the <code className="bg-gray-100 px-1 rounded">do/while</code> loop are explained in the next chapter.
          </p>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore more JavaScript concepts with our comprehensive references:
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
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default For_Of;
