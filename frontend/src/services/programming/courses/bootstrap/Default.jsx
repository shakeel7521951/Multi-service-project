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
    <div className="relative min-h-screen bg-gradient-to-br from-white via-[#f9f9f9] to-[#f0f0f0] px-0 py-8 lg:py-10 md:py-10">
      <div className="max-w-6xl mx-auto space-y-5 md:space-y-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#04AA6D] drop-shadow">
            Bootstrap Tutorial
          </h1>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Learn the world’s most popular front-end framework with examples,
            hands-on code, and step-by-step tutorials.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Home
          </Link>

          <Link
            to="/bootstrap/introduction"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Introduction <FaChevronRight />
          </Link>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-[#04AA6D]">
            What is Bootstrap?
          </h2>
          <p className="text-gray-800 mb-3 leading-relaxed text-base sm:text-lg">
            Bootstrap is the world’s most popular front-end framework for
            building responsive, mobile-first websites quickly and easily.
          </p>
          <p className="text-gray-800 mb-3 leading-relaxed text-base sm:text-lg">
            It provides ready-to-use HTML, CSS, and JavaScript components like
            buttons, forms, navbars, modals, and grids — so you don’t have to
            code everything from scratch.
          </p>
          <p className="text-gray-800 mb-6 leading-relaxed text-base sm:text-lg">
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#04AA6D]">
            Bootstrap References
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl text-base sm:text-lg">
            Explore detailed docs for Bootstrap components, utilities, classes,
            and responsive behaviors with best-practice guidance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
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
        <div className="flex sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Home
          </Link>

          <Link
            to="/bootstrap/introduction"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Introduction <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Default;
