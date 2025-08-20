import { Outlet } from "react-router-dom";
import Default from "../courses/js/Default";
import Js_sidebar from "../side_bars/Js_sidebar";
import JsIntro from '../courses/js/JsIntro'
import JsWhere from "./JsWhere";
import JsOutput from "../courses/js/JsOutput";
import JsStatement from "../courses/js/JsStatement";
export const JsLayout = () => (
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
    { path: "/js/js_intro", element:<JsIntro/> },
    { path: "/js/js_whereto", element:<JsWhere/> },
    { path: "/js/js_output", element:<JsOutput/> },
    { path: "/js/js_statements", element:<JsStatement/> },
  ],
};
