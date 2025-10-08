import React from 'react';
import { useApp } from '../../contexts/AppContext';
import { PageTemplate, ContentSection, FeatureCard } from '../../components/PageTemplate';
import { Landmark, Shield, TrendingUp, Clock } from 'lucide-react';

export function TreasuryBills() {
  const { config } = useApp();

  const features = [
    {
      icon: Landmark,
      title: 'Government Backed',
      description: 'Invest in U.S. Treasury securities with government guarantee',
      features: ['Zero default risk', 'Backed by U.S. government', 'Highly liquid', 'Predictable returns'],
      imageUrl: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Shield,
      title: 'Safe Investment',
      description: 'One of the safest investment options available',
      features: ['Capital preservation', 'No credit risk', 'Market stability', 'Tax advantages'],
      imageUrl: 'https://images.pexels.com/photos/6802048/pexels-photo-6802048.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: TrendingUp,
      title: 'Competitive Yields',
      description: 'Attractive returns on short-term investments',
      features: ['Current yields up to 5%', 'Better than savings', 'Regular income', 'Reinvestment options'],
      imageUrl: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Clock,
      title: 'Flexible Terms',
      description: 'Choose terms that fit your investment timeline',
      features: ['4-week bills', '13-week bills', '26-week bills', '52-week bills'],
      imageUrl: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <PageTemplate
      title="Treasury Bills"
      subtitle="Invest in government-backed securities with safety and liquidity"
      gradient="from-emerald-600 to-emerald-700"
      imageUrl="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1920"
    >
      <ContentSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              {...feature}
              action={{ label: 'Start Investing', href: config?.userRegistrationUrl || '#' }}
            />
          ))}
        </div>
      </ContentSection>
    </PageTemplate>
  );
}
