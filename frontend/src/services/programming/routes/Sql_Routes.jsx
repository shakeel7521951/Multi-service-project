import { createBrowserRouter, Outlet } from "react-router-dom";
import Sql_Sidebar from "../side_bars/Sql_Sidebar";
import Sql_Intro from "../courses/sql/Sql_Intro";
import Sql_Syntax from "../courses/sql/Sql_Syntax";
import Sql_Select from "../courses/sql/Sql_Select";
import Sql_Select_Distinct from "../courses/sql/Sql_Select_Distinct";
import Sql_Where from "../courses/sql/Sql_Where";
import Sql_OrderBy from "../courses/sql/Sql_OrderBy";
import Sql_And from "../courses/sql/Sql_And";
import Sql_Or from "../courses/sql/Sql_Or";
import Sql_Not from "../courses/sql/Sql_Not";
import Sql_Insert from "../courses/sql/Sql_Insert";
import Sql_Null from "../courses/sql/Sql_Null";
import Sql_Update from "../courses/sql/Sql_Update";
import Sql_Delete from "../courses/sql/Sql_Delete";
import Sql_Top_Limit from "../courses/sql/Sql_Top_Limit";
import Sql_Min_Max from "../courses/sql/Sql_Min_Max";


export const SqlLayout = () => (
  <div className="flex">
    <Sql_Sidebar />
    <div className="flex-1 p-4">
      <Outlet />
    </div>
  </div>
);

export const SQLRoutes = {
  path: "sql",
  element: <SqlLayout />,
  children: [
    { index: true, element: <Sql_Intro /> },
    { path: "sqlintro", element: <Sql_Intro /> },
    { path: "sqlsyntax", element: <Sql_Syntax /> },
    { path: "sqlselect", element: <Sql_Select /> },
    { path: "sqlselectdistinct", element: <Sql_Select_Distinct /> },
    { path: "sqlwhere", element: <Sql_Where /> },
    { path: "sqlorderby", element: <Sql_OrderBy /> },
    { path: "sqland", element: <Sql_And /> },
    { path: "sqlor", element: <Sql_Or /> },
    { path: "sqlnot", element: <Sql_Not /> },
    { path: "sqlinsert", element: <Sql_Insert /> },
    { path: "sqlnull", element: <Sql_Null /> },
    { path: "sqlupdate", element: <Sql_Update /> },
    { path: "sqldelete", element: <Sql_Delete /> },
    { path: "sqltoplimit", element: <Sql_Top_Limit /> },
    { path: "sqlminmax", element: <Sql_Min_Max /> }

 ],
};
