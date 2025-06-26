import { Outlet } from "react-router-dom";
import Default from "../courses/Css/Tutorial/Default";
import Css_sidebar from "../side_bars/Css_sidebar";
import Homecss from "../courses/Css/Tutorial/Homecss";
import CssIntroduction from "../courses/Css/Tutorial/CssIntroduction";
import CssSyntax from "../courses/Css/Tutorial/CssSyntax";
import CssSelectors from "../courses/Css/Tutorial/CssSelectors";
import CssBackgrounds from "../courses/Css/Advanced/CssBackgrounds";
import CssBorders from "../courses/Css/Tutorial/CssBorders";
import CssColors from "../courses/Css/Advanced/CssColors";
import CssRounded from "../courses/Css/Advanced/CssRounded";
import Flexintro from "../courses/Css/Flexbox/Flexintro";
import Flexcontainer from "../courses/Css/Flexbox/Flexcontainer";
import Gridintro from "../courses/Css/Grid/Gridintro";
import GridColumn from "../courses/Css/Grid/GridColumn";
import RwdIntro from "../courses/Css/Responsive/RwdIntro";
import RwdViewport from "../courses/Css/Responsive/RwdViewport";
import CssProperties from "../courses/Css/Refrences/RefWEBfont";
import CssBrowseSupport from "../courses/Css/Refrences/RefrencesAural";
import CssExample from "../courses/Css/Exampel/CssExample";
import CssTemplate from "../courses/Css/Exampel/CssTemplate";
import Refrences from "../courses/Css/Refrences/RefWEBfont";
import RefWebfont from "../courses/Css/Refrences/RefWEBfont";
import RefrencesAural from "../courses/Css/Refrences/RefrencesAural";

const CssLayout = () => (
  <div className="flex ">
    <Css_sidebar  />
    <div className="flex-1 ">
      <Outlet />
    </div>
  </div>
);

export const cssRoutes = {
  path: "css",
  element: <CssLayout />,
  children: [
    { index: true, element: <Default /> },
    // Tutorial 
    { path: "default", element: <Default /> },
    { path: "homecss", element: <Homecss /> },
    {path:"cssintroduction",element:<CssIntroduction/>},
    {path:"cssSyntax",element:<CssSyntax/>},
    {path:"cssSelectors",element:<CssSelectors/>},
    // Advanced 
    {path:"cssBackgound",element:<CssBackgrounds/>},  
    {path:"cssBorders",element:<CssBorders/>},
    {path:"cssColors",element:<CssColors/>},
    {path:"cssRounded",element:<CssRounded/>},   
    // Flexbox 
    {path:"flexintro",element:<Flexintro/>},
    {path:"flexcontainer",element:<Flexcontainer/>},
    // Grid 
    {path:"gridintro",element:<Gridintro/>},
    {path:"gridcolumn",element:<GridColumn/>},
    // Responsive 
    {path:"rwdintro",element:<RwdIntro/>},
    {path:"rwdviewport",element:<RwdViewport/>},
    // Example 
    {path:"cssExample",element:<CssExample/>},
    {path:"cssTemplate",element:<CssTemplate/>},

    // References 
    {path:"cssProperties",element:<RefWebfont/>},
    {path:"cssbrowseSupport",element:<RefrencesAural/>}
    
 
  ],
};
