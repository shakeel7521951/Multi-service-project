import React from 'react';
import { Link } from 'react-router-dom';

const TutorialArray = [
  // CSS Tutorial
  { id: 1, topic: "CSS HOME",  link: "homecss", category: "CSS Tutorial" },
  { id: 2, topic: "CSS Introduction", link: "cssintroduction", category: "CSS Tutorial" },
  { id: 3, topic: "CSS Syntax", link: "cssSyntax", category: "CSS Tutorial" },
  { id: 4, topic: "CSS Selectors", link: "cssSelectors", category: "CSS Tutorial" },
  { id: 5, topic: "CSS How To", link: "csshowto", category: "CSS Tutorial" },
  { id: 6, topic: "CSS Comments", link: "csstutorialcomment", category: "CSS Tutorial" },
  { id: 5, topic: "CSS Errors", link: "csserrors", category: "CSS Tutorial" },
  { id: 7, topic: "CSS Colors", link: "csscolors", category: "CSS Tutorial" },
  { id: 8, topic: "CSS Backgrounds", link: "cssbackgrounds", category: "CSS Tutorial" },
  { id: 9, topic: "CSS Borders", link: "cssborders", category: "CSS Tutorial" },
  // Done
  { id: 10, topic: "CSS Margins", link: "cssmargin", category: "CSS Tutorial" },
  { id: 11, topic: "CSS Padding", link: "csspadding", category: "CSS Tutorial" },
  { id: 12, topic: "CSS Height/Width", link: "cssdimensions", category: "CSS Tutorial" },
  { id: 13, topic: "CSS Box Model", link: "cssboxmodel", category: "CSS Tutorial" },
  { id: 14, topic: "CSS Outline", link: "cssoutline", category: "CSS Tutorial" },
  { id: 15, topic: "CSS Text", link: "csstext", category: "CSS Tutorial" },
  { id: 16, topic: "CSS Fonts", link: "cssfonts", category: "CSS Tutorial" },
  { id: 17, topic: "CSS Icons", link: "cssicons", category: "CSS Tutorial" },
  { id: 18, topic: "CSS Links", link: "csslinks", category: "CSS Tutorial" },
  { id: 19, topic: "CSS Lists", link: "csslists", category: "CSS Tutorial" },
  { id: 20, topic: "CSS Table", link: "csstables", category: "CSS Tutorial" },
  { id: 21, topic: "CSS Display", link: "cssdisplay", category: "CSS Tutorial" },
  { id: 22, topic: "CSS Max-Width", link: "cssmaxwidth", category: "CSS Tutorial" },
  { id: 23, topic: "CSS Position", link: "csspositioning", category: "CSS Tutorial" },
  { id: 24, topic: "CSS Z-index", link: "csszindex", category: "CSS Tutorial" },
  { id: 25, topic: "CSS Overflow", link: "cssoverflow", category: "CSS Tutorial" },
  { id: 26, topic: "CSS Float", link: "cssfloat", category: "CSS Tutorial" },
  { id: 27, topic: "CSS Inline-block", link: "cssinlineblock", category: "CSS Tutorial" },
  { id: 28, topic: "CSS Align", link: "cssalign", category: "CSS Tutorial" },
  { id: 29, topic: "CSS Combinators", link: "csscombinators", category: "CSS Tutorial" },
  { id: 30, topic: "CSS Pseudo-classes", link: "csspseudoclasses", category: "CSS Tutorial" },
  { id: 31, topic: "CSS Pseudo-elements", link: "csspseudoelements", category: "CSS Tutorial" },
  { id: 32, topic: "CSS Opacity", link: "cssopacity", category: "CSS Tutorial" },
  { id: 33, topic: "CSS Navigaton Bar", link: "cssnavbar", category: "CSS Tutorial" },
  { id: 34, topic: "CSS Dropdowns", link: "cssdropdowns", category: "CSS Tutorial" },
  { id: 35, topic: "CSS Image Gallery", link: "cssimagegallery", category: "CSS Tutorial" },
  { id: 36, topic: "CSS Image Sprites", link: "cssimagesprites", category: "CSS Tutorial" },
  { id: 37, topic: "CSS Forms", link: "cssforms", category: "CSS Tutorial" },
  { id: 38, topic: "CSS Counters", link: "csscounters", category: "CSS Tutorial" },
  { id: 39, topic: "CSS Websites Layout", link: "csslayouts", category: "CSS Tutorial" },
  { id: 40, topic: "CSS Units", link: "cssunits", category: "CSS Tutorial" },
  { id: 41, topic: "CSS Specificity", link: "cssspecificity", category: "CSS Tutorial" },
  { id: 42, topic: "CSS !important", link: "cssimportant", category: "CSS Tutorial" },
  { id: 43, topic: "CSS Math Functions", link: "cssmath", category: "CSS Tutorial" },
  { id: 43, topic: "CSS Performance", link: "cssperformance", category: "CSS Tutorial" },

  // CSS Advanced
{ id: 44, topic: "CSS Rounded Corner", link: "cssRounded", category: "CSS Advanced" },
{ id: 45, topic: "CSS Borders Images", link: "cssBorders", category: "CSS Advanced" },
{ id: 46, topic: "CSS Backgrounds", link: "cssBackgound", category: "CSS Advanced" },
{ id: 47, topic: "CSS Colors", link: "cssColors", category: "CSS Advanced" },

// done 
{ id: 48, topic: "CSS Color Keyword", link: "cssadvanccolorskeywords", category: "CSS Advanced" },
{ id: 49, topic: "CSS Gradients", link: "cssadvancgradients", category: "CSS Advanced" },
{ id: 50, topic: "CSS Shadows", link: "cssadvancshadows", category: "CSS Advanced" },
{ id: 51, topic: "CSS Text Effects", link: "cssadvanctexteffects", category: "CSS Advanced" },
{ id: 52, topic: "CSS Web Fonts", link: "cssadvancwebfonts", category: "CSS Advanced" },
{ id: 53, topic: "CSS 2D Transforms", link: "cssadvanc2dtransforms", category: "CSS Advanced" },
{ id: 54, topic: "CSS 3D Transforms", link: "cssadvanc3dtransforms", category: "CSS Advanced" },
{ id: 55, topic: "CSS Transitions", link: "cssadvanctransitions", category: "CSS Advanced" },
{ id: 56, topic: "CSS Animations", link: "cssadvancanimations", category: "CSS Advanced" },
{ id: 57, topic: "CSS Tooltips", link: "cssadvanctooltips", category: "CSS Advanced" },
{ id: 58, topic: "CSS Image Styling", link: "cssadvancimagestyling", category: "CSS Advanced" },
{ id: 59, topic: "CSS Image Centering", link: "cssadvancimagecentering", category: "CSS Advanced" },
{ id: 60, topic: "CSS Image Filters", link: "cssadvancimagefilters", category: "CSS Advanced" },
{ id: 61, topic: "CSS Image Shapes", link: "cssadvancimageshapes", category: "CSS Advanced" },
{ id: 62, topic: "CSS object-fit", link: "cssadvancobjectfit", category: "CSS Advanced" },
{ id: 63, topic: "CSS object-position", link: "cssadvancobjectposition", category: "CSS Advanced" },
{ id: 64, topic: "CSS Masking", link: "cssadvancmasking", category: "CSS Advanced" },
{ id: 65, topic: "CSS Buttons", link: "cssadvancbuttons", category: "CSS Advanced" },
{ id: 66, topic: "CSS Pagination", link: "cssadvancpaginations", category: "CSS Advanced" },
{ id: 67, topic: "CSS Multiple Columns", link: "cssadvancmulticolumns", category: "CSS Advanced" },
{ id: 68, topic: "CSS User Interface", link: "cssadvancui", category: "CSS Advanced" },
{ id: 69, topic: "CSS Variables", link: "cssadvancvariables", category: "CSS Advanced" },
{ id: 70, topic: "CSS @property", link: "cssadvancproperty", category: "CSS Advanced" },
{ id: 71, topic: "CSS Box Sizing", link: "cssadvancboxsizing", category: "CSS Advanced" },
{ id: 72, topic: "CSS Media Queries", link: "cssadvancmediaqueries", category: "CSS Advanced" },
{ id: 73, topic: "CSS MQ Examples", link: "cssadvancmqexamples", category: "CSS Advanced" },


 // CSS Flexbox
{ id: 74, topic: "Flexbox Intro", link: "flexintro", category: "CSS Flexbox" },
{ id: 75, topic: "Flex Container", link: "flexcontainer", category: "CSS Flexbox" },
// Done
{ id: 76, topic: "Flex Items", link: "flexitems", category: "CSS Flexbox" },
{ id: 77, topic: "Flex Responsive", link: "flexresponsive", category: "CSS Flexbox" },


// CSS Grid
{ id: 78, topic: "Grid Intro", link: "gridintro", category: "CSS Grid" },
{ id: 79, topic: "Grid Columns", link: "gridcolumn", category: "CSS Grid" },
// Done 
{ id: 80, topic: "Grid Container", link: "gridcontainer", category: "CSS Grid" },
{ id: 81, topic: "Grid Item", link: "griditem", category: "CSS Grid" },


  // CSS Responsive
{ id: 82, topic: "RWD Intro", link: "rwdintro", category: "CSS Responsive" },
{ id: 83, topic: "RWD Viewport", link: "rwdviewport", category: "CSS Responsive" },
// Done 
{ id: 84, topic: "RWD Media Queries", link: "rwdmediaqueries", category: "CSS Responsive" },
{ id: 85, topic: "RWD Images", link: "rwdimages", category: "CSS Responsive" },
{ id: 86, topic: "RWD Grid View", link: "rwdgridview", category: "CSS Responsive" },
{ id: 87, topic: "RWD Videos", link: "rwdvideos", category: "CSS Responsive" },
{ id: 88, topic: "RWD Frameworks", link: "rwdframeworks", category: "CSS Responsive" },
{ id: 89, topic: "RWD Templates", link: "rwdtemplates", category: "CSS Responsive" },


  // CSS SASS
  { id: 90, topic: "SASS Tutorial", link: "sasstutor", category: "CSS SASS" },

 // CSS Example
{ id: 91, topic: "CSS Templates", link: "cssTemplate", category: "CSS Example" },
{ id: 92, topic: "CSS Example", link: "cssExample", category: "CSS Example" },
// Done 
{ id: 93, topic: "CSS Editor", link: "cssexpeditor", category: "CSS Example" },
{ id: 94, topic: "CSS Snippet", link: "cssexpsnippets", category: "CSS Example" },
{ id: 95, topic: "CSS Quiz", link: "cssexpquiz", category: "CSS Example" },
{ id: 96, topic: "CSS Websites", link: "cssexpwebsites", category: "CSS Example" },
{ id: 97, topic: "CSS Syllabus", link: "cssexpsyllabus", category: "CSS Example" },
{ id: 98, topic: "CSS Study Plan", link: "cssexpstudyplan", category: "CSS Example" },
{ id: 99, topic: "CSS Interview Plan", link: "cssexpinterviewprep", category: "CSS Example" },
{ id: 100, topic: "CSS Bootcamp", link: "cssexpbootcamp", category: "CSS Example" },
{ id: 101, topic: "CSS Certificate", link: "cssexpcertificate", category: "CSS Example" },


// CSS References
{ id: 117, topic: "CSS References", link: "refrenceStart", category: "CSS References" },
{ id: 104, topic: "CSS Selectors", link: "refrenceSelectors", category: "CSS References" },
{ id: 105, topic: "CSS Combinators", link: "refrenceCombinators", category: "CSS References" },
{ id: 106, topic: "CSS Pseudo-classes", link: "refrencePseudoClasses", category: "CSS References" },
{ id: 107, topic: "CSS Pseudo-elements", link: "refrencePseudoElement", category: "CSS References" },
{ id: 108, topic: "CSS At-rules", link: "refrenceAtRule", category: "CSS References" },
{ id: 109, topic: "CSS Functions", link: "refrenceFunctions", category: "CSS References" },
{ id: 103, topic: "CSS Refrence Aural", link: "refrenceAural", category: "CSS References" },

// Done
{ id: 110, topic: "CSS Web Safe Fonts", link: "refrenceWebfont", category: "CSS References" },
{ id: 114, topic: "CSS Animatable", link: "refrenceAnimatable", category: "CSS References" },
{ id: 111, topic: "CSS Units", link: "refrenceUnits", category: "CSS References" },
{ id: 112, topic: "Px to Em Conversion", link: "refrencePXEMconvertor", category: "CSS References" },
{ id: 113, topic: "CSS Colors", link: "cssColors", category: "CSS References" },
{ id: 116, topic: "CSS Entities", link: "refrenceEntity", category: "CSS References" },
{ id: 115, topic: "CSS Default Values", link: "refrenceDefaultValues", category: "CSS References" },
{ id: 118, topic: "CSS Browser Support", link: "refrenceBrowseSupport", category: "CSS References" }

];


const categories = [
  "CSS Tutorial",
  "CSS Advanced",
  "CSS Flexbox",
  "CSS Grid",
  "CSS Responsive",
  "CSS SASS",
  "CSS Example",
  "CSS References"
];

const Css_sidebar = () => {
  return (
   <div className="w-[20vw] hidden lg:block sticky top-0 p-3 overflow-y-auto h-screen bg-[#E7E9EB]">
  {categories.map((category, idx) => (
    <div key={idx}>
      <h1 className="my-3 font-semibold text-lg">{category}</h1>
      <ul className="flex flex-col gap-2">
        {TutorialArray.filter(link => link.category === category).map(link => (
          <li className="hover:bg-[#CCCCCC] px-3 w-full" key={link.id}>
            <Link to={link.link ? `/css/${link.link}` : "/css"}>
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

export default Css_sidebar;
