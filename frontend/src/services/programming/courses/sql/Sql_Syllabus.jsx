import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Syllabus = () => {
  const modules = [
    "SQL Introduction", "SQL Syntax", "SQL SELECT", "SQL SELECT DISTINCT",
    "SQL WHERE", "SQL ORDER BY", "SQL AND, OR, NOT", "SQL INSERT INTO",
    "SQL NULL Values", "SQL UPDATE", "SQL DELETE", "SQL SELECT TOP",
    "Aggregate Functions", "SQL MIN and MAX", "SQL COUNT, AVG, SUM",
    "SQL LIKE", "SQL Wildcards", "SQL IN", "SQL BETWEEN", "SQL Aliases",
    "SQL Joins", "SQL INNER JOIN", "SQL LEFT JOIN", "SQL RIGHT JOIN",
    "SQL FULL JOIN", "SQL Self Join", "SQL UNION", "SQL GROUP BY",
    "SQL HAVING", "SQL EXISTS", "SQL ANY and ALL", "SQL SELECT INTO",
    "SQL INSERT INTO SELECT", "SQL CASE", "SQL NULL Functions",
    "SQL Stored Procedures", "SQL Comments", "SQL Operators", "SQL Database",
    "SQL Drop DB", "SQL Backup DB", "SQL CREATE TABLE", "SQL Drop Table",
    "SQL Alter Table", "SQL Constraints", "SQL Unique", "SQL Primary Key",
    "SQL CHECK Constraint", "SQL Default Constraint",
    "SQL Create Index Statement", "SQL Auto Increment", "SQL Dates",
    "SQL Views", "SQL Injections", "SQL Hosting", "SQL Data Types"
  ];

  const subjects = [
    { field: "Information Technology (IT)", desc: "SQL is used to run and manage databases and IT systems." },
    { field: "Computer Science (CS)", desc: "Learn database management and data structures." },
    { field: "Data Science", desc: "SQL is foundational for data analysis and handling of big data." },
    { field: "Mathematics", desc: "Organize and analyze data." },
    { field: "Business and Management", desc: "SQL supports reporting and data-driven decision making." },
    { field: "Economics and Finance", desc: "Pull raw data, manage financial data, reporting, risk analysis." },
    { field: "Statistics", desc: "Collecting and processing of large data sets." },
    { field: "Science", desc: "Research and analysis of experimental data (Biology, Chemistry, etc.)." },
    { field: "Retail and E-commerce", desc: "Inventory, supply chain, sales analysis, customer DB management." },
    { field: "Other (Healthcare, Education, Engineering)", desc: "User record systems, quality control, data monitoring." }
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold mb-3">SQL Syllabus</h1>
          <p className="text-gray-600 text-lg">
            A step-by-step, beginner-friendly SQL curriculum by W3Schools. 
            Designed for newcomers, continuously updated, and proven by millions of learners.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft /> Back
          </button>
        </div>

        {/* Introduction */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Introduction</h2>
          <p className="text-gray-700">
            This syllabus gives you the foundation of SQL in small, simple, and understandable steps. 
            It requires no prior programming experience, and helps you move from the basics 
            to building your first SQL-driven applications.
          </p>
        </section>

        {/* Learning Outcomes */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-bold">Learning Outcomes</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Understand what SQL is and why it is used.</li>
            <li>Create and manage databases and tables.</li>
            <li>Insert, update, and delete records.</li>
            <li>Use SELECT with filters (WHERE) and sorting (ORDER BY).</li>
            <li>Combine data using JOINs.</li>
            <li>Group and summarize data with SUM, AVG, COUNT, etc.</li>
            <li>Work with foreign keys and relationships.</li>
            <li>Understand subqueries and indexes.</li>
            <li>Manage users, permissions, and data security.</li>
          </ul>
        </section>

        {/* Subjects */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Relevant Subjects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {subjects.map((s, idx) => (
              <div key={idx} className="bg-[#E7E9EB] p-5 rounded-lg shadow">
                <h3 className="font-semibold text-lg">{s.field}</h3>
                <p className="text-gray-700">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Activities */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Activities</h2>
          <p className="mb-4 text-gray-700">
            Practice makes perfect! Learn SQL through interactive activities:
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Lessons</li>
            <li>Exercises</li>
            <li>Quizzes</li>
            <li>Progress Tracking (when signed in)</li>
          </ul>
        </section>

        {/* Modules */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Overview of Modules</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((m, idx) => (
              <div key={idx} className="bg-[#D9EEE1] hover:bg-[#c5e7d3] text-gray-900 font-medium text-center p-4 rounded-lg shadow cursor-pointer transition">
                {m}
              </div>
            ))}
          </div>
        </section>

        {/* Sandbox */}
        <section className="bg-[#E7E9EB] p-8 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-bold">Sandbox & Lab Environment</h2>
          <p className="text-gray-700">
            Learn SQL hands-on in the browser. Use the W3Schools online SQL editor to 
            test queries in real-time, no installation required.
          </p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
            <code>SELECT * FROM Customers;</code>
          </pre>
          <p className="text-gray-700">
            With <strong>W3Schools Spaces</strong>, you can also test, build, and deploy projects 
            with hosting, SSL, collaboration, and analytics.
          </p>
        </section>

        {/* Certification */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-bold">SQL Certification</h2>
          <p className="text-gray-700">
            Validate your skills with the W3Schools Certified SQL Developer program.
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Non-adaptive: Pass/Fail</li>
            <li>Adaptive: Graded (Intermediate → Advanced → Professional)</li>
          </ul>
        </section>

        {/* Teacher Info */}
        <section>
          <h2 className="text-2xl font-bold mb-4">For Teachers</h2>
          <p className="text-gray-700">
            W3Schools Academy helps educators with study plans, classroom admin, 
            and guided learning paths for teaching SQL effectively.
          </p>
          <button className="mt-4 bg-[#04AA6D] text-white px-6 py-2 rounded-lg hover:bg-[#03945f] transition">
            Learn More About Academy
          </button>
        </section>

        {/* Navigation Bottom */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sql_Syllabus;
