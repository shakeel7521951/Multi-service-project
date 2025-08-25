import CodeBlock from "./CodeBlock";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const InputGroups = () => {
  // Sample codes for different input group sections
  const basicInputGroup = `<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>`;

  const inputGroupWithButton = `<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username">
  <button class="btn btn-outline-secondary" type="button">Button</button>
</div>`;

  const multipleAddons = `<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <span class="input-group-text">.00</span>
</div>`;

  const inputGroupSizing = `<!-- Small -->
<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>
<!-- Large -->
<div class="input-group input-group-lg mb-3">
  <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
</div>`;

  const inputGroupCheckboxRadio = `<div class="input-group mb-3">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
  </div>
  <input type="text" class="form-control" aria-label="Text input with checkbox">
</div>
<div class="input-group">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input">
  </div>
  <input type="text" class="form-control" aria-label="Text input with radio button">
</div>`;

  const inputGroupDropdowns = `<div class="input-group mb-3">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
</div>`;

  const inputGroupValidation = `<div class="input-group has-validation mb-3">
  <span class="input-group-text" id="validatedInputGroup">@</span>
  <input type="text" class="form-control is-invalid" placeholder="Username" aria-describedby="validatedInputGroup" required>
  <div class="invalid-feedback">Please choose a username.</div>
</div>`;
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-[#f9f9f9] to-[#f0f0f0] px-0 sm:px-4 lg:px-6 py-3 sm:py-10 lg:py-14">
      <div className="max-w-6xl mx-auto space-y-5 sm:space-y-10 lg:space-y-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-[#04AA6D] drop-shadow">
            Bootstrap Input Groups
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Input groups allow you to prepend or append text, buttons,
            dropdowns, checkboxes, radios, or other elements to form inputs,
            creating flexible and fully styled input components.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex sm:flex-row justify-between gap-4 sm:gap-0">
          <Link
            to="/bootstrap/form-validation"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            <FaChevronLeft /> Form Validation
          </Link>

          <Link
            to="/bootstrap/navbar"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            Navbar <FaChevronRight />
          </Link>
        </div>

        {/* Basic Input Group */}
        <section className="bg-[#D9EEE1] p-5 sm:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 text-[#04AA6D]">
            Basic Input Group
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Prepend text to your input using <code>.input-group-text</code>.
          </p>
          <CodeBlock code={basicInputGroup} />
        </section>

        {/* Input Group with Button */}
        <section className="bg-white p-5 sm:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 text-[#04AA6D]">
            Input Group with Button
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Append a button to the input field.
          </p>
          <CodeBlock code={inputGroupWithButton} />
        </section>

        {/* Multiple Addons */}
        <section className="bg-[#D9EEE1] p-5 sm:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 text-[#04AA6D]">
            Multiple Addons
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            You can add multiple prepends and appends like currency symbols.
          </p>
          <CodeBlock code={multipleAddons} />
        </section>

        {/* Input Group Sizing */}
        <section className="bg-white p-5 sm:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 text-[#04AA6D]">
            Input Group Sizing
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Change the size of input groups using <code>.input-group-sm</code>{" "}
            or <code>.input-group-lg</code>.
          </p>
          <CodeBlock code={inputGroupSizing} />
        </section>

        {/* Checkbox & Radio Input Groups */}
        <section className="bg-[#D9EEE1] p-5 sm:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 text-[#04AA6D]">
            Checkbox & Radio Input Groups
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Add checkboxes or radio buttons inside input groups.
          </p>
          <CodeBlock code={inputGroupCheckboxRadio} />
        </section>

        {/* Dropdowns in Input Groups */}
        <section className="bg-white p-5 sm:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 text-[#04AA6D]">
            Dropdowns in Input Groups
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Add dropdowns as buttons inside input groups for advanced
            interactions.
          </p>
          <CodeBlock code={inputGroupDropdowns} />
        </section>

        {/* Validation Input Groups */}
        <section className="bg-[#D9EEE1] p-5 sm:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 text-[#04AA6D]">
            Validation Input Groups
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Input groups can also show validation feedback using{" "}
            <code>.is-valid</code> or <code>.is-invalid</code>.
          </p>
          <CodeBlock code={inputGroupValidation} />
        </section>

        {/* Bottom Navigation */}
        <div className="flex sm:flex-row justify-between gap-4 sm:gap-0">
          <Link
            to="/bootstrap/form-validation"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            <FaChevronLeft /> Form Validation
          </Link>

          <Link
            to="/bootstrap/navbar"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            Navbar <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InputGroups;
