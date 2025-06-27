import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Certificate = () => {
  return (
    <div className="min-h-screen  px-4 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold mb-8 text-gray-900">W3Schools HTML Certification</h1>
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
        {/* Certificate Badge */}
        <div className="bg-gradient-to-br from-green-100 to-white border border-green-300 p-6 rounded-2xl text-center mb-10 shadow-sm">
          <h2 className="text-3xl font-extrabold text-[#04AA6D] tracking-widest uppercase mb-2">
            Certified HTML Developer
          </h2>
          <p className="text-gray-700 text-lg">
            W3Schools Online Certification Program
          </p>
          <p className="text-gray-600 mt-2">
            Document your skills. Advance your career. Join 50,000+ certified professionals.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#E7E9EB] p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Why Get Certified?</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Validate your HTML skills</li>
              <li>Boost career opportunities</li>
              <li>Study at your own pace</li>
              <li>Affordable and flexible</li>
              <li>Recognized globally</li>
              <li>Trusted by top companies</li>
            </ul>
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Who Should Apply?</h3>
            <p className="text-gray-700">
              Whether you're a student, freelancer, educator, or professional, certification helps demonstrate your abilities in an increasingly competitive job market.
            </p>
          </div>
        </div>

        {/* Trusted by Companies */}
        <div className="bg-[#E7E9EB] p-6 rounded-2xl mb-10 shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Trusted by Industry Leaders</h3>
          <p className="text-gray-700">
            With over 20 years of experience teaching code, W3Schools certifications are trusted by companies worldwide to verify technical competence.
          </p>
        </div>

        {/* Exam Details */}
        <div className="bg-[#E7E9EB] p-6 rounded-2xl mb-10 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Certification Details</h3>
          <ul className="text-gray-700 space-y-2">
            <li><strong>Price:</strong> $95 USD</li>
            <li><strong>Format:</strong> Online, multiple choice</li>
            <li><strong>Time Limit:</strong> 60 minutes</li>
            <li><strong>Attempts:</strong> Up to 3 per exam</li>
            <li><strong>Difficulty Levels:</strong> Intermediate (40%), Advanced (75%), Professional (90%)</li>
            <li><strong>Expiration:</strong> Never</li>
          </ul>
        </div>

        {/* Career Boost */}
        <div className="bg-[#E7E9EB] p-6 rounded-2xl mb-10 shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Accelerate Your Career</h3>
          <p className="text-gray-700">
            Showcase your credentials on your resume, LinkedIn, or portfolio. Certifications open the door to larger projects, new responsibilities, and higher pay.
          </p>
        </div>

        {/* How It Works */}
        <div className="bg-[#E7E9EB] p-6 rounded-2xl mb-10 shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">How It Works</h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Study for free at W3Schools.com</li>
            <li>Practice with quizzes and examples</li>
            <li>Pay the exam fee</li>
            <li>Take your exam online anytime</li>
            <li>Receive your certificate instantly</li>
          </ol>
        </div>

        {/* For Teams */}
        <div className="bg-[#E7E9EB] p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Need Certificates for a Team?</h3>
          <p className="text-gray-700">
            Are you a manager, teacher, or organization? We offer custom solutions for schools, companies, and teams worldwide. Contact us to learn more.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex justify-end mt-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-6 py-3 rounded-md hover:bg-[#03945f] font-medium text-lg transition cursor-pointer shadow-md">
            Apply for Certificate
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Html_Certificate;
