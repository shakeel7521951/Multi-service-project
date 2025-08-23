import { createBrowserRouter, Outlet } from "react-router-dom";
import Sql_Sidebar from "../side_bars/Sql_Sidebar";
import Sql_Intro from "../courses/sql/Sql_Intro";


export const SqlLayout = () => (
  <div className="flex">
    <Sql_Sidebar />
    <div className="flex-1 p-4">
      <Outlet />
    </div>
  </div>
);

export const JsRoutes = {
  path: "sql",
  element: <SqlLayout />,
  children: [
    { index: true, element: <Sql_Intro /> },
    { path: "sqlintro", element: <Sql_Intro /> }
 
],
};
