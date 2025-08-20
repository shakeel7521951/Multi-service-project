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
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">Internet Explorer Retirement</h1>
          <p className="text-gray-600 text-lg">
            Microsoft ended all support for Internet Explorer on June 15, 2022.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            className={`px-4 py-2 font-medium ${activeTab === "retirement" ? "text-[#04AA6D] border-b-2 border-[#04AA6D]" : "text-gray-500"}`}
            onClick={() => setActiveTab("retirement")}
          >
            Retirement Timeline
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === "edge" ? "text-[#04AA6D] border-b-2 border-[#04AA6D]" : "text-gray-500"}`}
            onClick={() => setActiveTab("edge")}
          >
            Microsoft Edge
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === "google" ? "text-[#04AA6D] border-b-2 border-[#04AA6D]" : "text-gray-500"}`}
            onClick={() => setActiveTab("google")}
          >
            Google Services
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === "legacy" ? "text-[#04AA6D] border-b-2 border-[#04AA6D]" : "text-gray-500"}`}
            onClick={() => setActiveTab("legacy")}
          >
            Legacy Systems
          </button>
        </div>

        {/* Retirement Timeline */}
        {activeTab === "retirement" && (
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Internet Explorer Retirement Dates</h2>
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <div className="space-y-4">
                {retirementDates.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="font-semibold min-w-[100px]">{item.date}</div>
                    <div>{item.event}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-gray-700">Source: <a href="#" className="text-[#04AA6D] hover:underline">Microsoft Official Announcement</a></p>
            </div>

            <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Earlier Announcements</h3>
              
              <div className="mb-4">
                <h4 className="font-semibold">Windows 11 Removes Internet Explorer</h4>
                <p className="text-gray-700">Reported 24-06-2021: Internet Explorer is disabled in Windows 11</p>
                <p className="text-sm text-gray-600">Source: <a href="#" className="text-[#04AA6D] hover:underline">Windows 11 specifications</a></p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold">Windows 10 Replaces Internet Explorer</h4>
                <p className="text-gray-700">Reported 15-06-2020: Internet Explorer is "replaced" by Edge in Windows 10</p>
                <p className="text-sm text-gray-600">Source: <a href="#" className="text-[#04AA6D] hover:underline">Microsoft Blog</a></p>
              </div>
              
              <div>
                <h4 className="font-semibold">Internet Explorer Retires</h4>
                <p className="text-gray-700">Reported 15-06-2020: IE 11 goes out of support on June 15 2022</p>
                <p className="text-sm text-gray-600">Source: <a href="#" className="text-[#04AA6D] hover:underline">Microsoft Support</a></p>
              </div>
            </div>
          </section>
        )}

        {/* Microsoft Edge */}
        {activeTab === "edge" && (
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Microsoft Edge Transition</h2>
            
            <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Microsoft Edge Legacy</h3>
              <p className="text-gray-700 mb-4">
                Edge was the default browser for Windows 10. It was built with Microsoft's browser engine EdgeHTML and their Chakra JavaScript engine.
                The first versions of Edge (12-18), are now referred to as "Edge Legacy". The Microsoft support for Edge Legacy ended on March 9, 2021.
              </p>
              
              <h4 className="font-semibold mb-2">Retirement dates published August 17, 2020:</h4>
              <div className="bg-[#E7E9EB] p-4 rounded-lg">
                {edgeLegacyDates.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 mb-2 last:mb-0">
                    <div className="font-semibold min-w-[100px]">{item.date}</div>
                    <div>{item.event}</div>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-sm text-gray-600">Source: <a href="#" className="text-[#04AA6D] hover:underline">Microsoft Documentation</a></p>
            </div>
            
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">The New Edge</h3>
              <p className="text-gray-700 mb-4">
                The new Microsoft Edge is Chromium based with Blink and V8 engines. It was released in January 2020, and is available for Windows 7, 8, and 10.
                It can also be downloaded for macOS, iOS, and Android.
              </p>
              <p className="text-gray-700">
                The new Edge follows the Modern Lifecycle Policy (updates on an approx. six-week cycle) and includes Internet Explorer Mode for backward compatibility.
              </p>
            </div>
          </section>
        )}

        {/* Google Services */}
        {activeTab === "google" && (
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Google Services Support</h2>
            
            <div className="bg-[#E7E9EB] p-6 rounded-xl space-y-4">
              <div>
                <h3 className="font-semibold">Google Ad Manager</h3>
                <p className="text-gray-700">
                  As of March 28, 2022, Google Ad Manager no longer supports ad serving for Internet Explorer versions 11 and below.
                </p>
                <p className="text-sm text-gray-600">Source: <a href="#" className="text-[#04AA6D] hover:underline">Google Ad Manager Help</a></p>
              </div>
              
              <div>
                <h3 className="font-semibold">Google Search</h3>
                <p className="text-gray-700">
                  As of October 1, 2021, Google Search no longer supports Internet Explorer 11.
                </p>
                <p className="text-sm text-gray-600">Source: <a href="#" className="text-[#04AA6D] hover:underline">Google Search Central Blog</a></p>
              </div>
              
              <div>
                <h3 className="font-semibold">Google Workspace</h3>
                <p className="text-gray-700">
                  As of March 15, 2021, Google Workspace no longer supports Internet Explorer 11.
                </p>
                <p className="text-sm text-gray-600">Source: <a href="#" className="text-[#04AA6D] hover:underline">Google Workspace Updates</a></p>
              </div>
            </div>
          </section>
        )}

        {/* Legacy Systems */}
        {activeTab === "legacy" && (
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Legacy Systems and Applications</h2>
            
            <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Old Operating Systems</h3>
              <p className="text-gray-700 mb-4">
                Internet Explorer 11 is still a component in some old Windows operating systems and follows the Lifecycle Policy for these products:
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4">System</th>
                      <th className="text-left py-2 px-4">Default Browser</th>
                    </tr>
                  </thead>
                  <tbody>
                    {oldOperatingSystems.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2 px-4">{item.system}</td>
                        <td className="py-2 px-4">{item.browser}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Old Applications</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Some old PCs (like in public libraries) are still using Internet Explorer.</li>
                <li>Some legacy web applications are using Internet Explorer.</li>
                <li>Some legacy web applications are using Internet Explorer runtime DLLs.</li>
                <li>Some AJAX based applications are using Microsoft ActiveX components.</li>
              </ul>
              <p className="mt-4 text-gray-700">
                In order to ease the migration from Internet Explorer, Microsoft Edge offers Internet Explorer Mode, providing backward compatibility and enabling customers to continue to run legacy web applications.
              </p>
            </div>
          </section>
        )}

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


export default Internet_Explorer;
