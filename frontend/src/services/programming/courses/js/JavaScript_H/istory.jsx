import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const JavaScript_History = () => {
  const historyData = [
    { year: 1995, ecma: "", browser: "JavaScript was invented by Brendan Eich" },
    { year: 1996, ecma: "", browser: "Netscape 2 was released with JavaScript 1.0" },
    { year: 1997, ecma: "", browser: "JavaScript became an ECMA standard (ECMA-262)" },
    { year: 1997, ecma: "ES1", browser: "ECMAScript 1 was released" },
    { year: 1997, ecma: "ES1", browser: "IE 4 was the first browser to support ES1" },
    { year: 1998, ecma: "ES2", browser: "ECMAScript 2 was released" },
    { year: 1998, ecma: "", browser: "Netscape 42 was released with JavaScript 1.3" },
    { year: 1999, ecma: "ES2", browser: "IE 5 was the first browser to support ES2" },
    { year: 1999, ecma: "ES3", browser: "ECMAScript 3 was released" },
    { year: 2000, ecma: "ES3", browser: "IE 5.5 was the first browser to support ES3" },
    { year: 2000, ecma: "", browser: "Netscape 62 was released with JavaScript 1.5" },
    { year: 2000, ecma: "", browser: "Firefox 1 was released with JavaScript 1.5" },
    { year: 2008, ecma: "ES4", browser: "ECMAScript 4 was abandoned" },
    { year: 2009, ecma: "ES5", browser: "ECMAScript 5 was released" },
    { year: 2011, ecma: "ES5", browser: "IE 9 was the first browser to support ES5 *" },
    { year: 2011, ecma: "ES5", browser: "Firefox 4 was released with JavaScript 1.8.5" },
    { year: 2012, ecma: "ES5", browser: "Full support for ES5 in Safari 6" },
    { year: 2012, ecma: "ES5", browser: "Full support for ES5 in IE 10" },
    { year: 2012, ecma: "ES5", browser: "Full support for ES5 in Chrome 23" },
    { year: 2013, ecma: "ES5", browser: "Full support for ES5 in Firefox 21" },
    { year: 2013, ecma: "ES5", browser: "Full support for ES5 in Opera 15" },
    { year: 2014, ecma: "ES5", browser: "Full support for ES5 in all browsers" },
    { year: 2015, ecma: "ES6", browser: "ECMAScript 6 was released" },
    { year: 2016, ecma: "ES6", browser: "Full support for ES6 in Chrome 51" },
    { year: 2016, ecma: "ES6", browser: "Full support for ES6 in Opera 38" },
    { year: 2016, ecma: "ES6", browser: "Full support for ES6 in Safari 10" },
    { year: 2017, ecma: "ES6", browser: "Full support for ES6 in Firefox 54" },
    { year: 2017, ecma: "ES6", browser: "Full support for ES6 in Edge 15" },
    { year: 2018, ecma: "ES6", browser: "Full support for ES6 in all browsers **" }
  ];

  const tc39Info = `In 1996, Netscape and Brendan Eich took JavaScript to the ECMA international standards organization, and a technical committee (TC39) was created to develop the language.

ECMA-262 Edition 1 was released in June 1997.`;

  const es4ToEs6Info = `When the TC39 committee got together in Oslo in 2008, to agree on ECMAScript 4, they were divided into 2 very different camps:

The ECMAScript 3.1 Camp:
Microsoft and Yahoo who wanted an incremental upgrade from ES3.

The ECMAScript 4 Camp:
Adobe, Mozilla, Opera, and Google who wanted a massive ES4 upgrade.

August 13 2008, Brendan Eich wrote an email:

"It's no secret that the JavaScript standards body, Ecma's Technical Committee 39, has been split for over a year, with some members favoring ES4, a major fourth edition to ECMA-262, and others advocating ES3.1 based on the existing ECMA-262 Edition 3 (ES3) specification. Now, I'm happy to report, the split is over."

The solution was to work together:
- ECMAScript 4 was renamed to ES5
- ES5 should be an incremental upgrade of ECMAScript 3.
- Features of ECMAScript 4 should be picked up in later versions.
- TC39 should develop a new major release, bigger in scope than ES5.

The planned new release (ES6) was codenamed "Harmony" (Because of the split it created?).

ES5 was a huge success. It was released in 2009, and all major browsers (including Internet Explorer) were fully compliant by July 2013:

Chrome 23    IE10/Edge    Firefox 21    Safari 6    Opera 15
Nov 2012     Sep 2012     May 2013      Jul 2012    Jul 2013

ES6 was also a huge success. It was released in 2015, and all major browsers were fully compliant by March 2017:

Chrome 51    Edge 14    Firefox 52    Safari 10    Opera 38
May 2016     Aug 2016   Mar 2017      Sep 2016     Jun 2016`;

  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript History</h1>
          <p className="text-gray-600 text-lg">
            Explore the evolution of JavaScript and ECMAScript standards through the years.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">JavaScript / ECMAScript</h2>
          <p className="text-gray-800 mb-3">
            JavaScript was invented by Brendan Eich in 1995.
          </p>
          <p className="text-gray-800 mb-3">
            It was developed for Netscape 2, and became the ECMA-262 standard in 1997.
          </p>
          <p className="text-gray-800 mb-6">
            After Netscape handed JavaScript over to ECMA, the Mozilla foundation continued to develop JavaScript for the Firefox browser. Mozilla's latest version was 1.8.5. (Identical to ES5).
          </p>
          <p className="text-gray-800 mb-6">
            Internet Explorer (IE4) was the first browser to support ECMA-262 Edition 1 (ES1).
          </p>
        </section>

        {/* Timeline Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">JavaScript Timeline</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b">Year</th>
                  <th className="py-2 px-4 border-b">ECMA</th>
                  <th className="py-2 px-4 border-b">Browser</th>
                </tr>
              </thead>
              <tbody>
                {historyData.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="py-2 px-4 border-b">{item.year}</td>
                    <td className="py-2 px-4 border-b">{item.ecma}</td>
                    <td className="py-2 px-4 border-b">{item.browser}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p>* Internet Explorer 9 did not support ES5 "use strict".</p>
            <p>** Internet Explorer 11 does not support ES6.</p>
          </div>
        </section>

        {/* TC39 Section */}
        <section className="bg-[#E7E9EB] p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">The ECMA Technical Committee 39</h2>
          <pre className="whitespace-pre-wrap font-sans text-gray-800 mb-4">{tc39Info}</pre>
          <button
            onClick={() => handleCopy(tc39Info)}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
          >
            {copied ? "Copied!" : "Copy Text"}
          </button>
        </section>

        {/* ES4 to ES6 Section */}
        <section className="bg-[#E7E9EB] p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">From ES4 to ES6</h2>
          <pre className="whitespace-pre-wrap font-sans text-gray-800 mb-4">{es4ToEs6Info}</pre>
          <button
            onClick={() => handleCopy(es4ToEs6Info)}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
          >
            {copied ? "Copied!" : "Copy Text"}
          </button>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};


export default JavaScript_History;
