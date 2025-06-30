import React from 'react';
import { Link } from 'react-router-dom';

const TutorialArray = [
  // React Tutorial
  { id: 1, topic: "React HOME", link: "reacttutorialHome", category: "React Tutorial" },
  { id: 2, topic: "React Introduction", link: "reacttutorialreactintroduction", category: "React Tutorial" },
  { id: 3, topic: "React Get Started", link: "reacttutorialreactgetstarted", category: "React Tutorial" },
  { id: 4, topic: "React Upgrade", link: "reacttutorialreactupgrade", category: "React Tutorial" },
  { id: 5, topic: "React ES6", link: "reacttutorialreactes6", category: "React Tutorial" },
  { id: 6, topic: "React Render HTML", link: "reacttutorialreactrenderhtml", category: "React Tutorial" },
  { id: 7, topic: "React JSX", link: "reacttutorialreactjsx", category: "React Tutorial" },
  { id: 8, topic: "React Components", link: "reacttutorialreactcomponent", category: "React Tutorial" },
  { id: 9, topic: "React Class", link: "reacttutorialreactclass", category: "React Tutorial" },
  { id: 10, topic: "React Props", link: "reacttutorialreactprops", category: "React Tutorial" },
  { id: 11, topic: "React Events", link: "reacttutorialreactevents", category: "React Tutorial" },
  { id: 12, topic: "React Conditionals", link: "reacttutorialreactconditionals", category: "React Tutorial" },
  { id: 13, topic: "React Lists", link: "reacttutorialreactlist", category: "React Tutorial" },
  { id: 14, topic: "React Forms", link: "reacttutorialreactforms", category: "React Tutorial" },
  { id: 15, topic: "React Router", link: "reacttutorialreactrouter", category: "React Tutorial" },
  { id: 16, topic: "React Memo", link: "reacttutorialreactmemo", category: "React Tutorial" },
  { id: 17, topic: "React CSS Styling", link: "reacttutorialreactcssstyling", category: "React Tutorial" },
  { id: 17, topic: "React Sass Styling", link: "reacttutorialreactsassstyling", category: "React Tutorial" },

  // React HOOKS
  { id: 18, topic: "What is a Hook ?", link: "reacthookIntro", category: "React Hooks" }, // Optional – consider renaming or moving
  { id: 19, topic: "useState", link: "reacthooksusestate", category: "React Hooks" },
  { id: 20, topic: "useEffect", link: "reacthookseffect", category: "React Hooks" },
  { id: 21, topic: "useContext", link: "reacthooksusecontext", category: "React Hooks" },
  { id: 22, topic: "useRef", link: "reacthooksuseref", category: "React Hooks" },
  { id: 23, topic: "useReducer", link: "reacthooksusereducer", category: "React Hooks" },
  { id: 24, topic: "useCallback", link: "reacthooksusecallback", category: "React Hooks" },
  { id: 25, topic: "useMemo", link: "reacthooksusememo", category: "React Hooks" },
  { id: 26, topic: "Custom Hooks", link: "reacthookscustomhooks", category: "React Hooks" },

  // React Exercise
  { id: 27, topic: "React Compiler", link: "reactexercisecompiler", category: "React Exercise" },
  { id: 28, topic: "React Quiz", link: "reactexercisequiz", category: "React Exercise" },
  { id: 29, topic: "React Exercise", link: "reactexerciseexercise", category: "React Exercise" },
  { id: 30, topic: "React Syllabus", link: "reactexercisesyllabus", category: "React Exercise" },
  { id: 31, topic: "React Study Plan", link: "reactexercisestudyplan", category: "React Exercise" },
  { id: 32, topic: "React Server", link: "reactexerciseserver", category: "React Exercise" },
  { id: 33, topic: "React Interview Prep", link: "reactexerciseinterviewprep", category: "React Exercise" },
  { id: 34, topic: "React Certificate", link: "reactexercisecertificate", category: "React Exercise" },
];

const categories = ["React Tutorial", "React Hooks", "React Exercise"];

const React_sidebar = () => {
  return (
    <div className="w-[20vw] hidden lg:block sticky top-0 p-3 overflow-y-auto h-screen bg-[#E7E9EB]">
      {categories.map((category, idx) => (
        <div key={idx}>
          <h1 className="my-3 font-semibold text-lg">{category}</h1>
          <ul className="flex flex-col gap-2">
            {TutorialArray.filter(link => link.category === category).map(link => (
              <li className="hover:bg-[#CCCCCC] px-3 w-full" key={link.id}>
                <Link to={link.link ? `/react/${link.link}` : "/react"}>
                  {link.topic}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default React_sidebar;
