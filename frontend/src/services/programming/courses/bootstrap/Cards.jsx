// src/pages/bootstrap/Cards.jsx
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CodeBlock from "./CodeBlock";

const Cards = () => {
  const basicCard = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;

  const cardWithHeaderFooter = `<div class="card text-center" style="width: 18rem;">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Card with header and footer example.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>`;

  const cardWithImage = `<div class="card" style="width: 18rem;">
  <img src="https://via.placeholder.com/286x180" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card with Image</h5>
    <p class="card-text">Example of a card with an image on top.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;

  const cardWithListGroup = `<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
</div>`;

  const cardGroup = `<div class="card-group">
  <div class="card">
    <img src="https://via.placeholder.com/286x180" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card 1</h5>
      <p class="card-text">Some text.</p>
    </div>
  </div>
  <div class="card">
    <img src="https://via.placeholder.com/286x180" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card 2</h5>
      <p class="card-text">Some text.</p>
    </div>
  </div>
  <div class="card">
    <img src="https://via.placeholder.com/286x180" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card 3</h5>
      <p class="card-text">Some text.</p>
    </div>
  </div>
</div>`;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-[#f9f9f9] to-[#f0f0f0] px-0 sm:px-4 lg:px-6 py-3 sm:py-10 lg:py-14">
      <div className="max-w-6xl mx-auto space-y-5 sm:space-y-10 lg:space-y-14">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-[#04AA6D] drop-shadow">
            Bootstrap Cards
          </h1>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Bootstrap cards are flexible content containers with multiple variants and options including headers, footers, images, links, and list groups. Cards can be combined into groups or columns for responsive layouts.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex sm:flex-row justify-between gap-4 sm:gap-0">
          <Link
            to="/bootstrap/badges"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            <FaChevronLeft className="text-xs sm:text-sm" /> Badges
          </Link>

          <Link
            to="/bootstrap/forms"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            Forms <FaChevronRight className="text-xs sm:text-sm" />
          </Link>
        </div>

        {/* Basic Card */}
        <section className="bg-[#D9EEE1] p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-[#04AA6D]">Basic Card</h2>
          <p className="text-gray-800 mb-4 leading-relaxed text-sm sm:text-base">
            A simple card with title, text, and a button.
          </p>
          <CodeBlock code={basicCard} />
        </section>

        {/* Card with Header & Footer */}
        <section className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-[#04AA6D]">Card with Header & Footer</h2>
          <p className="text-gray-800 mb-4 leading-relaxed text-sm sm:text-base">
            Cards can have a header and footer for additional contextual information.
          </p>
          <CodeBlock code={cardWithHeaderFooter} />
        </section>

        {/* Card with Image */}
        <section className="bg-[#D9EEE1] p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-[#04AA6D]">Card with Image</h2>
          <p className="text-gray-800 mb-4 leading-relaxed text-sm sm:text-base">
            Add an image to the top of the card using <code>.card-img-top</code>.
          </p>
          <CodeBlock code={cardWithImage} />
        </section>

        {/* Card with List Group */}
        <section className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-[#04AA6D]">Card with List Group</h2>
          <p className="text-gray-800 mb-4 leading-relaxed text-sm sm:text-base">
            Include <code>.list-group</code> inside a card to create structured lists.
          </p>
          <CodeBlock code={cardWithListGroup} />
        </section>

        {/* Card Group */}
        <section className="bg-[#D9EEE1] p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-[#04AA6D]">Card Group</h2>
          <p className="text-gray-800 mb-4 leading-relaxed text-sm sm:text-base">
            Group multiple cards together using <code>.card-group</code> for consistent height and spacing.
          </p>
          <CodeBlock code={cardGroup} />
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#04AA6D]">Next Step</h2>
          <p className="text-gray-700 text-sm sm:text-base">
            After cards, the next topic is{" "}
            <Link
              to="/bootstrap/buttons"
              className="text-[#04AA6D] font-semibold hover:underline"
            >
              Buttons
            </Link>{" "}
            where you will learn how to use Bootstrap buttons effectively.
          </p>
        </section>

        {/* Bottom Navigation */}
        <div className="flex sm:flex-row justify-between gap-4 sm:gap-0">
          <Link
            to="/bootstrap/badges"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            <FaChevronLeft className="text-xs sm:text-sm" /> Badges
          </Link>

          <Link
            to="/bootstrap/forms"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            Forms <FaChevronRight className="text-xs sm:text-sm" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Cards;
