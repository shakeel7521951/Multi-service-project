import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html__Ems_Conversion = () => {
  const baseSize = 16;
  const maxPixel = 50;

  const conversionData = Array.from({ length: maxPixel - 4 }, (_, i) => {
    const px = i + 5;
    const em = px / baseSize;
    const percent = ((px / baseSize) * 100).toFixed(2) + "%";
    return { px, em: em.toFixed(4), percent };
  });

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Pixels to Ems Conversion</h1>

        <div className="flex justify-between mb-10">
          <button
            type="button"
            aria-label="Previous"
            className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer"
          >
            <FaChevronLeft />
            Previous
          </button>
          <button
            type="button"
            aria-label="Next"
            className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer"
          >
            Next
            <FaChevronRight />
          </button>
        </div>

        <section className="text-gray-800">
          <h2 className="text-3xl font-bold mb-4">Pixel to Em Converter</h2>
          <p className="mb-4">
            The tool below allows you to work out the <strong>em sizes from pixels</strong> (or vice versa).
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li>Set a default pixel size for body (usually <strong>16px</strong>)</li>
            <li>Then, convert a pixel value to em, based on the default pixel size</li>
            <li>Or, convert an em value to pixels, based on the default pixel size</li>
          </ul>

          <div className="overflow-x-auto bg-[#E7E9EB] rounded-2xl p-5 mb-10">
            <table className="min-w-full text-left bg-white border border-gray-300 rounded">
              <thead className="bg-[#04AA6D] text-white">
                <tr>
                  <th className="py-2 px-4 border-r">Pixels (px)</th>
                  <th className="py-2 px-4 border-r">Ems (em)</th>
                  <th className="py-2 px-4">Percent (%)</th>
                </tr>
              </thead>
              <tbody>
                {conversionData.map((row, index) => (
                  <tr
                    key={row.px}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="py-2 px-4 border-r">{row.px}px</td>
                    <td className="py-2 px-4 border-r">{row.em}em</td>
                    <td className="py-2 px-4">{row.percent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

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

export default Html__Ems_Conversion;
