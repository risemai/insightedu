import { CoreValues, OurJourney, StartResearchJourney } from '../about';
import { ExploreCourseCard } from './explore-course-card';
import { FaqSection } from './faq-section';
import { HeroContent } from './hero';
import { HowItWorks } from './how-it-works';
import { MissionSection } from './mission-section';
import { ResearchAreas } from './research-areas';
import { StatsSection } from './stats-section';
import { SuccessStories } from './success-stories';
import { TeamSection } from './team-section';

export function HomeContent() {
  return (
    <div>
      <HeroContent />
      <CoreValues />
      <StatsSection />
      <ResearchAreas />
      <HowItWorks />
      <ExploreCourseCard />
      <TeamSection />
      <SuccessStories />
      <OurJourney />
      <MissionSection />
      <FaqSection />
      <StartResearchJourney />
    </div>
  );
}
