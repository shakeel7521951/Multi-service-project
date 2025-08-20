import React from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const ReactGetStarted = () => {
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
      {/* Header */}
      <div className="mt-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl">React Getting Started</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
        <div className="flex justify-between">
          <div className="flex px-3 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Home
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-5 bg-[#D9EEE1] mt-5 py-10 rounded-md space-y-6">
        <section>
          <p>
            To use React in production, you need <strong>npm</strong>, which is included with <strong>Node.js</strong>.
          </p>
          <p>
            To get an overview of what React is, you can write React code directly in HTML.
          </p>
          <p>
            But in order to use React in production, you need <strong>npm</strong> and <strong>Node.js</strong> installed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold pb-2">React Directly in HTML</h2>
          <p>The quickest way to start learning React is to write React directly in your HTML files.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold pb-2">W3Schools Spaces</h2>
          <p>
            The easiest way to get started with creating HTML files is W3Schools Spaces!
            It is the perfect place to create, edit, and share your work with others!
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold pb-2">Include Required Scripts</h2>
          <p>
            Start by including three scripts: the first two let us write React code, and the third (Babel) allows us to write JSX and ES6.
          </p>
          <p>
            You will learn more about JSX in the React JSX chapter.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold pb-2">Example: React with CDN</h2>
          <pre className="bg-gray-800 text-white rounded-md p-4 overflow-auto text-sm">
{`<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>

    <div id="mydiv"></div>

    <script type="text/babel">
      function Hello() {
        return <h1>Hello World!</h1>;
      }

      const container = document.getElementById('mydiv');
      const root = ReactDOM.createRoot(container);
      root.render(<Hello />);
    </script>

  </body>
</html>`}
          </pre>
        </section>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* References Section */}
      <div className="px-1 my-10">
            <h1 className="text-3xl font-semibold pb-4">React References</h1>
        <p className="max-w-3xl pb-5">
          At W3Schools you will find complete React references of all properties
          and selectors with syntax, examples, browser support, and more.
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

export default ReactGetStarted;
