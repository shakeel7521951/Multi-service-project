import React, { useState } from "react";

const Html__Keyboard_Shortcuts = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const renderTable = (title, data) => (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-left text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Windows</th>
              <th className="px-4 py-2">Mac OS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-4 py-2 whitespace-nowrap">{row.description}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.windows}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.mac}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const basicShortcuts = [
    { description: "Edit menu", windows: "Alt + E", mac: "Ctrl + F2 + F" },
    { description: "File menu", windows: "Alt + F", mac: "Ctrl + F2 + E" },
    { description: "View menu", windows: "Alt + V", mac: "Ctrl + F2 + V" },
    { description: "Select all text", windows: "Ctrl + A", mac: "Cmd + A" },
    { description: "Copy text", windows: "Ctrl + C", mac: "Cmd + C" },
    { description: "Find text", windows: "Ctrl + F", mac: "Cmd + F" },
    { description: "Find and replace text", windows: "Ctrl + H", mac: "Cmd + F" },
    { description: "New Document", windows: "Ctrl + N", mac: "Cmd + N" },
    { description: "Open a file", windows: "Ctrl + O", mac: "Cmd + O" },
    { description: "Print options", windows: "Ctrl + P", mac: "Cmd + P" },
    { description: "Save file", windows: "Ctrl + S", mac: "Cmd + S" },
    { description: "Paste text", windows: "Ctrl + V", mac: "Cmd + V" },
    { description: "Cut text", windows: "Ctrl + X", mac: "Cmd + X" },
    { description: "Redo text", windows: "Ctrl + Y", mac: "Shift + Cmd + Z" },
    { description: "Undo text", windows: "Ctrl + Z", mac: "Cmd + Z" },
    { description: "Close window/tab", windows: "Ctrl + W", mac: "Cmd + W" },
    { description: "Switch between open apps", windows: "Alt + Tab", mac: "Cmd + Tab" },
    { description: "Open Task Manager", windows: "Ctrl + Shift + Esc", mac: "Cmd + Option + Esc" },
    { description: "Lock computer", windows: "Win + L", mac: "Cmd + Control + Q" }
  ];

  const textFormatting = [
    { description: "Make selected text bold", windows: "Ctrl + B", mac: "Cmd + B" },
    { description: "Make selected text italic", windows: "Ctrl + I", mac: "Cmd + I" },
    { description: "Underline selected text", windows: "Ctrl + U", mac: "Cmd + U" },
    { description: "Make selected text superscript", windows: "Ctrl + Shift + =", mac: "Cmd + Shift + =" },
    { description: "Make selected text subscript", windows: "Ctrl + =", mac: "Cmd + =" },
    { description: "Align text left", windows: "Ctrl + L", mac: "Cmd + L" },
    { description: "Align text center", windows: "Ctrl + E", mac: "Cmd + E" },
    { description: "Align text right", windows: "Ctrl + R", mac: "Cmd + R" },
    { description: "Justify text", windows: "Ctrl + J", mac: "Cmd + J" },
    { description: "Add bullet list", windows: "Ctrl + Shift + L", mac: "Cmd + Shift + 8" },
    { description: "Add numbered list", windows: "Ctrl + Shift + 7", mac: "Cmd + Shift + 7" }
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-gray-900">Keyboard Shortcuts</h1>

        <p className="mb-6 text-lg text-gray-700">
          Keyboard shortcuts are often used in modern operating systems and software programs.
        </p>

        {renderTable("Basic Shortcuts", basicShortcuts)}
        {renderTable("Text Formatting", textFormatting)}
      </div>
    </div>
  );
};

export default Html__Keyboard_Shortcuts;
