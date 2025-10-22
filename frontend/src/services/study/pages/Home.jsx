import React from "react";
import HomeHero from "../components/home/HomeHero";
import FeaturesSection from "../components/home/FeaturesSection";
import CoursesOverviewSection from "../components/home/CouresesOverviewSection";
import StatsAchievementSection from "../components/home/StatsAchivementSection";
import FAQSection from "../components/home/FAQSection";
import FinalCTASection from "../components/home/FinalCTASection";

function StudyHome() {
   return (
      <>
         <HomeHero />
         <FeaturesSection />
         <CoursesOverviewSection />
         <StatsAchievementSection />
         <FAQSection />
         <FinalCTASection />
      </>
   );
}

export default StudyHome;
