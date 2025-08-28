import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_StudyPlan = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold mb-3">SQL Study Plan</h1>
          <p className="text-gray-600 text-lg">
            The SQL study plan helps you teach SQL step-by-step with timelines,
            teacher resources, and student progress tracking.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Introduction */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Introduction</h2>
          <p className="text-gray-700">
            Creating a study plan for SQL is easy. You can use a{" "}
            <strong>pre-built study plan</strong> or customize it. Students have
            different skill levels, so the plans can be adjusted to ensure
            everyone is challenged.
          </p>
          <p className="text-gray-700">
            Save time with pre-built teacher materials and study plans. Easily
            organize your class with a timeline from introduction to the final
            exam.
          </p>
        </section>

        {/* W3Schools Academy */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow space-y-3">
          <h2 className="text-2xl font-bold">W3Schools Academy</h2>
          <p className="text-gray-700">
            The study plan is a feature of <strong>W3Schools Academy</strong>, a
            platform that gives teachers all the tools needed to teach coding in
            one place.
          </p>
          <p className="text-gray-700">
            You need an active subscription to access the study plan feature:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Essentials: <strong>$1.99 / month per student</strong></li>
            <li>Full Access: <strong>$5.99 / month per student</strong></li>
          </ul>
          <p className="text-gray-700">
            Academy also includes: classroom management, student tracking,
            prebuilt labs and challenges, auto-grading, teaching materials, and
            certification exams.
          </p>
        </section>

        {/* Teacher Materials */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Teacher Materials</h2>
          <p className="text-gray-700 mb-4">
            W3Schools provides everything you need to teach SQL:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>W3Schools SQL Tutorial</li>
            <li>SQL Exercises</li>
            <li>SQL Quiz</li>
            <li>SQL Challenges</li>
            <li>SQL Certification Exam</li>
            <li>SQL Syllabus</li>
          </ul>
          <p className="text-gray-700 mt-2">
            The syllabus takes students from database basics to advanced topics
            like joins, aggregate functions, and database design.
          </p>
        </section>

        {/* Study Plan Features */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#E7E9EB] p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Learning Paths</h3>
            <p className="text-gray-700">
              Add ready-made or custom learning paths. Drag-and-drop to
              rearrange and include activities like text, links, or multimedia.
            </p>
          </div>
          <div className="bg-[#E7E9EB] p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Interactive Content</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Tutorials & Try-its</li>
              <li>Exercises & Quizzes</li>
              <li>Challenges & Labs</li>
            </ul>
          </div>
          <div className="bg-[#E7E9EB] p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Timeline & Pace</h3>
            <p className="text-gray-700">
              Choose flexible plans (4, 8, 12, or 24 weeks) and adjust pace per
              student. Assign different study paths for different levels.
            </p>
          </div>
          <div className="bg-[#E7E9EB] p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Track Progress</h3>
            <p className="text-gray-700">
              Monitor progress with analytics: chapter results, exercises,
              quizzes, and exams. Auto-grading available.
            </p>
          </div>
        </section>

        {/* Sample Plan */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Sample Study Plan</h2>
          <p className="text-gray-700 mb-4">
            Example 4-week SQL study plan:
          </p>
          <ul className="list-decimal list-inside space-y-1 text-gray-800">
            <li>Week 1: Basic Syntax, Queries</li>
            <li>Week 2: Data Manipulation, Functions & Operators</li>
            <li>Week 3: Joins, Database Design, Constraints & Keys</li>
            <li>Week 4: SQL Certification Exam</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
          <p className="text-gray-700">
            Start using SQL Study Plans today with W3Schools Academy.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-6 py-2 rounded-lg font-semibold transition">
            Start Now
          </button>
        </section>

        {/* Teacher Demo */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">Are You a Teacher?</h2>
          <p className="text-gray-700">
            Learn how W3Schools Academy can help you teach SQL programming.
            Watch a demo to see how it works and discover how it makes teaching
            easier and more engaging.
          </p>
        </section>

        {/* Navigation Bottom */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#03945f] transition">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sql_StudyPlan;
