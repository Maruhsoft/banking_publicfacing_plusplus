import React from 'react';
import { useApp } from '../../contexts/AppContext';
import { PageTemplate, ContentSection } from '../../components/PageTemplate';
import { FileText, CheckCircle, CreditCard, ArrowRight } from 'lucide-react';

export function OpenAccount() {
  const { config } = useApp();

  const steps = [
    {
      number: '1',
      title: 'Choose Your Account',
      description: 'Select from savings, checking, or premium accounts',
    },
    {
      number: '2',
      title: 'Provide Information',
      description: 'Fill out our secure online application',
    },
    {
      number: '3',
      title: 'Verify Identity',
      description: 'Quick verification process for your security',
    },
    {
      number: '4',
      title: 'Start Banking',
      description: 'Access your new account immediately',
    },
  ];

  const requirements = [
    'Valid government-issued ID',
    'Proof of address (utility bill or lease)',
    'Social Security Number or Tax ID',
    'Initial deposit (minimum $25)',
  ];

  return (
    <PageTemplate
      title="Open an Account"
      subtitle="Start your banking journey in minutes with our simple online application"
    >
      <ContentSection title="How It Works">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="slate" title="What You'll Need">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <FileText className="w-12 h-12 text-blue-600 mb-6" />
            <ul className="space-y-3">
              {requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-3xl mx-auto text-center">
          <CreditCard className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Open your account online in less than 10 minutes
          </p>
          <a
            href={config?.userRegistrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            Open Account Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </ContentSection>
    </PageTemplate>
  );
}
