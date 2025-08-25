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
import Sql_Count from "../courses/sql/Sql_Count";
import Sql_Sum from "../courses/sql/Sql_Sum";
import Sql_Avg from "../courses/sql/Sql_Avg";
import Sql_Like from "../courses/sql/Sql_Like";
import Sql_Wildcard from "../courses/sql/Sql_Wildcard";
import Sql_In from "../courses/sql/Sql_In";
import Sql_Between from "../courses/sql/Sql_Between";
import Sql_Aliases from "../courses/sql/Sql_Aliases";
import Sql_Joins from "../courses/sql/Sql_Joins";
import Sql_InnerJoin from "../courses/sql/Sql_InnerJoin";
import Sql_LeftJoin from "../courses/sql/Sql_LeftJoin";
import Sql_RightJoin from "../courses/sql/Sql_RightJoin";
import Sql_FullOuterJoin from "../courses/sql/Sql_FullOuterJoin";
import Sql_SelfJoin from "../courses/sql/Sql_SelfJoin";


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
    { path: "sqlminmax", element: <Sql_Min_Max /> },
    { path: "sqlcount", element: <Sql_Count /> },
    { path: "sqlsum", element: <Sql_Sum /> },
    { path: "sqlavg", element: <Sql_Avg /> },
    { path: "sqllike", element: <Sql_Like /> },
    { path: "sqlwildcard", element: <Sql_Wildcard /> },
    { path: "sqlin", element: <Sql_In /> },
    { path: "sqlbetween", element: <Sql_Between /> },
    { path: "sqlaliases", element: <Sql_Aliases /> },
    { path: "sqljoins", element: <Sql_Joins /> },
    { path: "sqlinnerjoin", element: <Sql_InnerJoin /> },
    { path: "sqlleftjoin", element: <Sql_LeftJoin /> },
    { path: "sqlrightjoin", element: <Sql_RightJoin /> },
    { path: "sqlfullouterjoin", element: <Sql_FullOuterJoin /> },
    { path: "sqlselfjoin", element: <Sql_SelfJoin /> }
 ],
};
