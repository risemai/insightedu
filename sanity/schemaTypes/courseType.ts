// /schemas/course.js
import { defineType, defineField } from 'sanity';

export const courseType = defineType({
  name: 'course',
  title: 'Course',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'instructors',
      title: 'Instructors',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: 'originalPrice',
      title: 'Original Price',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: 'currentPrice',
      title: 'Current Price',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'learningOutcomes',
      title: 'What You Will Learn',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'courseFeatures',
      title: 'Course Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'hours',
      title: 'Total Hours',
      type: 'number',
    }),

    defineField({
      name: 'quizzes',
      title: 'Quizzes',
      type: 'number',
    }),

    defineField({
      name: 'assignments',
      title: 'Assignments',
      type: 'number',
    }),

    defineField({
      name: 'sessions',
      title: 'Sessions',
      type: 'number',
    }),

    defineField({
      name: 'isFeatured',
      title: 'Featured Course',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Answer', type: 'text' },
          ],
        },
      ],
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Course rating (1–5)',
      validation: (Rule) => Rule.required().min(1).max(5).precision(1),
      initialValue: 5,
    }),

    defineField({
      name: 'totalReviews',
      title: 'Total Reviews',
      type: 'number',
    }),

    defineField({
      name: 'enrolled',
      title: 'Enrolled Students',
      type: 'number',
      description: 'Number of students enrolled in this course',
      validation: (Rule) => Rule.min(0),
      initialValue: 0,
    }),
  ],
});
