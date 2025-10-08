import React from 'react';
import { useApp } from '../../contexts/AppContext';
import { PageTemplate, ContentSection } from '../../components/PageTemplate';
import { TrendingUp, Shield, Calendar, CheckCircle } from 'lucide-react';

export function FixedDeposits() {
  const { config } = useApp();

  const terms = [
    { duration: '6 Months', rate: '3.5%', minDeposit: '$1,000' },
    { duration: '1 Year', rate: '4.0%', minDeposit: '$1,000' },
    { duration: '2 Years', rate: '4.5%', minDeposit: '$2,500' },
    { duration: '5 Years', rate: '5.2%', minDeposit: '$5,000' },
  ];

  const benefits = [
    'Guaranteed returns',
    'FDIC insured up to $250,000',
    'Flexible term options',
    'Automatic renewal available',
    'Competitive interest rates',
    'No monthly fees',
  ];

  return (
    <PageTemplate
      title="Fixed Deposits"
      subtitle="Secure your future with guaranteed returns on your investments"
      gradient="from-amber-600 to-amber-700"
    >
      <ContentSection title="Current Rates">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {terms.map((term, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-amber-600">
              <Calendar className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{term.duration}</h3>
              <div className="text-4xl font-bold text-amber-600 mb-2">{term.rate}</div>
              <p className="text-slate-600">APY</p>
              <p className="text-sm text-slate-500 mt-4">Min. {term.minDeposit}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="slate" title="Benefits">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-3xl mx-auto text-center">
          <TrendingUp className="w-16 h-16 text-amber-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Start Investing Today</h2>
          <p className="text-xl text-slate-600 mb-8">
            Open a fixed deposit account and watch your savings grow
          </p>
          <a
            href={config?.userRegistrationUrl}
            
            
            className="inline-block px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg"
          >
            Open Account
          </a>
        </div>
      </ContentSection>
    </PageTemplate>
  );
}
