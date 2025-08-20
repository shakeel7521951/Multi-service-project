import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CssStudyPlan = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const samplePlan = `
Week 1: Introduction, Colors, Backgrounds
Week 2: Borders, Margins Padding & Directions, Outline, Text
Week 3: Fonts, Icons, Links, Lists, Tables
Week 4: Visibility and Layouts, Float, Selectors, Image Sprites, Properties, Navigation Bar Demos, Demos
Week 5: Advanced, Gradients, Shadows, Variables, Flexbox, Responsive, Grid, CSS Certification Exam
  `;

  const copyText = () => {
    navigator.clipboard.writeText(samplePlan).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const refArray = [
    { id: 1, name: "CSS Properties", link: "/css/cssProperties" },
    { id: 2, name: "CSS Browser Support", link: "/css/cssbrowseSupport" },
    { id: 3, name: "CSS Selectors", link: "/css/cssSelectors" },
    { id: 4, name: "CSS Combinators", link: "/css/cssCombinators" },
    { id: 5, name: "CSS Pseudo-classes", link: "/css/cssPseudoClasses" },
    { id: 6, name: "CSS Pseudo-elements", link: "/css/cssPseudoElements" },
    { id: 7, name: "CSS At-rules", link: "/css/cssAtRules" },
    { id: 8, name: "CSS Functions", link: "/css/cssFunctions" },
    { id: 9, name: "CSS Web Safe Fonts", link: "/css/cssWebSafeFonts" },
    { id: 10, name: "CSS Units", link: "/css/cssUnits" },
    { id: 11, name: "Px to Em Conversion", link: "/css/pxToEmConversion" },
    { id: 12, name: "CSS Colors", link: "/css/cssColors" },
    { id: 13, name: "CSS Animatable", link: "/css/cssAnimatable" },
    { id: 14, name: "CSS Default Values", link: "/css/cssDefaultValues" },
    { id: 15, name: "CSS Entities", link: "/css/cssEntities" },
  ];

  return (
    <div className="px-4">
      {/* Hero Section */}
      <div className="mt-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl">CSS Study Plan</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
        <div className="flex justify-between">
          <div className="flex px-3 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Home
          </div>
        </div>
      </div>

      <div className="px-5 bg-[#D9EEE1] mt-5 py-10 rounded-md space-y-5">
        <h2 className="text-2xl font-semibold">Introduction</h2>
        <p>The CSS study plan helps you teach your students CSS step-by-step.</p>
        <p>Creating a study plan for CSS is easy.</p>
        <p>You can use a pre-built study plan or customize it.</p>
        <p>
          Students have different skill levels. The study plans can be customized to ensure that everyone is challenged.
        </p>
        <p>
          Save time with pre-built teacher materials and study plans. Easily organize your class with a timeline from the introduction of CSS to the final exam.
        </p>

        <h2 className="text-2xl font-semibold">W3Schools Academy</h2>
        <p>This study plan is a feature of W3Schools Academy.</p>
        <p>
          W3Schools Academy is a platform that has everything you need to teach coding, all in one place.
        </p>
        <p>
          It offers you as a teacher a toolbox of features that helps you succeed with teaching in your classroom.
        </p>
        <p>
          You need to have an active subscription to access the study plan feature. There are two different subscription tiers:
        </p>
        <ul className="list-disc list-inside">
          <li>Essentials ($1.99 / month per student)</li>
          <li>Full Access ($5.99 / month per student)</li>
        </ul>
        <p>Calculate your price and order here.</p>
        <p>Academy also offer other features such as:</p>
        <ul className="list-disc list-inside">
          <li>Managing your classroom</li>
          <li>Tracking of student progress and reports</li>
          <li>Labs, assignments, and code challenges (prebuilt challenges or create your own ones)</li>
          <li>Auto-grading</li>
          <li>Teaching materials</li>
          <li>Certification exams</li>
        </ul>

        <h2 className="text-2xl font-semibold">Teacher Materials</h2>
        <p>W3Schools has everything you need to teach CSS.</p>
        <p>The CSS training materials is available for you to include and use in your study plan:</p>
        <ul className="list-disc list-inside">
          <li>W3Schools CSS Tutorial</li>
          <li>CSS Exercises</li>
          <li>CSS Quiz</li>
          <li>CSS Challenges (Coding challenges)</li>
          <li>CSS Certification Exam (End of Pathway Exam)</li>
          <li>CSS Syllabus</li>
        </ul>
        <p>
          With the CSS Syllabus, your students will start with the basics, like styling text and changing colors, and move to more advanced topics, like creating layouts with Flexbox, Grid, and responsive design. Each chapter has examples, try-it-yourself sections, exercises, and quizzes to make learning easy, interactive, and fun.
        </p>
        <p>Read more about CSS Syllabus.</p>

        <h2 className="text-2xl font-semibold">Study Plan Overview</h2>
        <p>
          The study plan features are made to help teachers and students. They make learning easy, flexible, and fun. These features work for different types of classes, learning styles and student level.
        </p>

        <h3 className="text-xl font-semibold">Learning Paths</h3>
        <ul className="list-disc list-inside">
          <li>You can add ready-made learning paths.</li>
          <li>The learning paths are by default ordered by our recommended order.</li>
          <li>You can change the order.</li>
          <li>You can add custom activities with text, links, or multi-media files.</li>
          <li>Drag and drop or click to make changes to the path.</li>
        </ul>

        <h3 className="text-xl font-semibold">Interactive Content</h3>
        <ul className="list-disc list-inside">
          <li>Tutorials</li>
          <li>Try-its (test code snippets)</li>
          <li>Exercises</li>
          <li>Quiz</li>
          <li>Challenges</li>
          <li>Labs</li>
        </ul>

        <h3 className="text-xl font-semibold">Timeline and Pace</h3>
        <ul className="list-disc list-inside">
          <li>You can set a timeline of your study plan (e.g., 4-week, 8-week, 12-week, 24-week plans).</li>
          <li>You can decide the learning pace for your class.</li>
          <li>Different study plans can be assigned to different students in the same class.</li>
          <li>The flexibility can help to make sure that everyone is challenged.</li>
        </ul>

        <h3 className="text-xl font-semibold">Track Student Progress</h3>
        <p>There are tools to track student progress.</p>
        <p>
          The analytic tools include: chapter progress, exercises results, quiz results, exam results, and much more.
        </p>
        <p>
          The challenges can be auto-graded or manually graded. The results are available to you as a teacher.
        </p>

        <h3 className="text-xl font-semibold">End of Pathway Exam</h3>
        <p>
          The CSS study plan aligns with the CSS Certification Exam.
        </p>
        <p>
          The exam can be taken at the end of the study plan, at your selected date.
        </p>
        <p>The exam summarizes the CSS Tutorial.</p>
        <p>You get reports of the students' results.</p>

        <h3 className="text-xl font-semibold">Accessibility</h3>
        <p>
          Study plans and learning materials are accessible on desktops, tablets, and smartphones.
        </p>
        <p>This ensures students can learn anytime, anywhere.</p>

        <h2 className="text-2xl font-semibold">Sample Study Plan</h2>
        <p>
          You choose the timeline and pace of your study plans.
        </p>
        <p>Schools have different preferences.</p>
        <p>Some would like more intensive pace, e.g. 5 weeks, others 12 or more weeks.</p>
        <p>It is completely up to you.</p>
        <p>For example, this is how a 5-week CSS study plan could look like:</p>

        <pre className="bg-white text-black font-mono text-sm whitespace-pre-wrap px-6 py-5 mt-3 rounded-md">
          {samplePlan}
        </pre>

        <button
          onClick={copyText}
          className="flex items-center my-3 px-5 py-2 text-xl font-semibold rounded-lg bg-[#03945F] text-white cursor-pointer transition-colors"
        >
          {copySuccess ? "Copied!" : "Copy text"}
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </button>

        <p>Ready to get started?</p>
        <p>Start with CSS Study Plans today.</p>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* References Section */}
      <div className="px-1 my-10">
        <h1 className="text-3xl font-semibold pb-4">CSS References</h1>
        <p className="max-w-3xl pb-5">
          At W3Schools you will find complete CSS references of all properties
          and selectors with syntax, examples, browser support, and more.
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

        {/* Buttons */}
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

export default CssStudyPlan;
