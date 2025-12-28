import {
  BookAudio,
  BookOpen,
  ClipboardMinus,
  GraduationCap,
  NotebookPen,
  PenTool,
  Presentation,
  Users,
} from 'lucide-react';

export function BlobSection() {
  const cards = [
    {
      title: 'Indexed Journal Paper Publication',
      description:
        'Get your research published in Scopus, SCI, or other indexed journals with expert guidance.',
      icon: <BookOpen className='w-7 h-7 text-blue-500' />,
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Abstract & Proposal Writing',
      description:
        'Compelling abstracts and proposals that capture attention and secure approvals.',
      icon: <ClipboardMinus className='w-7 h-7 text-purple-500' />,
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Conference Paper Writing',
      description:
        'Professional conference papers that meet international standards and guidelines.',
      icon: <Presentation className='w-7 h-7 text-emerald-500' />,
      bgColor: 'bg-emerald-50',
    },
    {
      title: 'Thesis Paper Writing',
      description:
        'Comprehensive thesis support from research design to final submission.',
      icon: <GraduationCap className='w-7 h-7 text-indigo-500' />,
      bgColor: 'bg-indigo-50',
    },
    {
      title: 'Proof Reading & Editing',
      description:
        'Meticulous editing and proofreading to enhance clarity and eliminate errors.',
      icon: <PenTool className='w-7 h-7 text-fuchsia-500' />,
      bgColor: 'bg-fuchsia-50',
    },
    {
      title: 'Assignment Writing',
      description:
        'High-quality assignments tailored to your course requirements and standards.',
      icon: <NotebookPen className='w-7 h-7 text-teal-500' />,
      bgColor: 'bg-teal-50',
    },
    {
      title: 'Research Paper Writing',
      description:
        'Original research papers with rigorous methodology and academic integrity.',
      icon: <BookAudio className='w-7 h-7 text-rose-500' />,
      bgColor: 'bg-rose-50',
    },
    {
      title: 'Authorship Positions',
      description:
        'Secure co-authorship opportunities in reputable academic publications.',
      icon: <Users className='w-7 h-7 text-violet-500' />,
      bgColor: 'bg-violet-50',
    },
  ];

  return (
    <div className='container mx-auto px-4 -mt-20 relative z-10'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
        {cards.map((card, idx) => (
          <div
            key={idx}
            className='bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 
            hover:-translate-y-2 transition-all duration-300'
          >
            <div
              className={`${card.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
            >
              {card.icon}
            </div>
            <h3 className='text-xl font-semibold text-slate-900 mb-3'>
              {card.title}
            </h3>
            <p className='text-slate-500 leading-relaxed font-medium'>
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
