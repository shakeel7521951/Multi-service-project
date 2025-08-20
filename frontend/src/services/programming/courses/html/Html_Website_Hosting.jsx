import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Website_Hosting = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Website Hosting</h1>

        <div className="flex justify-between mb-10">
          <button
            type="button"
            aria-label="Previous"
            className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer"
          >
            <FaChevronLeft />
            Previous
          </button>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-10">
          <div className="bg-[#E7E9EB] hover:bg-[#D9EEE1] p-6 rounded-2xl flex-1 text-center">
            <h2 className="text-2xl font-semibold mb-2">Create Website with HTML</h2>
            <p>Host Websites with W3Schools Spaces</p>
          </div>
          <div className="bg-[#E7E9EB] hover:bg-[#D9EEE1] p-6 rounded-2xl flex-1 text-center">
            <h2 className="text-2xl font-semibold mb-2">Practice Coding Skills</h2>
            <p>Practice and improve your HTML, CSS, and JS.</p>
          </div>
          <div className="bg-[#E7E9EB] hover:bg-[#D9EEE1] p-6 rounded-2xl flex-1 text-center">
            <h2 className="text-2xl font-semibold mb-2">kAI - AI Tutor</h2>
            <p>Let AI guide your learning journey.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-10">
          <div className="bg-[#E7E9EB] hover:bg-[#D9EEE1] p-6 rounded-2xl flex-1 text-center">
            <h2 className="text-2xl font-semibold mb-2">Build Projects</h2>
            <p>Build websites and web applications easily.</p>
          </div>
          <div className="bg-[#E7E9EB] hover:bg-[#D9EEE1] p-6 rounded-2xl flex-1 text-center">
            <h2 className="text-2xl font-semibold mb-2">Host Securely</h2>
            <p>Secure and reliable hosting options.</p>
          </div>
        </div>

        <div className="bg-[#E7E9EB] p-6 rounded-2xl mb-10">
          <h2 className="text-3xl font-bold mb-4">Choose your Plan</h2>
          <p className="mb-6">
            By subscribing to a plan, you support the W3Schools mission to make learning available to everyone —
            no matter their background.
          </p>

          <div className="flex gap-4 mb-6">
            <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-6">
              Monthly
            </button>
            <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-6">
              Annually
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Free Plan */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-2">Free</h3>
              <p className="text-lg mb-4">$0 / Forever</p>
              <ul className="text-sm space-y-1 mb-4">
                <li>✅ Great for beginners</li>
                <li>✅ Track progress</li>
                <li>✅ Set goals</li>
                <li>✅ Host 1 static site</li>
                <li>✅ 100 credits/month</li>
                <li>❌ No support</li>
              </ul>
              <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-6">
                Get Free
              </button>
            </div>

            {/* Plus Plan */}
            <div className="bg-white p-6 rounded-2xl shadow border-2 border-[#04AA6D]">
              <h3 className="text-xl font-bold mb-2">W3Schools Plus</h3>
              <p className="text-lg mb-4">$14.99 / Month</p>
              <ul className="text-sm space-y-1 mb-4">
                <li>✅ Ad-free experience</li>
                <li>✅ Unlimited challenges/tests</li>
                <li>✅ Host 15 static + 1 fullstack site</li>
                <li>✅ 10,000 credits/month</li>
                <li>✅ 75+ templates</li>
                <li>✅ Cancel anytime</li>
              </ul>
              <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-6">
                Get Plus
              </button>
            </div>

            {/* Academy Plan */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-2">W3Schools Academy</h3>
              <p className="text-lg mb-4">For Teachers</p>
              <ul className="text-sm space-y-1 mb-4">
                <li>✅ Manage classrooms</li>
                <li>✅ Structured study plans</li>
                <li>✅ Track progress</li>
                <li>✅ Code challenges/projects</li>
                <li>✅ All course access</li>
                <li>✅ Certification exams</li>
              </ul>
              <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-6">
                Get More Info
              </button>
            </div>
          </div>
        </div>

        {/* Promo */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-5 rounded-xl mt-8">
          <h4 className="text-lg font-semibold mb-1">🎉 NEW SUBSCRIBER DEAL</h4>
          <p>25% OFF FOR A YEAR</p>
          <p>
            <strong>USE PROMO CODE:</strong> <span className="bg-yellow-300 px-2 py-1 rounded">SAVE25</span>
          </p>
        </div>

        <div className="flex justify-end mt-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Html_Website_Hosting;
