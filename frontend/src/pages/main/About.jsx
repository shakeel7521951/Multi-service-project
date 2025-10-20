import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "../../components/main/about/HeroSection";
import IntroSection from "../../components/main/about/IntroSection";
import VisionSection from "../../components/main/about/VisionSection";
import MissionSection from "../../components/main/about/MissionSection";
import StorySection from "../../components/main/about/StorySection";
import FeaturesSection from "../../components/main/about/FeatureSection";
import ClosingSection from "../../components/main/about/ClosingSection";

const About = () => {
   useEffect(() => {
      AOS.init({
         duration: 1200, // Animation duration
         offset: 100, // How far user scrolls before animation triggers
         once: false, // Animate again when scrolling up
         mirror: true, // Trigger animations when scrolling back
         easing: "ease-in-out",
      });

      // Refresh AOS when component updates (fixes bug for fast switching routes)
      AOS.refresh();
   }, []);

   return (
      <div className="flex flex-col overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
         <HeroSection />
         <IntroSection />
         <VisionSection />
         <MissionSection />
         <StorySection />
         <FeaturesSection />
         <ClosingSection />
      </div>
   );
};

export default About;
