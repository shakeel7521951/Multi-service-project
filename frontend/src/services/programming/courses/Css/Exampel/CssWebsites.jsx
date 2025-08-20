import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const CssWebsites = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const cssCode = `
/* Example: Simple HTML and CSS Website */
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 20px;
}
header {
  background-color: #03945F;
  color: white;
  padding: 15px;
  text-align: center;
}
nav a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
}
section {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
}
footer {
  text-align: center;
  margin-top: 40px;
  color: #777;
}
  `;

  const copyText = () => {
    navigator.clipboard.writeText(cssCode).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const refArray = [
    { id: 1, name: "CSS Properties", link: "/css/cssProperties" },
    { id: 2, name: "CSS Browser Support", link: "/css/cssbrowseSupport" },
    { id: 3, name: "CSS Selectors", link: "/css/cssSelectors" },
    { id: 4, name: "CSS Combinators", link: "/css/cssCombinators" },
    { id: 5, name: "CSS Pseudo-classes", link: "/css/cssPseudoClasses" },
    { id: 6, name: "CSS Pseudo-elements", link: "/css/cssPseudoElements" },
    { id: 7, name: "CSS At-rules", link: "/css/cssAtRules" },
    { id: 8, name: "CSS Functions", link: "/css/cssFunctions" },
    { id: 9, name: "CSS Web Safe Fonts", link: "/css/cssWebSafeFonts" },
    { id: 10, name: "CSS Units", link: "/css/cssUnits" },
    { id: 11, name: "Px to Em Conversion", link: "/css/pxToEmConversion" },
    { id: 12, name: "CSS Colors", link: "/css/cssColors" },
    { id: 13, name: "CSS Animatable", link: "/css/cssAnimatable" },
    { id: 14, name: "CSS Default Values", link: "/css/cssDefaultValues" },
    { id: 15, name: "CSS Entities", link: "/css/cssEntities" },
  ];

  return (
    <div className="px-4">
      {/* Hero Section */}
      <div className="mt-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl">CSS and HTML Website Hosting</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
        <div className="flex justify-between">
          <div className="flex px-3 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Home
          </div>
        </div>
      </div>

      <div className="px-5 bg-[#D9EEE1] mt-5 py-10 rounded-md">
        <p className="pb-3">
          Create, build, and host websites using only HTML and CSS with ease.
          Practice your coding skills and bring your projects online securely.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Why Use W3Schools Spaces?</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Build websites & projects quickly with templates or from scratch</li>
          <li>Host your static website securely with W3Schools subdomain and SSL</li>
          <li>Practice coding skills in a cloud-based code editor</li>
          <li>Sharpen your skills with unlimited challenges and tests (with Plus plan)</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Plans Available</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-5 rounded shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <p className="text-green-600 font-bold text-2xl mb-4">$0 / Forever</p>
            <p className="mb-2">Great for beginners exploring web development.</p>
            <ul className="text-left list-disc pl-5">
              <li>Track your progress</li>
              <li>Set your goals</li>
              <li>Build and host 1 static website</li>
              <li>100 credits/month</li>
              <li>No support</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded shadow text-center">
            <h3 className="text-xl font-semibold mb-2">W3Schools Plus</h3>
            <p className="text-green-600 font-bold text-2xl mb-4">$14.99 / Month</p>
            <p className="mb-2">Learn faster with fullstack projects & ad-free experience.</p>
            <ul className="text-left list-disc pl-5">
              <li>Ad-free experience</li>
              <li>Unlimited challenges & practice tests</li>
              <li>Build and host 15 static websites</li>
              <li>Build and host 1 full stack server</li>
              <li>Access to 75+ templates</li>
              <li>10,000 credits/month</li>
              <li>Cancel anytime</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded shadow text-center">
            <h3 className="text-xl font-semibold mb-2">W3Schools Academy</h3>
            <p className="mb-2">For teachers: manage classrooms, track progress, and engage students.</p>
            <ul className="text-left list-disc pl-5">
              <li>Ad-free for focused learning</li>
              <li>Dashboard to manage classroom</li>
              <li>Study plans & progress insights</li>
              <li>Interactive code challenges & projects</li>
              <li>Access to courses & certification exams</li>
              <li>Spaces for building and publishing projects</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Build & Host Easily</h2>
        <p className="mb-4">
          Choose a template or start from scratch, edit your code directly in the browser, and share your website instantly.
          All plans include free W3Schools subdomain, hosting, and SSL certificate.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Example Websites Made with Only HTML & CSS</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="https://html5up.net/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              HTML5 UP
            </a> — A collection of free responsive HTML5 and CSS3 site templates.
          </li>
          <li>
            <a href="https://www.free-css.com/free-css-templates" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Free CSS Templates
            </a> — Hundreds of free HTML and CSS templates.
          </li>
          <li>
            <a href="https://templated.co/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Templated
            </a> — Beautiful, free, responsive HTML5 & CSS3 site templates.
          </li>
        </ul>

        <div className="flex px-5 w-fit cursor-pointer py-2 mt-8 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
          Start Building Your Website Now
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </div>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* Example Section */}
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="text-4xl">HTML & CSS Simple Website Example</h1>
        <p>
          Here is a very basic CSS example for styling a simple HTML website.
        </p>
      </div>

      <div className="px-3 py-5 bg-[#E7E9EB] rounded-md">
        <h1 className="text-2xl">CSS Code Example</h1>
        <pre className="bg-white text-black font-mono text-sm whitespace-pre-wrap px-6 py-5 mt-3 rounded-md">
          {cssCode}
        </pre>

        <button
          onClick={copyText}
          className="flex items-center my-3 px-5 py-2 text-xl font-semibold rounded-lg bg-[#03945F] text-white cursor-pointer transition-colors"
        >
          {copySuccess ? "Copied!" : "Copy text"}
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </button>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* References Section */}
      <div className="px-1 my-10">
        <h1 className="text-3xl font-semibold pb-4">CSS References</h1>
        <p className="max-w-3xl pb-5">
          At W3Schools you will find complete CSS references of all properties and selectors with syntax, examples, browser support, and more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {refArray.map((path) => (
            <Link
              to={path.link}
              key={path.id}
              className="bg-[#F3F4F6] hover:bg-[#e5e7eb] transition-colors p-3 rounded-md font-semibold"
            >
              {path.name.trim()}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <div className="flex float-left mt-6 px-3 cursor-pointer py-2 text-md font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Previous
          </div>
          <div className="flex float-right mt-6 px-5 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            Next
            <MdOutlineKeyboardArrowRight className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CssWebsites;
