'use client';

import { OurJourney } from './our-journey';
import { CoreValues } from './core-values';
import { LeadershipTeam } from './leadership-team';
import { StartResearchJourney } from './start-research-journey';
import { AboutUsHero } from './about-us-hero';

export function AboutContent() {
  return (
    <div>
      <AboutUsHero />
      <OurJourney />
      <CoreValues />
      <LeadershipTeam />
      <StartResearchJourney />
    </div>
  );
}
