// src/pages/bootstrap/FormValidation.jsx
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const FormValidation = () => {
  const [copied, setCopied] = useState(false);

  // Sample codes for different validation sections
  const basicValidation = `<form class="needs-validation" novalidate>
  <div class="mb-3">
    <label for="validationEmail" class="form-label">Email address</label>
    <input type="email" class="form-control" id="validationEmail" required>
    <div class="valid-feedback">Looks good!</div>
    <div class="invalid-feedback">Please provide a valid email.</div>
  </div>
  <div class="mb-3">
    <label for="validationPassword" class="form-label">Password</label>
    <input type="password" class="form-control" id="validationPassword" required>
    <div class="valid-feedback">Password looks strong!</div>
    <div class="invalid-feedback">Please enter your password.</div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>`;

  const customValidationScript = `<!-- Add this script for custom validation -->
<script>
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})();
</script>`;

  const checkboxesRadiosValidation = `<form class="needs-validation" novalidate>
  <div class="mb-3">
    <label class="form-label">Choose at least one option:</label>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="check1" required>
      <label class="form-check-label" for="check1">Option 1</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="check2" required>
      <label class="form-check-label" for="check2">Option 2</label>
      <div class="invalid-feedback">Please select at least one checkbox.</div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit</button>
</form>`;

  const selectValidation = `<form class="needs-validation" novalidate>
  <div class="mb-3">
    <label for="validationSelect" class="form-label">Select an option</label>
    <select class="form-select" id="validationSelect" required>
      <option value="">Choose...</option>
      <option>Option 1</option>
      <option>Option 2</option>
    </select>
    <div class="invalid-feedback">Please select an option.</div>
  </div>
  <button class="btn btn-primary" type="submit">Submit</button>
</form>`;

  const fileInputValidation = `<form class="needs-validation" novalidate>
  <div class="mb-3">
    <label for="validationFile" class="form-label">Upload file</label>
    <input class="form-control" type="file" id="validationFile" required>
    <div class="invalid-feedback">Please select a file.</div>
  </div>
  <button class="btn btn-primary" type="submit">Submit</button>
</form>`;

  const floatingLabelsValidation = `<form class="needs-validation" novalidate>
  <div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingName" placeholder="Name" required>
    <label for="floatingName">Name</label>
    <div class="invalid-feedback">Please enter your name.</div>
  </div>
  <div class="form-floating mb-3">
    <input type="email" class="form-control" id="floatingEmail" placeholder="Email" required>
    <label for="floatingEmail">Email</label>
    <div class="invalid-feedback">Please enter a valid email.</div>
  </div>
  <button class="btn btn-primary" type="submit">Submit</button>
</form>`;

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-[#f9f9f9] to-[#f0f0f0] px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-[#04AA6D] drop-shadow">
            Bootstrap Form Validation
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Bootstrap form validation allows you to easily validate user input with built-in HTML5 validation, custom validation, checkboxes, radios, selects, file inputs, floating labels, and validation feedback messages.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap/forms"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Forms
          </Link>

          <Link
            to="/bootstrap/input-groups"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Input Groups <FaChevronRight />
          </Link>
        </div>

        {/* Basic Validation */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Basic Validation</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Basic validation using <code>.needs-validation</code> and <code>novalidate</code>. Shows valid and invalid feedback messages.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-inner border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{basicValidation}</code>
            </pre>
            <button
              onClick={() => handleCopy(basicValidation)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Custom Validation Script */}
        <section className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Custom Validation Script</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Add custom validation to prevent form submission if invalid.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{customValidationScript}</code>
            </pre>
            <button
              onClick={() => handleCopy(customValidationScript)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Checkbox & Radio Validation */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Checkbox & Radio Validation</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Validate checkboxes and radio buttons using <code>required</code>.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{checkboxesRadiosValidation}</code>
            </pre>
            <button
              onClick={() => handleCopy(checkboxesRadiosValidation)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Select Validation */}
        <section className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Select Validation</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Ensure users select an option from dropdowns.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{selectValidation}</code>
            </pre>
            <button
              onClick={() => handleCopy(selectValidation)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* File Input Validation */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">File Input Validation</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Validate file inputs using <code>required</code>.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{fileInputValidation}</code>
            </pre>
            <button
              onClick={() => handleCopy(fileInputValidation)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Floating Labels Validation */}
        <section className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Floating Labels Validation</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Validation with floating labels works the same way.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{floatingLabelsValidation}</code>
            </pre>
            <button
              onClick={() => handleCopy(floatingLabelsValidation)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Next Step */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">Next Step</h2>
          <p className="text-gray-700">
            Now that you understand form validation, the next topic is{" "}
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
        <div className="flex justify-between">
          <Link
            to="/bootstrap/forms"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Forms
          </Link>

          <Link
            to="/bootstrap/input-groups"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Input Groups <FaChevronRight />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default FormValidation;
