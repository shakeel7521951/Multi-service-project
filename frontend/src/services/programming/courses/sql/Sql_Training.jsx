import { FaChevronLeft, FaChevronRight, FaChartLine, FaClock, FaGlobe, FaCertificate, FaTasks, FaLaptopCode, FaDollarSign, FaCheckCircle } from "react-icons/fa";

const Sql_Training = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-[#04AA6D]">SQL Training</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            SQL is a standard language for storing, manipulating and retrieving data in databases.
            W3Schools offers a complete SQL training course with certification.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft /> Back
          </button>
        </div>

        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Why Choose SQL Training?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#D9EEE1] rounded-lg shadow flex flex-col items-center text-center">
              <FaChartLine className="text-3xl text-[#04AA6D] mb-3" />
              <h3 className="font-semibold text-lg">Track Progress</h3>
              <p className="text-gray-700 text-sm mt-2">Analytics to track learner progress and results.</p>
            </div>
            <div className="p-6 bg-[#D9EEE1] rounded-lg shadow flex flex-col items-center text-center">
              <FaClock className="text-3xl text-[#04AA6D] mb-3" />
              <h3 className="font-semibold text-lg">Self-paced</h3>
              <p className="text-gray-700 text-sm mt-2">Flexible timelines to match busy schedules.</p>
            </div>
            <div className="p-6 bg-[#D9EEE1] rounded-lg shadow flex flex-col items-center text-center">
              <FaGlobe className="text-3xl text-[#04AA6D] mb-3" />
              <h3 className="font-semibold text-lg">Globally Recognized</h3>
              <p className="text-gray-700 text-sm mt-2">Certifications trusted by leading organizations worldwide.</p>
            </div>
          </div>
        </section>

        {/* Certification */}
        <section className="bg-[#E7E9EB] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FaCertificate className="text-[#04AA6D]" /> Certified SQL Developer
          </h2>
          <p className="text-gray-700 mb-4">
            After completing the course modules, learners take a multiple-choice exam (60 questions, 60 minutes). 
            Passing earns the <strong>Certified SQL Developer</strong> certification — valid for a lifetime, shareable on CVs and LinkedIn.
          </p>
        </section>

        {/* Learning Outcomes */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Learning Outcomes</h2>
          <ul className="space-y-2 text-gray-800">
            {[
              "Understand what SQL is and why you would use it.",
              "Create and manage databases and tables.",
              "Insert, update, and delete data in tables.",
              "Use SELECT with WHERE and ORDER BY.",
              "Use JOIN to combine data from multiple tables.",
              "Use functions like SUM, AVG, COUNT.",
              "Create table relationships with foreign keys.",
              "Understand subqueries and indexes.",
              "Manage user permissions and security."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FaCheckCircle className="text-[#04AA6D] mt-1" /> {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Interactive Learning */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FaLaptopCode className="text-[#04AA6D]" /> Interactive Learning
          </h2>
          <p className="text-gray-700 mb-4">
            Stay engaged with quizzes, coding challenges, and exercises. Get instant feedback with auto-grading, 
            plus personalized guidance with manual grading.
          </p>
        </section>

        {/* Pricing & Overview */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FaDollarSign className="text-[#04AA6D]" /> Training Course Overview
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left text-sm">
              <tbody>
                {[
                  ["Pricing Academy", "$5.99 / month per learner"],
                  ["Availability", "For companies and schools only"],
                  ["Course level", "Beginner"],
                  ["Time to complete", "48 hours on average"],
                  ["Course Format", "Self-paced"],
                  ["Language", "English"],
                  ["Exam & Certification", "Included"],
                  ["Certificate name", "Certified SQL Developer"],
                  ["Exam format", "Multiple choice"],
                  ["Certification Expiration", "Never"]
                ].map(([label, value], idx) => (
                  <tr key={idx} className="border-b">
                    <td className="px-4 py-2 font-semibold bg-gray-50">{label}</td>
                    <td className="px-4 py-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How to Get Started */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FaTasks className="text-[#04AA6D]" /> How to Get Started
          </h2>
          <ol className="space-y-4 text-gray-700 list-decimal list-inside">
            <li>Purchase W3Schools Academy access for your organization</li>
            <li>Create a class and invite your learners</li>
            <li>Assign the SQL course to your class</li>
            <li>Monitor learner progress through the admin dashboard</li>
            <li>Review analytics and certification results</li>
          </ol>
        </section>

        {/* Navigation Bottom */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sql_Training;
