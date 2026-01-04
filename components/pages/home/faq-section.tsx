'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useFaq } from '@/hooks/faq';

export function FaqSection() {
  const { data: faqData, isLoading } = useFaq();

  return (
    <section className='py-24 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-black text-slate-900 mb-4'>FAQ</h2>
          <p className='text-slate-500 max-w-2xl mx-auto font-medium'>
            Answers to the most common questions about our services and courses.
          </p>
        </div>
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div className='mx-auto w-3/6'>
              <Accordion type='single' collapsible>
                {faqData?.map((faq) => (
                  <AccordionItem
                    key={faq._id}
                    value={faq._id}
                    className='border-none'
                  >
                    <AccordionTrigger className='text-lg font-semibold cursor-pointer p-5 my-2.5 rounded-xl bg-blue-100'>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className='p-4 text-lg text-gray-600'>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
