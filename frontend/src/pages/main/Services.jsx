import React from "react";
import StudyPreview from "../../components/main/services/StudyPreview";
import ReadingPreview from "../../components/main/services/ReadingPreview";
import MusicPreview from "../../components/main/services/MusicPreview";
import GamingPreview from "../../components/main/services/GamingPreview";
import CreativePreview from "../../components/main/services/CreativePreview";
import ServicesHero from "../../components/main/services/ServicesHero";

const Services = () => {
   return (
      <>
         <div className="mt-8">
            <ServicesHero />
            <StudyPreview />
            <ReadingPreview />
            <MusicPreview />
            <GamingPreview />
            <CreativePreview />
         </div>
      </>
   );
};

export default Services;
