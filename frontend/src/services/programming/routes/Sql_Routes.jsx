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
import Sql_Union from "../courses/sql/Sql_Union";
import Sql_UnionAll from "../courses/sql/Sql_UnionAll";
import Sql_GroupBy from "../courses/sql/Sql_GroupBy";
import Sql_Having from "../courses/sql/Sql_Having";
import Sql_Exists from "../courses/sql/Sql_Exists";
import Sql_Any_All from "../courses/sql/Sql_Any_All";
import Sql_SelectInto from "../courses/sql/Sql_SelectInto";
import Sql_Case from "../courses/sql/Sql_Case";
import Sql_Null_Functions from "../courses/sql/Sql_Null_Functions";
import Sql_StoredProcedures from "../courses/sql/Sql_StoredProcedures";
import Sql_Comments from "../courses/sql/Sql_Comments";
import Sql_Operators from "../courses/sql/Sql_Operators";
import Sql_CreateDatabase from "../courses/sql/Sql_CreateDatabase";
import Sql_DropDatabase from "../courses/sql/Sql_DropDatabase";
import Sql_BackupDatabase from "../courses/sql/Sql_BackupDatabase";
import Sql_CreateTable from "../courses/sql/Sql_CreateTable";
import Sql_DropTable from "../courses/sql/Sql_DropTable";
import Sql_AlterTable from "../courses/sql/Sql_AlterTable";
import Sql_Constraints from "../courses/sql/Sql_Constraints";
import Sql_NotNull from "../courses/sql/Sql_NotNull";
import Sql_Unique from "../courses/sql/Sql_Unique";
import Sql_PrimaryKey from "../courses/sql/Sql_PrimaryKey";
import Sql_ForeignKey from "../courses/sql/Sql_ForeignKey";
import Sql_Check from "../courses/sql/Sql_Check";
import Sql_Default from "../courses/sql/Sql_Default";
import Sql_CreateIndex from "../courses/sql/Sql_CreateIndex";
import Sql_AutoIncrement from "../courses/sql/Sql_AutoIncrement";
import Sql_Dates from "../courses/sql/Sql_Dates";
import Sql_Views from "../courses/sql/Sql_Views";
import Sql_Injection from "../courses/sql/Sql_Injection";
import Sql_Hosting from "../courses/sql/Sql_Hosting";
import SqlDataTypes from "../courses/sql/SqlDataTypes";
import Sql_Keywords from "../courses/sql/Sql_Keywords";
import MySQL_Functions from "../courses/sql/MySQL_Functions";
import SqlServerFunctions from "../courses/sql/SqlServerFunctions";
import MSAccessFunctions from "../courses/sql/MSAccessFunctions";
import SqlQuickReference from "../courses/sql/SqlQuickReference";
import SqlExamples from "../courses/sql/SqlExamples";
import Sql_Online_Editor from "../courses/sql/Sql_Online_Editor";
import Sql_Quiz from "../courses/sql/Sql_Quiz";
import Sql_Exercises from "../courses/sql/Sql_Exercises";
import Sql_Syllabus from "../courses/sql/Sql_Syllabus";
import Sql_StudyPlan from "../courses/sql/Sql_StudyPlan";
import Sql_Bootcamp from "../courses/sql/Sql_Bootcamp";
import Sql_Certificate from "../courses/sql/Sql_Certificate";
import Sql_Training from "../courses/sql/Sql_Training";


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
    { path: "sqlselfjoin", element: <Sql_SelfJoin /> },
    { path: "sqlunion", element: <Sql_Union /> },
    { path: "sqlunionall", element: <Sql_UnionAll /> },
    { path: "sqlgroupby", element: <Sql_GroupBy /> },
    { path: "sqlhaving", element: <Sql_Having /> },
    { path: "sqlexists", element: <Sql_Exists /> },
    { path: "sqlanyall", element: <Sql_Any_All /> },
    { path: "sqlselectinto", element: <Sql_SelectInto /> },
    { path: "sqlcase", element: <Sql_Case /> },
    { path: "sqlnullfunctions", element: <Sql_Null_Functions /> },
    { path: "sqlstoredprocedures", element: <Sql_StoredProcedures /> },
    { path: "sqlcomments", element: <Sql_Comments /> },
    { path: "sqloperators", element: <Sql_Operators /> },
    { path: "sqlcreatedatabase", element: <Sql_CreateDatabase /> },
    { path: "sqldropdatabase", element: <Sql_DropDatabase /> },
    { path: "sqlbackupdatabase", element: <Sql_BackupDatabase /> },
    { path: "sqlcreatetable", element: <Sql_CreateTable /> },
    { path: "sqldroptable", element: <Sql_DropTable /> },
    { path: "sqlaltertable", element: <Sql_AlterTable /> },
    { path: "sqlconstraints", element: <Sql_Constraints /> },
    { path: "sqlnotnull", element: <Sql_NotNull /> },
    { path: "sqlunique", element: <Sql_Unique /> },
    { path: "sqlprimarykey", element: <Sql_PrimaryKey /> },
    { path: "sqlforeignkey", element: <Sql_ForeignKey /> },
    { path: "sqlcheck", element: <Sql_Check /> },
    { path: "sqldefault", element: <Sql_Default /> },
    { path: "sqlcreateindex", element: <Sql_CreateIndex /> },
    { path: "sqlautoincrement", element: <Sql_AutoIncrement /> },
    { path: "sqldates", element: <Sql_Dates /> },
    { path: "sqlviews", element: <Sql_Views /> },
    { path: "sqlinjection", element: <Sql_Injection /> },
    { path: "sqldatatypes", element: <SqlDataTypes /> },
    { path: "sqlkeywords", element: <Sql_Keywords /> },
    { path: "sqlfunctions", element: <MySQL_Functions /> },
    { path: "sqlserverfunctions", element: <SqlServerFunctions /> },
    { path: "sqlmsaccessfunctions", element: <MSAccessFunctions /> },
    { path: "sqlquickreference", element: <SqlQuickReference /> },
    { path: "sqlexamples", element: <SqlExamples /> },
    { path: "sqlonlineeditor", element: <Sql_Online_Editor /> },
    { path: "sqlquiz", element: <Sql_Quiz /> },
    { path: "sqlexercises", element: <Sql_Exercises /> },
    { path: "sqlsyllabus", element: <Sql_Syllabus /> },
    { path: "sqlstudyplan", element: <Sql_StudyPlan/> },
    { path: "sqlbootcamp", element: <Sql_Bootcamp/> },
    { path: "sqlcertificate", element: <Sql_Certificate/> },
    { path: "sqltraining", element: <Sql_Training/> }
 ],
};


// jasa nichay wala data design ha wasa hi ais ko desgin kar do aur all text aur uper wala data ka aur nichy wala sa best desgin kar dana ais ko ...  .. :