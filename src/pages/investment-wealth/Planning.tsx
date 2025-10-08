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
      imageUrl: 'https://images.pexels.com/photos/8297031/pexels-photo-8297031.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: PieChart,
      title: 'Portfolio Diversification',
      description: 'Build a balanced investment portfolio',
      features: ['Asset allocation', 'Risk assessment', 'Rebalancing', 'Performance monitoring'],
      imageUrl: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: TrendingUp,
      title: 'Investment Strategies',
      description: 'Choose from various investment approaches',
      features: ['Conservative', 'Moderate', 'Aggressive', 'Custom strategies'],
      imageUrl: 'https://images.pexels.com/photos/7567565/pexels-photo-7567565.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Calendar,
      title: 'Regular Reviews',
      description: 'Periodic portfolio reviews and adjustments',
      features: ['Quarterly reviews', 'Performance reports', 'Strategy updates', 'Tax optimization'],
      imageUrl: 'https://images.pexels.com/photos/6801872/pexels-photo-6801872.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <PageTemplate
      title="Investment Planning"
      subtitle="Professional guidance to help you achieve your financial goals"
      gradient="from-sky-600 to-sky-700"
      imageUrl="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1920"
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
