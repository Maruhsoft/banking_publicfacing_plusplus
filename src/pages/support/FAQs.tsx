import React, { useState } from 'react';
import { PageTemplate, ContentSection } from '../../components/PageTemplate';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: 'Account Management',
      questions: [
        {
          q: 'How do I open an account online?',
          a: 'You can open an account in minutes by clicking "Open Account" and completing our secure online application. You\'ll need a valid ID, proof of address, and an initial deposit of $25.',
        },
        {
          q: 'How can I reset my online banking password?',
          a: 'Click "Forgot Password" on the login page and follow the instructions. You\'ll receive a secure link via email to reset your password.',
        },
        {
          q: 'Can I have multiple accounts?',
          a: 'Yes, you can open multiple savings, checking, and investment accounts. Each account can be managed from the same online banking dashboard.',
        },
      ],
    },
    {
      category: 'Security',
      questions: [
        {
          q: 'How secure is online banking?',
          a: 'We use 256-bit SSL encryption, multi-factor authentication, and 24/7 fraud monitoring to protect your accounts. Your deposits are FDIC insured up to $250,000.',
        },
        {
          q: 'What should I do if I suspect fraud?',
          a: 'Contact us immediately through our 24/7 helpline or secure message center. We\'ll freeze your account, investigate the issue, and restore any unauthorized transactions.',
        },
      ],
    },
    {
      category: 'Transfers & Payments',
      questions: [
        {
          q: 'How long do transfers take?',
          a: 'Internal transfers are instant. External transfers typically take 1-3 business days. Wire transfers are processed within 24 hours.',
        },
        {
          q: 'Are there fees for transfers?',
          a: 'Internal transfers are free. External transfers may have a small fee. Wire transfers have a fixed fee. Check our fee schedule for details.',
        },
      ],
    },
  ];

  return (
    <PageTemplate
      title="Frequently Asked Questions"
      subtitle="Find answers to common questions about our services"
      gradient="from-purple-600 to-purple-700"
    >
      <ContentSection>
        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((category, catIdx) => (
            <div key={catIdx} className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{category.category}</h2>
              <div className="space-y-3">
                {category.questions.map((faq, faqIdx) => {
                  const index = catIdx * 100 + faqIdx;
                  const isOpen = openIndex === index;
                  return (
                    <div key={faqIdx} className="border border-slate-200 rounded-lg">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
                      >
                        <span className="font-semibold text-slate-900">{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-slate-600">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </ContentSection>
    </PageTemplate>
  );
}
