import CodeBlock from "./CodeBlock";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Badges = () => {
  const basicBadges = `<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-danger">Danger</span>
<span class="badge bg-warning text-dark">Warning</span>
<span class="badge bg-info text-dark">Info</span>
<span class="badge bg-light text-dark">Light</span>
<span class="badge bg-dark">Dark</span>`;

  const pillBadges = `<span class="badge rounded-pill bg-primary">Primary</span>
<span class="badge rounded-pill bg-success">Success</span>`;

  const badgeInButton = `<button type="button" class="btn btn-primary">
  Notifications <span class="badge bg-secondary">4</span>
</button>`;

  const badgeLinks = `<a href="#" class="badge bg-primary text-decoration-none">Primary Link</a>
<a href="#" class="badge bg-success text-decoration-none">Success Link</a>`;

  const badgePosition = `<button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>`;
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-[#f9f9f9] to-[#f0f0f0] px-0 sm:px-4 lg:px-6 py-3 sm:py-10 lg:py-14">
      <div className="max-w-6xl mx-auto space-y-5 sm:space-y-10 lg:space-y-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-[#04AA6D] drop-shadow">
            Bootstrap Badges
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Badges are small count or labeling components in Bootstrap. They can
            be used in buttons, links, lists, and navigation to show
            notifications or status.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex sm:flex-row justify-between gap-4 sm:gap-0">
          <Link
            to="/bootstrap/buttons"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            <FaChevronLeft /> Buttons
          </Link>

          <Link
            to="/bootstrap/cards"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            Cards <FaChevronRight />
          </Link>
        </div>

        {/* Basic Badges */}
        <section className="bg-[#D9EEE1] p-5 sm:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Basic Badges
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Use <code>.badge</code> with contextual classes to display simple
            badges.
          </p>
          <CodeBlock code={basicBadges} />
        </section>

        {/* Pill Badges */}
        <section className="bg-white p-5 sm:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Pill Badges
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Add <code>rounded-pill</code> class to make badges more rounded and
            pill-shaped.
          </p>
          <CodeBlock code={pillBadges} />
        </section>

        {/* Badges in Buttons */}
        <section className="bg-[#D9EEE1] p-5 sm:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Badges in Buttons
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            You can place badges inside buttons to show counts or notifications.
          </p>
          <CodeBlock code={badgeInButton} />
        </section>

        {/* Badge Links */}
        <section className="bg-white p-5 sm:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Badges as Links
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Badges can also be links by using <code>&lt;a&gt;</code> elements
            with badge classes.
          </p>
          <CodeBlock code={badgeLinks} />
        </section>

        {/* Badge Positioning */}
        <section className="bg-[#D9EEE1] p-5 sm:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Badge Positioning
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Use positioning utilities to place badges anywhere, commonly
            top-right of buttons.
          </p>
          <CodeBlock code={badgePosition} />
        </section>

        {/* Navigation Top */}
        <div className="flex sm:flex-row justify-between gap-4 sm:gap-0">
          <Link
            to="/bootstrap/buttons"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            <FaChevronLeft /> Buttons
          </Link>

          <Link
            to="/bootstrap/cards"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            Cards <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Badges;
