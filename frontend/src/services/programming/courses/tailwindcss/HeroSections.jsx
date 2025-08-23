import { useState } from "react";
import { FaChevronLeft, FaCheck } from "react-icons/fa";

const HeroSections = () => {
  const [copied, setCopied] = useState("");
  const [activeTab, setActiveTab] = useState({});

  const examples = {
    simpleHero: {
      code: `<section class="bg-blue-600 text-white py-20 px-6 text-center">
  <h1 class="text-4xl font-extrabold mb-4">Welcome to Our Website</h1>
  <p class="text-lg mb-6">We provide solutions to make your life easier.</p>
  <button class="bg-[#04AA6D] px-6 py-3 rounded font-semibold hover:bg-[#03945f]">Get Started</button>
</section>`,
      description: "A simple, centered hero section with heading, paragraph, and call-to-action button.",
      explanation: `
- **Purpose:** Grab user attention immediately.
- **Layout:** Centered content with padding.
- **Classes:**
  - \`bg-blue-600\`: hero background color
  - \`text-white\`: text color
  - \`py-20 px-6\`: vertical and horizontal spacing
  - \`text-center\`: center-align text
- **Use Case:** Landing pages, marketing websites.
`
    },
    heroWithImage: {
      code: `<section class="bg-gray-100 py-20 px-6 flex flex-col md:flex-row items-center gap-10">
  <div class="md:w-1/2">
    <h1 class="text-4xl font-extrabold mb-4">Transform Your Business</h1>
    <p class="text-gray-700 mb-6">Innovative solutions to boost productivity and growth.</p>
    <button class="bg-[#04AA6D] px-6 py-3 rounded font-semibold hover:bg-[#03945f]">Learn More</button>
  </div>
  <div class="md:w-1/2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToX2DU4ltbRnR_6201huObRono4AYKBzgNiA&s" alt="Hero Image" class="rounded-lg shadow-lg">
  </div>
</section>`,
      description: "Hero section with text and an image side by side, responsive for small screens.",
      explanation: `
- **Purpose:** Combine visual imagery with hero content.
- **Layout:** Flex container, responsive columns on medium+ screens.
- **Classes:**
  - \`flex flex-col md:flex-row\`: column layout on small, row layout on medium+
  - \`items-center gap-10\`: center alignment with spacing
  - \`rounded-lg shadow-lg\`: styling for the image
- **Use Case:** Product landing pages, marketing campaigns.
`
    },
    fullScreenHero: {
      code: `<section class="h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col justify-center items-center text-white text-center px-6">
  <h1 class="text-5xl font-extrabold mb-4">Experience Innovation</h1>
  <p class="text-xl mb-6">Leading solutions for modern businesses.</p>
  <button class="bg-[#04AA6D] px-6 py-3 rounded font-semibold hover:bg-[#03945f]">Get Started</button>
</section>`,
      description: "Full-screen hero section with gradient background and centered content.",
      explanation: `
- **Purpose:** Maximum impact landing area.
- **Layout:** Full viewport height with flex centering.
- **Classes:**
  - \`h-screen\`: full viewport height
  - \`bg-gradient-to-r from-blue-500 to-purple-600\`: gradient background
  - \`flex justify-center items-center\`: center content
- **Use Case:** Landing pages, promotional campaigns.
`
    },
    heroWithOverlay: {
      code: `<section class="relative bg-gray-800 text-white h-96 flex items-center justify-center px-6">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe3eTlFd7zZJvpCOJn7c63fwbT3U7jbl66qA&s" alt="Background" class="absolute inset-0 w-full h-full object-cover opacity-50">
  <div class="relative z-10 text-center">
    <h1 class="text-4xl font-extrabold mb-4">Overlay Hero</h1>
    <p class="text-lg mb-6">Text over an image with semi-transparent overlay.</p>
    <button class="bg-[#04AA6D] px-6 py-3 rounded font-semibold hover:bg-[#03945f]">Discover</button>
  </div>
</section>`,
      description: "Hero section with background image and overlay effect for text readability.",
      explanation: `
- **Purpose:** Highlight content while keeping background imagery.
- **Layout:** Image with opacity and text on top.
- **Classes:**
  - \`absolute inset-0\`: image covers entire section
  - \`opacity-50\`: semi-transparent overlay
  - \`relative z-10\`: ensures text appears above image
- **Use Case:** Promotional banners, landing pages with visuals.
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
          <h1 className="text-3xl font-extrabold mb-2">Tailwind CSS – Hero Sections</h1>
          <p className="text-gray-600 text-lg">
            Hero sections are large, attention-grabbing sections at the top of your page. They often include a headline, subtext, and call-to-action buttons.
          </p>
        </header>

        {/* Back Button */}
        <div className="flex justify-start">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back: Components
          </button>
        </div>

        {/* Hero Examples */}
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

export default HeroSections;
