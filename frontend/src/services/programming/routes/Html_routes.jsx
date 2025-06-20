import { Outlet } from "react-router-dom";
import Default from "../courses/html/Default";
import Html_sidebar from "../side_bars/Html_sidebar";
import Html_Introduction from "../courses/html/Html_Introduction";
import Html_Editors from "../courses/html/Html_Editors";
import Html_Basics from "../courses/html/Html_Basics";
import Html_Elements from "../courses/html/Html_Elements";
import Html_Attributes from "../courses/html/Html_Attributes";
import Html_Headings from "../courses/html/Html_Headings";
import Html_Paragraphs from "../courses/html/Html_Paragraphs";
import Html_Styles from "../courses/html/Html_Styles";
import Html_Formatting from "../courses/html/Html_Formatting";
import Html_Quotation from "../courses/html/Html_Quotation";
import Html_Comments from "../courses/html/Html_Comments";
import Html_Colors from "../courses/html/Html_Colors";
import Html_Styles_Css from "../courses/html/Html_Styles_Css";
import Html_Links from "../courses/html/Html_Links";
import Html_Images from "../courses/html/Html_Images";
import Html_Favicon from "../courses/html/Html_Favicon";
import Html_Page_Tittle from "../courses/html/Html_Page_Tittle";
import Html_Table from "../courses/html/Html_Table";
import Html_List from "../courses/html/Html_List";
import Html_Block_Inline from "../courses/html/Html_Block_Inline";
import Html_Div from "../courses/html/Html_Div";
import Html_Class from "../courses/html/Html_Class";
import Html_Id from "../courses/html/Html_Id";
import Html_Iframes from "../courses/html/Html_Iframes";


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
    { path: "attributes", element: <Html_Attributes /> },
    { path: "headings", element: <Html_Headings /> },
    { path: "paragraphs", element: <Html_Paragraphs /> },
    { path: "styles", element: <Html_Styles /> },
    { path: "formatting", element: <Html_Formatting /> },
    { path: "quotation", element: <Html_Quotation /> },
    { path: "comments", element: <Html_Comments /> },
    { path: "colors", element: <Html_Colors /> },
    { path: "htmlcss", element: <Html_Styles_Css /> },
    { path: "links", element: <Html_Links /> },
    { path: "images", element: <Html_Images /> },
    { path: "favicon", element: <Html_Favicon /> },
    { path: "pagetittle", element: <Html_Page_Tittle /> },
    { path: "table", element: <Html_Table /> },
    { path: "list", element: <Html_List /> },
    { path: "blockinline", element: <Html_Block_Inline /> },
    { path: "div", element: <Html_Div /> },
    { path: "class", element: <Html_Class /> },
    { path: "id", element: <Html_Id /> },
    { path: "iframes", element: <Html_Iframes /> },
  ],
};
