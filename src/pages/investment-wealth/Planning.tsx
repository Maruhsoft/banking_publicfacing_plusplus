import React from 'react';
import { PageTemplate, ContentSection, FeatureCard } from '../../components/PageTemplate';
import { Target, PieChart, TrendingUp, Calendar } from 'lucide-react';

export function Planning() {
  const services = [
    {
      icon: Target,
      title: 'Goal-Based Planning',
      description: 'Create and track personalized investment goals',
      features: ['Retirement planning', 'Education savings', 'Home purchase', 'Wealth building'],
    },
    {
      icon: PieChart,
      title: 'Portfolio Diversification',
      description: 'Build a balanced investment portfolio',
      features: ['Asset allocation', 'Risk assessment', 'Rebalancing', 'Performance monitoring'],
    },
    {
      icon: TrendingUp,
      title: 'Investment Strategies',
      description: 'Choose from various investment approaches',
      features: ['Conservative', 'Moderate', 'Aggressive', 'Custom strategies'],
    },
    {
      icon: Calendar,
      title: 'Regular Reviews',
      description: 'Periodic portfolio reviews and adjustments',
      features: ['Quarterly reviews', 'Performance reports', 'Strategy updates', 'Tax optimization'],
    },
  ];

  return (
    <PageTemplate
      title="Investment Planning"
      subtitle="Professional guidance to help you achieve your financial goals"
      gradient="from-sky-600 to-sky-700"
    >
      <ContentSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <FeatureCard key={idx} {...service} />
          ))}
        </div>
      </ContentSection>
    </PageTemplate>
  );
}
