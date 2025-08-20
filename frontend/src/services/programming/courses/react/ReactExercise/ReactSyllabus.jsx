import React from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const ReactSyllabus = () => {
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
          <h1 className="text-4xl">React Syllabus</h1>
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
          The W3Schools React Tutorial is a beginner-friendly and comprehensive guide to learning React. It is carefully crafted to be bite-sized, simple, and easy to understand for learners with an intermediate knowledge of JavaScript.
        </p>
        <p className="pb-4">
          The tutorial's structure allows you to learn React step by step — from basic concepts like components and JSX, to advanced topics like hooks and performance optimization.
        </p>

        <h2 className="text-2xl font-semibold pt-4 pb-3">Learning Outcomes</h2>
        <ul className="list-disc ml-6 space-y-2 pb-6">
          <li>Master ES6 features used in React (classes, arrow functions, destructuring, modules).</li>
          <li>Create and render React components using JSX syntax.</li>
          <li>Work with React components, both class and functional.</li>
          <li>Handle component props and manage state effectively.</li>
          <li>Implement event handling and conditional rendering.</li>
          <li>Work with lists and use keys correctly in rendering.</li>
          <li>Build and handle forms in React applications.</li>
          <li>Use React Router to implement navigation.</li>
          <li>Utilize React Hooks: useState, useEffect, useContext, useRef, and more.</li>
          <li>Improve performance with React Memo.</li>
          <li>Style components using CSS and Sass.</li>
          <li>Create custom hooks to reuse logic across components.</li>
        </ul>

        <p className="pb-5">
          <strong>Note:</strong> Are you a teacher? W3Schools Academy provides classroom features, pre-built study plans, progress tracking tools, and more to help educators teach React effectively.
        </p>

        <h2 className="text-2xl font-semibold pt-4 pb-3">Which Subjects Are React Relevant For?</h2>
        <ul className="list-disc ml-6 space-y-2 pb-2">
          <li><strong>Web Development:</strong> Build interactive and modern web apps.</li>
          <li><strong>Front-end Development:</strong> Use React as a leading UI library.</li>
          <li><strong>Single Page Applications:</strong> Create dynamic and seamless SPA experiences.</li>
          <li><strong>User Interface Design:</strong> Build with reusable and modular components.</li>
          <li><strong>Web Applications:</strong> Ideal for responsive and interactive web apps.</li>
          <li><strong>Mobile Development:</strong> React Native allows mobile development using React.</li>
          <li><strong>Modern JavaScript Development:</strong> Embrace modern JS practices in React projects.</li>
        </ul>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* References Section */}
      <div className="px-1 my-10">
        <h1 className="text-3xl font-semibold pb-4">React References</h1>
        <p className="max-w-3xl pb-5">
          Use these resources as checkpoints throughout your React learning journey.
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

export default ReactSyllabus;
