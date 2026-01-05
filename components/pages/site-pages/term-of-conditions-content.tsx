'use client';

import { Loading } from '@/components/shared';
import { useTermOfConditions } from '@/hooks';
import { SitePageCommonContent } from './site-page-common-content';

export function TermOfConditionsContent() {
  const { data, isLoading } = useTermOfConditions();

  if (isLoading) return <Loading />;

  return <SitePageCommonContent data={data} />;
}
