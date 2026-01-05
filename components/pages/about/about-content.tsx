'use client';

import { OurJourney } from './our-journey';
import { AboutUsHero } from './about-us-hero';
import { ImpactAchievements } from './impact-achievements';
import { OurApproach } from './our-approach';
import { WhyChooseUs } from './why-choose-us';

export function AboutContent() {
  return (
    <div>
      <AboutUsHero />
      <OurJourney />
      <ImpactAchievements />
      <OurApproach />
      <WhyChooseUs />
      {/* <GlobalReach /> */}
      {/* <LeadershipTeam /> */}
    </div>
  );
}
