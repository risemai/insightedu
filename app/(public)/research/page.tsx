import type { Metadata } from 'next';
import { ResearchPageContent } from '@/components/pages/research';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Research | InsightEdu',
  description:
    'Explore research projects at InsightEdu, advancing innovation in economics, medicine, and agriculture.',
  openGraph: {
    title: 'Research | InsightEdu',
    description:
      'Explore research projects at InsightEdu, advancing innovation in economics, medicine, and agriculture.',
    url:
      (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') +
      '/research',
    images: [
      {
        url:
          (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') +
          '/insight-edu-og.jpg',
        width: 1200,
        height: 630,
        alt: 'InsightEdu Research',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'InsightEdu Research',
  description:
    'Explore research projects at InsightEdu, advancing innovation in economics, medicine, and agriculture.',
  url:
    (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') +
    '/research',
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

export default function ResearchPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ResearchPageContent />
    </>
  );
}
