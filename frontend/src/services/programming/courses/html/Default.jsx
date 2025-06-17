import React from "react";
import { FaChevronLeft, FaChevronRight, FaCheckCircle } from "react-icons/fa";

const Default = () => {
  const references = [
    "HTML Elements", "Browser Support", "Attributes",
    "Global Attributes", "Event Attributes", "Color Names",
    "Canvas", "Audio/Video DOM", "Character Sets",
    "URL Encoding", "Language Codes", "Country Codes",
    "HTTP Messages", "Px to Em Converter", "Keyboard Shortcuts"
  ];

  const htmlExample = `<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>This is a Heading</h1>
  <p>This is a paragraph.</p>

</body>
</html>`;

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Section 1: Header */}
        <h1 className="text-4xl font-bold mb-6">HTML Tutorial</h1>

        {/* Navigation Buttons */}
        <div className="flex justify-between mb-6">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded hover:bg-[#03945f] transition cursor-pointer">
            <FaChevronLeft />
            Home
          </button>
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded hover:bg-[#03945f] transition cursor-pointer">
            Next
            <FaChevronRight />
          </button>
        </div>

        {/* Learn HTML Box */}
        <div className="bg-[#D9EEE1] p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Learn HTML</h2>
          <p className="text-gray-800 mb-2">
            HTML is the standard markup language for Web pages.
          </p>
          <p className="text-gray-800 mb-2">
            With HTML you can create your own Website.
          </p>
          <p className="text-gray-800 mb-4">
            HTML is easy to learn - You will enjoy it!
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition cursor-pointer">
            Start learning HTML now »
          </button>
        </div>

        <hr className="border-gray-200 mb-8" />

        {/* Section 2: Try it Yourself */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Easy Learning with HTML "Try it Yourself"
          </h2>
          <p className="text-gray-800 mb-4">
            With our "Try it Yourself" editor, you can edit the HTML code and view the result:
          </p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
            <h2 className="font-bold mb-3">Example:</h2>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{htmlExample}</code>
            </pre>
            <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-bold rounded py-2 px-10 mt-3 transition cursor-pointer">
              Try It Yourself »
            </button>
          </div>
        </div>

        <hr className="border-gray-200 mb-8" />

        {/* Section 3: Track Your Progress */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Track Your Progress</h2>
          <p className="text-gray-800 mb-6">
            Create a free W3Schools account and get access to more features and learning materials:
          </p>

          <ul className="space-y-4 text-gray-800 mb-6">
            {[
              "View your completed tutorials, exercises, and quizzes",
              "Keep an eye on your progress and daily streaks",
              "Set goals and create learning paths",
              "Create your own personal website",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-[#04AA6D] mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition cursor-pointer">
            Sign Up for Free
          </button>

          <p className="text-sm text-gray-800 mt-4">
            <span className="font-bold">Note:</span> This is an optional feature. You can study at W3Schools without creating an account.
          </p>
        </div>

        <hr className="border-gray-200 mb-8" />

        {/* Section 4: HTML References */}
        <div>
          <h2 className="text-3xl font-bold mb-4">HTML References</h2>
          <p className="text-gray-800 mb-8 max-w-3xl">
            At W3Schools you will find complete references about HTML elements, attributes, events, color names, entities, character-sets, URL encoding, language codes, HTTP messages, browser support, and more:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {references.map((ref, index) => (
              <button
                key={index}
                className="bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded w-full transition cursor-pointer"
              >
                {ref}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Default;
