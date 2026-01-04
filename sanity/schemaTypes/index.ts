import { type SchemaTypeDefinition } from 'sanity';
import { courseType } from './courseType';
import { mentorType } from './mentorType';
import { successStory } from './successStory';
import { privacyPolicy } from './privacyPolicy';
import { termsConditions } from './termsConditions';
import { supportCenter } from './supportCenter';
import { faqType } from './faqType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    courseType,
    mentorType,
    successStory,
    privacyPolicy,
    termsConditions,
    supportCenter,
    faqType,
  ],
};
