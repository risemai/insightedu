import { defineType, defineField } from 'sanity';

export const termsOfConditions = defineType({
  name: 'termsOfConditions',
  title: 'Terms of Conditions',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
