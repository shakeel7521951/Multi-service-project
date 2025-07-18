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
import Html_Web_Api  from "../courses/html/Html_Web_Api";
import Html_Geolocation_Api  from "../courses/html/Html_Geolocation_Api";
import Html_Drag_Drop  from "../courses/html/Html_Drag_Drop";
import Html_Storage_Api  from "../courses/html/Html_Storage_Api";
import Html_Workers_Api  from "../courses/html/Html_Workers_Api";
import Html_Server_Sent  from "../courses/html/Html_Server_Sent";
import Html_Examples  from "../courses/html/Html_Examples";
import Html_Online_Editor  from "../courses/html/Html_Online_Editor";
import Html_Quiz  from "../courses/html/Html_Quiz";

import Html_Website_Hosting from "../courses/html/Html_Website_Hosting.jsx";
import Html_Syllabus from "../courses/html/Html_Syllabus";
import Html_Study_Plan from "../courses/html/Html_Study_Plan";
import Html_Interview_Preparation from "../courses/html/Html_Interview_Preparation";
import Html_Bootcamp from "../courses/html/Html_Bootcamp";
import Html_Certificate from "../courses/html/Html_Certificate";
import Html_Summary from "../courses/html/Html_Summary";
import Html_Accessibility from "../courses/html/Html_Accessibility";
import Html_Alphabet from "../courses/html/Html_Alphabet";
import Html_Category from "../courses/html/Html_Category";
import Html_Browser_Support from "../courses/html/Html_Browser_Support";
import Html_Attribute_Reference from "../courses/html/Html_Attribute_Reference";
import Html_Global_Attributes from "../courses/html/Html_Global_Attributes";
import Html_Event_Attributes from "../courses/html/Html_Event_Attributes";
import Html_Color_Names from "../courses/html/Html_Color_Names";
import Html_Canvas_Reference from "../courses/html/Html_Canvas_Reference";
import Html_Audio_Video from "../courses/html/Html_Audio_Video";
import Html_Character_Sets from "../courses/html/Html_Character_Sets";
import Html_Doctype from "../courses/html/Html_Doctype";
import Html_Url_Encoding from "../courses/html/Html_Url_Encoding";
import Html_Language_Code from "../courses/html/Html_Language_Code";
import Html_Country_Codes from "../courses/html/Html_Country_Codes";
import Html_Status_Messages from "../courses/html/Html_Status_Messages";
import Html_Request_Methods from "../courses/html/Html_Request_Methods"; 
import Html__Ems_Conversion from "../courses/html/Html__Ems_Conversion"; 
import Html__Keyboard_Shortcuts from "../courses/html/Html__Keyboard_Shortcuts"; 
// import Html_Study_Plan from "../courses/html/Html_Study_Plan";



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
    { path: "webapi", element: <Html_Web_Api /> },
    { path: "geolocationapi", element: <Html_Geolocation_Api /> },
    { path: "dragdrop", element: <Html_Drag_Drop /> },
    { path: "storageapi", element: <Html_Storage_Api /> },
    { path: "workersapi", element: <Html_Workers_Api /> },
    { path: "serversent", element: <Html_Server_Sent /> },
    { path: "examples", element: <Html_Examples /> },
    { path: "online", element: <Html_Online_Editor /> },
    { path: "quiz", element: <Html_Quiz /> },
    { path: "websitehosting", element: <Html_Website_Hosting /> },
    { path: "syllabus", element: <Html_Syllabus /> },
    { path: "studyplan", element: <Html_Study_Plan /> },
    { path: "interviewpreparation", element: <Html_Interview_Preparation /> },
    { path: "bootcamp", element: <Html_Bootcamp /> },
    { path: "certificate", element: <Html_Certificate /> },
    { path: "summary", element: <Html_Summary /> },
    { path: "accessibility", element: <Html_Accessibility /> },
    { path: "alphabet", element: <Html_Alphabet /> },
    { path: "category", element: <Html_Category /> },
    { path: "browsersupport", element: <Html_Browser_Support /> },
    { path: "attributereference", element: <Html_Attribute_Reference /> },
    { path: "globalattributes", element: <Html_Global_Attributes /> },
    { path: "eventattributes", element: <Html_Event_Attributes /> },
    { path: "colornames", element: <Html_Color_Names /> },
    { path: "canvasreference", element: <Html_Canvas_Reference /> },
    { path: "audiovideo", element: <Html_Audio_Video /> },
    { path: "charactersets", element: <Html_Character_Sets /> },
    { path: "doctype", element: <Html_Doctype /> },
    { path: "urlencoding", element: <Html_Url_Encoding /> },
    { path: "languagecode", element: <Html_Language_Code /> },
    { path: "countrycodes", element: <Html_Country_Codes  /> },
    { path: "statusmessages", element: <Html_Status_Messages  /> },
    { path: "requestmethods", element: <Html_Request_Methods /> }, 
    { path: "emsconversion", element: <Html__Ems_Conversion /> }, 
    { path: "keyboardshortcuts", element: <Html__Keyboard_Shortcuts /> } 
    // { path: "studyplan", element: <Html_Study_Plan /> }
  ],
};
