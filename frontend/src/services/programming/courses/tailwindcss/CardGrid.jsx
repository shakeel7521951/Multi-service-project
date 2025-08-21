import { useState } from "react";
import { FaChevronLeft, FaCheck } from "react-icons/fa";

const CardsAndGrids = () => {
  const [copied, setCopied] = useState("");
  const [activeTab, setActiveTab] = useState({});

  const examples = {
    simpleCard: {
      code: `<div class="max-w-sm bg-white rounded-lg shadow-md p-6">
  <h2 class="text-xl font-bold mb-2">Card Title</h2>
  <p class="text-gray-700 mb-4">This is a simple card with some description text.</p>
  <button class="bg-[#04AA6D] text-white px-4 py-2 rounded hover:bg-[#03945f]">Action</button>
</div>`,
      description: "A simple card with title, description, and an action button.",
      explanation: `
- **Purpose:** Display content in a compact card format.
- **Layout:** Rounded card with shadow and padding.
- **Classes:**
  - \`max-w-sm\`: max width of the card
  - \`bg-white\`: card background
  - \`rounded-lg\`: rounded corners
  - \`shadow-md\`: subtle shadow
  - \`p-6\`: padding
- **Use Case:** Product previews, info cards, feature highlights.
`
    },
    imageCard: {
      code: `<div class="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
  <img src="https://placehold.co/600x400?text=Hello+World" alt="Sample" class="w-full h-48 object-cover">
  <div class="p-6">
    <h2 class="text-xl font-bold mb-2">Image Card</h2>
    <p class="text-gray-700 mb-4">Card with image on top and content below.</p>
  </div>
</div>`,
      description: "Card layout with an image on top and text content below.",
      explanation: `
- **Purpose:** Combine image and content in a card.
- **Layout:** Image at top, content below, rounded corners, shadow.
- **Classes:**
  - \`overflow-hidden\`: prevent image overflow
  - \`object-cover\`: image scales properly
  - \`h-48\`: fixed height
- **Use Case:** Product cards, blog previews, galleries.
`
    },
    gridLayout: {
      code: `<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="bg-white p-6 rounded shadow">Card 1</div>
  <div class="bg-white p-6 rounded shadow">Card 2</div>
  <div class="bg-white p-6 rounded shadow">Card 3</div>
</div>`,
      description: "A responsive grid layout that stacks on small screens and shows multiple columns on medium+ screens.",
      explanation: `
- **Purpose:** Display multiple cards in a responsive grid.
- **Layout:** Grid system with gap and responsive columns.
- **Classes:**
  - \`grid-cols-1 md:grid-cols-3\`: 1 column on small, 3 on medium+
  - \`gap-6\`: spacing between grid items
  - \`rounded shadow\`: card styling
- **Use Case:** Galleries, dashboards, product listings.
`
    },
    cardWithFooter: {
      code: `<div class="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
  <div class="p-6">
    <h2 class="text-xl font-bold mb-2">Card Title</h2>
    <p class="text-gray-700 mb-4">Content description here.</p>
  </div>
  <div class="bg-gray-100 p-4 text-right">
    <button class="bg-[#04AA6D] text-white px-4 py-2 rounded hover:bg-[#03945f]">Action</button>
  </div>
</div>`,
      description: "Card with a footer section for actions.",
      explanation: `
- **Purpose:** Include a dedicated footer for buttons or links.
- **Layout:** Card content + footer separated by background.
- **Classes:**
  - \`bg-gray-100\`: footer background
  - \`p-4\`: padding
  - \`text-right\`: align footer button right
- **Use Case:** Feature cards, call-to-action cards.
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
          <h1 className="text-3xl font-extrabold mb-2">Tailwind CSS – Cards & Grids</h1>
          <p className="text-gray-600 text-lg">
            Cards are flexible containers for displaying content. Grids allow multiple cards to be displayed in a responsive layout.
          </p>
        </header>

        {/* Back Button */}
        <div className="flex justify-start">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back: Components
          </button>
        </div>

        {/* Card Examples */}
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

export default CardsAndGrids;
