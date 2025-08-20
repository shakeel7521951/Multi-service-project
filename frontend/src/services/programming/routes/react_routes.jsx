import { Outlet } from "react-router-dom";
import React_sidebar from "../side_bars/react_sidebar";
import Default from "../courses/react/ReactTutorial/Default";
import ReactIntroduction from "../courses/react/ReactTutorial/ReactIntroduction";
import ReactGetStarted from "../courses/react/ReactTutorial/ReactGetStarted";
import ReactUpgrade from "../courses/react/ReactTutorial/ReactUpgrade";
import ReactES6 from "../courses/react/ReactTutorial/ReactES6";
import ReactRenderHTML from "../courses/react/ReactTutorial/ReactRenderHTML";
import ReactJSX from "../courses/react/ReactTutorial/ReactJSX";
import ReactComponent from "../courses/react/ReactTutorial/ReactComponent";
import ReactClass from "../courses/react/ReactTutorial/ReactClass";
import ReactProps from "../courses/react/ReactTutorial/ReactProps";
import ReactEvents from "../courses/react/ReactTutorial/ReactEvents";
import ReactConditionals from "../courses/react/ReactTutorial/ReactConditionals";
import ReactList from "../courses/react/ReactTutorial/ReactList";
import ReactForms from "../courses/react/ReactTutorial/ReactForms";
import ReactRouter from "../courses/react/ReactTutorial/ReactRouter";
import ReactMemo from "../courses/react/ReactTutorial/ReactMemo";
import ReactCSSStyling from "../courses/react/ReactTutorial/ReactCSSStyling";
import ReactSassStyling from "../courses/react/ReactTutorial/ReactSassStyling";
import ReactHooksIntro from "../courses/react/ReactHooks/ReactHooksIntro";
import ReactUsestate from "../courses/react/ReactHooks/ReactUsestate";
import ReactEffect from "../courses/react/ReactHooks/ReactEffect";
import ReactUseContext from "../courses/react/ReactHooks/ReactUseContext";
import ReactUseRef from "../courses/react/ReactHooks/ReactUseRef";
import ReactUseReducer from "../courses/react/ReactHooks/ReactUseReducer";
import ReactUseCallback from "../courses/react/ReactHooks/ReactUseCallback";
import ReactUseMemo from "../courses/react/ReactHooks/ReactUseMemo";
import ReactCustomHooks from "../courses/react/ReactHooks/ReactCustomHooks";
import ReactCompiler from "../courses/react/ReactExercise/ReactCompiler";
import ReactQuiz from "../courses/react/ReactExercise/ReactQuiz";
import ReactExercise from "../courses/react/ReactExercise/ReactExercise";
import ReactSyllabus from "../courses/react/ReactExercise/ReactSyllabus";
import ReactStudyPlan from "../courses/react/ReactExercise/ReactStudyPlan";
import ReactServer from "../courses/react/ReactExercise/ReactServer";
import ReactInterviewPrep from "../courses/react/ReactExercise/ReactInterviewPrep";
import ReactCertificate from "../courses/react/ReactExercise/ReactCertificate";
import ReactTutorialHome from "../courses/react/ReactTutorial/ReactTutorialHome";

const ReactLayout = () => (
  <div className="flex">
    <React_sidebar />
    <div className="flex-1 p-4">
      <Outlet />
    </div>
  </div>
);

export const reactroutes = {
  path: "react",
  element: <ReactLayout />,
  children: [
    { index: true, element: <Default /> },
    // React Tutorial
    { path: "default", element: <Default /> },

    { path: "reacttutorialHome", element: <ReactTutorialHome /> },

    { path: "reacttutorialreactintroduction", element: <ReactIntroduction /> },
    { path: "reacttutorialreactgetstarted", element: <ReactGetStarted /> },
    { path: "reacttutorialreactupgrade", element: <ReactUpgrade /> },
    { path: "reacttutorialreactes6", element: <ReactES6 /> },
    { path: "reacttutorialreactrenderhtml", element: <ReactRenderHTML /> },
    { path: "reacttutorialreactjsx", element: <ReactJSX /> },
    { path: "reacttutorialreactcomponent", element: <ReactComponent /> },
    { path: "reacttutorialreactclass", element: <ReactClass /> },
    { path: "reacttutorialreactprops", element: <ReactProps /> },
    { path: "reacttutorialreactevents", element: <ReactEvents /> },
    { path: "reacttutorialreactconditionals", element: <ReactConditionals /> },
    { path: "reacttutorialreactlist", element: <ReactList /> },
    { path: "reacttutorialreactforms", element: <ReactForms /> },
    { path: "reacttutorialreactrouter", element: <ReactRouter /> },
    { path: "reacttutorialreactmemo", element: <ReactMemo /> },
    { path: "reacttutorialreactcssstyling", element: <ReactCSSStyling /> },
    { path: "reacttutorialreactsassstyling", element: <ReactSassStyling /> },

    // REact HOOks
    { path: "reacthookIntro", element: <ReactHooksIntro /> },
    { path: "reacthooksusestate", element: <ReactUsestate /> },
    { path: "reacthookseffect", element: <ReactEffect /> },
    { path: "reacthooksusecontext", element: <ReactUseContext /> },
    { path: "reacthooksuseref", element: <ReactUseRef /> },
    { path: "reacthooksusereducer", element: <ReactUseReducer /> },
    { path: "reacthooksusecallback", element: <ReactUseCallback /> },
    { path: "reacthooksusememo", element: <ReactUseMemo /> },
    { path: "reacthookscustomhooks", element: <ReactCustomHooks /> },

    // Ract Exercise

    { path: "reactexercisecompiler", element: <ReactCompiler /> },
    { path: "reactexercisequiz", element: <ReactQuiz /> },
    { path: "reactexerciseexercise", element: <ReactExercise /> },
    { path: "reactexercisesyllabus", element: <ReactSyllabus /> },
    { path: "reactexercisestudyplan", element: <ReactStudyPlan /> },
    { path: "reactexerciseserver", element: <ReactServer /> },
    { path: "reactexerciseinterviewprep", element: <ReactInterviewPrep /> },
    { path: "reactexercisecertificate", element: <ReactCertificate /> },
  ],
};
