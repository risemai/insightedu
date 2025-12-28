'use client';

import Lottie from 'lottie-react';
import lottieAnimation from '@/public/assets/json/Website-Under-Construction.json';

export function UnderConstruction() {
  return (
    <div className='flex  flex-col text-center items-center py-14 md:py-20 px-3 md:px-0'>
      <Lottie
        animationData={lottieAnimation}
        loop
        autoplay
        style={{ height: 350, width: 350 }}
      />
      <div>
        <h2 className='text-2xl font-bold'>This page is under construction</h2>
      </div>
    </div>
  );
}
