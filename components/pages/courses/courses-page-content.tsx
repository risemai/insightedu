import { CourseDetailCard } from './course-detail-card';
import { CoursesCards } from './courses-cards';

export function CoursesPageContent() {
  return (
    <div className='space-y-6 md:space-y-10'>
      <CourseDetailCard />
      <CoursesCards />
    </div>
  );
}
