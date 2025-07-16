import { Outlet } from "react-router-dom";
import Default from "../courses/js/Default";
import Js_sidebar from "../side_bars/Js_sidebar";
import JsIntro from '../courses/js/JsIntro'
import Where_To from "../courses/js/Where_To";
import Output from "../courses/js/Output";
import Statements from "../courses/js/Statements";
import Syntax from "../courses/js/Syntax";
import Comments from "../courses/js/Comments";
import Variables from "../courses/js/Variables";
import Let from "../courses/js/Let";
import Const from "../courses/js/Const";
import Operators from "../courses/js/Operators";
import Arithmetic from "../courses/js/Arithmetic";
import Assignment from "../courses/js/Assignment";
import Data_Types from "../courses/js/Data_Types";
import Functions from "../courses/js/Functions";
import Objects from "../courses/js/Objects";
import Object_Properties from "../courses/js/Object_Properties";
import Object_Methods from "../courses/js/Object_Methods";
import Display_Objects from "../courses/js/Display_Objects";
import Object_Constructors from "../courses/js/Object_Constructors";
import Events from "../courses/js/Events";
import Strings from "../courses/js/Strings";
import String_Methods from "../courses/js/String_Methods";
import String_Search from "../courses/js/String_Search";
import String_Reference from "../courses/js/String_Reference";
import Template_Strings from "../courses/js/Template_Strings";
import Numbers from "../courses/js/Numbers";
import BigInt from "../courses/js/BigInt";
import Number_Methods from "../courses/js/Number_Methods";
import Number_Properties from "../courses/js/Number_Properties";
import Number_Reference from "../courses/js/Number_Reference";
import Arrays from "../courses/js/Arrays";
import Array_Methods from "../courses/js/Array_Methods";
import Array_Search from "../courses/js/Array_Search";
import Array_Sort from "../courses/js/Array_Sort";
import Array_Iterations from "../courses/js/Array_Iterations";
import Array_Reference from "../courses/js/Array_Reference";
import Array_Const from "../courses/js/Array_Const";
import Date_Objects from "../courses/js/Date_Objects";
import Date_Formats from "../courses/js/Date_Formats";
import Get_Date from "../courses/js/Get_Date";
import Set_Date from "../courses/js/Set_Date";
import Math from "../courses/js/Math";
import Math_Reference from "../courses/js/Math_Reference";
import Random from "../courses/js/Random";
import Booleans from "../courses/js/Booleans";
import Comparison from "../courses/js/Comparison";
import If_Else from "../courses/js/If_Else.jsx";
import Switch from "../courses/js/Switch.jsx";
import For_Loop from "../courses/js/For_Loop.jsx";
import For_In from "../courses/js/For_In.jsx";
import For_Of from "../courses/js/For_Of.jsx";
import While_Loop from "../courses/js/While_Loop.jsx";
import Break_Continue from "../courses/js/Break_Continue.jsx";
import Set from "../courses/js/Set.jsx";
import Set_Methods from "../courses/js/Set_Methods.jsx";
import Set_Logic from "../courses/js/Set_Logic.jsx";
import Set_Reference from "../courses/js/Set_Reference.jsx";
import Maps from "../courses/js/Maps.jsx";
import Map_Methods from "../courses/js/Map_Methods.jsx";
import Map_Reference from "../courses/js/Map_Reference.jsx";
import Typed_Arrays from "../courses/js/Typed_Arrays.jsx";
import Typed_Array_Methods from "../courses/js/Typed_Array_Methods.jsx";
import Typed_Array_Reference from "../courses/js/Typed_Array_Reference.jsx";
import Iterables from "../courses/js/Iterables.jsx";
import Iterators from "../courses/js/Iterators.jsx";
import Type_Of from "../courses/js/Type_Of.jsx";
import To_String from "../courses/js/To_String.jsx";
import Type_Conversion from "../courses/js/Type_Conversion.jsx";
import Destructuring from "../courses/js/Destructuring.jsx";
import Bitwise_Operations from "../courses/js/Bitwise_Operations.jsx";
import Regular_Expressions from "../courses/js/Regular_Expressions.jsx";
import Expression_Methods from "../courses/js/Expression_Methods.jsx";

