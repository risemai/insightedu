import { PortableTextComponents } from '@portabletext/react';

export const PortableTextComponent: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className='text-gray-600 mb-4 leading-relaxed'>{children}</p>
    ),

    h1: ({ children }) => (
      <h1 className='text-3xl font-bold text-gray-800 mb-4'>{children}</h1>
    ),

    h2: ({ children }) => (
      <h2 className='text-2xl font-semibold text-gray-700 mb-3'>{children}</h2>
    ),

    h3: ({ children }) => (
      <h3 className='text-xl font-semibold text-gray-600 mb-2'>{children}</h3>
    ),

    blockquote: ({ children }) => (
      <blockquote className='border-l-4 border-gray-300 pl-4 italic text-gray-500 mb-4'>
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className='font-bold text-gray-800'>{children}</strong>
    ),

    em: ({ children }) => <em className='italic text-gray-700'>{children}</em>,

    link: ({ children, value }) => (
      <a
        href={value?.href || '#'}
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-600 hover:underline'
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className='list-disc list-outside ml-6 mb-4'>{children}</ul>
    ),

    number: ({ children }) => (
      <ol className='list-decimal list-outside ml-6 mb-4'>{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className='mb-1'>{children}</li>,

    number: ({ children }) => <li className='mb-1'>{children}</li>,
  },
};
