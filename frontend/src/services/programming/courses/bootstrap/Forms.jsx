// src/pages/bootstrap/Forms.jsx
import CodeBlock from "./CodeBlock";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Forms = () => {
  // Sample codes for different form sections
  const basicForm = `<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;

  const checkboxRadioSwitch = `<form>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">Default checkbox</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
    <label class="form-check-label" for="flexRadioDefault1">Default radio</label>
  </div>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
    <label class="form-check-label" for="flexSwitchCheckDefault">Default switch</label>
  </div>
</form>`;

  const selectInput = `<form>
  <div class="mb-3">
    <label for="exampleSelect1" class="form-label">Example select</label>
    <select class="form-select" id="exampleSelect1">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </div>
</form>`;

  const fileInput = `<form>
  <div class="mb-3">
    <label for="formFile" class="form-label">Default file input example</label>
    <input class="form-control" type="file" id="formFile">
  </div>
</form>`;

  const floatingLabels = `<form>
  <div class="form-floating mb-3">
    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
    <label for="floatingInput">Email address</label>
  </div>
  <div class="form-floating mb-3">
    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
    <label for="floatingPassword">Password</label>
  </div>
</form>`;

  const formValidation = `<form class="needs-validation" novalidate>
  <div class="mb-3">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" required>
    <div class="valid-feedback">Looks good!</div>
    <div class="invalid-feedback">Please enter your first name.</div>
  </div>
  <div class="mb-3">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" required>
    <div class="valid-feedback">Looks good!</div>
    <div class="invalid-feedback">Please enter your last name.</div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>`;
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-[#f9f9f9] to-[#f0f0f0] px-0 sm:px-4 lg:px-6 py-3 sm:py-10 lg:py-14">
      <div className="max-w-6xl mx-auto space-y-5 sm:space-y-10 lg:space-y-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-[#04AA6D] drop-shadow">
            Bootstrap Forms
          </h1>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Bootstrap forms are highly customizable and include a wide variety
            of input types, validation, layout options, and interactive
            elements. Forms can be styled using form classes, floating labels,
            switches, checkboxes, radios, file inputs, and more.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex sm:flex-row justify-between gap-4 sm:gap-0">
          <Link
            to="/bootstrap/cards"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            <FaChevronLeft className="text-xs sm:text-sm" /> Cards
          </Link>

          <Link
            to="/bootstrap/form-validation"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            Forms Validation <FaChevronRight className="text-xs sm:text-sm" />
          </Link>
        </div>

        {/* Sections */}
        <section className="bg-[#D9EEE1] p-5 sm:p-10 rounded-xl sm:rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-[#04AA6D]">
            Basic Form
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed text-sm sm:text-base">
            A simple form with email, password, and a submit button.
          </p>
          <CodeBlock code={basicForm} />
        </section>

        <section className="bg-white p-5 sm:p-10 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-[#04AA6D]">
            Checkbox, Radio & Switch
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed text-sm sm:text-base">
            Bootstrap provides easy classes for checkboxes, radios, and
            switches.
          </p>
          <CodeBlock code={checkboxRadioSwitch} />
        </section>

        <section className="bg-[#D9EEE1] p-5 sm:p-10 rounded-xl sm:rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-[#04AA6D]">
            Select Input
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed text-sm sm:text-base">
            Dropdowns are styled using <code>.form-select</code>.
          </p>
          <CodeBlock code={selectInput} />
        </section>

        <section className="bg-white p-5 sm:p-10 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-[#04AA6D]">
            File Input
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed text-sm sm:text-base">
            Use <code>.form-control</code> to style file inputs.
          </p>
          <CodeBlock code={fileInput} />
        </section>

        <section className="bg-[#D9EEE1] p-5 sm:p-10 rounded-xl sm:rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-[#04AA6D]">
            Floating Labels
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed text-sm sm:text-base">
            Floating labels move above the input when you type, using{" "}
            <code>.form-floating</code>.
          </p>
          <CodeBlock code={floatingLabels} />
        </section>

        <section className="bg-white p-5 sm:p-10 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-[#04AA6D]">
            Form Validation
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed text-sm sm:text-base">
            Add validation using <code>.needs-validation</code> and{" "}
            <code>novalidate</code>. Use <code>.valid-feedback</code> and{" "}
            <code>.invalid-feedback</code> for messages.
          </p>
          <CodeBlock code={formValidation} />
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#04AA6D]">
            Next Step
          </h2>
          <p className="text-gray-700 text-sm sm:text-base">
            After mastering forms, the next topic is{" "}
            <Link
              to="/bootstrap/buttons"
              className="text-[#04AA6D] font-semibold hover:underline"
            >
              Buttons
            </Link>{" "}
            where you will learn about all types of Bootstrap buttons.
          </p>
        </section>

        {/* Bottom Navigation */}
        <div className="flex sm:flex-row justify-between gap-4 sm:gap-0">
          <Link
            to="/bootstrap/cards"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            <FaChevronLeft className="text-xs sm:text-sm" /> Cards
          </Link>

          <Link
            to="/bootstrap/form-validation"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            Forms Validation <FaChevronRight className="text-xs sm:text-sm" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forms;
