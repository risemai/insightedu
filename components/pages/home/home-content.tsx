import { CourseDetailCard } from './course-detail-card';
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
      {/* <BlobSection /> */}
      <CourseDetailCard />
      <StatsSection />
      <ExploreCourseCard />
      <SuccessStories />
      <TeamSection />
      <MissionSection />
    </div>
  );
}
