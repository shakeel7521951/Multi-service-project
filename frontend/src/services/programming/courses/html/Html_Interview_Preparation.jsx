import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Html_Interview_Preparation = () => {
  const [copiedCode, setCopiedCode] = useState(false);

  const codeExample = `<!DOCTYPE html>
<html>
<head>
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

  <h1>Hello, welcome to our website!</h1>

</body>
</html>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample)
      .then(() => {
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
      })
      .catch(() => {
        alert("Failed to copy. Please copy manually.");
      });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Interview Preparation</h1>

        <section className="text-gray-800 mb-12">
          <p className="mb-4">
            Try W3Schools' comprehensive Front-End interview preparation feature.
          </p>
          <p className="mb-4">
            A tool that will help you get ready for your next interview.
          </p>
          <p className="mb-4">
            W3Schools interview preparation is an interactive feature powered by AI, where you can select the role of the interviewer, ask questions, and receive guidance.
          </p>
          <p className="mb-6">
            After the interview training you will get an evaluation of your performance that you can use to improve yourself.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 transition cursor-pointer mb-10">
            Get Started
          </button>
        </section>

        <section className="text-gray-800 mb-12">
          <h2 className="text-3xl font-bold mb-4">What to Expect in a Front-End Interview</h2>
          <p className="mb-4">If you are going to a Front-End interview, here’s what to expect:</p>

          <h3 className="text-2xl font-semibold mt-6 mb-2">Coding Questions:</h3>
          <p className="mb-4">You will be asked coding questions and may get a task to solve.</p>

          <h4 className="text-lg font-semibold mb-1">Examples of Technical Questions:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Tell me about your experience as a Front-End developer.</li>
            <li>Tell me about a personal project where you worked on implementing the user interface for a website.</li>
          </ul>

          <h4 className="text-lg font-semibold mb-1">Examples of a Task:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Create a webpage that shows a greeting message to the user.</li>
            <li>Use HTML and CSS to structure and style it. You can add a JavaScript function to change the message based on the time of the day.</li>
          </ul>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{codeExample}</code>
            </pre>
            <button
              type="button"
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        <section className="text-gray-800 mb-12">
          <h2 className="text-3xl font-bold mb-4">What is Front-End Development?</h2>
          <p className="mb-4">
            Front-End development is an exciting career that allows you to create dynamic and responsive websites and apps. It's ideal if you're passionate about user experience and design.
          </p>

          <h3 className="text-2xl font-semibold mb-2">Typical Languages Used:</h3>
          <ul className="list-disc list-inside mb-6">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Bootstrap and other CSS frameworks</li>
          </ul>
        </section>

        <section className="text-gray-800">
          <h2 className="text-3xl font-bold mb-4">Career Outlook</h2>
          <p className="mb-4">
            The demand for Front-End developers is high.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Competitive salary</li>
            <li>Possibility of working remotely</li>
            <li>Opportunity to grow as the industry innovates</li>
          </ul>
          <p className="mb-6">The average salary in the US is <strong>$112,328</strong>.</p>

          <h3 className="text-2xl font-semibold mb-2">Typical Job Titles:</h3>
          <ul className="list-disc list-inside mb-6">
            <li>Front-End Developer</li>
            <li>Web Developer</li>
            <li>UI/UX Designer</li>
            <li>Web App Developer</li>
            <li>And many more...</li>
          </ul>

          <p className="mb-6">
            Try W3Schools Pathfinder Jobs, where companies post in-demand job roles such as Front-End development, web development, Java development, and more.
          </p>
        </section>

        <div className="flex justify-end mt-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            Explore Jobs
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Html_Interview_Preparation;
