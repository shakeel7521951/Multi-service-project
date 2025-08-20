import React from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const ReactCertificate = () => {
  const refArray = [
    { id: 1, name: "React Introduction", link: "/react/reactIntro" },
    { id: 2, name: "React JSX", link: "/react/reactJSX" },
    { id: 3, name: "React Components", link: "/react/reactComponents" },
    { id: 4, name: "React Props", link: "/react/reactProps" },
    { id: 5, name: "React State", link: "/react/reactState" },
    { id: 6, name: "React Events", link: "/react/reactEvents" },
    { id: 7, name: "React Conditional Rendering", link: "/react/reactConditionalRendering" },
    { id: 8, name: "React Lists", link: "/react/reactLists" },
    { id: 9, name: "React Forms", link: "/react/reactForms" },
    { id: 10, name: "React UseEffect", link: "/react/reactUseEffect" },
    { id: 11, name: "React UseState", link: "/react/reactUseState" },
    { id: 12, name: "React Custom Hooks", link: "/react/reactCustomHooks" },
    { id: 13, name: "React Router", link: "/react/reactRouter" },
    { id: 14, name: "React Context", link: "/react/reactContext" },
    { id: 15, name: "React Memo", link: "/react/reactMemo" },
  ];

  return (
    <div className="px-4">
      {/* Hero Section */}
      <div className="mt-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl">React Certificate</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
        <div className="flex justify-between">
          <div className="flex px-3 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Home
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-5 bg-[#D9EEE1] mt-5 py-10 rounded-md">
        <h2 className="text-2xl font-semibold pb-4">W3Schools React Certificate</h2>
        <p className="pb-3">W3Schools offers an Online Certification Program – the perfect solution for busy professionals who want to balance work, family, and career advancement.</p>
        
        <div className="text-6xl font-bold tracking-widest text-center text-green-700 pb-6">
          w3schools CERTIFIED.2025
        </div>

        <p className="pb-3">More than <strong>50,000 certificates</strong> have already been issued!</p>

        <h2 className="text-xl font-semibold pt-4 pb-2">Why Get Certified?</h2>
        <ul className="list-disc ml-6 space-y-2 pb-4">
          <li>Document your skills</li>
          <li>Improve your career</li>
          <li>Study at your own pace</li>
          <li>Save time and money</li>
          <li>Known and trusted brand</li>
          <li>Trusted by top companies</li>
        </ul>

        <h2 className="text-xl font-semibold pt-4 pb-2">Who Should Consider Getting Certified?</h2>
        <p className="pb-3">Any student or professional working in the digital or development space can benefit. Certifications are a great way to gain trust and prove your skills to clients, employers, or hiring managers in today’s competitive job market.</p>

        <h2 className="text-xl font-semibold pt-4 pb-2">W3Schools Is Trusted by Top Companies</h2>
        <p className="pb-3">With over two decades of experience in online education, W3Schools certificates are widely recognized by tech companies hiring for developer roles.</p>

        <h2 className="text-xl font-semibold pt-4 pb-2">Save Time and Money</h2>
        <p className="pb-3">W3Schools’ certification costs only a fraction of traditional education programs. Get certified and show the world your coding skills without spending thousands!</p>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* References Section */}
      <div className="px-1 my-10">
        <h1 className="text-3xl font-semibold pb-4">React References</h1>
        <p className="max-w-3xl pb-5">
          Brush up on essential React topics before taking your certification exam.
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

        {/* Navigation Buttons */}
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

export default ReactCertificate;
