import React from "react";
import { FaChevronRight } from "react-icons/fa";


const Html_Syllabus = () => {
  const htmlTopics = [
    "HTML HOME", "HTML Introduction", "HTML Editors", "HTML Basic", "HTML Elements", "HTML Attributes",
    "HTML Headings", "HTML Paragraphs", "HTML Styles", "HTML Formatting", "HTML Quotations", "HTML Comments",
    "HTML Colors", "HTML CSS", "HTML Links", "HTML Images", "HTML Page Title", "HTML Favicon", "HTML Tables",
    "HTML Lists", "HTML Block & Inline", "HTML Div Element", "HTML class Attribute", "HTML id Attribute",
    "HTML Iframes", "HTML JavaScript", "HTML File Paths", "HTML Head Element", "HTML Layout", "HTML Responsiv",
    "HTML Computercode", "HTML Semantics", "HTML Style Guide", "HTML Entities", "HTML Symbols", "HTML Emojis",
    "HTML Charset", "HTML URL Encode", "HTML vs. XHTML", "HTML Forms", "HTML From Attributes", "HTML Form Elements",
    "HTML Input Types", "HTML Input Attributes", "HTML Input Form Attributes", "HTML Canvas", "HTML SVG",
    "HTML Media", "HTML Video", "HTML Audio", "HTML Plug-ins", "HTML YouTube", "HTML Geolocation",
    "HTML Drag/Drop", "HTML Web Storage", "HTML Web Workers", "HTML SSE"
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-gray-900">HTML Syllabus</h1>

        {/* Intro */}
        <p className="mb-4 text-gray-700">
          The W3Schools HTML Tutorial is comprehensive and beginner-friendly. It will give you a fundamental knowledge of HTML. It is designed for beginners and requires no prior experience with programming. The content is bite-sized, simple, and proven effective. Millions have used it, and it’s updated regularly.
        </p>
        <p className="mb-6 text-gray-700">
          The syllabus is structured to help you learn HTML step by step — from the introduction to building your first full application.
        </p>

        {/* Get Started Button */}
        <div className="mb-10">
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-6 py-2 rounded-md font-semibold transition">
            Get Started
          </button>
        </div>

        {/* Module Overview Grid */}
        <h2 className="text-3xl font-bold mb-4">Overview of the Modules</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 text-gray-800">
          {htmlTopics.map((topic, index) => (
            <div
              key={index}
              className="bg-[#F3F4F6] hover:bg-[#D9EEE1] p-3 text-center rounded-md shadow text-sm font-medium transition cursor-pointer"
            >
              {topic}
            </div>
          ))}
        </div>

        {/* Example Section */}
        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
{`<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>This is a Heading</h1>
  <p>This is a paragraph.</p>

</body>
</html>`}
          </pre>
        </div>

        {/* Certification Section */}
        <h2 className="text-2xl font-semibold mb-4">HTML Certification</h2>
        <p className="mb-2 text-gray-700">
          W3Schools offers an end-of-pathway certification program. You can take exams to get certified.
        </p>
        <p className="mb-2 text-gray-700">
          The HTML exam summarizes the W3Schools HTML syllabus. After passing, you receive a “Certified HTML Developer” certificate.
        </p>
        <p className="mb-6 text-gray-700">
          Two types of certifications are available: Non-adaptive and Adaptive.
        </p>

        {/* Final Get Started Button */}
        <div>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-6 py-2 rounded-md font-semibold transition">
            Get Started
          </button>
        </div>
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

export default Html_Syllabus;
