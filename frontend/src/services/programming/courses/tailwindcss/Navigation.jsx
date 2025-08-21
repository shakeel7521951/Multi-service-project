import { useState } from "react";
import { FaChevronLeft, FaCheck } from "react-icons/fa";

const Navigation = () => {
  const [copied, setCopied] = useState("");
  const [activeTab, setActiveTab] = useState({});

  const examples = {
    simpleNavbar: {
      code: `<nav class="bg-gray-800 p-4 text-white flex justify-between items-center">
  <div class="font-bold">Brand</div>
  <ul class="flex space-x-4">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>`,
      description: "A basic horizontal navbar with brand name and menu items aligned using flexbox.",
      explanation: `
- **Purpose:** Standard top navigation bar.
- **Layout:** Flexbox with \`justify-between\` aligns brand and menu.
- **Classes:**
  - \`bg-gray-800\`: dark background
  - \`p-4\`: padding
  - \`flex justify-between items-center\`: horizontal layout
  - \`space-x-4\`: spacing between menu items
- **Use Case:** Simple websites with few links.
`
    },
    stickyNavbar: {
      code: `<nav class="bg-gray-800 p-4 text-white sticky top-0 z-50">
  <div class="font-bold">Sticky Navbar</div>
</nav>`,
      description: "A sticky navbar that stays at the top when scrolling.",
      explanation: `
- **Purpose:** Keep navigation visible on long pages.
- **Layout:** Sticky positioning with z-index.
- **Classes:**
  - \`sticky top-0\`: sticky at top
  - \`z-50\`: ensures it overlays content
- **Use Case:** Dashboards, blogs, or long content pages.
`
    },
    sidebarNavigation: {
      code: `<div class="flex">
  <aside class="w-64 bg-gray-900 text-white min-h-screen p-4">
    <h2 class="font-bold mb-4">Sidebar</h2>
    <ul class="space-y-2">
      <li>Dashboard</li>
      <li>Settings</li>
      <li>Profile</li>
    </ul>
  </aside>
  <main class="flex-1 p-6">
    <h1 class="text-2xl font-bold">Main Content</h1>
  </main>
</div>`,
      description: "A sidebar navigation layout with main content area.",
      explanation: `
- **Purpose:** Side navigation for dashboards or apps.
- **Layout:** Flex container: fixed-width sidebar, flexible main content.
- **Classes:**
  - \`w-64\`: sidebar width
  - \`min-h-screen\`: full height
  - \`flex-1\`: main content fills remaining space
  - \`space-y-2\`: spacing between sidebar items
- **Use Case:** Admin panels, apps, multi-section sites.
`
    },
    responsiveNavbar: {
      code: `<nav class="bg-blue-600 p-4 text-white flex justify-between items-center">
  <div class="font-bold">Brand</div>
  <button class="md:hidden">Menu</button>
  <ul class="hidden md:flex space-x-4">
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact</li>
  </ul>
</nav>`,
      description: "A responsive navbar with hamburger menu for small screens.",
      explanation: `
- **Purpose:** Mobile-friendly navigation.
- **Layout:** Flexbox with menu button hidden on medium+ screens.
- **Classes:**
  - \`md:hidden\`: hide button on medium+ screens
  - \`hidden md:flex\`: hide links on small screens, show on medium+
  - \`space-x-4\`: spacing between links
- **Use Case:** Websites that adapt to screen size.
`
    },
  };

  const handleCopy = (name) => {
    navigator.clipboard.writeText(examples[name].code)
      .then(() => setCopied(name))
      .catch(err => console.error("Copy failed", err));
    setTimeout(() => setCopied(""), 1500);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-extrabold mb-2">Tailwind CSS – Navigation</h1>
          <p className="text-gray-600 text-lg">
            Navigation elements help users move through your website efficiently. Explore top navbars, sticky navbars, sidebars, and responsive menus.
          </p>
        </header>

        {/* Back Button */}
        <div className="flex justify-start">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back: Components
          </button>
        </div>

        {/* Navigation Examples */}
        {Object.entries(examples).map(([name, data]) => (
          <section key={name} className="space-y-4">
            <h2 className="text-2xl font-bold mb-2">
              {name.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </h2>
            <p className="text-gray-700 mb-4">{data.description}</p>

            <div className="bg-[#D9EEE1] p-6 rounded-xl space-y-4">
              {/* Tabs */}
              <div className="flex border-b border-gray-200">
                {["Preview", "Code", "Explanation"].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab({ ...activeTab, [name]: tab })}
                    className={`px-4 py-2 font-medium -mb-px border-b-2 transition ${
                      activeTab[name] === tab
                        ? "border-[#04AA6D] text-gray-900"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div>
                {activeTab[name] === "Code" ? (
                  <div className="relative">
                    <pre className="bg-white p-4 rounded overflow-x-auto font-mono text-sm">
                      <code>{data.code}</code>
                    </pre>
                    <button
                      onClick={() => handleCopy(name)}
                      className={`absolute top-2 right-2 px-4 py-1 rounded font-semibold text-white ${
                        copied === name ? "bg-green-500" : "bg-[#04AA6D] hover:bg-[#03945f]"
                      } flex items-center gap-2`}
                    >
                      {copied === name ? <><FaCheck /> Copied!</> : "Copy"}
                    </button>
                  </div>
                ) : activeTab[name] === "Explanation" ? (
                  <div className="text-gray-700 whitespace-pre-wrap">{data.explanation}</div>
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: data.code }} />
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
