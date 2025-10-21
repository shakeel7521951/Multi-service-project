import React, { useEffect } from "react";
import StudyPreview from "../../components/main/services/StudyPreview";
import ReadingPreview from "../../components/main/services/ReadingPreview";
import MusicPreview from "../../components/main/services/MusicPreview";
import GamingPreview from "../../components/main/services/GamingPreview";
import CreativePreview from "../../components/main/services/CreativePreview";
import ServicesHero from "../../components/main/services/ServicesHero";

const Services = () => {
   useEffect(() => {
      const activeService = localStorage.getItem("activeService");

      if (activeService) {
         // remove leading slash e.g. "/study-services" → "study-services"
         const sectionId = activeService.replace("/", "");
         const section = document.getElementById(sectionId);

         if (section) {
            const navbarHeight =
               document.querySelector("nav")?.offsetHeight || 0;
            const topPosition =
               section.getBoundingClientRect().top +
               window.pageYOffset -
               navbarHeight;

            window.scrollTo({
               top: topPosition,
               behavior: "smooth",
            });
         }

         // clear stored service name
         localStorage.removeItem("activeService");
      }
   }, []);

   return (
      <div className="mt-8">
         <ServicesHero />

         {/* ✅ Each section has unique ID for scrolling */}
         <section id="study-services">
            <StudyPreview />
         </section>

         <section id="reading-services">
            <ReadingPreview />
         </section>

         <section id="music-services">
            <MusicPreview />
         </section>

         <section id="gaming-services">
            <GamingPreview />
         </section>

         <section id="creative-services">
            <CreativePreview />
         </section>
      </div>
   );
};

export default Services;
