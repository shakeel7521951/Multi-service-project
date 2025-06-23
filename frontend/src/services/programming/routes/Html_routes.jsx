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
import Html_Javascript from "../courses/html/Html_Javascript";
import Html_File_Paths from "../courses/html/Html_File_Paths";
import Html_Head_Element from "../courses/html/Html_Head_Element";
import Html_Layout from "../courses/html/Html_Layout";
import Html_Responsive from "../courses/html/Html_Responsive";
import Html_Computer_Code from "../courses/html/Html_Computer_Code";
import Html_Semantic from "../courses/html/Html_Semantic";
import Html_Style_Guide from "../courses/html/Html_Style_Guide";
import Html_Entities from "../courses/html/Html_Entities";
import Html_Symbols from "../courses/html/Html_Symbols";
import Html_Emojis from "../courses/html/Html_Emojis";
import Html_Character from "../courses/html/Html_Character";
import Html_Url_Resource from "../courses/html/Html_Url_Resource";
import Html_Versus_XhtmL from "../courses/html/Html_Versus_XhtmL";
import Html_Forms from "../courses/html/Html_Forms";
import Html_Form_Attributes  from "../courses/html/Html_Form_Attributes";
import Html_Form_Elements  from "../courses/html/Html_Form_Elements";
import Html_Input_Types  from "../courses/html/Html_Input_Types";
import Html_Input_Attributes  from "../courses/html/Html_Input_Attributes";
import Html_Input_Form_Attributes  from "../courses/html/Html_Input_Form_Attributes";
import Html_Canvas_Graphics  from "../courses/html/Html_Canvas_Graphics";
import Html_Svg_Graphics  from "../courses/html/Html_Svg_Graphics";
import Html_Media  from "../courses/html/Html_Media";
import Html_Video  from "../courses/html/Html_Video";
import Html_Audio  from "../courses/html/Html_Audio";
import Html_Plug_Ins  from "../courses/html/Html_Plug_Ins";
import Html_You_Tube  from "../courses/html/Html_You_Tube";


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
    { path: "javascript", element: <Html_Javascript /> },
    { path: "filepaths", element: <Html_File_Paths /> },
    { path: "headelement", element: <Html_Head_Element /> },
    { path: "layout", element: <Html_Layout /> },
    { path: "responsive", element: <Html_Responsive /> },
    { path: "computercode", element: <Html_Computer_Code /> },
    { path: "semantic", element: <Html_Semantic /> },
    { path: "styleguide", element: <Html_Style_Guide /> },
    { path: "entities", element: <Html_Entities /> },
    { path: "symbols", element: <Html_Symbols /> },
    { path: "emojis", element: <Html_Emojis /> },
    { path: "character", element: <Html_Character /> },
    { path: "urlresource", element: <Html_Url_Resource /> },
    { path: "versusxhtmL", element: <Html_Versus_XhtmL /> },
    { path: "forms", element: <Html_Forms /> },
    { path: "formattributes", element: <Html_Form_Attributes /> },
    { path: "formelements", element: <Html_Form_Elements /> },
    { path: "inputtypes", element: <Html_Input_Types /> },
    { path: "inputattributes", element: <Html_Input_Attributes /> },
    { path: "inputformattributes", element: <Html_Input_Form_Attributes /> },
    { path: "canvasgraphics", element: <Html_Canvas_Graphics /> },
    { path: "graphics", element: <Html_Svg_Graphics /> },
    { path: "media", element: <Html_Media /> },
    { path: "video", element: <Html_Video /> },
    { path: "audio", element: <Html_Audio /> },
    { path: "plugins", element: <Html_Plug_Ins /> },
    { path: "youtube", element: <Html_You_Tube /> },
  ],
};
