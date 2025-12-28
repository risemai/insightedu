import { BlobSection } from './blob-section';
import { FEATURED_COURSE } from './constants';
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
      <div className='container mx-auto px-4 -mt-20 relative z-10'>
        <BlobSection />
      </div>
      <section id='featured-course' className='py-20 container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
            Our Primary Program
          </h2>
          <div className='h-1.5 w-24 bg-blue-600 mx-auto rounded-full'></div>
        </div>
        <CourseDetailCard course={FEATURED_COURSE} isFullView={true} />
      </section>
      <StatsSection />
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4 text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900'>
            Explore Our Featured Course
          </h2>
          <p className='text-slate-500 mt-4 max-w-2xl mx-auto'>
            Discover programs designed to transform your academic journey and
            professional research skills.
          </p>
        </div>
        <div className='container mx-auto px-4 flex justify-center'>
          <ExploreCourseCard course={FEATURED_COURSE} />
        </div>
      </section>
      <SuccessStories />
      <TeamSection />
      <MissionSection />
    </div>
  );
}
