import React from "react";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";
import ContactFAQ from "../components/contact/ContactFAQ";
import ContactCTA from "../components/contact/ContactCTA";

export default function StudyContact() {
   return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
         <ContactHero />
         <ContactInfo />
         <ContactForm />
         <ContactMap />
         <ContactFAQ />
         <ContactCTA />
      </div>
   );
}
