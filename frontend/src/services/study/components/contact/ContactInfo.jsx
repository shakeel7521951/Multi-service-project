import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaHeadset } from "react-icons/fa";

export default function ContactInfo() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         easing: "ease-in-out",
      });
   }, []);

   const contactMethods = [
      {
         icon: <FaPhone className="text-2xl" />,
         title: "Phone Support",
         description: "Call us for immediate assistance",
         details: "+92 300 123 4567",
         secondary: "+92 321 987 6543",
         color: "from-blue-500 to-cyan-500",
         action: "tel:+923001234567"
      },
      {
         icon: <FaWhatsapp className="text-2xl" />,
         title: "WhatsApp",
         description: "Chat with us on WhatsApp",
         details: "+92 300 123 4567",
         secondary: "Quick responses",
         color: "from-green-500 to-teal-500",
         action: "https://wa.me/923001234567"
      },
      {
         icon: <FaEnvelope className="text-2xl" />,
         title: "Email Us",
         description: "Send us an email anytime",
         details: "info@studyhub.com",
         secondary: "support@studyhub.com",
         color: "from-purple-500 to-pink-500",
         action: "mailto:info@studyhub.com"
      },
      {
         icon: <FaHeadset className="text-2xl" />,
         title: "Live Chat",
         description: "24/7 online support",
         details: "Start Chat",
         secondary: "Instant help",
         color: "from-orange-500 to-red-500",
         action: "#live-chat"
      }
   ];

   const officeHours = [
      { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
      { day: "Saturday", time: "10:00 AM - 4:00 PM" },
      { day: "Sunday", time: "12:00 PM - 4:00 PM" },
      { day: "Emergency Support", time: "24/7 Available" }
   ];

   return (
      <section className="relative w-full py-24 px-6 md:px-16 bg-white dark:bg-gray-900 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-100 dark:bg-indigo-900 rounded-full blur-3xl opacity-20"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100 dark:bg-pink-900 rounded-full blur-3xl opacity-20"></div>

         <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16" data-aos="fade-down">
               <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                  Multiple Ways to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">Contact Us</span>
               </h2>
               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Choose the most convenient way to get in touch with our support team
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               {/* Contact Methods */}
               <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Contact Methods</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {contactMethods.map((method, index) => (
                        <a
                           key={index}
                           href={method.action}
                           data-aos="fade-up"
                           data-aos-delay={index * 100}
                           className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                        >
                           {/* Icon */}
                           <div className={`w-14 h-14 mb-4 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 transition-all duration-500`}>
                              {method.icon}
                           </div>

                           {/* Content */}
                           <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                              {method.title}
                           </h4>
                           <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                              {method.description}
                           </p>
                           <div className="text-indigo-600 dark:text-indigo-400 font-semibold">
                              {method.details}
                           </div>
                           <div className="text-gray-500 dark:text-gray-400 text-sm">
                              {method.secondary}
                           </div>

                           {/* Hover Gradient */}
                           <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>
                        </a>
                     ))}
                  </div>
               </div>

               {/* Office Hours & Location */}
               <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Office Information</h3>
                  
                  {/* Office Hours */}
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-6" data-aos="fade-up">
                     <div className="flex items-center space-x-3 mb-4">
                        <FaClock className="text-indigo-600 text-xl" />
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Office Hours</h4>
                     </div>
                     <div className="space-y-3">
                        {officeHours.map((schedule, index) => (
                           <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                              <span className="text-gray-700 dark:text-gray-300">{schedule.day}</span>
                              <span className="text-gray-800 dark:text-white font-semibold">{schedule.time}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Location */}
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6" data-aos="fade-up">
                     <div className="flex items-center space-x-3 mb-4">
                        <FaMapMarkerAlt className="text-indigo-600 text-xl" />
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Our Location</h4>
                     </div>
                     <div className="space-y-3">
                        <div>
                           <div className="font-semibold text-gray-800 dark:text-white mb-1">Main Campus</div>
                           <p className="text-gray-600 dark:text-gray-300">
                              123 Education Street, Gulberg III<br />
                              Lahore, Punjab 54000<br />
                              Pakistan
                           </p>
                        </div>
                        <div>
                           <div className="font-semibold text-gray-800 dark:text-white mb-1">Branch Office</div>
                           <p className="text-gray-600 dark:text-gray-300">
                              456 Learning Avenue, Clifton<br />
                              Karachi, Sindh 75500<br />
                              Pakistan
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}