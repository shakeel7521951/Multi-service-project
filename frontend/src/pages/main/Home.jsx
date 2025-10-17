import React from "react";
import Hero from "../../components/main/home/Hero";
import CategoriesSection from "../../components/main/home/CategoriesSection";
import StudySection from "../../components/main/home/StudySection";
import ReadingSection from "../../components/main/home/ReadingSection";
import MusicSection from "../../components/main/home/MusicSection";
import GamingSection from "../../components/main/home/GamingSection";
function Home() {
   return (
      <div>
         <Hero />
         <CategoriesSection />
         <StudySection />
         <ReadingSection />
         <MusicSection />
         <GamingSection />
      </div>
   );
}

export default Home;
