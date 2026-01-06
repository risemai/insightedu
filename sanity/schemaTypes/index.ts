import { type SchemaTypeDefinition } from 'sanity';
import { courseType } from './courseType';
import { mentorType } from './mentorType';
import { successStory } from './successStory';
import { privacyPolicy } from './privacyPolicy';
import { supportCenter } from './supportCenter';
import { faqType } from './faqType';
import { termsOfConditions } from './termsOfConditions';
import { researchType } from './researchType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    courseType,
    mentorType,
    successStory,
    privacyPolicy,
    termsOfConditions,
    supportCenter,
    faqType,
    researchType,
  ],
};
