'use client';

import { Loading } from '@/components/shared';
import { useSupportCenter } from '@/hooks';
import { SitePageCommonContent } from './site-page-common-content';

export function SupportCenterContent() {
  const { data, isLoading } = useSupportCenter();

  if (isLoading) return <Loading />;
  return <SitePageCommonContent data={data} />;
}
