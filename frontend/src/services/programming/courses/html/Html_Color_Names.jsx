import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const colorList = [
  { name: "AliceBlue", hex: "#F0F8FF" },
  { name: "AntiqueWhite", hex: "#FAEBD7" },
  { name: "Aqua", hex: "#00FFFF" },
  { name: "Aquamarine", hex: "#7FFFD4" },
  { name: "Azure", hex: "#F0FFFF" },
  { name: "Beige", hex: "#F5F5DC" },
  { name: "Bisque", hex: "#FFE4C4" },
  { name: "Black", hex: "#000000" },
  { name: "BlanchedAlmond", hex: "#FFEBCD" },
  { name: "Blue", hex: "#0000FF" },
  { name: "BlueViolet", hex: "#8A2BE2" },
  { name: "Brown", hex: "#A52A2A" },
  { name: "BurlyWood", hex: "#DEB887" },
  { name: "CadetBlue", hex: "#5F9EA0" },
  { name: "Chartreuse", hex: "#7FFF00" },
  { name: "Chocolate", hex: "#D2691E" },
  { name: "Coral", hex: "#FF7F50" },
  { name: "CornflowerBlue", hex: "#6495ED" },
  { name: "Cornsilk", hex: "#FFF8DC" },
  { name: "Crimson", hex: "#DC143C" },
  // 🔽 Add more as needed
];

const getTextColor = (bgColor) => {
  // Basic luminance check for readability
  const color = bgColor.substring(1);
  const r = parseInt(color.substr(0, 2), 16);
  const g = parseInt(color.substr(2, 2), 16);
  const b = parseInt(color.substr(4, 2), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b);
  return luminance > 186 ? "text-gray-900" : "text-white";
};

const Html_Color_Names = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">HTML Color Names</h1>
        
                        <div className="flex justify-between mb-10">
                          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
                            <FaChevronLeft />
                            Previous
                          </button>
                         
                        </div>
        <p className="text-gray-700 mb-2">
          Modern browsers support 140 standard HTML color names. Each tile below shows the color with its name and hex code.
        </p>
        <p className="mb-8 text-gray-700">
          Learn more on the{" "}
          <a
            href="https://www.w3schools.com/colors/default.asp"
            className="text-[#04AA6D] font-semibold hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            HTML Colors Tutorial
          </a>.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {colorList.map((color) => {
            const textColor = getTextColor(color.hex);
            return (
              <div
                key={color.name}
                className={`rounded-2xl p-4 shadow transition duration-200 transform hover:scale-[1.03] border`}
                style={{ backgroundColor: color.hex }}
              >
                <div className={`text-sm font-semibold ${textColor}`}>
                  {color.name}
                </div>
                <div className={`text-xs mt-1 ${textColor}/80`}>
                  {color.hex}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end mt-10">
                        <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
                          Next
                          <FaChevronRight />
                        </button>
                      </div>
      </div>
    </div>
  );
};

export default Html_Color_Names;
