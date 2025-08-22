import { Outlet } from "react-router-dom";
import Default from "../courses/bootstrap/Default";
import Bootstrap_sidebar from "../side_bars/Bootstrap_sidebar";
import Flexbox from "./../courses/bootstrap/Flexbox";
import Utilities from "./../courses/bootstrap/Utilities";
import Carousel from "./../courses/bootstrap/Carousel";
import Modals from "./../courses/bootstrap/Modals";
import Dropdowns from "./../courses/bootstrap/Dropdowns";
import Navbar from "./../courses/bootstrap/Navbar";
import InputGroups from "./../courses/bootstrap/InputGroups";
import FormValidation from "./../courses/bootstrap/FormValidation";
import Forms from "./../courses/bootstrap/Forms";
import Cards from "./../courses/bootstrap/Cards";
import Badges from "./../courses/bootstrap/Badges";
import Buttons from "./../courses/bootstrap/Buttons";
import Alerts from "./../courses/bootstrap/Alerts";
import Tables from "./../courses/bootstrap/Tables";
import Images from "./../courses/bootstrap/Images";
import Colors from "./../courses/bootstrap/Colors";
import Typography from "./../courses/bootstrap/Typography";
import GridSystem from "./../courses/bootstrap/GridSystem";
import Containers from "./../courses/bootstrap/Containers";
import Installation from "./../courses/bootstrap/Installation";
import Introduction from "./../courses/bootstrap/Introduction";

const BootstrapLayout = () => {
  return (
    <div className="flex md:flex-row">
      {/* Sidebar */}
      <Bootstrap_sidebar />

      {/* Main Content */}
      <div className="flex-1 min-h-screen p-3 sm:p-4 md:p-6 overflow-x-hidden">
        <Outlet />  
      </div>
    </div>
  );
};
export const BootstrapRoutes = {
  path: "bootstrap",
  element: <BootstrapLayout />,
  children: [
    { index: true, element: <Default /> },
    { path: "default", element: <Default /> },
    { path: "introduction", element: <Introduction /> },
    { path: "installation-setup", element: <Installation /> },
    { path: "containers", element: <Containers /> },
    { path: "grid-system", element: <GridSystem /> },
    { path: "typography", element: <Typography /> },
    { path: "colors-backgrounds", element: <Colors /> },
    { path: "tables", element: <Tables /> },
    { path: "images", element: <Images /> },
    { path: "alerts", element: <Alerts /> },
    { path: "buttons", element: <Buttons /> },
    { path: "badges", element: <Badges /> },
    { path: "cards", element: <Cards /> },
    { path: "forms", element: <Forms /> },
    { path: "form-validation", element: <FormValidation /> },
    { path: "input-groups", element: <InputGroups /> },
    { path: "navbar", element: <Navbar /> },
    { path: "dropdowns", element: <Dropdowns /> },
    { path: "modals", element: <Modals /> },
    { path: "carousel", element: <Carousel /> },
    { path: "utilities", element: <Utilities /> },
    { path: "flexbox", element: <Flexbox /> },
  ],
};
