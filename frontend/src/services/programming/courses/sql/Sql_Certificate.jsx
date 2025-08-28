import { FaChevronLeft, FaChevronRight, FaCheckCircle, FaCertificate } from "react-icons/fa";

const Sql_Certificate = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-3">W3Schools SQL Certificate</h1>
          <p className="text-gray-600 text-lg">
            Online Certification Program — the perfect solution for busy professionals.
          </p>
          <p className="mt-2 text-gray-500">More than <strong>50,000</strong> certificates already issued!</p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Why Certification */}
        <section className="grid md:grid-cols-2 gap-6">
          {[
            "Document your skills",
            "Improve your career",
            "Study at your own pace",
            "Save time and money",
            "Known brand",
            "Trusted by top companies",
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="bg-[#D9EEE1] p-6 rounded-lg shadow flex items-center gap-3"
            >
              <FaCheckCircle className="text-[#04AA6D] text-xl" />
              <span className="font-semibold">{benefit}</span>
            </div>
          ))}
        </section>

        {/* Who Should Consider */}
        <section className="bg-[#E7E9EB] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">Who Should Get Certified?</h2>
          <p className="text-gray-700 mb-3">
            Any student or professional within the digital industry.
          </p>
          <p className="text-gray-700">
            Certifications are valuable assets to gain trust and demonstrate knowledge
            to your clients, current or future employers in an increasingly competitive market.
          </p>
        </section>

        {/* Trusted by Companies */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold mb-3">Trusted by Top Companies</h2>
          <p className="text-gray-700">
            W3Schools has over two decades of experience teaching coding online.  
            Our certificates are recognized and valued by companies hiring skilled developers.
          </p>
        </section>

        {/* Exam Overview */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Exam Overview</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border p-6 rounded-lg shadow space-y-2">
              <p><strong>Fee:</strong> 95 USD</p>
              <p><strong>Questions:</strong> Adaptive, ~60</p>
              <p><strong>Pass Requirement:</strong> 40% (Intermediate)</p>
              <p><strong>Time Limit:</strong> 60 minutes</p>
              <p><strong>Attempts Allowed:</strong> 3</p>
              <p><strong>Deadline:</strong> None</p>
              <p><strong>Expiration:</strong> None</p>
              <p><strong>Format:</strong> Online, multiple choice</p>
            </div>
            <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">Certification Levels</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Intermediate (40%)</li>
                <li>Advanced (75%)</li>
                <li>Professional (90%)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Benefits */}
        <section className="bg-[#E7E9EB] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">Advance Faster in Your Career</h2>
          <p className="text-gray-700 mb-3">
            Getting a certificate proves your commitment to upgrading your skills.
            Add it to your CV, Resume, or LinkedIn profile to gain credibility
            for more responsibilities, larger projects, and higher salaries.
          </p>
          <p className="text-gray-700">
            Knowledge is power — document your skills to advance or start a new career.
          </p>
        </section>

        {/* How It Works */}
        <section>
          <h2 className="text-2xl font-bold mb-6">How It Works</h2>
          <ol className="space-y-4">
            {[
              "Study for free at W3Schools.com",
              "Learn at your own speed",
              "Test your skills with quizzes",
              "Apply for the exam by paying the fee",
              "Take your exam online anytime, anywhere",
              "Receive your certificate and share it with the world",
            ].map((step, idx) => (
              <li
                key={idx}
                className="bg-[#D9EEE1] p-4 rounded-lg shadow flex items-start gap-3"
              >
                <span className="bg-[#04AA6D] text-white px-3 py-1 rounded-full font-bold">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Example Certificate */}
        <section className="bg-white border p-8 rounded-lg shadow text-center">
          <FaCertificate className="text-[#04AA6D] text-5xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">SQL Certificate Example</h2>
          <p className="text-gray-700 mb-3">
            Each certificate has a unique link or QR code for validation.  
            Share it on LinkedIn in the Certifications section with one click!
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition">
            View Example Certificate
          </button>
        </section>

        {/* Multiple Users */}
        <section className="bg-[#E7E9EB] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">Looking to Add Multiple Users?</h2>
          <p className="text-gray-700">
            Are you an educator, manager, or business owner?  
            Get courses or certifications for your team.  
            W3Schools works with schools, companies, and organizations worldwide.
          </p>
          <button className="mt-4 bg-[#04AA6D] text-white px-6 py-2 font-semibold rounded-lg hover:bg-[#03945f] transition">
            Get Team Certifications
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

export default Sql_Certificate;
