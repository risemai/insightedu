import { CoreValues, OurJourney, StartResearchJourney } from '../about';
import { FaqSection } from './faq-section';
import { HeroContent } from './hero';
import { HowItWorks } from './how-it-works';
import { MissionSection } from './mission-section';
import { RecentProject } from './recent-project';
import { ResearchAreas } from './research-areas';
import { SuccessStories } from './success-stories';

export function HomeContent() {
  return (
    <div>
      <HeroContent />
      <CoreValues />
      {/* <StatsSection /> */}
      <ResearchAreas />
      <HowItWorks />
      <RecentProject />
      {/* <ExploreCourseCard /> */}
      {/* <TeamSection /> */}
      <SuccessStories />
      <OurJourney />
      <MissionSection />
      <FaqSection />
      <StartResearchJourney />
    </div>
  );
}
