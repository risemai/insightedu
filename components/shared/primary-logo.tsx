import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

type PrimaryLogoProps = {
  width?: number;
  height?: number;
  className?: string;
};

export function PrimaryLogo({
  width = 120,
  height = 80,
  className,
}: PrimaryLogoProps) {
  return (
    <Link href='/'>
      <Image
        src='/insight-edu-logo.png'
        width={width}
        height={height}
        alt='InsightEdu Logo'
        className={cn('w-44 inline', className)}
      />
    </Link>
  );
}
