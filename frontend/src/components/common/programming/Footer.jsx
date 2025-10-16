import React from "react";
import {
  FaYoutube,
  FaLinkedin,
  FaDiscord,
  FaFacebook,
} from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-[#1f2544] text-white text-sm pt-5 pb-6 relative overflow-hidden ">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-indigo-900 via-gray-800 to-purple-800 animate-pulse"></div>

      {/* Top Navigation */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 py-6 border-b border-gray-700 text-[#FFF48A] font-semibold text-xs md:text-sm relative z-10">
        {[
          "PLUS",
          "SPACES",
          "GET CERTIFIED",
          "FOR TEACHERS",
          "FOR BUSINESS",
          "CONTACT US",
        ].map((item, i) => (
          <span
            key={i}
            className="cursor-pointer hover:text-white hover:scale-105 transition-all duration-200"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Main Footer Sections */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 py-8 px-6 mb-8 relative z-10">
        {[
          {
            title: "Top Tutorials",
            items: [
              "HTML Tutorial",
              "CSS Tutorial",
              "JavaScript Tutorial",
              "How To Tutorial",
              "SQL Tutorial",
              "Python Tutorial",
              "W3.CSS Tutorial",
              "Bootstrap Tutorial",
              "PHP Tutorial",
              "Java Tutorial",
              "C++ Tutorial",
              "jQuery Tutorial",
            ],
          },
          {
            title: "Top References",
            items: [
              "HTML Reference",
              "CSS Reference",
              "JavaScript Reference",
              "SQL Reference",
              "Python Reference",
              "W3.CSS Reference",
              "Bootstrap Reference",
              "PHP Reference",
              "HTML Colors",
              "Java Reference",
              "Angular Reference",
              "jQuery Reference",
            ],
          },
          {
            title: "Top Examples",
            items: [
              "HTML Examples",
              "CSS Examples",
              "JavaScript Examples",
              "How To Examples",
              "SQL Examples",
              "Python Examples",
              "W3.CSS Examples",
              "Bootstrap Examples",
              "PHP Examples",
              "Java Examples",
              "XML Examples",
              "jQuery Examples",
            ],
          },
          {
            title: "Get Certified",
            items: [
              "HTML Certificate",
              "CSS Certificate",
              "JavaScript Certificate",
              "Front End Certificate",
              "SQL Certificate",
              "Python Certificate",
              "PHP Certificate",
              "jQuery Certificate",
              "Java Certificate",
              "C++ Certificate",
              "C# Certificate",
              "XML Certificate",
            ],
          },
        ].map((section, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-4  md:text-left text-[springgreen]">
              {section.title}
            </h3>
            <ul className="space-y-2 text-[13px] text-center md:text-left">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 hover:text-[#FFF48A] transition-all hover:scale-105 cursor-pointer duration-200"
                >
                  <FaChevronRight className="text-[10px]" /> {/* 👈 Arrow Icon */}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Social Icons + Links */}
      <div className="mt-10 text-center text-xs text-gray-300 space-y-5 px-6 pt-4 relative z-10 border-t border-gray-700">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* Social Icons */}
          <div className="flex justify-center space-x-6 text-2xl">
            {[FaYoutube, FaLinkedin, FaDiscord, FaFacebook].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className="cursor-pointer hover:scale-125 transform transition-all duration-300 hover:rotate-6"
                />
              )
            )}
          </div>

          {/* Footer Nav */}
          <div className="space-x-6 font-bold text-[lavenderblush]">
            {["FORUM", "ABOUT", "ACADEMY"].map((item, i) => (
              <span
                key={i}
                className="hover:underline cursor-pointer hover:text-white transition-colors duration-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <p className="max-w-4xl mx-auto leading-relaxed">
          W3Schools is optimized for learning and training. Examples might be
          simplified to improve reading and learning. Tutorials, references, and
          examples are constantly reviewed to avoid errors, but we cannot
          warrant full correctness of all content. While using W3Schools, you
          agree to have read and accepted our
          <span className="text-blue-400 hover:underline cursor-pointer">
            {" "}
            terms of use
          </span>
          ,
          <span className="text-blue-400 hover:underline cursor-pointer">
            {" "}
            cookie and privacy policy
          </span>
          .
        </p>

        <p className="text-gray-400">
          © 1999-2025 Refsnes Data. All Rights Reserved.{" "}
          <span className="text-blue-400 hover:underline cursor-pointer">
            W3Schools is Powered by W3.CSS
          </span>
        </p>
      </div>
    </footer>
  );
}
