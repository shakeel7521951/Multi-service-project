import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Internet_Explorer = () => {
  const [activeTab, setActiveTab] = useState("retirement");

  const retirementDates = [
    { date: "17-08-2020", event: "This announcement" },
    { date: "30-11-2020", event: "MS Teams ended support for IE 11" },
    { date: "31-12-2020", event: "Azure DevOps Services ended support for IE 11" },
    { date: "31-03-2021", event: "Azure Portal ended support for IE 11" },
    { date: "17-08-2021", event: "Microsoft ended support for IE 11 across web services: Office 365, OneDrive, Outlook" },
    { date: "15-06-2022", event: "Microsoft ends all support for IE 11" }
  ];

  const edgeLegacyDates = [
    { date: "31-12-2020", event: "Azure DevOps Services stops supporting Edge Legacy" },
    { date: "09-03-2021", event: "End of Windows updates for Edge Legacy" },
    { date: "13-04-2021", event: "Future Windows updates will remove Edge Legacy" }
  ];

  const oldOperatingSystems = [
    { system: "Windows 7", browser: "Internet Explorer 11" },
    { system: "Windows 8.X", browser: "Internet Explorer 11" },
    { system: "Windows 10", browser: "Internet Explorer 11" },
    { system: "Windows Server 2012", browser: "Internet Explorer 11" },
    { system: "Windows Server 2012 R2", browser: "Internet Explorer 11" },
    { system: "Windows Server 2016", browser: "Internet Explorer 11" },
    { system: "Windows Embedded Standard 7", browser: "Internet Explorer 11" },
    { system: "Windows Embedded POSReady 7", browser: "Internet Explorer 11" },
    { system: "Windows Thin PC", browser: "Internet Explorer 11" },
    { system: "Windows Embedded 8 Standard", browser: "Internet Explorer 11" },
    { system: "Windows 8.1 Industry Update", browser: "Internet Explorer 11" }
  ];

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Internet Explorer Retirement</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Microsoft ended all support for Internet Explorer on June 15, 2022.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#03945f] transition shadow-md">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap border-b border-gray-200">
          {[
            { key: "retirement", label: "Retirement Timeline" },
            { key: "edge", label: "Microsoft Edge" },
            { key: "google", label: "Google Services" },
            { key: "legacy", label: "Legacy Systems" },
          ].map(({ key, label }) => (
            <button
              key={key}
              className={`px-4 py-2 font-medium transition ${
                activeTab === key
                  ? "text-[#04AA6D] border-b-2 border-[#04AA6D]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Retirement Timeline */}
        {activeTab === "retirement" && (
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Internet Explorer Retirement Dates</h2>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="space-y-4">
                {retirementDates.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
                    <div className="font-semibold text-gray-900 w-32">{item.date}</div>
                    <div className="text-gray-700">{item.event}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-gray-700">Source: <a href="#" className="text-[#04AA6D] hover:underline">Microsoft Official Announcement</a></p>
            </div>

            <div className="bg-[#D9EEE1] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Earlier Announcements</h3>

              {[{
                title: "Windows 11 Removes Internet Explorer",
                desc: "Reported 24-06-2021: Internet Explorer is disabled in Windows 11",
                src: "Windows 11 specifications"
              },{
                title: "Windows 10 Replaces Internet Explorer",
                desc: "Reported 15-06-2020: Internet Explorer is \"replaced\" by Edge in Windows 10",
                src: "Microsoft Blog"
              },{
                title: "Internet Explorer Retires",
                desc: "Reported 15-06-2020: IE 11 goes out of support on June 15 2022",
                src: "Microsoft Support"
              }].map((item, idx) => (
                <div key={idx} className="mb-5 last:mb-0">
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-gray-700">{item.desc}</p>
                  <p className="text-sm text-gray-600">Source: <a href="#" className="text-[#04AA6D] hover:underline">{item.src}</a></p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Microsoft Edge */}
        {activeTab === "edge" && (
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Microsoft Edge Transition</h2>

            <div className="bg-[#D9EEE1] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Microsoft Edge Legacy</h3>
              <p className="text-gray-700 mb-4">
                Edge was the default browser for Windows 10. It was built with Microsoft's browser engine EdgeHTML and Chakra JavaScript engine. The first versions of Edge (12-18) are now referred to as "Edge Legacy". Support ended on March 9, 2021.
              </p>

              <h4 className="font-semibold mb-3">Retirement dates published August 17, 2020:</h4>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                {edgeLegacyDates.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6 mb-2 last:mb-0">
                    <div className="font-semibold text-gray-900 w-32">{item.date}</div>
                    <div className="text-gray-700">{item.event}</div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm text-gray-600">Source: <a href="#" className="text-[#04AA6D] hover:underline">Microsoft Documentation</a></p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">The New Edge</h3>
              <p className="text-gray-700 mb-4">
                The new Microsoft Edge is Chromium based with Blink and V8 engines. It was released in January 2020, available for Windows 7, 8, and 10, macOS, iOS, and Android.
              </p>
              <p className="text-gray-700">
                It follows the Modern Lifecycle Policy (approx. six-week update cycle) and includes Internet Explorer Mode for backward compatibility.
              </p>
            </div>
          </section>
        )}

        {/* Google Services */}
        {activeTab === "google" && (
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Google Services Support</h2>

            <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
              {[{
                title: "Google Ad Manager",
                desc: "As of March 28, 2022, Google Ad Manager no longer supports ad serving for Internet Explorer versions 11 and below.",
                src: "Google Ad Manager Help"
              },{
                title: "Google Search",
                desc: "As of October 1, 2021, Google Search no longer supports Internet Explorer 11.",
                src: "Google Search Central Blog"
              },{
                title: "Google Workspace",
                desc: "As of March 15, 2021, Google Workspace no longer supports Internet Explorer 11.",
                src: "Google Workspace Updates"
              }].map((item, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                  <p className="text-sm text-gray-600">Source: <a href="#" className="text-[#04AA6D] hover:underline">{item.src}</a></p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Legacy Systems */}
        {activeTab === "legacy" && (
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Legacy Systems and Applications</h2>

            <div className="bg-[#D9EEE1] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Old Operating Systems</h3>
              <p className="text-gray-700 mb-4">
                Internet Explorer 11 is still a component in some old Windows operating systems and follows the Lifecycle Policy for these products:
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border rounded-md overflow-hidden">
                  <thead className="bg-gray-100">
                    <tr className="border-b">
                      <th className="text-left py-2 px-4">System</th>
                      <th className="text-left py-2 px-4">Default Browser</th>
                    </tr>
                  </thead>
                  <tbody>
                    {oldOperatingSystems.map((item, index) => (
                      <tr key={index} className="border-b last:border-none">
                        <td className="py-2 px-4 text-gray-800">{item.system}</td>
                        <td className="py-2 px-4 text-gray-800">{item.browser}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">Old Applications</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Some old PCs (like in public libraries) are still using Internet Explorer.</li>
                <li>Some legacy web applications are using Internet Explorer.</li>
                <li>Some legacy web applications are using Internet Explorer runtime DLLs.</li>
                <li>Some AJAX based applications are using Microsoft ActiveX components.</li>
              </ul>
              <p className="mt-4 text-gray-700">
                To ease migration, Microsoft Edge offers Internet Explorer Mode for backward compatibility, enabling customers to continue running legacy applications.
              </p>
            </div>
          </section>
        )}

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#03945f] transition shadow-md">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Internet_Explorer;
