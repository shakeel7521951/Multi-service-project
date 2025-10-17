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
    <footer className="relative bg-gray-900 text-white pt-16 pb-8 overflow-hidden">
      {/* Wave Background */}
      <div className="absolute -top-12 left-0 w-full h-12 bg-gradient-to-t from-gray-900 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 relative z-10">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-pink-600 mb-4">
            Brand Name Or Logo
          </h2>
          <p className="mb-4 leading-relaxed opacity-90">
            Your premier destination for creative expression and professional
            production in the heart of Lucknow. We provide fully-equipped spaces
            for artists, creators, and businesses.
          </p>

          {/* Social Links */}
          <div className="flex space-x-3">
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaYoutube />, link: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="w-10 h-10 bg-gray-700 bg-opacity-70 flex items-center justify-center rounded-full text-white transition-transform hover:-translate-y-1 hover:bg-pink-600"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl text-pink-600 mb-6 border-b-2 border-pink-600 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {["Home", "About Us", "Services", "Events", "Gallery"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:translate-x-1 transition"
                  >
                    <FaChevronRight className="text-pink-600" /> {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-xl text-pink-600 mb-6 border-b-2 border-pink-600 pb-2">
            Our Services
          </h3>
          <ul className="space-y-3">
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
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:translate-x-1 transition"
                >
                  <FaChevronRight className="text-pink-600" /> {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Newsletter */}
        <div>
          <h3 className="text-xl text-pink-600 mb-6 border-b-2 border-pink-600 pb-2">
            Contact Us
          </h3>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-pink-600 mt-1" />
              <span>Pakistan</span>
            </li>
            <li className="flex items-start gap-4">
              <FaPhoneAlt className="text-pink-600 mt-1" />
              <div>
                <a
                  href="tel:+917307022824"
                  className="block hover:underline opacity-90 hover:opacity-100"
                >
                  +92 023456789
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FaEnvelope className="text-pink-600 mt-1" />
              <div>
                <a
                  href="bhattirajput333@gmail.com"
                  className="block hover:underline opacity-90 hover:opacity-100"
                >
                  bhattirajput333@gmail.com
                </a>
              </div>
            </li>
          </ul>

          {/* Newsletter */}
             <h3 className="text-xl text-pink-600 mb-2 border-b-2 border-pink-600 pb-2">Newsletter</h3>
      <p className="mb-4 opacity-70">Subscribe to get updates on our latest events and offers.</p>
      <form onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed successfully!");
            }} class="flex">
        <input type="email" placeholder="Your Email" required className="flex-1 bg-white text-black p-3 rounded-l-md focus:outline-none" />
  
          <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-500 text-white p-3 rounded-r-md transition"
            >
              <FaPaperPlane />
            </button>
      </form>
           
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-16 pt-8 border-t border-gray-700 text-center opacity-70 text-sm">
        <p>
          © 2024 Tab Creative Studio. All Rights Reserved. | Designed with{" "}
          <FaHeart className="inline text-pink-600" /> by Your Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
