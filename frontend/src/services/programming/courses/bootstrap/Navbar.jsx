// src/pages/bootstrap/Navbar.jsx
import CodeBlock from "./CodeBlock";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {

  // Sample codes for different navbar sections
  const basicNavbar = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Brand</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarBasic">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;

  const navbarWithDropdown = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Brand</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDropdown" aria-controls="navbarDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarDropdown">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>`;

  const navbarWithForm = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Brand</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarForm" aria-controls="navbarForm" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarForm">
      <form class="d-flex ms-auto">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>`;

  const navbarColors = `<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Primary Navbar</a>
  </div>
</nav>
<nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Success Navbar</a>
  </div>
</nav>
<nav class="navbar navbar-expand-lg navbar-light bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Warning Navbar</a>
  </div>
</nav>`;

  const navbarPositioning = `<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fixed Top Navbar</a>
  </div>
</nav>
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-bottom">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fixed Bottom Navbar</a>
  </div>
</nav>
<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sticky Top Navbar</a>
  </div>
</nav>`;
 return (
  <div className="relative min-h-screen bg-gradient-to-br from-white via-[#f9f9f9] to-[#f0f0f0] px-0 sm:px-4 lg:px-6 py-3 sm:py-10 lg:py-14">
    <div className="max-w-6xl mx-auto space-y-5 sm:space-y-10 lg:space-y-14">

      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-[#04AA6D] drop-shadow">
          Bootstrap Navbar
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Bootstrap navbars are responsive navigation headers that include branding, navigation, and other elements like forms, buttons, and dropdowns.
        </p>
      </div>

      {/* Navigation Top */}
      <div className="flex sm:flex-row justify-between gap-4 sm:gap-0">
        <Link
          to="/bootstrap/input-groups"
          className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
        >
          <FaChevronLeft /> Input Groups
        </Link>

        <Link
          to="/bootstrap/dropdowns"
          className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
        >
          Dropdowns <FaChevronRight />
        </Link>
      </div>

      {/* Basic Navbar */}
      <section className="bg-[#D9EEE1] p-5 md:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
        <h2 className="text-xl md:text-2xl font-bold mb-5 text-[#04AA6D]">Basic Navbar</h2>
        <p className="text-gray-800 mb-4 leading-relaxed">
          Basic navbar with brand and links, responsive collapse included.
        </p>
        <CodeBlock code={basicNavbar} />
      </section>

      {/* Navbar with Dropdown */}
      <section className="bg-white p-5 md:p-10 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-xl md:text-2xl font-bold mb-5 text-[#04AA6D]">Navbar with Dropdown</h2>
        <p className="text-gray-800 mb-4 leading-relaxed">
          Navbar items can have dropdown menus for additional links.
        </p>
        <CodeBlock code={navbarWithDropdown} />
      </section>

      {/* Navbar with Form */}
      <section className="bg-[#D9EEE1] p-5 md:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
        <h2 className="text-xl md:text-2xl font-bold mb-5 text-[#04AA6D]">Navbar with Form</h2>
        <p className="text-gray-800 mb-4 leading-relaxed">
          Forms, like search fields and buttons, can be included inside a navbar.
        </p>
        <CodeBlock code={navbarWithForm} />
      </section>

      {/* Navbar Colors */}
      <section className="bg-white p-5 md:p-10 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-xl md:text-2xl font-bold mb-5 text-[#04AA6D]">Navbar Colors</h2>
        <p className="text-gray-800 mb-4 leading-relaxed">
          Use built-in color classes like <code>.bg-primary</code>, <code>.bg-success</code>, <code>.bg-warning</code>, etc.
        </p>
        <CodeBlock code={navbarColors} />
      </section>

      {/* Navbar Positioning */}
      <section className="bg-[#D9EEE1] p-5 md:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
        <h2 className="text-xl md:text-2xl font-bold mb-5 text-[#04AA6D]">Navbar Positioning</h2>
        <p className="text-gray-800 mb-4 leading-relaxed">
          Position navbars with <code>.fixed-top</code>, <code>.fixed-bottom</code>, or <code>.sticky-top</code>.
        </p>
        <CodeBlock code={navbarPositioning} />
      </section>

      {/* Next Step */}
      <section>
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#04AA6D]">Next Step</h2>
        <p className="text-gray-700">
          Now that you understand navbars, the next topic is{" "}
          <Link
            to="/bootstrap/buttons"
            className="text-[#04AA6D] font-semibold hover:underline"
          >
            Buttons
          </Link>{" "}
          where you will learn all types of Bootstrap buttons.
        </p>
      </section>

      {/* Bottom Navigation */}
      <div className="flex sm:flex-row justify-between gap-4 sm:gap-0">
        <Link
          to="/bootstrap/input-groups"
          className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
        >
          <FaChevronLeft /> Input Groups
        </Link>

        <Link
          to="/bootstrap/dropdowns"
          className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
        >
          Dropdowns <FaChevronRight />
        </Link>
      </div>

    </div>
  </div>
);

};

export default Navbar