import React from 'react';
import { useApp } from '../../contexts/AppContext';
import { PageTemplate, ContentSection, FeatureCard } from '../../components/PageTemplate';
import { Home, Car, GraduationCap, Percent } from 'lucide-react';

export function Loans() {
  const { config } = useApp();

  const loans = [
    {
      icon: Home,
      title: 'Home Loans',
      description: 'Make your dream home a reality with competitive mortgage rates',
      features: ['Rates from 3.5% APR', 'Up to 30-year terms', 'No prepayment penalties', 'Fast approval process'],
    },
    {
      icon: Car,
      title: 'Auto Loans',
      description: 'Drive away in your new car with flexible financing options',
      features: ['New and used cars', 'Rates from 4.2% APR', 'Up to 7-year terms', 'Quick online application'],
    },
    {
      icon: GraduationCap,
      title: 'Personal Loans',
      description: 'Flexible loans for education, consolidation, or major purchases',
      features: ['Borrow up to $50,000', 'Fixed interest rates', 'No collateral required', 'Same-day funding available'],
    },
  ];

  return (
    <PageTemplate
      title="Personal Loans"
      subtitle="Flexible financing solutions to help you achieve your goals"
    >
      <ContentSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {loans.map((loan, idx) => (
            <FeatureCard
              key={idx}
              {...loan}
              action={{ label: 'Apply Now', href: config?.userRegistrationUrl || '#' }}
            />
          ))}
        </div>
      </ContentSection>

      <ContentSection background="slate">
        <div className="max-w-3xl mx-auto text-center">
          <Percent className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Competitive Rates & Transparent Terms</h2>
          <p className="text-xl text-slate-600">
            No hidden fees, flexible repayment options, and personalized service from application to approval
          </p>
        </div>
      </ContentSection>
    </PageTemplate>
  );
}
