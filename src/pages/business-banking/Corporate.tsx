import React from 'react';
import { useApp } from '../../contexts/AppContext';
import { PageTemplate, ContentSection, FeatureCard } from '../../components/PageTemplate';
import { Globe, Shield, Briefcase, LineChart } from 'lucide-react';

export function Corporate() {
  const { config } = useApp();

  const services = [
    {
      icon: Globe,
      title: 'International Banking',
      description: 'Global solutions for multinational corporations',
      features: ['Multi-currency accounts', 'Foreign exchange', 'International wire transfers', 'Trade finance'],
      imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Shield,
      title: 'Treasury Management',
      description: 'Optimize cash flow and liquidity',
      features: ['Cash concentration', 'Liquidity management', 'Investment services', 'Risk management'],
      imageUrl: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Briefcase,
      title: 'Corporate Credit',
      description: 'Flexible credit facilities for large enterprises',
      features: ['Credit lines', 'Term loans', 'Project financing', 'Syndicated loans'],
      imageUrl: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: LineChart,
      title: 'Advisory Services',
      description: 'Strategic financial consulting',
      features: ['M&A advisory', 'Capital structure', 'IPO support', 'Financial planning'],
      imageUrl: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <PageTemplate
      title="Corporate Accounts"
      subtitle="Enterprise-grade banking solutions for large corporations"
      gradient="from-slate-700 to-slate-800"
      imageUrl="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
    >
      <ContentSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <FeatureCard
              key={idx}
              {...service}
              action={{ label: 'Contact Us', href: config?.userRegistrationUrl || '#' }}
            />
          ))}
        </div>
      </ContentSection>
    </PageTemplate>
  );
}
