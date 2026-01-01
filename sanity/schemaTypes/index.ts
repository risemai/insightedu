import { type SchemaTypeDefinition } from 'sanity';
import { courseType } from './courseType';
import { mentorType } from './mentorType';
import { successStory } from './successStory';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [courseType, mentorType, successStory],
};
