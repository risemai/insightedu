import { CoreValues, OurJourney, StartResearchJourney } from '../about';
import { ExploreCourseCard } from './explore-course-card';
import { HeroContent } from './hero';
import { MissionSection } from './mission-section';
import { StatsSection } from './stats-section';
import { SuccessStories } from './success-stories';
import { TeamSection } from './team-section';

export function HomeContent() {
  return (
    <div>
      <HeroContent />
      <CoreValues />
      {/* <BlobSection /> */}
      {/* <CourseDetailCard /> */}
      <StatsSection />
      <OurJourney />
      <ExploreCourseCard />
      <SuccessStories />
      <TeamSection />
      <MissionSection />
      <StartResearchJourney />
    </div>
  );
}
