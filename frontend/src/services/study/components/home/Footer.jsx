import React from "react";
import { Link } from "react-router-dom";
import {
   FaFacebook,
   FaTwitter,
   FaInstagram,
   FaLinkedin,
   FaYoutube,
   FaPhone,
   FaEnvelope,
   FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="relative bg-gray-900 text-white overflow-hidden">
         {/* Top Gradient Border */}
         <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

         <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
               {/* Company Info */}
               <div className="lg:col-span-1">
                  <Link to="/study/" className="text-2xl font-bold mb-4 inline-block">
                     Study<span className="text-yellow-300">Hub</span>
                  </Link>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                     Pakistan's leading online learning platform for Matric,
                     Intermediate, and competitive exams. Empowering students
                     with quality education since 2020.
                  </p>
                  <div className="flex space-x-4">
                     {[
                        { icon: <FaFacebook />, url: "#" },
                        { icon: <FaTwitter />, url: "#" },
                        { icon: <FaInstagram />, url: "#" },
                        { icon: <FaLinkedin />, url: "#" },
                        { icon: <FaYoutube />, url: "#" },
                     ].map((social, index) => (
                        <a
                           key={index}
                           href={social.url}
                           className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300"
                        >
                           {social.icon}
                        </a>
                     ))}
                  </div>
               </div>

               {/* Quick Links */}
               <div>
                  <h3 className="text-lg font-semibold mb-6 text-white">
                     Quick Links
                  </h3>
                  <ul className="space-y-3">
                     {[
                        { name: "Home", path: "/" },
                        { name: "About Us", path: "/about" },
                        { name: "All Courses", path: "/courses" },
                        { name: "Pricing", path: "/pricing" },
                        { name: "Contact", path: "/contact" },
                     ].map((link, index) => (
                        <li key={index}>
                           <Link
                              to={link.path}
                              className="text-gray-400 hover:text-white transition-colors duration-300"
                           >
                              {link.name}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Courses */}
               <div>
                  <h3 className="text-lg font-semibold mb-6 text-white">
                     Our Courses
                  </h3>
                  <ul className="space-y-3">
                     {[
                        "Matric Science",
                        "Matric Arts",
                        "FSC Pre-Medical",
                        "FSC Pre-Engineering",
                        "ICS Computer Science",
                        "I.Com Commerce",
                        "Medical Entry Test",
                        "Engineering Entry Test",
                     ].map((course, index) => (
                        <li key={index}>
                           <a
                              href="#"
                              className="text-gray-400 hover:text-white transition-colors duration-300"
                           >
                              {course}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Contact Info */}
               <div>
                  <h3 className="text-lg font-semibold mb-6 text-white">
                     Contact Us
                  </h3>
                  <div className="space-y-4">
                     <div className="flex items-center space-x-3">
                        <FaPhone className="text-indigo-400 flex-shrink-0" />
                        <span className="text-gray-400">+92 300 123 4567</span>
                     </div>
                     <div className="flex items-center space-x-3">
                        <FaEnvelope className="text-indigo-400 flex-shrink-0" />
                        <span className="text-gray-400">info@studyhub.com</span>
                     </div>
                     <div className="flex items-start space-x-3">
                        <FaMapMarkerAlt className="text-indigo-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-400">
                           Main Campus: 123 Education Street,
                           <br />
                           Lahore, Pakistan
                        </span>
                     </div>
                  </div>

                  {/* Newsletter */}
                  <div className="mt-6">
                     <h4 className="text-sm font-semibold mb-3 text-white">
                        Newsletter
                     </h4>
                     <div className="flex">
                        <input
                           type="email"
                           placeholder="Your email"
                           className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-indigo-500 text-white placeholder-gray-400"
                        />
                        <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-lg transition-colors duration-300">
                           Subscribe
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 pt-8">
               <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <div className="text-gray-400 text-sm">
                     © {currentYear} StudyHub. All rights reserved.
                  </div>
                  <div className="flex flex-wrap justify-center space-x-6 text-sm">
                     {[
                        "Privacy Policy",
                        "Terms of Service",
                        "Refund Policy",
                        "Cookie Policy",
                     ].map((item, index) => (
                        <a
                           key={index}
                           href="#"
                           className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                           {item}
                        </a>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         {/* Floating Elements */}
         <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-600 rounded-full blur-3xl opacity-20"></div>
         <div className="absolute top-0 right-0 w-32 h-32 bg-pink-600 rounded-full blur-3xl opacity-20"></div>
      </footer>
   );
}
