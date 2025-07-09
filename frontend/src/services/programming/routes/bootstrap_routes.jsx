import { Outlet } from "react-router-dom";
import Default from "../courses/bootstrap/Default";
import Bootstrap_sidebar from "../side_bars/Bootstrap_sidebar";

const BootsrapLayout = () => (
  <div className="flex">
    <Bootstrap_sidebar />
    <div className="flex-1 p-4">
      <Outlet />
    </div>
  </div>
);

export const BootstrapRoutes = {
  path: "bootstrap",
  element: <BootsrapLayout />,
  children: [
    { index: true, element: <Default /> },
    { path: "default", element: <Default /> },
  ],
};
