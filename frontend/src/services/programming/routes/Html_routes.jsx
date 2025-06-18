import { Outlet } from "react-router-dom";
import Default from "../courses/html/Default";
import Html_sidebar from "../side_bars/Html_sidebar";
import Html_Introduction from "../courses/html/Html_Introduction";
import Html_Editors from "../courses/html/Html_Editors";
import Html_Basics from "../courses/html/Html_Basics";
import Html_Elements from "../courses/html/Html_Elements";

const HtmlLayout = () => (
  <div className="flex">
    <Html_sidebar />
    <div className="flex-1 p-4">
      <Outlet />
    </div>
  </div>
);

export const htmlRoutes = {
  path: "html",
  element: <HtmlLayout />,
  children: [
    { index: true, element: <Default /> },
    { path: "default", element: <Default /> },
    { path: "introduction", element: <Html_Introduction /> },
    { path: "editors", element: <Html_Editors /> },
    { path: "basics", element: <Html_Basics /> },
    { path: "elements", element: <Html_Elements /> },
  ],
};
