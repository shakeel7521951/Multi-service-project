import React from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const ReactServer = () => {
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
          <h1 className="text-4xl">React Server</h1>
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
      <div className="px-5 bg-[#D9EEE1] mt-5 py-10 rounded-md">
        <h2 className="text-2xl font-semibold pb-3">Introduction</h2>
        <p className="pb-4">
          React is mostly known for client-side rendering, but it also supports server-side rendering (SSR) and Server Components. These server features improve performance, SEO, and user experience.
        </p>

        <h2 className="text-2xl font-semibold pt-4 pb-3">What is Server-Side Rendering (SSR)?</h2>
        <p className="pb-4">
          Server-side rendering means that React components are rendered on the server and sent as HTML to the client. This makes your app load faster and is great for search engine optimization.
        </p>
        <p className="pb-4">
          Frameworks like <strong>Next.js</strong> make SSR with React very easy. With SSR, users see a fully rendered page instead of waiting for JavaScript to load.
        </p>

        <h2 className="text-2xl font-semibold pt-4 pb-3">React Server Components</h2>
        <p className="pb-4">
          React Server Components (RSC) are a new feature that allows certain parts of your app to run on the server by default, reducing bundle size and speeding up load time.
        </p>
        <p className="pb-4">
          Server Components can access databases, APIs, or file systems — something regular client-side components can’t do directly. They improve performance by only sending the necessary data to the client.
        </p>

        <h2 className="text-2xl font-semibold pt-4 pb-3">Benefits of Server Rendering</h2>
        <ul className="list-disc ml-6 space-y-2 pb-6">
          <li>Faster initial page loads</li>
          <li>Better SEO performance</li>
          <li>Reduced JavaScript bundle sizes</li>
          <li>Improved performance on slower devices</li>
        </ul>

        <h2 className="text-2xl font-semibold pt-4 pb-3">When to Use Server Features?</h2>
        <ul className="list-disc ml-6 space-y-2 pb-6">
          <li>When building public-facing websites</li>
          <li>When SEO is important</li>
          <li>When performance and load speed are priorities</li>
          <li>When you need to access backend resources directly</li>
        </ul>

        <h2 className="text-2xl font-semibold pt-4 pb-3">Popular Frameworks with Server Support</h2>
        <ul className="list-disc ml-6 space-y-2 pb-6">
          <li><strong>Next.js</strong> – Full SSR and hybrid rendering</li>
          <li><strong>Remix</strong> – Advanced routing and data handling</li>
          <li><strong>Gatsby</strong> – Static site generation with React</li>
        </ul>

        <h2 className="text-2xl font-semibold pt-4 pb-3">Example (Next.js Server Component)</h2>
        <div className="bg-white p-4 rounded-md text-sm font-mono mb-4 overflow-auto">
          <pre>
{`// app/page.js (Next.js using Server Components)
export default async function Home() {
  const data = await fetch("https://api.example.com/posts").then(res => res.json());

  return (
    <div>
      <h1>Server Rendered Posts</h1>
      <ul>
        {data.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}`}
          </pre>
        </div>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* References Section */}
      <div className="px-1 my-10">
        <h1 className="text-3xl font-semibold pb-4">React References</h1>
        <p className="max-w-3xl pb-5">
          Use these references to explore more about client and server aspects of React.
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

export default ReactServer;
