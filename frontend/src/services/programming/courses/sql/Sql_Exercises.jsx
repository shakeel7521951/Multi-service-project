import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Exercises = () => {
  const exercises = [
    "Syntax",
    "Select",
    "Select Distinct",
    "Where",
    "Order By",
    "And / Or / Not",
    "Insert Into",
    "Null Values",
    "Update",
    "Delete",
    "Select Top",
    "Min and Max",
    "Count",
    "Sum",
    "Avg",
    "Like",
    "Wildcards",
    "In",
    "Between",
    "Aliases",
    "Joins",
    "Inner Join",
    "Left Join",
    "Right Join",
    "Full Join",
    "Self Join",
    "Union",
    "Group By",
    "Having",
    "Exists",
    "Any, All",
    "Select Into",
    "Insert Into Select",
    "CASE Expression",
    "NULL Functions",
    "Stored Procedures",
    "Comments",
    "Operators",
    "Create Database",
    "Drop Database",
    "Backup Database",
    "Create Table",
    "Drop Table",
    "Alter Table",
    "Constraints",
    "Not Null",
    "Unique",
    "Primary Key",
    "Foreign Key",
    "Check",
    "Default",
    "Create Index",
    "Auto Increment",
    "Dates",
    "View",
    "Injection",
    "Hosting",
    "Data Types",
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold mb-3">SQL Exercises</h1>
          <p className="text-gray-600 text-lg">
            Test your SQL skills with hands-on exercises from all categories.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Exercises Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Exercises by Topic</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {exercises.map((exercise, idx) => (
              <div
                key={idx}
                className="bg-[#D9EEE1] hover:bg-[#c5e7d3] text-gray-900 font-semibold text-center p-4 rounded-lg shadow cursor-pointer transition"
              >
                {exercise}
              </div>
            ))}
          </div>
        </section>

        {/* Extra Info */}
        <section className="bg-[#E7E9EB] p-8 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-bold">Log in to track your progress</h2>
          <p className="text-gray-700">
            If you haven't already, sign up to become a{" "}
            <strong>W3Schooler</strong>, and get points for every exercise you
            complete.
          </p>
          <p className="text-gray-700">
            As a logged-in W3Schools user you will have access to many features
            like:
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>Your own personal web page</li>
            <li>Track your learning progress</li>
            <li>Receive guided learning paths</li>
            <li>And much more!</li>
          </ul>
          <button className="mt-4 bg-[#04AA6D] text-white px-6 py-2 font-semibold rounded-lg hover:bg-[#03945f] transition">
            Sign Up / Log In
          </button>
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

export default Sql_Exercises;
