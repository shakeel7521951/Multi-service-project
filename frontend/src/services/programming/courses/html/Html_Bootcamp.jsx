import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Bootcamp = () => {
  return (
    <div className="bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          W3Schools HTML Bootcamp
        </h1>
        
                <div className="flex justify-between mb-10">
                  <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
                    <FaChevronLeft />
                    Previous
                  </button>
                  <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
                    Next
                    <FaChevronRight />
                  </button>
                </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          HTML & CSS Bootcamp
        </h2>
        <p className="mb-4 text-gray-700">
          Learn Front-end with W3Schools. Self-paced online courses.
        </p>
        <p className="mb-6 text-gray-700 font-medium">
          <strong>Duration:</strong> Around 80 hours.
        </p>
        <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-8 mb-10 transition cursor-pointer">
          Learn More
        </button>

        {/* What You Will Learn */}
        <section className="mb-10">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            What You Will Learn
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-800">
            <div className="bg-[#E7E9EB] hover:bg-[#D9EEE1] p-5 rounded-2xl">
              <h4 className="text-xl font-semibold mb-2">HTML</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Use HTML5 to build a website.</li>
                <li>Format text, add graphics, links, forms, tables, etc.</li>
                <li>Save it in a text file readable by any browser.</li>
              </ul>
            </div>
            <div className="bg-[#E7E9EB] hover:bg-[#D9EEE1] p-5 rounded-2xl">
              <h4 className="text-xl font-semibold mb-2">CSS</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Style and layout multiple web pages.</li>
                <li>Control appearance and layout of your site.</li>
              </ul>
            </div>
            <div className="bg-[#E7E9EB] hover:bg-[#D9EEE1] p-5 rounded-2xl">
              <h4 className="text-xl font-semibold mb-2">JavaScript</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Program page behavior and interactivity.</li>
                <li>Change content and style dynamically.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Course Description */}
        <section className="mb-10 text-gray-800">
          <h3 className="text-2xl font-semibold mb-4">Self-paced Courses</h3>
          <p className="mb-4">
            Start learning Front-end with the W3Schools program and lay the
            foundations of your Web Development skills. This program is a great
            foundation for anyone who wants to start Front-end Development. It
            covers HTML, CSS, and JavaScript.
          </p>
          <p className="mb-4">
            <strong>HTML</strong> is the standard markup language for Web pages.
            With HTML you can create your own website.
          </p>
          <p className="mb-4">
            <strong>CSS</strong> is the language used to style HTML documents.
            It describes how HTML elements should be displayed.
          </p>
          <p className="mb-4">
            <strong>JavaScript</strong> is the programming language of the Web.
          </p>
          <p className="mb-4">
            This program is an interactive version of the W3Schools HTML, CSS,
            and JavaScript tutorials with certification.
          </p>
          <p>
            Courses are self-paced, text-based with interactive examples,
            exercises, and certification exams.
          </p>
        </section>

        {/* What You Get */}
        <section className="mb-10 text-gray-800">
          <h3 className="text-2xl font-semibold mb-4">What You Get</h3>
          <p className="mb-2">4x Certifications:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Certified HTML Developer</li>
            <li>Certified CSS Developer</li>
            <li>Certified JavaScript Developer</li>
            <li>Certified Front End Developer</li>
          </ul>
        </section>

        {/* How it Works */}
        <section className="mb-10 text-gray-800">
          <h3 className="text-2xl font-semibold mb-4">How it Works</h3>
          <ol className="list-decimal list-inside space-y-4 text-sm">
            <li>
              <strong>Course enrollment:</strong> Enroll by paying the fee to
              access the course and final exam. No deadline to take the exam.
            </li>
            <li>
              <strong>Complete the modules:</strong> Go through the self-paced
              modules with text, examples, and exercises to unlock the final
              exam.
            </li>
            <li>
              <strong>Take the exams:</strong> Exams are unlocked after course
              completion. You'll receive your score and pass/fail status
              instantly. Three attempts per exam.
            </li>
            <li>
              <strong>Become certified:</strong> Pass the exams and receive your
              unique certification link and title. Certificates can be shared
              and verified.
            </li>
          </ol>
        </section>

        <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-8 transition cursor-pointer">
          Learn More
        </button>
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

export default Html_Bootcamp;
