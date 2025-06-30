import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Url_Encoding = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          HTML URL Encoding Reference
        </h1>

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
          {/* URL Intro */}
          <h2 className="text-3xl font-bold mb-4">What is a URL?</h2>
          <p className="mb-4">
            A URL (Uniform Resource Locator) is the address used to access a web page, such as:
            <code className="bg-gray-100 px-2 py-1 ml-2 rounded">https://www.w3schools.com</code>.
          </p>

          {/* URL Encoding */}
          <h3 className="text-2xl font-semibold mb-2 mt-8">URL Encoding (Percent Encoding)</h3>
          <p className="mb-4">
            URL encoding is the process of converting characters into a format that can be transmitted over the Internet.
          </p>
          <p className="mb-4">
            URLs can only be sent using the ASCII character-set. Characters outside this set are converted into a
            valid ASCII format using <strong>percent encoding</strong>.
          </p>
          <p className="mb-4">
            It replaces unsafe characters with a <code className="bg-gray-100 px-1 py-0.5 rounded">%</code> followed by two hexadecimal digits.
          </p>
          <p className="mb-6">
            For example, a space is replaced by <code className="bg-gray-100 px-1 py-0.5 rounded">%20</code> or a plus <code className="bg-gray-100 px-1 py-0.5 rounded">+</code>.
          </p>

          {/* ASCII Reference */}
          <h3 className="text-2xl font-semibold mb-4 mt-10">ASCII Encoding Reference</h3>
          <p className="mb-4">
            The browser encodes input according to the character-set of the page. The default in HTML5 is <code className="bg-gray-100 px-2 py-1 rounded">UTF-8</code>.
          </p>

          <div className="overflow-auto bg-[#E7E9EB] p-5 rounded-2xl mb-10">
            <table className="min-w-full border border-gray-300 text-sm text-left text-gray-800">
              <thead className="bg-gray-200 text-gray-900">
                <tr>
                  <th className="border border-gray-300 px-3 py-2">Character</th>
                  <th className="border border-gray-300 px-3 py-2">From Windows-1252</th>
                  <th className="border border-gray-300 px-3 py-2">From UTF-8</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  { char: "space", win: "%20", utf: "%20" },
                  { char: "!", win: "%21", utf: "%21" },
                  { char: '"', win: "%22", utf: "%22" },
                  { char: "#", win: "%23", utf: "%23" },
                  { char: "$", win: "%24", utf: "%24" },
                  { char: "%", win: "%25", utf: "%25" },
                  { char: "&", win: "%26", utf: "%26" },
                  { char: "'", win: "%27", utf: "%27" },
                  { char: "(", win: "%28", utf: "%28" },
                  { char: ")", win: "%29", utf: "%29" },
                  { char: "*", win: "%2A", utf: "%2A" },
                  { char: "+", win: "%2B", utf: "%2B" },
                  { char: ",", win: "%2C", utf: "%2C" },
                  { char: "-", win: "%2D", utf: "%2D" },
                  { char: ".", win: "%2E", utf: "%2E" },
                  { char: "/", win: "%2F", utf: "%2F" },
                  { char: ":", win: "%3A", utf: "%3A" },
                  { char: ";", win: "%3B", utf: "%3B" },
                  { char: "<", win: "%3C", utf: "%3C" },
                  { char: "=", win: "%3D", utf: "%3D" },
                  { char: ">", win: "%3E", utf: "%3E" },
                  { char: "?", win: "%3F", utf: "%3F" },
                  { char: "@", win: "%40", utf: "%40" },
                  { char: "A", win: "%41", utf: "%41" },
                  { char: "B", win: "%42", utf: "%42" },
                  { char: "a", win: "%61", utf: "%61" },
                  { char: "b", win: "%62", utf: "%62" },
                  { char: "€", win: "%80", utf: "%E2%82%AC" },
                  { char: "™", win: "%99", utf: "%E2%84" },
                ].map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-3 py-2">{item.char}</td>
                    <td className="border border-gray-300 px-3 py-2">{item.win}</td>
                    <td className="border border-gray-300 px-3 py-2">{item.utf}</td>
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

export default Html_Url_Encoding;
