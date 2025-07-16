import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Reserved_Words = () => {
  const reservedWords = [
    "abstract", "arguments", "await", "boolean", "break", "byte", "case", "catch", "char",
    "class", "const", "continue", "debugger", "default", "delete", "do", "double", "else",
    "enum", "eval", "export", "extends", "false", "final", "finally", "float", "for", "function",
    "goto", "if", "implements", "import", "in", "instanceof", "int", "interface", "let", "long",
    "native", "new", "null", "package", "private", "protected", "public", "return", "short",
    "static", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "true",
    "try", "typeof", "var", "void", "volatile", "while", "with", "yield",
  ];

  const removedWords = [
    "abstract", "boolean", "byte", "char", "double", "final", "float", "goto",
    "int", "long", "native", "short", "synchronized", "throws", "transient", "volatile",
  ];

  const jsObjects = [
    "Array", "Date", "eval", "function", "hasOwnProperty", "Infinity", "isFinite", "isNaN",
    "isPrototypeOf", "length", "Math", "NaN", "name", "Number", "Object", "prototype", "String",
    "toString", "undefined", "valueOf",
  ];

  const javaWords = [
    "getClass", "java", "JavaArray", "javaClass", "JavaObject", "JavaPackage",
  ];

  const htmlWindowObjects = [
    "alert", "all", "anchor", "anchors", "area", "assign", "blur", "button", "checkbox", 
    "clearInterval", "clearTimeout", "clientInformation", "close", "closed", "confirm", 
    "constructor", "crypto", "decodeURI", "decodeURIComponent", "defaultStatus", "document", 
    "element", "elements", "embed", "embeds", "encodeURI", "encodeURIComponent", "escape", 
    "event", "fileUpload", "focus", "form", "forms", "frame", "innerHeight", "innerWidth", 
    "layer", "layers", "link", "location", "mimeTypes", "navigate", "navigator", "frames", 
    "frameRate", "hidden", "history", "image", "images", "offscreenBuffering", "open", 
    "opener", "option", "outerHeight", "outerWidth", "packages", "pageXOffset", 
    "pageYOffset", "parent", "parseFloat", "parseInt", "password", "pkcs11", "plugin", 
    "prompt", "propertyIsEnum", "radio", "reset", "screenX", "screenY", "scroll", "secure", 
    "select", "self", "setInterval", "setTimeout", "status", "submit", "taint", "text", 
    "textarea", "top", "unescape", "untaint", "window"
  ];

  const eventHandlers = [
    "onblur", "onclick", "onerror", "onfocus", "onkeydown", "onkeypress", 
    "onkeyup", "onmouseover", "onload", "onmouseup", "onmousedown", "onsubmit"
  ];

  const renderGrid = (title, items) => (
    <section>
      <h3 className="text-2xl font-semibold mt-10 mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {items.map((item, idx) => (
          <span
            key={idx}
            className="bg-gray-100 px-3 py-2 rounded text-sm text-gray-800 text-center hover:bg-black hover:text-white transition"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Reserved Words</h1>
          <p className="text-gray-600 text-lg">
            Learn which JavaScript words are restricted and should be avoided in your code to prevent errors or conflicts.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            HTML
          </button>
        </div>

        {/* Intro */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">Avoid Using Reserved Words</h2>
          <p className="text-gray-800 mb-4">
            In JavaScript, certain words are reserved by the language and cannot be used as identifiers such as variable names, function names, or labels.
          </p>
          <p className="text-gray-800">
            Reserved words come from JavaScript itself, ECMAScript versions, Java, and even the browser's global scope (like `window` or `document`).
          </p>
        </section>

        {/* Word Lists */}
        {renderGrid("JavaScript Reserved Words", reservedWords)}
        {renderGrid("Removed Reserved Words", removedWords)}
        {renderGrid("Built-in JavaScript Objects, Properties, and Methods", jsObjects)}
        {renderGrid("Java Reserved Words", javaWords)}
        {renderGrid("HTML/Window Objects and Properties", htmlWindowObjects)}
        {renderGrid("HTML Event Handlers", eventHandlers)}

        {/* Next Button */}
        <div className="flex justify-end pt-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reserved_Words;
