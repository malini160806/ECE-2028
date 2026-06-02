import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { FacultySection } from "@/components/sections/FacultySection";
import { LabsSection } from "@/components/sections/LabsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { PlacementsSection } from "@/components/sections/PlacementsSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { NewsSection } from "@/components/sections/NewsSection";
import { EventsSection } from "@/components/sections/EventsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ResearchSection />
      <FacultySection />
      <LabsSection />
      <AchievementsSection />
      <PlacementsSection />
      <CTABanner />
      <NewsSection />
      <EventsSection />
    </>
  );
}
