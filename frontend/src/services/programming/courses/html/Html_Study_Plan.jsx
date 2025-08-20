import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Study_Plan = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Study Plan</h1>

        <div className="flex justify-between mb-10">
          <button
            type="button"
            aria-label="Previous"
            className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer"
          >
            <FaChevronLeft />
            Previous
          </button>
          <button
            type="button"
            aria-label="Next"
            className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer"
          >
            Next
            <FaChevronRight />
          </button>
        </div>

        <section className="text-gray-800 space-y-10">

          <div>
            <h2 className="text-3xl font-bold mb-4">Introduction</h2>
            <p className="mb-4">The HTML study plan helps you teach your students HTML step-by-step.</p>
            <p className="mb-4">Creating a study plan for HTML is easy. You can use a pre-built study plan or customize it.</p>
            <p className="mb-4">Students have different skill levels. The study plans can be customized to ensure that everyone is challenged.</p>
            <p className="mb-4">Save time with pre-built teacher materials and study plans. Easily organize your class with a timeline from the introduction of HTML to the final exam.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">W3Schools Academy</h2>
            <p className="mb-4">This study plan is a feature of W3Schools Academy.</p>
            <p className="mb-4">W3Schools Academy is a platform that has everything you need to teach coding, all in one place.</p>
            <p className="mb-4">It offers you as a teacher a toolbox of features that helps you succeed with teaching in your classroom.</p>
            <p className="mb-4">You need to have an active subscription to access the study plan feature. There are two different subscription tiers:</p>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Essentials ($1.99 / month per student)</li>
              <li>Full Access ($5.99 / month per student)</li>
            </ul>
            <a href="#" className="text-[#04AA6D] font-medium hover:underline">Calculate your price and order here.</a>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Study Plan Overview</h2>
            <p className="mb-4">The study plan features are made to help teachers and students. They make learning easy, flexible, and fun. These features work for different types of classes, learning styles and student levels.</p>
            
            <h3 className="text-2xl font-semibold mb-2">Learning Paths</h3>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>You can add ready-made learning paths.</li>
              <li>Paths are ordered by default but can be rearranged.</li>
              <li>You can add custom activities with text, links, or multimedia files.</li>
              <li>Use drag and drop or click to make changes.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-2">Interactive Content</h3>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Tutorials</li>
              <li>Try-its (test code snippets)</li>
              <li>Exercises</li>
              <li>Quiz</li>
              <li>Challenges</li>
              <li>Labs</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-2">Timeline and Pace</h3>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Set a timeline (e.g., 4-week, 8-week, 12-week, 24-week plans).</li>
              <li>Control learning pace per class or student.</li>
              <li>Flexible pacing ensures all students are challenged.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-2">Track Student Progress</h3>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Monitor progress with analytics tools.</li>
              <li>View chapter, exercise, quiz, and exam results.</li>
              <li>Challenges can be auto or manually graded.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-2">End of Pathway Exam</h3>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Study plan aligns with the HTML Certification Exam.</li>
              <li>Exam date is customizable by you.</li>
              <li>You receive reports on student performance.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-2">Accessibility</h3>
            <p className="mb-4">Study plans and materials work on desktops, tablets, and smartphones — so students can learn anytime, anywhere.</p>
          </div>

          <a href="#" className="text-[#04AA6D] font-medium hover:underline block">Learn More</a>

          <div>
            <h2 className="text-3xl font-bold mb-4">Sample Study Plan</h2>
            <p className="mb-4">You choose the timeline and pace of your study plans.</p>
            <p className="mb-4">Schools have different preferences. Some prefer a 4-week intensive plan, others a longer 12-week format.</p>
            <p className="mb-4">Here is an example of a 4-week plan:</p>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li><strong>Week 1:</strong> Introduction and Basics, Formatting and Style, Colors, Links</li>
              <li><strong>Week 2:</strong> Images, Tables, Lists</li>
              <li><strong>Week 3:</strong> More HTML Elements, Logic, Forms</li>
              <li><strong>Week 4:</strong> Graphics, Media, APIs, HTML Certification Exam</li>
            </ul>
          </div>

          <div className="text-center mt-10">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-3 px-12 text-lg transition cursor-pointer">
              Get Started
            </button>
          </div>

        </section>

        <div className="flex justify-end mt-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Html_Study_Plan;
