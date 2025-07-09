import React from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const ReactQuiz = () => {
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
          <h1 className="text-4xl">React Quiz</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
        <div className="flex justify-between">
          <div className="flex px-3 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Home
          </div>
        </div>
      </div>

      <div className="px-5 bg-[#D9EEE1] mt-5 py-10 rounded-md">
        <p className="pb-3">
          You can test your React skills with W3Schools' interactive quiz.
        </p>
        <h1 className="text-2xl font-semibold pb-3">The Test</h1>
        <ul className="flex flex-col gap-3 mb-5">
          <li>The test includes 25 questions covering React concepts.</li>
          <li>There is no time limit, so you can take your time.</li>
          <li>It's a great way to check how much you know about React.</li>
        </ul>

        <h1 className="text-2xl font-semibold pb-3 mt-6">Count Your Score</h1>
        <ul className="flex flex-col gap-3 mb-5">
          <li>Each correct answer gives you 1 point.</li>
          <li>The total maximum score is 25.</li>
          <li>Your final score is shown at the end of the quiz.</li>
        </ul>

        <p className="pb-3">
          If you don't know React well, we recommend going through the React Tutorial first.
        </p>

        <div className="flex px-6 w-fit cursor-pointer py-3 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
          Start the Quiz
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </div>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* References Section */}
      <div className="px-1 my-10">
        <h1 className="text-3xl font-semibold pb-4">React References</h1>
        <p className="max-w-3xl pb-5">
          Review the React topics covered in the quiz to improve your score.
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

export default ReactQuiz;
