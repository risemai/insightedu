'use client';

import { OurJourney } from './our-journey';
import { LeadershipTeam } from './leadership-team';
import { AboutUsHero } from './about-us-hero';
import { ImpactAchievements } from './impact-achievements';
import { OurApproach } from './our-approach';
import { GlobalReach } from './global-reach';
import { WhyChooseUs } from './why-choose-us';

export function AboutContent() {
  return (
    <div>
      <AboutUsHero />
      <OurJourney />
      <ImpactAchievements />
      <OurApproach />
      <WhyChooseUs />
      <GlobalReach />
      <LeadershipTeam />
    </div>
  );
}
