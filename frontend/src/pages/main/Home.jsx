import React from "react";
import Hero from "../../components/main/home/Hero";
import CategoriesSection from "../../components/main/home/CategoriesSection";
import StudySection from "../../components/main/home/StudySection";
import ReadingSection from "../../components/main/home/ReadingSection";
function Home() {
   return (
      <div>
         <Hero />
         <CategoriesSection />
         <StudySection />
         <ReadingSection />
      </div>
   );
}

export default Home;
