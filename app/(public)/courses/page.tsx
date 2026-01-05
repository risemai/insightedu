import type { Metadata } from 'next';
import { CoursesPageContent } from '@/components/pages/courses';

export const metadata: Metadata = {
  title: 'Courses | Risemai',
  description:
    'Explore our comprehensive range of courses in sustainable economic, medical, & agricultural innovation, as well as technology and development.',
  openGraph: {
    title: 'Courses | Risemai',
    description:
      'Explore our comprehensive range of courses in sustainable economic, medical, & agricultural innovation, as well as technology and development.',
    url: (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') + '/courses',
    images: [
      {
        url: (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') + '/risemai-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Risemai Courses',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Risemai Courses',
  description:
    'Explore our comprehensive range of courses in sustainable economic, medical, & agricultural innovation, as well as technology and development.',
  url: (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') + '/courses',
  publisher: {
    '@type': 'Organization',
    name: 'Risemai',
    logo: {
      '@type': 'ImageObject',
      url: (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') + '/rise-mai-logo-01.png',
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
