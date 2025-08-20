import React from "react";
import { FaYoutube, FaLinkedin, FaDiscord, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#282A35] text-white text-sm pb-5">
      {/* Top Navigation Bar */}
     <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 py-8 border-b border-gray-700 text-[#FFF48A] font-semibold text-xs md:text-sm px-4">
        {['PLUS', 'SPACES', 'GET CERTIFIED', 'FOR TEACHERS', 'FOR BUSINESS', 'CONTACT US'].map((item, i) => (
          <span key={i} className="cursor-pointer hover:underline whitespace-nowrap">{item}</span>
        ))}
      </div>

      {/* Main Footer Sections */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left py-4 px-4 mb-8">
        {/* Top Tutorials */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">Top Tutorials</h3>
          <ul className="space-y-1 text-[13px] text-center">
            {["HTML Tutorial", "CSS Tutorial", "JavaScript Tutorial", "How To Tutorial", "SQL Tutorial", "Python Tutorial", "W3.CSS Tutorial", "Bootstrap Tutorial", "PHP Tutorial", "Java Tutorial", "C++ Tutorial", "jQuery Tutorial"].map((item, i) => (
              <li key={i} className="hover:text-[#FFF48A] cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Top References */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">Top References</h3>
          <ul className="space-y-1 text-[13px] text-center">
            {["HTML Reference", "CSS Reference", "JavaScript Reference", "SQL Reference", "Python Reference", "W3.CSS Reference", "Bootstrap Reference", "PHP Reference", "HTML Colors", "Java Reference", "Angular Reference", "jQuery Reference"].map((item, i) => (
              <li key={i} className="hover:text-[#FFF48A] cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Top Examples */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">Top Examples</h3>
          <ul className="space-y-1 text-[13px] text-center">
            {["HTML Examples", "CSS Examples", "JavaScript Examples", "How To Examples", "SQL Examples", "Python Examples", "W3.CSS Examples", "Bootstrap Examples", "PHP Examples", "Java Examples", "XML Examples", "jQuery Examples"].map((item, i) => (
              <li key={i} className="hover:text-[#FFF48A] cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Get Certified */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">Get Certified</h3>
          <ul className="space-y-1 text-[13px] text-center">
            {["HTML Certificate", "CSS Certificate", "JavaScript Certificate", "Front End Certificate", "SQL Certificate", "Python Certificate", "PHP Certificate", "jQuery Certificate", "Java Certificate", "C++ Certificate", "C# Certificate", "XML Certificate"].map((item, i) => (
              <li key={i} className="hover:text-[#FFF48A] cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Icons and Footer Text */}
      <div className="mt-12 text-center text-xs text-gray-300 space-y-4 px-4">
        <div className="flex text-center gap-4 justify-center">
        <div className="flex justify-center space-x-4 text-white text-lg">
          <FaYoutube className="cursor-pointer hover:text-red-500" />
          <FaLinkedin className="cursor-pointer hover:text-blue-500" />
          <FaDiscord className="cursor-pointer hover:text-indigo-400" />
          <FaFacebook className="cursor-pointer hover:text-blue-600" />
          <FaInstagram className="cursor-pointer hover:text-pink-500" />
        </div>

        <div className="space-x-4 font-bold">
          <span className="hover:underline cursor-pointer">FORUM</span>
          <span className="hover:underline cursor-pointer">ABOUT</span>
          <span className="hover:underline cursor-pointer">ACADEMY</span>
        </div>
        </div>

        <p className="max-w-4xl mx-auto px-4">
          W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.
          Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content.
          While using W3Schools, you agree to have read and accepted our
          <span className="text-blue-400 hover:underline cursor-pointer"> terms of use</span>, <span className="text-blue-400 hover:underline cursor-pointer">cookie and privacy policy</span>.
        </p>

        <p>
          Copyright 1999-2025 by Refsnes Data. All Rights Reserved. <span className="text-blue-400 hover:underline cursor-pointer">W3Schools is Powered by W3.CSS.</span>
        </p>
      </div>
    </footer>
  );
}