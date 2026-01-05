import type { Metadata } from 'next';
import { CoursesPageContent } from '@/components/pages/courses';

export const metadata: Metadata = {
  title: 'Courses | InsightEdu',
  description:
    'Explore our comprehensive range of courses in sustainable economic, medical, & agricultural innovation, as well as technology and development.',
  openGraph: {
    title: 'Courses | InsightEdu',
    description:
      'Explore our comprehensive range of courses in sustainable economic, medical, & agricultural innovation, as well as technology and development.',
    url:
      (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') +
      '/courses',
    images: [
      {
        url:
          (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') +
          '/insight-edu-og.jpg',
        width: 1200,
        height: 630,
        alt: 'InsightEdu Courses',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'InsightEdu Courses',
  description:
    'Explore our comprehensive range of courses in sustainable economic, medical, & agricultural innovation, as well as technology and development.',
  url:
    (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') +
    '/courses',
  publisher: {
    '@type': 'Organization',
    name: 'InsightEdu',
    logo: {
      '@type': 'ImageObject',
      url:
        (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') +
        '/insight-edu-logo.png',
    },
  },
};

export default function CoursesPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CoursesPageContent />
    </>
  );
}
