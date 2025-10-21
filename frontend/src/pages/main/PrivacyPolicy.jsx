import React, { useEffect } from "react";
import {
  FaUserShield,
  FaBook,
  FaMusic,
  FaGamepad,
  FaBookReader,
  FaInfoCircle,
  FaEnvelope,
  FaLock,
  FaDatabase,
  FaGavel,
  FaHome,
  FaArrowLeft
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 px-4 sm:px-8 md:px-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-60 h-60 bg-cyan-400/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-400/20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-pink-400/15 blur-3xl rounded-full -z-10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute bottom-32 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-1/2 right-40 w-3 h-3 bg-pink-400 rounded-full opacity-50 animate-ping"></div>

      <div className="relative container mx-auto max-w-5xl pt-20">
        {/* Header */}
        <header className="text-center mb-10" data-aos="fade-down">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-purple-500">
            Privacy <span className="text-white">&</span> Policy
          </h1>

          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            This Privacy Policy explains how we collect, use, and protect your
            personal data across our multi-project platform — including Study,
            Reading, Music, and Gaming sections. Please read carefully to
            understand your rights.
          </p>

          <div className="mt-4 flex justify-center">
            <div className="w-28 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
          </div>

          <p className="text-slate-300 text-xs sm:text-sm mt-4">
            Last updated:{" "}
            <span className="text-white font-medium">October 21, 2025</span>
          </p>
        </header>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Right Sidebar - Table of Contents */}
          <nav
            className="lg:col-span-1 order-2 lg:order-2"
            data-aos="fade-left"
            aria-label="Table of contents"
          >
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:border-slate-500/50 transition-all duration-300">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <FaBook className="text-cyan-400" /> Contents
              </h4>

              <ul className="space-y-3 text-sm">
                {[
                  { id: "info-we-collect", label: "Information We Collect" },
                  { id: "how-we-use", label: "How We Use Information" },
                  { id: "cookies", label: "Cookies & Tracking" },
                  { id: "data-security", label: "Data Security" },
                  { id: "third-party", label: "Third-Party Services" },
                  { id: "children", label: "Children's Privacy" },
                  { id: "rights", label: "Your Rights" },
                  { id: "changes", label: "Policy Updates" },
                  { id: "contact", label: "Contact Us" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="block text-slate-300 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 transform w-full text-left"
                    >
                      <span className="inline-block w-2 h-2 mr-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 align-middle" />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick CTA */}
            <div
              className="mt-6 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 text-center hover:border-slate-500/50 transition-all duration-300"
              data-aos="fade-up"
            >
              <h5 className="text-white font-semibold mb-2">
                Have privacy questions?
              </h5>
              <p className="text-slate-300 text-sm mb-4">
                Reach out to our privacy team directly.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group"
                aria-label="Contact privacy support"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <FaEnvelope className="relative z-10" />
                <span className="relative z-10">Contact Us</span>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="mt-6 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:border-slate-500/50 transition-all duration-300">
              <h5 className="text-white font-semibold mb-3 flex items-center gap-2">
                <FaHome className="text-cyan-400" /> Quick Links
              </h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/"
                    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    <FaHome className="text-cyan-400" />
                    Home Page
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    <FaGavel className="text-cyan-400" />
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    <FaInfoCircle className="text-cyan-400" />
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <article className="lg:col-span-3 order-1 lg:order-1 space-y-6">
            {/* Info We Collect */}
            <section
              id="info-we-collect"
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300"
              data-aos="fade-up"
            >
              <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 mb-3">
                <FaUserShield className="text-cyan-400" /> Information We Collect
              </h2>
              <p className="text-slate-300 leading-relaxed mb-3">
                We collect information that helps us improve your experience in
                each section:
              </p>
              <ul className="list-disc pl-5 text-slate-300 space-y-2">
                <li>
                  <strong>Study Section:</strong> Learning preferences, course
                  progress, notes, and participation data.
                </li>
                <li>
                  <strong>Reading Section:</strong> Saved books, reading lists,
                  comments, and community interactions.
                </li>
                <li>
                  <strong>Music Section:</strong> Playlist activity, song uploads,
                  and listening behavior.
                </li>
                <li>
                  <strong>Gaming Section:</strong> Game performance stats,
                  achievements, and leaderboard data.
                </li>
              </ul>
            </section>

            {/* How We Use */}
            <section
              id="how-we-use"
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300"
              data-aos="fade-up"
            >
              <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 mb-3">
                <FaInfoCircle className="text-cyan-400" /> How We Use Information
              </h2>
              <p className="text-slate-300 leading-relaxed">
                We use your data to personalize experiences, improve our
                platform, send updates, and maintain safety. We never sell your
                personal data.
              </p>
            </section>

            {/* Cookies */}
            <section
              id="cookies"
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300"
              data-aos="fade-up"
            >
              <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 mb-3">
                <FaDatabase className="text-cyan-400" /> Cookies & Tracking
              </h2>
              <p className="text-slate-300 leading-relaxed">
                We use cookies to store preferences, analyze site traffic, and
                enhance your experience. You can disable cookies in browser
                settings, though some features may not work correctly.
              </p>
            </section>

            {/* Data Security */}
            <section
              id="data-security"
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300"
              data-aos="fade-up"
            >
              <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 mb-3">
                <FaLock className="text-cyan-400" /> Data Security
              </h2>
              <p className="text-slate-300 leading-relaxed">
                We apply encryption, secure servers, and strict access control to
                safeguard your data. While we take every precaution, no system is
                completely immune to risks.
              </p>
            </section>

            {/* Third Party */}
            <section
              id="third-party"
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300"
              data-aos="fade-up"
            >
              <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 mb-3">
                <FaBookReader className="text-cyan-400" /> Third-Party Services
              </h2>
              <p className="text-slate-300 leading-relaxed">
                We may use third-party tools (like payment processors or
                analytics services). They operate under their own privacy
                policies, and we encourage you to review them.
              </p>
            </section>

            {/* Children */}
            <section
              id="children"
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300"
              data-aos="fade-up"
            >
              <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 mb-3">
                <FaGamepad className="text-cyan-400" /> Children's Privacy
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Our services are not directed at children under 13. We do not
                knowingly collect data from minors. Parents can contact us to
                request deletion of such information.
              </p>
            </section>

            {/* Your Rights */}
            <section
              id="rights"
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300"
              data-aos="fade-up"
            >
              <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 mb-3">
                <FaGavel className="text-cyan-400" /> Your Rights
              </h2>
              <p className="text-slate-300 leading-relaxed">
                You can request access, correction, or deletion of your data. To
                exercise these rights, contact us at{" "}
                <Link
                  to="/contact"
                  className="text-cyan-400 underline hover:text-cyan-300"
                >
                  our contact page
                </Link>
                .
              </p>
            </section>

            {/* Changes */}
            <section
              id="changes"
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300"
              data-aos="fade-up"
            >
              <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 mb-3">
                <FaInfoCircle className="text-cyan-400" /> Policy Updates
              </h2>
              <p className="text-slate-300 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with a new "last updated" date.
              </p>
            </section>

            {/* Contact */}
            <section
              id="contact"
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300"
              data-aos="fade-up"
            >
              <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 mb-3">
                <FaEnvelope className="text-cyan-400" /> Contact Us
              </h2>
              <p className="text-slate-300 leading-relaxed mb-3">
                If you have any questions or concerns about our Privacy Policy,
                feel free to contact us.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <FaEnvelope className="relative z-10" />
                  <span className="relative z-10">Contact Form</span>
                </Link>
                
                <Link
                  to="/support"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700/50 border border-slate-600/50 text-white font-semibold rounded-lg transition-all duration-300 hover:border-slate-500/50 hover:scale-[1.02]"
                >
                  <FaInfoCircle />
                  <span>Support Center</span>
                </Link>
              </div>
            </section>

            {/* Footer Note */}
            <div
              className="text-center text-slate-300 text-sm mt-6"
              data-aos="fade-up"
            >
              <p>
                By using this platform, you agree to this Privacy Policy. Please
                review regularly for updates.
              </p>

              <Link
                to="/"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-slate-800/80 border border-slate-700/50 rounded-lg text-slate-300 hover:text-white hover:border-slate-500/50 transition-all duration-300"
              >
                <FaHome />
                Return to Homepage
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}