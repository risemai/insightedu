import type { Metadata } from 'next';
import { ContactContent } from '@/components/pages/contact';

export const metadata: Metadata = {
  title: 'Contact Us | Risemai',
  description:
    'Get in touch with Risemai. We are here to answer your questions and support your learning journey.',
  openGraph: {
    title: 'Contact Us | Risemai',
    description:
      'Get in touch with Risemai. We are here to answer your questions and support your learning journey.',
    url: (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') + '/contact',
    images: [
      {
        url: (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') + '/risemai-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Risemai',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Risemai',
  description:
    'Get in touch with Risemai. We are here to answer your questions and support your learning journey.',
  url: (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') + '/contact',
  publisher: {
    '@type': 'Organization',
    name: 'Risemai',
    logo: {
      '@type': 'ImageObject',
      url: (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') + '/rise-mai-logo-01.png',
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
