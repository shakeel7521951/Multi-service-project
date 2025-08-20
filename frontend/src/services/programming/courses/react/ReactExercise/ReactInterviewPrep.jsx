import React from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const ReactInterviewPrep = () => {
  const refArray = [
    { id: 1, name: "React Introduction", link: "/react/reactIntro" },
    { id: 2, name: "React JSX", link: "/react/reactJSX" },
    { id: 3, name: "React Components", link: "/react/reactComponents" },
    { id: 4, name: "React Props", link: "/react/reactProps" },
    { id: 5, name: "React State", link: "/react/reactState" },
    { id: 6, name: "React Events", link: "/react/reactEvents" },
    { id: 7, name: "React Conditional Rendering", link: "/react/reactConditionalRendering" },
    { id: 8, name: "React Lists", link: "/react/reactLists" },
    { id: 9, name: "React Forms", link: "/react/reactForms" },
    { id: 10, name: "React UseEffect", link: "/react/reactUseEffect" },
    { id: 11, name: "React UseState", link: "/react/reactUseState" },
    { id: 12, name: "React Custom Hooks", link: "/react/reactCustomHooks" },
    { id: 13, name: "React Router", link: "/react/reactRouter" },
    { id: 14, name: "React Context", link: "/react/reactContext" },
    { id: 15, name: "React Memo", link: "/react/reactMemo" },
  ];

  return (
    <div className="px-4">
      {/* Hero Section */}
      <div className="mt-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl">React Interview Prep</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
        <div className="flex justify-between">
          <div className="flex px-3 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Home
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-5 bg-[#D9EEE1] mt-5 py-10 rounded-md">
        <h2 className="text-2xl font-semibold pb-3">React.js Interview Preparation</h2>
        <p className="pb-4">
          Preparing for a React.js interview? This guide will walk you through typical questions, example tasks, and how to boost your confidence with hands-on training.
        </p>

        <h2 className="text-2xl font-semibold pt-4 pb-3">W3Schools AI-Powered Interview Tool</h2>
        <p className="pb-4">
          Try W3Schools’ interactive interview simulator. You can choose the role of the interviewer, ask or answer questions, and get personalized feedback after the session.
        </p>

        <h2 className="text-2xl font-semibold pt-4 pb-3">What to Expect in a Front-End Interview</h2>
        <p className="pb-4">
          Front-End interviews often include a mix of technical questions, practical coding tasks, and a discussion about your past work experience.
        </p>

        <h2 className="text-xl font-semibold pt-4 pb-2">Examples of Technical Questions</h2>
        <ul className="list-disc ml-6 pb-4 space-y-2">
          <li>Tell me about your experience as a Front-End developer.</li>
          <li>Describe a project where you implemented the UI of a website.</li>
          <li>What is the difference between functional and class components in React?</li>
          <li>How do you manage state across components?</li>
        </ul>

        <h2 className="text-xl font-semibold pt-4 pb-2">Example of a Practical Task</h2>
        <p className="pb-3">
          <strong>Task:</strong> Create a webpage that displays a greeting message to the user. Use HTML, CSS, and JavaScript to change the message based on the time of day.
        </p>

        <div className="bg-white p-4 rounded-md text-sm font-mono mb-4 overflow-auto">
          <pre>
{`<head>
  <title>Simple Greeting Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      color: #333;
      padding: 20px;
    }
  </style>
</head>
<body>
  <h1 id="greeting">Hello, welcome to our website!</h1>

  <script>
    const hour = new Date().getHours();
    const greeting = document.getElementById("greeting");

    if (hour < 12) {
      greeting.textContent = "Good morning!";
    } else if (hour < 18) {
      greeting.textContent = "Good afternoon!";
    } else {
      greeting.textContent = "Good evening!";
    }
  </script>
</body>`}
          </pre>
        </div>

        <p className="pb-4">
          Practicing small but realistic tasks like this will help build confidence and show your practical front-end skills in an interview.
        </p>

        <h2 className="text-xl font-semibold pt-4 pb-2">Tips for Success</h2>
        <ul className="list-disc ml-6 pb-6 space-y-2">
          <li>Review your React fundamentals (props, state, hooks, routing, etc.).</li>
          <li>Practice coding challenges on platforms like LeetCode, CodeSandbox, or W3Schools Spaces.</li>
          <li>Prepare real-world project examples to talk about.</li>
          <li>Don’t memorize – understand the core concepts and how to apply them.</li>
        </ul>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* References Section */}
      <div className="px-1 my-10">
        <h1 className="text-3xl font-semibold pb-4">React References</h1>
        <p className="max-w-3xl pb-5">
          Explore key React concepts to prepare for any interview question that comes your way.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {refArray.map((path) => (
            <Link
              to={path.link}
              key={path.id}
              className="bg-[#F3F4F6] hover:bg-[#e5e7eb] transition-colors p-3 rounded-md font-semibold"
            >
              {path.name.trim()}
            </Link>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <div className="flex float-left mt-6 px-3 cursor-pointer py-2 text-md font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Previous
          </div>
          <div className="flex float-right mt-6 px-5 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            Next
            <MdOutlineKeyboardArrowRight className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactInterviewPrep;
