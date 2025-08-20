import React from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const ReactStudyPlan = () => {
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
          <h1 className="text-4xl">React Study Plan</h1>
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
        <h2 className="text-2xl font-semibold pb-3">Introduction</h2>
        <p className="pb-4">
          The React Study Plan helps teachers guide students through learning React step-by-step. You can use a pre-built plan or create a customized one based on student skill levels.
        </p>
        <p className="pb-4">
          Study plans come with timelines, structured content, and tools for organizing classroom flow — from the basics of React to final exams. Save time with ready-made teaching materials.
        </p>

        <h2 className="text-2xl font-semibold pt-4 pb-3">W3Schools Academy</h2>
        <p className="pb-4">
          This study plan is part of <strong>W3Schools Academy</strong> — a teaching platform that provides classroom management, progress tracking, code labs, and certification tools for educators.
        </p>
        <p className="pb-4">
          <strong>Subscriptions:</strong><br />
          Essentials – $1.99/month per student<br />
          Full Access – $5.99/month per student<br />
          <em>Calculate your price and order through the Academy portal.</em>
        </p>

        <p className="pb-4">Other Academy Features include:</p>
        <ul className="list-disc ml-6 space-y-2 pb-6">
          <li>Managing classroom structure</li>
          <li>Tracking student progress</li>
          <li>Assignments and auto-graded challenges</li>
          <li>Teaching resources and exam tools</li>
        </ul>

        <h2 className="text-2xl font-semibold pt-4 pb-3">Teacher Materials</h2>
        <p className="pb-4">
          Everything you need to teach React is included:
        </p>
        <ul className="list-disc ml-6 space-y-2 pb-6">
          <li>React Tutorial</li>
          <li>React Exercises</li>
          <li>React Quiz</li>
          <li>React Coding Challenges</li>
          <li>React Certification Exam</li>
          <li>React Syllabus</li>
        </ul>

        <p className="pb-4">
          Using the React Syllabus, students begin with fundamentals like components and state, then progress toward building dynamic UIs and applying hooks and routing.
        </p>

        <h2 className="text-2xl font-semibold pt-4 pb-3">Study Plan Overview</h2>
        <p className="pb-4">
          These features make learning engaging, flexible, and effective for students of all levels.
        </p>

        <h3 className="text-xl font-semibold pt-2 pb-2">Learning Paths</h3>
        <ul className="list-disc ml-6 space-y-2 pb-4">
          <li>Use default or custom learning paths</li>
          <li>Reorder content as needed</li>
          <li>Add custom tasks, links, or files</li>
          <li>Drag & drop interface for edits</li>
        </ul>

        <h3 className="text-xl font-semibold pt-2 pb-2">Interactive Content</h3>
        <ul className="list-disc ml-6 space-y-2 pb-4">
          <li>Tutorials and Try-it-yourself sections</li>
          <li>Exercises, Quizzes, and Labs</li>
          <li>Code Challenges</li>
        </ul>

        <h3 className="text-xl font-semibold pt-2 pb-2">Timeline and Pace</h3>
        <ul className="list-disc ml-6 space-y-2 pb-4">
          <li>Create 4, 8, 12, or 24-week plans</li>
          <li>Assign different paces per student</li>
          <li>Adapt to different student needs</li>
        </ul>

        <h3 className="text-xl font-semibold pt-2 pb-2">Track Student Progress</h3>
        <ul className="list-disc ml-6 space-y-2 pb-4">
          <li>See chapter, exercise, and exam results</li>
          <li>Auto-grading or manual grading options</li>
          <li>Detailed analytics reports for teachers</li>
        </ul>

        <h3 className="text-xl font-semibold pt-2 pb-2">End of Pathway Exam</h3>
        <p className="pb-4">
          The study plan aligns with the official React Certification Exam. You can schedule the final exam and access detailed student reports.
        </p>

        <h3 className="text-xl font-semibold pt-2 pb-2">Accessibility</h3>
        <p className="pb-4">
          All study materials are accessible on desktop, tablet, and mobile devices — enabling learning from anywhere, anytime.
        </p>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* References Section */}
      <div className="px-1 my-10">
        <h1 className="text-3xl font-semibold pb-4">React References</h1>
        <p className="max-w-3xl pb-5">
          Use these key references throughout your teaching journey with React.
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

export default ReactStudyPlan;
