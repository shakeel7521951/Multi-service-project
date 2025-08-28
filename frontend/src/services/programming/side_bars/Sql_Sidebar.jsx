import React from 'react';
import { Link } from 'react-router-dom';

const TutorialArray = [
  { id: 1, topic: "Sql Intro", link: "sqlintro"},
  { id: 2, topic: "Sql Syntax", link: "sqlsyntax"},
  { id: 3, topic: "Sql Select", link: "sqlselect"},
  { id: 4, topic: "Sql Select Distinct", link: "sqlselectdistinct"},
  { id: 5, topic: "Sql Where", link: "sqlwhere"},
  { id: 6, topic: "Sql Order By", link: "sqlorderby"},
  { id: 7, topic: "Sql And", link: "sqland"},
  { id: 8, topic: "Sql Or", link: "sqlor"},
  { id: 9, topic: "Sql Not", link: "sqlnot"},
  { id: 10, topic: "Sql Insert", link: "sqlinsert"},
  { id: 11, topic: "Sql Null", link: "sqlnull"},
  { id: 12, topic: "Sql Update", link: "sqlupdate"},
  { id: 13, topic: "Sql Delete", link: "sqldelete"},
  { id: 14, topic: "Sql Top Limit", link: "sqltoplimit"},
  { id: 15, topic: "Sql Min Max", link: "sqlminmax"},
  { id: 16, topic: "Sql Count", link: "sqlcount"},
  { id: 17, topic: "Sql Sum", link: "sqlsum"},
  { id: 18, topic: "Sql Avg", link: "sqlavg"},
  { id: 19, topic: "Sql Like", link: "sqllike"},
  { id: 20, topic: "Sql Wild Card", link: "sqlwildcard"},
  { id: 21, topic: "Sql In", link: "sqlin"},
  { id: 22, topic: "Sql Between", link: "sqlbetween"},
  { id: 23, topic: "Sql Aliases", link: "sqlaliases"},
  { id: 24, topic: "Sql Joins", link: "sqljoins"},
  { id: 25, topic: "Sql Inner Join", link: "sqlinnerjoin"},
  { id: 26, topic: "Sql Left Join", link: "sqlleftjoin"},
  { id: 27, topic: "Sql Right Join", link: "sqlrightjoin"},
  { id: 28, topic: "Sql Full Outer Join", link: "sqlfullouterjoin"},
  { id: 29, topic: "Sql Self Join", link: "sqlselfjoin"},
  { id: 30, topic: "Sql Union", link: "sqlunion"},
  { id: 31, topic: "Sql Union All", link: "sqlunionall"},
  { id: 32, topic: "Sql Group By", link: "sqlgroupby"},
  { id: 33, topic: "Sql Having", link: "sqlhaving"},
  { id: 34, topic: "Sql Exists", link: "sqlexists"},
  { id: 35, topic: "Sql Any All", link: "sqlanyall"},
  { id: 36, topic: "Sql Select Into", link: "sqlselectinto"},
  { id: 37, topic: "Sql Case", link: "sqlcase"},
  { id: 38, topic: "Sql Null Functions", link: "sqlnullfunctions"},
  { id: 39, topic: "Sql Stored Procedures", link: "sqlstoredprocedures"},
  { id: 40, topic: "Sql Comments", link: "sqlcomments"},
  { id: 41, topic: "Sql operators", link: "sqloperators"},
  { id: 42, topic: "Sql Create DB", link: "sqlcreatedatabase"},
  { id: 43, topic: "Sql Backup DB", link: "sqlbackupdatabase"},
  { id: 44, topic: "Sql Create Table", link: "sqlcreatetable"},
  { id: 45, topic: "Sql Constraints", link: "sqlconstraints"},
  { id: 46, topic: "Sql Not Null", link: "sqlnotnull"},
  { id: 47, topic: "Sql Unique", link: "sqlunique"},
  { id: 48, topic: "Sql Primary Key", link: "sqlprimarykey"},
  { id: 49, topic: "Sql Foreign Key", link: "sqlforeignkey"},
  { id: 50, topic: "Sql Ceck", link: "sqlcheck"},
  { id: 51, topic: "Sql Default", link: "sqldefault"},
  { id: 52, topic: "Sql Create Index", link: "sqlcreateindex"},
  { id: 53, topic: "Sql Auto Increment", link: "sqlautoincrement"},
  { id: 54, topic: "Sql Dates", link: "sqldates"},
  { id: 54, topic: "Sql Views", link: "sqlviews"},
  { id: 55, topic: "Sql Injection", link: "sqlinjection"},
  { id: 56, topic: "Sql Data Types", link: "sqldatatypes"},
  { id: 57, topic: "Sql keywords", link: "sqlKeywords"},
  { id: 58, topic: "Sql Functions", link: "sqlfunctions"},
  { id: 58, topic: "Sql Server Functions", link: "sqlserverfunctions"},
  { id: 59, topic: "Sql MS Access Functions", link: "sqlmsaccessfunctions"},
  { id: 60, topic: "Sql Quick Reference", link: "sqlquickreference"},
  { id: 61, topic: "Sql Examples", link: "sqlexamples"},
  { id: 62, topic: "Sql Online Editor", link: "sqlonlineeditor"},
  { id: 63, topic: "Sql Quiz", link: "sqlquiz"},
  { id: 64, topic: "Sql Exercises", link: "sqlexercises"},
  { id: 65, topic: "Sql Syllabus", link: "sqlsyllabus"},
  { id: 66, topic: "Sql Study Plan", link: "sqlstudyplan"},
  { id: 67, topic: "Sql Bootcamp", link: "sqlbootcamp"},
  { id: 68, topic: "Sql Certificate", link: "sqlcertificate"},
  { id: 69, topic: "Sql Training", link: "sqltraining"}
  ];

const Sql_sidebar = () => {
  return (
    <div className="w-[20vw] hidden lg:block sticky top-0 p-4 overflow-y-auto h-screen bg-[#E7E9EB] mt-28">
      <ul className="flex flex-col gap-2">
        {TutorialArray.map(link => (
          <li
            key={link.id}
            className="w-full rounded-lg hover:bg-[#CCCCCC] transition-colors"
          >
            <Link
              to={link.link ? `/sql/${link.link}` : "/sql"}
              className="block p-2 w-full h-full text-left"
            >
              {link.topic}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sql_sidebar;