const JsLayout = () => (
  <div className="flex">
    <Js_sidebar />
    <div className="flex-1 p-4">
      <Outlet />
    </div>
  </div>
);

export const JsRoutes = {
  path: "js",
  element: <JsLayout />,
  children: [
    { index: true, element: <Default /> },
    { path: "default", element: <Default /> },
    { path: "introjs", element:<JsIntro/> },
    { path: "whereto", element:<Where_To/> },
    { path: "output", element:<Output/> },
    { path: "statements", element:<Statements/> },
    { path: "syntax", element:<Syntax/> },
    { path: "comments", element:<Comments/> },
    { path: "variables", element:<Variables/> },
    { path: "let", element:<Let/> },
    { path: "const", element:<Const/> },
    { path: "operators", element:<Operators/> },
    { path: "arithmetic", element:<Arithmetic/> },
    { path: "arithmetic", element:<Arithmetic/> },
    { path: "assignment", element:<Assignment/> },
    { path: "datatypes", element:<Data_Types/> },
    { path: "functions", element:<Functions/> },
    { path: "objects", element:<Objects/> },
    { path: "objectproperties", element:<Object_Properties/> },
    { path: "objectmethods", element:<Object_Methods/> },
    { path: "displayobjects", element:<Display_Objects/> },
    { path: "objectconstructors", element:<Object_Constructors/> },
    { path: "events", element:<Events/> },
    { path: "strings", element:<Strings/> },
    { path: "stringmethods", element:<String_Methods/> },
    { path: "stringsearch", element:<String_Search/> },
    { path: "stringreference", element:<String_Reference/> },
    { path: "templatestrings", element:<Template_Strings/> },
    { path: "numbers", element:<Numbers/> },
    { path: "bigInt", element:<BigInt/> },
    { path: "numbermethods", element:<Number_Methods/> },
    { path: "numberproperties", element:<Number_Properties/> },
    { path: "numberreference", element:<Number_Reference/> },
    { path: "arrays", element:<Arrays/> },
    { path: "arraymethods", element:<Array_Methods/> },
    { path: "arraysearch", element:<Array_Search/> },
    { path: "arraysort", element:<Array_Sort/> },
    { path: "arrayiterations", element:<Array_Iterations/> },
    { path: "arrayreference", element:<Array_Reference/> },
    { path: "arrayconst", element:<Array_Const/> },
    { path: "dateobjects", element:<Date_Objects/> },
    { path: "dateformats", element:<Date_Formats/> },
    { path: "getdate", element:<Get_Date/> },
    { path: "setdate", element:<Set_Date/> },
    { path: "math", element:<Math/> },
    { path: "mathreference", element:<Math_Reference/> },
    { path: "random", element:<Random/> },
    { path: "booleans", element:<Booleans/> },
    { path: "comparison", element:<Comparison/> },
    { path: "ifelse", element:<If_Else/> },
    { path: "switch", element:<Switch/> },
    { path: "forloop", element:<For_Loop/> },
    { path: "forin", element:<For_In/> },
    { path: "forof", element:<For_Of/> },
    { path: "whileloop", element:<While_Loop/> },
    { path: "breakcontinue", element:<Break_Continue/> },
    { path: "set", element:<Set/> },
    { path: "setmethods", element:<Set_Methods/> },
    { path: "setlogic", element:<Set_Logic/> },
    { path: "setreference", element:<Set_Reference/> },
    { path: "maps", element:<Maps/> },
    { path: "mapmethods", element:<Map_Methods/> },
    { path: "mapreference", element:<Map_Reference/> },
    { path: "typedarrays", element:<Typed_Arrays/> },
    { path: "typedarraymethods", element:<Typed_Array_Methods/> },
    { path: "typedarrayreference", element:<Typed_Array_Reference/> },
    { path: "iterables", element:<Iterables/> },
    { path: "iterators", element:<Iterators/> },
    { path: "typeof", element:<Type_Of/> },
    { path: "tostring", element:<To_String/> },
    { path: "typeconversion", element:<Type_Conversion/> },
    { path: "destructuring", element:<Destructuring/> },
    { path: "bitwiseoperations", element:<Bitwise_Operations/> },
    { path: "regularexpressions", element:<Regular_Expressions/> },
    { path: "expressionmethods", element:<Expression_Methods/> }
    
  ],
};
