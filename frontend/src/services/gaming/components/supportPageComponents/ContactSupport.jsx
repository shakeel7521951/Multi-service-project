import React, { useState } from "react";
import { FaPaperPlane, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactSupport = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      category: "technical",
      subject: "",
      message: "",
   });

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
      console.log("Form submitted:", formData);
      alert(
         "Your support ticket has been submitted! We will get back to you within 24 hours."
      );
      setFormData({
         name: "",
         email: "",
         category: "technical",
         subject: "",
         message: "",
      });
   };

   const contactMethods = [
      {
         icon: <FaPhone className="text-2xl" />,
         title: "Phone Support",
         description: "24/7 toll-free number",
         contact: "+1-800-GAMING1",
         color: "text-green-400",
      },
      {
         icon: <FaEnvelope className="text-2xl" />,
         title: "Email Support",
         description: "Quick response guaranteed",
         contact: "support@gamezone.com",
         color: "text-cyan-400",
      },
      {
         icon: <FaWhatsapp className="text-2xl" />,
         title: "WhatsApp",
         description: "Instant messaging support",
         contact: "+1-555-GAMEHELP",
         color: "text-green-400",
      },
   ];

   return (
      <section className="py-20 bg-gray-900">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               {/* Contact Form */}
               <div data-aos="fade-right">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                     Send us a <span className="text-cyan-400">Message</span>
                  </h2>
                  <p className="text-gray-400 mb-8">
                     Can't find what you're looking for? Send us a message and
                     our support team will get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                           <label className="block text-gray-300 mb-2">
                              Full Name
                           </label>
                           <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                              placeholder="Enter your name"
                           />
                        </div>
                        <div>
                           <label className="block text-gray-300 mb-2">
                              Email Address
                           </label>
                           <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                              placeholder="Enter your email"
                           />
                        </div>
                     </div>

                     <div>
                        <label className="block text-gray-300 mb-2">
                           Issue Category
                        </label>
                        <select
                           name="category"
                           value={formData.category}
                           onChange={handleInputChange}
                           className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        >
                           <option value="technical">Technical Support</option>
                           <option value="account">Account Issues</option>
                           <option value="billing">Billing & Payments</option>
                           <option value="gameplay">Gameplay Issues</option>
                           <option value="other">Other</option>
                        </select>
                     </div>

                     <div>
                        <label className="block text-gray-300 mb-2">
                           Subject
                        </label>
                        <input
                           type="text"
                           name="subject"
                           value={formData.subject}
                           onChange={handleInputChange}
                           required
                           className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                           placeholder="Brief description of your issue"
                        />
                     </div>

                     <div>
                        <label className="block text-gray-300 mb-2">
                           Message
                        </label>
                        <textarea
                           name="message"
                           value={formData.message}
                           onChange={handleInputChange}
                           required
                           rows="5"
                           className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                           placeholder="Please describe your issue in detail..."
                        />
                     </div>

                     <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                     >
                        <FaPaperPlane />
                        Send Support Request
                     </button>
                  </form>
               </div>

               {/* Contact Methods */}
               <div data-aos="fade-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                     Other Ways to{" "}
                     <span className="text-purple-400">Reach Us</span>
                  </h2>
                  <p className="text-gray-400 mb-8">
                     Prefer to contact us directly? Here are all the ways you
                     can get in touch with our support team.
                  </p>

                  <div className="space-y-6">
                     {contactMethods.map((method, index) => (
                        <div
                           key={index}
                           className="bg-gray-800 rounded-2xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105"
                        >
                           <div className="flex items-center gap-4 mb-4">
                              <div
                                 className={`p-3 bg-gray-700 rounded-xl ${method.color}`}
                              >
                                 {method.icon}
                              </div>
                              <div>
                                 <h3 className="text-xl font-bold text-white">
                                    {method.title}
                                 </h3>
                                 <p className="text-gray-400">
                                    {method.description}
                                 </p>
                              </div>
                           </div>
                           <div
                              className={`text-lg font-semibold ${method.color}`}
                           >
                              {method.contact}
                           </div>
                        </div>
                     ))}
                  </div>

                  {/* Support Hours */}
                  <div className="bg-gradient-to-r from-cyan-900 to-purple-900 rounded-2xl p-6 mt-8">
                     <h3 className="text-xl font-bold text-white mb-3">
                        Support Hours
                     </h3>
                     <div className="space-y-2 text-gray-300">
                        <div className="flex justify-between">
                           <span>Monday - Friday:</span>
                           <span className="text-cyan-400">24/7</span>
                        </div>
                        <div className="flex justify-between">
                           <span>Saturday - Sunday:</span>
                           <span className="text-cyan-400">24/7</span>
                        </div>
                        <div className="flex justify-between">
                           <span>Holidays:</span>
                           <span className="text-cyan-400">24/7</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ContactSupport;
