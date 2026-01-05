'use client';

import { Loading } from '@/components/shared';

import { SitePageCommonContent } from './site-page-common-content';
import { usePrivacyPolicy } from '@/hooks';

export function PrivacyPolicyContent() {
  const { data, isLoading } = usePrivacyPolicy();

  if (isLoading) return <Loading />;

  return <SitePageCommonContent data={data} />;
}
