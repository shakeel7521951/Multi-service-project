import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaGavel,
  FaShieldAlt,
  FaInfoCircle,
  FaClock,
  FaEnvelope, FaHome,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TermsConditions() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 px-4 sm:px-8 md:px-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-cyan-400/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-pink-400/15 blur-3xl rounded-full -z-10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute bottom-32 left-20 w-6 h-6 bg-purple-400 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-1/2 left-40 w-3 h-3 bg-pink-400 rounded-full opacity-50 animate-ping"></div>

      <div className="relative container mx-auto max-w-5xl pt-20">
        {/* Header */}
        <header className="text-center mb-10" data-aos="fade-down">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Terms <span className="text-white">&</span> Conditions
          </h1>

          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            These Terms &amp; Conditions govern your use of our multi-project platform
            (Study, Reading, Music, Gaming). Please read them carefully — by using
            the site you agree to these terms.
          </p>

          <div className="mt-4 flex justify-center">
            <div className="w-28 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
          </div>

          <p className="text-slate-300 text-xs sm:text-sm mt-4">
            Last updated: <span className="text-white font-medium">October 21, 2025</span>
          </p>
        </header>

        {/* Layout: right TOC + left content on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Right: Table of contents */}
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
                  { id: "acceptance", label: "Acceptance" },
                  { id: "access", label: "Access & Use" },
                  { id: "content", label: "Content Ownership" },
                  { id: "conduct", label: "User Conduct" },
                  { id: "subscriptions", label: "Subscriptions & Payments" },
                  { id: "refunds", label: "Refunds" },
                  { id: "privacy", label: "Privacy" },
                  { id: "intellectual", label: "Intellectual Property" },
                  { id: "third-party", label: "Third-Party Links" },
                  { id: "disclaimer", label: "Disclaimer & Liability" },
                  { id: "governing", label: "Governing Law" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block text-slate-300 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 transform"
                    >
                      <span className="inline-block w-2 h-2 mr-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 align-middle" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick contact CTA */}
            <div
              className="mt-6 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 text-center hover:border-slate-500/50 transition-all duration-300"
              data-aos="fade-up"
            >
              <h5 className="text-white font-semibold mb-2">Questions?</h5>
              <p className="text-slate-300 text-sm mb-4">
                Reach out about Terms, licensing, or section-specific questions.
              </p>

              <a
                href="mailto:support@calmspace.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group"
                aria-label="Email support"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <FaEnvelope className="relative z-10" />
                <span className="relative z-10">Email Support</span>
              </a>
            </div>
          </nav>

          {/* Left: Terms content */}
          <article className="lg:col-span-3 order-1 lg:order-1 space-y-6">
            {/* Card-like container for sections */}
            <section
              id="acceptance"
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300"
              data-aos="fade-up"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-3 mb-3">
                <FaGavel className="text-cyan-400" /> Acceptance of Terms
              </h2>
              <p className="text-slate-300 leading-relaxed">
                By accessing or using our platform (including the Study, Reading,
                Music, and Gaming sections), you agree to be bound by these Terms
                &amp; Conditions. If you do not agree, please do not use the service.
                These Terms may be updated from time to time; continued use indicates
                acceptance of changes.
              </p>
            </section>

            <section
              id="access"
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300"
              data-aos="fade-up"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-3 mb-3">
                <FaInfoCircle className="text-cyan-400" /> Access &amp; Use
              </h2>
              <p className="text-slate-300 leading-relaxed mb-3">
                You may use the platform for personal, non-commercial purposes only,
                unless otherwise agreed in writing. Access may require an account;
                keep your credentials secure. We may suspend or terminate accounts
                that violate these Terms or applicable policies.
              </p>

              <ul className="list-disc pl-5 text-slate-300 space-y-2">
                <li>Respect section-specific rules (Study guides, Reading uploads, Music uploads, Gaming rules).</li>
                <li>Do not share your account credentials or misuse subscription features.</li>
                <li>Comply with age restrictions and local laws.</li>
              </ul>
            </section>

            <section
              id="content"
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300"
              data-aos="fade-up"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-3 mb-3">
                <FaBook className="text-cyan-400" /> Content &amp; Contributions
              </h2>

              <p className="text-slate-300 leading-relaxed mb-3">
                Our platform contains content created by us and content contributed by
                users. For contributions you make (notes, uploads, playlists, game content),
                you grant us a worldwide, non-exclusive, royalty-free license to display,
                distribute, and modify the content as reasonably necessary to provide the service.
              </p>

              <p className="text-slate-300 leading-relaxed">
                You remain responsible for your contributions and must ensure you have
                rights to the materials you provide. We reserve the right to remove
                content that violates these Terms or our policies.
              </p>
            </section>

            <section
              id="conduct"
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300"
              data-aos="fade-up"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-3 mb-3">
                <FaShieldAlt className="text-cyan-400" /> User Conduct
              </h2>

              <p className="text-slate-300 leading-relaxed mb-3">
                Respect other users and creators. Prohibited behavior includes, but
                is not limited to:
              </p>

              <ul className="list-disc pl-5 text-slate-300 space-y-2">
                <li>Harassment, hate speech, or abusive behavior.</li>
                <li>Uploading content that infringes intellectual property or is illegal.</li>
                <li>Attempting to disrupt, reverse-engineer, or overload the service.</li>
              </ul>
            </section>

            <section
              id="subscriptions"
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300"
              data-aos="fade-up"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-3 mb-3">
                <FaClock className="text-cyan-400" /> Subscriptions &amp; Payments
              </h2>

              <p className="text-slate-300 leading-relaxed mb-3">
                Some features or premium content may require payment or subscription.
                By subscribing you authorize recurring charges where applicable. Pricing,
                trial periods, and billing details will be presented at the point of purchase.
              </p>

              <p className="text-slate-300 leading-relaxed">
                You are responsible for any taxes applicable to your purchases.
                We may change pricing or subscription features, but will provide notice
                as required by law.
              </p>
            </section>

            <section
              id="refunds"
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300"
              data-aos="fade-up"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-3 mb-3">
                <FaInfoCircle className="text-cyan-400" /> Refunds &amp; Cancellations
              </h2>

              <p className="text-slate-300 leading-relaxed">
                Refunds are handled according to the terms displayed at purchase.
                If you have a billing issue, contact support and provide relevant details.
                We reserve the right to deny refunds for misuse or violation of policies.
              </p>
            </section>

            <section
              id="privacy"
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300"
              data-aos="fade-up"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-3 mb-3">
                <FaShieldAlt className="text-cyan-400" /> Privacy &amp; Data
              </h2>

              <p className="text-slate-300 leading-relaxed mb-3">
                Our Privacy Policy explains how we collect and use data. By using the
                platform you agree to the collection and use described in that policy.
                We take reasonable measures to protect your information, but cannot
                guarantee absolute security.
              </p>

              <p className="text-slate-300 leading-relaxed">
                For requests about data access, correction, or deletion, contact our
                privacy team using the details below.
              </p>
            </section>

            <section
              id="intellectual"
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300"
              data-aos="fade-up"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-3 mb-3">
                <FaBook className="text-cyan-400" /> Intellectual Property
              </h2>

              <p className="text-slate-300 leading-relaxed">
                All site design, logos, text, and original content are the property
                of the platform or its licensors. You may not copy, redistribute,
                or republish content without prior written permission.
              </p>
            </section>

            <section
              id="third-party"
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300"
              data-aos="fade-up"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-3 mb-3">
                <FaInfoCircle className="text-cyan-400" /> Third-Party Services &amp; Links
              </h2>

              <p className="text-slate-300 leading-relaxed">
                We may include links to third-party sites and services. Those are
                provided for convenience and do not imply endorsement. We are not
                responsible for the content or practices of external sites.
              </p>
            </section>

            <section
              id="disclaimer"
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300"
              data-aos="fade-up"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-3 mb-3">
                <FaInfoCircle className="text-cyan-400" /> Disclaimer &amp; Limitation of Liability
              </h2>

              <p className="text-slate-300 leading-relaxed mb-3">
                The platform is provided "as is" without warranties to the fullest
                extent permitted by law. We are not liable for indirect, incidental,
                or consequential damages arising from use of the service.
              </p>

              <p className="text-slate-300 leading-relaxed">
                Some jurisdictions do not allow limiting liability to the same extent;
                where local law applies, the above may not limit your rights.
              </p>
            </section>

            <section
              id="governing"
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300"
              data-aos="fade-up"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-3 mb-3">
                <FaGavel className="text-cyan-400" /> Governing Law
              </h2>

              <p className="text-slate-300 leading-relaxed">
                These Terms are governed by the laws of the jurisdiction where the
                platform is operated. Any disputes should be attempted to be resolved
                informally before pursuing legal action.
              </p>
            </section>

            <section
              id="contact"
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300"
              data-aos="fade-up"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-3 mb-3">
                <FaEnvelope className="text-cyan-400" /> Contact
              </h2>

              <p className="text-slate-300 leading-relaxed mb-3">
                For questions about these Terms or to report policy violations, please email:
              </p>

              <a
                href="mailto:support@calmspace.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <FaEnvelope className="relative z-10" />
                <span className="relative z-10">support@calmspace.com</span>
              </a>
            </section>

            {/* Footer note */}
            <div className="text-center text-slate-300 text-sm mt-6" data-aos="fade-up">
              <p>
                By using this platform you agree to these Terms &amp; Conditions.
                If you do not agree, please discontinue use and contact support.
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