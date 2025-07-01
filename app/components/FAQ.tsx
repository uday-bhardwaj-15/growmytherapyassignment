
'use client';

import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "While I do not directly accept insurance, I provide detailed superbills for self-submission to your insurance provider for potential reimbursement. This approach allows you to potentially recover costs while maintaining the flexibility and privacy that comes with private pay therapy."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions are conducted via secure Zoom meetings for your convenience and privacy. Online therapy can be equally as effective as in-person sessions and offers greater flexibility for busy schedules and lifestyle considerations."
    },
    {
      question: "What is your cancellation policy?",
      answer: "I require 24-hour notice for cancellations to avoid session fees. Emergency situations are handled case-by-case with compassion and understanding. This policy helps maintain consistent scheduling for all clients while respecting everyone's time."
    },
    {
      question: "How long are therapy sessions?",
      answer: "Individual therapy sessions are thoughtfully structured for 50 minutes, while couples sessions extend to 60 minutes. This provides adequate time to explore issues thoroughly while maintaining a structured therapeutic framework that maximizes our time together."
    },
    {
      question: "What should I expect in the first session?",
      answer: "The initial session focuses on understanding your concerns, aspirations, and personal background. We will collaboratively discuss your therapeutic needs and develop a personalized treatment plan together in a comfortable, judgment-free environment that honors your unique journey."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-premium-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-yellow-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl font-serif text-gray-600 leading-relaxed">
              Find answers to common inquiries about therapy sessions, policies, and what to expect on your therapeutic journey.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-premium hover:shadow-premium-lg transition-all duration-300 overflow-hidden"
              >
                <button
                  className="w-full text-left p-8 hover:bg-gray-50/50 transition-colors rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-heading font-semibold text-gray-900 pr-6 leading-relaxed">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-yellow-100 transition-all duration-300 ${openIndex === index ? 'rotate-180 bg-yellow-200' : ''}`}>
                      <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-8">
                    <p className="font-serif text-gray-600 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Premium Contact CTA */}
          <div className="text-center mt-16">
            <p className="font-serif text-gray-600 mb-6 text-lg">
              Still have questions? I'm here to help guide you on your journey.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-yellow-600 hover:text-blue-600 font-serif font-medium underline underline-offset-4 transition-colors duration-300 text-lg tracking-wide"
            >
              Get in touch →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
