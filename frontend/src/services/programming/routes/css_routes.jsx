import { Outlet } from "react-router-dom";
import Default from "../courses/css/default";
import Css_sidebar from "../side_bars/Css_sidebar";

const CssLayout = () => (
  <div className="flex">
    <Css_sidebar />
    <div className="flex-1 p-4">
      <Outlet />
    </div>
  </div>
);

export const cssRoutes = {
  path: "css",
  element: <CssLayout />,
  children: [
    { index: true, element: <Default /> },
    { path: "default", element: <Default /> },
  ],
};
