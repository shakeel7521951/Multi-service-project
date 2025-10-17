import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10">
        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Tab Creative Studio
          </h2>
          <p className="mb-6 text-sm leading-relaxed opacity-80">
            Your creative hub for music, production, and content creation. We
            empower artists and brands to bring their ideas to life with
            high-quality production spaces and professional support.
          </p>

          <div className="flex space-x-3">
            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => {
              // even indexes (2nd, 4th) animate top→bottom
              const isEven = (i + 1) % 2 === 0;

              return (
                <a
                  key={i}
                  href="#"
                  className="relative w-9 h-9 border border-gray-700 flex items-center justify-center rounded-full overflow-hidden group"
                >
                  {/* background overlay animation */}
                  <span
                    className={`absolute inset-0 ${isEven
                        ? "bg-gradient-to-b from-pink-500 to-blue-500 -translate-y-full group-hover:translate-y-0"
                        : "bg-gradient-to-t from-pink-500 to-blue-500 translate-y-full group-hover:translate-y-0"
                      } transition-transform duration-500 ease-in-out`}
                  ></span>

                  {/* icon */}
                  <Icon className="relative text-white text-sm transition-transform duration-300 group-hover:scale-110" />
                </a>
              );
            })}
          </div>
          </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {["Home", "About Us", "Services", "Events", "Gallery"].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="group flex items-center gap-2 transition-all duration-300 hover:translate-x-2"
                >
                  <FaChevronRight className="text-pink-500 group-hover:text-pink-400 group-hover:rotate-90 transition-all duration-300" />
                  <span className="relative text-gray-300 group-hover:text-pink-400">
                    {item}
                    {/* underline animation */}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-gradient-to-r from-blue-500 to-pink-500 group-hover:w-full transition-all duration-500"></span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-3 text-sm">
            {[
              "Recording Studio",
              "Theatre Room",
              "Workshop Space",
              "Photoshoot Studio",
              "Event Hosting",
            ].map((service, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="group flex items-center gap-2 transition-all duration-300 hover:translate-x-2"
                >
                  <FaChevronRight className="text-pink-500 group-hover:text-pink-400 group-hover:rotate-90 transition-all duration-300" />
                  <span className="relative text-gray-300 group-hover:text-pink-400">
                    {service}
                    {/* underline animation */}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-gradient-to-r from-blue-500 to-pink-500 group-hover:w-full transition-all duration-500"></span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

        </div>

        {/* Contact + Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm mb-5">
            {/* Location */}
            <li className="flex items-start gap-3 group transition-all duration-300">
              <FaMapMarkerAlt className="text-pink-500 mt-1 group-hover:text-pink-400 transition-all duration-300 group-hover:scale-110" />
              <span className="text-gray-300 group-hover:text-pink-400 transition-all duration-300">
                Pakistan
              </span>
            </li>

            {/* Phone */}
            <li className="flex items-start gap-3 group transition-all duration-300">
              <FaPhoneAlt className="text-pink-500 mt-1 group-hover:text-pink-400 transition-all duration-300 group-hover:scale-110" />
              <a
                href="tel:+92023456789"
                className="text-gray-300 group-hover:text-pink-400 transition-all duration-300 relative"
              >
                +92 023456789
                {/* underline animation */}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-gradient-to-r from-pink-500 to-blue-500 group-hover:w-full transition-all duration-500"></span>
              </a>
            </li>

            {/* Email */}
            <li className="flex items-start gap-3 group transition-all duration-300">
              <FaEnvelope className="text-pink-500 mt-1 group-hover:text-pink-400 transition-all duration-300 group-hover:scale-110" />
              <a
                href="mailto:bhattirajput333@gmail.com"
                className="text-gray-300 group-hover:text-pink-400 transition-all duration-300 relative"
              >
                bhattirajput333@gmail.com
                {/* underline animation */}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-gradient-to-r from-blue-500 to-pink-500 group-hover:w-full transition-all duration-500"></span>
              </a>
            </li>
          </ul>


          {/* Newsletter */}
          <p className="text-sm mb-3 opacity-80">
            Subscribe for updates and new offers.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed successfully!");
            }}
            className="flex"
          >
            <input
              type="email"
              placeholder="Your Email"
              required
              className="flex-1 p-3 text-sm border border-gray-700 rounded-l-md text-gray-200 focus:outline-none"
            />
            <button
              type="submit"
              className="p-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-r-md hover:opacity-90 transition"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 pt-6 border-t border-gray-700 text-center text-sm opacity-70">
        © 2024 Tab Creative Studio | Designed with{" "}
        <FaHeart className="inline text-pink-500 mx-1" /> by Your Team
      </div>
    </footer>
  );
};

export default Footer;
