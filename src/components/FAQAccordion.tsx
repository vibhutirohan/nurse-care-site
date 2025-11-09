import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-[#2B2B2B] font-serif pr-4">
              {faq.question}
            </h3>
            <div className="flex-shrink-0">
              <svg
                className={`w-6 h-6 text-[#8B2E2E] transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          {openIndex === index && (
            <div className="px-8 pb-6">
              <div className="text-[#6C6C6C] leading-relaxed">
                {faq.answer}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQAccordion;