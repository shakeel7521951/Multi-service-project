import React from "react";
import { Link } from "react-router-dom";

const TutorialArray = [
  // HTML Tutorial
  { id: 1, topic: "HTML HOME", link: "htmlHome", category: "HTML Tutorial" },
  { id: 2, topic: "HTML Introduction", link: "htmlIntroduction", category: "HTML Tutorial" },
  { id: 3, topic: "HTML Editors", link: "htmlEditors", category: "HTML Tutorial" },
  { id: 4, topic: "HTML Basic", link: "htmlBasic", category: "HTML Tutorial" },
  { id: 5, topic: "HTML Elements", link: "htmlElements", category: "HTML Tutorial" },
  { id: 6, topic: "HTML Attributes", link: "htmlAttributes", category: "HTML Tutorial" },
  { id: 7, topic: "HTML Headings", link: "htmlHeadings", category: "HTML Tutorial" },
  { id: 8, topic: "HTML Paragraphs", link: "htmlParagraphs", category: "HTML Tutorial" },
  { id: 9, topic: "HTML Styles", link: "htmlStyles", category: "HTML Tutorial" },
  { id: 10, topic: "HTML Formatting", link: "htmlFormatting", category: "HTML Tutorial" },
  { id: 11, topic: "HTML Quotations", link: "htmlQuotations", category: "HTML Tutorial" },
  { id: 12, topic: "HTML Comments", link: "htmlComments", category: "HTML Tutorial" },
  { id: 13, topic: "HTML Colors", link: "htmlColors", category: "HTML Tutorial" },
  { id: 14, topic: "HTML CSS", link: "htmlCss", category: "HTML Tutorial" },
  { id: 15, topic: "HTML Links", link: "htmlLinks", category: "HTML Tutorial" },
  { id: 16, topic: "HTML Images", link: "htmlImages", category: "HTML Tutorial" },
  { id: 17, topic: "HTML Favicon", link: "htmlFavicon", category: "HTML Tutorial" },
  { id: 18, topic: "HTML Page Title", link: "htmlPageTitle", category: "HTML Tutorial" },
  { id: 19, topic: "HTML Tables", link: "htmlTables", category: "HTML Tutorial" },
  { id: 20, topic: "HTML Lists", link: "htmlLists", category: "HTML Tutorial" },
  { id: 21, topic: "HTML Block & Inline", link: "htmlBlockInline", category: "HTML Tutorial" },
  { id: 22, topic: "HTML Div", link: "htmlDiv", category: "HTML Tutorial" },
  { id: 23, topic: "HTML Classes", link: "htmlClasses", category: "HTML Tutorial" },
  { id: 24, topic: "HTML Id", link: "htmlId", category: "HTML Tutorial" },
  { id: 25, topic: "HTML Iframes", link: "htmlIframes", category: "HTML Tutorial" },
  { id: 26, topic: "HTML JavaScript", link: "htmlJavascript", category: "HTML Tutorial" },
  { id: 27, topic: "HTML File Paths", link: "htmlFilePaths", category: "HTML Tutorial" },
  { id: 28, topic: "HTML Head", link: "htmlHead", category: "HTML Tutorial" },
  { id: 29, topic: "HTML Layout", link: "htmlLayout", category: "HTML Tutorial" },
  { id: 30, topic: "HTML Responsive", link: "htmlResponsive", category: "HTML Tutorial" },
  { id: 31, topic: "HTML Computercode", link: "htmlComputercode", category: "HTML Tutorial" },
  { id: 32, topic: "HTML Semantics", link: "htmlSemantics", category: "HTML Tutorial" },
  { id: 33, topic: "HTML Style Guide", link: "htmlStyleGuide", category: "HTML Tutorial" },
  { id: 34, topic: "HTML Entities", link: "htmlEntities", category: "HTML Tutorial" },
  { id: 35, topic: "HTML Symbols", link: "htmlSymbols", category: "HTML Tutorial" },
  { id: 36, topic: "HTML Emojis", link: "htmlEmojis", category: "HTML Tutorial" },
  { id: 37, topic: "HTML Charsets", link: "htmlCharsets", category: "HTML Tutorial" },
  { id: 38, topic: "HTML URL Encode", link: "htmlUrlEncode", category: "HTML Tutorial" },
  { id: 39, topic: "HTML vs. XHTML", link: "htmlVsXhtml", category: "HTML Tutorial" },

  // HTML Forms
  { id: 40, topic: "HTML Forms", link: "htmlForms", category: "HTML Forms" },
  { id: 41, topic: "HTML Form Attributes", link: "htmlFormAttributes", category: "HTML Forms" },
  { id: 42, topic: "HTML Form Elements", link: "htmlFormElements", category: "HTML Forms" },
  { id: 43, topic: "HTML Input Types", link: "htmlInputTypes", category: "HTML Forms" },
  { id: 44, topic: "HTML Input Attributes", link: "htmlInputAttributes", category: "HTML Forms" },
  { id: 44, topic: " Input Form Attributes", link: "htmlinputformAttri", category: "HTML Forms" },

  // HTML Graphics
  { id: 45, topic: "HTML Canvas", link: "htmlCanvas", category: "HTML Graphics" },
  { id: 46, topic: "HTML SVG", link: "htmlSvg", category: "HTML Graphics" },

  // HTML Media
  { id: 47, topic: "HTML Media", link: "htmlMedia", category: "HTML Media" },
  { id: 48, topic: "HTML Video", link: "htmlVideo", category: "HTML Media" },
  { id: 49, topic: "HTML Audio", link: "htmlAudio", category: "HTML Media" },
  { id: 50, topic: "HTML Plug-ins", link: "htmlPlugins", category: "HTML Media" },
  { id: 51, topic: "HTML YouTube", link: "htmlYoutube", category: "HTML Media" },

  // HTML APIs
  { id: 52, topic: "HTML Web APIs", link: "htmlWebApis", category: "HTML APIs" },
  { id: 53, topic: "HTML Geolocation", link: "htmlGeolocation", category: "HTML APIs" },
  { id: 54, topic: "HTML Drag and Drop", link: "htmlDragDrop", category: "HTML APIs" },
  { id: 55, topic: "HTML Web Storage", link: "htmlWebStorage", category: "HTML APIs" },
  { id: 56, topic: "HTML Web Workers", link: "htmlWebWorkers", category: "HTML APIs" },
  { id: 57, topic: "HTML SSE", link: "htmlSse", category: "HTML APIs" },

  // HTML References
  { id: 58, topic: "HTML Tag List", link: "htmlTagList", category: "HTML Refrences" },
  { id: 59, topic: "HTML Attributes", link: "htmlAttributeList", category: "HTML Refrences" },
  { id: 60, topic: "HTML Global Attributes", link: "htmlGlobalAttributes", category: "HTML Refrences" },
  { id: 61, topic: "HTML Browser Support", link: "htmlBrowserSupport", category: "HTML Refrences" },
  { id: 62, topic: "HTML Events", link: "htmlEvents", category: "HTML Refrences" },
  { id: 63, topic: "HTML Colors", link: "htmlDoctypes", category: "HTML Refrences" },
  { id: 64, topic: "HTML Canvas", link: "htmlCharacterSets", category: "HTML Refrences" },
  { id: 65, topic: "HTML Audio/Video", link: "htmlUrlEncodeRef", category: "HTML Refrences" },
  { id: 66, topic: "HTML Doctypes", link: "htmlLangCodes", category: "HTML Refrences" },


{ id: 67, topic: "HTML Character Sets", link: "htmlCharacterSets", category: "HTML Refrences" },
{ id: 68, topic: "HTML URL Encode", link: "htmlUrlEncodeRef", category: "HTML Refrences" },
{ id: 69, topic: "HTML Lang Codes", link: "htmlLangCodes", category: "HTML Refrences" },
{ id: 70, topic: "HTTP Messages", link: "httpMessages", category: "HTML Refrences" },
{ id: 71, topic: "HTTP Methods", link: "httpMethods", category: "HTML Refrences" },
{ id: 72, topic: "PX to EM Converter", link: "pxToEmConverter", category: "HTML Refrences" },
{ id: 73, topic: "Keyboard Shortcuts", link: "keyboardShortcuts", category: "HTML Refrences" },

  
];


const categories = [
  "HTML Tutorial",
  "HTML Forms",
  "HTML Graphics",
  "HTML Media",
  "HTML APIs",
  "HTML Refrences",
];

const Html_sidebar = () => {
  return (
    <div className="w-[20vw] hidden lg:block sticky top-0 p-3 overflow-y-auto h-screen bg-[#E7E9EB]">
      {categories.map((category, idx) => (
        <div key={idx}>
          <h1 className="my-3 font-semibold text-lg">{category}</h1>
          <ul className="flex flex-col gap-2">
            {TutorialArray.filter((link) => link.category === category).map(
              (link) => (
                <li className="hover:bg-[#CCCCCC] px-3 w-full" key={link.id}>
                  <Link to={link.link ? `/css/${link.link}` : "/css"}>
                    {link.topic}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Html_sidebar;
