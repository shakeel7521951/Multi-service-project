import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Summary = () => {
  return (
    <div className="bg-white px-4 py-10 min-h-screen">
      <div className="max-w-5xl mx-auto text-gray-800">
        {/* Page Header */}
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          You’ve Learned HTML — What’s Next?
        </h1>

        {/* Navigation */}
        <div className="flex justify-between mb-12">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition">
            <FaChevronLeft />
            Previous
          </button>
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition">
            Next
            <FaChevronRight />
          </button>
        </div>

        {/* HTML Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">HTML Summary</h2>
          <p className="mb-4">
            This tutorial has equipped you with the foundational skills to create your own website using HTML.
          </p>
          <p>
            HTML is the universal language for structuring content on the web. It enables you to format text, embed graphics, create links, build forms, use tables, and more — all in a format readable by any modern browser.
          </p>
        </section>

        {/* What's Next */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Now That You Know HTML</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* CSS Card */}
            <div className="bg-[#E7E9EB] p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Learn CSS</h3>
              <p className="mb-2">
                CSS enhances the presentation of your HTML. With it, you gain full control over layout, typography, colors, and responsive design.
              </p>
              <p className="text-[#04AA6D] font-medium">Explore our CSS tutorial to get started.</p>
            </div>

            {/* JavaScript Card */}
            <div className="bg-[#E7E9EB] p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Learn JavaScript</h3>
              <p className="mb-2">
                JavaScript brings interactivity to your web pages — responding to user actions, manipulating the DOM, and making your site dynamic.
              </p>
              <p className="text-[#04AA6D] font-medium">Visit our JavaScript tutorial to learn more.</p>
            </div>
          </div>
        </section>

        {/* Publishing Info */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Publishing Your Website</h2>
          <p className="mb-4">
            Once your website is built, you need to publish it to make it accessible to others. You can do this by:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Using an Internet Service Provider (ISP)</li>
            <li>Hosting your own web server</li>
          </ul>

          {/* ISP Option */}
          <div className="bg-[#E7E9EB] p-6 rounded-2xl shadow-sm mb-6">
            <h3 className="text-xl font-semibold mb-3">Using an Internet Service Provider (ISP)</h3>
            <p className="mb-4">
              ISPs offer services such as domain registration, hosting, email, and technical support. This is the most common and accessible option.
            </p>

            <h4 className="font-semibold mb-2">Advantages:</h4>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>High-speed connectivity</li>
              <li>Reliable and secure infrastructure</li>
              <li>Backup and maintenance included</li>
            </ul>

            <h4 className="font-semibold mb-2">Considerations:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>24/7 customer support availability</li>
              <li>Daily backup procedures</li>
              <li>Bandwidth and traffic policies</li>
              <li>Support for email and databases</li>
            </ul>
          </div>

          {/* Self Hosting Option */}
          <div className="bg-[#E7E9EB] p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Hosting Your Own Website</h3>
            <p className="mb-4">
              Self-hosting gives you full control but requires substantial investment in time, knowledge, and infrastructure.
            </p>

            <h4 className="font-semibold mb-2">Considerations:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Cost of professional-grade server hardware</li>
              <li>Software licensing and configuration</li>
              <li>Ongoing system updates and security management</li>
            </ul>
          </div>
        </section>

        {/* Certification CTA */}
        <section className="bg-[#E7E9EB] p-8 rounded-2xl shadow-sm text-center mb-12">
          <h2 className="text-2xl font-semibold mb-3">Kickstart Your Career</h2>
          <p className="mb-5">Showcase your skills and earn recognition by getting certified in HTML.</p>
          <button className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white px-6 py-3 rounded-md hover:bg-[#03945f] font-medium text-lg transition mx-auto">
            Get Certified
            <FaChevronRight />
          </button>
        </section>

        {/* Final Navigation */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Html_Summary;
