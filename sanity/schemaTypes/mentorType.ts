// schemas/mentor.js
import { defineField, defineType } from 'sanity';

export const mentorType = defineType({
  name: 'mentor',
  title: 'Mentor',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Mentor', value: 'mentor' },
          { title: 'Support Mentor', value: 'supportMentor' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    }),

    defineField({
      name: 'researchGate',
      title: 'ResearchGate Profile URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }).custom((url) => {
          if (!url) return true;
          return url.includes('researchgate.net')
            ? true
            : 'Must be a valid ResearchGate profile link';
        }),
    }),

    defineField({
      name: 'googleScholar',
      title: 'Google Scholar Profile URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }).custom((url) => {
          if (!url) return true;
          return url.includes('scholar.google')
            ? true
            : 'Must be a valid Google Scholar profile link';
        }),
    }),

    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
    }),
  ],
});
