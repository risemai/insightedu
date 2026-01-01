// /schemas/successStory.js
import { defineType, defineField } from 'sanity';

export const successStory = defineType({
  name: 'successStory',
  title: 'Success Story',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'universityOrOrganization',
      title: 'University / Organization',
      type: 'string',
      description: 'Where they are currently studying or working',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
  ],
});
