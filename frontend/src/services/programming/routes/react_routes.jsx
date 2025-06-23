import { Outlet } from "react-router-dom";
import React_sidebar from "../side_bars/react_sidebar";
import Default from "../courses/react/default";

const ReactLayout = () => (
  <div className="flex">
    <React_sidebar />
    <div className="flex-1 p-4">
      <Outlet />
    </div>
  </div>
);

export const reactroutes = {
  path: "react",
  element: <ReactLayout />,
  children: [
    { index: true, element: <Default /> },
    { path: "default", element: <Default /> },
  ],
};
