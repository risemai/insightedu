import type { Metadata } from 'next';
import { ContactContent } from '@/components/pages/contact';

export const metadata: Metadata = {
  title: 'Contact Us | InsightEdu',
  description:
    'Get in touch with InsightEdu. We are here to answer your questions and support your learning journey.',
  openGraph: {
    title: 'Contact Us | InsightEdu',
    description:
      'Get in touch with InsightEdu. We are here to answer your questions and support your learning journey.',
    url:
      (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') +
      '/contact',
    images: [
      {
        url:
          (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') +
          '/insight-edu-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact InsightEdu',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact InsightEdu',
  description:
    'Get in touch with InsightEdu. We are here to answer your questions and support your learning journey.',
  url:
    (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') +
    '/contact',
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

export default function ContactPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactContent />
    </>
  );
}
