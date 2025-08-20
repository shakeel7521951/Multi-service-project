import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";

const Html_Quiz = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
      })
      .catch(() => {
        alert("Failed to copy. Please copy manually.");
      });
  };

  const paragraphExample = `<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`;

  const hrExample = `<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr>
<h2>This is heading 2</h2>
<p>This is some other text.</p>
<hr>`;

  const preExample = `<pre>
  My Bonnie lies over the ocean.
  My Bonnie lies over the sea.
  My Bonnie lies over the ocean.
  Oh, bring back my Bonnie to me.
</pre>`;

  const brExample = `<p>This is<br>a paragraph<br>with line breaks.</p>`;

  // === HTML QUIZ DATA ===
  const quizQuestions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Mark Language",
        "HighText Machine Language"
      ],
      correctAnswer: 0
    },
    {
      question: "Which HTML tag is used to define a paragraph?",
      options: ["<div>", "<p>", "<span>", "<h1>"],
      correctAnswer: 1
    },
    {
      question: "What does the <br> tag do?",
      options: [
        "Creates a new section",
        "Breaks a line",
        "Bold the text",
        "Changes font"
      ],
      correctAnswer: 1
    },
    {
      question: "Which tag is used to display a horizontal rule?",
      options: ["<hr>", "<line>", "<break>", "<hline>"],
      correctAnswer: 0
    },
    {
      question: "Which tag preserves whitespace and line breaks?",
      options: ["<code>", "<p>", "<pre>", "<span>"],
      correctAnswer: 2
    }
  ];

  const [userAnswers, setUserAnswers] = useState(Array(quizQuestions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (questionIndex, optionIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const handleSubmitQuiz = () => {
    if (submitted) {
      // Reset
      setUserAnswers(Array(quizQuestions.length).fill(null));
      setSubmitted(false);
      setScore(0);
      return;
    }

    const newScore = userAnswers.reduce((acc, answer, index) => {
      return answer === quizQuestions[index].correctAnswer ? acc + 1 : acc;
    }, 0);

    setScore(newScore);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Quiz</h1>
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
        {/* Existing content omitted for brevity — keep as-is */}
        {/* Add the HTML Quiz below: */}

        <section className="text-gray-800 mt-10">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <FaRegQuestionCircle className="text-[#04AA6D]" />
            HTML Quiz
          </h2>
          <p className="mb-4">
            Test your knowledge of basic HTML. Choose the correct answer for each question below.
          </p>

          {quizQuestions.map((q, qIdx) => (
            <div key={qIdx} className="mb-6 border p-4 rounded-lg bg-[#F9FAFB]">
              <h3 className="font-semibold mb-2">{qIdx + 1}. {q.question}</h3>
              <div className="space-y-2">
                {q.options.map((opt, optIdx) => (
                  <label key={optIdx} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`question-${qIdx}`}
                      value={optIdx}
                      disabled={submitted}
                      checked={userAnswers[qIdx] === optIdx}
                      onChange={() => handleOptionChange(qIdx, optIdx)}
                      className="accent-[#04AA6D]"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          {submitted && (
            <div className="mt-6 text-lg font-semibold">
              You scored {score} out of {quizQuestions.length}.
            </div>
          )}

          <button
            onClick={handleSubmitQuiz}
            className="mt-6 bg-[#04AA6D] hover:bg-[#03945f] text-white font-bold text-lg px-8 py-3 rounded-full transition"
          >
            {submitted ? "Retake Quiz" : "Submit Quiz"}
          </button>
        </section>

        <div className="flex justify-end mt-16">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Html_Quiz;
