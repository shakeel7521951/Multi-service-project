import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Default = () => {
  const topics = [
    "Introduction",
    "Installation & Setup",
    "Containers",
    "Grid System",
    "Typography",
    "Colors & Backgrounds",
    "Tables",
    "Images",
    "Alerts",
    "Buttons",
    "Badges",
    "Cards",
    "Forms",
    "Form Validation",
    "Input Groups",
    "Navbar",
    "Dropdowns",
    "Modals",
    "Carousel",
    "Utilities",
    "Flexbox",
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-[#f9f9f9] to-[#f0f0f0] px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-[#04AA6D] drop-shadow">
            Bootstrap Tutorial
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Learn the world’s most popular front-end framework with examples,
            hands-on code, and step-by-step tutorials.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Home
          </Link>

          <Link
            to="/bootstrap/introduction"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Introduction <FaChevronRight />
          </Link>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            What is Bootstrap?
          </h2>
          <p className="text-gray-800 mb-3 leading-relaxed">
            Bootstrap is the world’s most popular front-end framework for
            building responsive, mobile-first websites quickly and easily.
          </p>
          <p className="text-gray-800 mb-3 leading-relaxed">
            It provides ready-to-use HTML, CSS, and JavaScript components like
            buttons, forms, navbars, modals, and grids — so you don’t have to
            code everything from scratch.
          </p>
          <p className="text-gray-800 mb-6 leading-relaxed">
            Whether you’re building a personal blog, business site, or
            full-scale web application, Bootstrap gives you the tools to design
            professional and modern websites with less effort.
          </p>
          <p className="text-gray-800 font-medium">
            Let’s start learning Bootstrap step by step with practical examples
            and live demos!
          </p>
        </section>

        {/* Bootstrap References */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-[#04AA6D]">
            Bootstrap References
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            Explore detailed docs for Bootstrap components, utilities, classes,
            and responsive behaviors with best-practice guidance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {topics.map((ref, idx) => (
              <Link
                key={idx}
                to={`/bootstrap/${ref.toLowerCase().replace(/ & | /g, "-")}`}
                className="block cursor-pointer bg-white border border-gray-200 hover:bg-[#04AA6D] hover:text-white text-gray-800 text-center font-medium py-4 px-4 rounded-xl shadow transition transform hover:scale-105"
              >
                {ref}
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="flex justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Home
          </Link>

          <Link
            to="/bootstrap/introduction"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Introduction <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Default;
