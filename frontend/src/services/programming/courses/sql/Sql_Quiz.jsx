import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Quiz = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold mb-3">SQL Quiz</h1>
          <p className="text-gray-600 text-lg">
            You can test your SQL skills with W3Schools' interactive quiz.  
            A great way to measure how much you know (or don’t know) about SQL.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* The Test Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">The Test</h2>
          <p className="text-gray-700 mb-3">
            The quiz contains <strong>25 questions</strong> and there is <strong>no time limit</strong>.
          </p>
          <p className="text-gray-700">
            This test is not official — it’s just a fun way to see how much SQL you know.
          </p>
        </section>

        {/* Scoring Section */}
        <section className="bg-[#E7E9EB] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Count Your Score</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>You will get <strong>1 point</strong> for each correct answer.</li>
            <li>Your total score will be displayed at the end of the quiz.</li>
            <li>Maximum possible score: <strong>25 points</strong>.</li>
          </ul>
        </section>

        {/* Start Quiz Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold mb-4">Start the Quiz</h2>
          <p className="text-gray-700 mb-6">Good luck! 🍀</p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition">
            Start Quiz
          </button>
        </section>

        {/* Navigation Bottom */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sql_Quiz;
