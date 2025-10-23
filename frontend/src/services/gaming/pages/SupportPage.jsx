import React from "react";
import SupportHero from "../components/supportPageComponents/SupportHero";
import SupportCategories from "../components/supportPageComponents/SupportCategories";
import FAQSection from "../components/supportPageComponents/FAQSection";
import ContactSupport from "../components/supportPageComponents/ContactSupport";

function SupportPage() {
   return (
      <div className="min-h-screen bg-gray-900 pt-20">
         <SupportHero />
         <SupportCategories />
         <FAQSection />
         <ContactSupport />
      </div>
   );
}

export default SupportPage;
