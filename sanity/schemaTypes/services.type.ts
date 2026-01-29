import { defineType, defineField } from 'sanity';

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    // defineField({
    //   name: 'icon',
    //   title: 'Icon',
    //   type: 'string',
    //   description: 'Paste an emoji or keyboard icon (e.g. 🔍 ⭐ 🚀)',
    //   validation: (Rule) => Rule.required().max(5),
    // }),

    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description:
        'Specify the icon name from Lucide Icons (https://lucide.dev/icons/) (e.g., "Search", "Star", "Rocket")',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: [
          { title: 'Blue', value: 'blue' },
          { title: 'Red', value: 'red' },
          { title: 'Green', value: 'green' },
          { title: 'Yellow', value: 'yellow' },
          { title: 'Purple', value: 'purple' },
          { title: 'Pink', value: 'pink' },
          { title: 'Indigo', value: 'indigo' },
          { title: 'Orange', value: 'orange' },
          { title: 'Teal', value: 'teal' },
          { title: 'Cyan', value: 'cyan' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      description: 'Add feature points (one per field)',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      icon: 'icon',
    },
    prepare({ title, icon }) {
      return {
        title: `${icon ?? ''} ${title}`,
      };
    },
  },
});
