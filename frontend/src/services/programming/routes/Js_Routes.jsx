import { Outlet } from "react-router-dom";
import Default from "../courses/js/Default";
import Js_sidebar from "../side_bars/Js_sidebar";
import JsIntro from '../courses/js/JsIntro'
import Where_To from "../courses/js/Where_To";
import Output from "../courses/js/Output";
import Statements from "../courses/js/Statements";
import Syntax from "../courses/js/Syntax";
import Comments from "../courses/js/Comments";
import Variables from "../courses/js/Variables";
import Let from "../courses/js/Let";
import Const from "../courses/js/Const";
import Operators from "../courses/js/Operators";
import Arithmetic from "../courses/js/Arithmetic";
import Assignment from "../courses/js/Assignment";
import Data_Types from "../courses/js/Data_Types";
import Functions from "../courses/js/Functions";
import Objects from "../courses/js/Objects";
import Object_Properties from "../courses/js/Object_Properties";
import Object_Methods from "../courses/js/Object_Methods";
import Display_Objects from "../courses/js/Display_Objects";
const JsLayout = () => (
  <div className="flex">
    <Js_sidebar />
    <div className="flex-1 p-4">
      <Outlet />
    </div>
  </div>
);

export const JsRoutes = {
  path: "js",
  element: <JsLayout />,
  children: [
    { index: true, element: <Default /> },
    { path: "default", element: <Default /> },
    { path: "introjs", element:<JsIntro/> },
    { path: "whereto", element:<Where_To/> },
    { path: "output", element:<Output/> },
    { path: "statements", element:<Statements/> },
    { path: "syntax", element:<Syntax/> },
    { path: "comments", element:<Comments/> },
    { path: "variables", element:<Variables/> },
    { path: "let", element:<Let/> },
    { path: "const", element:<Const/> },
    { path: "operators", element:<Operators/> },
    { path: "arithmetic", element:<Arithmetic/> },
    { path: "arithmetic", element:<Arithmetic/> },
    { path: "assignment", element:<Assignment/> },
    { path: "datatypes", element:<Data_Types/> },
    { path: "functions", element:<Functions/> },
    { path: "objects", element:<Objects/> },
    { path: "objectproperties", element:<Object_Properties/> },
    { path: "objectmethods", element:<Object_Methods/> },
    { path: "displayobjects", element:<Display_Objects/> },
    { path: "objectconstructors", element:<Object_Constructors/> }
  ],
};
